// Gemeinsame Helfer für capture.mjs und login.mjs.
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

export const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(SCRIPT_DIR, '..', '..');

/** Standardablage der Login-Sitzung: bewusst außerhalb des Repos. */
export const DEFAULT_STORAGE_STATE = path.join(homedir(), '.config', 'companygpt-docs', 'storage-state.json');

export function expandHome(p) {
  if (!p) return p;
  if (p === '~') return homedir();
  if (p.startsWith('~/')) return path.join(homedir(), p.slice(2));
  return p;
}

/** true, wenn `target` innerhalb von `dir` liegt (oder gleich ist). */
export function isInside(dir, target) {
  const rel = path.relative(dir, target);
  return rel === '' || (rel !== '..' && !rel.startsWith(`..${path.sep}`) && !path.isAbsolute(rel));
}

/**
 * Eine Sitzungsdatei darf nur außerhalb des Repos oder unter scripts/screenshots/.auth/ liegen.
 */
export function assertSafeStatePath(file) {
  const abs = path.resolve(file);
  if (!isInside(REPO_ROOT, abs)) return abs;
  const rel = path.relative(REPO_ROOT, abs).split(path.sep).join('/');
  if (!rel.startsWith('scripts/screenshots/.auth/')) {
    throw new Error(
      `Die Sitzungsdatei ${rel} läge außerhalb von scripts/screenshots/.auth/ im Repo. ` +
        `Nutze einen Pfad außerhalb des Repos (Standard: ${DEFAULT_STORAGE_STATE}) oder scripts/screenshots/.auth/.`,
    );
  }
  return abs;
}

/**
 * Startet Chromium. Reihenfolge:
 * 1. SCREENSHOT_BROWSER_PATH (ausführbare Datei), 2. SCREENSHOT_BROWSER_CHANNEL (z. B. "chrome"),
 * 3. der zu playwright-core passende Chromium-Build aus ~/.cache/ms-playwright,
 * 4. ein installiertes Google Chrome (Kanal "chrome"). Es wird nie etwas heruntergeladen.
 */
export async function launchBrowser({ headless = true, args = [] } = {}) {
  const base = { headless, args };
  const exe = expandHome(process.env.SCREENSHOT_BROWSER_PATH);
  if (exe) return chromium.launch({ ...base, executablePath: exe });
  const channel = process.env.SCREENSHOT_BROWSER_CHANNEL;
  if (channel) return chromium.launch({ ...base, channel });
  try {
    return await chromium.launch(base);
  } catch (err) {
    if (!/Executable doesn't exist|playwright install/i.test(String(err?.message))) throw err;
    for (const candidate of ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable']) {
      if (existsSync(candidate)) {
        console.warn(`Hinweis: Playwright-Chromium fehlt, nutze ${candidate}.`);
        return chromium.launch({ ...base, executablePath: candidate });
      }
    }
    try {
      return await chromium.launch({ ...base, channel: 'chrome' });
    } catch {
      throw new Error(
        'Kein Browser gefunden. Setze SCREENSHOT_BROWSER_PATH auf eine Chrome/Chromium-Datei ' +
          'oder installiere den passenden Build mit "npx playwright-core install chromium".',
      );
    }
  }
}
