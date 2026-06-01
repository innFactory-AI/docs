---
title: Sales Engineer
description: Analysiere RFP/RFI-Antworten auf Lücken, erstelle Wettbewerbsmatrizen und plane Proof-of-Concept-Engagements für den Pre-Sales-Bereich. Benötigt werden das RFP/RFI-Dokument oder eine Anforderungsliste, eigene Produktfeatures, Wettbewerberprodukte zum Vergleich sowie optional POC-Anforderungen.
---

Verwende diesen Skill beim Beantworten von RFPs, Angeboten oder Proposals, beim Vergleich von Produktfeatures mit Wettbewerbern, beim Planen eines POC oder Sales-Demos sowie bei der Vorbereitung technischer Proposals und Win/Loss-Analysen. Halte das RFP/RFI-Dokument oder eine strukturierte Anforderungsliste, deine eigenen Produktfeatures, die Wettbewerberprodukte zum Vergleich und – falls relevant – die POC-Anforderungen bereit.

## Skill

````markdown
---
name: "sales-engineer"
description: Analyzes RFP/RFI responses for coverage gaps, builds competitive feature comparison matrices, and plans proof-of-concept (POC) engagements for pre-sales engineering. Use when responding to RFPs, bids, or proposal requests; comparing product features against competitors; planning or scoring a customer POC or sales demo; preparing a technical proposal; or performing win/loss competitor analysis. Requires: the RFP/RFI document or a structured requirements list, own product features, competitor products for comparison, and optionally POC requirements.
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

**RFP-Analyse:** Stelle die RFP/RFI-Anforderungen im folgenden Format bereit. Die Analyse berechnet den Coverage-Score, identifiziert Lücken und gibt eine Bid/No-Bid-Empfehlung aus:

```
Anforderung                          | Priorität   | Unser Status
Single-Sign-On (SSO)                 | must-have   | Full
REST API mit Webhook-Support         | must-have   | Partial
On-Premise-Deployment                | nice-to-have| Gap
DSGVO-Konformität                    | must-have   | Full
SLA 99,9 % Uptime                    | must-have   | Full
Benutzerdefinierte Reporting-Exports | nice-to-have| Planned
...
```

Coverage-Kategorien: Full (100 %), Partial (50 %), Planned (25 %), Gap (0 %).

**Bid/No-Bid-Logik:**
- **Bid:** Coverage > 70 % UND must-have Gaps ≤ 3
- **Conditional Bid:** Coverage 50–70 % ODER must-have Gaps 2–3
- **No-Bid:** Coverage < 50 % ODER must-have Gaps > 3

**Validation checkpoint:** Coverage-Score > 50 % und must-have Gaps ≤ 3 erforderlich, bevor Phase 2 beginnt.

---

### Phase 2: Solution Design

**Objective:** Design a solution architecture that addresses customer requirements.

**Checklist:**
- [ ] Map product capabilities to customer requirements
- [ ] Design integration architecture
- [ ] Identify customization needs and development effort
- [ ] Build competitive differentiation strategy
- [ ] Create solution architecture diagrams

**Competitive-Matrix-Analyse:** Stelle Feature-Daten pro Anbieter bereit. Die Analyse berechnet den Wettbewerbs-Score und identifiziert Differenziatoren und Schwachstellen:

```
Feature                  | Priorität (1–3) | Unser Produkt | Wettbewerber A | Wettbewerber B
SSO / SAML               | 3               | Full          | Full           | Partial
REST API                 | 3               | Full          | Limited        | Full
On-Premise               | 2               | None          | Full           | None
Mobile App               | 1               | Partial       | Full           | Full
Custom Reporting         | 2               | Full          | Partial        | None
SLA 99,9 %               | 3               | Full          | Full           | Partial
```

Feature-Scoring: Full (3), Partial (2), Limited (1), None (0). Gewichteter Score = Σ(Feature-Score × Priorität).

**Validation checkpoint:** Mindestens ein starker Differenziator pro Kunden-Priorität muss vorhanden sein.

---

