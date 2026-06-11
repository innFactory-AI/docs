---
title: Campaign Analytics
description: Analyze campaign performance with multi-touch attribution, funnel conversion analysis, and ROI calculation. Provide ad spend, clicks, conversions, and revenue per channel, plus funnel stage counts (Leads → MQLs → SQLs → Closed-Won).
---

Use this skill when analyzing marketing campaigns, ad performance, attribution models, conversion rates, or calculating marketing ROI, ROAS, CPA, and campaign metrics across channels. Before starting, prepare your campaign data per channel (ad spend, clicks, conversions, and revenue) as well as your funnel stage counts — at minimum Leads, MQLs, SQLs, and Closed-Won.

## Skill

````markdown
---
name: "campaign-analytics"
description: Analyzes campaign performance with multi-touch attribution, funnel conversion analysis, and ROI calculation for marketing optimization. Use when analyzing marketing campaigns, ad performance, attribution models, conversion rates, or calculating marketing ROI, ROAS, CPA, and campaign metrics across channels. Requires campaign data per channel (ad spend, clicks, conversions, revenue) and funnel stage counts (Leads, MQLs, SQLs, Closed-Won).
---

# Campaign Analytics

Production-grade campaign performance analysis with multi-touch attribution modeling, funnel conversion analysis, and ROI calculation.

---

## Typical Analysis Workflow

Provide your campaign data in the input formats below and I will perform the following steps in sequence:

1. **Attribution Analysis** — Apply your chosen attribution model to identify which channels drive conversions
2. **Funnel Analysis** — Calculate stage-to-stage conversion rates and pinpoint the largest drop-off bottlenecks
3. **ROI Calculation** — Compute all key metrics (ROAS, CPA, CAC, CPL, CTR, CVR) and compare against industry benchmarks

---

## Attribution Models

I implement five industry-standard attribution models. Specify which model(s) you want applied:

| Model | Description | Best For |
|-------|-------------|----------|
| First-Touch | 100% credit to first interaction | Brand awareness campaigns |
| Last-Touch | 100% credit to last interaction | Direct response campaigns |
| Linear | Equal credit to all touchpoints | Balanced multi-channel evaluation |
| Time-Decay | More credit to recent touchpoints | Short sales cycles |
| Position-Based | 40/20/40 split (first/middle/last) | Full-funnel marketing |

For Time-Decay, I will ask for your average sales cycle length to calibrate the half-life appropriately.

---

## Funnel Analysis

I will calculate:

- Stage-to-stage conversion rates and drop-off percentages
- Automatic bottleneck identification (largest absolute and relative drops)
- Overall funnel conversion rate
- Segment comparison when multiple segments are provided

---

## ROI Metrics Calculated

I compute the following metrics from your input data:

- **ROI**: `(Revenue - Total Cost) / Total Cost × 100`
- **ROAS**: `Revenue / Ad Spend`
- **CPA**: `Total Cost / Conversions`
- **CPL**: `Total Cost / Leads`
- **CAC**: `Total Cost / New Customers`
- **CTR**: `Clicks / Impressions × 100`
- **CVR**: `Customers / Leads × 100`

I will flag each metric against typical industry benchmarks and highlight where performance is above or below average.

---

## Input Formats

### Attribution Input

Provide your customer journey data in this format:

```
Journey ID | Touchpoints (channel, date, interaction type) | Converted (yes/no) | Revenue
-----------|------------------------------------------------|-------------------|--------
j1         | organic_search 2025-10-01, paid_search 2025-10-08 | yes            | €500
j2         | social_ad 2025-10-03, email 2025-10-10, paid_search 2025-10-12 | yes | €750
j3         | paid_search 2025-10-05 | no                                          | —
```

Or paste raw journey data in any structured format (CSV, table, JSON) and I will parse it.

### Funnel Input

Provide your funnel stage counts:

```
Stage        | Count
-------------|------
Awareness    | 10000
Interest     |  5200
Consideration|  2800
Intent       |  1400
Purchase     |   420
```

### ROI Input

Provide these values:

```
Total ad spend:        €___
Total revenue:         €___
Total leads:           ___
Total conversions:     ___
New customers:         ___
Total impressions:     ___
Total clicks:          ___
Additional costs (creative, labor, tooling): €___
```

---

## Best Practices

1. **Use multiple attribution models** — Compare at least 3 models to triangulate channel value.
2. **Set appropriate lookback windows** — Match your time-decay half-life to your average sales cycle length.
3. **Segment your funnels** — Compare segments (channel, cohort, geography).
4. **Include all costs** — Factor in creative, tooling, and labor costs alongside media spend.
5. **Run ROI analysis at regular intervals** — Weekly for active campaigns, monthly for strategic review.

## Related Skills

- **analytics-tracking**: For setting up tracking. NOT for analyzing data (that's this skill).
- **ab-test-setup**: For designing experiments to test what analytics reveals.
- **paid-ads**: For optimizing ad spend based on analytics findings.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
