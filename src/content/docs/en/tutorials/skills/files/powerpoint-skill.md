---
title: PowerPoint Skill
description: Create PowerPoint presentations with companyFILES MCP tools.
---

Use this skill when asked to build a presentation, create slides, or export content as PowerPoint.

## Skill

````markdown
---
name: powerpoint-skill
description: >-
  Create PowerPoint (.pptx) presentations with companyFILES MCP tools. Use when asked to build a presentation, create slides, generate a deck, or export content as PowerPoint. For template-based PowerPoint creation with placeholders, images, charts, or speaker notes, use templates-skill instead.
---

# PowerPoint Skill

Tool for creating PowerPoint (.pptx) presentations from Markdown content.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `create_powerpoint` | Create a PowerPoint presentation from Markdown |

> For template-based presentations with placeholders, images, charts, or slide duplication, see **templates-skill** (`create_powerpoint_from_template`).

## Tool Usage

### create_powerpoint

Use `#` or `##` headings in Markdown to start new slides.

```json
{
  "markdown": "# Quarterly Results\n\n- Revenue: €1.2M\n- Growth: 15%\n\n## Key Highlights\n\n- Launched new product\n- Expanded to 3 new markets\n\n## Next Steps\n\n1. Hire 5 engineers\n2. Launch marketing campaign",
  "filename": "q4_results",
  "title": "Q4 2025 Results",
  "author": "Strategy Team",
  "folder": "presentations"
}
```

**Slide splitting rules:**
- `#` (H1) → new slide with title
- `##` (H2) → new slide with subtitle style
- Content between headings becomes slide body (bullet points, paragraphs, images)

**Inline images:** Reference stored documents via `doc:<documentId>` URI in Markdown image syntax:
```markdown
![Chart](doc:abc12345-...)
```

## Key Notes

- Returns `{id, filename, downloadUrl, markdownLink}` — always render `markdownLink` in the reply.
- The org/user color theme is automatically applied when configured in settings.
- For complex presentations (custom placeholders, per-slide images, speaker notes, chart data, slide repeat/loop), use `create_powerpoint_from_template` from **templates-skill**.
- For embedding a chart image in a presentation, see **charts-diagrams-skill** (`create_chart_document` or `embed_chart_in_document`).
````
