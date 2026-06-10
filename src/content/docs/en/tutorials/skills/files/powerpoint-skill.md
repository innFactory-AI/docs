---
title: PowerPoint Skill
description: Create PowerPoint presentations with companyFILES MCP tools.
---

Use this skill when asked to build a presentation, create slides, or export content as PowerPoint.

## Skill

````markdown
---
name: powerpoint-skill
description: 'Create PowerPoint (.pptx) presentations with companyFILES MCP tools. Use when asked to build a presentation, create slides, generate a deck, or export content as PowerPoint. Covers create_powerpoint (markdown or typed slides), append_slides_to_powerpoint, and update_powerpoint_slide. For template-based PowerPoint creation with placeholders, images, charts, or speaker notes, use templates-skill instead.'
---

# PowerPoint Skill

Tools for creating and editing PowerPoint (.pptx) presentations.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `create_powerpoint` | Create a new presentation from Markdown or a typed slides array |
| `append_slides_to_powerpoint` | Append slides to an existing presentation in-place |
| `update_powerpoint_slide` | Replace a single slide in an existing presentation in-place |
| `read_powerpoint_slides` | Read slide titles and text from an existing presentation |

> For template-based presentations with `{{placeholders}}`, `{%images}`, charts, speaker notes, or slide duplication, see **templates-skill** (`create_powerpoint_from_template`).

---

## Available Slide Types

Every slide tool (`create_powerpoint`, `append_slides_to_powerpoint`, `update_powerpoint_slide`) uses one of three layout types via the `type` field:

- **`default`** — standard content slide: accent bar, title, then stacked content (text, bullets, code, table, image)
- **`section`** — dark full-screen divider slide: large centred title, optional subtitle — use to separate chapters
- **`text-image`** — split layout: title at top, text/bullets on the left, image on the right (shows a skeleton box if no image is given)

When using Markdown mode (no `slides` array), all slides get the `default` layout automatically.

---

## Slide Layouts

Three built-in layout types are available for `create_powerpoint`, `append_slides_to_powerpoint`, and `update_powerpoint_slide`:

| `type` | Visual | Key fields |
|--------|--------|------------|
| `"default"` | Accent bar + title + stacked content (current default) | `title`, `content`, `bullets`, `code`, `table`, `htmlTable`, `image` |
| `"section"` | Dark background, large centred title — section divider | `title`, `subtitle` |
| `"text-image"` | Title at top; text/bullets on left, image on right | `title`, `content`, `bullets`, `htmlTable`, `image`, `imageAlt` |

When `image` is omitted from a `"text-image"` slide, a skeleton placeholder box is shown on the right (useful for draft decks).

---

## create_powerpoint

### Markdown mode (simple)

Use `#` or `##` headings to start new slides. All slides use the `"default"` layout.

```json
{
  "markdown": "# Quarterly Results\n\n- Revenue: €1.2M\n- Growth: 15%\n\n## Key Highlights\n\n- Launched new product\n- Expanded to 3 markets\n\n## Next Steps\n\n1. Hire 5 engineers\n2. Launch marketing campaign",
  "filename": "q4_results",
  "title": "Q4 2025 Results",
  "author": "Strategy Team",
  "folder": "presentations"
}
```

**Slide splitting rules:**
- `#` (H1) or `##` (H2) → new slide
- Content between headings → slide body (bullets, paragraphs, images, tables, code blocks)

### Typed slides mode (layout control)

Pass a `slides` array instead of (or in addition to) `markdown`. When `slides` is provided it takes precedence.

