---
title: "Eine Oberfläche für alle Addons, companyLEARN und ein neu gegliedertes companyADMIN"
excerpt: "Die Addons übernehmen die Oberfläche des Chats, companyLEARN bringt Schulungen in CompanyGPT, und companyADMIN ist neu gegliedert – mit Status-Seite und Insights anstelle von companyDASHBOARD. companyFILES liest E-Mails, Archive und alte Office-Formate, companyTRANSCRIBE übersteht Verbindungsabbrüche, und das Office-Add-in von companyM365 sieht aus wie der Chat und arbeitet über mehrere Fenster hinweg."
date: 2026-10-16
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
  - API
---

Im Oktober wachsen die Addons zu einer gemeinsamen Oberfläche zusammen. Dazu kommen companyLEARN in Version 1.0, ein neu aufgebautes companyADMIN und viele Verbesserungen im Detail.

## 🧭 Eine Oberfläche für alle Addons

- **Aufgebaut wie der Chat**: companyADMIN, companyFILES, companyRAG, companyTRANSLATE, companyTRANSCRIBE, companyLEARN, der Admin-Bereich von companyM365 und Alle Apps haben jetzt dieselbe Seitenleiste wie der Chat: oben **Neuer Chat** und **Alle Apps**, darunter das Menü des Addons, unten das Kontomenü mit **Design** (hell, dunkel, wie im System oder mit hohem Kontrast), je nach Addon der **Sprache** und **Abmelden**. **Abmelden** meldet Sie auch im Chat ab. Auf dem Smartphone wird die Seitenleiste zum ausklappbaren Menü. Mehr unter [Gemeinsame Oberfläche](/de/company-gpt/addons/gemeinsame-oberflaeche/).
- **Eine Anmeldung für alles**: Die Addons nutzen Ihre Anmeldung im Chat, eine eigene Anmeldung entfällt. Fehlt die Anmeldung oder der Zugriff, erklärt eine einheitliche Seite, was zu tun ist.
- **Alle Apps**: Die Übersicht [Alle Apps](/de/company-gpt/addons/alle-apps/) zeigt die Anwendungen, die für Sie freigeschaltet sind – als eigene Seite und, sofern in Ihrer Umgebung verfügbar, als Liste **Apps** in der Seitenleiste des Chats. Welche Kacheln Sie sehen, legt Ihr Unternehmen fest, je nach Umgebung über die Rechte in companyADMIN.

## 🎓 companyLEARN 1.0

- **Schulungen in CompanyGPT**: [companyLEARN](/de/company-gpt/addons/companylearn/), das Addon für interne Schulungen, gibt es jetzt in Version 1.0 mit neuer Oberfläche. Kurse bestehen aus Kapiteln mit Lektionen als Video oder Text, ein Kapitel kann mit einem Quiz samt Bestehensgrenze abschließen. Standardmäßig öffnet sich ein Kapitel erst, wenn das vorherige abgeschlossen ist. Dashboard und Kurskatalog zeigen Lernenden ihren Fortschritt.
- **Kurse verwalten**: In der **Kursverwaltung** legen Personen mit dem Recht „Kurse verwalten“ Kurse an, ordnen Kapitel und Lektionen, laden Videos (MP4, WebM) hoch und veröffentlichen fertige Kurse. Für die Anbindung anderer Systeme gibt es eine REST-API mit eigenen API-Schlüsseln.
- **Lernen im Chat**: Über den MCP-Server **Learn** finden Agenten passende Kurse, schreiben Sie ein, zeigen Ihren Fortschritt und öffnen Lektionen und Quizze direkt im Chat. Das Ergebnis eines Quiz kommt automatisch in der Unterhaltung an.
- **Zugriff**: Wer companyLEARN nutzen und Kurse verwalten darf, steuern Admins in der Regel in companyADMIN mit den Rechten „Kurse nutzen“ und „Kurse verwalten“. companyLEARN wird pro Umgebung freigeschaltet – sprechen Sie uns an, wenn Sie es nutzen möchten.

## 🛡️ companyADMIN

