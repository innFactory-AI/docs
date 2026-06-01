---
title: Pricing Strategist
description: Choose the right pricing model (subscription, usage-based, value-based, freemium, or hybrid), run Van Westendorp analyses, and design Good/Better/Best packaging tiers.
---

Use this skill when designing or revisiting product pricing — for selecting a pricing model, running WTP analyses, or designing pricing tiers.

## Skill

````markdown
---
name: pricing-strategist
description: "Use when designing or revisiting product pricing — selecting a pricing model (subscription seat-based, usage-based, value-based, freemium, or hybrid), running Van Westendorp Price Sensitivity Meter analysis on WTP survey data, or designing Good/Better/Best packaging tiers. Recommends a model and a price range with trade-offs, never a single number."
---

# pricing-strategist

## Purpose

Help Commercial, Product Marketing, and CMO functions answer three questions at the pricing-design moment:

1. **Which pricing model fits this product + customer + market?**
2. **What does the customer actually pay before it feels too expensive?** (Van Westendorp PSM)
3. **How should we package this into tiers?** (Good / Better / Best)

The skill recommends **a model and a range**. The human picks the number and owns the trade-offs.

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

Capture: industry, deal size avg, customer count, value drivers, adoption curve, consumption pattern (seat / usage / value / hybrid), competitor models.

### Step 2 — Pick the pricing model

Run `scripts/pricing_model_picker.py --input brief.json --profile saas --output markdown`.

Output ranks 5 models by fit-score 0-100 with trade-offs:
- low usage variance + high seat-attach → subscription wins
- power-law usage + variable customer value → usage-based wins

### Step 3 — Validate WTP with Van Westendorp PSM

If you have survey data (≥ 4 questions per respondent: too cheap / bargain / getting expensive / too expensive), run `scripts/wtp_analyzer.py`.

Output: 4 intersection points (OPP, IDP, PMC, PME) and the Range of Acceptable Prices.

PSM gives a **range**, not the price.

### Step 4 — Design packaging

Run `scripts/packaging_designer.py --input features.json --profile saas --output markdown`.

Output: 3-tier Good/Better/Best assignment with anti-pattern flags:
- decoy tier
- feature dump
- no upgrade trigger
- Bronze loss leader
- Enterprise no-anchor

### Step 5 — Decide

Take model + range + packaging into the pricing committee. Skill does not commit the number — you do.

## Anti-patterns

- **Recommending a specific number.** This skill emits a model and a range. Final price is a human commercial decision.
- **Using PSM with N < 30.** Statistical noise dominates. The script warns; respect the warning.
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

Walk depth-first. Lock 1-3 before opening 4-6. Then invoke `pricing_model_picker.py` → `wtp_analyzer.py` → `packaging_designer.py` in sequence.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
