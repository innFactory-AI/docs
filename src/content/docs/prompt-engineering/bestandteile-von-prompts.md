---
title: Bestandteile von Prompts
description: Eine Übersicht über die wichtigsten Elemente und Strukturen von Prompts im Prompt Engineering.
---

Ein gut strukturierter Prompt besteht aus mehreren essenziellen Elementen, die die Qualität und Zielgenauigkeit der Antwort beeinflussen. Im Folgenden werden die wichtigsten Bestandteile erläutert und durch Beispiele ergänzt.

:::tip[Grundsätzlich]
Es müssen nicht alle Bestandteile in jedem Prompt vorhanden sein. Jeder Bestandteil erfüllt einen Zweck und schärft das Ergbnis in eine bestimmte Richtung, je nach Anwendungsfall variiert aber auch die Wichtigkeit.

Jeder Prompt für komplexere Aufgaben könnte zumindest aus folgenden Bestandteilen bestehen:
1. Anweisung
2. Kontext
3. Eingabe
4. Ausgabeformat
5. Persona
:::

## 1. Anweisung (`Instruction`)
Die Anweisung beschreibt, was das Sprachmodell tun oder beantworten soll. Sie ist oft das Kernstück eines Prompts.

**Beispiel:**  
*Schreibe ein Gedicht über den Sommer.*



## 2. Kontext (`Context`)
Der Kontext liefert zusätzliche Informationen oder Hintergründe, um die Antwort des Modells gezielter zu lenken.

**Beispiel:**  
*Du bist ein Poetry-Slam-Teilnehmer und möchtest das Publikum begeistern.*



## 3. Eingabedaten (`Input`)
Eingabedaten sind spezifische Daten, Fragen oder Texte, auf die sich die Antwort beziehen soll.

**Beispiel:**  
*Text: Die Sonne scheint, das Meer glitzert.*



## 4. Ausgabeformat (`Output`)
Das Ausgabeformat beschreibt, wie die Antwort aussehen soll (z. B. als Liste, Tabelle, Fließtext).

**Beispiel:**  
*Gib die Antwort als Tabelle mit zwei Spalten aus (Was passiert?, Warum wichtig?).*



## 5. Persona
Die Persona legt fest, aus welcher Perspektive oder Rolle die Antwort erfolgen soll (z. B. als Experte, Lehrer, Kind).

**Beispiel:**  
*Du bist ein Informatikprofessor und erklärst den Begriff "Cloud Computing".*



## 6. Einschränkungen (`Constraints`)
Einschränkungen sind Vorgaben, die die Antwort in ihrer Länge, im Stil oder inhaltlich begrenzen.

**Beispiel:**  
*Antworte in maximal drei Sätzen und verwende keine Fachbegriffe.*



## 7. Beispielhaftes Vorgehen (`Examples`)
Das Voranstellen von Beispielen im Prompt zeigt dem Modell, wie die Antwort aussehen kann.

**Beispiel:**  
*Beispiel:  
Frage: Was ist KI?  
Antwort: Künstliche Intelligenz ist die Fähigkeit von Maschinen, Aufgaben intelligent zu lösen.*



## 8. Werkzeuge / Tools
Manchmal kann der Prompt Angaben zu externen Tools oder Funktionen enthalten, die verwendet werden sollen.

**Beispiel:**  
*Nutze die Wikipedia-API, um aktuelle Daten zu recherchieren.*



## Zusammensetzung eines effektiven Prompts

Ein typischer Prompt kann aus einer gezielten Kombination der obigen Elemente bestehen:

```text
Du bist ein Umweltwissenschaftler (Persona). 
Erkläre den Treibhauseffekt (Anweisung) unter Berücksichtigung der aktuellen CO2-Emissionen (Kontext). 
Antworte in maximal fünf Sätzen (Einschränkung). 
Gib die Antwort als nummerierte Liste aus (Ausgabeformat).
```



Jeder Bestandteil trägt dazu bei, Klarheit und Zielgenauigkeit im Prompt Engineering zu schaffen. Durch die bewusste Integration und Kombination dieser Elemente kann die Interaktion mit KI-Modellen präziser und effektiver gestaltet werden.
