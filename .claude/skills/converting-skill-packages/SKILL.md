---
name: converting-skill-packages
description: Use when converting an external skill-package folder under skills/ (e.g. skills/sales/, skills/marketing/, skills/finance/) into bilingual CompanyGPT skills in the innFactory-AI/companygpt-library repo, which the docs build turns into tutorial pages under tutorials/skills/<package>/. Covers SKILL.md + page wrapper, the German/English split, the prompt-first / optional-code rule, and catalog.json. Triggers: "convert the sales skills", "add the marketing skill package to tutorials", "translate the rest of the skills".
---

# Converting Skill Packages to CompanyGPT Skills

## Overview

The `skills/` folder holds external skill packages copied from elsewhere (`customer-success/`, `sales/`, `marketing/`, …). Each `.md` is a prompt-only agent skill. This skill turns one package into bilingual CompanyGPT skills.

**Where they go:** skill pages are **not** written in this repo. They live in [innFactory-AI/companygpt-library](https://github.com/innFactory-AI/companygpt-library) (check it out next to this repo), and `scripts/sync-skills.mjs` generates the tutorial pages, the skills index and the sidebar from it at build time (see `AGENTS.md`). That repo's `AGENTS.md` is the authoritative layout and writing guide.

**Core principle:** one source skill → two folders `skills/de-<id>/` and `skills/en-<id>/`, each with `SKILL.md` (the skill), plus a docs page wrapper per locale under `pages/<locale>/`. **The skill body is German in `de-<id>` and English in `en-<id>`**.

## Hard Constraints

- **Prompt-first, code optional.** Every skill must work as plain instructions. A code-execution step is allowed only as an optional section ("If code execution is available …" / "Wenn Code-Ausführung verfügbar ist …") with a fallback; longer scripts go into bundled `references/` files. See the library repo `AGENTS.md`.
- **Keep what the skill does.** Reword names and framing, but preserve every workflow step, table, output template, and guardrail verbatim in meaning. This is a reword + translate, not a rewrite.

## Files per Skill (both locales)

`pages/<locale>/<package>/<id>.md` (never inside the skill folder; Library Sync would import it as a skill file):

```markdown
---
title: <localized title>
description: <one localized sentence: what the skill does>
label: <localized sidebar/index label>
---

<one localized intro paragraph in DU form (DE) / plain (EN): "Verwende diesen Skill, wenn …" / "Use this skill when …">
```

`skills/<locale>-<id>/SKILL.md`: the skill body (frontmatter `name`, `description`, then the skill). No outer fence: the generator adds `## Skill` and a fence long enough for any inner code blocks. Reference: `skills/de-onboarding-plan/` in the library repo.

## Per-Skill Rewording Recipe

Inside the fenced skill body:

1. **`name:`** → `<locale>-<id>`, identical to the folder name, with an English kebab-case `<id>` (e.g. `de-qbr-builder` / `en-qbr-builder`). The `<id>` is the same in both locales; only the prefix differs.
2. **H1** → the localized skill name.
3. **Opening 1–2 sentences** → reworded.
4. **Connectors section** → replace any "Recommended Connectors" with **"Where the Data Comes From" / "Woher die Daten kommen"** framed for CompanyGPT: data via **MCP servers** (CRM, analytics, support tools as examples), **companyRAG collections**, or **file upload**. Replace every "knowledge folders" with "companyRAG collections".
5. **Output-format tips** → point at **companyFILES** (e.g. "Ask for DOCX/XLSX/PPTX output via companyFILES …").
6. **Cross-references** between skills → use the name with the same locale prefix (`de-…` in DE, `en-…` in EN).

## Localization Rule

- **DE page:** translate the whole skill body to professional German (DU form). Keep as-is: the `<id>` part of `name:`, product/tool names (companyRAG, companyFILES, MCP, HubSpot, Salesforce, …), format keywords (PDF, DOCX, XLSX), and metric acronyms (ROI, KPI, NPS, CSAT, ARR). A German gloss in parentheses on first use of label-like ALL-CAPS status words (GREEN/RED, CRITICAL/HIGH) is fine.
- **EN page:** English skill body.
- Only the page wrapper (title/description/label/intro) and the body language differ between the two.

## Wiring (in the library repo)

1. Folders `skills/de-<id>/` **and** `skills/en-<id>/`, each with `SKILL.md`, and the wrappers `pages/de/<package>/<id>.md` + `pages/en/<package>/<id>.md`.
2. Add the package to `catalog.json` (`id` = category, `label.de`/`label.en`, `skills` = the `<id>`s in display order). This drives the docs sidebar and index; nothing is edited in `astro.config.mjs` or `index.md` here.
3. Add the skills to the README table.
4. Check: `npm run validate` in the library repo. Preview: `SKILLS_DIR=../companygpt-library npm run build` in this repo. Open the PR in the library repo; its CI validates and builds the docs against the branch.

## Efficient Execution

A package has many skills × 2 locales. Dispatch one subagent per source skill (they write to independent files — no conflicts): each reads its source + the reference page, applies the recipe, and writes both locale files. Then do the `catalog.json` + README edits yourself in the main thread. See `superpowers:dispatching-parallel-agents`.

## Checklist (per package)

- [ ] Every source skill → DE + EN `SKILL.md` + page wrapper
- [ ] DE body translated to German; EN body English; `name:` = folder = `de-<id>` / `en-<id>`
- [ ] Connectors reframed (MCP / companyRAG / file upload); "knowledge folders" gone
- [ ] No mandatory code step; optional code sections have a fallback
- [ ] Tip points at companyFILES; cross-references use new slugs
- [ ] Package + skills added to `catalog.json` and the README table
- [ ] `npm run validate` passes in the library repo and `SKILLS_DIR=../companygpt-library npm run build` passes here

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Wrote pages under `src/content/docs/*/tutorials/skills/` | Generated and gitignored; write to the skills repo |
| Left the DE body in English | DE page body must be German |
| Translated the `<id>` or dropped the locale prefix | `name:` = `<locale>-<English id>`, same as the folder |
| Added a mandatory script/code step | Make it optional with a fallback |
| Created DE only (or EN only) | Always both mirrors |
| Forgot `catalog.json` | Validation and the docs build fail on folders missing from it |
