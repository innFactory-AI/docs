---
title: "GPT-6, Insights in companyADMIN und Tabellen als Datensätze"
excerpt: "GPT-6 Luna wird in den meisten Umgebungen Standardmodell, Dateien landen ohne Umweg im Chat, und „Code ausführen“ ist in allen Umgebungen aktiv. companyADMIN zeigt Nutzung und Kosten in Insights, companyRAG macht Tabellen per SQL abfragbar und bindet WebDAV und FTP an, und companyM365 liest freigegebene Postfächer."
date: 2026-09-30
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - Agents
  - Skills
  - companyADMIN
  - companyRAG
  - companyFILES
  - companyTRANSCRIBE
  - companyTRANSLATE
  - companyM365
  - companyDASHBOARD
---

Der September bringt eine neue Modellgeneration, einen aufgeräumten Chat und neue Auswertungen für Administratoren.

## ✨ CompanyGPT

- **GPT-6 Luna ist Standard**: Neue Chats starten in den meisten Umgebungen mit GPT-6 Luna, GPT-6 Sol steht als zweites GPT-6-Modell bereit. In Umgebungen mit Google-Modellen kommt Gemini 3.8 Flash hinzu. Der Eintrag „auto“ in der Modellauswahl entfällt. Details in der [Modellauswahl](/de/company-gpt/modellauswahl/).
- **Dateien direkt hochladen**: Die Büroklammer lädt Dateien ohne Zielauswahl hoch. Bilder und PDFs gehen direkt an das Modell, sofern es sie verarbeiten kann, Office-Dokumente als Text. Excel-Dateien werden direkt eingelesen statt über die Texterkennung. Siehe [Dateiverarbeitung](/de/company-gpt/dateiverarbeitung/).
- **Mehr Spielraum**: Sie können einer Nachricht bis zu 25 Anhänge mitgeben. Agenten binden bis zu 50 Unteragenten ein; ohne eigene Angabe gilt ein Standardwert von 150 Schritten pro Durchlauf.
- **„Code ausführen“ überall**: Der [Code Interpreter](/de/company-gpt/code-interpreter/) ist jetzt in allen Umgebungen aktiv. Damit lassen sich Agenten mit Code-Ausführung überall nutzen und angehängte Excel-Dateien mit Code auswerten. Administratoren können die Code-Ausführung pro Rolle einschränken.
- **Einstellungen neu gegliedert**: Die [Einstellungen](/de/company-gpt/einstellungen/) sind neu sortiert. Neu sind unter anderem Uhrzeitformat und Wochenbeginn sowie Hochkontrast-Designs.
- **Chats schneller finden**: Die Chatliste lässt sich filtern und sortieren, etwa nach aktiven, archivierten oder mit Lesezeichen versehenen Chats. Angepinnte Chats, Modelle und Agenten ordnen Sie per Drag & Drop, und einen Chat ziehen Sie direkt auf ein Projekt.
- **Kontext komprimieren**: Wird der Platz knapp, komprimieren Sie den Kontext über die [Kontextanzeige](/de/company-gpt/chat/#kontextanzeige). CompanyGPT ersetzt den bisherigen Verlauf dann durch eine Zusammenfassung.
- **Übersichtlichere Werkzeugaufrufe**: Mehrere Werkzeugaufrufe eines Agenten werden gruppiert angezeigt, fehlgeschlagene Aufrufe sind gezählt. Ein temporärer Chat ist deutlich gekennzeichnet.
- **Skills gezielt zuweisen**: Im Agent Builder legen Sie fest, ob ein Agent alle, keine oder nur ausgewählte [Skills](/de/company-gpt/skills/) nutzt.

## 🛡️ companyADMIN

- **Insights: Nutzung und Kosten**: Der neue Bereich [Insights](/de/company-gpt/addons/companyadmin/insights/) zeigt, wie Ihre Organisation CompanyGPT nutzt – mit den Reitern Übersicht, Agents, Modelle, MCP-Tools, Kosten und Aktivität, wählbarem Zeitraum, einer Kachel mit den Reselling-Kosten aus dem innFactory Hub und einem Export als Excel-Datei. Die Zahlen werden alle zehn Minuten aktualisiert. Personen, die nur die Auswertungen sehen sollen, erhalten Zugriff auf Insights ohne Administrationsrechte.
- **Agent-Detailseiten**: Ein Klick auf einen Agenten zeigt Besitzer, Modell, Anweisungen, Werkzeuge, MCP-Server, Skills, Unteragenten, Sichtbarkeit und Nutzung. Die Agentenliste nennt Besitzer, Modell, die Anfragen der letzten 30 Tage und die letzte Nutzung.
- **Rollen einfacher anlegen**: Läuft die Rollenvergabe über Entra-Gruppen, lässt sich eine neue Rolle direkt aus einer Entra-Gruppe übernehmen. Sie startet mit den Funktionsrechten von USER. Fehlt eine für die Anmeldung benötigte Rolle, legt companyADMIN sie selbst an.
- **Rollenrechte zentral**: Die Rechte der Rollen werden jetzt in companyADMIN verwaltet statt in der Grundkonfiguration. Welche Vorgaben gelten und welche Ihrer Anpassungen wirken, zeigt die neue Seite **Vorgabe & Anpassungen**.
- **Modellfreigaben überarbeitet**: Modellfreigaben pro Rolle greifen jetzt für alle Anbieter zuverlässig. Bitte prüfen Sie einmal Ihre Einschränkungen für Azure-Modelle und setzen Sie sie bei Bedarf neu.
- **Labels für Agenten**: Ein Modell-Label kann jetzt auch auf einen Agenten zeigen. Die Option, nur Modelle mit Label zuzulassen, warnt vorab deutlich vor den Folgen.
- **Alle MCP-Server im Blick**: Die Übersicht der MCP-Tools zeigt jeden Server mit seiner Herkunft – aus der Bereitstellung, der Admin-Konfiguration, einem Plugin oder von Nutzern angelegt.

## 📚 companyRAG

- **Tabellen als Datensätze**: Mit der Option **Tabellen als Datensätze** speichert eine [Sammlung](/de/company-gpt/addons/companyrag/sammlungen/) CSV-, Excel- und Parquet-Dateien als per SQL abfragbare Datensätze, statt sie zeilenweise einzubetten – auch wenn die Dateien aus SharePoint, Nextcloud oder Google Drive stammen. Vorhandene Tabellen stellen Sie mit **Bestehende Tabellen zu Datensätzen konvertieren** um.
- **Neue Quellen: WebDAV und FTP**: Ordner auf WebDAV-Servern (z. B. ownCloud oder Synology) und auf FTP- oder FTPS-Servern lassen sich als [Quelle](/de/company-gpt/addons/companyrag/quellen/) synchronisieren, jeweils mit eigenen, verschlüsselt gespeicherten Zugangsdaten. GitHub-Quellen können einen eigenen Personal Access Token oder einen SSH-Deploy-Key nutzen.
- **Eigene Dateiendungen**: Für eine Quelle lassen sich zusätzliche Dateiendungen freigeben, die als reiner Text gelesen werden. MDX-Dateien werden wie Markdown indexiert.
- **Synchronisierung nachvollziehbar**: Die Quellenkarte zeigt Ausgang (erfolgreich, teilweise, fehlgeschlagen), Grund und Kennzahlen des letzten Laufs. SharePoint-Quellen übernehmen nach dem ersten Lauf Änderungen automatisch und werden zusätzlich regelmäßig vollständig abgeglichen.
- **Robustere Synchronisierung**: Lange Läufe aus SharePoint und Google Drive überstehen den Ablauf der Anmeldung, und ein unvollständiges Ordnerlisting führt nicht mehr zum Löschen von Dokumenten. Dateien gelöschter Quellen werden aus dem Index entfernt, damit keine veralteten Inhalte in Antworten auftauchen.
- **Superadmins**: Superadmins sehen und verwalten alle Sammlungen der Organisation. Die Dateien fremder Sammlungen können sie nicht lesen.
- **Verständliche Fehler**: Scheitert das Indexieren eines Datensatzes, steht der Grund direkt an der Datei.

## 📄 companyFILES

- **Weniger Unterbrechungen bei hoher Last**: Das Anfragelimit gilt jetzt pro Person statt für die gesamte Umgebung. Viele gleichzeitige Nutzer bremsen sich dadurch nicht mehr gegenseitig aus.

## 🎙️ companyTRANSCRIBE

- **Größere Uploads**: Audiodateien bis 200 MB und 240 Minuten Länge lassen sich hochladen. Längere Dateien werden sofort abgelehnt.

## 🌐 companyTRANSLATE

- **Glossare aus Tabellenprogrammen**: CSV- und TSV-Glossare mit Semikolon als Trenner oder mit Kopfzeile funktionieren jetzt auch bei der Dokumentübersetzung, bereits hochgeladene Glossare werden automatisch korrigiert. Sprachnamen in der Kopfzeile wie „Deutsch;Englisch (en)“ werden erkannt.

## 🧩 companyM365

- **Mehr Quellen für Anhänge**: Agenten hängen Dateien an Mail-Entwürfe an – aus einem OneDrive- oder SharePoint-Link, aus dem aktuellen Chat, aus companyFILES oder, im Add-in, das geöffnete Office-Dokument. Die E-Mail selbst wird dabei nicht versendet.
- **Freigegebene Postfächer lesen**: Agenten können freigegebene Postfächer, auf die Sie Zugriff haben, durchsuchen und lesen. Je nach Umgebung muss Ihre IT dafür einmal neu zustimmen.
- **Zuverlässigeres Add-in**: Das Add-in arbeitet stabiler, etwa bei kurzen Verbindungsstörungen und bei mehreren Werkzeugaufrufen hintereinander. Die Schnellaktionen in Outlook funktionieren wieder.

## 📊 companyDASHBOARD

- **Nachfolger in companyADMIN**: Die Auswertungen aus companyDASHBOARD gibt es jetzt als Insights in companyADMIN. companyDASHBOARD läuft vorerst parallel weiter.
