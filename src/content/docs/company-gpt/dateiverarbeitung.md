---
title: Dateiverarbeitung
description: Erfahren Sie, wie CompanyGPT Dateien verarbeitet - Kontextbezogene Analyse (Bilder, OCR), Dateisuche mittels RAG und nahtlose SharePoint-Integration für effizientes Informationsmanagement.
---

Im CompanyGPT können Dateien auf unterschiedliche Arten verarbeitet werden. Je nach Art stehen die Dateiinhalte dann unterschiedlich zur Verfügung.

:::tip[Kurzübersicht]
- Hochladen zum KI-Anbieter: Die Dateien werden inklusive Prompt an die KI gesendet (je nach Fähigkeiten der  und Dateityp). Die Inhalte können so interpretiert werden, beispielsweise Bilder oder Texte inklusive Grafiken.
- Hochladen als Text: Verarbeitung als Text über OCR (Optical Character Recognition). In Gänze Verfügbar.
- Hochladen für Dateisuche: Verarbeiten als Text, Zerlegen in Abschnitte und umwandeln als Embeddings durch ein Embeddingsmodell. Ähnlichkeitssuche bei der Abfrage.
:::

![files](files.png)

## Hochladen zum KI-Anbieter

Die Dateien werden in gänze zusammen mit einem Prompt an das KI Modell gesendet. Dadurch können die Inhalte ausgelesen und verarbeitet werden. Durch den Prompt können zusätzliche Anweisungen geben. So können beispielsweise Bilder analysiert werden, Texte inklusive Grafiken verarbeitet und interpretiert werden oder handschirftliche Scans / Fotos verarbeitet werden. 

**Limitierung**: Es kommt hierbei auf das KI Modell an, welche Informationen und Dateitypen verarbeitet werden können.

## Hochladen als Text

Hierbei werden die Dateien, zum Beispiel PDFs, hochgeladen und mit Hilfe von OCR (Optical Character Recognition) durch ein KI-Modell alle Texte extrahiert und der Nachricht in Gänze angehängt. Das ist nützlich, wenn man beispielsweise Texte zusammenfassen möchte oder wichtige Punkte extrahieren möchte. 

**Limitierung**: Es werden hierbei keine Bilder in den Texten verarbeitet. Die `Document API` von Azure auf Basis von Mistral OCR erlaubt nur Dokumente mit maximal 30 Seiten länge und 50mb Dateigröße. 

![files-text-ocr](files-text-ocr.png)

## Dateisuche

Dokumente können auch für die Dateisuche hochgeladen werden. Dabei werden die Inhalte indexiert und in der Datenbank gespeichert. Diese können dann durch die KI-Modelle bei Bedarf durchsucht und die Antworten durch die Ergebnisse angereichert werden. Informationen zur Funktionsweise finden Sie hier: [RAG - Retrieval Augmented Generation](/prompt-engineering/prompt-techniken/rag/#rag-workflow-für-die-dateiverarbeitung)

**Limitierung**: Die Dokumente sind nur für den jeweiligen User zugänglich. Um Dokumente in der Dateisuche für mehrere User oder die gesamte Organisation zugänglich zu machen, können diese über [Agenten](/company-gpt/agenten) oder auch über die [KI Suche](/company-gpt/addons/ki-suche) integriert werden.

## SharePoint-Integration

Über die SharePoint-Integration stehen die gleichen Möglichkeiten für die Dateiverarbeitung zur Verfügung. Dabei müssen die Dateien nicht manuell hochgeladen werden, sondern können direkt aus allen dem Nutzer zugänglichen SharePoint-Speicherorten hinzugefügt werden, jeweils als [Hochladen zum KI-Anbieter](#hochladen-zum-ki-anbieter), [Text](#hochladen-als-text) oder für die [Dateisuche](#dateisuche).