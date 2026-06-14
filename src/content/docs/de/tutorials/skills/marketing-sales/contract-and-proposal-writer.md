---
title: Vertrags- & Angebotserstellung
description: Erstelle professionelle, jurisdiktionsgerechte Geschäftsdokumente – Freelance-Verträge, Projektangebote, SOWs, NDAs und MSAs – für US, EU, UK und DACH. Benötigt werden Vertragsparteien, Projektumfang, Vergütung, Laufzeit, Jurisdiktion und etwaige Sonderbedingungen.
---

Verwende diesen Skill beim Erstellen eines Freelance-Vertrags, beim Vorbereiten eines Kundenangebots, beim Schreiben eines SOW für ein neues Engagement oder beim Erstellen eines NDA vor dem Austausch sensibler Informationen. Halte Vertragsparteien (Namen, Adressen, Rollen), den Projektumfang bzw. die Leistungsbeschreibung, Vergütung, Laufzeit, Jurisdiktion (US/EU/UK/DACH) und etwaige Sonderbedingungen wie IP-Abtretung oder White-Label-Klauseln bereit.

## Skill

````markdown
---
name: "contract-and-proposal-writer"
description: "Generate professional, jurisdiction-aware business documents: freelance contracts, project proposals, SOWs, NDAs, and MSAs. Structured Markdown output with docx conversion instructions. Covers US (Delaware), EU (GDPR), UK, and DACH (German law) jurisdictions. Not a substitute for legal counsel — use as strong starting points. Requires: contracting parties (names, addresses, roles), project scope/deliverables, compensation, term/duration, jurisdiction (US/EU/UK/DACH), and any special conditions (e.g. IP assignment, white-label, subcontractors)."
---

# Contract & Proposal Writer

Erstelle professionelle, jurisdiktionsgerechte Geschäftsdokumente: Freelance-Verträge, Projektangebote, SOWs, NDAs und MSAs.

**Kein Ersatz für Rechtsberatung.** Diese Dokumente sind starke Ausgangspunkte – bei hochwertigen oder komplexen Engagements mit einem Anwalt prüfen lassen.

---

## Core Capabilities

- Freelance-Entwicklungsverträge (Festpreis & Stunden)
- Projektangebote mit Zeit- und Budgetaufschlüsselung
- Statements of Work (SOW) mit Deliverables-Matrix
- NDAs (gegenseitig & einseitig)
- Master Service Agreements (MSA)
- Jurisdiktionsspezifische Klauseln (US/EU/UK/DACH)
- DSGVO-Auftragsverarbeitungsverträge (EU/DACH)

---

## Key Clauses Reference

| Klausel | Optionen |
|---------|---------|
| Zahlungskonditionen | Netto-30, meilensteinbasiert, monatliches Retainer |
| IP-Eigentümerschaft | Work-for-hire (US), Abtretung (EU/UK), Rücklizenz |
| Haftungsbeschränkung | 1× Vertragswert (Standard), 3× (Hochrisiko) |
| Kündigung | Aus wichtigem Grund (14-Tage-Frist), ordentlich (30/60/90 Tage) |
| Vertraulichkeit | 2–5 Jahre, dauerhaft für Geschäftsgeheimnisse |
| Gewährleistung | „As-is"-Haftungsausschluss, begrenzte 30/90-Tage-Nachbesserung |
| Streitbeilegung | Schiedsverfahren (AAA/ICC), Gerichte (jurisdiktionsspezifisch) |

---

## Workflow

### 1. Anforderungen erfassen

Beantworte folgende Fragen, um das Dokument zu generieren:

1. Dokumenttyp? (Vertrag / Angebot / SOW / NDA / MSA)
2. Jurisdiktion? (US-Delaware / EU / UK / DACH)
3. Engagement-Typ? (Festpreis / Stunden / Retainer)
4. Parteien? (Namen, Rollen, Geschäftsadressen)
5. Leistungsbeschreibung? (1–3 Sätze)
6. Gesamtwert oder Stundensatz?
7. Startdatum / Enddatum oder Laufzeit?
8. Besondere Anforderungen? (IP-Abtretung, White-Label, Subunternehmer)

### 2. Dokument als Markdown erhalten

Das Dokument wird vollständig als strukturiertes Markdown ausgegeben – bereit zum Kopieren, Bearbeiten und Weiterverarbeiten. Für die Konvertierung in DOCX oder PDF kann das Markdown in ein Textverarbeitungsprogramm (z. B. Word, Google Docs) eingefügt oder über ein Pandoc-kompatibles Tool weiterverarbeitet werden.

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

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
