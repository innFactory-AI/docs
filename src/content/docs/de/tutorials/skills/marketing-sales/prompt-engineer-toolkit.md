---
title: Prompt-Engineer-Toolkit
description: Analysiere und verbessere KI-Prompts, erstelle wiederverwendbare Prompt-Vorlagen für Marketing und führe A/B-Tests für konsistente, reproduzierbare KI-Outputs durch. Stelle den oder die aktuellen Prompts als Text bereit, ergänzt um Beispiele für erwünschte und unerwünschte Ausgaben sowie optionale Testfälle.
---

Verwende diesen Skill, wenn du Prompts für KI-gestütztes Marketing verbessern, Prompt-Vorlagen erstellen oder KI-Content-Workflows optimieren möchtest. Auch geeignet für Prompt-Engineering, Versionierung und Regressionssicherung. Stelle dazu den aktuellen Prompt(s) als Text bereit, ergänzt um Beispiele für erwünschte und unerwünschte Ausgaben – Testfälle mit Input-Output-Paaren sind optional, aber empfohlen.

## Skill

````markdown
---
name: "prompt-engineer-toolkit"
description: "Analyzes and rewrites prompts for better AI output, creates reusable prompt templates for marketing use cases (ad copy, email campaigns, social media), and structures end-to-end AI content workflows. Use when the user wants to improve prompts for AI-assisted marketing, build prompt templates, or optimize AI content workflows. Also use when the user mentions 'prompt engineering,' 'improve my prompts,' 'AI writing quality,' 'prompt templates,' or 'AI content workflow.' Requires: the current prompt(s) as text, examples of desired and undesired outputs, and optionally test cases with input-output pairs."
---

# Prompt Engineer Toolkit

## Overview

Verwende diesen Skill, um Prompts von Ad-hoc-Entwürfen zu produktionsfähigen Assets mit reproduzierbarer Bewertung, Versionierung und Regressionssicherung weiterzuentwickeln. Einsetzen wenn:

- Ein neues LLM-Feature zuverlässige Outputs benötigt
- Prompt-Qualität nach Modell- oder Anweisungsänderungen nachlässt
- Mehrere Teammitglieder Prompts bearbeiten und Versionsverlauf benötigen
- Evidenzbasierte Prompt-Auswahl für den Produktiv-Rollout erforderlich ist
- Konsistente Prompt-Governance über Umgebungen hinweg gewünscht ist

## Core Capabilities

- A/B-Prompt-Evaluation anhand strukturierter Testfälle
- Quantitatives Scoring für Adherence, Relevanz und Safety-Checks
- Prompt-Versionsverfolgung mit unveränderlichem Verlauf und Changelog
- Prompt-Diffs zur Überprüfung verhaltensrelevanter Änderungen
- Wiederverwendbare Prompt-Vorlagen und Auswahlhilfe
- Regressionssichere Workflows für Modell- und Prompt-Updates

## Key Workflows

### 1. Prompt-A/B-Test durchführen

Stelle zwei Prompt-Varianten und deine Testfälle im folgenden Format bereit:

```
=== Prompt A ===
[Vollständiger Prompt-Text]

=== Prompt B ===
[Vollständiger Prompt-Text]

=== Testfälle ===
Testfall 1:
  Input: [realistischer Produktions-Input]
  Muss enthalten: [erforderliche Inhalte/Marker]
  Darf nicht enthalten: [verbotene Phrasen oder unsichere Inhalte]
  Erwartetes Format/Regex: [strukturelle Anforderungen]

Testfall 2:
  ...
```

Die Analyse bewertet beide Prompts pro Testfall nach:
- Abdeckung erwarteter Inhalte
- Verstöße gegen verbotene Inhalte
- Format-Compliance (Struktur, Länge)
- Output-Konsistenz

Ergebnis: aggregierter Score pro Prompt + Empfehlung des Gewinners mit Begründung.

### 2. Gewinner mit Evidenz auswählen

Das Scoring aggregiert über alle Testfälle:

- Abdeckung erwarteter Inhalte (expected content coverage)
- Verletzungen verbotener Inhalte (forbidden content violations)
- Regex-/Format-Compliance
- Output-Längen-Plausibilität

Der Gewinner wird nur promoviert, wenn Score und Safety-Constraints sich verbessern.

### 3. Prompts versionieren

Stelle den Prompt-Text und die Metadaten bereit, um eine neue Version zu erfassen:

```
Prompt-Name: support_classifier
Version: 3
Autor: alice
Änderungsnotiz: Tone angepasst, Ausgabeformat explizit gemacht
Prompt-Text:
[vollständiger Prompt]
```

Für einen Versions-Diff: beide Versionen mit Namen und Versionsnummern angeben. Die Analyse zeigt verhaltensrelevante Unterschiede zwischen den Versionen.

Für ein Changelog: Prompt-Namen angeben – alle Versionen mit Autor, Datum und Änderungsnotiz werden aufgelistet.

### 4. Regression-Loop

1. Baseline-Version festhalten (Format s. oben).
2. Kandidaten-Prompt vorschlagen.
3. A/B-Test gegen dieselben Testfälle durchführen (Format s. Schritt 1).
4. Nur promovieren, wenn Score und Safety-Constraints sich verbessern.

## Pitfalls & Best Practices

**Diese Fehler vermeiden:**
1. Prompts anhand von Einzelfall-Outputs auswählen — immer einen realistischen, edge-case-reichen Test-Suite verwenden.
2. Prompt und Modell gleichzeitig ändern — Variablen immer isolieren.
3. `must_not_contain`-Checks (verbotene Inhalte) in den Evaluierungskriterien vergessen.
4. Prompts ohne Versions-Metadaten, Autor oder Änderungsbegründung bearbeiten.
5. Semantische Diffs vor dem Deployment einer neuen Prompt-Version überspringen.
6. Eine Benchmark-Metrik optimieren und dabei Edge Cases verschlechtern — immer die vollständige Suite tracken.
7. Modell-Swap ohne erneutes Ausführen der Baseline-A/B-Suite.

**Vor dem Promovieren eines Prompts sicherstellen:**
- [ ] Task-Intent ist explizit und eindeutig.
- [ ] Ausgabe-Schema/Format ist explizit.
- [ ] Safety- und Ausschluss-Constraints sind explizit.
- [ ] Keine widersprüchlichen Anweisungen.
- [ ] Keine unnötigen Verbosity-Token.
- [ ] A/B-Score verbessert sich und Violation-Count bleibt bei null.

## Evaluation Design

Jeder Testfall sollte folgendes definieren:

- `input`: realistischer, produktionsähnlicher Input
- `expected_contains`: erforderliche Marker/Inhalte
- `forbidden_contains`: verbotene Phrasen oder unsichere Inhalte
- `expected_regex`: erforderliche strukturelle Muster

## Versioning Policy

- Semantische Prompt-Identifier pro Feature verwenden (`support_classifier`, `ad_copy_shortform`).
- Autor + Änderungsnotiz für jede Revision erfassen.
- Historische Versionen niemals überschreiben.
- Diff durchführen, bevor ein neuer Prompt in die Produktion promoviert wird.

## Rollout Strategy

1. Baseline-Prompt-Version erstellen.
2. Kandidaten-Prompt vorschlagen.
3. A/B-Suite gegen dieselben Testfälle ausführen.
4. Nur promovieren, wenn der Gewinner den Durchschnitt verbessert und Violation-Count bei null bleibt.
5. Post-Release-Feedback tracken und neue Failure-Cases in die Test-Suite einspeisen.
````

Quelle: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
