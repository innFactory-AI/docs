---
title: Administration
description: Für IT und Administratoren – Voraussetzungen, Verteilung der Desktop-App, Vorkonfiguration per Intune auf macOS und Windows, Richtlinien für Cowork, Plugins und Cowork-Anweisungen in companyADMIN sowie die Einrichtung der Windows-Sandbox.
---

Diese Seite richtet sich an IT und Administratoren. Sie beschreibt, was in der companyGPT-Umgebung vorhanden sein muss, wie du die App auf verwalteten Geräten vorkonfigurierst und wie du festlegst, was Cowork darf.

## Voraussetzungen

- **Desktop-App freigeschaltet:** innFactory schaltet die Desktop-App für deine Umgebung frei. Danach stellt deine companyGPT-Adresse die Konfiguration für die App bereit (`https://<adresse>/.well-known/companygpt-app.json`), und die bestehende Entra-App von companyGPT erhält die Plattform **Mobile und Desktopanwendungen** mit der Umleitungs-URI `http://localhost`.
- **AI Gateway:** Cowork spricht die Modelle über das [AI Gateway](/de/company-gpt/addons/ai-gateway/) an. Es gelten dieselben Freigaben und Budgets wie im Chat.
- **companyADMIN** (optional): ab Version 3.12.0 für Cowork-Anweisungen, ab 3.15.0 für Plugins, ab 3.16.0 für Richtlinien. Die Seiten **Cowork** und **Plugins** in companyADMIN schaltet innFactory für deine Umgebung frei.

Die App meldet sich als öffentlicher Client (Autorisierungscode mit PKCE, ohne Client-Secret) an der **bestehenden Entra-App** von companyGPT an. Ihre Tokens werden deshalb vom AI Gateway, vom Chat, von companyADMIN und von den companyGPT-Apps ohne weitere Änderungen akzeptiert. Alle Konfigurationswerte sind öffentlich, keiner davon ist geheim.

## Verteilung

