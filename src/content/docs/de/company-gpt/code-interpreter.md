---
title: "Integration: Code ausführen (Code Interpreter)"
description: "Erfahre in diesem kompakten Leitfaden, warum die Integration der Code-Ausführung den entscheidenden Unterschied bei der Arbeit mit Daten, Berechnungen und Visualisierungen macht."
---

Herkömmliche KI-Modelle sind hervorragend darin, Texte zu verfassen und zu analysieren. Wenn es jedoch um präzise Mathematik, komplexe Datenanalysen oder das Erstellen von Diagrammen geht, stoßen reine Sprachmodelle an ihre Grenzen, da sie Wörter vorhersagen und nicht logisch rechnen.

Die Integration **„Code ausführen“ (Code Interpreter)** löst dieses Problem fundamental, indem sie der KI ein mächtiges Werkzeug an die Hand gibt: **Ein echtes, isoliertes Programmier-Terminal.**

---

## Welchen Mehrwert bringt die Code-Ausführung?

### 1. Präzise Datenanalyse und -manipulation
Wenn du Datenquellen (wie CSV-, Excel- oder JSON-Dateien) in CompanyGPT hochlädst oder über Integrationen anbindest, kann die KI diese Daten nicht nur "lesen", sondern aktiv verarbeiten.
* **In der Praxis:** Die KI schreibt ein Python-Skript, filtert eine 50-MB-Excel-Tabelle nach bestimmten Kriterien, berechnet Durchschnitte und stellt dir die bereinigte Tabelle sofort wieder als Download zur Verfügung.

### 2. Dynamische Visualisierungen und Diagramme
Daten werden erst durch Visualisierung greifbar. Mit der Code-Ausführung kann die KI Daten visuell aufbereiten.
* **In der Praxis:** Du bittest die KI: *„Erstelle mir ein Balkendiagramm der Umsätze aus dieser CSV-Datei.“* Der Code Interpreter führt im Hintergrund ein Skript (z. B. mit Matplotlib oder Seaborn) aus und rendert das fertige Diagramm (`.png` oder `.pdf`) direkt in dein Chatfenster.

### 3. Fehlerfreie, komplexe Berechnungen
Sprachmodelle neigen bei komplexen Formeln oder großen Zahlen zu Rechenfehlern.
* **In der Praxis:** Statt das Ergebnis im Kopf zu schätzen, schreibt die KI die mathematische Formel als Code, lässt diesen vom Interpreter berechnen und liefert dir ein mathematisch exakt bewiesenes und fehlerfreies Ergebnis.

### 4. Automatische Formatkonvertierung und Code-Tests
Entwickler und Datenanalysten können Code-Snippets direkt in der Sandbox testen lassen.
* **In der Praxis:** Du kannst unstrukturierte Logdaten hochladen und sie in ein sauberes JSON-Format konvertieren lassen oder Programmcode (in Python, JavaScript, R, etc.) auf Fehler prüfen und direkt korrigieren lassen.

---

## Wie funktioniert die Integration im Hintergrund?

Um die Sicherheit deines Unternehmens zu garantieren, läuft die Code-Ausführung über eine hochmoderne **Sandbox-Architektur**:

1. **Strikte Isolation (Sandbox):** Jede Ausführung findet in einer eigenen, isolierten Laufzeitumgebung (MicroVM / Docker-Container) statt. Der Code hat keinen Zugriff auf deine lokalen Daten, das Firmennetzwerk oder das öffentliche Internet.
2. **Sitzungsbasierter Speicher:** Nach dem Schließen des Chats wird die Sandbox komplett gelöscht. Es bleiben keine temporären Daten auf dem Server zurück.
3. **Multi-Language Support:** Der Interpreter versteht und führt nicht nur Python aus, sondern unterstützt auch Node.js (JavaScript), R, Go, C++, PHP und viele weitere Sprachen.

---

:::tip[Zusammenfassung]
Die Integration **Code ausführen** verwandelt CompanyGPT von einem reinen Text-Assistenten in einen vollwertigen, digitalen Datenanalysten. Sie ist das Bindeglied, um Rohdaten aus deinen Integrationen und Dokumenten in echte Erkenntnisse, Tabellen und Grafiken zu verwandeln.
:::