---
title: companyDASHBOARD
description: Admin-Dashboard zur Auswertung der CompanyGPT-Nutzung mit KPIs zu aktiven Nutzern, Token-Verbrauch, Agenten-Performance und Tool-Aufrufen.
---

Das companyDASHBOARD ist ein Admin-Dashboard zur Auswertung der CompanyGPT-Nutzung im Unternehmen. Es stellt Metriken zu Nutzeraktivität, Token-Verbrauch, Agenten-Performance und Tool-Aufrufen bereit und unterstützt den Export für weitere Verarbeitung.

## KPIs

Das Dashboard erfasst zehn Metriken, jeweils mit Trendvergleich zur Vorperiode:

**Systemweite Metriken:**
- Anzahl konfigurierter Agenten
- Registrierte Nutzer gesamt
- Aktive Nutzer im gewählten Zeitraum
- Anfragen und Konversationen im gewählten Zeitraum

**Token-Metriken:**
- Input-Tokens und Output-Tokens (getrennt erfasst, Basis für Kostenberechnung)

**Ressourcennutzung:**
- MCP-Tool-Aufrufe
- Websuchen durch KI-Agenten
- Verarbeitete Dateien (PDF, Word u. a.)

![Dashboard KPI-Übersicht](admin-dashboard.png)

## Agenten-Statistik

Die Agenten-Tabelle listet alle KI-Agenten mit folgenden Informationen:

- Anzahl Anfragen und Token-Verbrauch (Input und Output getrennt)
- Verwendetes Modell (z. B. GPT, Gemini, Claude)
- Drill-down auf Agentenebene für detaillierte Auswertungen
- Suchfunktion zur Filterung nach Agent oder Modell

Die Tabelle kann nach Anfragen oder Token-Verbrauch sortiert werden.

## Zeitraumfilter und CSV-Export

Alle Metriken können für beliebige Zeiträume ausgewertet werden. Die Ergebnisse lassen sich als CSV exportieren und weiterverarbeiten.
