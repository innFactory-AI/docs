---
title: Few-Shot Prompting
description: Zero Shot
---

## Beschreibung

Prompt Chaining bezeichnet die Technik, ein Sprachmodell (LLM) nicht mit einer einzigen, komplexen Anweisung zu konfrontieren, sondern den Arbeitsprozess in mehrere, aufeinanderfolgende Schritte zu unterteilen. Obwohl LLMs sehr gut einzelnen Anweisungen folgen können, nimmt die Genauigkeit häufig ab, wenn im Prompt zu viele Anweisungen oder komplexe Aufgabenstellungen kombiniert werden. Um dieses Problem zu vermeiden, werden Anweisungen in logische Teilaufgaben zerlegt und nacheinander bearbeitet. Jeder Schritt baut auf dem Ergebnis des vorherigen auf – so entsteht eine Kette (engl. chaining) von Prompts und Antworten.

Durch Prompt Chaining kann das Modell systematischer arbeiten, Fehlerquellen verringern und auch komplexe Aufgaben zuverlässig und nachvollziehbar lösen. Die Zwischenergebnisse jeder Teilaufgabe werden explizit festgehalten und gezielt im nächsten Schritt weiterverarbeitet.

## Vorteile

- Komplexe Aufgaben werden beherrschbar, indem sie in simple, sequenzielle Schritte zerlegt werden.
- Die Ergebnisse jedes Teilschritts können manuell überprüft oder angepasst werden wodurch die Kontrolle erhöht wird.
- Geringeres Risiko von Missverständnissen und Fehlern seitens des Modells, da die Aufgaben klar strukturiert und getrennt werden.

## Typische Beispiele

### Content Generieren (z.B. Blogartikel)

```
Prompt 1: „Brainstorme 5 Blog-Titel über KI im Gesundheitswesen.“
Prompt 2: (Benutzer wählt einen Titel aus) „Entwerfe eine Gliederung für einen Blog-Beitrag mit dem Titel ‚[ausgewählter Titel]‘ und gliedere ihn in 3 Hauptabschnitte.“
Prompt 3: „Schreibe die Einleitung für die bereitgestellte Gliederung.“
Prompt 4: „Erweitere Abschnitt 1 aus der Gliederung …“ usw.
```

### Datenanalyse/Auswertung

```
Prompt 1: „Extrahiere die wichtigsten Entitäten aus diesem Dokument.“
Prompt 2: „Fasse die Beziehung zwischen diesen Entitäten zusammen.“
Prompt 3: „Generiere einen Bericht basierend auf der Zusammenfassung.“
```

## Einsatzbereiche

Prompt Chaining eignet sich besonders, wenn Aufgaben zu umfangreich oder zu komplex sind, um sie zuverlässig in einem einzigen Prompt zu bearbeiten. Das Vorgehen ist ideal für die Verarbeitung von Rohdaten, automatisierte Content-Pipelines, Analyse-Workflows, sowie jede Art von Schritt-für-Schritt-Prozess, bei dem eine hohe Genauigkeit oder Nachvollziehbarkeit gefordert ist.

