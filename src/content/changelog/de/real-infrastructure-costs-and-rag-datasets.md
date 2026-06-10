---
title: "Reale Infrastrukturkosten, RAG-Datasets & Mistral Document AI"
excerpt: "Sehen Sie Ihre tatsächlichen Cloud-Kosten im Dashboard, erstellen und optimieren Sie Wissens-Datasets in companyRAG, verbinden Sie Nextcloud und verarbeiten Sie Dokumente mit Mistral Document AI."
date: 2026-06-03
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyRAG
  - companyDASHBOARD
---

Dieses Release bringt echte Kostentransparenz ins Dashboard, ein deutlich umfangreicheres Dataset- und Quellen-Toolkit in companyRAG sowie ein neues Modell zur Dokumentenverarbeitung.

## ✨ CompanyGPT

- **Mistral Document AI**: Ein neues Modell zum Dokumentenverständnis steht zur Verfügung, um Inhalte aus komplexen Dateien zu parsen und zu extrahieren – das verbessert, wie Dokumente plattformweit gelesen werden.

## 📊 companyDASHBOARD

- **Reale Infrastrukturkosten**: Das Dashboard zeigt nun Ihre tatsächlichen Cloud-Kosten aus dem innFactory Hub – die Azure/GCP/NCE-Kosten des laufenden Monats, eine Prognose zum Monatsende und das Datum der letzten Synchronisierung – statt nur Schätzungen.
- **Kostenaufschlüsselung nach Workload**: Fahren Sie über den Realkosten-Wert, um die Ausgaben pro Workload aufgeschlüsselt zu sehen, absteigend sortiert.
- **Monatsbasierte Datumsauswahl**: Wählen Sie einen bestimmten Monat, um Kosten und Nutzung für diesen Zeitraum auszuwerten.
- **Überarbeitete Übersicht**: Ein aufgeräumtes, symmetrisches 3×5-Übersichtsraster zeigt Agents, Nutzer, Tokens, Anfragen, OCR, Dateien, Bilder, MCP-Aufrufe und eine eigene Kachel für reale Infrastrukturkosten auf einen Blick.

## 📚 companyRAG

- **Wissens-Datasets**: Erstellen Sie strukturierte Datasets aus Ihren Dokumenten über eine eigene Dataset-Pipeline und bereinigen Sie diese mit Transform-Tools – so werden Rohinhalte zu organisierten, wiederverwendbaren Daten.
- **Nextcloud als Quelle**: Verbinden Sie ein Nextcloud-Konto (über App-Passwörter), um Ihre Nextcloud-Dateien direkt zu indexieren und zu durchsuchen.
- **Konfigurierbares Chunking**: Wählen Sie eine Chunking-Strategie und passen Sie die Chunk-Größe pro Collection an, sodass das Retrieval auf die Art Ihrer Inhalte abgestimmt werden kann.
- **Sprache der Volltextsuche**: Legen Sie die Sprache für die Volltextsuche fest, damit das Keyword-Matching für Ihre Inhalte korrekt funktioniert.
- **Verständlichere Dataset-Benennung**: Datasets verwenden nun automatisch Dateinamen, wodurch sie leichter zu erkennen und zu verwalten sind.
- **Audit-Log**: Verfolgen Sie Aktivitäten in Ihrer Wissensdatenbank für eine bessere Übersicht.
