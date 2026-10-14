# Doku-Screenshots per Playwright

Die Screenshots der Doku werden nicht von Hand gemacht, sondern per Kommando aus der echten Anwendung aufgenommen. Welche Seite in welchem Zustand und mit welchem Ausschnitt aufgenommen wird, steht in `scenes.json`. Nach einem Release genügt ein Befehl, und alle Bilder sind wieder aktuell.

| Datei | Zweck |
|---|---|
| `capture.mjs` | nimmt die Szenen aus `scenes.json` auf |
| `login.mjs` | einmalige Anmeldung im sichtbaren Browser, speichert die Sitzung (`storageState`) |
| `lib.mjs` | gemeinsame Helfer (Browserstart, Pfadprüfung) |
| `scenes.json` | Szenenliste |
| `fixtures/` | erfundene JSON-Antworten (oder Skripte) für gestellte Zustände |

## Einrichtung

```bash
npm install
```

Installiert `playwright-core` 1.62.1 (devDependency). Es wird **kein** Browser heruntergeladen. Genutzt wird, in dieser Reihenfolge:

1. `SCREENSHOT_BROWSER_PATH` (Pfad zu einer Chrome-/Chromium-Datei) bzw. `SCREENSHOT_BROWSER_CHANNEL` (z. B. `chrome`),
2. der zu `playwright-core` 1.62.1 passende Chromium-Build (Chromium 151, Revision 1234 unter `~/.cache/ms-playwright/`),
3. sonst ein installiertes Google Chrome.

Fehlt beides, installiert `npx playwright-core install chromium` den passenden Build. Chrome und Playwright-Chromium rendern minimal unterschiedlich: Für einen Satz Bilder immer denselben Browser verwenden. Wer `playwright-core` aktualisiert, braucht den dazu passenden Chromium-Build.

## Kurzfassung

```bash
# öffentliche Szenen (ohne Login)
npm run screenshots -- --only-public

# einmal anmelden (sichtbarer Browser), Sitzung landet in ~/.config/companygpt-docs/storage-state.json
npm run screenshots:login -- demo

# alles aufnehmen
SCREENSHOT_STORAGE_STATE=~/.config/companygpt-docs/storage-state.json npm run screenshots
```

## Login

```bash
npm run screenshots:login -- demo                       # Name aus "baseUrls" in scenes.json
npm run screenshots:login -- https://companygpt.innfactory.ai
npm run screenshots:login -- demo --out ~/.config/companygpt-docs/superadmin.json
```

1. Es öffnet sich ein Browserfenster. Mit dem **Demo-Konto** anmelden (Entra, MFA).
2. Warten, bis die Anwendung vollständig geladen ist. Bei Bedarf die benötigten Addons einmal öffnen, damit auch deren Anmeldung in der Sitzung steckt.
3. Das Fenster **nicht** schließen, sondern im Terminal Enter drücken.

Die Sitzung wird mit Rechten `600` gespeichert, standardmäßig unter `~/.config/companygpt-docs/storage-state.json` (oder `--out`, oder `$SCREENSHOT_STORAGE_STATE`).

> [!CAUTION]
> Die Datei enthält Anmelde-Cookies und gehört **nie** ins Repo und in keinen Chat. `.gitignore` deckt `scripts/screenshots/.auth/`, `*.storage-state.json` und `storage-state.json` ab; `login.mjs` und `capture.mjs` verweigern andere Pfade innerhalb des Repos.

`login.mjs` braucht einen Bildschirm, also auf dem eigenen Rechner ausführen. Ist die Sitzung abgelaufen, meldet `capture.mjs` „Umgeleitet auf … Sitzung abgelaufen?“: dann erneut anmelden.

**Mehrere Konten** (z. B. Admin und Superadmin): pro Konto eine eigene Sitzungsdatei anlegen und in der Szene `"account": "superadmin"` setzen. `capture.mjs` liest dann `SCREENSHOT_STORAGE_STATE_SUPERADMIN` (Name in Großbuchstaben, Sonderzeichen werden zu `_`).

## Aufnahme

```bash
npm run screenshots                                   # alle Szenen
npm run screenshots -- --only-public                  # nur Szenen mit "public": true
npm run screenshots -- --id onboarding-portal-start   # eine Szene (beide Sprachen), mehrfach oder kommagetrennt
npm run screenshots -- --lang en                      # nur Englisch
npm run screenshots -- --list                         # nur auflisten
npm run screenshots -- --id <id> --out-dir /tmp/vorschau   # Vorschau, ohne Dateien im Repo zu ändern
npm run screenshots -- --id <id> --headed             # sichtbarer Browser zur Fehlersuche
npm run screenshots -- --scenes ~/privat/scenes.json  # eigene Szenendatei außerhalb des Repos
```

