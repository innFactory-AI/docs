---
title: Code Interpreter
description: Mit der Integration „Code ausführen" schreibt und führt CompanyGPT Code in einer isolierten Sandbox innerhalb der eigenen Infrastruktur aus – für Datenanalysen, Diagramme und exakte Berechnungen.
---

Sprachmodelle sagen Text vorher und rechnen nicht — bei exakter Mathematik, Datenanalysen oder dem Erstellen von Diagrammen stoßen sie daher an ihre Grenzen. Mit der Integration **Code ausführen** (Code Interpreter) kann CompanyGPT stattdessen Code schreiben, in einer isolierten Sandbox ausführen und das tatsächliche Ergebnis in die Antwort übernehmen. Die Ausführung erfolgt vollständig innerhalb der eigenen Infrastruktur; es werden keine Daten an externe Dienste übermittelt.

## Aktivierung

Die Integration schalten Sie direkt in der [Chateingabe](/de/company-gpt/chat/) im Menü **Werkzeuge** über **Code ausführen** ein. Der Schalter gilt für den jeweiligen Chat und bleibt aktiv, bis Sie ihn wieder ausschalten. Zusätzlich lässt sie sich [Agenten](/de/company-gpt/agenten/) über die Tool-Bibliothek als Fähigkeit zuweisen, sodass ein Agent Code selbstständig ausführen kann.

## Dateien

Dateien, die Sie an eine Nachricht anhängen, müssen nicht gesondert für den Code Interpreter hochgeladen werden. Ist **Code ausführen** aktiv, stellt CompanyGPT die angehängten Dateien dem Code Interpreter automatisch zur Verfügung, sobald er sie benötigt. Einem Agenten können Sie zusätzlich feste Dateien für die Code-Ausführung hinterlegen. Mehr dazu unter [Dateiverarbeitung](/de/company-gpt/dateiverarbeitung/).

Dateien, die der Code Interpreter erzeugt, zum Beispiel eine ausgewertete Excel-Datei oder ein Diagramm, erscheinen in der Antwort als Karte, über die Sie die Datei herunterladen können. Für viele Formate steht dort auch eine Vorschau zur Verfügung.

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
- **Temporäre Sandbox**: Die Sandbox ist nur für die Dauer der Ausführung verfügbar. Dateien, die der Code Interpreter erzeugt, speichert CompanyGPT wie andere Dateien im Chat, sodass Sie sie auch später noch über die Karte in der Antwort herunterladen können.

:::note[Limitierung]
Ausführungszeit und Ausgabegröße pro Ausführung sind begrenzt. Für langlaufende oder sehr speicherintensive Auswertungen ist der Code Interpreter nicht geeignet.
:::
