---
title: "Strukturierte Datasets, intelligentere Dokumente & neue Gemini-Modelle"
excerpt: "Dokumente in abfragbare Datasets verwandeln, umfangreichere Office-Dateien Schritt für Schritt erstellen, klarere Kosten-Insights und neue Gemini-Modelle."
date: 2026-06-10
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyRAG
  - companyFILES
  - companyDASHBOARD
---

Eine ereignisreiche Woche auf der gesamten Plattform: companyRAG kann jetzt strukturierte Daten aus Ihren Dokumenten extrahieren, companyFILES erzeugt umfangreichere Office-Dateien und zwei neue Gemini-Modelle stehen zur Verfügung.

## ✨ CompanyGPT

- **Neue Gemini-Modelle**: Gemini 3.5 Flash und Gemini 3.1 Flash Lite sind jetzt in der Modellauswahl verfügbar und bieten schnellere, ressourcenschonende Optionen für den Alltag.

## 📚 companyRAG

- **Extraktion strukturierter Daten**: Über die reine Textsuche hinaus können Sie Dokumente nun in strukturierte Datasets umwandeln. companyRAG extrahiert Felder in ein relationales Schema – inklusive Fremdschlüssel-Beziehungen zwischen Tabellen – sodass Ihre Daten richtig abfragbar werden.
- **Live-Datasets mit SQL abfragen**: Ein neuer Dataset-Collection-Typ erlaubt es, das Live-Schema einzusehen und SQL-artige Abfragen über die extrahierten Daten auszuführen – mit rollenbasierten Zugriffsrechten, die Ergebnisse auf berechtigte Nutzer beschränken.
- **Prompt-Vorlagen pro Collection**: Speichern Sie eine wiederverwendbare Prompt-Vorlage an einer Collection, damit jede Abfrage mit den passenden Anweisungen startet.
- **Bessere Verarbeitung von Tabellen**: Markdown-Tabellen werden jetzt tabellenbewusst aufgeteilt, sodass Zeilen und Spalten beim Retrieval erhalten bleiben und Antworten zu tabellarischen Inhalten präziser sind.
- **SharePoint in Datasets**: Die SharePoint-Synchronisierung versteht nun Collection-Typen, sodass Sie SharePoint-Inhalte direkt in ein strukturiertes Dataset überführen können.

## 🔧 companyRAG Verbesserungen

- **PDFs standardmäßig per OCR**: Gescannte und bildbasierte PDFs werden jetzt automatisch per OCR verarbeitet, sodass ihr Text zuverlässig indexiert wird.
- **Reindexierung über Collections hinweg**: Dieselbe Datei kann nun ohne Konflikte in mehreren Collections neu indexiert werden.

## 📄 companyFILES

- **Iterative Dokumenterstellung**: Word- und PowerPoint-Dateien lassen sich nun Schritt für Schritt erstellen und verfeinern – mit selektiven Update-Tools, die nur die gewünschten Teile ändern, statt das gesamte Dokument neu zu erzeugen.
- **Formatierte PowerPoint-Tabellen**: Folien unterstützen über HTML reich formatierte Tabellen, sodass generierte Präsentationen handgemachten näherkommen.
- **Überarbeitete Chart-Widgets**: Die Diagramme in generierten Dokumenten wurden für ein besseres Aussehen und zuverlässigere Ergebnisse neu aufgebaut.
- **Erweiterte Folien-Optionen**: Neue Folien- und PowerPoint-Optionen bieten feinere Kontrolle darüber, wie Präsentationen zusammengestellt werden.

## 📊 companyDASHBOARD

- **Klarere Kosten-Kacheln**: Aus „Reale Infrastrukturkosten" wird „Reale Gesamtkosten" mit dem Untertitel „Infrastruktur & Token", damit klar ist, dass der Wert beide Ebenen zusammenfasst.
- **Ehrliche Kostenschätzungen**: Der Tooltip zur geschätzten Kosten erklärt nun seine Worst-Case-Annahmen (Listenpreis × Tokens, kein Cache-Rabatt, kein Mengenrabatt, keine Infrastruktur) und verweist für den echten Wert auf die Reale-Kosten-Kachel.
- **Hinweis auf Abrechnungsverzögerung**: Die Live-Kostendaten aus dem Hub weisen jetzt auf die typische Verzögerung von 2–3 Tagen bei der Cloud-Abrechnung hin, und das „Stand"-Datum wird korrekt verarbeitet, sodass es sich nicht mehr über Zeitzonen verschiebt.
