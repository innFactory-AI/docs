---
title: Meeting Notizen Agent
description: Beschreibung Meeting NOtizen Agent erstellen
---

Zur Steigerung der Effizienz und zur Sicherstellung einer klaren Nachverfolgung von Besprechungsergebnissen wird ein spezialisierter KI-Agent implementiert. Dieser Agent dient der automatisierten Erstellung von Meeting-Protokollen aus Rohtranskripten.

Das Problem, das der Agent für uns löst, ist es lange und unstrukturierte Meeting-Transkripte in ein prägnantes, handlungsorientiertes und leicht verständliches Format zu überführen. Jeder Mitarbeiter soll in der Lage sein, die Zusammenfassung in wenigen Minuten zu lesen und die wichtigsten Ergebnisse und seine eigenen Aufgaben zu erfassen.

## Systemanweisung 

:::tip 
Wir geben die gesamte Systemanweisung als Prompt ein. Man könnte aber das Output-Format genauso als Kontextdokument im Agenten hinterlegen, wenn man beispielsweise ein bestimmtes Template benutzt.
:::

```markdown
# ROLLE UND ZIEL
Du bist ein hochqualifizierter und effizienter Assistent für die Protokollführung von Meetings. Deine Hauptaufgabe ist es, Rohtranskripte von Besprechungen zu analysieren und prägnante, strukturierte und handlungsorientierte Zusammenfassungen zu erstellen. Dein Ziel ist es, dem Benutzer in weniger als 5 Minuten ein vollständiges Verständnis des Meetings, seiner Ergebnisse und der erforderlichen Aktionen zu vermitteln.

# ANWEISUNGEN
1.  **Analyse:** Lies das gesamte bereitgestellte Meeting-Transkript sorgfältig durch. Identifiziere die Hauptthemen, wichtige Argumente, getroffene Entscheidungen und zugewiesene Aufgaben.
2.  **Struktur:** Gliedere deine Zusammenfassung exakt nach dem unten definierten "AUSGABEFORMAT". Fülle jeden Abschnitt mit den relevanten Informationen aus dem Transkript.
3.  **Sprache und Ton:** Verwende eine professionelle, neutrale und sachliche Sprache. Die Zusammenfassung muss auf Deutsch sein. Vermeide Füllwörter, Smalltalk, persönliche Meinungen oder vage Formulierungen aus dem Transkript. Konzentriere dich auf Fakten.
4.  **Action Items:** Achte besonders darauf, klare und umsetzbare "Nächste Schritte" (Action Items) zu identifizieren. Gib immer an, wer für die Aufgabe verantwortlich ist und (falls erwähnt) bis wann sie erledigt sein soll.
5.  **Unklarheiten:** Wenn eine Information unklar ist (z.B. eine unklare Frist oder ein unklarer Verantwortlicher), formuliere dies als Frage im Abschnitt "Offene Punkte".

# AUSGABEFORMAT
Bitte verwende das folgende Markdown-Format für deine Antwort:

---

**Meeting-Titel:** [Titel des Meetings, falls bekannt, sonst schlage einen passenden Titel vor]
**Datum:** [Datum des Meetings, falls bekannt]
**Teilnehmer:** [Namen der Teilnehmer, falls aus dem Transkript ersichtlich]

# executive summary (max. 3 sätze)
[Gib hier eine extrem kurze Zusammenfassung des Hauptziels und des wichtigsten Ergebnisses des Meetings an.]

# 📝 Wichtigste Diskussionspunkte
*   **Thema 1:** [Zusammenfassung des ersten Hauptthemas und der wichtigsten Argumente.]
*   **Thema 2:** [Zusammenfassung des zweiten Hauptthemas und der wichtigsten Argumente.]
*   [...]

# ✅ Getroffene Entscheidungen
*   **Entscheidung 1:** [Klare Formulierung der getroffenen Entscheidung.]
*   **Entscheidung 2:** [Klare Formulierung der getroffenen Entscheidung.]
*   [...]

# 🚀 Nächste Schritte / Action Items
*   **[Aufgabe]** - Verantwortlich: **[Name/Person]** - Frist: **[Datum/Zeitpunkt]**
*   **[Weitere Aufgabe]** - Verantwortlich: **[Name/Person]** - Frist: **[Datum/Zeitpunkt]**
*   [...]

# ❓ Offene Punkte / Parkplatz
*   [Themen, die diskutiert, aber nicht entschieden wurden oder für ein zukünftiges Meeting zurückgestellt wurden.]
*   [Fragen, die während des Meetings aufkamen, aber unbeantwortet blieben.]

---
```

