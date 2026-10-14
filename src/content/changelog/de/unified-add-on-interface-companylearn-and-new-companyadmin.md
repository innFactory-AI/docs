---
title: "Eine Oberfläche für alle Addons, companyLEARN und ein neu gegliedertes companyADMIN"
excerpt: "Die Addons übernehmen die Oberfläche des Chats, companyLEARN bringt Schulungen in CompanyGPT, und companyADMIN ist neu gegliedert – mit Status-Seite und Insights anstelle von companyDASHBOARD. companyFILES liest E-Mails, Archive und alte Office-Formate, companyTRANSCRIBE übersteht Verbindungsabbrüche, und das Office-Add-in von companyM365 sieht aus wie der Chat."
date: 2026-10-14
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyADMIN
  - companyLEARN
  - companyFILES
  - companyRAG
  - companyTRANSCRIBE
  - companyTRANSLATE
  - companyM365
  - companyDASHBOARD
  - MCP
---

Im Oktober wachsen die Addons zu einer gemeinsamen Oberfläche zusammen. Dazu kommen companyLEARN in Version 1.0, ein neu aufgebautes companyADMIN und viele Verbesserungen im Detail.

## 🧭 Eine Oberfläche für alle Addons

- **Aufgebaut wie der Chat**: companyADMIN, companyFILES, companyRAG, companyTRANSCRIBE und die App-Übersicht haben jetzt dieselbe Seitenleiste wie der Chat: oben **Neuer Chat** und **Alle Apps**, darunter das Menü des Addons, unten das Kontomenü mit Design (hell, dunkel, wie im System oder mit hohem Kontrast), je nach Addon der Sprache und **Abmelden**. Auf dem Smartphone wird die Seitenleiste zum ausklappbaren Menü. Mehr unter [Gemeinsame Oberfläche](/de/company-gpt/addons/gemeinsame-oberflaeche/).
- **Eine Anmeldung für alles**: Die Addons nutzen Ihre Anmeldung im Chat, eine eigene Anmeldung entfällt. Fehlt die Anmeldung oder der Zugriff, erklärt eine einheitliche Seite, was zu tun ist.
- **Alle Apps**: Die Übersicht [Alle Apps](/de/company-gpt/addons/alle-apps/) – als eigene Seite und als Panel in der Seitenleiste des Chats – zeigt die Anwendungen, die Sie nutzen dürfen. Welche Kacheln erscheinen, richtet sich nach Ihren Rechten in companyADMIN.

## 🎓 companyLEARN 1.0

- **Schulungen in CompanyGPT**: [companyLEARN](/de/company-gpt/addons/companylearn/), das Addon für interne Schulungen, gibt es jetzt in Version 1.0 mit neuer Oberfläche. Kurse bestehen aus Kapiteln mit Lektionen als Video oder Text, ein Kapitel kann mit einem Quiz samt Bestehensgrenze abschließen. Auf Wunsch wird ein Kapitel erst freigeschaltet, wenn das vorherige abgeschlossen ist. Dashboard und Kurskatalog zeigen Lernenden ihren Fortschritt.
- **Kurse verwalten**: In der **Kursverwaltung** legen Admins Kurse an, ordnen Kapitel und Lektionen per Drag & Drop, laden Videos (MP4, WebM) hoch und veröffentlichen fertige Kurse. Für die Anbindung anderer Systeme gibt es eine REST-API mit eigenen API-Schlüsseln.
- **Lernen im Chat**: Über den MCP-Server von companyLEARN finden Agenten passende Kurse, schreiben Sie ein, zeigen Ihren Fortschritt, öffnen Lektionen und führen Quizze durch.
- **Zugriff**: Wer companyLEARN nutzen und Kurse verwalten darf, steuern Admins in den meisten Umgebungen in companyADMIN mit den Rechten „Kurse nutzen“ und „Kurse verwalten“. companyLEARN wird pro Umgebung freigeschaltet – sprechen Sie uns an, wenn Sie es nutzen möchten.

## 🛡️ companyADMIN

- **Neu gegliedert**: Das Menü ist in **Insights**, **Status**, **Zugriff**, **Inhalte** und **Konfiguration** geordnet. Statt Dialogen öffnen Agents, Rollen, Gruppen und weitere Einträge Detailseiten mit Reitern. Die Oberfläche folgt der Sprache Ihres Browsers und lässt sich im Kontomenü zwischen Deutsch und Englisch umstellen. Mehr unter [companyADMIN](/de/company-gpt/addons/companyadmin/).
- **Status-Seite**: [Status](/de/company-gpt/addons/companyadmin/status/) zeigt auf einen Blick, ob alle Addons erreichbar sind, welche Konfiguration gilt, wie die Rollen eingerichtet sind und woher Admin-Rechte kommen. Unter **Protokolle** finden Sie das companyADMIN-Protokoll mit jeder Änderung über companyADMIN und das companyGPT-Protokoll, das bisherige Audit-Log.
- **Zugriff auf Addons steuern**: Wo der Zugriff auf die Addons über companyADMIN gesteuert wird, vergeben Sie Rechte wie „Übersetzen nutzen“, „Transkribieren nutzen“, „Wissen nutzen“, „Microsoft 365 nutzen“ oder „Kurse nutzen“ an Rollen, an Gruppen oder für alle; „Insights ansehen“ an Rollen und Gruppen. Die Kacheln unter **Alle Apps** folgen diesen Rechten. Siehe [Erweiterungen](/de/company-gpt/addons/companyadmin/erweiterungen/).
- **Modellzugriff als Matrix**: Unter **Modellzugriff** stellen Sie die Modelle aller Rollen in einer Tabelle ein, bis hinunter zum einzelnen Modell.

