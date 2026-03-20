---
title: Modellauswahl
description: Wann welches KI Modell nutzen? Diese Übersicht hilft Ihnen.
---

:::note[Modell-Updates bei OpenAI]
Microsoft plant, die OpenAI-Modelle GPT-4o und GPT-4o-mini bis Ende März 2026 einzustellen und durch neuere Generationen wie GPT 5.1 und GPT 4.1-mini zu ersetzen.
:::

### Dynamisches Model Routing

Wählen Sie unter der OpenAI-Modellauswahl einfach "auto", um das dynamische Routing von CompanyGPT zu aktivieren. Das System analysiert Ihren Prompt und wählt automatisch das effizienteste OpenAI-Modell: Schnelle, kleinere Modelle für Standardfragen und High-End-Modelle für komplexe Analysen. So sparen Sie ohne manuellen Aufwand Zeit und Token-Kosten.

### Faustregel:

- **Schnell & günstig** → Mini / Flash / Nano / Haiku
- **Standard & zuverlässig** → große Allround-Modelle
- **Komplex & kritisch** → stärkste Modelle
- **EU / intern / Datenschutz** → Stackit-Modelle

---

## OpenAI

### o3-mini

- **Für:** Logik, Mathematik, Coding und komplexes Problemlösen
- **Wann:** wenn die KI erst intern "nachdenken" (Reasoning) muss, bevor sie antwortet
- **Warum:** kombiniert extrem schnelles Output-Tempo mit tiefgehender logischer Präzision

### gpt-4o mini

- **Für:** kurze Fragen, einfache Texte, schnelle Antworten
- **Wann:** Alltag, Chat, Zusammenfassen, Brainstorming
- **Warum:** sehr schnell und günstig, reicht für ~80 % der Fälle

### gpt-4o

- **Für:** Standard-Allround-Aufgaben
- **Wann:** wenn Qualität wichtiger ist als reine Geschwindigkeit
- **Warum:** stark in Textverständnis, Struktur und Logik

### gpt-4.1

- **Für:** komplexe Analysen, saubere Argumentationen
- **Wann:** Strategie, Konzepte, tiefgehende Erklärungen
- **Warum:** präziser und stabiler als gpt-4o

### gpt-4.1 mini

- **Für:** bessere Qualität bei weiterhin hoher Geschwindigkeit
- **Wann:** wenn gpt-4o mini zu oberflächlich ist
- **Warum:** guter Mittelweg aus Qualität und Performance

### gpt-5 mini

- **Für:** anspruchsvolle Aufgaben mit Effizienz
- **Wann:** Coding, strukturierte Outputs, längere Texte
- **Warum:** moderner und robuster als die GPT-4-Serie

### gpt-5 nano

- **Für:** extrem einfache, schnelle Tasks
- **Wann:** Autovervollständigung, kurze Antworten, Massentasks
- **Warum:** extrem schnell und günstig, aber begrenzte Tiefe

### gpt-5.1-chat

- **Für:** interaktive Dialoge und Agenten-Workflows
- **Wann:** Support, flüssige Konversationen, striktes Befolgen von Anweisungen
- **Warum:** optimiert auf natürliche Sprache und das Halten des Kontexts im Chat

### gpt-5.2-chat

- **Für:** anspruchsvollere Dialoge mit hoher Faktentreue
- **Wann:** komplexe Beratung, Brainstorming, detaillierte Erklärungen im Chat
- **Warum:** verbesserte Logik und stark reduzierte Halluzinationen im direkten Gespräch

### gpt-5.2

- **Für:** schwerste analytische Allround-Aufgaben
- **Wann:** große Dokumentenmengen, komplexe Datenanalyse, strategische Planung
- **Warum:** das Flaggschiff der 5.2-Generation, pure Qualität steht vor Geschwindigkeit

### gpt-5.2-codex

