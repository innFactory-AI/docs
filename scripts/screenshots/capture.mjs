#!/usr/bin/env node
// Nimmt die Doku-Screenshots aus scenes.json und scenes-*.json auf. Anleitung: scripts/screenshots/README.md
//
//   npm run screenshots -- --only-public
//   npm run screenshots -- --id onboarding-portal-start --lang en
//   SCREENSHOT_STORAGE_STATE=~/.config/companygpt-docs/storage-state.json npm run screenshots
import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { REPO_ROOT, SCRIPT_DIR, assertSafeStatePath, expandHome, isInside, launchBrowser } from './lib.mjs';

const LOCALES = { de: 'de-DE', en: 'en-US' };
// Gefälschtes Mikrofon und Kamera, Freigabe ohne Rückfrage – für Szenen mit "fakeMedia": true.
const FAKE_MEDIA_ARGS = ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'];
const OUTPUT_ROOTS = ['src/content/docs', 'src/assets', 'public'].map((p) => path.join(REPO_ROOT, p));
const CONTENT_TYPES = {
  '.json': 'application/json; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

const HELP = `Aufnahme der Doku-Screenshots

  node scripts/screenshots/capture.mjs [Optionen]

Optionen
  --id <id>           nur diese Szene(n); mehrfach oder kommagetrennt
  --lang <de|en>      nur diese Sprache
  --only-public       nur Szenen mit "public": true (ohne Login)
  --scenes <datei>    nur diese Szenendatei(en); mehrfach möglich
                      (Standard: scenes.json und alle scenes-*.json in scripts/screenshots/)
  --out-dir <ordner>  Bilder dorthin statt ins Repo schreiben (Vorschau)
  --list              Szenen nur auflisten
  --headed            sichtbaren Browser öffnen (Fehlersuche)
  -h, --help          diese Hilfe

Umgebung
  SCREENSHOT_STORAGE_STATE            Sitzungsdatei aus login.mjs (für Szenen ohne "public": true)
  SCREENSHOT_STORAGE_STATE_<KONTO>    Sitzung für Szenen mit "account": "<konto>"
  SCREENSHOT_BASE_URL_<NAME>          überschreibt baseUrls.<name> aus der Szenendatei
  SCREENSHOT_BROWSER_PATH / _CHANNEL  anderer Browser (Standard: Playwright-Chromium, sonst Google Chrome)`;

function parseCli() {
  const { values } = parseArgs({
    options: {
      id: { type: 'string', multiple: true },
      lang: { type: 'string' },
      'only-public': { type: 'boolean', default: false },
      scenes: { type: 'string', multiple: true },
      'out-dir': { type: 'string' },
      list: { type: 'boolean', default: false },
      headed: { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
  });
  return {
    ids: values.id ? values.id.flatMap((v) => v.split(',')).map((v) => v.trim()).filter(Boolean) : null,
    lang: values.lang ?? null,
    onlyPublic: values['only-public'],
    scenesFiles: values.scenes ? values.scenes.map((f) => path.resolve(expandHome(f))) : defaultSceneFiles(),
    outDir: values['out-dir'] ? path.resolve(expandHome(values['out-dir'])) : null,
    list: values.list,
    headed: values.headed,
    help: values.help,
  };
}

/** scenes.json und alle scenes-*.json neben diesem Skript, in fester Reihenfolge. */
function defaultSceneFiles() {
  const extra = readdirSync(SCRIPT_DIR).filter((f) => /^scenes-.+\.json$/.test(f)).sort();
  return ['scenes.json', ...extra].map((f) => path.join(SCRIPT_DIR, f));
}

const envKey = (name) => String(name).toUpperCase().replace(/[^A-Z0-9]+/g, '_');

function loadScenes(files) {
  const seen = new Set();
  const outputs = new Set();
  return files.flatMap((file) => loadSceneFile(file, seen, outputs));
}

function loadSceneFile(file, seen, outputs) {
  const config = JSON.parse(readFileSync(file, 'utf8'));
  const defaults = config.defaults ?? {};
  const baseUrls = { ...(config.baseUrls ?? {}) };
  for (const name of Object.keys(baseUrls)) {
    const override = process.env[`SCREENSHOT_BASE_URL_${envKey(name)}`];
    if (override) baseUrls[name] = override;
  }
  const fixturesDir = path.join(path.dirname(file), 'fixtures');
  return (config.scenes ?? []).map((raw, i) => {
    const scene = {
      colorScheme: 'light',
      public: false,
      ...defaults,
      ...raw,
      viewport: { width: 1440, height: 900, ...defaults.viewport, ...raw.viewport },
    };
    const where = `${path.basename(file)}, Szene #${i + 1} (${scene.id ?? 'ohne id'})`;
    if (!scene.id) throw new Error(`${where}: "id" fehlt.`);
    if (!LOCALES[scene.lang]) throw new Error(`${where}: "lang" muss "de" oder "en" sein.`);
    const key = `${scene.id}/${scene.lang}`;
    if (seen.has(key)) throw new Error(`${where}: id + lang doppelt (${key}).`);
    seen.add(key);
    if (!scene.output || !scene.output.endsWith('.png')) throw new Error(`${where}: "output" muss auf .png enden.`);
    if (outputs.has(scene.output)) throw new Error(`${where}: "output" doppelt (${scene.output}).`);
    outputs.add(scene.output);
    if (scene.selector && scene.clip) throw new Error(`${where}: entweder "selector" oder "clip", nicht beides.`);
    outputPath(scene, null);
    scene.url = resolveUrl(scene, baseUrls, where);
    scene.fixturesDir = fixturesDir;
    return scene;
  });
}

function resolveUrl(scene, baseUrls, where) {
  if (scene.url) return new URL(scene.url).href;
  const base = baseUrls[scene.baseUrl];
  if (!base) throw new Error(`${where}: baseUrl "${scene.baseUrl}" ist nicht unter "baseUrls" definiert.`);
  // Pfad an die Basis anhängen (auch wenn die Basis selbst einen Pfad hat, z. B. https://host/app).
  return new URL(`${base.replace(/\/+$/, '')}/${String(scene.path ?? '').replace(/^\/+/, '')}`).href;
}

function outputPath(scene, outDir) {
  const target = path.resolve(REPO_ROOT, scene.output);
  if (!OUTPUT_ROOTS.some((root) => isInside(root, target))) {
    throw new Error(`"output" muss unter src/content/docs, src/assets oder public liegen: ${scene.output}`);
  }
  return outDir ? path.join(outDir, path.relative(REPO_ROOT, target)) : target;
}

function storageStateFor(scene) {
  if (scene.public) return { file: undefined };
  const name = scene.account ? `SCREENSHOT_STORAGE_STATE_${envKey(scene.account)}` : 'SCREENSHOT_STORAGE_STATE';
  const value = process.env[name];
  if (!value) return { missing: `${name} ist nicht gesetzt` };
  let file;
  try {
    file = assertSafeStatePath(expandHome(value));
  } catch (err) {
    return { missing: err.message };
  }
  if (!existsSync(file)) return { missing: `${name} zeigt auf eine fehlende Datei (${file})` };
  return { file };
}

/** Glob-Muster wie bei page.route, oder ein regulärer Ausdruck in der Form "/…/flags". */
function toMatcher(pattern) {
  const m = /^\/(.+)\/([a-z]*)$/.exec(pattern);
  return m ? new RegExp(m[1], m[2]) : pattern;
}

async function installRoutes(context, scene, fixturesDir) {
  // Playwright prüft zuletzt registrierte Handler zuerst; umgekehrt registriert gewinnt der erste passende Eintrag.
  for (const route of [...(scene.routes ?? [])].reverse()) {
    if (!route.urlPattern) throw new Error('Jede Route braucht "urlPattern".');
    let body;
    let contentType = route.contentType;
    if (route.fixture) {
      const file = path.resolve(fixturesDir, route.fixture);
      if (!isInside(fixturesDir, file)) throw new Error(`Fixture außerhalb von fixtures/: ${route.fixture}`);
      body = readFileSync(file);
      contentType ??= CONTENT_TYPES[path.extname(file).toLowerCase()] ?? 'application/octet-stream';
    } else if (route.json !== undefined) {
      body = JSON.stringify(route.json);
      contentType ??= CONTENT_TYPES['.json'];
    }
    const method = route.method?.toUpperCase();
    await context.route(toMatcher(route.urlPattern), async (r) => {
      if (method && r.request().method() !== method) return r.fallback();
      if (route.abort) return r.abort(route.abort === true ? 'failed' : route.abort);
      return r.fulfill({
        status: route.status ?? 200,
        headers: { 'cache-control': 'no-store', ...(route.headers ?? {}) },
        contentType,
        body: body ?? '',
      });
    });
  }
}

/**
 * Setzt vor jedem Seitenaufbau Design und Sprache so, wie Chat und gemeinsame Addon-Oberfläche sie lesen
 * (localStorage "color-theme" bzw. "lang"), plus optionale weitere Schlüssel der Szene.
 */
async function installPreferences(context, scene, locale) {
  const entries = {};
  if (scene.themeStorageKey !== null) entries[scene.themeStorageKey ?? 'color-theme'] = scene.colorScheme;
  if (scene.langStorageKey !== null) entries[scene.langStorageKey ?? 'lang'] = JSON.stringify(locale);
  Object.assign(entries, scene.localStorage ?? {});
  await context.addInitScript((pairs) => {
    try {
      for (const [k, v] of Object.entries(pairs)) {
        if (v === null) window.localStorage.removeItem(k);
        else window.localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
      }
    } catch {
      // kein localStorage (z. B. sandboxed iframe)
    }
  }, entries);
}

async function runActions(page, actions = [], timeout, fixturesDir) {
  for (const step of actions) {
    const optional = step.optional === true;
    const t = optional ? Math.min(timeout, 3000) : timeout;
    try {
      switch (step.action) {
        case 'click':
          await page.locator(step.selector).first().click({ timeout: t });
          break;
        case 'fill':
          await page.locator(step.selector).first().fill(String(step.value ?? ''), { timeout: t });
          break;
        case 'hover':
          await page.locator(step.selector).first().hover({ timeout: t });
          break;
        case 'press':
          if (step.selector) await page.locator(step.selector).first().press(step.key, { timeout: t });
          else await page.keyboard.press(step.key);
          break;
        case 'upload': {
          const file = path.resolve(fixturesDir, String(step.file ?? ''));
          if (!step.file || !isInside(fixturesDir, file)) throw new Error(`Datei für upload muss in fixtures/ liegen: ${step.file}`);
          await page.locator(step.selector).first().setInputFiles(file, { timeout: t });
          break;
        }
        case 'wait':
          if (step.selector) await page.locator(step.selector).first().waitFor({ state: step.state ?? 'visible', timeout: t });
          else await page.waitForTimeout(step.ms ?? 500);
          break;
        default:
          throw new Error(`Unbekannte Aktion "${step.action}" (erlaubt: click, fill, hover, press, upload, wait).`);
      }
    } catch (err) {
      if (!optional) throw new Error(`Aktion ${JSON.stringify(step)} fehlgeschlagen: ${err.message.split('\n')[0]}`);
    }
  }
}

async function settle(page, scene) {
  // Alle deklarierten Schriften laden, sonst fehlen je nach Timing einzelne Schnitte (Fallback-Schrift im Bild).
  await page
    .evaluate(async () => {
      if (!document.fonts) return;
      await Promise.all([...document.fonts].map((face) => face.load().catch(() => {})));
      await document.fonts.ready;
    })
    .catch(() => {});
  await page
    .waitForFunction(() => [...document.images].every((img) => img.complete), null, { timeout: 5000 })
    .catch(() => {});
  await page.waitForTimeout(scene.settleMs ?? 500);
}

async function computeClip(page, scene) {
  if (scene.clip) return scene.clip;
  if (!scene.selector) return null;
  const box = await page.locator(scene.selector).first().boundingBox();
  if (!box) throw new Error(`Selector "${scene.selector}" ist nicht sichtbar.`);
  const pad = scene.padding ?? 0;
  const scroll = await page.evaluate(() => ({ x: window.scrollX, y: window.scrollY }));
  const x = Math.max(0, box.x + scroll.x - pad);
  const y = Math.max(0, box.y + scroll.y - pad);
  return { x, y, width: box.width + box.x + scroll.x + pad - x, height: box.height + box.y + scroll.y + pad - y };
}

async function capture(browser, scene, { file, outDir }) {
  const locale = scene.locale ?? LOCALES[scene.lang];
  const context = await browser.newContext({
    viewport: scene.viewport,
    deviceScaleFactor: scene.deviceScaleFactor ?? 1,
    colorScheme: scene.colorScheme,
    reducedMotion: 'reduce',
    locale,
    timezoneId: scene.timezoneId ?? 'Europe/Berlin',
    storageState: file,
  });
  const timeout = scene.timeoutMs ?? 30000;
  context.setDefaultTimeout(timeout);
  const page = await context.newPage();
  try {
    await installPreferences(context, scene, locale);
    await installRoutes(context, scene, scene.fixturesDir);
    if (scene.fixedTime) await page.clock.setFixedTime(new Date(scene.fixedTime));
    const response = await page.goto(scene.url, { waitUntil: scene.waitUntil ?? 'load', timeout });
    if (response && response.status() >= 400 && !scene.allowHttpError) {
      throw new Error(`HTTP ${response.status()} für ${scene.url}`);
    }
    if (!scene.public && /login\.microsoftonline\.com|\/login(\?|$)/.test(page.url())) {
      throw new Error(`Umgeleitet auf ${page.url()}: Sitzung abgelaufen? login.mjs erneut ausführen.`);
    }
    if (scene.waitFor) await page.locator(scene.waitFor).first().waitFor({ state: 'visible', timeout });
    if (scene.offline) await context.setOffline(true);
    await runActions(page, scene.actions, timeout, scene.fixturesDir);
    await settle(page, scene);

    const clip = await computeClip(page, scene);
    const target = outputPath(scene, outDir);
    mkdirSync(path.dirname(target), { recursive: true });
    const buffer = await page.screenshot({
      path: target,
      type: 'png',
      clip: clip ?? undefined,
      fullPage: clip ? true : scene.fullPage === true,
      animations: 'disabled',
      caret: 'hide',
      scale: 'device',
      mask: (scene.mask ?? []).map((sel) => page.locator(sel)),
      maskColor: scene.maskColor ?? '#000000',
      style: scene.css,
    });
    return { target, size: pngSize(buffer) };
  } catch (err) {
    const dir = path.join(tmpdir(), 'companygpt-docs-screenshots');
    mkdirSync(dir, { recursive: true });
    const debug = path.join(dir, `${scene.id}-${scene.lang}-fehler.png`);
    await page.screenshot({ path: debug, fullPage: true }).catch(() => {});
    err.message += `\n    Zustand beim Fehler: ${debug} (aktuelle URL: ${page.url()})`;
    throw err;
  } finally {
    await context.close();
  }
}

function pngSize(buf) {
  return `${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}`;
}

async function main() {
  const cli = parseCli();
  if (cli.help) {
    console.log(HELP);
    return 0;
  }
  const scenes = loadScenes(cli.scenesFiles);
  const selected = scenes.filter(
    (s) => (!cli.ids || cli.ids.includes(s.id)) && (!cli.lang || s.lang === cli.lang) && (!cli.onlyPublic || s.public),
  );
  if (cli.ids) {
    const unknown = cli.ids.filter((id) => !scenes.some((s) => s.id === id));
    if (unknown.length) throw new Error(`Unbekannte id: ${unknown.join(', ')}`);
  }
  if (cli.list) {
    for (const s of selected) console.log(`${s.id} [${s.lang}]${s.public ? ' public' : ''}  ${s.url}  ->  ${s.output}`);
    return 0;
  }
  if (selected.length === 0) {
    console.error('Keine Szene passt zu den Filtern.');
    return 1;
  }

  // Die Flags gelten für den ganzen Browser, also für alle Szenen dieses Laufs.
  const args = selected.some((s) => s.fakeMedia) ? FAKE_MEDIA_ARGS : [];
  const browser = await launchBrowser({ headless: !cli.headed, args });
  console.log(`Browser: Chromium ${browser.version()}, ${selected.length} Szene(n)\n`);
  let failed = 0;
  let skipped = 0;
  try {
    for (const scene of selected) {
      const label = `${scene.id} [${scene.lang}]`;
      const state = storageStateFor(scene);
      if (state.missing) {
        skipped++;
        console.log(`ÜBERSPRUNGEN ${label}: ${state.missing} (Login: npm run screenshots:login)`);
        continue;
      }
      try {
        const { target, size } = await capture(browser, scene, { file: state.file, outDir: cli.outDir });
        console.log(`OK     ${label} -> ${path.relative(process.cwd(), target)} (${size})`);
      } catch (err) {
        failed++;
        console.error(`FEHLER ${label}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\nFertig: ${selected.length - failed - skipped} aufgenommen, ${failed} Fehler, ${skipped} übersprungen.`);
  return failed || skipped ? 1 : 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err.message ?? err);
    process.exit(1);
  },
);
