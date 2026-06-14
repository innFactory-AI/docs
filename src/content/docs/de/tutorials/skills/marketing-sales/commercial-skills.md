---
title: Commercial Skills (Orchestrator)
description: Orchestriert alle kommerziellen Sub-Skills – Pricing, Deal-Desk, Partnerschaften, Kanalökonomie, Commercial Policy, RFP-Beantwortung und Bookings-Forecast – in einem einzigen Einstiegspunkt.
---

Verwende diesen Skill für die Überprüfung, Genehmigung oder Gestaltung von kommerziellen Prozessen: Preismodelle, Deal-Bewertung, Rabattgenehmigung, Partnerökonomie, Kanalökonomie, Commercial Policy, RFP-Antworten und Bookings-Forecasts.

## Skill

````markdown
---
name: commercial-skills
description: Use when reviewing, approving, or designing commercial motion — pricing models, deal review, discount approval, partnership economics, channel mix, commercial policy, RFP/RFI response, bookings forecast. Triggers on "review this deal", "should we discount", "pricing model", "partner economics", "RFP response", "bookings forecast", "channel mix". Forks context to route to one of seven Commercial sub-skills and returns a digest.
context: fork
---

# Commercial — Domain Orchestrator

The Commercial surface is **per-deal economics and packaging**: how the company prices, packages, approves, and forecasts revenue. This orchestrator forks its context, routes your inquiry to one of seven sub-skills, then returns a digest.

## When to invoke

| Symptom | Sub-skill |
|---|---|
| "We're losing deals on price — should we drop prices or repackage?" | `pricing-strategist` |
| "Can we approve a 40% discount on this Enterprise deal?" | `deal-desk` |
| "Should we sign with this reseller? What's their tier?" | `partnerships-architect` |
| "Is our partner channel actually profitable?" | `channel-economics` |
| "What should our standard discount matrix look like?" | `commercial-policy` |
| "Help me respond to this 60-page RFP" | `rfp-responder` |
| "What's our Q4 bookings forecast at current conversion?" | `commercial-forecaster` |

## Routing logic

### Signal table

| Signal class | Keywords | Sub-skill |
|---|---|---|
| **PRICING** | pricing, price, packaging, tier, WTP, willingness to pay, Van Westendorp, value pricing | `pricing-strategist` |
| **DEAL** | deal, discount, approval, margin, T&Cs, redline, exception, MSA | `deal-desk` |
| **PARTNERSHIP** | partner, reseller, OEM, co-sell, joint GTM, revenue share, channel agreement | `partnerships-architect` |
| **CHANNEL_ECON** | channel mix, cost to serve, channel ROI, direct vs partner, channel economics | `channel-economics` |
| **POLICY** | commercial policy, discount matrix, T&C library, exception policy, deal framework | `commercial-policy` |
| **RFP** | RFP, RFI, RFQ, proposal request, vendor questionnaire, security questionnaire | `rfp-responder` |
| **FORECAST** | forecast, bookings, billings, ARR, NRR forecast, pipeline math, funnel projection | `commercial-forecaster` |

## Workflow

### Step 1 — Explore before asking

Check the user's working directory first:
- Is there a deal record, pricing comp table, RFP doc, or pipeline export already in the workspace?
- Does the inquiry already disambiguate the lane?

If the workspace resolves the lane, **route silently**.

### Step 2 — If still ambiguous, ONE forcing question

Pattern:
```
Q1/1: [precise question naming the two candidate lanes]
Recommended: [Lane X, because <signal-table rationale>]

(Confirm, or override?)
```

### Step 3 — Return digest with cited canon challenge

≤ 200 words: analyzed, top 3 findings (anchored to canon citation), top 3 next actions, artifact path, and **one grill challenge** for the user.

## Output artifacts

| Sub-skill | Artifact |
|---|---|
| pricing-strategist | `pricing_model.md` + `wtp_analysis.json` |
| deal-desk | `deal_scorecard.md` + `discount_approval_routing.json` |
| partnerships-architect | `partner_tier_assignment.md` + `revshare_model.json` |
| channel-economics | `channel_mix_analysis.md` + `cost_to_serve.json` |
| commercial-policy | `commercial_policy.md` (discount matrix + exception flow) |
| rfp-responder | `rfp_response.md` + `winrate_estimate.json` |
| commercial-forecaster | `forecast.md` + `pipeline_math.json` |

## Anti-patterns (do not)

- ❌ Recommend a specific price — recommend a **range + model**
- ❌ Auto-approve discounts above policy — every >X% discount routes to a named human approver
- ❌ Generate an RFP response without proof points the user can verify
- ❌ Forecast bookings without surfacing the **conversion assumption** explicitly
- ❌ Run all 7 sub-skills "to be thorough" — pick one, digest, chain if needed

## Distinct from

- **`business-growth/sales-engineer`** — that's the **technical sale** (demos, POCs). Commercial is **economic shape** of the deal.
- **`c-level-advisor/cro-advisor`** — that's strategic CRO judgment. Commercial is tactical.
- **`finance/financial-analysis`** — that's **close + report**. Commercial is **forecast + per-deal economics**.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
