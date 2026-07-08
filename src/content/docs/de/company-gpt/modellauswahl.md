---
title: Modellauswahl
description: Wann welches KI Modell nutzen? Diese Übersicht hilft Ihnen.
---

### Dynamisches Model Routing

Wählen Sie unter der OpenAI-Modellauswahl einfach "auto", um das dynamische Routing von CompanyGPT zu aktivieren. Das System analysiert Ihren Prompt und wählt automatisch das effizienteste OpenAI-Modell: Schnelle, kleinere Modelle für Standardfragen und High-End-Modelle für komplexe Analysen. So sparen Sie ohne manuellen Aufwand Zeit und Token-Kosten.

### Faustregel:

- **Schnell & günstig** → Mini / Flash / Nano / Haiku
- **Standard & zuverlässig** → große Allround-Modelle
- **Komplex & kritisch** → stärkste Modelle
- **EU / intern / Datenschutz** → STACKIT-Modelle

---

## OpenAI

### gpt-5.4

- **Für:** komplexe Problemstellungen und maximale Intelligenz
- **Wann:** anspruchsvolles Coding, wissenschaftliche Analysen, strategische Planung
- **Warum:** OpenAIs fortschrittlichstes Modell mit unübertroffenem logischen Denkvermögen

### gpt-5.1

- **Für:** tiefgehendes Denken bei hoher Zuverlässigkeit
- **Wann:** komplexe Dokumente, Datenanalysen, fortgeschrittene Textarbeiten
- **Warum:** starke Leistung der GPT-5-Generation optimiert für den praktischen Einsatz

### gpt-5-mini

- **Für:** gehobenes Niveau bei hoher Geschwindigkeit
- **Wann:** alltägliche Programmieraufgaben, strukturierte Recherchen, logische Iterationen
- **Warum:** exzellente Balance aus GPT-5-Intelligenz und flinker Verarbeitungszeit

### gpt-5-nano

- **Für:** ultraschnelle Antworten und einfache Hilfestellungen
- **Wann:** schnelle Fragen, einfache Formatierungen, Textkorrekturen
- **Warum:** extrem ressourcensparendes Modell der GPT-5-Familie mit minimaler Latenz

### gpt-4.1

- **Für:** verlässliche Problemlösungen und Standard-Kontexte
- **Wann:** Textoptimierung, Recherchen, logische Vergleiche
- **Warum:** das bewährte, weiterentwickelte Arbeitstier für anspruchsvolle Alltagsaufgaben

### gpt-4.1-mini

- **Für:** schnelle Verarbeitung bei geringen Kosten
- **Wann:** strukturierte Texterstellung, Daten-Vorsortierung, einfache Konversationen
- **Warum:** kompakte Version von GPT-4.1, optimiert auf Effizienz und Tempo

### gpt-4o

- **Für:** vielseitige Multimodalität und flüssige Interaktion
- **Wann:** Bild- und Sprachverarbeitung, kreative Entwürfe, Brainstorming
- **Warum:** das etablierte Flaggschiff-Modell für schnelle, multimediale Aufgaben

### gpt-4o-mini

- **Für:** hohe Geschwindigkeit bei minimalen Kosten
- **Wann:** einfache Chat-Assistenten, schnelle Filterung großer Datenmengen
- **Warum:** extrem günstiges Leichtgewicht-Modell mit solider Grundintelligenz

### auto

- **Für:** automatisierte Effizienz ohne manuelles Auswählen
- **Wann:** wechselnde Aufgaben, unkomplizierte Workflows
- **Warum:** wählt je nach Komplexität deiner Anfrage automatisch das am besten geeignete Modell

### GPT Image 1.5

- **Für:** Bildgenerierung
- **Wann:** wenn Bilder generiert werden sollen
- **Warum:** OpenAI's Bildgenerierungsmodell

---

## Google

### Gemini 3.5 Flash-Lite

- **Für:** maximale Geschwindigkeit und Kosteneffizienz
- **Wann:** schnelles Nachfragen, einfache Massenaufgaben, Echtzeit-Übersetzungen
- **Warum:** extrem kurze Antwortzeit bei unschlagbar geringen Kosten

### Gemini 3.5 Flash

- **Für:** autonomes Denken bei hoher Geschwindigkeit
- **Wann:** komplexe Workflows, tiefe Analysen, anspruchsvolles Coding
- **Warum:** Googles schnelles Modell mit flexiblen Denkstufen für intelligentere Aufgaben

### Gemini Image Tools / Nano Banana

- **Für:** Bildanalyse, Bildgenerierung, Bildbearbeitung
- **Wann:** Text-zu-Bild-Generierung, Bildbearbeitung mit Prompts (Bild+Text) und Komposition mehrerer Bilder
- **Warum:** Googles Bildmodelle, die in CompanyGPT integriert sind

---

