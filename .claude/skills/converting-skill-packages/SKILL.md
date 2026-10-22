---
name: converting-skill-packages
description: Use when converting an external skill-package folder under skills/ (e.g. skills/sales/, skills/marketing/, skills/finance/) into bilingual CompanyGPT skills in the innFactory-AI/company-ai-stack-skills repo, which the docs build turns into tutorial pages under tutorials/skills/<package>/. Covers SKILL.md + page.md, the German/English split, the "no Python/scripts" constraint, and catalog.json. Triggers: "convert the sales skills", "add the marketing skill package to tutorials", "translate the rest of the skills".
---

# Converting Skill Packages to CompanyGPT Skills

## Overview

The `skills/` folder holds external skill packages copied from elsewhere (`customer-success/`, `sales/`, `marketing/`, …). Each `.md` is a prompt-only agent skill. This skill turns one package into bilingual CompanyGPT skills.

**Where they go:** skill pages are **not** written in this repo. They live in [innFactory-AI/company-ai-stack-skills](https://github.com/innFactory-AI/company-ai-stack-skills) (check it out next to this repo), and `scripts/sync-skills.mjs` generates the tutorial pages, the skills index and the sidebar from it at build time (see `AGENTS.md`). That repo's `AGENTS.md` is the authoritative layout and writing guide.

**Core principle:** one source skill → one DE + one EN folder, each with `SKILL.md` (the skill) and `page.md` (the docs wrapper). **The skill body is German in `de/` and English in `en/`**.

## Hard Constraints

- **No Python, scripts, shell, or code execution.** CompanyGPT runs on LibreChat; these skills are prompt-only. If a source skill references running a script, reword it to a prompt-only instruction. Never add a code interpreter step.
- **Keep what the skill does.** Reword names and framing, but preserve every workflow step, table, output template, and guardrail verbatim in meaning. This is a reword + translate, not a rewrite.

## Files per Skill (both locales)

`<locale>/skills/<package>/<slug>/page.md`:

```markdown
---
title: <localized title>
description: <one localized sentence: what the skill does>
label: <localized sidebar/index label>
---

<one localized intro paragraph in DU form (DE) / plain (EN): "Verwende diesen Skill, wenn …" / "Use this skill when …">
```

`<locale>/skills/<package>/<slug>/SKILL.md`: the skill body (frontmatter `name`, `description`, then the skill). No outer fence: the generator adds `## Skill` and a fence long enough for any inner code blocks. Reference: `de/skills/customer-success/onboarding-plan-skill/` in the skills repo.

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
- Only `page.md` (title/description/label/intro) and the body language differ between the two.

## Wiring (in the skills repo)

1. Folders `de/skills/<package>/<slug>/` **and** `en/skills/<package>/<slug>/`, each with `SKILL.md` + `page.md`.
2. Add the package to `catalog.json` (`id` = folder, `label.de`/`label.en`, `skills` in display order). This drives the docs sidebar and index; nothing is edited in `astro.config.mjs` or `index.md` here.
3. Add the skills to the README table.
4. Preview: `SKILLS_DIR=../company-ai-stack-skills npm run build` in this repo. Open the PR in the skills repo; its CI builds the docs against the branch.

## Efficient Execution

A package has many skills × 2 locales. Dispatch one subagent per source skill (they write to independent files — no conflicts): each reads its source + the reference page, applies the recipe, and writes both locale files. Then do the `catalog.json` + README edits yourself in the main thread. See `superpowers:dispatching-parallel-agents`.

## Checklist (per package)

- [ ] Every source skill → DE + EN folder with `SKILL.md` + `page.md`
- [ ] DE body translated to German; EN body English; `name:` slug English in both
- [ ] Connectors reframed (MCP / companyRAG / file upload); "knowledge folders" gone
- [ ] No Python/scripts anywhere in the body
- [ ] Tip points at companyFILES; cross-references use new slugs
- [ ] Package + skills added to `catalog.json` and the README table
- [ ] `SKILLS_DIR=../company-ai-stack-skills npm run build` passes here

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Wrote pages under `src/content/docs/*/tutorials/skills/` | Generated and gitignored; write to the skills repo |
| Left the DE body in English | DE page body must be German |
| Translated the `name:` slug | Keep it English kebab-case |
| Added a script/code step | Prompt-only; reword it out |
| Created DE only (or EN only) | Always both mirrors |
| Forgot `catalog.json` | The docs build fails on folders missing from it |