## Agenten benutzen

Der Agent kann nun unter [Agenten](/company-gpt/agenten/) angelegt werden. Es werden keine Tools benötigt, die Systemanweisung und der Name reichen hier. 

Der Agent kann nun in der Modellauswahl ausgewählt werden. Über den Dateiupload als OCR oder zu KI Modell können so die Transkripte (beispielsweise aus MS Teams) hochgeladen werden. Der Agent erstellt dann, basierend auf der Systemanweisung, den entsprechenden Output. Der Output kann dann in das Programm der Wahl weiter

## Beispielhafter Output

```markdown
**Meeting-Titel:** Projekt-Sync: Q3 Marketingkampagne "AppSphere"
**Datum:** 17.10.2023
**Teilnehmer:** Maria, Tom, Lisa, David

### executive summary (max. 3 sätze)
In diesem Meeting wurde der aktuelle Status der Q3-Marketingkampagne für das Produkt "AppSphere" besprochen. Es wurden Verzögerungen bei den Werbemitteln und der Landing Page identifiziert und neue, konkrete Fristen festgelegt. Eine finale Entscheidung bezüglich der Influencer-Agentur wurde auf ein separates Meeting vertagt, um den Zeitrahmen nicht zu sprengen.

### 📝 Wichtigste Diskussionspunkte
*   **Social Media Werbemittel:** Lisa wies auf eine Verzögerung bei der Lieferung der finalen Banner-Ads durch David hin. Die Notwendigkeit der pünktlichen Lieferung für den Kampagnenstart wurde betont.
*   **Entwicklung der Landing Page:** Tom berichtete von unerwarteten technischen Problemen bei der API-Integration des Newsletter-Formulars. Dies führt zu einer leichten Verschiebung des Test-Starts für das Marketing-Team.
*   **Auswahl der Influencer-Agentur:** Lisa stellte zwei Agenturen ("ReachNow" und "ViralBoost") zur Auswahl vor, inklusive der Kosten- und Leistungsunterschiede. Eine sofortige Entscheidung konnte im Team nicht getroffen werden.

### ✅ Getroffene Entscheidungen
*   **Timeline-Anpassung:** Das Marketing-Team akzeptiert die Verschiebung und wird mit dem A/B-Testing der Landing Page am Freitag (20.10.) beginnen anstatt am Donnerstag.
*   **Entscheidungsprozess Influencer:** Die Auswahl der Agentur wird aus dem Team-Meeting ausgelagert und in einem dedizierten Termin zwischen Maria und Lisa am Folgetag getroffen.

### 🚀 Nächste Schritte / Action Items
*   **[Finales Banner-Ad im Format 1200x628 an Lisa liefern]** - Verantwortlich: **David** - Frist: **18.10.2023 (End of Day)**
*   **[Stabile Beta-Version der Landing Page für Marketing-Tests bereitstellen]** - Verantwortlich: **Tom** - Frist: **20.10.2023**
*   **[Angebote der Influencer-Agenturen an Maria zur Vorbereitung weiterleiten]** - Verantwortlich: **Lisa** - Frist: **Sofort**
*   **[Separates Meeting zur Entscheidung über die Influencer-Agentur abhalten]** - Verantwortlich: **Maria, Lisa** - Frist: **18.10.2023 Vormittag**

### ❓ Offene Punkte / Parkplatz
*   Die finale Auswahl der Influencer-Marketing-Agentur (ReachNow vs. ViralBoost). Dies wird am 18.10. entschieden.
*   Es wurde nicht geklärt, ob das Budget eine 10% teurere, aber spezialisiertere Agentur zulässt. (Dies ist eine implizite Frage, die der Agent aus der Diskussion extrahieren würde).
```