## Anthropic

### Claude Sonnet 4.6

- **Für:** Programmieren, komplexe Textverarbeitung und anspruchsvolle Allround-Aufgaben (Empfohlen)
- **Wann:** Softwareentwicklung, Code-Refactoring, tiefes Textverständnis
- **Warum:** Der Sweetspot der Reihe. Opus-Klasse Performance zum Sonnet-Preis (1M Kontext)

### Claude Haiku 4.5

- **Für:** sehr schnelle Verarbeitung bei hoher logischer Präzision
- **Wann:** große Datenmengen filtern, UI-basierte Chatbots, einfache bis mittlere Tasks in Masse
- **Warum:** sehr schnell und kosteneffizient (weniger Reasoning als Sonnet/Opus)

---

## STACKIT

Diese Open-Source-Modelle laufen in der STACKIT Cloud (EU/Deutschland) und eignen sich besonders für Workloads mit hohen Anforderungen an Datenschutz, Datenhoheit und interne Compliance.

### openai/gpt-oss-120b

- **Für:** höchste OSS-Qualität für komplexe Textaufgaben
- **Wann:** wenn intern gehostete Top-Performance statt maximaler Geschwindigkeit gefragt ist
- **Warum:** großes Open-Source-Modell für starke analytische und sprachliche Ergebnisse

### Qwen/Qwen3-VL-235B-A22B-Instruct-FP8

- **Für:** multimodale High-End-Analyse mit Bild- und Textverständnis
- **Wann:** visuelle Dokumentanalyse, komplexe Bild-Text-Aufgaben, anspruchsvolle Inference
- **Warum:** sehr leistungsstarkes VL-Modell für tieferes Verständnis multimodaler Inhalte

### cortecs/Llama-3.3-70B-Instruct-FP8-Dynamic

- **Für:** anspruchsvollere Generierung und Reasoning im EU-Stack
- **Wann:** komplexere Unternehmensfragen, längere Antworten, bessere Detailtiefe
- **Warum:** 70B-Klasse liefert deutlich mehr Qualität als kleine Modelle bei weiterhin OSS-Flexibilität

### google/gemma-3-27b-it

- **Für:** vielseitige Instruct-Aufgaben mit guter Effizienz
- **Wann:** interne Assistenten, Wissensarbeit, strukturierte Textproduktion
- **Warum:** starker Mittelbau zwischen kleinen schnellen und großen teuren OSS-Modellen

### Qwen/Qwen3.6-27B

- **Für:** vielseitige Textaufgaben und starkes multilinguales Verständnis
- **Wann:** kreatives Schreiben, logische Problemlösung, präzise Übersetzungen
- **Warum:** die neueste Qwen-Generation im optimalen Verhältnis aus kompakter Größe und hoher Intelligenz

### openai/gpt-oss-20b

- **Für:** leichtgewichtige Open-Source-Textaufgaben
- **Wann:** kostensensitive interne Workflows mit kontrollierbarer Infrastruktur
- **Warum:** kompakter OSS-Ansatz für solide Qualität bei geringeren Ressourcenanforderungen

### Qwen/Qwen3-VL-Embedding-8B

- **Für:** multimodale Embeddings (Text/Bild) für Suche und Retrieval
- **Wann:** semantische Suche, RAG-Indizierung, Ähnlichkeitssuche über gemischte Daten
- **Warum:** spezialisiert auf Vektor-Repräsentationen statt auf klassische Chat-Antworten

### intfloat/e5-mistral-7b-instruct

- **Für:** hochwertige Text-Embeddings für Retrieval und Ranking
- **Wann:** Vektorsuche, Dokument-Retrieval, Relevanzsortierung in RAG-Pipelines
- **Warum:** bewährtes Embedding-Modell für präzise semantische Suchanwendungen

---

## Schnelle Entscheidungshilfe

- **„Ich will einfach eine sehr gute Antwort“** → GPT 5.1 / GPT 5 Mini / Claude Sonnet 4.6
- **„Es soll maximal schnell und günstig sein“** → GPT 5 Nano / GPT 5.4 Mini / Gemini 2.5 Flash / Claude Haiku 4.5
- **„Ich will programmieren / Code schreiben“** → GPT 5.2 Codex / Claude Sonnet 4.6
- **„Es ist kompliziert oder extrem wichtig“** → GPT 5.5 / GPT 5.4 / Claude Opus 4.6 / Gemini 2.5 Pro
- **„Datenschutz (EU/Deutschland) ist Pflicht“** → STACKIT-Modelle (z. B. Llama 3.3 70B Instruct)
- **„Ich arbeite im Chat (Dialog)“** → GPT 5.3 Chat / GPT 5.2 Chat / GPT 5.1 Chat
- **„Ich brauche Bilder“** → GPT Image 1.5 / Gemini Image Tools / Nano Banana
