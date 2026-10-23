---
title: Modellauswahl
description: Wann welches KI Modell nutzen? Diese Übersicht hilft Ihnen.
---

Welche Modelle Ihnen in der Modellauswahl angezeigt werden, legt Ihr Unternehmen fest – nicht jede Umgebung bietet alle hier beschriebenen Modelle an. In den meisten Umgebungen ist **gpt-6-luna** das voreingestellte Modell für neue Chats.

### Faustregel:

- **Schnell & günstig** → Luna / Mini / Nano / Flash / Haiku
- **Standard & zuverlässig** → große Allround-Modelle
- **Komplex & kritisch** → stärkste Modelle
- **Hosting in Deutschland / Open Source** → STACKIT-Modelle in [CompanyGPT Sovereign](/de/company-gpt/sovereign/) bzw. sofern in Ihrer Umgebung verfügbar

Modelle, die als veraltet gekennzeichnet sind, finden Sie unter [Legacy-Modelle](#legacy-modelle) – dort steht jeweils, auf welches Modell Sie wechseln sollten.

:::note[Wo laufen die Modelle?]
Die Modelle von OpenAI, Google und Anthropic werden in CompanyGPT standardmäßig in EU-Rechenzentren betrieben (Azure OpenAI in der EU-Datenzone, Google Vertex AI in EU-Regionen). Einzelne Umgebungen oder Modelle – insbesondere zur Bildgenerierung – können abweichen. Die STACKIT-Modelle laufen in Rechenzentren in Deutschland. Details zu Ihrer Umgebung erfahren Sie bei Ihrem Administrator.
:::

---

## OpenAI

### Die GPT-6-Familie

GPT-6 steht in CompanyGPT in zwei Stufen zur Verfügung. Sie gehören zur selben Generation und unterscheiden sich darin, wie viel Denktiefe, Geschwindigkeit und Kosten Sie erhalten: **Sol** (die leistungsstärkere Stufe) und **Luna** (am schnellsten und günstigsten). Von der Sol-Stufe gibt es mit **gpt-6.1-sol** zusätzlich eine neuere Version. Wählen Sie die Stufe nach der Komplexität der Aufgabe, nicht aus Gewohnheit.

### gpt-6.1-sol

- **Für:** anspruchsvolle Aufgaben, bei denen Sie die neueste Version der Sol-Stufe nutzen möchten
- **Wann:** agentisches Coding, mehrstufige Entwicklungsaufgaben, komplexe Analysen und Workflows
- **Warum:** die aktualisierte Version von gpt-6-sol – gleiche Stufe, neuerer Stand

### gpt-6-sol

- **Für:** anspruchsvolle Aufgaben mit starker Intelligenz zu fairen Kosten
- **Wann:** agentisches Coding, mehrstufige Entwicklungsaufgaben, komplexe Workflows
- **Warum:** die leistungsstärkere Stufe der GPT-6-Generation mit sorgfältiger Validierung

### gpt-6-luna (Standardmodell)

- **Für:** schnelle Antworten bei minimalen Kosten
- **Wann:** alltägliche Aufgaben, Hochvolumen-Anwendungen, automatisierte Pipelines
- **Warum:** das günstigste und schlankste Modell der GPT-6-Familie – in den meisten Umgebungen für neue Chats voreingestellt

### Die GPT-5.6-Familie

GPT-5.6 steht in drei Stufen zur Verfügung. Sie gehören zur selben Generation und unterscheiden sich darin, wie viel Denktiefe, Geschwindigkeit und Kosten Sie erhalten: **Sol** (maximale Leistungsfähigkeit), **Terra** (ausgewogen) und **Luna** (am schnellsten und günstigsten). Wählen Sie die Stufe nach der Komplexität der Aufgabe, nicht aus Gewohnheit.

### GPT-5.6 Sol

- **Für:** die Flaggschiff-Stufe mit der höchsten Leistungsfähigkeit
- **Wann:** komplexe Softwarearchitektur, anspruchsvolles Programmieren, Cybersecurity, tiefe mehrstufige wissenschaftliche Analysen, aufwendige kreative Strategie, Kontrolle anderer Modelle — immer dann, wenn Präzision wichtiger ist als Kosten
- **Warum:** das stärkste Reasoning der 5.6-Generation

### GPT-5.6 Terra

- **Für:** die ausgewogene Mittelklasse für den professionellen Arbeitsalltag
- **Wann:** Standard-Businessanwendungen, Erstellung von Dokumenten, allgemeine Assistenz-Workflows
- **Warum:** der Mittelweg zwischen Geschwindigkeit und Intelligenz

### GPT-5.6 Luna

- **Für:** die schnellste und kosteneffizienteste Stufe
- **Wann:** routinemäßige Automatisierung mit hoher Frequenz, schnelles Parsen, stark parallelisierte Agenten-Tasks und andere Aufgaben mit hohem Volumen oder Zeitdruck bei geringerer Komplexität
- **Warum:** niedrigste Latenz und geringste Kosten der 5.6-Generation

### gpt-5.4

- **Für:** anspruchsvolle Aufgaben über viele Themen hinweg
- **Wann:** Coding, Analysen, Textarbeit und Planung im Arbeitsalltag
- **Warum:** starkes Allround-Modell der GPT-5-Generation; für die höchste Leistungsfähigkeit wählen Sie GPT-5.6 Sol, gpt-6-sol oder gpt-6.1-sol

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

:::note[Weitere GPT-Modelle in einzelnen Umgebungen]
In einzelnen Umgebungen gibt es zusätzlich weitere Varianten der GPT-5-Generation, etwa **gpt-5.4-mini**, **gpt-5**, **gpt-5.2** oder **gpt-5.2-codex** (auf Programmieraufgaben spezialisiert), sowie das ältere Reasoning-Modell **o3-mini**. Für neue Aufgaben empfehlen wir die oben beschriebenen Modelle; statt o3-mini zum Beispiel gpt-5-mini.
:::

### GPT Image 1.5

- **Für:** Bildgenerierung und Bildbearbeitung
- **Wann:** wenn Bilder erzeugt oder bearbeitet werden sollen
- **Warum:** OpenAIs Bildmodell, das in der EU-Datenzone verarbeitet wird

### GPT Image 2.5

- **Für:** Bildgenerierung und Bildbearbeitung mit der neueren Generation der OpenAI-Bildmodelle
- **Wann:** wenn Bilder erzeugt oder bearbeitet werden sollen und Ihre Umgebung GPT Image 2.5 nutzt
- **Warum:** neuere Generation der OpenAI-Bildmodelle; die Verarbeitung erfolgt global und nicht in der EU-Datenzone

Die Bilder erzeugen Sie über das Werkzeug **OpenAI Image Tools**. Welches Bildmodell dahinter steht, legt Ihre Umgebung fest – in den meisten Umgebungen ist es GPT Image 1.5, in einzelnen GPT Image 2.5 oder GPT Image 2. GPT Image 2 und GPT Image 2.5 laufen außerhalb der EU-Datenzone.

:::caution
Microsoft stellt GPT Image 1.5 in Azure zum 16.12.2026 ein. Für die Bildgenerierung können Sie alternativ [Nano Banana](#gemini-image-tools--nano-banana) nutzen oder – sofern Ihre Umgebung es anbietet – GPT Image 2.5.
:::

---

## Google

Die Gemini-Modelle stehen zur Verfügung, wenn Google in Ihrer Umgebung freigeschaltet ist. Die Modelle der Gemini-2.5-Generation sind abgelöst, siehe [Legacy-Modelle](#legacy-modelle).

### Gemini 4 Argon

- **Für:** anspruchsvolle Aufgaben mit sehr viel Kontext
- **Wann:** umfangreiche Dokumente und Codebasen (bis zu 1 Mio. Token Kontext), komplexe Analysen und mehrstufiges Reasoning
- **Warum:** das erste Modell der Gemini-4-Generation, in einer EU-Region verarbeitet; bisher erst in einzelnen Umgebungen verfügbar

### Gemini 3.8 Flash / Gemini 3.7 Flash / Gemini 3.5 Flash

- **Für:** autonomes Denken bei hoher Geschwindigkeit
- **Wann:** komplexe Workflows, tiefe Analysen, anspruchsvolles Coding
- **Warum:** Googles schnelle Modelle mit flexiblen Denkstufen; 3.8 Flash ist die neueste Flash-Stufe

### Gemini 3.5 Flash-Lite / Gemini 3.1 Flash-Lite

- **Für:** maximale Geschwindigkeit und Kosteneffizienz
- **Wann:** schnelles Nachfragen, einfache Massenaufgaben, Echtzeit-Übersetzungen
- **Warum:** extrem kurze Antwortzeit bei sehr geringen Kosten; 3.5 Flash-Lite ist die neuere Stufe

### Gemini 3.1 Pro (Vorschau)

- **Für:** besonders anspruchsvolle Analysen und komplexes Reasoning
- **Wann:** wenn die Flash-Modelle an ihre Grenzen kommen, etwa bei sehr umfangreichen oder verschachtelten Aufgaben
- **Warum:** Googles leistungsstärkere Pro-Stufe; bisher nur in einzelnen Umgebungen und als Vorschau verfügbar, Verhalten und Verfügbarkeit können sich noch ändern

### Gemini Image Tools / Nano Banana

- **Für:** Bildanalyse, Bildgenerierung, Bildbearbeitung
- **Wann:** Text-zu-Bild-Generierung, Bildbearbeitung mit Prompts (Bild+Text) und Komposition mehrerer Bilder
- **Warum:** Googles Bildmodelle, die in CompanyGPT integriert sind; Nano Banana wird in einer EU-Region verarbeitet

In einzelnen Umgebungen steht hinter den Gemini Image Tools das leistungsstärkere **Nano Banana Pro**. Es wird global verarbeitet und nicht in einer EU-Region.

---

## Anthropic

Die Claude-Modelle stehen zur Verfügung, wenn Anthropic in Ihrer Umgebung freigeschaltet ist. Die aktuelle Generation ist **Claude 5.5** mit den Stufen Opus, Sonnet und Haiku; sie läuft über die EU-Region von Google Vertex AI. Die Claude-4.x-Modelle sind veraltet, siehe [Legacy-Modelle](#legacy-modelle).

### Claude Opus 5.5

- **Für:** die anspruchsvollsten Aufgaben, bei denen Qualität vor Kosten geht
- **Wann:** komplexe Analysen, umfangreiche Code-Änderungen, lange mehrstufige agentische Aufgaben
- **Warum:** das leistungsstärkste Claude-Modell der aktuellen 5.5-Generation; Nachfolger von Claude Opus 5 und der Opus-4.x-Modelle

### Claude Sonnet 5.5

- **Für:** Programmieren, komplexe Textverarbeitung und anspruchsvolle Allround-Aufgaben (Empfohlen)
- **Wann:** Softwareentwicklung, Code-Refactoring, Agenten, tiefes Textverständnis
- **Warum:** der Sweetspot der Reihe – hohe Leistungsfähigkeit für den Arbeitsalltag zu deutlich geringeren Kosten als Opus; Nachfolger von Claude Sonnet 5 und Sonnet 4.6

### Claude Haiku 5.5

- **Für:** sehr schnelle Verarbeitung zu sehr geringen Kosten
- **Wann:** große Datenmengen filtern, UI-basierte Chatbots, einfache bis mittlere Tasks in Masse, Teilaufgaben von Agenten
- **Warum:** das schnellste und günstigste Modell der 5.5-Generation; Nachfolger von Claude Haiku 4.5

### Claude Opus 5 / Claude Sonnet 5 (Vorgängergeneration)

- **Für:** anspruchsvollste Aufgaben (Opus 5) bzw. Programmieren und Allround-Aufgaben (Sonnet 5)
- **Wann:** wenn Ihre Umgebung die 5.5-Generation noch nicht anbietet
- **Warum:** die Vorgängergeneration von Claude 5.5; sobald verfügbar, wechseln Sie auf Claude Opus 5.5 bzw. Claude Sonnet 5.5

:::note
Welche Claude-Generation Ihnen angezeigt wird, unterscheidet sich je nach Umgebung: Manche Umgebungen bieten bereits Claude 5.5, andere noch Claude 5 oder die veralteten 4.x-Modelle. In einzelnen Umgebungen gibt es zusätzlich weitere Anbieter wie Mistral oder Perplexity.
:::

---

## STACKIT

Diese Open-Source-Modelle laufen in der STACKIT Cloud in Rechenzentren in Deutschland und eignen sich besonders für Workloads mit hohen Anforderungen an Datenhoheit und interne Compliance. Sie stehen in [CompanyGPT Sovereign](/de/company-gpt/sovereign/) zur Verfügung, sonst nur in Umgebungen, in denen STACKIT freigeschaltet ist; welche Modelle genau angeboten werden, unterscheidet sich je nach Umgebung. Daneben nutzt die Suche in [companyRAG](/de/company-gpt/addons/companyrag/) je nach Umgebung eigene Embedding-Modelle; sie sind im Chat nicht auswählbar.

### google/gemma-4-31B-it

- **Für:** vielseitige Instruct-Aufgaben mit guter Effizienz
- **Wann:** interne Assistenten, Wissensarbeit, strukturierte Textproduktion
- **Warum:** neuere Gemma-Generation als Mittelbau zwischen kleinen schnellen und großen OSS-Modellen

### Qwen/Qwen3.8-27B

- **Für:** vielseitige Textaufgaben und starkes multilinguales Verständnis
- **Wann:** kreatives Schreiben, logische Problemlösung, präzise Übersetzungen
- **Warum:** neuere Qwen-Generation mit gutem Verhältnis aus kompakter Größe und Leistungsfähigkeit

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

### openai/gpt-oss-20b

- **Für:** leichtgewichtige Open-Source-Textaufgaben
- **Wann:** kostensensitive interne Workflows mit kontrollierbarer Infrastruktur
- **Warum:** kompakter OSS-Ansatz für solide Qualität bei geringeren Ressourcenanforderungen

---

## Legacy-Modelle

Die folgenden Modelle sind veraltet und werden durch neuere Generationen abgelöst. Solange Ihre Umgebung sie noch anbietet, können Sie sie weiter nutzen; für neue Chats und Agenten wählen Sie bitte das jeweils genannte Nachfolgemodell.

:::caution[Wird eingestellt]
Die komplette GPT-4-Familie (gpt-4.1, gpt-4.1-mini, gpt-4o, gpt-4o-mini) wird in absehbarer Zeit nicht mehr unterstützt und aus CompanyGPT entfernt; in einigen Umgebungen ist sie bereits nicht mehr verfügbar. Bitte wechseln Sie auf ein aktuelles Modell: **gpt-6-luna**, **GPT-5.6 Terra** oder **gpt-5-mini** als Ersatz für gpt-4.1 und gpt-4o, **GPT-5.6 Luna** oder **gpt-5-nano** als Ersatz für gpt-4.1-mini und gpt-4o-mini.

Die Claude-4.x-Modelle (Claude Opus 4.5, 4.6, 4.7 und 4.8, Claude Sonnet 4.5 und 4.6, Claude Haiku 4.5) werden durch die Generation Claude 5.5 abgelöst: **Claude Opus 5.5** ersetzt Opus 4.x, **Claude Sonnet 5.5** ersetzt Sonnet 4.x, **Claude Haiku 5.5** ersetzt Haiku 4.5.

Die Modelle der Gemini-2.5-Generation (Gemini 2.5 Pro, 2.5 Flash und 2.5 Flash-Lite) und älter stehen im Chat nicht mehr zur Verfügung. Nachfolger sind **Gemini 3.8 Flash** für 2.5 Pro und 2.5 Flash sowie **Gemini 3.5 Flash-Lite** für 2.5 Flash-Lite; wo verfügbar, ersetzt **Gemini 3.1 Pro** das Modell 2.5 Pro. Das Bildwerkzeug Nano Banana ist davon nicht betroffen.
:::

### gpt-4.1

- **Für:** verlässliche Problemlösungen und Standard-Kontexte
- **Wann:** Textoptimierung, Recherchen, logische Vergleiche
- **Warum:** das bewährte, weiterentwickelte Arbeitstier für anspruchsvolle Alltagsaufgaben
- **Wechseln auf:** gpt-6-luna / GPT-5.6 Terra / gpt-5-mini

### gpt-4.1-mini

- **Für:** schnelle Verarbeitung bei geringen Kosten
- **Wann:** strukturierte Texterstellung, Daten-Vorsortierung, einfache Konversationen
- **Warum:** kompakte Version von GPT-4.1, optimiert auf Effizienz und Tempo
- **Wechseln auf:** GPT-5.6 Luna / gpt-5-nano

### gpt-4o

- **Für:** vielseitige Multimodalität und flüssige Interaktion
- **Wann:** Bild- und Sprachverarbeitung, kreative Entwürfe, Brainstorming
- **Warum:** das etablierte Flaggschiff-Modell für schnelle, multimediale Aufgaben
- **Wechseln auf:** gpt-6-luna / GPT-5.6 Terra / gpt-5-mini

### gpt-4o-mini

- **Für:** hohe Geschwindigkeit bei minimalen Kosten
- **Wann:** einfache Chat-Assistenten, schnelle Filterung großer Datenmengen
- **Warum:** extrem günstiges Leichtgewicht-Modell mit solider Grundintelligenz
- **Wechseln auf:** GPT-5.6 Luna / gpt-5-nano

### Claude Opus 4.x (4.5, 4.6, 4.7, 4.8)

- **Für:** die anspruchsvollsten Aufgaben, bei denen Qualität vor Kosten geht
- **Wann:** komplexe Analysen, umfangreiche Code-Änderungen, mehrstufige agentische Aufgaben
- **Warum:** die leistungsstärksten Claude-Modelle der 4.x-Generation
- **Wechseln auf:** Claude Opus 5.5

### Claude Sonnet 4.x (4.5, 4.6)

- **Für:** Programmieren, komplexe Textverarbeitung und anspruchsvolle Allround-Aufgaben
- **Wann:** Softwareentwicklung, Code-Refactoring, tiefes Textverständnis
- **Warum:** der bisherige Sweetspot der Claude-Reihe zwischen Leistung und Kosten
- **Wechseln auf:** Claude Sonnet 5.5

### Claude Haiku 4.5

- **Für:** sehr schnelle Verarbeitung bei hoher logischer Präzision
- **Wann:** große Datenmengen filtern, UI-basierte Chatbots, einfache bis mittlere Tasks in Masse
- **Warum:** schnell und kosteneffizient (weniger Reasoning als Sonnet/Opus)
- **Wechseln auf:** Claude Haiku 5.5

---

## Schnelle Entscheidungshilfe

- **„Ich weiß nicht, welches Modell passt“** → gpt-6-luna (Standardmodell)
- **„Ich will einfach eine sehr gute Antwort“** → gpt-6-sol / gpt-6.1-sol / GPT-5.6 Terra / Claude Sonnet 5.5
- **„Es soll maximal schnell und günstig sein“** → gpt-6-luna / GPT-5.6 Luna / gpt-5-nano / Gemini 3.5 Flash-Lite / Claude Haiku 5.5
- **„Ich will programmieren / Code schreiben“** → gpt-6.1-sol / gpt-6-sol / GPT-5.6 Sol / Claude Sonnet 5.5
- **„Es ist kompliziert oder extrem wichtig“** → GPT-5.6 Sol / gpt-6.1-sol / Claude Opus 5.5
- **„Ich führe viele Aufgaben parallel aus“** → gpt-6-luna / GPT-5.6 Luna / Claude Haiku 5.5
- **„Hosting in Deutschland ist Pflicht“** → STACKIT-Modelle in [CompanyGPT Sovereign](/de/company-gpt/sovereign/) bzw. sofern verfügbar (z. B. Llama 3.3 70B Instruct)
- **„Ich brauche Bilder“** → OpenAI Image Tools (GPT Image 1.5 bzw. GPT Image 2.5) / Gemini Image Tools (Nano Banana)
- **„Ich nutze noch ein GPT-4- oder Claude-4.x-Modell“** → siehe [Legacy-Modelle](#legacy-modelle) für das passende Nachfolgemodell