## 📊 companyDASHBOARD

- **Abgelöst durch Insights**: Die Auswertungen von companyDASHBOARD finden Sie jetzt in [Insights](/de/company-gpt/addons/companyadmin/insights/) in companyADMIN. companyDASHBOARD ist seit 4. Oktober abgeschaltet; die bisherige Adresse leitet auf companyADMIN weiter.

## 📄 companyFILES

- **E-Mails, Archive und alte Formate lesen**: companyFILES liest jetzt Outlook-Nachrichten (.msg) und E-Mails (.eml) samt Anhängen, ZIP-Archive, ältere Office-Dateien (.doc, .xls, .ppt) sowie RTF, OpenDocument, EPUB, Jupyter-Notebooks und TIFF. Gescannte Inhalte werden per Texterkennung erfasst. Laden Sie die Dateien in companyFILES hoch, liest der Agent sie im Chat Seite für Seite. Einzelne Anhänge oder Archiv-Einträge speichern Sie mit **Als Dokument speichern** als eigenes Dokument. Mehr unter [Dokumente erstellen](/de/company-gpt/addons/companyfiles/dokumente-erstellen/).
- **Vorschau per Klick**: Ein Klick auf ein Dokument öffnet die Vorschau, kleine Bilder erhalten ein Vorschaubild und lassen sich vergrößern. Ordner gibt es nicht mehr.
- **Vorlage in den Chat**: Ist companyFILES im Chat geöffnet, schreibt **Vorlage verwenden** einen passenden Prompt in den Chat.
- **Vorlagen ohne Programmcode**: Ausdrücke in [Vorlagen](/de/company-gpt/addons/companyfiles/vorlagen/) sind auf Pfade, Operatoren, die Befehle FOR, IF und EXEC sowie eine Liste einfacher Funktionen beschränkt. Vorlagen mit Programmcode, etwa Arrow-Functions oder `.map`, brechen mit einer klaren Meldung ab. Bitte prüfen Sie eigene Vorlagen.
- **Bilder in PDF und PowerPoint**: Bilder werden nur noch von öffentlich erreichbaren Adressen oder aus Ihren Dateien geladen, nicht mehr aus internen Netzen.

## 📚 companyRAG

- **Excel als Datensatz**: Excel-Dateien funktionieren zuverlässig als Datensatz, und jedes Blatt einer Arbeitsmappe wird zu einer eigenen Tabelle.
- **Deutsche Zahlen- und Datumsformate**: CSV-Dateien mit Dezimalkomma und deutschen Datumsangaben werden richtig erkannt.
- **Große Uploads**: Große Dateien lassen sich auch über langsamere Verbindungen hochladen, ohne dass der Upload vorzeitig abbricht.
- **Berechtigungen aus Teams-Websites**: Freigaben von SharePoint-Websites, die zu einem Team gehören, werden korrekt übernommen.
- **Zugriff über companyADMIN**: Wer Wissensdatenbanken nutzen darf, steuern Admins in den meisten Umgebungen in companyADMIN mit dem Recht „Wissen nutzen“.

## 🎙️ companyTRANSCRIBE

- **Aufnahmen überstehen Verbindungsabbrüche**: Das Audio bleibt im Browser, bis die Aufnahme gespeichert ist, und wird automatisch hochgeladen, sobald die Verbindung zurück ist. Stoppen Sie ohne Verbindung, wartet companyTRANSCRIBE und bietet **Jetzt erneut versuchen**, **Audio herunterladen** und **Verwerfen** an. Aufnahmen aus einem geschlossenen Tab finden Sie auf der Aufnahmeseite unter **Noch nicht gespeicherte Aufnahmen**. Mehr unter [Aufnehmen](/de/company-gpt/addons/company-transcribe/aufnehmen/).
- **Geschützte Aufnahmen**: Wer während einer Aufnahme die Seite verlässt, wird vorher gefragt, und die Aufnahme wird gespeichert. Läuft die Anmeldung ab, nimmt companyTRANSCRIBE weiter auf und speichert die Aufnahme.
- **Genaue Sprünge**: Ein Klick auf einen Zeitstempel springt auch in langen Aufnahmen genau an die richtige Stelle.
- **Neue Oberfläche**: Transkripte und Sprachausgaben bilden zwei Gruppen im Menü, **Aufnehmen** und **Hochladen** stehen im Seitenkopf.

