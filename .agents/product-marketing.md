# Product Marketing Context

*Last updated: 2026-06-15*

> Drafted from `content/leistungen/companygpt/` (CompanyGPT + addons companyRAG, companyFILES, companyDASHBOARD, companyTRANSLATE). Sections marked **[VERIFY]** or **[TODO]** need your input — the product/feature data is grounded in the site, but customer language, competitive detail, objections, and proof points are inferred and should be confirmed.

## Product Overview
**One-liner:** CompanyGPT — wie ChatGPT, aber mit Ihren Daten, in Ihrer Cloud und DSGVO- & EU-AI-Act-konform.

**What it does:** CompanyGPT ist ein sicherer, flexibler KI-Assistent (LibreChat-basiert), der vollständig in der eigenen Cloud-Infrastruktur des Kunden läuft (Azure, AWS, Google Cloud oder STACKIT). Er bündelt führende KI-Modelle (GPT-5, Gemini 2.5, Claude, Perplexity u.a.) hinter einer vertrauten Chat-Oberfläche, lässt sich um KI-Agenten, RAG, MCP-Server und Microsoft-365-Integrationen erweitern und wird zum Fixpreis inkl. KI-Leitlinie und Mitarbeiterschulung aufgebaut.

**Product category:** Private/Enterprise-KI-Assistent — DSGVO-konforme ChatGPT-Alternative für Unternehmen ("sovereign AI", "Enterprise GenAI Platform").

**Product type:** Software-Implementierungsprojekt + Service. Einmaliges Fixpreis-Setup in der Kundeninfrastruktur, kein SaaS-Mietmodell. Optionaler Wartungsvertrag.

**Business model:** Ab 9.970 EUR Fixpreis (zzgl. USt) für Aufbau inkl. KI-Leitlinie & Schulung. **Keine Lizenzgebühren** — laufende KI-Kosten tokenbasiert direkt beim Modellanbieter (Schätzung 500–1.500 EUR/Monat bei 10–50 Nutzern). Optionaler Wartungsvertrag 399 EUR/Monat (Updates, Support, Zugang zu Addons companyDASHBOARD, companyRAG, companyTRANSLATE, companyFILES).

## Target Audience
**Target companies:** Mittelständische Unternehmen und Konzerne in der DACH-Region (Fokus Deutschland), die generative KI produktiv einsetzen wollen, ohne sensible Daten an öffentliche KI-Dienste zu geben. Zielsegmente (breit):
- **Regulierte Branchen** — Finanzen, Versicherung, Gesundheit, Pharma (hohe Datenschutz-/Compliance-Anforderungen)
- **Öffentliche Hand** — Behörden, Kommunen, öffentliche Einrichtungen (Datensouveränität zentral)
- **Industrie & Mittelstand** — Produktion, Maschinenbau, klassischer DACH-Mittelstand
- **Konzerne allgemein** — große Unternehmen branchenübergreifend mit eigener Cloud/IT

**Decision-makers:** Geschäftsführung, CIO/IT-Leitung, CISO/Datenschutzbeauftragte, Innovations-/Digitalisierungsverantwortliche.

**Primary use case:** Mitarbeiter produktiv mit generativer KI arbeiten lassen (Texte, Analysen, Code, Recherche, Dokumentenerstellung) — ohne DSGVO-/EU-AI-Act-Risiko und ohne Kontrollverlust über Unternehmensdaten.

**Jobs to be done:**
- "Gib mir ChatGPT-Produktivität, ohne dass meine Firmendaten das Haus verlassen."
- "Mach mich EU-AI-Act- und DSGVO-konform — inklusive KI-Leitlinie und geschulter Mitarbeiter."
- "Lass mich Unternehmenswissen (SharePoint, Dokumente) und interne Tools sicher mit KI nutzen."

**Use cases:**
- Interner KI-Assistent für alle Mitarbeiter (vertraute Chat-UI im Corporate Branding, SSO über EntraID)
- Wissenssuche über die gesamte Dokumentenbasis (companyRAG, SharePoint-Sync)
- KI-Agenten & Workflow-Automatisierung (Agent Marketplace, n8n, MCP-Server)
- DSGVO-konforme Dokumentenübersetzung im eigenen Microsoft-Tenant (companyTRANSLATE)
- Automatische Erstellung von Word/Excel/PowerPoint/PDF (companyFILES)
- Transparenz & Kostensteuerung der KI-Nutzung (companyDASHBOARD)

