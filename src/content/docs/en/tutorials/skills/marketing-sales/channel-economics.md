---
title: Channel Economics
description: Compute fully-loaded cost-to-serve per channel, channel ROI under three lenses, and optimize the channel mix between direct and partner-led sales. Have your per-channel numbers ready: CAC, ACV, support costs, partner discounts, churn rate, and deal velocity.
---

Use this skill for the quarterly channel review when you want to know which channel is profitable after all costs — including CAC, support, partner discounts, deal velocity differences, and retention differential. To get accurate results, prepare per-channel numbers for CAC, ACV, support cost allocation, partner discount percentages, churn rate, and average deal velocity before starting.

## Skill

````markdown
---
name: channel-economics
description: "Use when reviewing or rebalancing direct vs. partner-led channel economics — computing fully-loaded cost-to-serve per channel, channel ROI with cash / LTV / marginal lenses, and optimal channel mix subject to constraints. For Head of Commercial, RevOps, and VP Sales doing quarterly channel review. Outputs cost to serve, channel ROI verdicts (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), a sensitivity-tested channel-mix recommendation, and the diminishing-returns inflection. Requires per-channel data including CAC, ACV, support costs, partner discount %, churn rate, and deal velocity."
---

# channel-economics

## Purpose

Help Head of Commercial / RevOps / VP Sales answer three questions at the quarterly channel review:

1. **What does each channel actually cost to serve, fully loaded?**
2. **What is the ROI of each channel under three lenses?** (cash ROI year-1, LTV-adjusted ROI, marginal ROI)
3. **What is the optimal channel mix subject to our strategic constraints?**

I will emit **per-channel verdicts** (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), a **sensitivity-tested mix recommendation**, and **the diminishing-returns inflection point**.

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

Provide the following data per channel (direct and partner separately). I will walk you through each item if you're unsure:

```
Per channel:
- Deal count TTM (trailing twelve months)
- ARR TTM (€)
- Average deal size (€)
- Gross margin %
- CAC (€)
- Average sales-cycle days
- Retention rate %
- Expansion rate %
- Partner discount % (partner channel only)
- Attributable costs breakdown:
    - Sales headcount cost (€)
    - Channel-manager headcount (€)
    - MDF / partner enablement spend (€)
    - Support cost allocation (€)
    - Overhead allocation (€)
    - Tooling / platform cost (€)
```

### Step 2 — Compute cost-to-serve per channel

Once you provide the data above, I will calculate:

- Fully-loaded cost-to-serve **per deal** AND **per dollar of ARR**
- Direct costs broken out from allocated overhead
- A "true gross margin" line per channel

I apply a consistent overhead-allocation methodology across both channels to ensure comparability.

### Step 3 — Compute ROI per channel under three lenses

Using the cost-to-serve figures, I will compute:

- **Cash ROI Year-1**: `(ARR Year-1 × Gross Margin % - Fully Loaded CAC) / Fully Loaded CAC`
- **LTV-Adjusted ROI**: LTV calculated from retention and expansion rates, discounted at your WACC (default 10% if not provided)
- **Marginal ROI**: ROI on the next incremental dollar invested in each channel, identifying the diminishing-returns inflection point

I will then issue a verdict for each channel: **DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT**.

### Step 4 — Optimize channel mix

Provide any strategic constraints (e.g., "minimum 20% partner revenue," "headcount budget cap of €X," "must retain enterprise segment via direct"). I will then:

- Recommend a channel mix that maximizes effective ARR subject to your constraints
- Produce a sensitivity table showing how the recommendation shifts if key assumptions change by ±10–20%

### Step 5 — Decide

Take the three analyses into the quarterly channel review. The verdicts and mix recommendation are inputs to the human decision — I do not commit budget.

## Anti-patterns

- **Treating "influenced" deals as "sourced" deals.**
- **Inconsistent overhead allocation.** — Same methodology for both channels is mandatory.
- **Ignoring enablement time as a cost.**
- **MDF without ROI tracking.** — Market Development Funds without attributable pipeline ROI.
- **Channel-mix dogma.** — "We're a partner-first company" blocks profitable segments.
- **Computing channel ROI without retention differential.** — A 5-point retention gap moves LTV by 30–50%.
- **No cost-attribution for channel-manager headcount.**

## Forcing-question library

1. **"What's your fully-loaded cost-to-serve per channel — including channel-manager headcount, MDF, partner enablement time, and overhead allocation?"**
2. **"What is the retention differential between direct-sourced and partner-sourced customers?"**
3. **"What share of 'channel-sourced' pipeline did your team actually originate?"**
4. **"What is the marginal ROI of the next dollar invested in partner program vs. direct sales?"**
5. **"What's your MDF-to-attributable-pipeline ratio in the last 4 quarters?"**
6. **"Is your channel-mix dogma blocking a profitable segment?"**
7. **"What overhead-allocation methodology are you applying — and is it consistent across direct and partner?"**

Walk depth-first. Lock questions 1–3 before opening 4–7. Then I will proceed through cost-to-serve → channel ROI → channel-mix optimization in sequence.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
