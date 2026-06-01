---
title: Commercial Policy
description: Gestalte Rabattregeln, Genehmigungsmatrizen und Exception-Flows – die Governance-Grundlage für Deal Desk und Vertrieb. Halte ARR-Bänder, aktuelle Rabatte, Genehmigungsstufen, bestehende Ausnahmen und den Margin-Floor bereit.
---

Verwende diesen Skill beim Erstellen der ersten formalen Commercial Policy, beim Überarbeiten einer veralteten Matrix, beim Durchsetzen von Genehmigungsregeln für Ausnahmen oder wenn der CFO die Margin-Floor-Grenze enger gesetzt hat. Halte dazu die ARR-Bänder, aktuell gewährte Rabatte, bestehende Genehmigungsstufen, bekannte Ausnahmen und den Margin-Floor bereit.

## Skill

````markdown
---
name: commercial-policy
description: "Use when designing or revising a company's commercial policy — the rules of engagement governing discounts off list price, approver thresholds, exception flows, and the deal framework that Deal Desk and AEs operate under. Covers discount matrix design (ARR band x term length x payment terms x strategic value), exception policy, discount governance, approval thresholds, and policy linting. NOT per-deal application (that is deal-desk) and NOT pricing model selection (that is pricing-strategist). Requires: ARR bands, current discount levels, approval tiers, known exceptions, and the margin floor."
---

# commercial-policy

## Purpose

Design the **rules of engagement** that govern discounting off list price. Drei Analysemodule:

1. **Discount-Matrix-Builder** — erstellt eine 4-dimensionale Matrix (ARR-Band × Laufzeit × Zahlungskonditionen × Strategic-Value-Tier)
2. **Exception-Router** — führt Ausnahmen durch die benannte Genehmigerkette mit erforderlichen kompensierenden Commitments
3. **Policy-Linter** — prüft die Matrix auf Governance-Defekte anhand von 10 Regeln

Der Output ist die **Policy selbst** (Matrix + Exception-Flow + Lint-Report) – keine Deal-spezifische Anwendung.

## When to use

- Ein neuer Head of Commercial oder Head of Deal Desk schreibt die erste formale Commercial Policy des Unternehmens
- Die bestehende Matrix ist älter als 6 Monate und Discount-Drift zeigt sich in Margin-Reviews
- Reps zitieren vergangene Genehmigungen als Präzedenz – der Präzedenz-Loop muss unterbrochen werden
- Die Ausnahme-Zahl steigt Q-über-Q und die Matrix-Bänder sind möglicherweise falsch bepreist
- Der CFO hat den Margin-Floor enger gesetzt und die Matrix muss neu aufgebaut werden

**Do NOT use this skill to:**
- Einen spezifischen Deal genehmigen — das ist `commercial/skills/deal-desk`
- Das Pricing-Modell und den Listenpreis festlegen — das ist `commercial/skills/pricing-strategist`

## Workflow

### 1. Aktuelle Rabattverteilung analysieren

Stelle die Daten der letzten 4 Quartale (Closed-Won + Closed-Lost) bereit. Folgendes Format wird benötigt:

```
Quartal | Deal-Größe (ARR) | Gewährter Rabatt % | Laufzeit (Monate) | Zahlungskonditionen | Ergebnis (Won/Lost) | Bruttomarge %
Q1/2025 | 48.000 €          | 18 %               | 24                | jährlich voraus     | Won                 | 71 %
Q1/2025 | 12.000 €          | 8 %                | 12                | monatlich           | Lost                | 68 %
...
```

Die Analyse identifiziert die beobachtete Rabattverteilung, Ausreißer und Muster (z. B. Deal-Size-Gaming an runden ARR-Schwellen).

### 2. Datengestützte Matrix erstellen

Gib zusätzlich an: Unternehmenstyp (SaaS / Enterprise-Software / API / Marketplace / Services), Margin-Floor (%), Genehmigerstufen (z. B. AE bis 10 %, Manager bis 20 %, VP bis 25 %, CFO darüber).

