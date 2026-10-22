#!/usr/bin/env node
// Generates the skill tutorial pages from innFactory-AI/company-ai-stack-skills.
//
// The skills repo is the single source: every skill lives there as
//   <locale>/skills/<category>/<slug>/SKILL.md   (the skill itself, what users upload in companyGPT)
//   <locale>/skills/<category>/<slug>/page.md    (docs wrapper: frontmatter + intro shown above the skill)
// and catalog.json fixes category/skill order, sidebar labels and the index page texts.
//
// Output (gitignored, never edit by hand):
//   src/content/docs/<locale>/tutorials/skills/**   pages + index.md
//   src/generated/skills-sidebar.json               read by astro.config.mjs
//
// Usage:
//   node scripts/sync-skills.mjs                     fetch SKILLS_REF (default: main) from GitHub
//   node scripts/sync-skills.mjs --from ../company-ai-stack-skills   use a local checkout
//   SKILLS_DIR=../company-ai-stack-skills npm run dev                 same, via env
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = 'innFactory-AI/company-ai-stack-skills';
const LOCALES = ['de', 'en'];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function sourceDir() {
	const i = process.argv.indexOf('--from');
	const local = i > -1 ? process.argv[i + 1] : process.env.SKILLS_DIR;
	if (local) return { dir: resolve(local), label: resolve(local), ref: null };

	const ref = process.env.SKILLS_REF || 'main';
	const tmp = mkdtempSync(join(tmpdir(), 'skills-'));
	const url = `https://codeload.github.com/${REPO}/tar.gz/${ref}`;
	// curl + tar honour HTTP(S)_PROXY and exist on every CI runner and dev machine.
	execFileSync('sh', ['-c', `curl -fsSL "${url}" | tar -xz -C "${tmp}" --strip-components=1`], { stdio: 'inherit' });
	return { dir: tmp, label: `${REPO}@${ref}`, ref, cleanup: () => rmSync(tmp, { recursive: true, force: true }) };
}

const errors = [];
const fail = (msg) => errors.push(msg);

function frontmatter(text, file) {
	const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
	if (!m) {
		fail(`${file}: missing YAML frontmatter`);
		return { data: {}, body: text };
	}
	const data = {};
	for (const line of m[1].split('\n')) {
		const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
		if (kv) data[kv[1]] = kv[2].replace(/^(['"])(.*)\1$/, '$2');
	}
	return { data, raw: m[1], body: text.slice(m[0].length) };
}

// Outer fence must be longer than any backtick run inside the skill (min. four, see creating-tutorial).
function fenceFor(text) {
	const longest = Math.max(0, ...(text.match(/`+/g) || []).map((s) => s.length));
	return '`'.repeat(Math.max(4, longest + 1));
}

function main() {
	const src = sourceDir();
	try {
		const catalogFile = join(src.dir, 'catalog.json');
		if (!existsSync(catalogFile)) throw new Error(`${src.label}: catalog.json not found`);
		const catalog = JSON.parse(readFileSync(catalogFile, 'utf8'));
		const blob = (path) => `https://github.com/${REPO}/blob/${src.ref || 'main'}/${path}`;

		const pages = []; // { locale, path, content }
		const sidebar = [];

		for (const cat of catalog.categories) {
			const group = { label: cat.label.de, translations: { en: cat.label.en }, items: [] };
			for (const slug of cat.skills) {
				const labels = {};
				for (const locale of LOCALES) {
					const rel = `${locale}/skills/${cat.id}/${slug}`;
					const skillFile = join(src.dir, rel, 'SKILL.md');
					const pageFile = join(src.dir, rel, 'page.md');
					if (!existsSync(skillFile) || !existsSync(pageFile)) {
						fail(`${rel}: SKILL.md and page.md are both required`);
						continue;
					}
					const skill = readFileSync(skillFile, 'utf8').replace(/\s+$/, '') + '\n';
					const sk = frontmatter(skill, `${rel}/SKILL.md`);
					if (!sk.data.name) fail(`${rel}/SKILL.md: frontmatter needs name`);
					if (!sk.data.description) fail(`${rel}/SKILL.md: frontmatter needs description`);

					const page = frontmatter(readFileSync(pageFile, 'utf8'), `${rel}/page.md`);
					for (const key of ['title', 'description', 'label']) {
						if (!page.data[key]) fail(`${rel}/page.md: frontmatter needs ${key}`);
					}
					labels[locale] = page.data.label;

					// `label` is only for the sidebar; keep the remaining frontmatter as written.
					const fm = page.raw.split('\n').filter((l) => !/^label:/.test(l)).join('\n');
					const fence = fenceFor(skill);
					const source = locale === 'de' ? 'Quelle' : 'Source';
					const content =
						`---\n${fm}\n---\n\n${page.body.trim()}\n\n## Skill\n\n${fence}markdown\n${skill}${fence}\n\n` +
						`<small>${source}: [${REPO}](${blob(`${rel}/SKILL.md`)})</small>\n`;
					pages.push({ locale, path: `${cat.id}/${slug}.md`, label: page.data.label, content });
				}
				group.items.push({ label: labels.de, translations: { en: labels.en }, slug: `tutorials/skills/${cat.id}/${slug}` });
			}
			sidebar.push(group);
		}

		// Folders that exist in the repo but are missing from catalog.json would silently disappear.
		const listed = new Set(catalog.categories.flatMap((c) => c.skills.map((s) => `${c.id}/${s}`)));
		for (const locale of LOCALES) {
			const base = join(src.dir, locale, 'skills');
			if (!existsSync(base)) continue;
			for (const cat of readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory())) {
				for (const s of readdirSync(join(base, cat.name), { withFileTypes: true }).filter((d) => d.isDirectory())) {
					if (!listed.has(`${cat.name}/${s.name}`)) fail(`${locale}/skills/${cat.name}/${s.name}: not listed in catalog.json`);
				}
			}
		}

		if (errors.length) {
			console.error(`skills:sync: ${errors.length} problem(s) in ${src.label}:\n  - ${errors.join('\n  - ')}`);
			process.exit(1);
		}

		for (const locale of LOCALES) {
			const out = join(root, 'src/content/docs', locale, 'tutorials/skills');
			rmSync(out, { recursive: true, force: true });
			const idx = catalog.index[locale];
			let index = `---\ntitle: ${idx.title}\ndescription: ${idx.description}\n---\n\n${idx.intro.trim()}\n`;
			for (const cat of catalog.categories) {
				index += `\n## ${cat.label[locale]}\n\n`;
				for (const slug of cat.skills) {
					const p = pages.find((x) => x.locale === locale && x.path === `${cat.id}/${slug}.md`);
					index += `- [${p.label}](/${locale}/tutorials/skills/${cat.id}/${slug})\n`;
				}
			}
			mkdirSync(out, { recursive: true });
			writeFileSync(join(out, 'index.md'), index);
			for (const p of pages.filter((x) => x.locale === locale)) {
				mkdirSync(dirname(join(out, p.path)), { recursive: true });
				writeFileSync(join(out, p.path), p.content);
			}
		}

		mkdirSync(join(root, 'src/generated'), { recursive: true });
		writeFileSync(join(root, 'src/generated/skills-sidebar.json'), JSON.stringify(sidebar, null, '\t') + '\n');
		console.log(`skills:sync: ${pages.length} pages from ${src.label}`);
	} finally {
		src.cleanup?.();
	}
}

main();