- **Neu gegliedert**: Das Menü ist in **Insights**, **Status**, **Zugriff**, **Inhalte** und **Konfiguration** geordnet. Statt Dialogen öffnen Agents, Rollen, Gruppen und weitere Einträge Detailseiten mit Reitern. Die Oberfläche folgt der Sprache Ihres Browsers und lässt sich im Kontomenü zwischen Deutsch und Englisch umstellen. Mehr unter [companyADMIN](/de/company-gpt/addons/companyadmin/).
- **Status-Seite**: [Status](/de/company-gpt/addons/companyadmin/status/) zeigt auf einen Blick, ob alle Addons erreichbar sind, welche Konfiguration gilt, wie die Rollen eingerichtet sind und woher Admin-Rechte kommen. Unter **Protokolle** finden Sie das companyADMIN-Protokoll mit jeder Änderung über companyADMIN und das companyGPT-Protokoll, das bisherige Audit-Log.
- **Zugriff auf Addons steuern**: Wo der Zugriff auf die Addons über companyADMIN gesteuert wird, vergeben Sie Rechte wie „Übersetzen nutzen“, „Transkribieren nutzen“, „Wissen nutzen“, „Microsoft 365 nutzen“ oder „Kurse nutzen“ an Rollen, je nach Umgebung an Gruppen oder für alle; „Insights ansehen“ nur an Rollen und Gruppen. Die Kacheln unter **Alle Apps** folgen diesen Rechten. Siehe [Erweiterungen](/de/company-gpt/addons/companyadmin/erweiterungen/).
- **Modellzugriff als Matrix**: Unter **Modellzugriff** stellen Sie die Modelle aller Rollen in einer Tabelle ein, bis hinunter zum einzelnen Modell.

## 📊 companyDASHBOARD

- **Abgelöst durch Insights**: Die Auswertungen von companyDASHBOARD finden Sie jetzt in [Insights](/de/company-gpt/addons/companyadmin/insights/) in companyADMIN. companyDASHBOARD ist seit 4. Oktober abgeschaltet; die bisherige Adresse leitet auf companyADMIN weiter.

## 📄 companyFILES

- **E-Mails, Archive und alte Formate lesen**: Mit der Erweiterung zum Lesen weiterer Formate, sofern in Ihrer Umgebung aktiv, liest companyFILES Outlook-Nachrichten (.msg) und E-Mails (.eml) samt Anhängen, ZIP-Archive, ältere Office-Dateien (.doc, .xls, .ppt) sowie RTF, OpenDocument, EPUB, Jupyter-Notebooks und TIFF. Gescannte Inhalte werden per Texterkennung erfasst. Laden Sie die Dateien in companyFILES hoch, liest der Agent sie im Chat Seite für Seite. Einzelne Anhänge oder Archiv-Einträge speichern Sie mit **Als Dokument speichern** als eigenes Dokument. Mehr unter [Dokumente erstellen](/de/company-gpt/addons/companyfiles/dokumente-erstellen/).
- **Vorschau per Klick**: Ein Klick auf ein Dokument öffnet die Vorschau, kleine Bilder erhalten ein Vorschaubild und lassen sich vergrößern. Ordner gibt es nicht mehr.
- **Vorlage in den Chat**: Ist companyFILES im Chat geöffnet, schreibt **Vorlage verwenden** einen passenden Prompt in den Chat.
- **Vorlagen ohne Programmcode**: Ausdrücke in Word-[Vorlagen](/de/company-gpt/addons/companyfiles/vorlagen/) sind auf Pfade, Operatoren, die Befehle FOR, IF und EXEC sowie eine Liste einfacher Funktionen beschränkt. Vorlagen mit Programmcode, etwa Arrow-Functions oder `.map`, brechen mit einer klaren Meldung ab. Bitte prüfen Sie eigene Vorlagen.
- **Bilder in PDF und PowerPoint**: Bilder werden nur von öffentlich erreichbaren Adressen oder aus Ihren Dateien geladen.
- **Klarere Hinweise**: Der Upload-Dialog nennt die unterstützten Dateitypen, und die Diagramm-Ansicht zeigt ihre Bedienelemente weitgehend auf Deutsch. Liegt im Chat von einer Datei nur ein Textauszug vor, bittet companyFILES darum, die Originaldatei erneut hochzuladen.

## 📚 companyRAG

