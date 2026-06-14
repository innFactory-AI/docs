---
title: Pricing Strategist
description: Choose the right pricing model (subscription, usage-based, value-based, freemium, or hybrid), run Van Westendorp analyses, and design Good/Better/Best packaging tiers. Prepare a description of your product, target customer segments, your current pricing structure (if any), and optionally WTP survey data or competitor pricing.
---

Use this skill when designing or revisiting product pricing — for selecting a pricing model, running WTP analyses, or designing pricing tiers. Prepare a short description of your product, your target customer segments, and your current pricing structure if one exists; WTP survey data (at least 30 respondents) and competitor pricing models are optional but will significantly improve the analysis.

## Skill

````markdown
---
name: pricing-strategist
description: "Use when designing or revisiting product pricing — selecting a pricing model (subscription seat-based, usage-based, value-based, freemium, or hybrid), running Van Westendorp Price Sensitivity Meter analysis on WTP survey data, or designing Good/Better/Best packaging tiers. Requires a product description, target customer segments, and current pricing structure (if any); WTP survey data (min. 30 respondents) and competitor pricing are optional but improve accuracy. Recommends a model and a price range with trade-offs, never a single number."
---

# pricing-strategist

## Purpose

Help Commercial, Product Marketing, and CMO functions answer three questions at the pricing-design moment:

1. **Which pricing model fits this product + customer + market?**
2. **What does the customer actually pay before it feels too expensive?** (Van Westendorp PSM)
3. **How should we package this into tiers?** (Good / Better / Best)

I recommend **a model and a range**. The human picks the number and owns the trade-offs.

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

### Step 1 — Assess customer context

Provide the following context and I will use it to evaluate model fit:

```
Industry:
Average deal size (€):
Customer count (current or target):
Primary value drivers for the customer:
Adoption curve (land-and-expand / top-down / PLG):
Consumption pattern (seat-based / usage-based / outcome-based / hybrid):
Competitor pricing models:
Usage variance: top-decile customers vs. median customer (approximate ratio):
```

### Step 2 — Pick the pricing model

I will score 5 pricing models against your context (fit score 0–100) and explain the trade-offs:

| Model | Wins When |
|-------|-----------|
| Subscription (seat-based) | Low usage variance + high seat-attach rate |
| Usage-based | Power-law usage distribution + variable customer value |
| Value-based | Measurable outcome metric + high willingness-to-pay variance |
| Freemium | High PLG motion + low marginal cost per free user |
| Hybrid | Multiple distinct customer segments with different consumption patterns |

I will recommend the top model and explain why the others score lower given your specific inputs.

### Step 3 — Validate WTP with Van Westendorp PSM

If you have survey data, provide the four price-point responses per respondent (minimum 30 respondents recommended):

```
Respondent | Too Cheap | Bargain / Acceptable | Getting Expensive | Too Expensive
-----------|-----------|---------------------|-------------------|---------------
R01        |    €5     |        €15          |       €35         |     €60
R02        |    €8     |        €20          |       €40         |     €70
...
```

I will calculate the four PSM intersection points:

- **OPP** (Optimal Price Point): intersection of "too cheap" and "too expensive" cumulative curves
- **IDP** (Indifference Price Point): intersection of "bargain" and "getting expensive" curves
- **PMC** (Point of Marginal Cheapness): lower bound of the Range of Acceptable Prices
- **PME** (Point of Marginal Expensiveness): upper bound of the Range of Acceptable Prices

PSM gives a **range**, not the price. Final price selection is a human decision.

> **Note:** With fewer than 30 respondents, statistical noise dominates. I will flag this and advise caution when interpreting the intersection points.

### Step 4 — Design packaging

Provide your feature list and I will assign features to Good / Better / Best tiers, then flag anti-patterns:

```
Feature                        | Availability
-------------------------------|---------------------------
Core reporting dashboard       | (which tier?)
API access                     | (which tier?)
SSO / SAML                     | (which tier?)
Dedicated CSM                  | (which tier?)
Custom integrations            | (which tier?)
...
```

Anti-patterns I check for:
- **Decoy tier** — Middle tier with no clear upgrade trigger
- **Feature dump** — Best tier is "everything" with no coherent narrative
- **No upgrade trigger** — No single feature that clearly forces a tier step-up
- **Bronze loss leader** — Free/Good tier too generous, removing the upgrade incentive
- **Enterprise no-anchor** — Top tier has no ceiling, leaving enterprise pricing undefined

### Step 5 — Decide

Take model + range + packaging into the pricing committee. I do not commit the number — you do.

## Anti-patterns

- **Recommending a specific number.** I emit a model and a range. Final price is a human commercial decision.
- **Using PSM with N < 30.** Statistical noise dominates. I will warn; respect the warning.
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

Walk depth-first. Lock questions 1–3 before opening 4–6. Then I will proceed through model selection → PSM analysis → packaging design in sequence.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
