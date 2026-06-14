---
title: Commercial Policy
description: Design discount rules, approval matrices, and exception flows — the governance foundation for Deal Desk and sales teams. To get started, prepare your ARR bands, current discount levels, approval authority levels, known exceptions, and your margin floor.
---

Use this skill when creating a company's first formal commercial policy, revising an outdated matrix, enforcing approval rules for exceptions, or when the CFO has tightened the margin floor. Have your ARR bands, current discount levels, approval authority by role, any existing exceptions or precedents, and your minimum margin floor on hand — the skill will walk you through each input step by step.

## Skill

````markdown
---
name: commercial-policy
description: "Use when designing or revising a company's commercial policy — the rules of engagement governing discounts off list price, approver thresholds, exception flows, and the deal framework that Deal Desk and AEs operate under. Covers discount matrix design (ARR band x term length x payment terms x strategic value), exception policy, discount governance, approval thresholds, and policy linting. Requires company context: ARR bands, current discount levels, approval authority by role, existing exceptions, and the margin floor. NOT per-deal application (that is deal-desk) and NOT pricing model selection (that is pricing-strategist)."
---

# commercial-policy

## Purpose

Design the **rules of engagement** that govern discounting off list price. Three analytical steps:

1. **Discount Matrix Design** — Build a 4-dimensional matrix (ARR band × term length × payment terms × strategic value tier)
2. **Exception Router** — Define the named approver chain with required compensating commitments for out-of-band requests
3. **Policy Lint** — Check the matrix against 10 governance rules and flag BLOCKERs before publishing

The output is the **policy itself** (matrix + exception flow + lint report), not a per-deal application of it.

## When to use

- A new Head of Commercial or Head of Deal Desk is writing the company's first formal commercial policy
- The existing matrix is older than 6 months and discount drift is showing in margin reviews
- Reps are citing past approvals as precedent and you need to break the precedent loop
- Q-over-Q exception count is rising and you suspect the matrix bands are mispriced
- CFO has tightened the margin floor and the matrix needs to be rebuilt

**Do NOT use this skill to:**
- Approve a specific deal — that's `commercial/skills/deal-desk`
- Set the pricing model + list price — that's `commercial/skills/pricing-strategist`

## Workflow

### 1. Audit current discount distribution

Provide a summary of your last 4 quarters of closed-won and closed-lost deals. Include:

```
Quarter | Channel | ARR Band | Discount % Applied | Outcome (won/lost) | 12-month NRR
--------|---------|----------|--------------------|-------------------|-------------
Q1      | Direct  | €50–100k |        18%         |       Won         |    112%
...
```

I will identify your actual discount distribution, flag bands where discounts cluster near the maximum, and highlight where high discounts correlate with poor NRR.

### 2. Design the data-backed matrix

Provide your policy inputs:

```
Business profile: (saas | enterprise-software | api | marketplace | services)
Margin floor (minimum gross margin %):
ARR bands: (e.g., <€25k / €25–100k / €100–250k / €250k+)
Term lengths: (e.g., 1yr / 2yr / 3yr)
Payment terms: (annual-upfront / quarterly / monthly)
Strategic value tiers and their definitions:
  - Tier 1 (e.g., reference customer, new vertical, anchor logo)
  - Tier 2 (e.g., high expansion potential)
  - Standard
CRO max discount authority (%):
CFO approval threshold (%):
```

I will produce a fully populated discount matrix with:
- Max discount % per cell (ARR band × term × payment × strategic tier)
- Named approver tier per cell
- Margin floor check per cell
- Cliff-edge detection at round-number ARR thresholds

### 3. Design the exception flow

I will generate an exception routing structure defining:
- Who approves exceptions above the matrix max (by ARR size and discount depth)
- Required compensating commitments for each approval tier (e.g., multi-year commit, logo rights, case study)
- Audit trail fields required for every exception record

Example exception record format:

```
Exception ID:
Deal ID:
Requested discount %:
Matrix max for this deal:
Approver required:
Compensating commitment:
Approved by:
Approval date:
Rationale:
```

### 4. Lint the matrix

Once the matrix is drafted, I will run a 10-rule governance check:

| Rule | Check |
|------|-------|
| L01 | No cell exceeds the margin floor |
| L02 | No cliff edges at round ARR thresholds (±10% band overlap test) |
| L03 | "Strategic value" tiers defined with concrete, testable criteria |
| L04 | Every approver tier maps to a named role |
| L05 | Exception compensating commitments are specified, not implied |
| L06 | CFO owns margin floor; CRO owns band cap (separate accountabilities) |
| L07 | Matrix covers all payment term combinations |
| L08 | No band where exception rate exceeded 30% last quarter |
| L09 | Quarterly review date is set |
| L10 | Audit trail format is defined for exceptions |

I will label each finding as **BLOCKER** or **WARNING**. Resolve every BLOCKER before publishing the policy.

### 5. Publish + quarterly review

Re-run the matrix design and lint check every quarter by providing updated deal data.

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

Walk depth-first. Lock questions 1–4 before opening 5–8. Then I will proceed through matrix design → lint pass → exception routing in sequence.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
