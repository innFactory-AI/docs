---
title: Templates Skill
description: Create documents from templates using companyFILES MCP tools.
---

Use this skill when asked to fill a template, use a company letterhead or invoice layout, or create documents from DOCX, XLSX, POTX, or ODT templates.

## Skill

````markdown
---
name: templates-skill
description: >-
  Create documents from templates using companyFILES MCP tools. Use when asked to fill a template, use a company template, create a document from a predefined layout, fill placeholders, use a letterhead, fill an invoice template, or create from a DOCX/XLSX/POTX/ODT template. Covers Word, Excel, ODT, and PowerPoint template filling, including image placeholders and loop/repeat syntax.
---

# Templates Skill

Tools for listing and filling document templates (Word, Excel, ODT, PowerPoint).

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `list_templates` | List all available templates (personal + global) with placeholder info |
| `create_word_from_template` | Fill a DOCX template with `{placeholder}` syntax |
| `create_word_from_template_with_images` | Fill a DOCX template with text and image placeholders |
| `create_excel_from_template` | Fill an XLSX template at specific cell addresses |
| `fill_excel_template` | Fill an XLSX template using `{{placeholder}}` syntax |
| `create_odt_from_template` | Fill an ODT template with `{{placeholder}}` syntax |
| `create_powerpoint_from_template` | Fill a POTX/PPTX template with text, images, charts, speaker notes, slide repeat |

## Workflow

1. **Discover templates:** Call `list_templates` (optionally filter by `type`: `docx`, `xlsx`, `potx`, `odt`, `pdf`)
2. **Note placeholder names** from the response
3. **Fill the template** with the matching `create_*_from_template` tool

## Tool Usage

### list_templates
```json
{
  "type": "docx"
}
```
Returns template names, placeholder lists, slide info (for POTX), field definitions (for PDF forms), and upload dates. Scope is `"user"` (personal) or `"global"`.

---

### create_word_from_template

Placeholder syntax: `{placeholder}` (single curly braces). Dotted paths: `{user.name}`.

```json
{
  "template_name": "invoice",
  "data": {
    "customer": "Acme Corp",
    "invoice_number": "INV-2025-042",
    "date": "2025-05-08",
    "total": "€4,200.00"
  },
  "filename": "invoice_acme",
  "folder": "invoices"
}
```

**Table loop syntax** (place FOR/END-FOR in their own table rows):
```
{FOR item IN items}
{= $item.name} | {= $item.qty} | {= $item.price}
{END-FOR item}
```
Pass `items` as an array in `data`. Missing loop sources are silently skipped with a warning.

---

### create_word_from_template_with_images

Supports text placeholders `{name}` and image placeholders `{%logo}`.

```json
{
  "template_name": "letterhead",
  "placeholders": {
    "company": "Acme Corp",
    "date": "2025-05-08",
    "logo": {
      "data": "<base64-encoded image>",
      "width": 4,
      "height": 2,
      "extension": "png"
    }
  },
  "filename": "letter_acme",
  "folder": "letters"
}
```

Image via stored document (no re-upload needed):
```json
{
  "logo": {
    "document_id": "abc12345-...",
    "width": 4,
    "height": 2
  }
}
```

The org/user logo is **auto-injected** into `{%logo}` placeholders if configured in settings and no logo is provided.

---

### create_excel_from_template

Fills cells by address (e.g. `"A1"`, `"Sheet2!B3"`). Use `list_templates` to see available XLSX templates.

```json
{
  "template_name": "budget",
  "cell_values": {
    "A1": "Budget 2025",
    "B5": 125000,
    "Sheet2!C3": "Approved"
  },
  "filename": "budget_2025",
  "folder": "finance"
}
```

---

### fill_excel_template

Fills cells using `{{placeholder}}` syntax — preserves formatting, styles, formulas, and charts.

```json
{
  "template_name": "monthly_report",
  "data": {
    "company": "Acme Corp",
    "month": "May 2025",
    "total": 42000
  },
  "replace_missing": false,
  "filename": "report_may"
}
```

---

### create_odt_from_template

Fills `{{placeholder}}` syntax in ODT templates.

```json
{
  "template_name": "letter",
  "data": {
    "recipient": "John Doe",
    "date": "2025-05-08",
    "subject": "Offer Letter"
  },
  "replace_missing": false,
  "filename": "offer_letter_john"
}
```

---

### create_powerpoint_from_template

Text placeholders: `{{key}}`. Image placeholders: `{%name}` in the alt text of an image shape.

```json
{
  "template_name": "corporate_deck",
  "placeholders": {
    "title": "Q4 Results",
    "subtitle": "Finance Team",
    "date": "May 2025"
  },
  "images": {
    "logo": { "base64": "<base64-png>" },
    "chart_screenshot": { "document_id": "abc123..." }
  },
  "speaker_notes": {
    "1": "Welcome everyone to the Q4 review",
    "3": "These are the key takeaways"
  },
  "charts": {
    "revenue_chart": {
      "labels": ["Q1","Q2","Q3","Q4"],
      "datasets": [{"label": "Revenue", "values": [100,150,120,180]}]
    }
  },
  "repeat": {
    "slide": 3,
    "data": [
      {"name": "Alice", "role": "Engineer"},
      {"name": "Bob", "role": "Designer"}
    ]
  },
  "filename": "q4_deck",
  "folder": "presentations"
}
```

`speaker_notes` keys are **1-based** slide numbers. `repeat.slide` duplicates that slide once per data item.

## Key Notes

- All create tools return `{id, filename, downloadUrl, markdownLink}` — always render `markdownLink` in the reply.
- Template names are **case-sensitive** — always verify with `list_templates` first.
- User templates take priority over global templates with the same name.
- `replace_missing: false` (default) leaves unfilled `{{placeholder}}` tokens intact; `true` replaces them with empty string.
- Warnings about missing placeholders are included in the response when applicable.
````
