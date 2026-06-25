---
title: "Big CompanyGPT Update: Projects, Live Cost Tracking, Google Translation & More"
excerpt: "A major platform upgrade brings chat projects, live context & cost tracking and pinned chats, plus Google translation with glossaries, automatic PDF form filling, and per-collection embeddings in companyRAG."
date: 2026-06-25
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyTRANSLATE
  - companyFILES
  - companyRAG
---

A big release across the platform: CompanyGPT moves to a major new base version with chat projects, live context and cost tracking, and pinned conversations — alongside a second translation engine, automatic PDF form filling, and more control over your knowledge bases.

## ✨ CompanyGPT

The underlying platform has been upgraded to a major new version, rolled out across all tenants. Highlights you can use right away:

- **Chat projects**: Group related conversations into projects so longer pieces of work stay organized in one place.
- **Pinned conversations**: Pin important chats to the top of your list for quick access.
- **Live context & cost tracking**: A context-usage gauge shows how much of the model's context window you're using in real time, along with token consumption and the associated cost.
- **Message timestamps**: Hover over any message to see exactly when it was sent.
- **Quote selected text**: Select text from earlier in a chat and quote it directly into your next message to keep the model focused on the right passage.
- **Conversation starters**: Models can offer suggested opening prompts so it's easier to get going.
- **Redesigned settings**: A reworked, searchable settings dialog makes it much faster to find the option you need, and works better on mobile.
- **Keyboard shortcuts**: Navigate and interact with the interface faster without reaching for the mouse.

## 📄 companyFILES

- **Fill any PDF form**: Upload a PDF with form fields and have it filled in automatically — no template registration or setup required.
- **Edit your chat attachments**: Files you've attached in a chat can now be edited directly, so you can refine a document without starting over.
- **More reliable Office output**: Generated Word, Excel and PowerPoint files now pass validation more cleanly, eliminating false-positive errors on otherwise valid documents.

## 🌐 companyTRANSLATE

- **Google Cloud Translation engine**: Live text translation can now run on Google Cloud Translation alongside Azure, with automatic fallback to Azure so your translations keep working even if one provider is unavailable.
- **Glossaries in live translation**: Pick a glossary directly in the live translation view so your domain-specific and brand terminology is applied consistently. Glossaries are kept in sync across both translation engines.
- **Glossary readiness feedback**: You now see whether a glossary is ready for a given language pair before you translate, so there are no surprises mid-translation.

## 📚 companyRAG

### ✨ New Features

- **Choose embeddings per collection**: Select which embedding model a collection uses from multiple providers, so you can match embeddings to your content and language.
- **Image descriptions for scanned documents**: companyRAG can now generate descriptions for images inside OCR'd documents per collection, making visual content findable in search.
- **Statistical queries on datasets**: Distribution and statistics functions are now available in dataset queries, so you can run richer numerical analysis directly over your extracted data.
- **Better website sources**: Sitemap crawling and raw page retrieval have been improved, so website sources are indexed more completely.

### 🔧 Improvements

- **Readable share names**: Shared collections now show human-readable names instead of raw IDs.
- **Formatted query results**: Dataset query results are returned as clean markdown tables that are easier to read.
- **Friendlier dataset uploads**: Re-uploaded datasets are de-duplicated automatically, and superseded files are cleaned up after a successful upload.

### 🐛 Fixes

- Stale indexing jobs are now recovered automatically when a worker restarts, so uploads don't get stuck.
- Collection shares by email are matched reliably regardless of capitalization.

## 🎙️ companyTRANSCRIBE (Beta)

- **Audio transcription, now in beta**: Our new transcription add-on is available in beta for select customers. It turns audio recordings into searchable transcripts, lets you play back the audio with the transcript highlighting along in sync, and exposes transcripts to agents through a read-only connection.
- **Speaker diarization for up to 35 speakers**: Transcripts automatically separate who said what, distinguishing up to 35 distinct speakers — ideal for meetings, interviews and workshops.
