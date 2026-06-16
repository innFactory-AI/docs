---
name: creating-docs-page
description: Use when adding or editing a CompanyGPT feature/reference documentation page under src/content/docs (e.g. a new addon, integration, or settings page) - covers frontmatter, German prose conventions, asides, screenshots, internal links, the DE/EN mirror requirement, and astro.config.mjs sidebar registration.
---

# Creating a CompanyGPT Docs Page

## Overview

Docs pages live under `src/content/docs/<locale>/company-gpt/` and document a **product feature** (an addon, integration, settings area, UI concept). This is a Starlight/Astro site. Every page is **bilingual**: a German page under `de/` and an English mirror under `en/` at the same relative path, both registered in `astro.config.mjs`.

**Core principle:** A docs page describes *what a feature is and how to use it* in calm, factual German prose with screenshots — not a tutorial walkthrough. For step-by-step guides or agent templates, use the `creating-tutorial` skill instead.

## When to Use

- Adding a new addon page (e.g. `company-gpt/addons/companyXYZ.md`)
- Adding an integration, settings, or feature-reference page
- Editing an existing feature page and wanting it to match house style

**Not for:** tutorials/how-tos/agent templates (`tutorials/` → use `creating-tutorial`), or product skills under the repo-root `skills/` directory.

## Required Steps (do all of them)

1. Create the **German** page under `src/content/docs/de/company-gpt/.../<slug>.md`
2. Create the **English** mirror under `src/content/docs/en/company-gpt/.../<slug>.md` (same relative path, translated content)
3. Register **both** in `astro.config.mjs` under the Documentation topic with `translations: { en: ... }`
4. Place screenshots next to the page and reference them with relative paths

Skipping the EN mirror or the sidebar entry leaves the page unreachable in one language. Both are mandatory.

## Frontmatter

```markdown
---
title: companyM365
description: Ein- bis zweisätzige, suchbare Beschreibung dessen, was die Funktion tut und für wen.
---
```

- `title`: short, the product/feature name (matches the sidebar label).
- `description`: one rich sentence — appears in search and metadata. German on the DE page, English on the EN page.
- No other frontmatter fields are used on these pages.

## Body Conventions

- Open with a **1–2 paragraph intro** explaining what the feature is and the value it provides — before any `##` heading.
- Use `##` / `###` headings in **German**, sentence-topic style ("Zugang und Authentifizierung", "E-Mail (Outlook)").
- Professional, neutral German. Address the reader as **Sie**.
- **Internal links** are absolute and locale-prefixed, with a trailing slash:
  `[MCP Server](/de/company-gpt/integrationen/mcp-server/)`. On the EN page use `/en/...`.
- **Asides** (Starlight directives) for callouts:
  - `:::note` — important behavior/limitations
  - `:::tip` — helpful hints; optional title: `:::tip[Hinweis]`
- **Screenshots**: store the `.png` beside the page; embed with a descriptive alt text and relative path:
  `![Detailansicht eines Skills mit gerendertem Markdown-Inhalt](./skills-view-de.png)`
- **Tables** for structured reference (supported formats, tool lists, options).
- For tool/capability catalogs, group by area under `##` headings and use `- **tool_name**: Beschreibung.` bullet lists (see `company-gpt/addons/companyM365.md`).

## Sidebar Registration

Add the page to the **Documentation** topic in `astro.config.mjs`, in the correct group (e.g. `Addons`, `Integrationen`). Use the lowercased slug (Astro slugs are case-insensitive):

```js
{ label: 'companyM365', translations: { en: 'companyM365' }, slug: 'company-gpt/addons/companym365' },
```

The `slug` is the path under `src/content/docs/<locale>/` without the locale prefix or extension.

## Reference Example

`src/content/docs/de/company-gpt/skills.md` (feature page with screenshots, asides, table) and `src/content/docs/de/company-gpt/addons/companyM365.md` (tool-catalog page). Read one before writing to match tone and structure.

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Only created the DE (or only EN) page | Always create both mirrors at the same relative path |
| Forgot the sidebar entry | Add to `astro.config.mjs` with `translations: { en: ... }` |
| Internal link missing trailing slash or locale | Use `/de/company-gpt/.../` (and `/en/...` on the EN page) |
| Absolute/repo screenshot paths | Store the image beside the page, reference with `./name.png` |
| Wrote a step-by-step walkthrough | That's a tutorial — use `creating-tutorial` |
| Used "du" / casual tone | Use professional "Sie" form |
