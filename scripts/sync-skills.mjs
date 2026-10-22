#!/usr/bin/env node
// Generates the skill tutorial pages from innFactory-AI/company-ai-stack-skills.
//
// The skills repo is the single source: every skill lives there as
//   <locale>/skills/<category>/<slug>/SKILL.md   (the skill itself, what users upload in companyGPT)
//   <locale>/pages/<category>/<slug>.md          (docs wrapper: frontmatter + intro shown above the skill)
// and catalog.json fixes category/skill order, sidebar labels and the index page texts.
//
// Every other file in a skill folder (references/, scripts/, …) is bundled with the skill. Such skills also get a
// zip package (folder <name>/ with SKILL.md + bundled files) that companyGPT imports under Skills. The skill folders
// hold nothing docs-only, so companyADMIN Library Sync can import them as they are.
//
// Output (gitignored, never edit by hand):
//   src/content/docs/<locale>/tutorials/skills/**   pages + index.md
//   src/generated/skills-sidebar.json               read by astro.config.mjs
//   public/skill-packages/<locale>/<category>/<slug>.zip
//
// Usage:
//   node scripts/sync-skills.mjs                     fetch SKILLS_REF (default: main) from GitHub
//   node scripts/sync-skills.mjs --from ../company-ai-stack-skills   use a local checkout
//   SKILLS_DIR=../company-ai-stack-skills npm run dev                 same, via env
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { deflateRawSync } from 'node:zlib';
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

// Files of a skill folder relative to it, sorted.
function skillFiles(dir, prefix = '') {
	return readdirSync(join(dir, prefix), { withFileTypes: true })
		.flatMap((e) => {
			const rel = prefix ? `${prefix}/${e.name}` : e.name;
			if (e.name.startsWith('.')) return [];
			if (e.isDirectory()) return skillFiles(dir, rel);
			return [rel];
		})
		.sort();
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
	let c = n;
	for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
	return c >>> 0;
});
function crc32(buf) {
	let c = 0xffffffff;
	for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
	return (c ^ 0xffffffff) >>> 0;
}

// Minimal deflate zip writer (no dependency); fixed timestamp so builds are reproducible.
function zip(entries) {
	const local = [];
	const central = [];
	let offset = 0;
	const DOS_TIME = 0, DOS_DATE = (2026 - 1980) << 9 | 1 << 5 | 1;
	for (const { name, data } of entries) {
		const nameBuf = Buffer.from(name, 'utf8');
		const packed = deflateRawSync(data);
		const crc = crc32(data);
		const head = Buffer.alloc(30);
		head.writeUInt32LE(0x04034b50, 0);
		head.writeUInt16LE(20, 4);
		head.writeUInt16LE(0x0800, 6); // UTF-8 names
		head.writeUInt16LE(8, 8);
		head.writeUInt16LE(DOS_TIME, 10);
		head.writeUInt16LE(DOS_DATE, 12);
		head.writeUInt32LE(crc, 14);
		head.writeUInt32LE(packed.length, 18);
		head.writeUInt32LE(data.length, 22);
		head.writeUInt16LE(nameBuf.length, 26);
		local.push(head, nameBuf, packed);
		const dir = Buffer.alloc(46);
		dir.writeUInt32LE(0x02014b50, 0);
		dir.writeUInt16LE(20, 4);
		dir.writeUInt16LE(20, 6);
		dir.writeUInt16LE(0x0800, 8);
		dir.writeUInt16LE(8, 10);
		dir.writeUInt16LE(DOS_TIME, 12);
		dir.writeUInt16LE(DOS_DATE, 14);
		dir.writeUInt32LE(crc, 16);
		dir.writeUInt32LE(packed.length, 20);
		dir.writeUInt32LE(data.length, 24);
		dir.writeUInt16LE(nameBuf.length, 28);
		dir.writeUInt32LE(offset, 42);
		central.push(dir, nameBuf);
		offset += head.length + nameBuf.length + packed.length;
	}
	const size = central.reduce((n, b) => n + b.length, 0);
	const end = Buffer.alloc(22);
	end.writeUInt32LE(0x06054b50, 0);
	end.writeUInt16LE(entries.length, 8);
	end.writeUInt16LE(entries.length, 10);
	end.writeUInt32LE(size, 12);
	end.writeUInt32LE(offset, 16);
	return Buffer.concat([...local, ...central, end]);
}

