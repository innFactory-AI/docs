---
title: Commercial Policy
description: Gestalte Rabattregeln, Genehmigungsmatrizen und Exception-Flows – die Governance-Grundlage für Deal Desk und Vertrieb. Beinhaltet Discount-Matrix-Design, Lint-Checks und Audit-Trail.
---

Verwende diesen Skill beim Erstellen der ersten formalen Commercial Policy, beim Überarbeiten einer veralteten Matrix, beim Durchsetzen von Genehmigungsregeln für Ausnahmen oder wenn der CFO die Margin-Floor-Grenze enger gesetzt hat.

## Skill

````markdown
---
name: commercial-policy
description: "Use when designing or revising a company's commercial policy — the rules of engagement governing discounts off list price, approver thresholds, exception flows, and the deal framework that Deal Desk and AEs operate under. Covers discount matrix design (ARR band x term length x payment terms x strategic value), exception policy, discount governance, approval thresholds, and policy linting. NOT per-deal application (that is deal-desk) and NOT pricing model selection (that is pricing-strategist)."
---

# commercial-policy

## Purpose

Design the **rules of engagement** that govern discounting off list price. Three deterministic tools:

1. `discount_matrix_builder.py` — builds a 4-dimensional matrix (ARR band × term length × payment terms × strategic value tier)
2. `exception_router.py` — routes exceptions through the named approver chain with required compensating commitments
3. `policy_linter.py` — lints the matrix for governance defects

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

1. **Audit current discount distribution.** Pull the last 4 quarters of closed-won + closed-lost deals from CRM.

2. **Design the data-backed matrix.** Run `scripts/discount_matrix_builder.py --input policy_intake.json --profile {saas|enterprise-software|api|marketplace|services}`.

3. **Design the exception flow.** Run `scripts/exception_router.py --sample` to see the structure.

4. **Lint the matrix.** Run `scripts/policy_linter.py --input matrix.json`. Resolve every BLOCKER before publishing.

5. **Publish + quarterly review.** Re-run the builder and the linter every quarter.

## Scripts

| Script | Purpose |
|---|---|
| `scripts/discount_matrix_builder.py` | 4-dim data-backed matrix with approver tiers + margin floors |
| `scripts/exception_router.py` | Routes exception requests with compensating commitments + audit trail |
| `scripts/policy_linter.py` | 10-rule lint pass over the matrix |

```bash
# Design the matrix
python3 scripts/discount_matrix_builder.py --input policy_intake.json --profile saas --output json > matrix.json

# Lint the matrix
python3 scripts/policy_linter.py --input matrix.json

# Walk the exception flow
python3 scripts/exception_router.py --input request.json --output json
```

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

Walk depth-first. Lock 1-4 before opening 5-8. Then invoke `discount_matrix_builder.py` → `policy_linter.py` → `exception_router.py --sample` in sequence.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
