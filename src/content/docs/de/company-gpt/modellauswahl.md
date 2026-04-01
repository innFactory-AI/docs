---
title: Modellauswahl
description: Wann welches KI Modell nutzen? Diese Übersicht hilft Ihnen.
---

:::note[Modell-Updates bei OpenAI]
Microsoft hat die OpenAI-Modelle GPT-4o und GPT-4o-mini wie geplant Ende März 2026 eingestellt und sie durch die neueren Generationen GPT 5.1 und GPT 4.1-mini ersetzt.
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

### gpt-5.1

- **Für:** interaktive Dialoge und Agenten-Workflows
- **Wann:** Support, flüssige Konversationen, striktes Befolgen von Anweisungen
- **Warum:** optimiert auf natürliche Sprache und das Halten des Kontexts im Chat

### gpt-Image 1.5

- **Für:** Bildgenerierung
- **Wann:** wenn Bilder generiert werden sollen
- **Warum:** OpenAI's Bildgenerierungsmodell

---

## Google

### Gemini 2.5 Flash

- **Für:** maximale Geschwindigkeit
- **Wann:** schnelles Nachfragen, Ideensammlung, Iterationen
- **Warum:** sehr schnell, gut bei Überblick und Kontext

### Gemini 2.5 Pro

- **Für:** tiefes Denken und große Kontexte
- **Wann:** komplexe Dokumente, Vergleiche, Analysen
- **Warum:** Googles ehemals stärkstes Modell mit hoher Strukturqualität (Abgekündigt)

### Gemini Image Tools / Nano Banana

- **Für:** Bildanalyse, Bildgenerierung, Bildbearbeitung
- **Wann:** Text-zu-Bild-Generierung, Bildbearbeitung mit Prompts (Bild+Text) und Komposition mehrerer Bilder
- **Warum:** Googles Bildmodelle, die in CompanyGPT integriert sind

---

## Anthropic

### Claude 4.6 Opus

- **Für:** höchste Komplexität und tiefgreifende Analysen
- **Wann:** strategische Planung, extrem lange Kontexte (1M), schwerste Logikaufgaben
- **Warum:** Anthropics stärkstes Modell für Agent Teams und Parallel-Workflows (höchste Kosten)

### Claude 4.6 Sonnet

- **Für:** Programmieren, komplexe Textverarbeitung und anspruchsvolle Allround-Aufgaben (Empfohlen)
- **Wann:** Softwareentwicklung, Code-Refactoring, tiefes Textverständnis
- **Warum:** Der Sweetspot der Reihe. Opus-Klasse Performance zum Sonnet-Preis (1M Kontext)

### Claude 4.5 Haiku

- **Für:** sehr schnelle Verarbeitung bei hoher logischer Präzision
- **Wann:** große Datenmengen filtern, UI-basierte Chatbots, einfache bis mittlere Tasks in Masse
- **Warum:** sehr schnell und kosteneffizient (weniger Reasoning als Sonnet/Opus)

---

## Perplexity AI

- **Für:** Nachschlagen, Überblick, Faktencheck, Recherche
- **Wann:** Fragen mit Fakten und Quellen
- **Warum?** Antwort **mit Quellen**

---

## Schnelle Entscheidungshilfe

- **„Ich will einfach eine gute Antwort“** → gpt-5 mini / Claude 4.6 Sonnet
- **„Es soll schnell gehen“** → gpt-5 nano, gpt-5.4 mini oder Gemini 3.1 Flash
- **„Ich will programmieren / Code schreiben“** → Claude 4.6 Sonnet / GPT-5.3 Codex
- **„Es ist kompliziert oder extrem wichtig“** → gpt-5.4, gpt-5.4 Pro oder Gemini 3.1 Pro
- **„Dokumente durchsuchen“** → Gemini 3.1 Flash / Claude 4.6 Sonnet
