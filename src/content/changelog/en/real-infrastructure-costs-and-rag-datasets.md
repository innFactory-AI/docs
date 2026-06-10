---
title: "Real Infrastructure Costs, RAG Datasets & Mistral Document AI"
excerpt: "See your actual cloud spend in the dashboard, build and tune knowledge datasets in companyRAG, connect Nextcloud, and parse documents with Mistral Document AI."
date: 2026-06-03
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyRAG
  - companyDASHBOARD
---

This release brings real cost transparency to the dashboard, a much richer dataset and source toolkit in companyRAG, and a new document-parsing model.

## ✨ CompanyGPT

- **Mistral Document AI**: A new document-understanding model is available for parsing and extracting content from complex files, improving how documents are read across the platform.

## 📊 companyDASHBOARD

- **Real infrastructure costs**: The dashboard now shows your actual cloud spend from the innFactory Hub — current-month Azure/GCP/NCE costs, a month-end forecast, and the last sync date — instead of just estimates.
- **Cost breakdown by workload**: Hover the real-cost figure to see spend broken down per workload, sorted from highest to lowest.
- **Month-based date selector**: Pick a specific month to review costs and usage for that period.
- **Redesigned overview**: A cleaner, symmetric 3×5 overview grid surfaces agents, users, tokens, requests, OCR, files, images, MCP calls, and a dedicated Real Infrastructure Costs tile at a glance.

## 📚 companyRAG

- **Knowledge datasets**: Build structured datasets from your documents through a dedicated dataset pipeline, and clean them up with transform tools — turning raw content into organized, reusable data.
- **Nextcloud as a source**: Connect a Nextcloud account (via app passwords) to index and search your Nextcloud files directly.
- **Configurable chunking**: Choose a chunking strategy and adjust chunk size per collection, so retrieval can be tuned to the kind of content you're indexing.
- **Full-text search language**: Set the language used for full-text search so keyword matching works correctly for your content.
- **Friendlier dataset naming**: Datasets now use file names automatically, making them easier to recognize and manage.
- **Audit log**: Track activity across your knowledge base for better oversight.