## 🧩 companyM365

- **Add-in im Look des Chats**: Das [Office-Add-in](/de/company-gpt/addons/companym365/office-add-in/) sieht in Word, Excel, PowerPoint, Outlook und im Teams-Tab jetzt aus wie der CompanyGPT-Chat und folgt dem hellen, dunklen oder Kontrast-Design von Office und Teams. Den Verlauf durchsuchen Sie, Chats lassen sich anheften, umbenennen und löschen.
- **Mehr Chat im Dokument**: Mit `/` rufen Sie Prompts und Schnellaktionen auf, mit `#` fügen Sie Dateien, E-Mails, Termine und Transkripte als Referenz ein. Änderungen zeigt das Add-in standardmäßig als Vorschlagskarten zum Übernehmen oder Verwerfen, in Word gibt es zusätzlich einen Modus für nachverfolgte Änderungen. Eine laufende Antwort können Sie nachsteuern oder stoppen.
- **Workflows je App**: Excel analysiert Daten mit Code und fügt das Ergebnis als neues Blatt ein, sofern die Code-Ausführung aktiv ist. PowerPoint schlägt zuerst eine Gliederung vor und baut dann das Deck. Outlook schlägt Termine vor, bereitet Meetings vor und räumt den Posteingang auf – jeweils erst nach Ihrer Bestätigung. Word und Outlook geben Coaching-Hinweise zu Ton, Klarheit und Struktur.
- **Mehr Werkzeuge im Chat**: Agenten lesen freigegebene Kalender und Zweitkalender, finden SharePoint-Websites mit ihren Dokumentbibliotheken und prüfen die Verfügbarkeit von bis zu 20 Personen und Räumen.
- **Verwaltung für Admins**: Ein eigener Admin-Bereich stellt das App-Paket für Office-Add-in und Teams-Tab zum Hochladen ins Microsoft 365 Admin Center bereit. Zugang gewährt das Recht „Microsoft 365 verwalten“, die Nutzung steuert „Microsoft 365 nutzen“ in companyADMIN.
- **Teams-Bot und mehrere Fenster** (derzeit nur in Pilotumgebungen): Ein Teams-Bot beantwortet Fragen in Chats und Kanälen, standardmäßig privat für die fragende Person. Im Add-in arbeitet ein Chat über mehrere geöffnete Office-Fenster hinweg, Änderungen in anderen Fenstern erst nach Bestätigung. Gespeicherte Agents erhalten im Add-in Zugriff auf die Office-Werkzeuge.

## 🌐 companyTRANSLATE

- **Zugriff über companyADMIN**: Wer übersetzen und Glossare verwalten darf, steuern Admins in den meisten Umgebungen mit „Übersetzen nutzen“ und „Glossare verwalten“. Ohne Berechtigung erscheint ein klarer Hinweis.
- **Übersetzen im Chat** (derzeit nur in Pilotumgebungen): Ein Agent übersetzt angehängte Dokumente (PDF, Word, PowerPoint, Excel, TXT, Markdown, HTML bis 40 MB) und Texte direkt im Chat, wahlweise mit gespeicherten Glossaren, einer Glossar-Datei oder Begriffspaaren im Prompt. Das Ergebnis kommt als Datei in den Chat. Mehr unter [Übersetzen im Chat](/de/company-gpt/addons/company-translate/im-chat/).
- **Gemeinsame Oberfläche**: companyTRANSLATE erhält die gemeinsame Oberfläche mit den Bereichen Text, Dokumente und Glossare.

## ✨ CompanyGPT

- **Bis zu 50 Anhänge pro Nachricht**: Sie können einer Nachricht jetzt bis zu 50 Dateien mitgeben.
- **AI Gateway: größere Anfragen, mehr Zeit**: In Umgebungen mit AI Gateway passen Anfragen bis 128 MiB durch, etwa mehrere große PDFs in einer Nachricht. Lang laufende Anfragen, zum Beispiel mit Denkmodellen, haben bis zu zehn Minuten Zeit statt einer. Ist eine Anfrage zu groß, nennt die Fehlermeldung Grenze und Größe.

## 🔜 Demnächst

- **Neue Chat-Oberfläche**: Ein neues Eingabefeld mit einer Palette für Anhänge und Werkzeuge, Projekte mit eigenen Anweisungen und Referenzdateien, Chat-Optionen in der Kopfzeile, Benachrichtigungen und geplante Chats, die einen Agenten zu festen Zeiten starten. Einen ersten Eindruck gibt die Vorschau [Neue Chat-Oberfläche](/de/company-gpt/neue-chat-oberflaeche/). Derzeit nur im Demo-Zugang bzw. in Pilotumgebungen verfügbar; für Kundenumgebungen steht noch kein Termin fest.
