#!/usr/bin/env node
/**
 * Copies the companyGPT UI theme from @innfactory/companygpt-ui (innFactory/companygpt-sdk, ui/) into
 * src/styles/companygpt-ui/, so the docs paint the same colour roles, fonts and radii as every extension.
 *
 * The SDK repo and its npm package are private and this repo is public, so the build does not depend on them:
 * the files are committed, and this script refreshes them from a pinned SDK release.
 *
 *   node scripts/sync-companygpt-ui.mjs                 refresh from the pinned tag (needs `gh` with access to innFactory)
 *   node scripts/sync-companygpt-ui.mjs --from <ui-dir> refresh from a local checkout, e.g. ../companygpt-sdk/ui
 *   node scripts/sync-companygpt-ui.mjs --check         fail if the committed files differ from the pinned tag
 *
 * To move to a new SDK release, change REF below and run the script.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = 'innFactory/companygpt-sdk';
const REF = 'ui-v2.0.0';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src/styles/companygpt-ui');

const args = process.argv.slice(2);
const check = args.includes('--check');
const fromIndex = args.indexOf('--from');
const from = fromIndex === -1 ? null : args[fromIndex + 1];

/** Paths relative to the SDK's ui/ directory. */
const SOURCES = {
	theme: 'src/styles/librechat-defaults.generated.css',
	fonts: 'src/styles/librechat-fonts.generated.css',
	fontDir: 'src/styles/fonts',
	notices: 'THIRD_PARTY_NOTICES.md',
};

/** @param {string} path @returns {Buffer} */
function read(path) {
	if (from) return readFileSync(join(from, path));
	return execFileSync('gh', ['api', '-H', 'Accept: application/vnd.github.raw', `repos/${REPO}/contents/ui/${path}?ref=${REF}`], {
		maxBuffer: 64 * 1024 * 1024,
	});
}

/** @param {string} path @returns {string[]} */
function list(path) {
	if (from) return readdirSync(join(from, path));
	const out = execFileSync('gh', ['api', `repos/${REPO}/contents/ui/${path}?ref=${REF}`, '--jq', '.[].name'], { encoding: 'utf8' });
	return out.split('\n').filter(Boolean);
}

const source = from ? `local checkout ${from}` : `${REPO}@${REF}`;
const header = (what) =>
	`/*\n * GENERATED FILE — do not edit by hand. ${what}\n * Source: @innfactory/companygpt-ui, ${source}\n * Regenerate: npm run ui:sync   Verify: npm run ui:check\n */\n`;

/** @type {Map<string, Buffer>} file name in OUT → content */
const files = new Map();

// LibreChat paints dark mode with `.dark` on <html>; Starlight with `data-theme="dark"`. Only the selector moves, every
// value stays as the SDK ships it.
const theme = read(SOURCES.theme).toString('utf8');
if (!/^\.dark \{$/m.test(theme)) throw new Error(`${SOURCES.theme}: no top-level ".dark {" block, the selector rewrite needs updating`);
files.set(
	'theme.css',
	Buffer.from(header('LibreChat colour roles, shape and type (light + dark).') + theme.replace(/^\.dark \{$/m, ":root[data-theme='dark'] {"))
);
files.set('fonts.css', Buffer.from(header('LibreChat font faces (Inter, Roboto Mono, Inconsolata).') + read(SOURCES.fonts).toString('utf8')));
files.set('THIRD_PARTY_NOTICES.md', read(SOURCES.notices));
for (const name of list(SOURCES.fontDir)) {
	if (/\.(woff2|txt)$/.test(name)) files.set(`fonts/${name}`, read(`${SOURCES.fontDir}/${name}`));
}

if (check) {
	const stale = [...files].filter(([name, content]) => {
		const path = join(OUT, name);
		return !existsSync(path) || !readFileSync(path).equals(content);
	});
	const extra = existsSync(join(OUT, 'fonts')) ? readdirSync(join(OUT, 'fonts')).filter((f) => !files.has(`fonts/${f}`)) : [];
	if (stale.length || extra.length) {
		for (const [name] of stale) console.error(`✗ ${name} differs from ${source}`);
		for (const name of extra) console.error(`✗ fonts/${name} is not in ${source}`);
		console.error('Run `npm run ui:sync`.');
		process.exit(1);
	}
	console.log(`✓ src/styles/companygpt-ui matches ${source}`);
} else {
	rmSync(OUT, { recursive: true, force: true });
	mkdirSync(join(OUT, 'fonts'), { recursive: true });
	for (const [name, content] of files) writeFileSync(join(OUT, name), content);
	console.log(`✓ src/styles/companygpt-ui ← ${source} (${files.size} files)`);
}