- **Excel als Datensatz**: Excel-Dateien funktionieren zuverlässig als Datensatz, und jedes Blatt einer Arbeitsmappe wird zu einer eigenen Tabelle.
- **Deutsche Zahlen- und Datumsformate**: CSV-Dateien mit Dezimalkomma und deutschen Datumsangaben werden richtig erkannt.
- **Große Uploads**: Große Dateien lassen sich auch über langsamere Verbindungen hochladen, ohne dass der Upload vorzeitig abbricht.
- **Berechtigungen aus Teams-Websites**: Freigaben von SharePoint-Websites, die zu einem Team gehören, werden korrekt übernommen.
- **Zugriff über companyADMIN**: Wer Wissensdatenbanken nutzen darf, steuern Admins je nach Umgebung in companyADMIN mit dem Recht „Wissen nutzen“.
- **Klare Meldung bei fehlendem Zugriff**: Fragt ein Agent eine Sammlung ab, auf die Sie keinen Zugriff haben, erhält er eine verständliche Fehlermeldung, statt die Anfrage immer wieder zu versuchen. Die Zugriffsprüfungen wurden zudem weiter gehärtet.
- **Feinschliff**: Fehlende deutsche Texte sind ergänzt. Google-Drive-Quellen bieten keinen Zeitplan mehr an, weil Änderungen ohnehin automatisch übernommen werden.

## 🎙️ companyTRANSCRIBE

- **Aufnahmen überstehen Verbindungsabbrüche**: Das Audio bleibt im Browser, bis die Aufnahme gespeichert ist, und wird automatisch hochgeladen, sobald die Verbindung zurück ist. Stoppen Sie ohne Verbindung, wartet companyTRANSCRIBE und bietet **Jetzt erneut versuchen**, **Audio herunterladen** und **Verwerfen** an. Aufnahmen aus einem geschlossenen Tab finden Sie auf der Aufnahmeseite unter **Noch nicht gespeicherte Aufnahmen**. Mehr unter [Aufnehmen](/de/company-gpt/addons/company-transcribe/aufnehmen/).
- **Geschützte Aufnahmen**: Verlassen Sie während einer Aufnahme die Seite, wird die Aufnahme nach einer Rückfrage beendet und gespeichert. Läuft die Anmeldung ab, nimmt companyTRANSCRIBE weiter auf und speichert die Aufnahme.
- **Genaue Sprünge**: Ein Klick auf einen Zeitstempel springt auch in langen Aufnahmen genau an die richtige Stelle.
- **Schneller Einstieg**: **Aufnehmen** und **Hochladen** erreichen Sie über das Menü und über Schaltflächen im Seitenkopf der Übersicht **Transkripte**.

## 🧩 companyM365

- **Add-in im Look des Chats**: Das [Office-Add-in](/de/company-gpt/addons/companym365/office-add-in/) sieht in Word, Excel, PowerPoint, Outlook und im Teams-Tab jetzt aus wie der CompanyGPT-Chat und folgt dem hellen, dunklen oder Kontrast-Design von Office und Teams. Den Verlauf durchsuchen Sie, Chats lassen sich anheften, umbenennen und löschen.
- **Mehr Chat im Dokument**: Mit `/` rufen Sie Prompts und Schnellaktionen auf, mit `#` fügen Sie – sofern in Ihrer Umgebung verfügbar – Dateien, E-Mails, Termine und Transkripte als Referenz ein. Änderungen zeigt das Add-in standardmäßig als Vorschlagskarten zum Übernehmen oder Verwerfen, in Word gibt es zusätzlich einen Modus für nachverfolgte Änderungen. Eine laufende Antwort können Sie stoppen und je nach Umgebung nachsteuern.
- **Workflows je App**: Excel analysiert Daten mit Code, sofern die Code-Ausführung freigeschaltet ist, sonst mit Formeln, und fügt Ergebnistabellen per Klick als neues Blatt ein. PowerPoint schlägt zuerst eine Gliederung vor und baut dann das Deck. Outlook schlägt Termine vor, bereitet Meetings vor und räumt den Posteingang auf. Ausgeführt wird erst, was Sie bestätigen; Einladungen verschickt Outlook dann sofort. Word und Outlook geben Coaching-Hinweise zu Ton, Klarheit und Struktur.
- **Mehrere Office-Fenster**: Ist das Add-in in mehreren Fenstern geöffnet, liest der Assistent auf Wunsch auch die anderen Fenster und fügt Inhalte über App-Grenzen hinweg ein, etwa eine Tabelle aus Word als neues Blatt in Excel. Eine Änderung in einem anderen Fenster führt er erst aus, wenn Sie sie im eigenen Chat bestätigt haben. Mehr unter [Mehrere Office-Fenster](/de/company-gpt/addons/companym365/mehrere-fenster/).
- **Zuverlässiger Start**: Jeder Start beginnt mit dem Standardmodell, und Sie können schreiben, bevor die Agentenliste geladen ist. Startet Office den Add-in-Bereich neu, ist der Chat wieder da. Auch sehr große oder fehlerhafte Dateien und Bilder verarbeitet das Add-in jetzt zuverlässig.
- **Mehr Werkzeuge im Chat**: Agenten lesen freigegebene Kalender und Zweitkalender, finden SharePoint-Websites mit ihren Dokumentbibliotheken und prüfen die Verfügbarkeit von bis zu 20 Personen und Räumen.
- **Verwaltung für Admins**: Ein eigener Admin-Bereich stellt das App-Paket für Office-Add-in und Teams-Tab zum Hochladen ins Microsoft 365 Admin Center bereit. Zugang gewährt das Recht „Microsoft 365 verwalten“, die Nutzung steuert „Microsoft 365 nutzen“ in companyADMIN.
- **Teams-Bot und Office-Werkzeuge für Agents** (derzeit nur in Pilotumgebungen): Ein Teams-Bot beantwortet Fragen in Chats und Kanälen; nutzt eine Antwort Ihre Daten, etwa Microsoft-365-Werkzeuge oder Dateien, sehen nur Sie sie. Gespeicherte Agents erhalten im Add-in Zugriff auf die Office-Werkzeuge.

