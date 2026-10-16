---
title: Dateiverwaltungs-Skill
description: Lade Dateien hoch, herunter, liste, suche und verwalte Dateien mit companyFILES MCP-Tools.
---

Verwende diesen Skill, wenn du Dateien hochladen oder finden, Download-Links abrufen, ZIP-Archive erstellen, Text- und Code-Dateien speichern oder E-Mails, Archive und Bilder auslesen möchtest.

## Skill

````markdown
---
name: file-management-skill
description: Upload, download, list, search, and manage files with companyFILES MCP tools. Use when asked to upload a file, find a document, list stored files, get a download link, search documents by name or type, create a ZIP archive, save a text/code file, read e-mails, archives or other formats as Markdown, or look at a stored image. Also covers discovering LibreChat file IDs for use in other tools.
---

# File Management Skill

Tools for uploading, listing, searching, downloading, archiving, reading, and creating text files in companyFILES.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `upload_file` | Upload any file (base64) for storage — returns document ID |
| `download_stored_file` | Get download info for a stored file or a chat upload |
| `list_documents` | List all your documents, including chat uploads (no parameters) |
| `search_documents` | Search documents and chat uploads by filename, type, or date range |
| `list_my_files` | List all accessible files (LibreChat + PVC storage) |
| `create_zip_from_stored_files` | Bundle stored documents and/or chat uploads into a ZIP archive |
| `create_text_file` | Create and store any text/code file (.sql, .csv, .json, .py, etc.) |
| `read_file` | Read almost any file as Markdown (e-mails, ZIP, legacy Office, scans with OCR) — only where available |
| `view_image` | Look at a stored image or an image attached in the chat |

## Decision Guide

```
User wants to upload a file                   → upload_file
User wants a download link for a stored file  → download_stored_file
User wants to browse / list documents         → list_documents  (or open_companyfiles_ui from settings-ui-skill)
User wants to find a specific document        → search_documents
User wants to see all files including chat uploads → list_my_files
User wants to bundle files into a ZIP         → create_zip_from_stored_files
User wants to create a code/text file         → create_text_file
User wants to open an e-mail, ZIP or other format → read_file  (if available)
User wants you to look at an image            → view_image
```

## Tool Usage

### upload_file

Max size: 50 MB by default (the limit can differ per environment). Content must be base64-encoded.

```json
{
  "content": "<base64-encoded file content>",
  "filename": "logo.png",
  "mime_type": "image/png"
}
```

The content is checked against the file extension: empty files and files whose content does not match their extension (e.g. a PDF renamed to `.docx`) are rejected with a `validation` error. Accepted are Office documents, PDF, images, ZIP and common text formats; where the extended file reading (`read_file`) is available, also formats such as `.msg`, `.eml`, `.doc`, `.xls`, `.xlsb`, `.ppt`, RTF, OpenDocument and EPUB.

Returns `{id, filename, downloadUrl, markdownLink, size, type, message}`. Use `id` as `document_id` in other tools.

---

### download_stored_file

`document_id` accepts a companyFILES document ID **or** a LibreChat `file_id` (chat upload, see `list_my_files`).

```json
{
  "document_id": "abc12345-...",
  "return_content": false
}
```

- companyFILES document → `{id, filename, downloadUrl, size, type, createdAt, expiresAt}`
- Chat upload (LibreChat `file_id`) → `{id, filename, size, type, source: "librechat", note}` — **no download link**; the `note` points to the read tools.

Set `return_content: true` to also get base64 `content` (files < 1 MB only).

> To **read** the contents of Excel/Word/PDF files, use `read_excel` / `read_word` / `read_pdf` (other formats: `read_file`) — not this tool.

---

### list_documents

```json
{}
```

No parameters. Returns `{documents, total}` — your companyFILES documents **plus** your chat uploads (LibreChat files). Each entry has `id`, `filename`, `type`, `createdAt`, `expiresAt`, `size`, `isUploaded` and, if the file lives in LibreChat, `libreChatFileId` (for chat uploads `id` is the LibreChat `file_id`). Also opens an embedded UI view for interactive browsing.

---

### search_documents

```json
{
  "search": "invoice",
  "type": "pdf",
  "created_after": "2025-01-01",
  "created_before": "2025-06-01"
}
```