Die Analyse erstellt die 4-dimensionale Matrix:

```
ARR-Band        | Laufzeit | Zahlung      | Standard-Rabatt | Max-Rabatt | Genehmiger
< 10.000 €      | 12 Mon.  | monatlich    | 5 %             | 10 %       | AE
< 10.000 €      | 24 Mon.  | jährl. voraus| 8 %             | 15 %       | AE
10.000–50.000 € | 12 Mon.  | monatlich    | 8 %             | 18 %       | Manager
...
```

### 3. Exception-Flow gestalten

Teile mit, welche Ausnahme-Typen vorkommen (z. B. strategischer Wert, Wettbewerbsdruck, Non-Standard-Zahlungskonditionen). Die Analyse erstellt den Routing-Flow:

```
Ausnahme-Typ        | Erforderliche Daten              | Genehmiger    | Kompensierendes Commitment
Über Matrix-Max     | Win-Rate-Analyse, Wettbewerber   | VP Sales + CFO| Multi-Year-Commit, NPS-Pflicht
Strategic-Value     | Definition erfüllt (Checkliste)  | CRO           | Case-Study-Pflicht
Non-Standard-Zahlung| Cashflow-Begründung              | CFO           | Upfront-Zahlung Q1
```

Jede Ausnahme wird mit maschinenlesbaren Audit-Trail-Feldern dokumentiert (Datum, Anforderer, Genehmiger, Begründung, Kompensation).

### 4. Matrix linten (Governance-Check)

Teile die fertige Matrix mit. Die Analyse führt einen 10-Regel-Lint durch:

| Regel | Prüfung |
|-------|---------|
| Keine Cliff-Edges | ARR-Schwellen ≠ runde Zahlen (z. B. nicht genau 50.000 €) |
| Margin-Floor eingehalten | Alle Zellen ≥ CFO-Margin-Floor |
| Strategic Value definiert | Konkrete Tests, keine Adjektive |
| Genehmiger-Hierarchie vollständig | Jede Zelle hat einen benannten Genehmiger |
| Quarterly-Review-Datum | Nächstes Review-Datum festgelegt |
| ... | ... |

Jedes **BLOCKER**-Finding muss vor der Veröffentlichung behoben werden.

### 5. Veröffentlichen + Quartalsreview

Matrix und Exception-Flow publizieren. Jeden Quartal die Analyse mit aktuellen CRM-Daten wiederholen.

## Anti-patterns

- **Setting discount bands without data backing.**
- **Letting precedent set policy.** — "Maria approved 28% on Acme last quarter" is not a band.
- **Approving exceptions without compensating commitments.**
- **Cliff edges at round-number ARR thresholds.** — Produces deal-size gaming within 2 quarters.
- **"Strategic value" as an undefined catch-all.** — Define with concrete tests.
- **No quarterly review.**
- **Mixing CFO and CRO accountabilities.** — CFO owns the margin floor; CRO owns the band cap.

## Forcing-question library

1. **"What's your observed discount distribution across the last 4 quarters?"**
2. **"What's the win-rate AND the 12-month NRR for deals at your current 'max discount' band?"**
3. **"Who owns the margin floor, AND who owns the discount-band cap — are those the same person?"**
4. **"How is 'strategic value' defined — with concrete tests, or with adjectives?"**
5. **"For exceptions above your matrix max, what compensating commitments are required?"**
6. **"Has the same kind of exception been approved 3+ times in the trailing quarter?"**
7. **"When was the last time you re-ran the matrix against the previous 4 quarters of data?"**
8. **"For every exception in the last quarter, is there a machine-readable audit-trail record?"**

Fragen werden depth-first bearbeitet. Fragen 1–4 klären, bevor 5–8 geöffnet werden. Danach folgen Matrix-Design → Lint → Exception-Flow in dieser Reihenfolge.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