## 🌐 companyTRANSLATE

- **Zugriff über companyADMIN**: Wer übersetzen und globale Glossare verwalten darf, steuern Admins je nach Umgebung in companyADMIN mit „Übersetzen nutzen“ und „Glossare verwalten“. Ohne Berechtigung erscheint die Seite **Kein Zugriff**.
- **Mehr Formate, 30 Tage Aufbewahrung**: Im Bereich **Dokumente** übersetzen Sie jetzt auch Excel-, TXT-, Markdown- und HTML-Dateien bis 40 MB. Übersetzungen werden 30 Tage aufbewahrt; laden Sie Ergebnisse, die Sie länger brauchen, rechtzeitig herunter. Mehr unter [Dokument übersetzen](/de/company-gpt/addons/company-translate/dokument-uebersetzen/).
- **Sprachnamen in Ihrer Sprache**: In der englischen Oberfläche erscheinen die Sprachen jetzt mit englischen Namen. Der Upload-Dialog für Glossare beschreibt die Kopfzeile jetzt korrekt als optional.
- **Übersetzen im Chat** (derzeit nur in Pilotumgebungen): Ein Agent übersetzt angehängte Dokumente und Texte direkt im Chat, wahlweise mit gespeicherten Glossaren, einer Glossar-Datei oder Begriffspaaren im Prompt. Das Ergebnis kommt als Datei in den Chat. Mehr unter [Übersetzen im Chat](/de/company-gpt/addons/company-translate/im-chat/).

## ✨ CompanyGPT

- **Bis zu 50 Anhänge pro Nachricht**: Sie können einer Nachricht jetzt bis zu 50 Dateien mitgeben.
- **AI Gateway: größere Anfragen, mehr Zeit**: In Umgebungen mit AI Gateway passen Anfragen bis 128 MiB statt bis 10 MiB durch; die Grenzen der KI-Anbieter gelten weiterhin, etwa 20 MB bei Gemini. Bis eine Antwort beginnt, etwa bei Denkmodellen, dürfen jetzt bis zu zehn Minuten statt einer vergehen.
- **AI Gateway: robuster bei Engpässen**: Pausiert das Gateway ein gedrosseltes Modell kurzzeitig, antwortet es mit `429` und der verbleibenden Wartezeit statt mit `502`. Ist bei einem Anbieter das Kontingent erschöpft, weicht es auf eine andere Bereitstellung desselben Modells aus. Mehr unter [AI Gateway API](/de/api/ai-gateway/).

## 🔜 Demnächst

- **Neue Chat-Oberfläche**: Ein neues Eingabefeld mit einer Palette für Anhänge und Werkzeuge, Projekte mit eigenen Anweisungen und Referenzdateien, Chat-Optionen in der Kopfzeile, Benachrichtigungen und geplante Chats, die einen Agenten zu festen Zeiten starten. Einen ersten Eindruck gibt die Vorschau [Neue Chat-Oberfläche](/de/company-gpt/neue-chat-oberflaeche/). Derzeit nur im Demo-Zugang bzw. in Pilotumgebungen verfügbar.