- **Für:** reine Softwareentwicklung und Systemarchitektur
- **Wann:** Code schreiben, refactoren, debuggen, Architektur planen
- **Warum:** isolierter Spezialist, der Allround-Modelle bei Programmieraufgaben schlägt

### gpt-5.3-chat

- **Für:** hochdynamische Echtzeit-Interaktionen
- **Wann:** komplexe Multi-Turn-Dialoge, feine Nuancen in der Sprache
- **Warum:** extrem geringe Latenz und perfektes Verständnis für den Gesprächsverlauf

### gpt-5.4

- **Für:** das absolute Maximum an Leistungsfähigkeit
- **Wann:** wenn Kosten nachrangig sind und das beste Ergebnis für extrem komplexe Probleme gebraucht wird
- **Warum:** das stärkste Allround-Modell der 5er-Serie für tiefgreifende Aufgaben

### gpt-5.4-mini

- **Für:** State-of-the-Art Qualität bei Massentasks
- **Wann:** Verarbeitung großer Datensätze, Routineaufgaben auf sehr hohem Niveau
- **Warum:** effizientester Weg, die moderne 5.4-Architektur schnell und kostengünstig einzusetzen

---

## Google

### Gemini 2.5 Flash

- **Für:** maximale Geschwindigkeit
- **Wann:** schnelles Nachfragen, Ideensammlung, Iterationen
- **Warum:** sehr schnell, gut bei Überblick und Kontext

### Gemini 2.5 Pro

- **Für:** tiefes Denken und große Kontexte
- **Wann:** komplexe Dokumente, Vergleiche, Analysen
- **Warum:** Googles stärkstes Modell mit hoher Strukturqualität

### Gemini Image Tools / Nano Banana

- **Für:** Bildanalyse, Bildgenerierung, Bildbearbeitung
- **Wann:** Text-zu-Bild-Generierung, Bildbearbeitung mit Prompts (Bild+Text) und Komposition mehrerer Bilder
- **Warum:** Googles Bildmodelle, die in CompanyGPT integriert sind

---

## Anthropic

### Claude 4.6 Opus

- **Für:** höchste Komplexität und tiefgreifende Analysen
- **Wann:** strategische Planung, extrem lange Kontexte, schwerste Logikaufgaben
- **Warum:** Anthropics stärkstes Modell, wenn Präzision absolut vor Kosten und Geschwindigkeit geht

### Claude 4.6 Sonnet

- **Für:** Programmieren, komplexe Textverarbeitung und anspruchsvolle Allround-Aufgaben
- **Wann:** Softwareentwicklung, Code-Refactoring, tiefes Textverständnis, strukturierte Datenextraktion
- **Warum:** Der Sweetspot der Reihe. Extrem stark im Coden (oft auf oder über Opus-Level) und dabei effizient

### Claude 4.5 Haiku

- **Für:** sehr schnelle Verarbeitung bei hoher logischer Präzision
- **Wann:** große Datenmengen filtern, UI-basierte Chatbots, einfache bis mittlere Tasks in Masse
- **Warum:** das schnellste und günstigste Modell der 3.5-Serie, schlägt oft ältere Flaggschiff-Modelle

---

## Perplexity AI

- **Für:** Nachschlagen, Überblick, Faktencheck, Recherche
- **Wann:** Fragen mit Fakten und Quellen
- **Warum?** Antwort **mit Quellen**

---

## Schnelle Entscheidungshilfe

- **„Ich will einfach eine gute Antwort“** → gpt-5 mini / Claude 4.5 Sonnet
- **„Es soll schnell gehen“** → gpt-5 nano oder Gemini 2.5 Flash
- **„Ich will programmieren / Code schreiben“** → Claude 4.5 Sonnet
- **„Es ist kompliziert oder extrem wichtig“** → gpt-4.1, gpt-5 mini oder Gemini 2.5 Pro
- **„Dokumente durchsuchen“** → Gemini 2.5 Flash