## Personas
**[TODO: bestätigen/verfeinern — unten ist eine erste Annahme]**

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| User (Mitarbeiter) | Produktivität, einfache Bedienung | Darf ChatGPT nicht nutzen / Schatten-KI | Vertraute KI, freigegeben & sicher |
| Champion (IT-/Innovationsleitung) | KI einführen ohne Risiko | Build vs. Buy, Tempo | Fertige Lösung in Wochen, erweiterbar |
| Decision Maker (GF) | ROI, Zukunftssicherheit | Kosten vs. Nutzen, Compliance-Haftung | Fixpreis, keine Lizenzfalle, AI-Act-konform |
| Technical Influencer (CISO/DSB) | Datenhoheit, Compliance | Daten dürfen EU/Infra nicht verlassen | 100% Datenkontrolle, eigene Cloud, Audit-Logs |
| Financial Buyer | Planbare Kosten | Unklare KI-Kosten | Fixpreis + transparente Tokenabrechnung |

## Problems & Pain Points
**Core problem:** Unternehmen wollen das Potenzial von KI nutzen, dürfen/können aber öffentliche KI-Dienste (ChatGPT, Claude, Gemini) nicht einsetzen, weil sensible Daten dabei das Haus verlassen und DSGVO/EU-AI-Act verletzt würden.

**Why alternatives fall short:**
- Öffentliche KI-Assistenten: Daten verlassen die Kontrolle, keine DSGVO-/AI-Act-Sicherheit, monatliche Lizenzkosten pro Nutzer
- Eigenentwicklung: zu langsam, zu teuer, kein Compliance-/Schulungspaket
- "KI verbieten": Schatten-KI entsteht trotzdem, Produktivitätsverlust

**What it costs them:** Verpasste Produktivitätsgewinne, Compliance-/Haftungsrisiko, unkontrollierte Schatten-KI, planlose oder überhöhte KI-Kosten.

**Emotional tension:** Angst vor Datenschutzverstößen und AI-Act-Strafen; Druck, bei KI nicht abgehängt zu werden; Unsicherheit über Kosten und Kontrolle. **[VERIFY: O-Töne von Kunden]**

## Competitive Landscape
**Direct:**
- **ChatGPT Enterprise / Microsoft Copilot** — öffentliche Enterprise-KI-Assistenten. Fallen kurz bei voller Datenhoheit in der *eigenen* Infrastruktur, beim lizenzfreien tokenbasierten Modell und beim Multi-Modell-Ansatz (nicht an einen Anbieter gebunden).
- **Andere private-GenAI-Integratoren** (LibreChat/Open-WebUI on-prem aufsetzen) — fallen oft kurz beim mitgelieferten Compliance-Paket (KI-Leitlinie) + Mitarbeiterschulung als Komplettlösung sowie bei der rechtlichen Tiefe (Beirat mit IT-Fachanwalt & KI-Professor).
- **Eigenentwicklung** (Kunde baut selbst auf Azure OpenAI o.ä.) — fällt kurz bei Geschwindigkeit (Wochen vs. Monate), Wartung, Governance und Compliance-/Schulungspaket.

**Secondary:** Öffentliche KI-Assistenten generell (Claude, Gemini, ChatGPT Team) — fallen kurz bei Datenschutz/AI-Act-Konformität für Unternehmensdaten.

**Indirect:** "Kein KI-Einsatz" / KI-Verbot → Schatten-KI — fällt kurz bei Produktivität, Sicherheit und Kontrolle.

## Differentiation
**Key differentiators:**
- Läuft in der **eigenen Cloud des Kunden** (Azure/AWS/GCP/STACKIT) — Daten verlassen nie die Infrastruktur
- **Keine Lizenzgebühren** — Fixpreis-Aufbau + tokenbasierte Abrechnung direkt beim Anbieter
- **Multi-Modell** an einem Ort (GPT-5, Gemini 2.5, Claude, Perplexity, DeepSeek, Mistral, Llama, Kimi K2, Qwen)
- **Compliance & Schulung inklusive** — KI-Leitlinie für den EU-AI-Act + Mitarbeiterschulung im Paket
- Erweiterbar: KI-Agenten, Agent Marketplace, MCP-Server, n8n, SharePoint, RAG, OCR
- Souveräne Inferenz möglich über STACKIT Model Serving (Rechenzentren in Deutschland)

**How we do it differently:** Standardisierte Basis (schnell, Wochen statt Monate) + maßgeschneiderte Integration in bestehende IT, ausgeliefert als Fixpreis-Komplettpaket inkl. Recht & Schulung.

**Why that's better:** Volle Datenkontrolle + Compliance-Sicherheit + planbare Kosten + sofortiger Produktivitätsgewinn, ohne Vendor-Lock-in oder Lizenzfalle.

**Why customers choose us:** Komplettpaket aus Tech (innFactory) + Recht/Compliance (Beirat mit IT-Fachanwalt & KI-Professor) — nicht nur Software, sondern rechtssicherer, geschulter KI-Betrieb.

