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

### o3

- **Für:** pures Reasoning
- **Wann:** wenn tiefes Nachdenken über reiner Geschwindigkeit steht
- **Warum:** spezialisierter Reasoning-Fokus für komplexe Logik (etwas langsamer)

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
- **Warum:** das Flaggschiff der 5.2-Generation, pure Qualität steht vor Geschwindigkeit (wird durch GPT-5.4 abgelöst)

### gpt-5.2 pro

- **Für:** Aufgaben mit Bedarf an höherer Präzision
- **Wann:** wenn die Basisversion von 5.2 nicht genau genug war
- **Warum:** Veraltet, mittlerweile durch GPT-5.4 Pro ersetzt

### gpt-5.2-codex

- **Für:** reine Softwareentwicklung und Systemarchitektur
- **Wann:** Code schreiben, refactoren, debuggen, Architektur planen
- **Warum:** isolierter Spezialist, der Allround-Modelle bei Programmieraufgaben schlägt

### gpt-5.3-chat

- **Für:** hochdynamische Echtzeit-Interaktionen
- **Wann:** komplexe Multi-Turn-Dialoge, feine Nuancen in der Sprache
- **Warum:** extrem geringe Latenz und perfektes Verständnis für den Gesprächsverlauf

### gpt-5.3 Codex

- **Für:** autonome Softwareentwicklung
- **Wann:** Agentic Coding und Code-Optimierung
- **Warum:** selbstoptimierendes Spezialmodell, 25% schneller als gpt-5.2

### gpt-5.4

- **Für:** das absolute Maximum an Leistungsfähigkeit (Empfohlen)
- **Wann:** wenn Kosten nachrangig sind und das beste Ergebnis für extrem komplexe Probleme gebraucht wird
- **Warum:** Neues Flaggschiff (1M Kontext), 33% weniger Halluzinationen, Native Computer Use

### gpt-5.4 Pro

- **Für:** maximale Präzision bei komplexesten Aufgaben
- **Wann:** wenn tiefstes Reasoning gefordert ist und höhere Kosten/Latenz in Kauf genommen werden
- **Warum:** bietet das tiefste Reasoning aller OpenAI-Modelle

### gpt-5.4-mini

- **Für:** State-of-the-Art Qualität bei Massentasks
- **Wann:** Verarbeitung großer Datensätze, Routineaufgaben auf sehr hohem Niveau
- **Warum:** 2x schneller als der Vorgänger, ideal für schnelle Code-Edits und Klassifikation

### gpt-5.4 nano

- **Für:** repetitive Tasks und Sub-Agenten
- **Wann:** wenn die niedrigste Latenz zwingend erforderlich ist
- **Warum:** rasend schnell, aber mit eingeschränktem Funktionsumfang

---

## Google

### Gemini 3.1 Pro (GA)

- **Für:** Komplexes Reasoning und gigantische Kontexte (Empfohlen)
- **Wann:** Verarbeitung riesiger Dokumente (2M Token) und multimodale Aufgaben
- **Warum:** Das aktuelle, stärkste Allround-Flaggschiff von Google

### Gemini 3.1 Flash (GA)

- **Für:** Höchste Geschwindigkeit bei großen Kontexten
- **Wann:** schnelle Verarbeitung von bis zu 1M Token
- **Warum:** Schnellstes Modell der 3.x-Reihe, extrem starkes Preis-Leistungs-Verhältnis

### Gemini 3.1 Flash Thinking

- **Für:** Komplexe MINT-Aufgaben (STEM)
- **Wann:** mathematische oder logische Probleme, die einen internen Denkprozess erfordern
- **Warum:** Erweitertes Reasoning (nimmt sich Zeit zum Denken, daher höhere Latenz)

### Gemini 3.1 Pro Deep Research

- **Für:** Lange Analyseaufgaben und Multi-Hop-Recherche
- **Wann:** tiefgehende Internet-Recherche über mehrere Quellen hinweg
- **Warum:** Spezialisiertes Modell für komplexe Informationsbeschaffung (nicht universell einsetzbar)

### Gemini 3 Pro (Preview)

- **Für:** Reasoning-first Ansätze und multimodale Tasks
- **Wann:** Tests von Reasoning-Fähigkeiten
- **Warum:** Veralteter Preview-Vorgänger (abgelöst durch 3.1 Pro GA)

### Gemini 3 Flash (Preview)

- **Für:** Schnelle multimodale Aufgaben
- **Wann:** frühe Tests der Flash-Geschwindigkeit
- **Warum:** Veralteter Preview-Vorgänger (abgelöst durch 3.1 Flash GA)

### Gemini 2.5 Flash

- **Für:** maximale Geschwindigkeit
- **Wann:** schnelles Nachfragen, Ideensammlung, Iterationen
- **Warum:** sehr schnell, gut bei Überblick und Kontext

### Gemini 2.5 Pro

- **Für:** tiefes Denken und große Kontexte
- **Wann:** komplexe Dokumente, Vergleiche, Analysen
- **Warum:** Googles ehemals stärkstes Modell mit hoher Strukturqualität (Abgekündigt)

### Gemini 2.0 Flash

- **Für:** Einfache, extrem günstige Aufgaben
- **Wann:** wenn absolute Kosteneffizienz zählt
- **Warum:** Veraltetes, aber bewährtes Einstiegsmodell (Abgekündigt)

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

### Claude 4.5 Sonnet

- **Für:** Gute Balance aus Leistung und Latenz
- **Wann:** Aufgaben, die bis zu 200k Token Kontext benötigen
- **Warum:** Veraltetes Modell, wurde durch 4.6 übertroffen

### Claude 4.5 Opus

- **Für:** Premium-Qualität und hohe Reasoning-Leistung der Vorgänger-Generation
- **Wann:** komplexe Aufgaben mit älterem Modell-Stack
- **Warum:** Veraltetes Flaggschiff, abgelöst durch Opus 4.6

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
