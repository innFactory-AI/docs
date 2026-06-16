---
name: converting-skill-packages
description: Use when converting an external skill-package folder under skills/ (e.g. skills/sales/, skills/marketing/, skills/finance/) into bilingual CompanyGPT tutorial pages under src/content/docs/{de,en}/tutorials/skills/<package>/. Covers the page wrapper, the German/English split, the "no Python/scripts" constraint, the index, and the sidebar registration. Triggers: "convert the sales skills", "add the marketing skill package to tutorials", "translate the rest of the skills".
---

# Converting Skill Packages to Tutorial Pages

## Overview

The `skills/` folder holds external skill packages copied from elsewhere (`customer-success/`, `sales/`, `marketing/`, …). Each `.md` is a prompt-only agent skill. This skill turns one package into bilingual tutorial pages that match the existing `tutorials/skills/files/` set.

**Core principle:** one source skill → one DE page + one EN mirror, each wrapping the skill in a fenced block. The wrapper is localized; **the skill body itself is German on the DE page and English on the EN page**.

**REQUIRED BACKGROUND:** `creating-tutorial` covers the general tutorial mechanics (frontmatter, DE/EN mirror, index, sidebar). This skill is the package-conversion specialization — follow both.

## Hard Constraints

- **No Python, scripts, shell, or code execution.** CompanyGPT runs on LibreChat; these skills are prompt-only. If a source skill references running a script, reword it to a prompt-only instruction. Never add a code interpreter step.
- **Keep what the skill does.** Reword names and framing, but preserve every workflow step, table, output template, and guardrail verbatim in meaning. This is a reword + translate, not a rewrite.

## Page Shape (both locales)

````markdown
---
title: <localized title>
description: <one localized sentence: what the skill does>
---

<one localized intro paragraph in DU form (DE) / plain (EN): "Verwende diesen Skill, wenn …" / "Use this skill when …">

## Skill

`````markdown
<the skill body — German on DE page, English on EN page>
`````
````

Use a **four-backtick** outer fence (the skill body contains a three-backtick output template). Match the reference: `src/content/docs/de/tutorials/skills/customer-success/onboarding-plan-skill.md`.

## Per-Skill Rewording Recipe

Inside the fenced skill body:

1. **`name:`** → kebab-case, package-appropriate, ending `-skill` (e.g. `qbr-builder-skill`). Keep this slug **English** in both locales — it is a technical identifier.
2. **H1** → the localized skill name.
3. **Opening 1–2 sentences** → reworded.
4. **Connectors section** → replace any "Recommended Connectors" with **"Where the Data Comes From" / "Woher die Daten kommen"** framed for CompanyGPT: data via **MCP servers** (CRM, analytics, support tools as examples), **companyRAG collections**, or **file upload**. Replace every "knowledge folders" with "companyRAG collections".
5. **Output-format tips** → point at **companyFILES** (e.g. "Ask for DOCX/XLSX/PPTX output via companyFILES …").
6. **Cross-references** between skills → update to the new renamed slugs.

## Localization Rule

- **DE page:** translate the whole skill body to professional German (DU form). Keep as-is: the `name:` slug, product/tool names (companyRAG, companyFILES, MCP, HubSpot, Salesforce, …), format keywords (PDF, DOCX, XLSX), and metric acronyms (ROI, KPI, NPS, CSAT, ARR). A German gloss in parentheses on first use of label-like ALL-CAPS status words (GREEN/RED, CRITICAL/HIGH) is fine.
- **EN page:** English skill body.
- Only the frontmatter title/description and intro paragraph differ between the two beyond the body language.

## Wiring (do all — see `creating-tutorial`)

1. Files at `src/content/docs/de/tutorials/skills/<package>/<slug>.md` **and** the `en/` mirror.
2. Add a `## <Package Title>` section with one bullet per skill to **both** `tutorials/skills/index.md` files.
3. In `astro.config.mjs`, under the **Skills** group, add a nested group for the package:
   ```js
   {
     label: '<Package>', translations: { en: '<Package>' },
     items: [
       { label: '<DE label>', translations: { en: '<EN label>' }, slug: 'tutorials/skills/<package>/<slug>' },
       // …one per skill
     ]
   }
   ```
   The file uses **tab** indentation — match it.

## Efficient Execution

A package has many skills × 2 locales. Dispatch one subagent per source skill (they write to independent files — no conflicts): each reads its source + the reference page, applies the recipe, and writes both locale files. Then do the index + sidebar edits yourself in the main thread. See `superpowers:dispatching-parallel-agents`.

## Checklist (per package)

- [ ] Every source skill → DE + EN page, four-backtick fence
- [ ] DE body translated to German; EN body English; `name:` slug English in both
- [ ] Connectors reframed (MCP / companyRAG / file upload); "knowledge folders" gone
- [ ] No Python/scripts anywhere in the body
- [ ] Tip points at companyFILES; cross-references use new slugs
- [ ] `## <Package>` section added to both index.md files
- [ ] Nested package group added under Skills in `astro.config.mjs` (tab-indented)
- [ ] `npm run build` (or `astro build`) passes — no broken slugs

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Three-backtick outer fence | Use four — the body has a `` ``` `` template inside |
| Left the DE body in English | DE page body must be German |
| Translated the `name:` slug | Keep it English kebab-case |
| Added a script/code step | Prompt-only; reword it out |
| Created DE only (or EN only) | Always both mirrors |
| Forgot index or sidebar | Both index.md files + `astro.config.mjs` |
