---
title: Einstellungen & UI Skill
description: Öffne die companyFILES-Web-UI, zeige Einstellungen an und erhalte Hilfe zu verfügbaren Tools.
---

Verwende diesen Skill, wenn du Dateien durchsuchen, den Dateimanager öffnen, Vorlagen verwalten, Einstellungen ändern oder Hilfe zu companyFILES-Tools erhalten möchtest.

## Skill

````markdown
---
name: settings-ui-skill
description: >-
  Open the companyFILES web UI, view settings, and get help on available tools. Use when asked to show documents, browse files, open the file manager, manage templates, change settings, view branding/colors, or get help on how to use companyFILES tools. Also use when the user wants an interactive embedded view instead of raw JSON.
---

# Settings & UI Skill

Tools for opening the companyFILES web app as an embedded UI, retrieving settings, and getting tool help.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `open_companyfiles_ui` | Open the companyFILES web app as an embedded iframe |
| `get_settings` | Get resolved org/user settings (colors, company name, logo) |
| `help` | Get usage examples for any companyFILES tool category |

## Decision Guide

```
User says "show my files" / "open file manager"    → open_companyfiles_ui page="documents"
User says "manage / browse templates"               → open_companyfiles_ui page="templates"
User says "upload a file" (via UI)                  → open_companyfiles_ui page="documents"
User says "open settings" / "change preferences"   → open_companyfiles_ui page="settings"
User wants to see charts dashboard                  → open_companyfiles_ui page="charts"

User asks about settings / colors / logo            → get_settings
User asks how to use a tool / needs examples        → help (with topic)
```

**Always call the tool immediately — never just describe what the user could do.**

## Tool Usage

### open_companyfiles_ui

Renders the companyFILES SPA as an embedded interactive iframe in the chat.

```json
{
  "page": "documents"
}
```

Available pages:
| Page | Shows |
|------|-------|
| `documents` | File list, upload, download, folder navigation |
| `templates` | Template browser, upload personal templates |
| `settings` | Org/user branding, colors, logo, language |
| `charts` | Dashboard of all interactive charts created this session |

> Note: UI widgets require a chat client that supports MCP UI rendering (e.g. LibreChat). Google Gemini falls back to text.

---

### get_settings

Returns the resolved settings: org defaults merged with user overrides.

```json
{}
```

Example response:
```json
{
  "companyName": "Acme Corp",
  "companyUrl": "https://acme.com",
  "primaryColor": "#336699",
  "secondaryColor": "#66aacc",
  "accentColor": "#ff6600",
  "hasLogo": true,
  "sources": {"companyName": "org", "primaryColor": "user"}
}
```

`logoPath` is intentionally omitted (internal filesystem path). To view or change the logo, use `open_companyfiles_ui page="settings"`.

---

### help

Get detailed usage examples for a specific tool category.

```json
{
  "topic": "excel"
}
```

Available topics: `excel`, `word`, `pdf`, `powerpoint`, `text`, `chart`, `mermaid`, `image`, `zip`, `assets`, `upload`, `templates`, `admin`, `settings`, `convert`, `read`, `ui`, `all`

Omitting `topic` (or using `"all"`) returns the full help document and also opens the embedded UI.

## Key Notes

- `open_companyfiles_ui` is the default tool for any request to browse, view, or manage files/templates/settings interactively.
- Settings colors (`primaryColor`, `secondaryColor`, `accentColor`) are automatically used as the theme in all document and chart creation tools.
- To edit settings programmatically, use the admin API (`PUT /api/admin/settings` with `X-API-Key`). For self-service user settings, use the UI.
````
