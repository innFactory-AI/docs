---
title: Kampagnen-Analytics
description: Analysiere Marketingkampagnen mit Multi-Touch-Attribution, Funnel-Konversionsanalyse und ROI-Berechnung – inkl. ROAS, CPA und Benchmark-Vergleichen.
---

Verwende diesen Skill, wenn du Marketingkampagnen analysierst, Anzeigenperformance auswertete, Attributionsmodelle anwendest, Conversion-Raten analysierst oder Marketing-ROI, ROAS und CPA berechnest.

## Skill

````markdown
---
name: "campaign-analytics"
description: Analyzes campaign performance with multi-touch attribution, funnel conversion analysis, and ROI calculation for marketing optimization. Use when analyzing marketing campaigns, ad performance, attribution models, conversion rates, or calculating marketing ROI, ROAS, CPA, and campaign metrics across channels.
---

# Campaign Analytics

Production-grade campaign performance analysis with multi-touch attribution modeling, funnel conversion analysis, and ROI calculation.

---

## Input Requirements

### Attribution Analyzer

```json
{
  "journeys": [
    {
      "journey_id": "j1",
      "touchpoints": [
        {"channel": "organic_search", "timestamp": "2025-10-01T10:00:00", "interaction": "click"},
        {"channel": "email", "timestamp": "2025-10-05T14:30:00", "interaction": "open"},
        {"channel": "paid_search", "timestamp": "2025-10-08T09:15:00", "interaction": "click"}
      ],
      "converted": true,
      "revenue": 500.00
    }
  ]
}
```

### Funnel Analyzer

```json
{
  "funnel": {
    "stages": ["Awareness", "Interest", "Consideration", "Intent", "Purchase"],
    "counts": [10000, 5200, 2800, 1400, 420]
  }
}
```

### Campaign ROI Calculator

```json
{
  "campaigns": [
    {
      "name": "Spring Email Campaign",
      "channel": "email",
      "spend": 5000.00,
      "revenue": 25000.00,
      "impressions": 50000,
      "clicks": 2500,
      "leads": 300,
      "customers": 45
    }
  ]
}
```

---

## Typical Analysis Workflow

For a complete campaign review, run the three scripts in sequence:

```bash
# Step 1 — Attribution: understand which channels drive conversions
python scripts/attribution_analyzer.py campaign_data.json --model time-decay

# Step 2 — Funnel: identify where prospects drop off
python scripts/funnel_analyzer.py funnel_data.json

# Step 3 — ROI: calculate profitability and benchmark
python scripts/campaign_roi_calculator.py campaign_data.json
```

---

## Scripts

### 1. attribution_analyzer.py

Implements five industry-standard attribution models:

| Model | Description | Best For |
|-------|-------------|----------|
| First-Touch | 100% credit to first interaction | Brand awareness campaigns |
| Last-Touch | 100% credit to last interaction | Direct response campaigns |
| Linear | Equal credit to all touchpoints | Balanced multi-channel evaluation |
| Time-Decay | More credit to recent touchpoints | Short sales cycles |
| Position-Based | 40/20/40 split (first/middle/last) | Full-funnel marketing |

### 2. funnel_analyzer.py

Analyzes conversion funnels to identify bottlenecks:

- Stage-to-stage conversion rates and drop-off percentages
- Automatic bottleneck identification
- Overall funnel conversion rate
- Segment comparison when multiple segments are provided

### 3. campaign_roi_calculator.py

Calculates comprehensive ROI metrics:

- **ROI**: Return on investment percentage
- **ROAS**: Return on ad spend ratio
- **CPA**: Cost per acquisition
- **CPL**: Cost per lead
- **CAC**: Customer acquisition cost
- **CTR**: Click-through rate
- **CVR**: Conversion rate (leads to customers)
- Flags underperforming campaigns against industry benchmarks

---

## Best Practices

1. **Use multiple attribution models** — Compare at least 3 models to triangulate channel value.
2. **Set appropriate lookback windows** — Match your time-decay half-life to your average sales cycle length.
3. **Segment your funnels** — Compare segments (channel, cohort, geography) to identify performance drivers.
4. **Benchmark against your own history first** — Industry benchmarks provide context, but historical data is more relevant.
5. **Run ROI analysis at regular intervals** — Weekly for active campaigns, monthly for strategic review.
6. **Include all costs** — Factor in creative, tooling, and labor costs alongside media spend.

---

## Limitations

- No statistical significance testing — Scripts provide descriptive metrics only.
- Offline analysis — Scripts analyze static JSON snapshots; no real-time data connections.
- Single-currency — All monetary values assumed to be in the same currency.
- No cross-device tracking — Attribution operates on provided journey data as-is.

## Related Skills

- **analytics-tracking**: For setting up tracking. NOT for analyzing data (that's this skill).
- **ab-test-setup**: For designing experiments to test what analytics reveals.
- **paid-ads**: For optimizing ad spend based on analytics findings.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