## Objections
**[VERIFY — inferred responses based on FAQ]**
| Objection | Response |
|-----------|----------|
| "Was, wenn unsere Daten doch abfließen?" | Läuft 100% in Ihrer eigenen EU-Infrastruktur; Daten verlassen nie Ihre Kontrolle. |
| "Die laufenden API-Kosten sind unkalkulierbar." | Tokenbasiert + im Paket enthaltene Schulung zur Modellwahl spart bis zu 80% Modellkosten; Standardmodell pro Use-Case vorkonfigurierbar. |
| "Ist das wirklich AI-Act-konform?" | KI-Leitlinie + Schulungen für KI-Kompetenz sind Teil des Pakets. |
| "Dauert die Einführung nicht ewig?" | Einsatzbereit in wenigen Wochen auf standardisierter Basis. |

**Anti-persona:** **[TODO]** — vermutlich: Einzelunternehmer/Kleinstbetriebe ohne eigene Cloud/IT, die nur eine günstige Einzelplatz-ChatGPT-Lizenz wollen; Firmen ohne Datenschutzanforderungen, denen der öffentliche Dienst genügt.

## Switching Dynamics
**[VERIFY]**
**Push:** ChatGPT-Verbot/Schatten-KI im Unternehmen, Datenschutz-/AI-Act-Druck, unklare oder steigende Lizenz-/Nutzungskosten.
**Pull:** Vertraute ChatGPT-artige UI, volle Datenkontrolle, Multi-Modell, Compliance + Schulung inklusive, Fixpreis.
**Habit:** Bestehende Tools/Prozesse, Microsoft-365-Ökosystem, "wir warten erstmal ab".
**Anxiety:** Implementierungsaufwand, laufende API-Kosten, "funktioniert das in unserer Cloud?", interne Akzeptanz.

## Customer Language
**[TODO: echte Kundenzitate ergänzen — derzeit nur Website-Sprache]**
**How they describe the problem:**
- "Wir dürfen ChatGPT nicht nutzen, weil unsere Daten…" **[VERIFY]**
**How they describe us:**
- "Wie ChatGPT, aber mit unseren Daten und DSGVO-konform" (Website-Claim)
**Words to use:** DSGVO-konform, EU-AI-Act-konform, Datenkontrolle/Datenhoheit, in Ihrer Cloud, keine Lizenzgebühren, Fixpreis, souverän, Enterprise-Ready, KI-Kompetenz, KI-Leitlinie
**Words to avoid:** **[TODO — z.B. "günstig/billig"? "Open Source" als Hauptargument?]**
**Glossary:**
| Term | Meaning |
|------|---------|
| CompanyGPT | innFactorys privater KI-Assistent in der Kunden-Cloud |
| companyRAG | Addon: semantische KI-Suche über die Dokumentenbasis (MCP-Server ai-search) |
| companyFILES | Addon: Verwaltung KI-generierter Dokumente & Vorlagen |
| companyDASHBOARD | Addon: Transparenz über Nutzung, Token, Agenten, Kosten |
| companyTRANSLATE | Addon: DSGVO-konformer KI-Übersetzer im eigenen MS-Tenant |
| MCP | Model Context Protocol — Anbindung externer Tools/Daten an KI-Agenten |
| STACKIT Model Serving | Souveräne KI-Inferenz in deutschen Rechenzentren |
| KI-Leitlinie | Compliance-Dokument für den EU-AI-Act, im Paket enthalten |

## Brand Voice
**Tone:** Professionell, vertrauenswürdig, kompetent — Sicherheit & Souveränität im Vordergrund, ohne Hype.
**Style:** Klar, nutzenorientiert, technisch fundiert aber verständlich; deutschsprachig mit echten Umlauten.
**Personality:** Souverän, sicherheitsbewusst, pragmatisch, innovativ, partnerschaftlich. **[VERIFY]**
> Markenclaim innFactory AI: "Engineering AI. Enabling Tomorrow."

## Proof Points
**[TODO — größte Lücke: echte Zahlen, Logos, Testimonials fehlen]**
**Metrics:** Ab 9.970 EUR Fixpreis · 0 EUR Lizenzgebühren · 100% Datenkontrolle · einsatzbereit in wenigen Wochen · bis zu 80% Modellkosten-Ersparnis durch Schulung.
**Customers:** **[TODO: Referenzkunden/Logos]**
**Testimonials:** **[TODO]**
**Value themes:**
| Theme | Proof |
|-------|-------|
| Datenhoheit | Läuft in eigener EU-Cloud (Azure/AWS/GCP/STACKIT), Daten verlassen nie die Infrastruktur |
| Compliance ohne Mehraufwand | KI-Leitlinie + Schulung im Fixpreis enthalten |
| Planbare Kosten | Keine Lizenzgebühren, tokenbasiert, Kostentransparenz via companyDASHBOARD |
| Flexibilität | Multi-Modell, Agenten, MCP, n8n, SharePoint, RAG |

## Goals
**Business goal:** **[VERIFY]** — Leads/Anfragen für CompanyGPT-Implementierungsprojekte generieren (DACH-Mittelstand & Konzerne).
**Conversion action:** "Kontakt aufnehmen" / Gespräch vereinbaren ("Jetzt CompanyGPT anfragen").
**Current metrics:** **[TODO]**
