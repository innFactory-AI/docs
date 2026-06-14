---
title: Sales Engineer
description: Analyze RFP/RFI responses for coverage gaps, build competitive feature comparison matrices, and plan proof-of-concept engagements for pre-sales engineering. Have your RFP/RFI document or requirements list, your own product's features, and competitor products for comparison ready — POC parameters are needed for Phase 4.
---

Use this skill when responding to RFPs, bids, or proposal requests; comparing product features against competitors; planning or scoring a customer POC or sales demo; preparing a technical proposal; or performing win/loss competitor analysis. To get the most out of the skill, have your RFP/RFI document or a structured requirements list ready, along with your own product's feature set, competitor products you want to compare against, and — for Phase 4 — basic POC parameters such as scope, duration, and success criteria.

## Skill

````markdown
---
name: "sales-engineer"
description: Analyzes RFP/RFI responses for coverage gaps, builds competitive feature comparison matrices, and plans proof-of-concept (POC) engagements for pre-sales engineering. Use when responding to RFPs, bids, or proposal requests; comparing product features against competitors; planning or scoring a customer POC or sales demo; preparing a technical proposal; or performing win/loss competitor analysis. Requires an RFP/RFI document or structured requirements list, your own product's feature set, and competitor products for comparison; POC scope, duration, and success criteria are needed for Phase 4.
---

# Sales Engineer Skill

## 5-Phase Workflow

### Phase 1: Discovery & Research

**Objective:** Understand customer requirements, technical environment, and business drivers.

**Checklist:**
- [ ] Conduct technical discovery calls with stakeholders
- [ ] Map customer's current architecture and pain points
- [ ] Identify integration requirements and constraints
- [ ] Document security and compliance requirements
- [ ] Assess competitive landscape for this opportunity

**RFP Coverage Analysis:** Provide the RFP/RFI requirements and your product's capabilities in the format below. I will score coverage, identify gaps, and issue a bid/no-bid recommendation.

```
Requirement ID | Requirement Description          | Priority (must-have/nice-to-have) | Your Capability (full/partial/planned/gap)
---------------|----------------------------------|-----------------------------------|--------------------------------------------
R01            | SSO / SAML authentication        | must-have                         | full
R02            | REST API with webhooks            | must-have                         | partial
R03            | On-premise deployment option     | nice-to-have                      | gap
...
```

Coverage scoring:
- **Full** = 100% credit
- **Partial** = 50% credit
- **Planned** = 25% credit
- **Gap** = 0% credit

**Bid/No-Bid Logic:**
- **Bid:** Coverage >70% AND must-have gaps ≤3
- **Conditional Bid:** Coverage 50–70% OR must-have gaps 2–3
- **No-Bid:** Coverage <50% OR must-have gaps >3

**Validation checkpoint:** Coverage score must be >50% and must-have gaps ≤3 before proceeding to Phase 2.

---

### Phase 2: Solution Design

**Objective:** Design a solution architecture that addresses customer requirements.

**Checklist:**
- [ ] Map product capabilities to customer requirements
- [ ] Design integration architecture
- [ ] Identify customization needs and development effort
- [ ] Build competitive differentiation strategy
- [ ] Create solution architecture diagrams

**Competitive Matrix:** Provide your product's features and competitor data in this format. I will calculate competitive scores, identify your differentiators, and flag vulnerabilities.

```
Feature                  | Priority | Your Product | Competitor A | Competitor B
-------------------------|----------|--------------|--------------|-------------
Real-time analytics      | High     | Full (3)     | Full (3)     | Partial (2)
Native mobile app        | Medium   | Partial (2)  | Full (3)     | None (0)
SOC 2 Type II certified  | High     | Full (3)     | None (0)     | Full (3)
...
```

Feature scoring: Full = 3, Partial = 2, Limited = 1, None = 0.

I will calculate total scores per vendor, identify features where you lead (differentiators) and where you trail (vulnerabilities), and suggest talking points for each.

**Validation checkpoint:** Confirm at least one strong differentiator exists per customer priority.

---

### Phase 3: Demo Preparation & Delivery

**Objective:** Deliver compelling technical demonstrations tailored to stakeholder priorities.

**Checklist:**
- [ ] Build demo environment matching customer's use case
- [ ] Create demo script with talking points per stakeholder role
- [ ] Prepare objection handling responses
- [ ] Rehearse failure scenarios and recovery paths
- [ ] Collect feedback and adjust approach

Provide the stakeholder roles and their top priorities and I will generate a tailored demo script with role-specific talking points and objection handling responses.

---

### Phase 4: POC & Evaluation

**Objective:** Execute a structured proof-of-concept that validates the solution.

**Checklist:**
- [ ] Define POC scope, success criteria, and timeline
- [ ] Allocate resources and set up environment
- [ ] Execute phased testing (core, advanced, edge cases)
- [ ] Track progress against success criteria
- [ ] Generate evaluation scorecard

**POC Planning:** Provide your POC parameters and I will generate a complete POC plan:

```
Customer name:
POC duration (weeks):
Primary use cases to validate:
Success criteria (quantified where possible):
Stakeholders involved (roles):
Known constraints or risks:
```

I will produce a structured POC plan with the following default phase breakdown:
- **Week 1:** Setup — environment provisioning, data migration, configuration
- **Weeks 2–3:** Core Testing — primary use cases, integration testing
- **Week 4:** Advanced Testing — edge cases, performance, security
- **Week 5:** Evaluation — scorecard completion, stakeholder review, go/no-go

**Evaluation Scorecard:** I will generate a weighted scorecard based on your success criteria. POC conversion requires a score >60% across all evaluation dimensions.

**Validation checkpoint:** POC scorecard score must exceed 60% across all dimensions before proceeding to Phase 5.

---

### Phase 5: Proposal & Closing

**Objective:** Deliver a technical proposal that supports the commercial close.

**Checklist:**
- [ ] Compile POC results and success metrics
- [ ] Create technical proposal with implementation plan
- [ ] Address outstanding objections with evidence
- [ ] Support pricing and packaging discussions
- [ ] Conduct win/loss analysis post-decision

Provide your POC results and I will generate a structured technical proposal including: executive summary, solution architecture overview, POC results summary, implementation plan, and responses to outstanding objections.

---

## Document Templates

I can generate the following documents on request:

| Document | Contents |
|----------|---------|
| Technical Proposal | Executive summary, solution architecture, implementation plan, commercial summary |
| Demo Script | Agenda, stakeholder-specific talking points, objection handling |
| POC Scorecard | Weighted evaluation criteria, scoring rubric, go/no-go recommendation |

## Integration Points

- **Marketing Skills** - Leverage competitive intelligence and messaging frameworks
- **Product Team** - Coordinate on roadmap items flagged as "Planned" in RFP analysis
- **Customer Success** - Hand off POC results and success criteria to CSM
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
