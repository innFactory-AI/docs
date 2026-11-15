#!/usr/bin/env node
// Öffnet einen sichtbaren Browser, ein Mensch meldet sich an (Entra/MFA), danach wird die Sitzung als
// storageState-Datei gespeichert. Anleitung: scripts/screenshots/README.md
//
//   npm run screenshots:login -- demo
//   npm run screenshots:login -- https://companygpt.innfactory.ai --out ~/.config/companygpt-docs/admin.json
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { createInterface } from 'node:readline/promises';
import { parseArgs } from 'node:util';
import { DEFAULT_STORAGE_STATE, SCRIPT_DIR, assertSafeStatePath, expandHome, launchBrowser } from './lib.mjs';

const HELP = `Login für die Screenshot-Aufnahme

  node scripts/screenshots/login.mjs <basis-url | baseUrl-name> [--out <datei>]

  <basis-url>        z. B. https://companygpt.innfactory.ai
  <baseUrl-name>     ein Name aus "baseUrls" in scenes.json, z. B. demo
  --out <datei>      Ziel der Sitzung (Standard: $SCREENSHOT_STORAGE_STATE oder
                     ${DEFAULT_STORAGE_STATE})

Die Datei enthält Anmelde-Cookies. Sie gehört nie ins Repo und wird mit Rechten 600 geschrieben.`;

function resolveBaseUrl(arg) {
  if (/^https?:\/\//i.test(arg)) return new URL(arg).href;
  const config = JSON.parse(readFileSync(path.join(SCRIPT_DIR, 'scenes.json'), 'utf8'));
  const envName = `SCREENSHOT_BASE_URL_${arg.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}`;
  const url = process.env[envName] ?? config.baseUrls?.[arg];
  if (!url) throw new Error(`"${arg}" ist weder eine URL noch ein Name unter "baseUrls" in scenes.json.`);
  return new URL(url).href;
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      url: { type: 'string' },
      out: { type: 'string' },
      help: { type: 'boolean', short: 'h', default: false },
    },
  });
  const target = values.url ?? positionals[0];
  if (values.help || !target) {
    console.log(HELP);
    return values.help ? 0 : 1;
  }
  const url = resolveBaseUrl(target);
  const out = assertSafeStatePath(
    path.resolve(expandHome(values.out ?? process.env.SCREENSHOT_STORAGE_STATE ?? DEFAULT_STORAGE_STATE)),
  );

  if (process.platform === 'linux' && !process.env.DISPLAY && !process.env.WAYLAND_DISPLAY) {
    throw new Error('Kein Bildschirm (DISPLAY) gefunden. login.mjs braucht ein sichtbares Browserfenster.');
  }

  const browser = await launchBrowser({ headless: false });
  let closed = false;
  browser.on('disconnected', () => {
    closed = true;
  });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto(url);

  console.log(`Browser geöffnet: ${url}`);
  console.log('1. Im Browserfenster mit dem Demo-Konto anmelden (inkl. MFA).');
  console.log('2. Warten, bis die Anwendung vollständig geladen ist; ggf. die Addons einmal öffnen.');
  console.log('3. Browser NICHT schließen, sondern hier Enter drücken.');
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  await rl.question('\nEnter = Sitzung speichern ');
  rl.close();

  if (closed) throw new Error('Der Browser wurde geschlossen, bevor die Sitzung gespeichert war. Bitte erneut starten.');
  const state = await context.storageState({ indexedDB: true });
  await browser.close();

  mkdirSync(path.dirname(out), { recursive: true, mode: 0o700 });
  writeFileSync(out, JSON.stringify(state, null, 2), { mode: 0o600 });
  chmodSync(out, 0o600);

  const hosts = [...new Set(state.cookies.map((c) => c.domain.replace(/^\./, '')))].sort();
  console.log(`\nSitzung gespeichert: ${out}`);
  console.log(`${state.cookies.length} Cookies (${hosts.join(', ')}), ${state.origins.length} Origin(s) mit localStorage.`);
  console.log(`Aufnehmen mit:\n  SCREENSHOT_STORAGE_STATE=${out} npm run screenshots`);
  return 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err.message ?? err);
    process.exit(1);
  },
);
