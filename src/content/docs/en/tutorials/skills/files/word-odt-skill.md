---
title: Word & ODT Skill
description: Create and read Word and ODT documents with companyFILES MCP tools.
---

Use this skill when asked to write reports, letters, or documents in Word or OpenDocument format, or to read Word files.

## Skill

````markdown
---
name: word-odt-skill
description: >-
  Create and read Word (.docx) and ODT (.odt) documents with companyFILES MCP tools. Use when asked to write a report, letter, or document in Word or OpenDocument format, convert Markdown or HTML to Word/ODT, extract text from a Word file, or create a document with headers, footers, table of contents, or page numbers.
---

# Word & ODT Skill

Tools for creating Word (.docx) and ODT (.odt) documents, plus reading Word files.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `create_word` | Create Word (.docx) from Markdown or plain text |
| `create_word_from_html` | Create Word from HTML with optional CSS |
| `create_word_from_json` | Create Word from structured JSON elements |
| `create_odt` | Create ODT from Markdown (LibreOffice/OpenOffice) |
| `create_odt_from_html` | Create ODT from HTML |
| `read_word` | Read a Word (.docx) file → text, HTML, Markdown |

## Decision Guide

```
User wants to create a Word document from...
  Markdown / plain text  → create_word          (most common)
  HTML + CSS             → create_word_from_html
  Structured JSON        → create_word_from_json
  A template             → see templates-skill   (create_word_from_template)

User wants OpenDocument format (LibreOffice)...
  From Markdown          → create_odt
  From HTML              → create_odt_from_html
  From template          → see templates-skill   (create_odt_from_template)

User wants to READ a Word file → read_word
```

## Tool Usage

### create_word
```json
{
  "content": "# Annual Report\n\n## Summary\n\nThis year we achieved...",
  "filename": "annual_report",
  "title": "Annual Report 2025",
  "author": "Finance Team",
  "page_size": "A4",
  "page_orientation": "portrait",
  "header_text": "Confidential",
  "footer_text": "Acme Corp",
  "show_page_numbers": true,
  "page_number_position": "footer",
  "page_number_format": "{page} / {pages}",
  "include_toc": true,
  "folder": "reports"
}
```

`format` can be `"markdown"` (default) or `"plain"`.

### create_word_from_html
```json
{
  "html": "<h1>Report</h1><p>Content here.</p><table>...</table>",
  "css": "h1 { color: #336699; } body { font-family: Arial; }",
  "filename": "report",
  "title": "My Report",
  "show_page_numbers": true,
  "folder": "reports"
}
```

Supports inline images via `doc:<documentId>` URI: `<img src="doc:abc123..." />`.

### create_word_from_json
```json
{
  "json_content": "{\"elements\":[{\"type\":\"heading\",\"text\":\"Title\",\"level\":1},{\"type\":\"paragraph\",\"text\":\"Content\"},{\"type\":\"table\",\"rows\":[[\"A\",\"B\"],[\"1\",\"2\"]]}]}",
  "filename": "document"
}
```

### create_odt
```json
{
  "content": "# Letter\n\nDear John,\n\nPlease find enclosed...",
  "filename": "letter",
  "title": "Formal Letter",
  "author": "Jane",
  "page_size": "A4",
  "header_text": "Private & Confidential",
  "show_page_numbers": true,
  "folder": "letters"
}
```

### create_odt_from_html
```json
{
  "html": "<h1>Document</h1><p>Content</p>",
  "filename": "document",
  "page_size": "A4"
}
```

### read_word
```json
{
  "file_content": "<base64-encoded docx>"
}
```
Or pass `librechat_file_id` instead. Returns `{ text, html, markdown }`.

## Common Page Options (all create tools)

| Parameter | Values | Default |
|-----------|--------|---------|
| `page_size` | `A4`, `Letter`, `Legal`, `A3`, `A5` | `A4` |
| `page_orientation` | `portrait`, `landscape` | `portrait` |
| `page_number_position` | `header`, `footer` | `footer` |
| `page_number_alignment` | `left`, `center`, `right` | `center` |
| `page_number_format` | string with `{page}` and `{pages}` | `{page} / {pages}` |

## Key Notes

- All create tools return `{id, filename, downloadUrl, markdownLink}` — always render `markdownLink` in the reply.
- Inline images can be referenced via `doc:<documentId>` in Markdown or HTML — SVG is auto-converted to PNG for Word.
- For template-based Word creation (placeholders, loops, image injection), use the **templates-skill**.
- ODT files open natively in LibreOffice and Google Docs.
- Org/user color theme is automatically applied when configured.
````