```json
{
  "slides": [
    {
      "type": "section",
      "title": "Q4 2025 Results",
      "subtitle": "Strategy Team"
    },
    {
      "type": "default",
      "title": "Key Metrics",
      "bullets": ["Revenue: €1.2M", "Growth: 15%", "NPS: 72"],
      "htmlTable": "<table><tr><th style=\"background-color:#1F2937;color:#fff\">Region</th><th style=\"background-color:#1F2937;color:#fff\">Q1</th><th style=\"background-color:#1F2937;color:#fff\">Q2</th></tr><tr><td style=\"font-weight:bold\">DACH</td><td style=\"color:#16A34A\">€1.2M</td><td style=\"color:#16A34A\">€1.4M</td></tr><tr><td style=\"font-weight:bold\">US</td><td>€0.8M</td><td style=\"color:#16A34A\">€1.1M</td></tr></table>"
    },
    {
      "type": "text-image",
      "title": "System Architecture",
      "bullets": ["Microservices", "Auto-scaling", "99.9% uptime"],
      "image": "https://example.com/arch.png",
      "imageAlt": "Architecture diagram"
    },
    {
      "type": "section",
      "title": "Next Steps"
    },
    {
      "type": "default",
      "title": "Roadmap",
      "content": "Focus areas for H1 2026:",
      "bullets": ["Hire 5 engineers", "Launch marketing campaign"]
    }
  ],
  "title": "Q4 2025 Results",
  "filename": "q4_results",
  "folder": "presentations"
}
```

**Inline images in markdown mode:** Use `doc:<documentId>` or `lc:<file_id>` URI in image syntax:
```markdown
![Chart](doc:abc12345-...)
![Attachment](lc:xyz-librechat-file-id)
```

---

## append_slides_to_powerpoint

Append new slides to an existing presentation in-place. Accepts markdown or a typed slides array.

```json
{
  "document_id": "<id from create_powerpoint>",
  "slides": [
    { "type": "section", "title": "Part 2: Deep Dive" },
    { "type": "default", "title": "Technical Details", "bullets": ["Detail A", "Detail B"] }
  ]
}
```

Or with markdown:
```json
{
  "document_id": "<id>",
  "markdown": "## New Slide\n\n- Point 1\n- Point 2"
}
```

Returns the same `document_id` — the file is updated in-place.

---

## update_powerpoint_slide

Replace a single slide's content. Useful for correcting a specific slide without regenerating the whole deck.

Pass a **single-element** `slides` array to control the layout:

```json
{
  "document_id": "<id>",
  "slide_number": 3,
  "slides": [
    {
      "type": "section",
      "title": "Chapter 2",
      "subtitle": "The Deep Dive"
    }
  ]
}
```

Or pass `markdown` for a quick text-only replacement:
```json
{
  "document_id": "<id>",
  "slide_number": 2,
  "markdown": "## Updated Title\n\n- New bullet 1\n- New bullet 2"
}
```

Returns the same `document_id` — the file is updated in-place.

---

## read_powerpoint_slides

Inspect an existing presentation before editing:

```json
{
  "document_id": "<id>"
}
```

Returns `{ slide_count, slides: [{ slideNumber, title, textLines }] }`.

---

## Styled Tables with htmlTable

Use `htmlTable` instead of the plain `table` field when you need per-cell styling (colours, bold, alignment). Both `"default"` and `"text-image"` slides support it; `htmlTable` takes precedence over `table` when both are present.

**Supported inline CSS properties:**

| CSS property | Effect in slide |
|---|---|
| `background-color: #hex` | Cell fill colour |
| `color: #hex` | Text colour |
| `font-weight: bold` | Bold text |
| `font-style: italic` | Italic text |
| `text-align: left\|center\|right` | Text alignment |

`<th>` elements are automatically styled as header cells (bold + theme header background/text colour) unless overridden by inline styles.

```json
{
  "type": "default",
  "title": "Revenue by Region",
  "htmlTable": "<table><tr><th>Region</th><th>Q1</th><th>vs PY</th></tr><tr><td style=\"font-weight:bold\">DACH</td><td>€1.2M</td><td style=\"color:#16A34A\">+18%</td></tr><tr><td style=\"font-weight:bold\">US</td><td>€0.8M</td><td style=\"color:#DC2626\">-3%</td></tr></table>"
}
```

For plain tables without per-cell styling, the simpler `table: string[][]` field is sufficient.

---

## Key Notes

- Every create/append/update tool returns `{ id, filename, downloadUrl, markdownLink }` — always render `markdownLink` in the reply.
- The org/user colour theme is automatically applied when configured in settings.
- For complex presentations (custom `{{placeholders}}`, per-slide images, speaker notes, chart data, slide repeat/loop, `{{slide_type:xxx}}` routing), use `create_powerpoint_from_template` from **templates-skill**.
- For embedding a chart image in a presentation, see **charts-diagrams-skill** (`create_chart_document` or `embed_chart_in_document`).
````
