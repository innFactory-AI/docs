---
name: creating-tutorial
description: Use when adding a tutorial under src/content/docs/.../tutorials - either a step-by-step how-to (e.g. connecting an MCP server, setting up an addon) or a ready-to-use agent template (system prompt + how to use it). Covers the two tutorial shapes, frontmatter, German conventions, screenshots, the DE/EN mirror, the tutorials index, and astro.config.mjs sidebar registration.
---

# Creating a Tutorial

## Overview

Tutorials live under `src/content/docs/<locale>/tutorials/` and are practical, task-oriented content. There are **two shapes**:

1. **How-to guide** — numbered steps to accomplish something (connect Confluence, set up CompanyRAG). Subfolders: `tutorials/addons/`, `tutorials/MCP/`, `tutorials/skills/`.
2. **Agent template** — a reusable CompanyGPT agent: an intro, the full system prompt in a code block, and how to use it. Folder: `tutorials/agenten/`.

Like docs pages, tutorials are **bilingual** (`de/` + `en/` mirror) and registered in `astro.config.mjs` under the **Tutorials** topic.

**Core principle:** Tutorials *walk the reader through doing something*. Feature reference belongs in a docs page (`creating-docs-page`).

## When to Use

- Adding a step-by-step setup/how-to guide
- Adding a ready-to-use agent template under `tutorials/agenten/`

**Not for:** feature/reference documentation (`company-gpt/` → use `creating-docs-page`).

## Required Steps (do all of them)

1. Create the **German** tutorial under `src/content/docs/de/tutorials/.../<slug>.md` (or `.mdx` if it imports an Astro component)
2. Create the **English** mirror under `src/content/docs/en/tutorials/.../<slug>.md`
3. Add a link in the **tutorials index** (`tutorials/index.md`) under the right category, in both locales
4. Register **both** pages in `astro.config.mjs` under the Tutorials topic with `translations: { en: ... }`

## Frontmatter

```markdown
---
title: Meeting Notizen Agent
description: Ein Satz, der suchbar zusammenfasst, was die Anleitung bzw. der Agent leistet.
---
```

`.mdx` files may follow the frontmatter with `import X from '...astro'` to embed components.

## Shape 1: How-To Guide

- Short intro paragraph stating what the reader will achieve and the prerequisite.
- **Numbered steps**, optionally grouped under bold sub-headings (`**1. Konfiguration in Confluence**`) or `##` headings.
- A **screenshot after the step it illustrates**: `![alt](screenshot.png)` (image stored beside the page).
- `:::tip` / `:::note` for caveats (e.g. security defaults, prerequisites).
- Reference example: `tutorials/MCP/connect_confluence.md`, `tutorials/addons/companyrag-in-companygpt.mdx`.

## Shape 2: Agent Template

Structure (see `tutorials/agenten/meeting-notizen-agent.md`):

1. **Intro paragraph** — what the agent does and for whom.
2. `## Systemanweisung` — a `:::tip` noting the whole thing is pasted as the agent prompt, then the **full system prompt inside a ` ```markdown ` code block**. The prompt itself uses its own `---` frontmatter (`name`, `description`), `## Wann zu verwenden`, `## Richtlinien`, `## Arbeitsprozess`, `## Ausgabeformat`.
3. `## Agenten benutzen` — how to create it under [Agenten](/de/company-gpt/agenten/): which tools/model are needed (often none), and how to feed input (file upload, etc.).

## Conventions (both shapes)

- Professional German, **Sie** form (how-tos) — agent prompts are usually written in **du** form addressing the model.
- Internal links absolute and locale-prefixed with trailing slash: `[Agenten](/de/company-gpt/agenten/)`; use `/en/...` on the EN page.
- Screenshots stored beside the page, referenced relatively. How-to images are often referenced without `./` (`![alt](name.png)`) — match the neighbouring files in the folder.

## Index + Sidebar Registration

**tutorials/index.md** — add a bullet under the matching category (Addons / MCP / Skills / Agenten → sub-category):

```markdown
- [Meeting Notizen Agent](/de/tutorials/agenten/meeting-notizen-agent/) – Protokolle aus Rohtranskripten erstellen
```

**astro.config.mjs** — Tutorials topic, correct group:

```js
{ label: 'Meeting Notizen Agent', translations: { en: 'Meeting Notes Agent' }, slug: 'tutorials/agenten/meeting-notizen-agent' },
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Only created DE (or only EN) | Create both mirrors at the same relative path |
| Forgot the index link | Add to `tutorials/index.md` in the right category, both locales |
| Forgot the sidebar entry | Add to `astro.config.mjs` Tutorials topic with `translations` |
| Put the system prompt in plain prose | Wrap the full prompt in a ` ```markdown ` code block |
| Wrote feature reference instead of a walkthrough | Use `creating-docs-page` |
| Used a component without `.mdx` | Files importing `.astro` components must be `.mdx` |
