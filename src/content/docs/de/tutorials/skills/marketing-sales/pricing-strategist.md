---
title: Preisstratege
description: Wähle das passende Preismodell (Abo, nutzungsbasiert, wertbasiert, Freemium oder Hybrid), führe Van-Westendorp-Analysen durch und gestalte Good/Better/Best-Paket-Tiers. Bereite Produktbeschreibung, Zielkundensegmente, aktuelle Preisstruktur sowie optional WTP-Umfragedaten oder Wettbewerbspreise vor.
---

Verwende diesen Skill beim Entwerfen oder Überarbeiten von Produktpreisen – für die Auswahl des Preismodells, die Durchführung von WTP-Analysen oder die Gestaltung von Pricing-Tiers. Bereite eine Produktbeschreibung, Zielkundensegmente, die aktuelle Preisstruktur (falls vorhanden) sowie optional WTP-Umfragedaten (mind. N=30) oder Wettbewerbspreise vor.

## Skill

````markdown
---
name: pricing-strategist
description: "Use when designing or revisiting product pricing — selecting a pricing model (subscription seat-based, usage-based, value-based, freemium, or hybrid), running Van Westendorp Price Sensitivity Meter analysis on WTP survey data, or designing Good/Better/Best packaging tiers. Recommends a model and a price range with trade-offs, never a single number. Requires: product description, target customer segments, current pricing structure (if any), and optionally WTP survey data (min. N=30) or competitor pricing."
---

# pricing-strategist

## Purpose

Help Commercial, Product Marketing, and CMO functions answer three questions at the pricing-design moment:

1. **Which pricing model fits this product + customer + market?**
2. **What does the customer actually pay before it feels too expensive?** (Van Westendorp PSM)
3. **How should we package this into tiers?** (Good / Better / Best)

Der Skill empfiehlt **ein Modell und eine Preisspanne**. Die finale Zahl und die Trade-offs bleiben beim Menschen.

## When to use

- Launching a new SaaS / API / AI tool and choosing the first pricing model
- Revisiting pricing after 18+ months of GTM data
- Designing or redesigning tier packaging (Good/Better/Best, Bronze/Silver/Gold)
- You have Van Westendorp survey data and want the optimal price range
- You suspect your packaging has anti-patterns

**Do not use for:**
- Per-deal discount approval → `deal-desk`
- Strategic CMO positioning, brand, category creation → `c-level-advisor/cmo-advisor`
- Technical-sale enablement → `business-growth/sales-engineer`

## Workflow

### Step 1 — Kundenkontext erfassen

Beantworte diese Fragen, um den Kontext zu liefern:

```
Branche:
Durchschnittliche Deal-Größe:
Anzahl bestehender Kunden:
Wert-Treiber (was löst das Produkt):
Adoptionskurve (viral / top-down / bottom-up):
Nutzungsmuster (Seat / Usage / Value / Hybrid):
Wettbewerber-Modelle:
```

### Step 2 — Preismodell auswählen

Auf Basis deiner Eingaben werden die 5 gängigen Modelle nach Fit-Score (0–100) bewertet und mit Trade-offs aufgelistet:

| Modell | Fit-Score | Hauptargument | Trade-off |
|--------|-----------|---------------|-----------|
| Subscription (Seat-based) | — | Vorhersehbarer Umsatz | Benachteiligt kleine Nutzer |
| Usage-based | — | Aligns value + cost | Umsatzvolatilität |
| Value-based | — | Maximale Monetarisierung | Schwer skalierbar ohne Metric |
| Freemium | — | Adoption-Flywheel | Conversion-Druck |
| Hybrid | — | Flexibility | Komplexität |

Entscheidungsregeln:
- Geringe Usage-Varianz + hohe Seat-Attach → Subscription gewinnt
- Power-Law-Usage + variabler Kundenwert → Usage-based gewinnt

### Step 3 — WTP validieren mit Van Westendorp PSM

Wenn Survey-Daten vorhanden sind (≥ 4 Fragen pro Respondenten: zu günstig / günstig / teuer / zu teuer), stelle die aggregierten Antworten bereit:

```
Anzahl Respondenten: N
Frage 1 „zu günstig": Median-Wert / Verteilung
Frage 2 „günstig/Schnäppchen": Median-Wert / Verteilung
Frage 3 „teuer/aber akzeptabel": Median-Wert / Verteilung
Frage 4 „zu teuer": Median-Wert / Verteilung
```

Die Analyse berechnet die **4 Schnittpunkte des PSM**:

| Schnittpunkt | Bedeutung |
|---|---|
| **OPP** (Optimal Price Point) | Schnittpunkt „zu günstig" & „zu teuer" |
| **IDP** (Indifference Price Point) | Schnittpunkt „günstig" & „teuer" |
| **PMC** (Point of Marginal Cheapness) | Untergrenze des akzeptablen Preisbereichs |
| **PME** (Point of Marginal Expensiveness) | Obergrenze des akzeptablen Preisbereichs |

PSM liefert eine **Spanne** (Range of Acceptable Prices), keinen fixen Preis. Mindestens N = 30 Respondenten erforderlich.

### Step 4 — Packaging gestalten

Stelle die verfügbaren Features und ihre Wichtigkeit für verschiedene Kundensegmente bereit:

```
Feature             | Segment A | Segment B | Segment C | Einschätzung
Feature X           | must-have | nice-to-have | –      | Core
Feature Y           | –         | must-have | must-have | Advanced
Feature Z (Limits)  | 100/Monat | 1.000/Monat | unlimited| Differenzierung
```

Die Analyse erstellt die 3-Tier-Zuweisung (Good/Better/Best) und prüft auf Packaging-Anti-Patterns:

- **Decoy Tier** — mittlerer Tier existiert nur zum Preisanker
- **Feature Dump** — Best-Tier enthält zu viele unrelevante Features
- **No Upgrade Trigger** — kein klarer Limit oder Workflow, der ein Upgrade erzwingt
- **Bronze Loss Leader** — Good-Tier ist zu großzügig für Conversion
- **Enterprise No-Anchor** — kein Preis-Anker für Enterprise-Tier

### Step 5 — Entscheiden

Modell + Spanne + Packaging werden als strukturierte Empfehlung ausgegeben und im Pricing-Committee besprochen. Der Skill legt keine finale Zahl fest – das bleibt eine menschliche Entscheidung.

## Anti-patterns

- **Recommending a specific number.** This skill emits a model and a range. Final price is a human commercial decision.
- **Using PSM with N < 30.** Statistical noise dominates.
- **Treating PSM as "the price."** PSM gives a Range of Acceptable Prices (RAP) and an Optimal Price Point (OPP).
- **Picking value-based pricing without a measurable value metric.**
- **Designing tiers before picking a model.**
- **Packaging "feature dumps" into the Best tier.**

## Forcing-question library

1. **"Is your customer paying for outcomes, seats, or usage?"**
2. **"Do you have a measurable value metric, or are you guessing?"**
3. **"What's the variance in customer usage across your top decile vs. median?"**
4. **"What's your competitor's pricing model, and why are you choosing the same or different?"**
5. **"What sample size do you have for WTP analysis, and is it segmented?"**
6. **"What's the ONE feature that forces a tier upgrade?"**

Fragen werden depth-first bearbeitet. Fragen 1–3 klären, bevor 4–6 geöffnet werden. Danach folgen Modell-Auswahl → PSM-Analyse → Packaging-Design in dieser Reihenfolge.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
