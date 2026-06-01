---
title: Sales Engineer
description: Analysiere RFP/RFI-Antworten auf Lücken, erstelle Wettbewerbsmatrizen und plane Proof-of-Concept-Engagements für den Pre-Sales-Bereich.
---

Verwende diesen Skill beim Beantworten von RFPs, Angeboten oder Proposals, beim Vergleich von Produktfeatures mit Wettbewerbern, beim Planen eines POC oder Sales-Demos sowie bei der Vorbereitung technischer Proposals und Win/Loss-Analysen.

## Skill

````markdown
---
name: "sales-engineer"
description: Analyzes RFP/RFI responses for coverage gaps, builds competitive feature comparison matrices, and plans proof-of-concept (POC) engagements for pre-sales engineering. Use when responding to RFPs, bids, or proposal requests; comparing product features against competitors; planning or scoring a customer POC or sales demo; preparing a technical proposal; or performing win/loss competitor analysis.
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

**Tools:** Run `rfp_response_analyzer.py` to score initial requirement alignment.

```bash
python scripts/rfp_response_analyzer.py assets/sample_rfp_data.json --format json > phase1_rfp_results.json
```

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

**Tools:** Run `competitive_matrix_builder.py` using Phase 1 data.

```bash
python scripts/competitive_matrix_builder.py competitive_data.json --format json > phase2_competitive.json
```

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

---

### Phase 4: POC & Evaluation

**Objective:** Execute a structured proof-of-concept that validates the solution.

**Checklist:**
- [ ] Define POC scope, success criteria, and timeline
- [ ] Allocate resources and set up environment
- [ ] Execute phased testing (core, advanced, edge cases)
- [ ] Track progress against success criteria
- [ ] Generate evaluation scorecard

**Tools:** Run `poc_planner.py` to generate the complete POC plan.

```bash
python scripts/poc_planner.py poc_data.json --format json > phase4_poc_plan.json
```

**Validation checkpoint:** POC conversion requires scorecard score >60% across all evaluation dimensions.

---

### Phase 5: Proposal & Closing

**Objective:** Deliver a technical proposal that supports the commercial close.

**Checklist:**
- [ ] Compile POC results and success metrics
- [ ] Create technical proposal with implementation plan
- [ ] Address outstanding objections with evidence
- [ ] Support pricing and packaging discussions
- [ ] Conduct win/loss analysis post-decision

---

## Python Automation Tools

### 1. RFP Response Analyzer

**Purpose:** Parse RFP/RFI requirements, score coverage, identify gaps, and generate bid/no-bid recommendations.

**Coverage Categories:** Full (100%), Partial (50%), Planned (25%), Gap (0%).

**Bid/No-Bid Logic:**
- **Bid:** Coverage >70% AND must-have gaps ≤3
- **Conditional Bid:** Coverage 50–70% OR must-have gaps 2–3
- **No-Bid:** Coverage <50% OR must-have gaps >3

### 2. Competitive Matrix Builder

**Purpose:** Generate feature comparison matrices, calculate competitive scores, identify differentiators and vulnerabilities.

**Feature Scoring:** Full (3), Partial (2), Limited (1), None (0).

### 3. POC Planner

**Purpose:** Generate structured POC plans with timeline, resource allocation, success criteria, and evaluation scorecards.

**Default Phase Breakdown:**
- **Week 1:** Setup — environment provisioning, data migration, configuration
- **Weeks 2–3:** Core Testing — primary use cases, integration testing
- **Week 4:** Advanced Testing — edge cases, performance, security
- **Week 5:** Evaluation — scorecard completion, stakeholder review, go/no-go

---

## Asset Templates

| Template | Purpose |
|----------|---------|
| `assets/technical_proposal_template.md` | Technical proposal with executive summary, solution architecture, implementation plan |
| `assets/demo_script_template.md` | Demo script with agenda, talking points, objection handling |
| `assets/poc_scorecard_template.md` | POC evaluation scorecard with weighted scoring |

## Integration Points

- **Marketing Skills** - Leverage competitive intelligence and messaging frameworks
- **Product Team** - Coordinate on roadmap items flagged as "Planned" in RFP analysis
- **Customer Success** - Hand off POC results and success criteria to CSM
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
