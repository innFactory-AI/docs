---
title: Excel Skill
description: Erstelle, lese und bearbeite Excel-Tabellen mit companyFILES MCP-Tools.
---

Verwende diesen Skill, wenn du Excel-Dateien erstellen, bearbeiten oder lesen, Formeln anwenden oder mit Mehrblatt-Arbeitsmappen arbeiten möchtest.

## Skill

````markdown
---
name: excel-skill
description: Create, read, and modify Excel (.xlsx) spreadsheets with companyFILES MCP tools. Use when asked to create a spreadsheet, export data to Excel, read or parse an Excel file, edit cells, add sheets, apply formulas, conditional formatting, or auto-filters. Covers CSV-to-Excel, JSON-to-Excel, 2D array input, advanced multi-sheet workbooks, and in-place modification.
---

# Excel Skill

Tools for creating, reading, and modifying Excel (.xlsx) spreadsheets via companyFILES.

## Tools in This Skill

| Tool | Purpose |
|------|---------|
| `create_excel_from_csv` | Create Excel from CSV text |
| `create_excel` | Create Excel from a 2D array |
| `create_excel_from_json` | Create Excel from JSON (array of objects) |
| `create_excel_advanced` | Create multi-sheet workbooks with formulas, validation, conditional formatting |
| `modify_excel` | Edit an existing Excel file in-place by document ID |
| `read_excel` | Read Excel to JSON (values only) |
| `read_excel_detailed` | Read Excel with formulas, comments, hyperlinks, named ranges, and metadata |

## Decision Guide

```
User wants to create Excel from...
  CSV text            → create_excel_from_csv
  JSON array          → create_excel_from_json
  2D array / table    → create_excel
  Complex workbook    → create_excel_advanced  (formulas, multiple sheets, formatting)

User wants to edit an existing Excel file → modify_excel  (requires document_id)

User wants to read / parse Excel content...
  Just values         → read_excel
  Formulas & metadata → read_excel_detailed
```

## Tool Usage

### create_excel_from_csv
```json
{
  "csv_content": "Name,Age\nAlice,30\nBob,25",
  "filename": "people",
  "sheet_name": "Sheet1",
  "folder": "reports"
}
```

### create_excel
```json
{
  "data": [["Name","Age"],["Alice","30"],["Bob","25"]],
  "has_headers": true,
  "filename": "people",
  "folder": "reports"
}
```

### create_excel_from_json
```json
{
  "json_content": "[{\"name\":\"Alice\",\"age\":30},{\"name\":\"Bob\",\"age\":25}]",
  "filename": "people"
}
```

### create_excel_advanced
```json
{
  "sheets": [{
    "name": "Sales",
    "data": [
      ["Product","Q1","Q2","Total"],
      ["Widget A",100,150,{"formula":"SUM(B2:C2)"}],
      ["Widget B",200,180,{"formula":"SUM(B3:C3)"}]
    ],
    "has_headers": true,
    "auto_filter": true,
    "conditional_formatting": [{
      "range": "B2:C3",
      "type": "greaterThan",
      "values": [150],
      "style": {"backgroundColor":"00FF00"}
    }]
  }],
  "filename": "sales_report"
}
```

**Formula syntax:** Use `{"formula": "SUM(A1:A10)"}` object — no leading `=`.

**Conditional formatting types:** `greaterThan`, `lessThan`, `equal`, `between`, `containsText`, `duplicateValues`

### modify_excel

Modifies an existing Excel file **in-place** — same document ID, content replaced.

```json
{
  "document_id": "<id from upload_file or any create_excel* call>",
  "set_cells": {
    "A1": "Updated Title",
    "Sheet2!B5": {"formula": "SUM(B2:B4)"}
  },
  "append_rows": {
    "Sheet1": [["New Row", 100, 200]]
  },
  "number_formats": {"B2:B100": "#,##0.00"},
  "auto_filter": {"Sheet1": true},
  "add_sheets": [{"name": "Summary", "data": [["Total",500]], "has_headers": false}],
  "delete_sheets": ["OldSheet"],
  "rename_sheets": {"OldName": "NewName"}
}
```

### read_excel
```json
{
  "file_content": "<base64-encoded xlsx>",
  "include_headers": true,
  "sheet_name": "Sheet1"
}
```
Alternatively pass `librechat_file_id` instead of `file_content`.

### read_excel_detailed
```json
{
  "file_content": "<base64-encoded xlsx>",
  "include_headers": true
}
```
Returns values, formulas, comments, validation rules, hyperlinks, named ranges, merged cells, and workbook properties.

## Key Notes

- All create tools return `{id, filename, downloadUrl, markdownLink}` — always render `markdownLink` in the reply.
- `modify_excel` requires a `document_id` pointing to an `.xlsx` file; it errors if the doc type is not Excel.
- Cell addresses support sheet prefix: `"Sheet2!B3"`.
- The org/user color theme is automatically applied when configured in settings.
- To fill a template with `{{placeholder}}` syntax, use `fill_excel_template` from the **templates-skill** instead.
````