### Phase 3: Demo Preparation & Delivery

**Objective:** Deliver compelling technical demonstrations tailored to stakeholder priorities.

**Checklist:**
- [ ] Build demo environment matching customer's use case
- [ ] Create demo script with talking points per stakeholder role
- [ ] Prepare objection handling responses
- [ ] Rehearse failure scenarios and recovery paths
- [ ] Collect feedback and adjust approach

Für die Erstellung eines Demo-Skripts: Stakeholder-Rollen, Haupt-Use-Cases und bekannte Einwände angeben. Das Skript wird mit Agenda, rollenbezogenen Talking Points und Einwand-Antworten ausgegeben.

---

### Phase 4: POC & Evaluation

**Objective:** Execute a structured proof-of-concept that validates the solution.

**Checklist:**
- [ ] Define POC scope, success criteria, and timeline
- [ ] Allocate resources and set up environment
- [ ] Execute phased testing (core, advanced, edge cases)
- [ ] Track progress against success criteria
- [ ] Generate evaluation scorecard

**POC-Plan:** Stelle folgende Angaben bereit. Der vollständige POC-Plan wird mit Zeitplan, Ressourcenbedarf, Erfolgskriterien und Bewertungs-Scorecard ausgegeben:

```
Kunde:
Produkt/Lösung:
POC-Dauer (Wochen):
Primäre Use Cases:
Erfolgskriterien:
Beteiligte Stakeholder (Anzahl/Rollen):
Bekannte Risiken:
```

**Standard-Phaseneinteilung:**
- **Woche 1:** Setup — Umgebungsbereitstellung, Datenmigration, Konfiguration
- **Wochen 2–3:** Core Testing — primäre Use Cases, Integrationstests
- **Woche 4:** Advanced Testing — Edge Cases, Performance, Security
- **Woche 5:** Evaluation — Scorecard-Abschluss, Stakeholder-Review, Go/No-Go

**Validation checkpoint:** POC-Konvertierung erfordert Scorecard-Score > 60 % über alle Bewertungsdimensionen.

---

### Phase 5: Proposal & Closing

**Objective:** Deliver a technical proposal that supports the commercial close.

**Checklist:**
- [ ] Compile POC results and success metrics
- [ ] Create technical proposal with implementation plan
- [ ] Address outstanding objections with evidence
- [ ] Support pricing and packaging discussions
- [ ] Conduct win/loss analysis post-decision

Für die Erstellung eines technischen Proposals: POC-Ergebnisse, offene Einwände und Implementierungsanforderungen angeben. Das Proposal wird mit Executive Summary, Solution Architecture, Implementierungsplan und Risikobewertung ausgegeben.

---

## Analyse-Ausgaben

### RFP-Analyse
- Coverage-Score (gesamt und nach Kategorie)
- Priorisierte Lücken-Liste (must-have / nice-to-have)
- Bid/No-Bid-Empfehlung mit Begründung
- Empfohlene Antwort-Strategie pro Anforderungs-Gap

### Competitive Matrix
- Gewichteter Score pro Anbieter
- Top-Differenziatoren (unsere Stärken vs. Wettbewerb)
- Vulnerabilitäten (Bereiche, in denen Wettbewerber führen)
- Empfohlene Positionierungsstrategie

### POC-Scorecard-Vorlage

| Bewertungsdimension | Gewichtung | Score (0–100) | Gewichteter Score |
|---------------------|-----------|--------------|------------------|
| Funktionale Abdeckung | 30 % | — | — |
| Integrationsqualität | 25 % | — | — |
| Performance | 20 % | — | — |
| Usability | 15 % | — | — |
| Security/Compliance | 10 % | — | — |
| **Gesamt** | 100 % | — | — |

---

## Integration Points

- **Marketing Skills** — Competitive intelligence und Messaging Frameworks nutzen
- **Product Team** — Roadmap-Items koordinieren, die als „Planned" in der RFP-Analyse markiert sind
- **Customer Success** — POC-Ergebnisse und Erfolgskriterien an CSM übergeben
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
