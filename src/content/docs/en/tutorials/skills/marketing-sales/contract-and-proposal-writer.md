---
title: Contract & Proposal Writer
description: Generate professional, jurisdiction-aware business documents — freelance contracts, project proposals, SOWs, NDAs, and MSAs — for US, EU, UK, and DACH (German law).
---

Use this skill when creating a freelance contract, preparing a client proposal, writing an SOW for a new engagement, or drafting an NDA before sharing sensitive information.

## Skill

````markdown
---
name: "contract-and-proposal-writer"
description: "Generate professional, jurisdiction-aware business documents: freelance contracts, project proposals, SOWs, NDAs, and MSAs. Structured Markdown output with docx conversion instructions. Covers US (Delaware), EU (GDPR), UK, and DACH (German law) jurisdictions. Not a substitute for legal counsel — use as strong starting points."
---

# Contract & Proposal Writer

Generate professional, jurisdiction-aware business documents: freelance contracts, project proposals, SOWs, NDAs, and MSAs.

**Not a substitute for legal counsel.** Use these templates as strong starting points; review with an attorney for high-value or complex engagements.

---

## Core Capabilities

- Freelance development contracts (fixed-price & hourly)
- Project proposals with timeline/budget breakdown
- Statements of Work (SOW) with deliverables matrix
- NDAs (mutual & one-way)
- Master Service Agreements (MSA)
- Jurisdiction-specific clauses (US/EU/UK/DACH)
- GDPR Data Processing Addenda (EU/DACH)

---

## Key Clauses Reference

| Clause | Options |
|--------|---------|
| Payment terms | Net-30, milestone-based, monthly retainer |
| IP ownership | Work-for-hire (US), assignment (EU/UK), license-back |
| Liability cap | 1x contract value (standard), 3x (high-risk) |
| Termination | For cause (14-day cure), convenience (30/60/90-day notice) |
| Confidentiality | 2-5 year term, perpetual for trade secrets |
| Warranty | "As-is" disclaimer, limited 30/90-day fix warranty |
| Dispute resolution | Arbitration (AAA/ICC), courts (jurisdiction-specific) |

---

## Workflow

### 1. Gather Requirements

Ask the user:

    1. Document type? (contract / proposal / SOW / NDA / MSA)
    2. Jurisdiction? (US-Delaware / EU / UK / DACH)
    3. Engagement type? (fixed-price / hourly / retainer)
    4. Parties? (names, roles, business addresses)
    5. Scope summary? (1-3 sentences)
    6. Total value or hourly rate?
    7. Start date / end date or duration?
    8. Special requirements? (IP assignment, white-label, subcontractors)

### 2. Convert to DOCX

```bash
# Install pandoc
brew install pandoc        # macOS
apt install pandoc         # Ubuntu

# Basic conversion
pandoc contract.md -o contract.docx \
  --reference-doc=reference.docx \
  -V geometry:margin=1in
```

---

## Jurisdiction Notes

### US (Delaware)
- Governing law: State of Delaware
- Work-for-hire doctrine applies (Copyright Act 101)
- Arbitration: AAA Commercial Rules

### EU (GDPR)
- Must include Data Processing Addendum if handling personal data
- IP assignment requires separate written deed in some member states

### UK (post-Brexit)
- Governed by English law
- IP: Patents Act 1977 / CDPA 1988
- Arbitration: LCIA Rules

### DACH (Germany / Austria / Switzerland)
- BGB (Bürgerliches Gesetzbuch) governs contracts
- IP: Author always retains moral rights; must explicitly transfer Nutzungsrechte
- Non-competes: max 2 years, compensation required (§ 74 HGB)
- DSGVO (GDPR implementation) mandatory for personal data processing
- Kündigungsfristen: statutory notice periods apply

---

## Common Pitfalls

1. **Missing IP assignment language** - "work for hire" alone is insufficient in EU
2. **Vague acceptance criteria** - Always define what "accepted" means
3. **No change order process** - Add a clause for out-of-scope work
4. **Jurisdiction mismatch** - Choosing Delaware law for a German-only project creates enforcement problems
5. **Missing limitation of liability** - Without a cap, one bug could mean unlimited damages
6. **Oral amendments** - Contracts modified verbally are hard to enforce

---

## Best Practices

- Use **milestone payments** over net-30 for projects >$10K
- For EU/DACH: always check if a DPA is needed (any personal data = yes)
- For DACH: include a **Schriftformklausel** (written form clause) explicitly
- Add a **force majeure** clause for anything over 3 months
- For retainers: define response time SLAs (e.g., 4h urgent / 24h normal)
- Review annually - laws change, especially GDPR enforcement interpretations
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