const TEXT = {
	de: {
		source: 'Quelle',
		bundled: 'Dieser Skill bringt zusätzliche Dateien mit',
		pkg: 'Paket herunterladen (.zip)',
		hint: 'Lade das Paket in companyGPT unter **Skills** hoch, damit der Agent die zusätzlichen Dateien lesen kann. Der Button „Skill herunterladen“ enthält nur die `SKILL.md`.',
	},
	en: {
		source: 'Source',
		bundled: 'This skill bundles additional files',
		pkg: 'Download package (.zip)',
		hint: 'Upload the package in companyGPT under **Skills** so the agent can read the additional files. The "Download Skill" button only contains `SKILL.md`.',
	},
};

function main() {
	const src = sourceDir();
	try {
		const catalogFile = join(src.dir, 'catalog.json');
		if (!existsSync(catalogFile)) throw new Error(`${src.label}: catalog.json not found`);
		const catalog = JSON.parse(readFileSync(catalogFile, 'utf8'));
		const blob = (path) => `https://github.com/${REPO}/blob/${src.ref || 'main'}/${path}`;

		const pages = []; // { locale, path, label, content }
		const packages = []; // { file, data }
		const sidebar = [];

		for (const cat of catalog.categories) {
			const group = { label: cat.label.de, translations: { en: cat.label.en }, items: [] };
			for (const slug of cat.skills) {
				const labels = {};
				for (const locale of LOCALES) {
					const rel = `${locale}/skills/${cat.id}/${slug}`;
					const skillFile = join(src.dir, rel, 'SKILL.md');
					const pageRel = `${locale}/pages/${cat.id}/${slug}.md`;
					const pageFile = join(src.dir, pageRel);
					if (!existsSync(skillFile) || !existsSync(pageFile)) {
						fail(`${rel}/SKILL.md and ${pageRel} are both required`);
						continue;
					}
					const skill = readFileSync(skillFile, 'utf8').replace(/\s+$/, '') + '\n';
					const sk = frontmatter(skill, `${rel}/SKILL.md`);
					if (!sk.data.name) fail(`${rel}/SKILL.md: frontmatter needs name`);
					if (!sk.data.description) fail(`${rel}/SKILL.md: frontmatter needs description`);

					const page = frontmatter(readFileSync(pageFile, 'utf8'), pageRel);
					for (const key of ['title', 'description', 'label']) {
						if (!page.data[key]) fail(`${pageRel}: frontmatter needs ${key}`);
					}
					labels[locale] = page.data.label;

					// `label` is only for the sidebar; keep the remaining frontmatter as written.
					const fm = page.raw.split('\n').filter((l) => !/^label:/.test(l)).join('\n');
					const fence = fenceFor(skill);
					const t = TEXT[locale];
					let content = `---\n${fm}\n---\n\n${page.body.trim()}\n\n`;

					const bundled = skillFiles(join(src.dir, rel)).filter((f) => f !== 'SKILL.md');
					if (bundled.length) {
						const pkg = `/skill-packages/${locale}/${cat.id}/${slug}.zip`;
						packages.push({
							file: join(root, 'public', pkg),
							data: zip(['SKILL.md', ...bundled].map((f) => ({ name: `${sk.data.name}/${f}`, data: readFileSync(join(src.dir, rel, f)) }))),
						});
						const list = bundled.map((f) => `- [\`${f}\`](${blob(`${rel}/${f}`)})`).join('\n');
						content += `:::tip[${t.bundled}]\n${list}\n\n**[${t.pkg}](${pkg})**. ${t.hint}\n:::\n\n`;
					}

					content +=
						`## Skill\n\n${fence}markdown\n${skill}${fence}\n\n` +
						`<small>${t.source}: [${REPO}](${blob(`${rel}/SKILL.md`)})</small>\n`;
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
			const pagesDir = join(src.dir, locale, 'pages');
			if (!existsSync(pagesDir)) continue;
			for (const cat of readdirSync(pagesDir, { withFileTypes: true }).filter((d) => d.isDirectory())) {
				for (const f of readdirSync(join(pagesDir, cat.name)).filter((n) => n.endsWith('.md'))) {
					if (!listed.has(`${cat.name}/${f.slice(0, -3)}`)) fail(`${locale}/pages/${cat.name}/${f}: not listed in catalog.json`);
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

		rmSync(join(root, 'public/skill-packages'), { recursive: true, force: true });
		for (const p of packages) {
			mkdirSync(dirname(p.file), { recursive: true });
			writeFileSync(p.file, p.data);
		}

		mkdirSync(join(root, 'src/generated'), { recursive: true });
		writeFileSync(join(root, 'src/generated/skills-sidebar.json'), JSON.stringify(sidebar, null, '\t') + '\n');
		console.log(`skills:sync: ${pages.length} pages, ${packages.length} packages from ${src.label}`);
	} finally {
		src.cleanup?.();
	}
}

main();
