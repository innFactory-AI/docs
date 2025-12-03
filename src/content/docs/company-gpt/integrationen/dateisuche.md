---
title: Dateisuche
description: Erfahre, wie die Dateisuche im CompanyGPT interne Dokumente durch RAG (Retrieval Augmented Generation) nutzt, um KI-Antworten mit spezifischem Wissen anzureichern.
---

Die Dateisuche ermöglicht es, die Inhalte von Dateien ähnlich der Abfrage zu durchsuchen und die Antworten so durch internes, spezifisches Wissen anzureichern. Die Dateisuche ist immer nur pro Nutzer verfügbar. 

:::note[Wofür eignet sich Dateisuche?]
Am besten für längere Textinhalte, die nicht in Gänze verarbeitet werden müssen, sondern einzelne Abschnitte zur Frage passend gesucht und in Antworten einbezogen werden sollen.

Weitere Informationen hier: [Dateiverarbeitung](/company-gpt/dateiverarbeitung/)
:::


Die Dateien werden nicht in Gänze dem Kontext hinzugefügt, sondern es werden nur passende Inhalte durch Ähnlichkeitssuche zurückgegeben. Diese Funktionsweise nennt sich [**RAG - Retrieval Augmented Generation**](/prompt-engineering/prompt-techniken/rag) und erweitert das Wissen von KI und KI-Agenten im CompanyGPT um domänenspezifische, interne oder auch geheime Dokumente. Dabei wird der Inhalt über ein KI-Modell in Embeddings (Vektoren) umgewandelt. Bei Suchen wird wiederum die Suchanfrage ebenfalls in Vektoren umgewandelt und mathematisch die Nähe berechnet. Dadurch kann man **inhaltliche Nähe** sehr viel besser als beispielsweise über eine Volltextsuche abbilden. 