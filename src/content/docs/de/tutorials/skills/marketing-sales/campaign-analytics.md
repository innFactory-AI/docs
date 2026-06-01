---
title: Kampagnen-Analytics
description: Analysiere Marketingkampagnen mit Multi-Touch-Attribution, Funnel-Konversionsanalyse und ROI-Berechnung – inkl. ROAS, CPA und Benchmark-Vergleichen. Benötigt werden Kampagnendaten je Kanal (Ausgaben, Klicks, Conversions, Umsatz) sowie Funnel-Stufenzahlen (Leads, MQLs, SQLs, Closed-Won).
---

Verwende diesen Skill, wenn du Marketingkampagnen analysierst, Anzeigenperformance auswertete, Attributionsmodelle anwendest, Conversion-Raten analysierst oder Marketing-ROI, ROAS und CPA berechnest. Bereite dafür Kampagnendaten je Kanal vor (Werbeausgaben, Klicks, Conversions, Umsatz) sowie Funnel-Stufenzahlen wie Leads, MQLs, SQLs und Closed-Won.

## Skill

````markdown
---
name: "campaign-analytics"
description: Analyzes campaign performance with multi-touch attribution, funnel conversion analysis, and ROI calculation for marketing optimization. Use when analyzing marketing campaigns, ad performance, attribution models, conversion rates, or calculating marketing ROI, ROAS, CPA, and campaign metrics across channels. Requires campaign data per channel (ad spend, clicks, conversions, revenue) and funnel stage numbers (Leads, MQLs, SQLs, Closed-Won).
---

# Campaign Analytics

Professionelle Kampagnenanalyse mit Multi-Touch-Attribution, Funnel-Konversionsanalyse und ROI-Berechnung. Stelle deine Kampagnendaten im unten beschriebenen Format bereit – die Analyse, Berechnungen und Empfehlungen werden direkt aus deinen Eingaben abgeleitet.

---

## Eingabeformate

### Attribution-Analyse

Beschreibe die Customer Journeys deiner Conversions. Gib für jede Journey die Touchpoints mit Kanal und Zeitpunkt an sowie ob die Journey konvertiert hat und welchen Umsatz sie erzielt hat:

```
Journey-ID: j1
Touchpoints:
  1. Kanal: organic_search | Zeitpunkt: 2025-10-01 | Interaktion: click
  2. Kanal: email         | Zeitpunkt: 2025-10-05 | Interaktion: open
  3. Kanal: paid_search   | Zeitpunkt: 2025-10-08 | Interaktion: click
Konvertiert: ja
Umsatz: 500,00 €
```

### Funnel-Analyse

Gib die Anzahl der Nutzer pro Funnel-Stufe an:

```
Stufen:     Awareness | Interest | Consideration | Intent | Purchase
Nutzeranzahl: 10.000  |   5.200  |     2.800     |  1.400 |    420
```

### Kampagnen-ROI

Gib pro Kampagne folgende Kennzahlen an:

```
Kampagne:     Spring Email Campaign
Kanal:        email
Ausgaben:     5.000 €
Umsatz:       25.000 €
Impressionen: 50.000
Klicks:       2.500
Leads:        300
Kunden:       45
```

---

## Analyse-Workflow

Für eine vollständige Kampagnenbewertung führe die drei Analysen in dieser Reihenfolge durch:

**Schritt 1 — Attribution:** Welche Kanäle treiben Conversions?

Teile deine Journey-Daten mit (s. Eingabeformat oben). Gib an, welches Attributionsmodell verwendet werden soll. Die Analyse berechnet die Kanalgewichtung nach dem gewählten Modell und gibt die Attribution pro Kanal aus.

**Schritt 2 — Funnel:** Wo verlieren wir Interessenten?

Teile deine Funnel-Stufendaten mit. Die Analyse berechnet die stufenweise Konversionsrate, die Drop-off-Quote je Stufe, identifiziert den größten Engpass und gibt die Gesamt-Konversionsrate aus.

**Schritt 3 — ROI:** Welche Kampagnen sind profitabel?

Teile deine Kampagnendaten mit. Die Analyse berechnet ROI, ROAS, CPA, CPL, CAC, CTR und CVR und markiert Kampagnen, die unter Benchmark-Schwellenwerten liegen.

---

## Attributionsmodelle

| Modell | Beschreibung | Geeignet für |
|--------|-------------|--------------|
| First-Touch | 100 % Gewichtung auf ersten Touchpoint | Brand-Awareness-Kampagnen |
| Last-Touch | 100 % Gewichtung auf letzten Touchpoint | Direct-Response-Kampagnen |
| Linear | Gleiche Gewichtung aller Touchpoints | Ausgewogene Multi-Channel-Bewertung |
| Time-Decay | Mehr Gewicht auf zeitlich nahe Touchpoints | Kurze Sales-Zyklen |
| Position-Based | 40/20/40-Split (erster/mittlere/letzter) | Full-Funnel-Marketing |

Gib an, welches Modell (oder welche Modelle im Vergleich) du verwenden möchtest.

---

## Berechnete Metriken

### Funnel-Analyse
- Konversionsrate pro Stufe (Stufe n → Stufe n+1)
- Drop-off-Prozentsatz pro Stufe
- Automatische Engpass-Identifikation
- Gesamt-Funnel-Konversionsrate
- Segmentvergleich (wenn mehrere Segmente angegeben)

### ROI-Berechnung
- **ROI**: `(Umsatz − Ausgaben) / Ausgaben × 100`
- **ROAS**: `Umsatz / Ausgaben`
- **CPA**: `Ausgaben / Kunden`
- **CPL**: `Ausgaben / Leads`
- **CAC**: `Ausgaben / Neukunden`
- **CTR**: `Klicks / Impressionen × 100`
- **CVR**: `Kunden / Leads × 100`
- Markierung von Kampagnen unter Benchmark-Schwellenwerten

---

## Best Practices

1. **Mehrere Attributionsmodelle vergleichen** — Mindestens 3 Modelle analysieren, um den Kanalwert zu triangulieren.
2. **Lookback-Fenster anpassen** — Time-Decay-Halbwertszeit an den durchschnittlichen Sales-Zyklus anpassen.
3. **Funnels segmentieren** — Segmente (Kanal, Kohorte, Geografie) vergleichen, um Performance-Treiber zu identifizieren.
4. **Eigene Historie zuerst benchmarken** — Branchen-Benchmarks liefern Kontext, historische Daten sind relevanter.
5. **ROI-Analyse regelmäßig durchführen** — Wöchentlich bei aktiven Kampagnen, monatlich für strategische Reviews.
6. **Alle Kosten einbeziehen** — Creative-, Tool- und Personalkosten neben den Mediaausgaben berücksichtigen.

---

## Einschränkungen

- Keine Signifikanztests — die Analyse liefert deskriptive Metriken.
- Einheitliche Währung vorausgesetzt — alle Geldwerte müssen in derselben Währung angegeben werden.
- Kein Cross-Device-Tracking — die Attribution basiert ausschließlich auf den bereitgestellten Journey-Daten.

## Verwandte Skills

- **analytics-tracking**: Für das Einrichten von Tracking. Nicht für die Datenanalyse (das ist dieser Skill).
- **ab-test-setup**: Für das Designen von Experimenten auf Basis der Analytics-Erkenntnisse.
- **paid-ads**: Für die Optimierung von Werbeausgaben auf Grundlage der Analytics-Ergebnisse.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
