---
title: companyCODE
description: companyCODE ist der companyGPT-Agent im Terminal für Entwicklerinnen und Entwickler – mit derselben Microsoft-Anmeldung, den Modellen des AI Gateways und den Skills deines Unternehmens.
---

**companyCODE** ist das Gegenstück zu Cowork für die Softwareentwicklung: ein KI-Agent im Terminal, der in deinem Projektordner arbeitet. Er nutzt dieselbe Microsoft-Anmeldung, die Modelle des [AI Gateways](/de/company-gpt/addons/ai-gateway/) deines Unternehmens und die [Skills](/de/company-gpt/skills/) aus dem Chat. Die Office-Funktionen von Cowork hat er bewusst nicht.

## Installation

companyCODE kommt mit der Desktop-App. Beim ersten Start richtet die App den Befehl `companycode` in einem Ordner ein, der in deinem `PATH` liegt. Gibt es keinen passenden Ordner, legt die App `~/.local/bin` an und ergänzt deine Shell-Konfiguration. Öffne danach ein neues Terminalfenster. Updates der App aktualisieren companyCODE mit.

Unter **Einstellungen → companyCODE im Terminal** siehst du, wo der Befehl liegt, und entfernst oder installierst ihn neu.

## Verwendung

```sh
companycode login companygpt.firma.de   # einmalig: Anmeldung im Browser (über SSH: Gerätecode)
cd mein-projekt && companycode          # Agent in diesem Ordner starten
companycode -c                          # letzte Sitzung in diesem Ordner fortsetzen (-r: eine auswählen)
companycode -p "Erkläre src/main.rs"    # einmalige Antwort ohne interaktive Oberfläche
companycode status | sync | logout      # Anmeldung prüfen, Skills abgleichen, abmelden
```

`companycode --help` zeigt alle Befehle.

## Cowork und companyCODE im Vergleich

| | Cowork (Desktop-App) | companyCODE (Terminal) |
|---|---|---|
| **Oberfläche** | Eigene Oberfläche in der App | Interaktive Oberfläche im Terminal |
| **Anmeldung** | Microsoft | Microsoft, über SSH oder ohne Bildschirm per Gerätecode |
| **Modelle und Skills** | AI Gateway, Skills deines Unternehmens | dieselben |
| **Befehle** | In der Sandbox, ohne Internet, mit Freigaben | Direkt und mit Internet (Builds, Tests, Paketmanager) |
| **Office, Artefakte, Quick-Ask, Diktat** | ja | nein, bewusst |

:::caution
companyCODE führt Befehle **ohne Sandbox** und mit Internetzugang aus, wie andere Coding-Agenten auch. Nutze es nur in Projektordnern, denen du vertraust.
:::

Projektdateien wie `AGENTS.md` oder `CLAUDE.md`, eigene Skills unter `~/.agents/skills/` und MCP-Server (`companycode mcp …`) funktionieren wie gewohnt.