All parameters are optional. `search` is a case-insensitive substring match on filename. `type` values: `word`, `excel`, `powerpoint`, `pdf`, `text`, `image`, `archive`, `file`. Chat uploads are searched as well. Returns `{documents, total}` in the same shape as `list_documents`.

---

### list_my_files

```json
{}
```

Returns files from both LibreChat (chat uploads) and PVC (companyFILES storage). Each entry has either `file_id` (LibreChat) or `document_id` (PVC) or both. Use these IDs in read tools (`read_excel`, `read_word`, `read_pdf`, `read_file`), `view_image` and `convert_document`.

This is also the first step when the user attaches a `.pptx` and asks for a deck "in this design" or wants the attached deck extended: find its `file_id` here, then hand it to `describe_pptx_template` — no template upload needed (see **powerpoint-skill**, section 2a).

---

### create_zip_from_stored_files

Max total uncompressed size: 50 MB. `document_ids` takes 1–50 IDs — companyFILES document IDs and/or LibreChat `file_id`s.

```json
{
  "document_ids": ["uuid-1", "uuid-2", "uuid-3"],
  "filename": "project_files",
  "compression_level": 6
}
```

ZIP archives are **temporary** (auto-deleted after 1 day by default). They do not appear in `list_documents`. If some `document_ids` can't be resolved the ZIP is still created from the rest, and the unresolved IDs are returned in a `missingDocumentIds` field plus a `warning` (rather than failing).

---

### create_text_file

Works with essentially **any** text/code extension (`.sql`, `.csv`, `.json`, `.xml`, `.html`, `.css`, `.js`, `.ts`, `.tsx`, `.jsx`, `.py`, `.java`, `.kt`, `.swift`, `.scala`, `.go`, `.rs`, `.rb`, `.php`, `.c`, `.h`, `.cpp`, `.cs`, `.yaml`, `.yml`, `.toml`, `.md`, `.txt`, `.log`, `.sh`, `.bash`, `.zsh`, `.env`, `.ini`, `.cfg`, `.conf`, `.properties`, `.graphql`, `.proto`, …). The list is a **blocklist, not an allowlist** — any unblocked text extension is accepted. A few executable extensions are blocked for security (e.g. `.ps1`, `.bat`, `.exe`) and will be rejected even though they're text.

```json
{
  "content": "SELECT * FROM orders WHERE status = 'pending';",
  "filename": "pending_orders.sql"
}
```

```json
{
  "content": "#!/bin/bash\necho 'Hello World'",
  "filename": "hello.sh"
}
```

---

### read_file

Only available where the extended file reading is enabled. Reads almost any file as Markdown — formats the other readers do not cover: Outlook `.msg` and `.eml` e-mails (headers, body, attachments), ZIP archives (entries), `.doc`, `.xls`, `.xlsb`, `.ppt`, `.rtf`, OpenDocument (`.odt`/`.ods`/`.odp`), EPUB, HTML, CSV/JSON/XML, Jupyter notebooks, images and scanned PDFs (OCR). For `.docx`/`.xlsx`/`.pdf` the regular readers stay the first choice.

```json
{
  "librechat_file_id": "<file_id of the attachment>",
  "part": "0",
  "offset": 0
}
```

Takes `document_id` or `librechat_file_id`. Returns the Markdown of one part, paged (continue with the `offset` given at the end), the list of parts (e-mail attachments or ZIP entries with ids such as `"0.1"`), e-mail headers and warnings. Read an attachment by passing its `part` id. `save_file_part` stores one part as a new companyFILES document (then the regular tools work on it); `convert_to_markdown` saves the whole file as one `.md` document. If a long conversion (OCR) is still running, the tool says so — call it again after about 30 seconds.

---

### view_image

Hands a stored image (PNG, JPEG, WebP, GIF) back to you so you can describe or analyze it — e.g. an uploaded photo or an exported chart.

```json
{
  "document_id": "abc12345-..."
}
```

Takes `document_id` or `librechat_file_id`.

## Key Notes

- `upload_file` validates file size (max 50 MB by default), extension and content (the bytes must match the extension).
- `document_id` from any create/upload tool can be reused in ZIP creation, template image injection (`document_id` in image placeholders), and `doc:` URI references in Markdown/HTML.
- Documents are auto-deleted after a retention period (default 365 days; can differ per environment).
- For interactive file browsing, use `open_companyfiles_ui` from the **settings-ui-skill**.
````