Szenen ohne `"public": true` werden ohne Sitzungsdatei übersprungen. Der Exit-Code ist `1`, sobald eine Szene fehlschlägt oder übersprungen wird. Bei einem Fehler legt das Skript ein Bild des Zustands unter `<tmp>/companygpt-docs-screenshots/` ab (Pfad steht in der Meldung). Dieses Bild kann echte Daten zeigen und bleibt lokal.

**Jedes Bild vor dem Commit ansehen:** vollständig geladen, keine Banner oder Overlays, keine echten Namen oder Adressen, richtige Sprache, helles Design.

Öffentliche Basis-URLs stehen in `scenes.json` unter `baseUrls`. Eine andere Umgebung (z. B. ein Test-Tenant) wird **nicht** in `scenes.json` eingetragen, sondern per Umgebungsvariable gesetzt: `SCREENSHOT_BASE_URL_DEMO=https://… npm run screenshots`. Das gilt auch für `login.mjs`.

## Aufbau von `scenes.json`

```json
{
  "baseUrls": { "demo": "https://companygpt.innfactory.ai" },
  "defaults": { "viewport": { "width": 1440, "height": 900 }, "colorScheme": "light", "public": false },
  "scenes": [ { "id": "…", "lang": "de", "baseUrl": "demo", "path": "/…", "output": "src/content/docs/de/…/bild.png" } ]
}
```

`defaults` gilt für jede Szene, Angaben in der Szene haben Vorrang.

