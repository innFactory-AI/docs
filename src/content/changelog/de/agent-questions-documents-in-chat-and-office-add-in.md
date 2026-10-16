---
title: "Agenten mit Rückfragen und Gedächtnis, Dokumente direkt im Chat und das Office-Add-in 3.0"
excerpt: "Agenten in CompanyGPT stellen Rückfragen und merken sich Wichtiges, companyFILES zeigt erzeugte Dokumente als Anhang im Chat, das Office-Add-in von companyM365 erscheint in Version 3.0, und in companyADMIN steuern Sie Agent-Fähigkeiten und Modelle pro Rolle."
date: 2026-08-31
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - Agents
  - companyFILES
  - companyRAG
  - companyM365
  - companyADMIN
  - companyTRANSLATE
  - companyDASHBOARD
  - MCP
---

Im August arbeiten Agenten enger mit Ihnen zusammen, erzeugte Dokumente rücken direkt in den Chat, und Administratoren erhalten deutlich mehr Stellschrauben.

## ✨ CompanyGPT

- **Agenten stellen Rückfragen**: Fehlt einem Agenten eine Angabe, fragt er nach – als Frage-Karte oder kurzes Formular – und arbeitet erst weiter, wenn Sie geantwortet haben. Mehr dazu unter [Agenten](/de/company-gpt/agenten/).
- **Agenten mit Gedächtnis**: Sofern Erinnerungen für Sie aktiviert sind, können Agenten [Erinnerungen](/de/company-gpt/erinnerungen/) speichern, aktualisieren und löschen. Im Agent Builder legen Sie fest, ob ein Agent seine Erinnerungen getrennt von Ihren übrigen führt.
- **GPT-5.6 Luna als Standard**: Neue Chats starten mit GPT-5.6 Luna. In Umgebungen mit Google-Modellen kommen Gemini 3.7 Flash und Gemini 3.5 Flash-Lite hinzu. Den Überblick gibt die [Modellauswahl](/de/company-gpt/modellauswahl/).
- **Code und Diagramme mitnehmen**: Code-Blöcke lassen sich direkt herunterladen. Mermaid-Diagramme lassen sich als Artefakt öffnen und als SVG oder PNG exportieren, und [Artefakte](/de/company-gpt/integrationen/artefakte/) können Sie im Vollbild ansehen.
- **Bearbeiten ohne Neugenerieren**: Beim Bearbeiten einer eigenen Nachricht entscheiden Sie, ob die Antwort neu erzeugt oder die Änderung nur gespeichert wird.
- **Lange Texte als Datei**: In den Einstellungen können Sie festlegen, dass sehr lange eingefügte Texte als Datei angehängt werden, statt das Eingabefeld zu füllen.
- **Eingabetaste während einer Antwort**: In den [Einstellungen](/de/company-gpt/einstellungen/#senden) legen Sie fest, ob `Enter` während einer laufenden Antwort die Antwort nachsteuert oder Ihre Nachricht für danach einreiht.
- **Alle Chats archivieren**: In den Einstellungen verschieben Sie alle Chats auf einmal ins Archiv.
- **Geteilte Chats und Kontext im Blick**: Chats mit aktivem geteiltem Link sind in der Chatliste markiert. Die [Kontextanzeige](/de/company-gpt/chat/#kontextanzeige) zeigt farbig, wie voll der Kontext ist.
- **Schlanker Kontext bei vielen Werkzeugen**: Bei MCP-Servern mit vielen Werkzeugen lädt CompanyGPT die Werkzeuge erst, wenn ein Agent sie braucht. So bleibt im Kontext mehr Platz für die eigentliche Aufgabe.

## 📄 companyFILES

- **Dokumente direkt im Chat**: Je nach Umgebung erscheinen von companyFILES erzeugte Dokumente zusätzlich zum Download-Link als Anhang-Karte in der Unterhaltung, Office-Dokumente mit Vorschau. Mehr unter [Dokumente erstellen](/de/company-gpt/addons/companyfiles/dokumente-erstellen/).
- **Angehängte Präsentationen erweitern**: Ein im Chat angehängtes PowerPoint-Deck lässt sich mit Folien aus seinen eigenen Layouts erweitern, Bildplatzhalter der Layouts können befüllt werden. Beim Einlesen erkennt companyFILES das Layout jeder Folie. Siehe [Präsentationen](/de/company-gpt/addons/companyfiles/praesentationen/).
- **KI-Kennzeichnung**: Neu erzeugte Dokumente tragen in ihren Metadaten einen Vermerk, dass sie mit KI erstellt wurden – passend zur Transparenzpflicht aus Art. 50 EU AI Act.
- **Ältere Download-Links funktionieren weiter**: Ist der im Link enthaltene Zugang abgelaufen, greift Ihre aktuelle Anmeldung, statt dass der Download scheitert.

## 📚 companyRAG

- **STACKIT für Embeddings**: Neben Azure und Google kann companyRAG Embeddings auch über STACKIT berechnen, sofern das in Ihrer Umgebung eingerichtet ist – etwa in [CompanyGPT Sovereign](/de/company-gpt/sovereign/).
- **Aufgeräumte Quellenkarten**: Pausieren, Bearbeiten und Löschen einer Quelle liegen jetzt im Menü „…“, direkt sichtbar bleibt **Jetzt synchronisieren**.
- **Keine Anmeldeschleife mehr**: Personen mit sehr vielen Gruppenmitgliedschaften landen beim Anmelden nicht mehr in einer Schleife.
- **Mehr Sicherheit**: Zugriffsprüfungen und die Trennung zwischen Nutzern wurden weiter gehärtet.

## 🧩 companyM365

- **Office-Add-in 3.0**: Das Add-in für Word, Excel, PowerPoint und Outlook erscheint in Version 3.0 und wird in weiteren Umgebungen ausgerollt. Sie öffnen es über ein Menü – in Word, Excel und PowerPoint auf der Registerkarte **Start**, in Outlook in der geöffneten E-Mail –, das zusätzlich Schnellaktionen je App anbietet – etwa Zusammenfassen und Korrektur lesen in Word, Formel erklären in Excel oder Antwort entwerfen in Outlook. Mehr unter [companyM365](/de/company-gpt/addons/companym365/).
- **Outlook auf dem Mac**: Das Add-in läuft auch in Outlook für Mac. Dafür ist ein zusätzlicher Einrichtungsschritt durch Ihre IT nötig.
- **OneNote schreiben**: Agenten legen OneNote-Seiten an und ergänzen bestehende. Markdown wird dabei in einfache Formatierung umgewandelt. Je nach Umgebung muss Ihre IT dafür einmal neu zustimmen.
- **Transkripte im Zugriff**: Agenten können Ihre eigenen Transkripte aus companyTRANSCRIBE auflisten und lesen, sofern companyTRANSCRIBE in Ihrer Umgebung aktiv ist.
- **Stabilerer Start**: Das Add-in hängt beim Öffnen nicht mehr.

## 🛡️ companyADMIN

- **Agent-Fähigkeiten pro Rolle**: Welche Agent-Fähigkeiten eine Rolle nutzen darf, legen Sie für jede Rolle einzeln fest – auch für ADMIN und USER.
- **Modelle pro Rolle und Modell-Labels**: Modelle lassen sich jeder Rolle einzeln freigeben, und die Modell-Labels für die Auswahl im Chat pflegen Sie direkt in companyADMIN.
- **Bibliotheks-Sync mit eigenem Git-Server**: Neben GitHub funktionieren jetzt auch selbst gehostete Git-Server wie GitLab oder Gitea. In CompanyGPT geänderte Skills lassen sich ins Repository zurückschreiben, bestehende Inhalte gesammelt exportieren.
- **Sichtbarkeit nachvollziehen**: Die Sichtbarkeit eines Inhalts zeigt den Besitzer und alle Freigaben mit ihrer Rechtestufe.
- **Marktplatz-Kategorien**: Die Kategorien des Agenten-Marktplatzes verwalten Sie direkt in companyADMIN.
- **Audit-Log**: Das fälschungssichere Audit-Log von CompanyGPT lässt sich in companyADMIN durchsuchen und mit **Kette prüfen** auf nachträgliche Änderungen kontrollieren.

Mehr zur Verwaltung finden Sie unter [companyADMIN](/de/company-gpt/addons/companyadmin/).

## 🌐 companyTRANSLATE

- **Google-Glossare aus Tabellenexporten**: CSV- und TSV-Glossare mit Semikolon als Trenner oder mit Kopfzeile werden jetzt zuverlässig bei Google für die Live-Übersetzung hinterlegt.
- **Beispiel-Glossar**: Der Download des Beispiel-Glossars funktioniert wieder.

## 📊 companyDASHBOARD

- **Rechnungsbetrag auf einen Blick**: Eine neue Kachel zeigt den voraussichtlichen Rechnungsbetrag des Monats aus Infrastruktur- und Token-Kosten laut innFactory Hub, mit Prognose und Stand-Datum. Bis 15 Tage nach Monatsende ist der Wert als vorläufig gekennzeichnet.
- **Klar gekennzeichnete Schätzungen**: Die im Dashboard berechneten Token-Kosten sind als Schätzung ausgewiesen. Verbindlich sind die Werte aus dem innFactory Hub.
