---
title: PDF Skill
description: Erstelle und lese PDF-Dokumente und fülle PDF-Formulare mit companyFILES MCP-Tools.
---

Verwende diesen Skill, wenn du PDFs generieren, Text aus PDFs extrahieren oder PDF-Formulare ausfüllen und vereinfachen möchtest.

## Skill

````markdown
---
name: pdf-skill
description: >-
  Create and read PDF documents, and fill PDF forms with companyFILES MCP tools. Use when asked to generate a PDF report, export content as PDF, create a PDF from HTML or Markdown, read or extract text from a PDF, fill a PDF form, or flatten a form for final delivery.
---

# PDF Skill

Tools for creating PDF documents, reading PDF content, and filling/flattening PDF forms.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `create_pdf` | Create PDF from Markdown with headers, footers, page numbers |
| `create_pdf_from_html` | Create PDF from HTML with custom CSS |
| `read_pdf` | Extract text and metadata from a PDF |
| `list_pdf_form_templates` | List available PDF form templates and their fields |
| `fill_pdf_form` | Fill a PDF form — fields remain editable |
| `fill_and_flatten_pdf_form` | Fill and flatten a PDF form (read-only / final) |

## Decision Guide

```
User wants to CREATE a PDF from...
  Markdown             → create_pdf
  HTML / CSS           → create_pdf_from_html

User wants to READ a PDF → read_pdf

User wants to FILL a PDF form...
  Keep fields editable → fill_pdf_form
  Finalize / lock form → fill_and_flatten_pdf_form
  (first discover available forms and their fields: list_pdf_form_templates)
```

## Tool Usage

### create_pdf
```json
{
  "markdown": "# Monthly Report\n\n## Executive Summary\n\nThis month we achieved...",
  "filename": "monthly_report",
  "title": "Monthly Report – May 2025",
  "author": "Finance",
  "page_size": "A4",
  "page_orientation": "portrait",
  "header_text": "Confidential",
  "footer_text": "Acme Corp",
  "show_page_numbers": true,
  "page_number_position": "footer",
  "page_number_format": "{page} / {pages}",
  "folder": "reports"
}
```

### create_pdf_from_html
```json
{
  "html": "<h1>Invoice</h1><table>...</table>",
  "css": "body { font-family: Arial; } h1 { color: #336699; }",
  "filename": "invoice",
  "title": "Invoice #1234",
  "page_size": "A4",
  "show_page_numbers": true,
  "folder": "invoices"
}
```

Supports inline images via `doc:<documentId>` URI: `<img src="doc:abc123..." />`.

### read_pdf
```json
{
  "file_content": "<base64-encoded pdf>"
}
```
Or pass `librechat_file_id` instead. Returns extracted text and metadata.

### list_pdf_form_templates
```json
{}
```
Returns a list of available PDF form templates with field names and types (text, checkbox, radio, dropdown).

### fill_pdf_form
```json
{
  "template_name": "application",
  "values": {
    "fullName": "Alice Smith",
    "email": "alice@example.com",
    "agree": true,
    "department": "Engineering"
  },
  "filename": "application_alice",
  "folder": "applications"
}
```
Fields remain **editable** after filling.

### fill_and_flatten_pdf_form
```json
{
  "template_name": "application",
  "values": {
    "fullName": "Alice Smith",
    "agree": true
  },
  "filename": "application_alice_final",
  "folder": "applications"
}
```
Form is **flattened** (read-only) — use for final/archival copies.

## Common Page Options (create tools)

| Parameter | Values | Default |
|-----------|--------|---------|
| `page_size` | `A4`, `Letter`, `Legal`, `A3`, `A5` | `A4` |
| `page_orientation` | `portrait`, `landscape` | `portrait` |
| `page_number_position` | `header`, `footer` | `footer` |
| `page_number_format` | string with `{page}` and `{pages}` | `{page} / {pages}` |

## Key Notes

- All create tools return `{id, filename, downloadUrl, markdownLink}` — always render `markdownLink` in the reply.
- PDF form templates are managed via the admin API (upload via `POST /api/admin/pdf-forms`).
- Field value types: strings for text/dropdown/radio fields, booleans for checkboxes.
- Always call `list_pdf_form_templates` first to discover available templates and exact field names.
- Org/user color theme is automatically applied when configured.
````
