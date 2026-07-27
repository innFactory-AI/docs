---
title: Code Interpreter
description: Mit der Integration „Code ausführen" schreibt und führt CompanyGPT Code in einer isolierten Sandbox innerhalb der eigenen Infrastruktur aus – für Datenanalysen, Diagramme und exakte Berechnungen.
---

Sprachmodelle sagen Text vorher und rechnen nicht — bei exakter Mathematik, Datenanalysen oder dem Erstellen von Diagrammen stoßen sie daher an ihre Grenzen. Mit der Integration **Code ausführen** (Code Interpreter) kann CompanyGPT stattdessen Code schreiben, in einer isolierten Sandbox ausführen und das tatsächliche Ergebnis in die Antwort übernehmen. Die Ausführung erfolgt vollständig innerhalb der eigenen Infrastruktur; es werden keine Daten an externe Dienste übermittelt.

## Aktivierung

Die Integration kann direkt in der [Chateingabe](/de/company-gpt/chat/) für einzelne Nachrichten aktiviert oder deaktiviert werden. Zusätzlich lässt sie sich [Agenten](/de/company-gpt/agenten/) als Fähigkeit zuweisen, sodass ein Agent Code selbstständig ausführen kann.

## Anwendungsfälle

- **Datenanalyse**: Hochgeladene Datenquellen (z. B. CSV-, Excel- oder JSON-Dateien) können gefiltert, aggregiert und transformiert werden. Das Ergebnis steht als Ausgabe im Chat oder als Datei zum Download bereit.
- **Diagramme und Visualisierungen**: Aus Daten lassen sich Diagramme erzeugen (z. B. mit Matplotlib), die direkt im Chat angezeigt werden.
- **Exakte Berechnungen**: Statt ein Ergebnis zu schätzen, schreibt das Modell die Berechnung als Code und liefert das tatsächlich berechnete Ergebnis.
- **Formatkonvertierung und Code-Tests**: Unstrukturierte Daten können in strukturierte Formate (z. B. JSON) umgewandelt und Code-Snippets direkt ausgeführt und geprüft werden.

## Unterstützte Sprachen

Der Code Interpreter führt **Python**, **JavaScript/TypeScript** (Node.js und Bun) sowie **Bash** aus.

## Sicherheit

- **Eigene Infrastruktur**: Die Code-Ausführung läuft als eigener Dienst im Cluster des Unternehmens — es wird kein externer Ausführungsdienst genutzt.
- **Isolierte Sandbox**: Jede Ausführung findet in einer eigenen, abgeschotteten Sandbox statt. Der Code hat keinen Zugriff auf das Firmennetzwerk oder das Internet.
- **Temporäre Daten**: Für die Ausführung bereitgestellte und erzeugte Dateien werden nur temporär gespeichert; die Sandbox ist nach der Ausführung nicht mehr verfügbar.

:::note[Limitierung]
Ausführungszeit und Ausgabegröße pro Ausführung sind begrenzt. Für langlaufende oder sehr speicherintensive Auswertungen ist der Code Interpreter nicht geeignet.
:::
