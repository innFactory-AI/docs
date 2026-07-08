---
title: "Platform Update 0.8.8, a Unified Tools Experience, and Smarter Document Extraction"
excerpt: "CompanyGPT moves to platform version 0.8.8 with on-the-fly skill authoring, subagents, sharper cost tracking and faster navigation — plus a unified tools sidebar and a redesigned, more reliable companyRAG."
date: 2026-07-07
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyRAG
  - companyTRANSLATE
---

CompanyGPT moves to the latest platform version 0.8.8, the add-on tools get a shared look and a unified sidebar, and companyRAG becomes easier to follow and to tune.

## ✨ CompanyGPT

The underlying platform has been updated to the latest version 0.8.8 across all tenants. Highlights from this version:

- **Author skills on the fly**: Agents can now create new skills right inside a conversation, so a workflow you describe once can be saved and reused later.
- **Subagents**: Agents can hand off parts of a task to specialized subagents, making longer, multi-step jobs more reliable.
- **Sharper context & cost tracking**: The context-usage gauge now reconciles against the actual tokens reported by the model provider, so the usage and cost figures you see are more accurate.
- **Faster navigation in long chats**: A message minimap lets you jump around long conversations, including a one-click jump to the latest message.
- **Attachments stay in shared links**: When you share a conversation link, its file attachments are snapshotted so recipients can still open them.
- **Unified add-ons sidebar**: Your add-on tools now appear together in the sidebar, so switching between the chat and tools like companyTRANSLATE or companyTRANSCRIBE is a single click.

## 📚 companyRAG

### ✨ New Features

- **Live queue visibility**: The Jobs page now shows the global queue depth and your job's exact position in line, so you can see how long an indexing job is likely to wait.
- **Editable extraction prompt**: You can now edit the prompt used for extraction directly, giving you control over how data is pulled from your documents. The extraction dialog is also fully localized.
- **Reworked navigation**: The sidebar top navigation has been reorganized to make it quicker to move between sections.

### 🔧 Improvements

- **Large documents extract reliably**: Extraction now streams through large files using cursor continuation with a page cap, so big documents no longer fail or stall partway through.
- **Sharper scanned pages**: Scan-like pages are now transcribed verbatim instead of being summarized, so nothing is lost when indexing scanned documents.
- **Complete SharePoint sync**: Large, flat SharePoint folders are now paginated correctly, so every file in them is synced.
- **Steadier extraction**: Extraction runs on Gemini are more robust, with enough thinking headroom and proper handling of edge-case responses.
- **Clearer beta labels**: The extraction and image-description features are now marked as Beta so their maturity is transparent.

### 🐛 Fixes

- Files that don't belong to a collection are visible again.

## 🌐 companyTRANSLATE

- **Redesigned interface**: companyTRANSLATE now matches the shared companyUI look and feel, with a new vertical sidebar replacing the old horizontal header and smoother skeleton loading while the app starts.

## 🎙️ companyTRANSCRIBE (Beta)

- **Consistent look and quick navigation**: companyTRANSCRIBE adopts the shared companyUI design, with quick links back to the chat and to the other tools.
- **Protected recordings**: Active recordings are now protected against accidental navigation and session expiry, so a long recording won't be lost mid-session.
- **More reliable uploads**: Browser recordings are transcoded to mono MP3 before submission for more dependable transcription.
