---
title: "Media Usage & Cost Visibility in the Dashboard"
excerpt: "See speech, OCR, and image-generation usage and costs right on the dashboard overview, with new filters and a more reliable experience."
date: 2026-05-27
author:
  name: innFactory Team
lang: en
tags:
  - companyDASHBOARD
---

The dashboard now goes beyond chat tokens and surfaces what you spend on speech, OCR, and image generation — plus filtering and stability improvements.

## ✨ New Features

- **Media usage cards**: The overview now includes dedicated cards for speech-to-text (Whisper), text-to-speech, OCR, and image generation. Each shows the usage volume and its cost in EUR, so non-chat spend is visible at a glance.
- **Media models in the provider breakdown**: The usage-by-provider donut now includes media models — Whisper, TTS, Mistral OCR, DALL·E, Flux, and gpt-image-1 — alongside your chat models, for a complete picture per provider.
- **Token-type filters**: Statistics can now be filtered by token type, making it easier to drill into exactly the usage you care about.

## 🔧 Improvements

- **Broader usage coverage in tables**: Usage tables now account for speech, OCR, and image-generation activity, not just chat.
- **More reliable loading**: The dashboard handles large date ranges far better and no longer crashes on heavy queries.

## 🐛 Fixes

- Corrected an end-of-day boundary so daily totals include the full day's activity.
