---
title: "Structured Datasets, Smarter Documents & New Gemini Models"
excerpt: "Turn documents into queryable datasets, build richer Office files step by step, get clearer cost insights, and pick from new Gemini models."
date: 2026-06-10
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyRAG
  - companyFILES
  - companyDASHBOARD
---

A big week across the platform: companyRAG can now extract structured data from your documents, companyFILES generates richer Office files, and two new Gemini models are available.

## ✨ CompanyGPT

- **New Gemini models**: Gemini 3.5 Flash and Gemini 3.1 Flash Lite are now selectable in the model picker, giving you faster, lighter options for everyday chats.

## 📚 companyRAG

- **Structured data extraction**: Beyond plain text search, you can now turn documents into structured datasets. companyRAG extracts fields into a relational schema — including foreign-key relationships between tables — so your data becomes properly queryable.
- **Live datasets you can query with SQL**: A new dataset collection type lets you inspect the live schema and run SQL-style queries over extracted data, with role-based access controls keeping results scoped to who's allowed to see them.
- **Prompt templates per collection**: Save a reusable prompt template on a collection so every query against it starts from the right instructions.
- **Better handling of tables**: Markdown tables are now chunked table-aware, so rows and columns stay intact during retrieval and answers about tabular content are more accurate.
- **SharePoint into datasets**: The SharePoint sync now understands collection types, so you can feed SharePoint content straight into a structured dataset.

## 🔧 companyRAG Improvements

- **PDFs go through OCR by default**: Scanned and image-based PDFs are now run through OCR automatically, so their text is reliably indexed.
- **Reindex across collections**: The same file can now be reindexed in multiple collections without conflicts.

## 📄 companyFILES

- **Iterative document creation**: Word and PowerPoint files can now be built and refined step by step, with selective update tools that change just the parts you ask for instead of regenerating the whole document.
- **Styled PowerPoint tables**: Slides support richly styled tables via HTML, so generated decks look closer to hand-built ones.
- **Chart-widget overhaul**: Charts in generated documents have been reworked for better-looking, more reliable output.
- **Expanded slide options**: New slide and PowerPoint options give finer control over how presentations are assembled.

## 📊 companyDASHBOARD

- **Clearer cost tiles**: "Real infrastructure costs" is now "Real total costs" with an "Infrastructure & Token" subtitle, making it obvious the figure aggregates both layers.
- **Honest cost estimates**: The estimated-cost tooltip now spells out its worst-case assumptions (list price × tokens, no cache discount, no volume rebate, no infrastructure) and points you to the real-cost tile for the true number.
- **Billing-lag hint**: Live Hub cost data now flags the typical 2–3 day cloud-billing delay, and the "as of" date is parsed correctly so it no longer shifts across time zones.
