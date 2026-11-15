#!/usr/bin/env node
// Nimmt die companyRAG-Oberfläche OHNE Backend und ohne Login auf: die echte Oberfläche (apps/ui des
// companyRAG-Repos) läuft lokal im Vite-Dev-Server, alle API-Aufrufe beantwortet Playwright mit erfundenen
// Daten aus fixtures/rag-local/. Kein Tenant, keine Sitzungsdatei. Siehe README, Abschnitt "Lokale Aufnahme".
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { launchBrowser, REPO_ROOT, SCRIPT_DIR } from './lib.mjs';
import { createDemo } from './fixtures/rag-local/data.mjs';
import { projectExtra } from './fixtures/rag-local/project.mjs';

const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : def;
};
const flag = (name) => args.includes(`--${name}`);
const BASE = (opt('base', process.env.RAG_UI_URL ?? 'http://localhost:5179')).replace(/\/$/, '');
const API = '/companygpt/rag/api';
const scenesFile = path.resolve(opt('scenes', path.join(SCRIPT_DIR, 'scenes-rag-local.json')));
const outDir = opt('out-dir');
const only = (opt('id') ?? '').split(',').filter(Boolean);
const onlyLang = opt('lang');

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
// JWT-förmiger Platzhalter: die UI prüft nur Form und Ablauf, eine Signatur gibt es hier nicht.
const token = () => {
  const now = Math.floor(Date.now() / 1000);
  return `${b64({ alg: 'none' })}.${b64({ sub: 'u-anna', email: 'anna.beispiel@example.com', iat: now, exp: now + 86400 })}.demo`;
};

const spec = JSON.parse(await readFile(scenesFile, 'utf8'));
const defaults = spec.defaults ?? {};
const scenes = spec.scenes
  .map((s) => ({ ...defaults, ...s }))
  .filter((s) => (only.length === 0 || only.includes(s.id)) && (!onlyLang || s.lang === onlyLang));

if (flag('list')) {
  for (const s of scenes) console.log(`${s.id}\t${s.lang}\t${s.output}`);
  process.exit(0);
}

const up = await fetch(`${BASE}/companygpt/rag/`).then((r) => r.ok).catch(() => false);
if (!up) {
  console.error(`Die Oberfläche ist unter ${BASE} nicht erreichbar. Start: siehe README (Abschnitt "Lokale Aufnahme").`);
  process.exit(2);
}

const browser = await launchBrowser({ headless: !flag('headed') });
let failed = 0;
try {
  for (const s of scenes) {
    const locale = s.lang === 'de' ? 'de-DE' : 'en-US';
    const context = await browser.newContext({
      viewport: s.viewport ?? { width: 1440, height: 900 },
      deviceScaleFactor: s.deviceScaleFactor ?? 1,
      colorScheme: 'light',
      locale,
      timezoneId: 'Europe/Berlin',
      extraHTTPHeaders: { 'Accept-Language': locale },
    });
    await context.addInitScript(({ lang, extra }) => {
      try {
        localStorage.setItem('rag_service_language', lang);
        localStorage.setItem('lang', lang);
        localStorage.setItem('color-theme', 'light');
        for (const [k, v] of Object.entries(extra)) localStorage.setItem(k, v);
      } catch { /* kein Speicher */ }
    }, { lang: s.lang, extra: s.localStorage ?? {} });

    const demo = createDemo({ lang: s.lang, state: { capabilities: s.capabilities, extra: projectExtra, scene: s } });
    await context.route((u) => u.pathname.startsWith(API) || (u.origin === BASE && /^\/(api|auth)\//.test(u.pathname)), async (route) => {
      const req = route.request();
      const url = new URL(req.url());
      const p = url.pathname.startsWith(API) ? url.pathname.slice(API.length) : url.pathname;
      if (p === '/auth/refresh' || p === '/api/auth/refresh') return route.fulfill({ json: { accessToken: token(), token: token() } });
      let body;
      try { body = req.postDataJSON() ?? undefined; } catch { body = undefined; }
      const hit = demo(req.method(), p, url.searchParams, body);
      if (hit) return route.fulfill({ status: hit.status ?? 200, json: hit.json });
      if (req.method() !== 'GET') return route.fulfill({ status: 200, json: {} });
      console.warn(`  [unbeantwortet] ${req.method()} ${p}${url.search}`);
      return route.fulfill({ status: 404, json: { error: 'not found' } });
    });

    const page = await context.newPage();
    try {
      await page.goto(`${BASE}/companygpt/rag${s.path}`, { waitUntil: 'load', timeout: 60000 });
      if (s.waitFor) await page.locator(s.waitFor).first().waitFor({ state: 'visible', timeout: 30000 });
      for (const a of s.actions ?? []) {
        const loc = a.selector ? page.locator(a.selector).first() : null;
        if (a.action === 'click') await loc.click({ timeout: 15000 });
        else if (a.action === 'fill') await loc.fill(a.value);
        else if (a.action === 'press') await (loc ?? page.keyboard).press(a.key);
        else if (a.action === 'hover') await loc.hover();
        else if (a.action === 'wait') a.selector ? await loc.waitFor({ state: a.state ?? 'visible', timeout: 20000 }) : await page.waitForTimeout(a.ms ?? 500);
        else throw new Error(`Unbekannte Aktion ${a.action}`);
      }
      if (s.css) await page.addStyleTag({ content: s.css });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(s.settleMs ?? 900);
      const shot = { type: 'png', caret: 'hide', timeout: 60000 };
      if (s.selector) {
        const el = page.locator(s.selector).first();
        const box = await el.boundingBox();
        const pad = s.padding ?? 0;
        shot.clip = { x: Math.max(0, box.x - pad), y: Math.max(0, box.y - pad), width: box.width + 2 * pad, height: box.height + 2 * pad };
      } else if (s.clip) shot.clip = s.clip;
      const buf = await page.screenshot(shot);
      const target = outDir ? path.join(path.resolve(outDir), s.lang, path.basename(s.output)) : path.join(REPO_ROOT, s.output);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, buf);
      console.log(`ok   ${s.id} [${s.lang}] -> ${path.relative(REPO_ROOT, target)}`);
    } catch (err) {
      failed++;
      console.error(`FAIL ${s.id} [${s.lang}]: ${String(err.message).split('\n')[0]}`);
      await page.screenshot({ path: path.join(outDir ? path.resolve(outDir) : '/tmp', `fail-${s.id}-${s.lang}.png`) }).catch(() => {});
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
process.exit(failed ? 1 : 0);