- **macOS:** `.dmg` (Apple Silicon). Pilot-Builds sind noch nicht signiert und notarisiert, daher lässt Gatekeeper sie erst nach einer Bestätigung zu. Signierte Builds lassen sich über Intune verteilen.
- **Windows:** Installationsprogramm (`.exe`, x64), installiert pro Benutzer nach `%LOCALAPPDATA%\companyGPT`. Für Cowork wird [Git für Windows](https://git-scm.com/download/win) benötigt.

Updates installiert die App selbst, sie prüft dabei die Signatur des Updates.

## Vorkonfiguration per Intune

Auf verwalteten Geräten liefert die IT die Verbindungswerte. Die Person muss dann nichts eingeben, und die Felder sind in den Einstellungen gesperrt. Werte aus dem Profil haben Vorrang vor lokalen Einstellungen.

| Wert | Bedeutung |
|---|---|
| `chatUrl` | Adresse von companyGPT, z. B. `https://companygpt.firma.de` |
| `gatewayUrl` | Adresse des AI Gateways inklusive `/v1` |
| `entra.tenantId`, `entra.clientId`, `entra.scope` | Entra-Mandant, Client-ID der companyGPT-App und Scope `api://<client-id>/access_user` |
| `allowApiKey` | `false` blendet die Option „Gateway-Key“ aus und ignoriert gespeicherte Keys |
| `policy` | Richtlinien für Cowork (siehe unten) |

### macOS

**Geräte → macOS → Konfiguration → Erstellen → Vorlagen → Einstellungsdatei**, Domänenname `com.innfactory.cgpt-app-pilot`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>chatUrl</key><string>https://companygpt.firma.de</string>
  <key>gatewayUrl</key><string>https://GATEWAY-ADRESSE/v1</string>
  <key>entra</key>
  <dict>
    <key>tenantId</key><string>TENANT-ID</string>
    <key>clientId</key><string>CLIENT-ID</string>
    <key>scope</key><string>api://CLIENT-ID/access_user</string>
  </dict>
  <key>allowApiKey</key><false/>
  <key>policy</key>
  <dict>
    <key>computerUse</key><false/>
  </dict>
</dict>
</plist>
```

### Windows

Die App liest den Registrierungsschlüssel `SOFTWARE\Policies\innFactory\companyAPP`, zuerst unter `HKLM` (pro Gerät), dann unter `HKCU` (pro Benutzer). Pro Wert gewinnt `HKLM`.

| Wert | Typ | Bedeutung |
|---|---|---|
| `chatUrl`, `gatewayUrl` | `REG_SZ` | wie oben |
| `entraTenantId`, `entraClientId`, `entraScope` | `REG_SZ` | der `entra`-Block (nur alle drei zusammen) |
| `allowApiKey` | `REG_DWORD` | `0` blendet die Option „Gateway-Key“ aus |
| Unterschlüssel `Policy` | | die Richtlinien unten (`REG_DWORD` 0/1 für Schalter, `REG_MULTI_SZ` für `mcpAllowlist`) |

Ohne ADMX verteilst du die Werte am einfachsten als PowerShell-Plattformskript in Intune (**Geräte → Skripts und Wartungsaufgaben → Plattformskripts**, als System, 64 Bit):

```powershell
$key = 'HKLM:\SOFTWARE\Policies\innFactory\companyAPP'
New-Item -Path "$key\Policy" -Force | Out-Null
Set-ItemProperty $key chatUrl 'https://companygpt.firma.de'
Set-ItemProperty $key gatewayUrl 'https://GATEWAY-ADRESSE/v1'
Set-ItemProperty $key entraTenantId 'TENANT-ID'
Set-ItemProperty $key entraClientId 'CLIENT-ID'
Set-ItemProperty $key entraScope 'api://CLIENT-ID/access_user'
New-ItemProperty $key allowApiKey -PropertyType DWord -Value 0 -Force | Out-Null
# Richtlinie (optional): eigene MCP-Server und dauerhafte Freigaben abschalten
New-ItemProperty "$key\Policy" ownMcpServers -PropertyType DWord -Value 0 -Force | Out-Null
New-ItemProperty "$key\Policy" lastingApprovals -PropertyType DWord -Value 0 -Force | Out-Null
```

## Richtlinien: was Cowork darf

Du kannst Funktionen von Cowork in companyADMIN (**Konfiguration → Cowork → Richtlinien**) und/oder per Geräteverwaltung abschalten. Alle Schlüssel sind optional, ein fehlender Schlüssel lässt das Standardverhalten. Es gilt pro Schlüssel: **Geräteverwaltung vor companyADMIN vor der Einstellung der Person.** `false` schaltet eine Funktion ab und sperrt sie in der App („Von deinem Unternehmen verwaltet“).

| Schlüssel | Typ | Wirkung, wenn abgeschaltet bzw. gesetzt |
|---|---|---|
| `memory` | Schalter | Kein Gedächtnis, die Einstellung ist gesperrt. |
| `ownMcpServers` | Schalter | Eigene MCP-Server werden nicht geladen, die MCP-Seite ist schreibgeschützt. |
| `ownSkills` | Schalter | Eigene Skills werden nicht geladen, Hinzufügen und Bearbeiten ist ausgeblendet. |
| `computerUse` | Schalter | Der Konnektor „Computer“ ist nicht verfügbar. |
| `browserConnectors` | Schalter | Die Konnektoren „Chrome“ und „Eigener Browser“ sind nicht verfügbar. |
| `web` | Schalter | Keine Websuche und kein Lesen von Webseiten über das AI Gateway. |
| `autoApprove` | Schalter | „Alles erlauben“ ist nicht verfügbar, ebenso „Für diese Aufgabe alles erlauben“. |
| `lastingApprovals` | Schalter | Kein „Für diese Aufgabe immer erlauben“, frühere dauerhafte Freigaben zählen nicht mehr. |
| `mcpAllowlist` | Liste | Eigene MCP-Server (auch aus eigenen Plugins) laden nur, wenn sie einem Eintrag entsprechen: eine URL (gleiches Schema, gleicher Host und Port, Pfad darunter), ein Befehlsname wie `uvx` oder `npx`, ein absoluter Pfad oder `npx:<paket>` / `uvx:<paket>`. Bis zu 100 Einträge. Eine leere Liste erlaubt keinen Server. |

Eigene Plugins schaltest du in companyADMIN in den Plugin-Einstellungen ab („Eigene Plugins erlauben“). Eingeschaltete eigene Plugins unterliegen außerdem `ownSkills`, `ownMcpServers` und `mcpAllowlist`, Plugins des Unternehmens nicht.

Die App setzt die Richtlinien dort durch, wo sie Funktionen lädt, nicht nur in der Oberfläche. Änderungen per Geräteverwaltung übernimmt sie ohne Neustart (spätestens nach fünf Minuten oder wenn das Fenster den Fokus bekommt). Die Richtlinie aus companyADMIN speichert sie zwischen, offline gilt der letzte bekannte Stand.

## Cowork-Anweisungen

Unter **Konfiguration → Cowork** in companyADMIN hinterlegst du Anweisungen, die für jede Cowork-Aufgabe gelten, etwa zu Tonalität, Ablageorten oder internen Richtlinien. Die App lädt sie mit der Microsoft-Anmeldung der Person.

## Plugins des Unternehmens

Unter **Konfiguration → Plugins** in companyADMIN gibst du Plugins aus einem Git-Repository oder Marktplatz frei, pro Rolle oder Gruppe als **Verfügbar**, **Standard an** oder **Vorgegeben**. companyADMIN hält die Plugin-Pakete selbst vor. Die App lädt sie nur von dort und installiert nur Pakete, deren Prüfsumme zur Freigabe passt. Auf den Rechnern ist dafür weder Git noch npm nötig.

## Windows-Sandbox einrichten

Unter Windows laufen die Befehle von Cowork als eigenes lokales Konto (`srt-sandbox`) mit eingeschränkten Rechten und ohne Netzwerk. Die Einrichtung ist einmal pro Gerät mit Administratorrechten nötig. Bis dahin zeigt jede Aufgabe ein gelbes Schild, und Cowork fragt vor jedem ändernden Befehl.

- **Durch die Person:** in einer Aufgabe auf das gelbe Schild klicken und **Einrichten** wählen (einmalige UAC-Abfrage).
- **Durch die IT** (z. B. Intune-Skript, als System oder mit erhöhten Rechten):

```powershell
& "$env:LOCALAPPDATA\companyGPT\pi-agent\extensions\sandbox\vendor\srt-win\x64\srt-win.exe" --srt-win install
```

Der Schritt kann gefahrlos wiederholt werden. Passe den Pfad an, wenn die App an einem anderen Ort installiert ist. Wird das Skript als System ausgeführt, zeigt `$env:LOCALAPPDATA` auf das Profil des Systemkontos. Verwende dann den Pfad im Profil der Person.

:::note
Innerhalb der Windows-Sandbox stehen pro Benutzer installierte Werkzeuge (z. B. `pip install --user`, nvm) nicht zur Verfügung. Die App bringt ihre eigene Python-Umgebung mit.
:::
