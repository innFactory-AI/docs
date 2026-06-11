---
title: Kanalökonomie
description: Berechne vollständig belastete Kosten pro Kanal, Channel-ROI unter drei Perspektiven und optimiere den Channel-Mix zwischen direktem und partnergeführtem Vertrieb. Bereite pro Kanal Zahlen zu CAC, ACV, Support-Kosten, Partnerrabatten, Churn-Rate und Deal-Velocity vor.
---

Verwende diesen Skill für das quartalsweise Channel-Review, wenn du wissen möchtest, welcher Kanal nach Abzug aller Kosten profitabel ist – inklusive CAC, Support, Partnerrabatten, Deal-Velocity-Unterschieden und Retention-Differenzial. Bereite pro Kanal Zahlen zu CAC, ACV, Support-Kosten, Partnerrabatten, Churn-Rate und Deal-Velocity vor.

## Skill

````markdown
---
name: channel-economics
description: "Use when reviewing or rebalancing direct vs. partner-led channel economics — computing fully-loaded cost-to-serve per channel, channel ROI with cash / LTV / marginal lenses, and optimal channel mix subject to constraints. For Head of Commercial, RevOps, and VP Sales doing quarterly channel review. Outputs cost to serve, channel ROI verdicts (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), a sensitivity-tested channel-mix recommendation, and the diminishing-returns inflection. Requires per-channel data: CAC, ACV, support costs, partner discounts, churn rate, and deal velocity."
---

# channel-economics

## Purpose

Help Head of Commercial / RevOps / VP Sales answer three questions at the quarterly channel review:

1. **What does each channel actually cost to serve, fully loaded?**
2. **What is the ROI of each channel under three lenses?** (cash ROI year-1, LTV-adjusted ROI, marginal ROI)
3. **What is the optimal channel mix subject to our strategic constraints?**

Der Skill liefert **kanalspezifische Verdicts** (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), eine **sensitivitätsgetestete Mix-Empfehlung** und den **Diminishing-Returns-Inflektionspunkt**.

## When to use

- Quarterly channel review: pipeline ist 60/40 oder 50/50 direct vs. partner – Profitabilität unklar
- Überlegung, einen Channel Manager einzustellen
- Partner-Programm-ROI-Frage vom Board
- Ein Segment ist zu stark auf einen Kanal konzentriert
- Expansion in eine neue Region: direct-first vs. partner-first entscheiden

**Do not use for:**
- Designing partner tiers, joint GTM motion → `partnerships-architect`
- SDR-to-AE routing, lead scoring → `business-growth/revenue-operations`
- Strategic CRO decisions → `c-level-advisor/cro-advisor`
- Per-deal discount approval → `deal-desk`

## Workflow

### Step 1 — Kanaldaten erfassen

Stelle folgende Daten pro Kanal bereit (ca. 20 Min. Aufwand). Die Analyse verwendet diese Eingaben direkt:

```
Kanal: [Direct / Partner / Self-Serve / ...]
Deals TTM (Anzahl):
ARR TTM (€):
Durchschnittliche Deal-Größe (€):
Bruttomarge (%):
CAC (€):
Sales-Zyklus (Tage):
Retention-Rate (%):
Expansion-Rate (%):
Partner-Rabatt (%):
Direkte Kosten (€): [Headcount, MDF, Enablement, Tools]
Zugeordnete Gemeinkosten (€):
```

### Step 2 — Vollständig belastete Cost-to-Serve berechnen

Teile deine Kanaldaten mit. Die Analyse berechnet:

- Vollständig belastete Kosten **pro Deal** und **pro Euro ARR**
- Aufschlüsselung: direkte Kosten vs. zugeordnete Gemeinkosten
- „True Gross Margin"-Linie pro Kanal

Die Berechnung folgt dieser Logik:
- Cost-to-Serve/Deal = (Direkte Kosten + Gemeinkosten) / Anzahl Deals
- True Gross Margin = ARR × Bruttomarge% − Cost-to-Serve

### Step 3 — ROI pro Kanal unter drei Perspektiven berechnen

Ergänze deine Daten um LTV-Annahmen (durchschnittliche Kundenlaufzeit, Expansion). Die Analyse berechnet:

- **Cash ROI Year-1**: `(ARR Year-1 − vollständige Kosten) / vollständige Kosten × 100`
- **LTV-adjusted ROI**: `(LTV − CAC) / CAC × 100` unter Berücksichtigung von Retention- und Expansion-Differenzial
- **Marginal ROI**: ROI des nächsten investierten Euros, inkl. Diminishing-Returns-Inflektionspunkt
- Verdict pro Kanal: **DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT**

### Step 4 — Optimalen Channel-Mix ermitteln

Gib deine strategischen Constraints an (z. B. Mindest-Partneranteil, Kapazitätsgrenzen, Budget). Die Analyse empfiehlt:

- Mix, der den effektiven ARR unter gegebenen Constraints maximiert
- Sensitivitätstabelle: Was passiert bei ±10 % Shift zwischen Kanälen?

### Step 5 — Entscheiden

Die drei Analysen (Cost-to-Serve, ROI-Verdicts, Mix-Empfehlung) werden als strukturierte Ausgabe für das quartalsweise Channel-Review aufbereitet.

## Anti-patterns

- **Treating "influenced" deals as "sourced" deals.**
- **Inconsistent overhead allocation.** — Same methodology for both channels is mandatory.
- **Ignoring enablement time as a cost.**
- **MDF without ROI tracking.** — Market Development Funds without attributable pipeline ROI.
- **Channel-mix dogma.** — "We're a partner-first company" blocks profitable segments.
- **Computing channel ROI without retention differential.** — A 5-point retention gap moves LTV by 30-50%.
- **No cost-attribution for channel-manager headcount.**

## Forcing-question library

1. **"What's your fully-loaded cost-to-serve per channel — including channel-manager headcount, MDF, partner enablement time, and overhead allocation?"**
2. **"What is the retention differential between direct-sourced and partner-sourced customers?"**
3. **"What share of 'channel-sourced' pipeline did your team actually originate?"**
4. **"What is the marginal ROI of the next dollar invested in partner program vs. direct sales?"**
5. **"What's your MDF-to-attributable-pipeline ratio in the last 4 quarters?"**
6. **"Is your channel-mix dogma blocking a profitable segment?"**
7. **"What overhead-allocation methodology are you applying — and is it consistent across direct and partner?"**

Fragen werden depth-first bearbeitet. Fragen 1–3 klären, bevor 4–7 geöffnet werden. Danach folgen Cost-to-Serve-Berechnung → ROI-Analyse → Mix-Optimierung in dieser Reihenfolge.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