| Feld | Bedeutung |
|---|---|
| `id` | Name der Szene. DE und EN nutzen dieselbe `id`; `id` + `lang` muss eindeutig sein. |
| `lang` | `de` oder `en`. Setzt Browser-Sprache (`de-DE`/`en-US`, inkl. `Accept-Language`) und `localStorage.lang`. |
| `note` | freier Kommentar, wird ignoriert |
| `url` **oder** `baseUrl` + `path` | absolute URL bzw. Name aus `baseUrls` plus Pfad |
| `public` | `true` = ohne Login aufnehmbar; die Sitzungsdatei wird dann nie geladen |
| `account` | wählt `SCREENSHOT_STORAGE_STATE_<ACCOUNT>` statt `SCREENSHOT_STORAGE_STATE` |
| `viewport`, `deviceScaleFactor` | Fenstergröße in CSS-Pixeln (Standard 1440×900) und Pixeldichte (Standard 1) |
| `colorScheme` | `light` (Standard) oder `dark`; setzt auch `localStorage["color-theme"]` |
| `locale`, `timezoneId` | überschreiben die Sprache aus `lang` bzw. die Zeitzone (Standard `Europe/Berlin`) |
| `waitUntil` | Ladeereignis für den Seitenaufruf: `load` (Standard), `domcontentloaded`, `networkidle` |
| `waitFor` | Selector, der sichtbar sein muss, bevor es weitergeht |
| `offline` | `true`: nach dem Laden wird das Netz abgeschaltet (vor den `actions`) |
| `actions` | Schritte vor der Aufnahme, siehe unten |
| `routes` | gestellte Antworten, siehe [Zustände per Mock](#zustände-per-mock) |
| `localStorage` | weitere Schlüssel, die vor jedem Seitenaufbau gesetzt werden (`null` löscht) |
| `themeStorageKey`, `langStorageKey` | Schlüssel für Design/Sprache (Standard `color-theme`/`lang`); `null` schaltet das Setzen ab |
| `fixedTime` | feste Uhrzeit, z. B. `"2026-10-01T10:00:00+02:00"`, damit „vor 2 Stunden“ stabil bleibt (kann Anmelde-Logik stören) |
| `selector` + `padding` | Ausschnitt = dieses Element plus Rand in Pixeln |
| `clip` | Ausschnitt `{ "x", "y", "width", "height" }` in Seitenkoordinaten (CSS-Pixel) |
| `fullPage` | ganze Seite statt Fenster (nur ohne `selector`/`clip`) |
| `mask`, `maskColor` | Selectoren, die im Bild geschwärzt werden (Standardfarbe `#000000`) |
| `css` | CSS nur für den Moment der Aufnahme, z. B. um Banner auszublenden |
| `settleMs`, `timeoutMs` | Wartezeit vor dem Bild (Standard 500 ms) bzw. Zeitlimit (Standard 30 s) |
| `allowHttpError` | Seitenaufruf mit Status ≥ 400 nicht als Fehler werten |
| `output` | Ziel relativ zum Repo, unter `src/content/docs`, `src/assets` oder `public`, endet auf `.png` |

Vor jedem Bild wartet das Skript, bis alle Schriften und Bilder geladen sind. Animationen sind aus, der Textcursor ist ausgeblendet. Ohne `selector`/`clip`/`fullPage` wird genau das Fenster aufgenommen.

### Aktionen

| Aktion | Felder | Beispiel |
|---|---|---|
| `click` | `selector` | `{ "action": "click", "selector": "role=button[name=\"Design\"]" }` |
| `fill` | `selector`, `value` | `{ "action": "fill", "selector": "textarea", "value": "Fasse den Bericht zusammen" }` |
| `hover` | `selector` | `{ "action": "hover", "selector": "text=Alle Apps" }` |
| `press` | `key`, optional `selector` | `{ "action": "press", "key": "Escape" }` |
| `wait` | `ms` **oder** `selector` (+ `state`: `visible`/`hidden`) | `{ "action": "wait", "selector": "[role=dialog]" }` |

Mit `"optional": true` wird ein Schritt übersprungen, wenn das Element nach 3 Sekunden nicht da ist (z. B. ein Hinweis, der nur manchmal erscheint).

Selectors folgen der Playwright-Syntax: CSS, `text=…`, `role=button[name="…"]`. Rollen, Beschriftungen und `aria-label` sind stabiler als CSS-Klassen. Selectors findet man in den Entwicklertools oder mit `npx playwright-core codegen --load-storage=<sitzungsdatei> <url>` (braucht einen Bildschirm).

## Neue Szene ergänzen

1. Seite im Demo-Tenant öffnen und klären: Welcher Zustand, welcher Ausschnitt, welche Elemente müssen geschwärzt werden?
2. Je eine Szene für `de` und `en` anlegen: gleiche `id`, eigenes `output` neben der jeweiligen Doku-Seite.
3. Vorschau aufnehmen und ansehen: `npm run screenshots -- --id <id> --out-dir /tmp/vorschau`.
4. Passt alles, ohne `--out-dir` aufnehmen und das Bild in der Seite einbinden (`![Beschreibung](./bild.png)`).
5. Nur Szenen einchecken, deren Selectors wirklich gegen die Anwendung geprüft sind.

## Zustände per Mock

Viele Zustände lassen sich im Demo-Tenant nicht ohne Weiteres herstellen. Dafür beantwortet `routes` einzelne Anfragen mit gestellten Daten. Es ändert nur, was der Browser sieht; im Tenant wird nichts geschrieben.

```json
"routes": [
  { "urlPattern": "**/api/collections*", "fixture": "rag-sammlungen-leer.json" },
  { "urlPattern": "**/api/settings", "method": "POST", "status": 500, "json": { "error": "Interner Fehler" } },
  { "urlPattern": "/\\/api\\/files\\/[0-9a-f]+$/", "abort": true }
]
```

| Feld | Bedeutung |
|---|---|
| `urlPattern` | Glob wie bei Playwright (`**/api/…`) oder regulärer Ausdruck in der Form `"/…/flags"` |
| `fixture` | Datei aus `fixtures/` (neben der Szenendatei); `.json`, `.js`, `.html`, `.txt`, `.svg`, `.png` bekommen den passenden Content-Type |
| `json` | Antwort direkt in der Szene statt Datei |
| `status`, `headers`, `contentType` | Status (Standard 200) und Kopfzeilen der Antwort |
| `method` | nur diese HTTP-Methode abfangen, andere laufen normal weiter |
| `abort` | `true` oder ein Fehlercode wie `"internetdisconnected"`: Anfrage scheitert |

Der erste passende Eintrag gewinnt. So entsteht eine Fixture:

1. In den Entwicklertools (Netzwerk) die Anfrage finden, die die Daten für die Ansicht liefert.
2. Antwort kopieren, **alle** Inhalte durch erfundene, neutrale Werte ersetzen (Namen, E-Mails, IDs, Dateinamen) und als `fixtures/<addon>-<zustand>.json` speichern.
3. In der Szene per `routes` einhängen und Vorschau aufnehmen.

Typische Zustände:

- **Offline:** `"offline": true`, danach mit `{ "action": "wait", "selector": "…" }` auf den Hinweis warten. Alternativ einzelne Anfragen mit `"abort": "internetdisconnected"` scheitern lassen.
- **Kein Zugriff:** am besten ein eigenes Demo-Konto ohne die nötige Gruppe (eigene Sitzung über `account`). Sonst die Anfrage, die die Berechtigung prüft, mit `"status": 403` beantworten.
- **Fehler:** die Daten-Anfrage mit `"status": 500` oder `"abort": true` beantworten.
- **Leerzustand:** Fixture mit leerer Liste.
- **Superadmin und Admin:** am besten zwei Demo-Konten mit den jeweiligen Rollen und zwei Sitzungen (`"account": "superadmin"` / `"account": "admin"`). Mocks nur, wenn kein zweites Konto verfügbar ist: dann die Anfrage abfangen, die Rolle und Rechte des angemeldeten Kontos liefert.

Aktionen wie „Speichern“ oder „Löschen“ in einer echten Sitzung ändern den Demo-Tenant. Solche Schritte vermeiden oder die zugehörige Anfrage per `routes` (mit `method`) abfangen.

## Sprache und Design

- **DE und EN getrennt aufnehmen.** Jede Szene gibt es zweimal, mit `lang` `de` und `en`, und die Bilder liegen getrennt unter `src/content/docs/de/…` und `src/content/docs/en/…`.
- Das Skript setzt die Browser-Sprache und `localStorage.lang`. Daran orientieren sich der Chat und die gemeinsame Addon-Oberfläche. Speichert eine App ihre Sprache selbst (Kontomenü → Sprache), den Schlüssel per `localStorage` in der Szene setzen oder die Sprache per `actions` umschalten. Im fertigen Bild die Sprache prüfen.
- **Design hell:** `colorScheme` bleibt `light`. Das Skript setzt zusätzlich `localStorage["color-theme"]`, damit eine in der Sitzung gespeicherte dunkle Einstellung nicht durchschlägt.
- Das Onboarding-Portal hat nur eine englische Oberfläche (keine Sprachwahl; Browser-Sprache und URL-Parameter ändern nichts). DE- und EN-Bild sind dort gleich.

## Datenschutz und öffentliches Repo

Repo und Website sind öffentlich.

- Aufnahmen nur im **Demo-Tenant** (`companygpt.innfactory.ai`) mit **neutralen Demo-Daten** und einem Demo-Konto mit neutralem Namen.
- **Keine echten Personen- oder Kundendaten**: keine echten Namen, E-Mail-Adressen, Kunden-, Tenant- oder Firmennamen, auch nicht in Chat-Verläufen, Dateinamen oder Listen. Vor einer Aufnahmerunde die Demo-Daten prüfen.
- Was nicht neutral ist (z. B. die E-Mail-Adresse im Kontomenü), mit `mask` schwärzen.
- Hostnamen anderer Umgebungen nie in `scenes.json` eintragen, sondern `SCREENSHOT_BASE_URL_<NAME>` oder eine private Szenendatei (`--scenes`) außerhalb des Repos nutzen.
- Fixtures enthalten ausschließlich erfundene Daten.

## Office-Add-in (companyM365)

Das Add-in läuft in Office und braucht `Office.js`. Zwei Wege:

1. **Office im Web** (empfohlen): Outlook oder Word im Browser öffnen, mit dem Demo-Konto anmelden (`login.mjs` mit der Office-URL, eigene Sitzung über `account`), das Add-in per `actions` öffnen und den Aufgabenbereich per `selector` (das iframe des Add-ins) ausschneiden. So zeigt das Bild das echte Verhalten.
2. **Aufgabenbereich allein mit Office.js-Stub**: die URL des Aufgabenbereichs direkt öffnen, schmaler `viewport` (z. B. 360×800), und die von Microsoft geladene `office.js` per Route durch einen Stub aus `fixtures/` ersetzen:

   ```json
   "routes": [ { "urlPattern": "**/office.js", "fixture": "office-stub.js" } ]
   ```

   ```js
   // fixtures/office-stub.js – Skizze, um die vom Add-in genutzten APIs erweitern
   const info = { host: 'Outlook', platform: 'OfficeOnline' };
   window.Office = {
     HostType: { Outlook: 'Outlook', Word: 'Word', Excel: 'Excel', PowerPoint: 'PowerPoint' },
     PlatformType: { OfficeOnline: 'OfficeOnline' },
     onReady: (cb) => { cb?.(info); return Promise.resolve(info); },
     context: { diagnostics: { host: 'Outlook', platform: 'OfficeOnline' }, displayLanguage: 'de-DE' },
   };
   ```

   Der Stub liefert nur, was er nachbildet. Das Bild deshalb mit dem echten Add-in in Office vergleichen.

## Bekannte Grenzen

- Szenen hinter der Anmeldung sind noch nicht angelegt; sie werden nach der Anleitung oben ergänzt, sobald ihre Selectors am Demo-Tenant geprüft sind.
- `storageState` speichert Cookies, `localStorage` und IndexedDB, aber kein `sessionStorage`. Apps, die ihre Anmeldung nur dort halten, melden sich beim Aufruf still neu an oder leiten auf die Anmeldung um.
- Pixelgleich sind Bilder nur mit demselben Browser-Build und derselben Pixeldichte.
