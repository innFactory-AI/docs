---
title: Few-Shot Prompting
description: Zero Shot
---

## Beschreibung
Beim Few Shot Prompting werden im Prompt gezielt mehrere Beispiele von Eingaben und den dazugehörigen gewünschten Ausgaben bereitgestellt. Ziel ist es, dem Sprachmodell (LLM) durch diese Beispiele zu demonstrieren, welche Art von Antwort oder Transformation für eine bestimmte Aufgabe erwartet wird. Die bereitgestellten Beispiele dienen dem Modell als Orientierung und helfen, Unsicherheiten zu minimieren sowie die Qualität und Konsistenz der Antworten zu verbessern.

Das Modell nutzt dabei sowohl sein internes Wissen als auch die Struktur, die durch die Beispiele vorgegeben wird. Dadurch eignet sich Few Shot Prompting besonders für Aufgaben, die nicht komplett selbsterklärend sind, für die eine spezifische Formatierung oder ein definierter Bewertungsmaßstab erforderlich ist. Im Prompt werden die Beispiele zum Beispiel in speziellen Blöcken wie `<Beispiele> ... </Beispiele>` eingefügt – dieses Muster macht deutlich, welche Elemente als Beispiele dienen und was vom Modell erwartet wird.

## Vorteile

- Erlaubt es, das Verhalten des Modells gezielt und flexibel zu steuern, ohne explizite Regeln zu formulieren.
- Besonders nützlich für Domänen-spezifische oder kreative Aufgaben, bei denen der gewünschte Output variieren kann.
- Eignet sich zur Anpassung der Antwortqualität an spezielle Anforderungen (bspw. eigene Label für Sentiment, spezifisches Output-Format etc.).

## Typische Beispiele

### Sentiment-Analyse mit benutzerdefinierten Labels

```
Text: "Ich liebe das!", Stimmung: Positiv.

Text: "Es ist in Ordnung.", Stimmung: Neutral.

Text: "Das ist schrecklich.", Stimmung: Negativ.

Text: "Der Service war vorbildlich.", Stimmung:
```

### Entitätenextraktion

```
Eingabe: "Apple Inc. wurde von Steve Jobs gegründet."

Ausgabe: {'Unternehmen': 'Apple Inc.', 'Gründer': 'Steve Jobs'}

Eingabe: "Microsoft wurde von Bill Gates mitbegründet."

Ausgabe:
```

### Umschreiben von Text in einem bestimmten Ton/Stil

Zum Beispiel durch die Vorgabe von mehreren Transformationen von leger zu formell, z.B.:

```
Eingabe: "Komm vorbei!" → Ausgabe: "Ich lade Sie herzlich ein, vorbeizukommen."

Eingabe: "Hab’s dir doch gesagt!" → Ausgabe: "Ich hatte Sie bereits darauf hingewiesen."

(Nun folgt eine neue Eingabe zur Bearbeitung.)
```

## Einsatzbereiche

Few Shot Prompting ist gut geeignet für Anwendungsfälle, in denen die gewünschte Ausgabestruktur, der Stil oder spezifische Labels nicht allgemein bekannt sind, sondern individuell vorgegeben werden müssen. Dazu zählen zum Beispiel Custom-Labelings, eigene Datenformate, spezifische Textumwandlungen, kreative Aufgaben und kundenspezifische Use Cases.