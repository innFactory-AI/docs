---
title: Channel Economics
description: Compute fully-loaded cost-to-serve per channel, channel ROI under three lenses, and optimize the channel mix between direct and partner-led sales.
---

Use this skill for the quarterly channel review when you want to know which channel is profitable after all costs — including CAC, support, partner discounts, deal velocity differences, and retention differential.

## Skill

````markdown
---
name: channel-economics
description: "Use when reviewing or rebalancing direct vs. partner-led channel economics — computing fully-loaded cost-to-serve per channel, channel ROI with cash / LTV / marginal lenses, and optimal channel mix subject to constraints. For Head of Commercial, RevOps, and VP Sales doing quarterly channel review. Outputs cost to serve, channel ROI verdicts (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), a sensitivity-tested channel-mix recommendation, and the diminishing-returns inflection."
---

# channel-economics

## Purpose

Help Head of Commercial / RevOps / VP Sales answer three questions at the quarterly channel review:

1. **What does each channel actually cost to serve, fully loaded?**
2. **What is the ROI of each channel under three lenses?** (cash ROI year-1, LTV-adjusted ROI, marginal ROI)
3. **What is the optimal channel mix subject to our strategic constraints?**

The skill emits **per-channel verdicts** (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), a **sensitivity-tested mix recommendation**, and **the diminishing-returns inflection point**.

## When to use

- Quarterly channel review: pipeline is 60/40 or 50/50 direct vs partner and you don't know which is profitable
- Considering hiring a channel manager
- Partner program ROI question from the board
- A segment is over-indexed to one channel
- About to expand into a new region and need to decide direct-first vs partner-first

**Do not use for:**
- Designing partner tiers, joint GTM motion → `partnerships-architect`
- SDR-to-AE routing, lead scoring → `business-growth/revenue-operations`
- Strategic CRO decisions → `c-level-advisor/cro-advisor`
- Per-deal discount approval → `deal-desk`

## Workflow

### Step 1 — Intake channel data

Fill `assets/channel_data_template.md` (~20 min). Capture per channel: deal count TTM, ARR TTM, avg deal size, gross margin %, CAC, sales-cycle days, retention rate, expansion rate, partner discount %, all attributable costs.

### Step 2 — Compute cost-to-serve per channel

Run `scripts/cost_to_serve_calculator.py --input channel.json --output markdown`.

Output: fully-loaded cost-to-serve **per deal** AND **per dollar of ARR**, with direct costs broken out from allocated overhead, and a "true gross margin" line.

### Step 3 — Compute ROI per channel under three lenses

Run `scripts/channel_roi_analyzer.py --input roi.json --profile saas --output markdown`.

Output: per channel, three ROI numbers (Cash year-1, LTV-adjusted, Marginal), the diminishing-returns inflection point, and a verdict: DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT.

### Step 4 — Optimize channel mix

Run `scripts/channel_mix_optimizer.py --input mix.json --profile saas --output markdown`.

Output: recommended mix that maximizes effective ARR subject to constraints, plus a sensitivity table.

### Step 5 — Decide

Take the three reports into the quarterly channel review.

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

Walk depth-first. Lock 1-3 before opening 4-7. Then invoke `cost_to_serve_calculator.py` → `channel_roi_analyzer.py` → `channel_mix_optimizer.py` in sequence.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
