---
title: Prompts formatieren
description: Erfahre, wie du Prompts für KI-Systeme wie CompanyGPT mithilfe von Markdown präzise formatierst. Optimiere deine Kommunikation durch Überschriften, Listen, Tabellen und Absätze für strukturierte und klare Anweisungen.
---

Die richtige Formatierung von Prompts trägt maßgeblich dazu bei, dass KI-Systeme komplexe Aufgaben strukturierter, klarer und präziser bearbeiten können. Durch eine übersichtliche Gliederung wird der Informationsgehalt für die KI leichter verständlich, und auch für menschliche Nutzer*innen sind formatierte Prompts besser nachvollziehbar.

## Wichtige Markdown-Syntax für die Prompt-Formatierung

Um Prompts übersichtlich zu gestalten, empfiehlt sich die Nutzung grundlegender Markdown-Elemente ([Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)).

### Überschriften

Zur Strukturierung in Themenbereiche.
```
# Erste Überschrift

## Zweite Überschrift

### Dritte Überschrift
```

### Fett, Kursiv

Zum Hervorheben von wichtigen Wörtern oder Anweisungen.
- Fett (`**Text**`)
- Kursiv (`*kursiv*`)
- Fett + Kursiv (`***fettundkursiv***`)

### Nummerierte Listen

```
1. Punkt 1
2. Punkt 2
3. Punkt 3
    3.1 Punkt 3.1
```

### Nicht-nummerierte Listen

```
- Hier steht ein Text
- Hier steht auch ein Text
- Hier steht noch mehr Text
    - Und auch hier steht Text
```

### Tabellen

Wichtig:
- `|` am Anfang und am Ende
- mindestens (`---`) 3x für die Abgrenzung der Kopfzeile
- gleiche Anzahl an Zellen in allen Reihen beachten

```
| Kopfzeile Text 1 | Kopfzeile Text 2 | Kopfzeile Text 3 |
| --- | --- | --- |
| Wert1 Zeile 1 | Wert2 Zeile 1 | Wert3 Zeile 1 |
| Wert1 Zeile 2 | Wert2 Zeile 2 | Wert3 Zeile 2 |
| Wert1 Zeile 3 | Wert2 Zeile 3 | Wert3 Zeile 3 |
```

### Absätze

Leerzeilen für eine klare Trennung von Inhalten.

```
Erkläre mir folgendes Thema: KI

Antworte, als wäre ich 12.
```

### Beispiel
```
# Zusammenfassung erstellen

Bitte fasse folgenden Text in **drei Stichpunkten** zusammen:

- Konzentriere dich auf die wichtigsten Aussagen
- Nutze eine **sachliche Sprache**
- Vermeide Wiederholungen

**Text:**
> Hier steht der zu analysierende Text.