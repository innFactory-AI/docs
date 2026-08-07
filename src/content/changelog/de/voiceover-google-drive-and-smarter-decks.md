---
title: "Voiceover ist da, Google Drive als Quelle und bessere Foliensätze"
excerpt: "companyTRANSCRIBE macht aus Text gesprochene Audio und lässt die Sprechertrennung abschalten, companyRAG indexiert Google Drive und Parquet-Datasets, companyFILES füllt passwortgeschützte PDF-Formulare und baut Decks aus Ihrer Corporate-Vorlage, und CompanyGPT zeigt Ihnen, was ein Tool gerade tut."
date: 2026-08-05
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyRAG
  - companyFILES
  - companyTRANSLATE
  - companyTRANSCRIBE
  - companyM365
---

Die zuletzt angekündigte Voiceover-Vorschau ist jetzt live, Ihre Wissensdatenbanken bekommen eine weitere Quelle und ein neues Datenformat, und das Erstellen von Präsentationen wird deutlich besser.

## 🎙️ companyTRANSCRIBE

- **Voiceover ist verfügbar**: Das Gegenstück zur Transkription ist da. Schreiben oder fügen Sie einen Text ein, wählen Sie eine Stimme und machen Sie daraus gesprochene Audio – für Schulungsmaterial, Produktvideos oder barrierefreie Fassungen Ihrer Dokumente. Voiceovers folgen jetzt derselben Struktur wie Transkripte: eine Übersichtsliste, eine Seite zum Erstellen und eine Detailseite je Voiceover, mit Beschreibung und Ersteller auf einen Blick.
- **Sprechertrennung abschalten**: Bei der Aufnahme gibt es einen neuen Schalter für die Sprechertrennung (Diarization). Ist er aus, lassen Transkriptansicht, Markdown-Download und MCP-Ausgabe die Sprecherlabels ganz weg, statt einen "Sprecher 1" zu erfinden, den es nie gab.
- **Klarere Navigation**: Die Seitenleiste ist in Transkripte und Voiceovers gruppiert, und eine laufende Aufnahme kann beim Verlassen der Seite nicht mehr versehentlich verworfen werden.

## 📚 companyRAG

- **Google Drive als Dokumentenquelle**: Verbinden Sie Google Drive und indexieren Sie dessen Dokumente neben Ihren übrigen Quellen – ohne Export oder manuellen Upload.
- **Personen und Gruppen in einer Suche freigeben**: Der Freigabedialog für Collections durchsucht jetzt Benutzer und Gruppen gemeinsam, Sie müssen also nicht vorher wissen, wonach Sie suchen. Auch die Eigentümerschaft wird als Freigabe geführt und ist damit sichtbar und übertragbar.
- **Parquet in Dataset-Collections**: Dataset-Collections akzeptieren neben CSV und Excel nun auch `.parquet`-Dateien, sodass Analytics-Exporte direkt als Datenbasis dienen können.
- **Große Dokumente indexieren zuverlässig**: Extrahierte Seiten sehr großer Dokumente scheitern beim Indexieren nicht mehr.

## 📄 companyFILES

- **Corporate-Vorlagen ohne Platzhalter**: Die PowerPoint-Erzeugung arbeitet jetzt layout-nativ. Decks entstehen aus den Layouts Ihres Corporate-Masters – die Vorlage braucht keine vorbereiteten `{{Platzhalter}}` mehr.
- **PDF-Formulare ausfüllen**: Formularfelder in PDFs lassen sich jetzt nicht nur lesen, sondern auch ausfüllen – etwa Behörden- oder Versicherungsformulare. Alle übrigen Felder des Dokuments bleiben erhalten.
- **Robustere Tool-Aufrufe**: Strukturierte Argumente, die ein Modell als JSON-String schickt, werden jetzt akzeptiert – Tool-Aufrufe scheitern dadurch seltener.

## 🧩 companyM365

- **Ganze Decks aus Markdown oder Dokumenten**: Das Add-in erstellt eine komplette Präsentation in einem Schritt – aus einer Markdown-Gliederung oder aus einem bestehenden Word-, Excel- oder PDF-Dokument. Dafür stehen fertige Bausteine für KPIs, Prozessschritte, Spalten, Aufzählungen, Zitate und Tabellen bereit, und eine Layout-Prüfung stellt sicher, dass nichts überlappt oder aus der Folie rutscht.
- **Vorlagen-Bewusstsein in PowerPoint**: Das Add-in liest die Layouts Ihrer Präsentationsvorlage aus und verwendet sie, sodass neue Folien zu Ihrem Corporate Design passen.
- **Änderungen prüfen, bevor sie übernommen werden**: Bearbeitungsmodi und Vorschlagskarten zeigen, was der Agent ändern möchte; Sie übernehmen oder verwerfen es. Lange Vorschläge werden jetzt eingeklappt statt abgeschnitten.
- **Dokumente als strukturierten Text lesen**: Word-, Excel- und PDF-Dateien lassen sich strukturerhaltend als Markdown einlesen – eine bessere Grundlage für Zusammenfassungen und Folien.

## 🌐 companyTRANSLATE

- **Google als Standard-Backend**: Wo das Google-Übersetzungs-Backend verfügbar ist, ist es jetzt standardmäßig aktiv – bessere Qualität für Dokument- und Textübersetzungen ohne Konfiguration.
- **Namen mit Umlauten führen nicht mehr zu Fehlern**: Anzeigenamen mit Sonderzeichen ließen zuvor jede API-Anfrage fehlschlagen. Das ist behoben.
- **Stabile TMX-Uploads**: Große Translation Memories werden pro Upload nur noch einmal verarbeitet und blockieren die Oberfläche nicht mehr.

## ✨ CompanyGPT

- **Sehen, was ein Tool tut**: Während ein Tool läuft, zeigt der Chat, was es gerade tatsächlich tut, statt nur den technischen Namen. Im Agent Builder legen Sie pro Tool fest, ob diese Beschriftung angezeigt wird.
- **Fortschrittsanzeige bei langen Antworten**: Längere Streaming-Antworten zeigen jetzt eine Zwischenkarte mit dem Fortschritt statt eines scheinbar untätigen Chats.
- **Zuverlässiger unterbrechen und umlenken**: Einen laufenden Agenten zu stoppen und in eine andere Richtung zu lenken, funktioniert deutlich zuverlässiger – inklusive Wiederaufnahme danach.
- **Rundere Skills**: Der `/`-Befehl durchsucht nur noch den Text vor dem Cursor, Links innerhalb von Skill-Dokumenten werden korrekt aufgelöst, und an einen Skill angehängte Dateien werden zuverlässiger hochgeladen.
- **Mehr Durchsatz und größere Kontexte**: Das AI-Gateway drosselt nicht mehr bei 60 Anfragen pro Minute, und große Kontextstufen erreichen das Modell jetzt tatsächlich, statt still reduziert zu werden.
- **Sauberere Nutzerverwaltung**: Das Aufheben einer Nutzersperre stellt den vollen Zugriff nun zuverlässig wieder her.

## 🔜 Demnächst

- **companyROUTINES**: Wiederkehrende Agenten-Läufe nach Zeitplan. Agenten lassen sich verketten, Läufe werden in Ihren Chatverlauf gespiegelt, und MCP-Server können mit OAuth oder API-Key angebunden werden. Eine OpenAI-kompatible API macht Routinen aus anderen Werkzeugen heraus nutzbar. Aktuell im Pilotbetrieb in ausgewählten Umgebungen.
