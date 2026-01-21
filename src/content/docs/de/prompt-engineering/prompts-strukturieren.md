
---
title: Prompts strukturieren
description: Einführung in die Funktionalitäten von CompanyGPT
---

Bei der Erstellung komplexer Prompts ist es sinnvoll, diese in klar erkennbare Abschnitte zu unterteilen. Dadurch wird sowohl dem KI-System als auch den menschlichen Nutzenden deutlich gemacht, welche Teile des Prompts welche Funktion erfüllen. Eine strukturierte Unterteilung hilft, Verwirrung zu vermeiden, verbessert die Nachvollziehbarkeit und führt in der Regel zu präziseren und konsistenteren Ergebnissen.

## Abschnitte kennzeichnen

Um Abschnitte klar abzugrenzen, gibt es verschiedene Formate. Besonders bewährt hat sich die Nutzung von spitzen Klammern, ähnlich wie in XML oder HTML. Hierbei wird jeder Abschnitt durch ein öffnendes und ein schließendes Tag markiert – beispielsweise:

```
<Anweisung>
Bitte fasse den folgenden Text in drei Sätzen zusammen.
</Anweisung>

<Ausgabeformat>
- Punkt 1
- Punkt 2
- Punkt 3
</Ausgabeformat>

<Persona>
Du bist ein erfahrener Redakteur.
</Persona>

<Kontext>
Der Text stammt aus einem aktuellen Zeitungsartikel.
</Kontext>

<Eingabe>
Hier folgt der zu analysierende Text.
</Eingabe>
```

Dieses Vorgehen macht es der KI besonders leicht, verschiedene Informationen gezielt zuzuordnen und so den gewünschten Output strukturiert zu liefern. Es ist jedoch nicht zwingend notwendig, genau dieses Format zu nutzen. Jedes eindeutige Strukturierungsprinzip kann eingesetzt werden, solange die Abschnitte klar voneinander abgrenzbar sind.

### Alternative: Nutzung von Überschriften

Auch Markdown-Überschriften bieten sich an, um die einzelnen Abschnitte eines Prompts klar zu markieren:

```
# Anweisung
Bitte fasse den Text zusammen.

# Ausgabeformat
Stichpunktliste

# Persona
Du bist ein Marketingexperte.

# Kontext
Inhalt einer Produktbroschüre.
```
Überschriften sind besonders hilfreich, wenn Prompts umfangreicher werden oder wenn mehrere thematische Ebenen abgedeckt werden sollen. Sie fördern Übersichtlichkeit und Verständlichkeit – sowohl für die KI als auch für die menschlichen Prompt-Autoren.

## Wann sind Abschnitte und Überschriften sinnvoll?

- **Kurze Prompts**: Bestehen Prompts nur aus ein bis zwei Sätzen, ist eine zusätzliche Abschnittsstruktur meist nicht notwendig.
- **Komplexere Prompts**: Sobald mehr Kontext, spezielle Anweisungen, Personenrollen oder ein gewünschtes Ausgabeformat angegeben werden, empfiehlt sich die Gliederung in Abschnitte. Überschriften oder Tags verhindern Missverständnisse und helfen, den Prompt übersichtlich zu gestalten.
