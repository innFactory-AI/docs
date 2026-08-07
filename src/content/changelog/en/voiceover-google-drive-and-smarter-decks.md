---
title: "Voiceover Goes Live, Google Drive as a Source and Smarter Slide Decks"
excerpt: "companyTRANSCRIBE turns text into spoken audio and lets you switch off speaker separation, companyRAG indexes Google Drive and Parquet datasets, companyFILES fills password-protected PDF forms and builds decks from your corporate template, and CompanyGPT shows you what a tool is actually doing."
date: 2026-08-05
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyRAG
  - companyFILES
  - companyTRANSLATE
  - companyTRANSCRIBE
  - companyM365
---

The voiceover preview we announced last time is now live, your knowledge bases gain another source and a new data format, and generating presentations gets noticeably better.

## 🎙️ companyTRANSCRIBE

- **Voiceover is available**: The counterpart to transcription has arrived. Write or paste a text, pick a voice and turn it into spoken audio — for training material, product videos or accessible versions of your documents. Voiceovers now follow the same structure as transcripts: an overview list, a page for creating a new one and a detail page per voiceover, with description and creator visible at a glance.
- **Switch off speaker separation**: Recording has a new toggle for speaker diarization. With it turned off, the transcript view, the Markdown download and the MCP output leave speaker labels out entirely instead of inventing a "Speaker 1" that was never there.
- **Clearer navigation**: The sidebar is grouped into transcripts and voiceovers, and leaving a running recording can no longer discard it by accident.

## 📚 companyRAG

- **Google Drive as a document source**: Connect Google Drive and index its documents alongside your other sources — no export or manual upload step.
- **Share with people and groups in one search**: The share dialog for collections now searches users and groups together, so you no longer need to know in advance which one you are looking for. Ownership is handled as a share too, which makes it visible and transferable.
- **Parquet in dataset collections**: Dataset collections accept `.parquet` files in addition to CSV and Excel, so analytics exports can be used as a data basis directly.
- **Large documents index reliably**: Extracted pages of very large documents no longer fail during indexing.

## 📄 companyFILES

- **Corporate templates without placeholders**: PowerPoint generation now works layout-natively. Decks are built from the layouts of your corporate master — the template no longer needs prepared `{{placeholder}}` fields.
- **Fill PDF forms**: Form fields in PDFs can now be read *and* filled — for example authority or insurance forms. All other fields in the document are preserved.
- **More robust tool calls**: Structured arguments that a model sends as a JSON string are now accepted, so tool calls fail less often.

## 🧩 companyM365

- **Build entire decks from Markdown or a document**: The add-in creates a complete presentation in a single step — from a Markdown outline or from an existing Word, Excel or PDF document. Ready-made block types for KPIs, process steps, columns, bullet lists, quotes and tables are available, and a layout check verifies that nothing overlaps or slips off the slide.
- **Template awareness in PowerPoint**: The add-in reads the layouts of your presentation template and uses them, so new slides match your corporate design.
- **Review changes before they are applied**: Edit modes and suggestion cards show what the agent wants to change; you accept or reject it. Long suggestions now collapse instead of being cut off.
- **Documents as structured text**: Word, Excel and PDF files can be read as Markdown with their structure intact — a better basis for summaries and slides.

## 🌐 companyTRANSLATE

- **Google as the default backend**: Where the Google translation backend is available, it is now enabled by default — better quality for document and text translation without any configuration.
- **Names with umlauts no longer cause errors**: Display names with special characters caused failures on every API request. Fixed.
- **Stable TMX uploads**: Large translation memories are parsed once per upload and no longer block the interface.

## ✨ CompanyGPT

- **See what a tool is doing**: While a tool is running, the chat shows what it is actually doing instead of just its technical name. In the Agent Builder you can decide per tool whether this label is displayed.
- **Progress display for long answers**: Longer streaming replies now show an interim progress card instead of an apparently idle chat.
- **Interrupt and redirect more reliably**: Stopping a running agent and steering it in a different direction works considerably more reliably, including recovery afterwards.
- **Smoother skills**: The `/` command only searches the text before your cursor, links inside skill documents resolve correctly, and files attached to a skill upload more reliably.
- **More throughput and larger contexts**: The AI gateway no longer throttles at 60 requests per minute, and large context tiers now actually reach the model instead of being silently reduced.
- **Cleaner user administration**: Lifting a user restriction now reliably restores full access.

## 🔜 Coming soon

- **companyROUTINES**: Recurring agent runs on a schedule. Agents can be chained, runs are mirrored into your chat history, and MCP servers can be connected with OAuth or an API key. An OpenAI-compatible API makes routines usable from other tools. Currently in pilot with selected environments.
