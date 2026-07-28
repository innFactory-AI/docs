---
title: "New Knowledge Sources, Bidirectional Glossaries and CompanyGPT in Office"
excerpt: "companyRAG can now index GitHub repositories and SharePoint site pages, lets you build knowledge bundles yourself and clean up your files in bulk. companyTRANSLATE glossaries work in both directions and are applied automatically, and companyM365 brings CompanyGPT directly into Word, Excel, PowerPoint, Outlook and Teams."
date: 2026-07-28
author:
  name: innFactory Team
lang: en
tags:
  - companyRAG
  - companyTRANSLATE
  - companyM365
  - companyTRANSCRIBE
---

Your knowledge bases gain two new sources and self-service bundles, glossaries become noticeably easier to use, and CompanyGPT moves into your Microsoft 365 apps.

## 📚 companyRAG

### ✨ New Features

- **GitHub as a knowledge source**: Connect your GitHub account with a personal access token, browse your repositories, pick a branch and a folder, and choose which file types to index. Markdown documentation living in a repo becomes searchable knowledge without any export step.
- **SharePoint site pages and news**: When setting up a SharePoint source you can now choose what gets indexed — documents, site pages and news, or both. Content that only exists as a SharePoint page is finally part of your search results.
- **Build knowledge bundles yourself** `Preview`: A new wizard on the Collections page lets you create a curated knowledge bundle backed by a GitHub repository or a SharePoint folder — including an optional starter structure with README, index and log file, so a new knowledge base is ready to fill in immediately. These bundles are based on the Open Knowledge Format (OKF).
- **Bulk file management**: Select multiple files at once and delete them in a single action. New status filters for files and jobs make it much easier to find exactly the entries you're looking for.
- **Image handling per collection**: Choose per collection how images and scanned pages are processed, so scan-heavy collections can be transcribed verbatim instead of summarized.
- **Clearer navigation**: The sidebar is now grouped into sections, so you reach files, sources, collections and jobs faster.

### 🔧 Improvements

- **Clean up leftover entries**: Records left behind by failed or removed documents are now easier to delete, so your file list reflects what's actually indexed.
- **Complete SharePoint permissions**: Permissions from classic SharePoint site groups and from "Everyone except external users" are now resolved as well, so documents you have access to actually show up in your results.
- **Stay signed in**: Your session is refreshed silently in the background — no more loading screen or being thrown back to the files page mid-task.
- **Safer API keys**: The API keys page now points out explicitly what an API key grants access to before you create one.

### 🐛 Fixes

- Source citations now point to the correct page number instead of being off by one.
- PowerPoint extraction reports the right slide numbers.

## 🌐 companyTRANSLATE

- **Bidirectional glossaries**: A glossary you upload now works in both language directions. Upload German → English once and it also applies to English → German — no second file, no duplicate maintenance. Works for CSV, TSV and TMX uploads.
- **Glossaries with automatic language detection**: When you let companyTRANSLATE detect the source language, the matching glossary is now applied automatically instead of being skipped.
- **Large TMX files no longer fail**: TMX files above the 10 MB limit of the translation service are now converted into a term glossary automatically, so your big translation memories can still be used.
- **Fixes**: Minor bug fixes and usability improvements.

## 🧩 companyM365

The deeper Microsoft 365 integration, as a preview.

- **CompanyGPT inside Office**: An add-in for Word, Excel, PowerPoint and Outlook puts a CompanyGPT chat right next to your document. The agent can see the document — including slides and cell ranges as images — and edit it directly, from formatting and tables through to comments.
- **Prompts and skills at your fingertips**: Type `/` for your saved prompts and `$` for your skills inside the add-in to start recurring tasks without retyping them.
- **More Outlook and Excel capabilities**: Mail triage, mailbox settings and additional workbook tools let the agent take on more of the routine work in your inbox and spreadsheets. Emails are still only ever prepared as drafts.
- **Better-looking slides**: Presentations can be built from your corporate templates, and images can be inserted from a URL, a file or your drive.

## 🔜 Coming soon

- **Voiceover in companyTRANSCRIBE**: companyTRANSCRIBE is getting the counterpart to transcription. Write or paste a text, pick a voice and turn it into spoken audio — for example for training material, product videos or accessible versions of your documents. You can listen to the result, edit the text and re-generate it, while earlier versions stay in the history. Your agents can create voiceovers too. Rolling out with selected customers first, general availability to follow.
- **Budgets and cost control in the AI gateway**: Central budgets per organization and per user, with sub-limits per model provider and cost-center assignment, so AI spend stays transparent and plannable. Currently piloting on our own environments and select customers.
