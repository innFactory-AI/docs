---
title: "Neue Wissensquellen, bidirektionale Glossare und CompanyGPT in Office"
excerpt: "companyRAG indexiert jetzt GitHub-Repositories und SharePoint-Seiten, lässt Sie Wissenspakete selbst anlegen und Dateien in großen Mengen aufräumen. companyTRANSLATE-Glossare funktionieren in beide Richtungen und werden automatisch angewendet, und companyM365 bringt CompanyGPT direkt in Word, Excel, PowerPoint, Outlook und Teams."
date: 2026-07-28
author:
  name: innFactory Team
lang: de
tags:
  - companyRAG
  - companyTRANSLATE
  - companyM365
  - companyTRANSCRIBE
---

Ihre Wissensdatenbanken erhalten zwei neue Quellen und Self-Service-Pakete, Glossare werden deutlich einfacher nutzbar, und CompanyGPT zieht in Ihre Microsoft-365-Anwendungen ein.

## 📚 companyRAG

### ✨ Neue Funktionen

- **GitHub als Wissensquelle**: Verbinden Sie Ihr GitHub-Konto mit einem Personal Access Token, durchsuchen Sie Ihre Repositories, wählen Sie Branch und Ordner und legen Sie fest, welche Dateitypen indexiert werden. Markdown-Dokumentation aus einem Repository wird so ohne Export-Schritt zu durchsuchbarem Wissen.
- **SharePoint-Seiten und News**: Beim Einrichten einer SharePoint-Quelle wählen Sie jetzt, was indexiert wird – Dokumente, Website-Seiten und News oder beides. Inhalte, die nur als SharePoint-Seite existieren, sind damit endlich Teil Ihrer Suchergebnisse.
- **Wissenspakete selbst anlegen** `Preview`: Ein neuer Assistent auf der Sammlungen-Seite erstellt ein kuratiertes Wissenspaket auf Basis eines GitHub-Repositories oder eines SharePoint-Ordners – inklusive optionaler Startstruktur mit README-, Index- und Log-Datei, sodass eine neue Wissensbasis sofort befüllt werden kann. Diese basieren auf dem Open Knowledge Format (OKF). 
- **Dateien in großen Mengen verwalten**: Wählen Sie mehrere Dateien gleichzeitig aus und löschen Sie sie in einem Schritt. Neue Statusfilter für Dateien und Jobs machen es deutlich leichter, genau die gesuchten Einträge zu finden.
- **Bildverarbeitung pro Sammlung**: Legen Sie pro Sammlung fest, wie Bilder und gescannte Seiten verarbeitet werden – so werden scan-lastige Sammlungen wortgetreu transkribiert statt zusammengefasst.
- **Übersichtlichere Navigation**: Die Seitenleiste ist jetzt in Gruppen unterteilt, sodass Sie Dateien, Quellen, Sammlungen und Jobs schneller erreichen.

### 🔧 Verbesserungen

- **Übrig gebliebene Einträge aufräumen**: Einträge, die von fehlgeschlagenen oder entfernten Dokumenten zurückgeblieben sind, lassen sich jetzt einfacher löschen – Ihre Dateiliste zeigt damit, was wirklich indexiert ist.
- **Vollständige SharePoint-Berechtigungen**: Berechtigungen aus klassischen SharePoint-Websitegruppen und aus „Jeder außer externen Benutzern“ werden nun ebenfalls aufgelöst, sodass Dokumente, auf die Sie Zugriff haben, auch in Ihren Ergebnissen erscheinen.
- **Angemeldet bleiben**: Ihre Sitzung wird still im Hintergrund erneuert – kein Ladebildschirm und kein Rücksprung auf die Dateiseite mitten in der Arbeit.
- **Sicherere API-Keys**: Die API-Keys-Seite weist jetzt ausdrücklich darauf hin, worauf ein API-Key Zugriff gewährt, bevor Sie ihn erstellen.

### 🐛 Fehlerbehebungen

- Quellenangaben verweisen jetzt auf die richtige Seitenzahl statt um eine Seite verschoben.
- Die PowerPoint-Extraktion nennt die korrekten Foliennummern.

## 🌐 companyTRANSLATE

- **Bidirektionale Glossare**: Ein hochgeladenes Glossar funktioniert jetzt in beide Sprachrichtungen. Sie laden Deutsch → Englisch einmal hoch und es gilt auch für Englisch → Deutsch – keine zweite Datei, keine doppelte Pflege. Das gilt für CSV-, TSV- und TMX-Uploads.
- **Glossare mit automatischer Spracherkennung**: Wenn Sie die Ausgangssprache automatisch erkennen lassen, wird das passende Glossar jetzt automatisch angewendet, statt übersprungen zu werden.
- **Große TMX-Dateien scheitern nicht mehr**: TMX-Dateien über der 10-MB-Grenze des Übersetzungsdienstes werden automatisch in ein Begriffsglossar umgewandelt, sodass Sie auch große Translation Memories nutzen können.
- **Fehlerbehebung**: Kleinere Bugfixes und verbesserungen der Usability.

## 🧩 companyM365

Die tiefere Integration in Microsoft 365 als Preview.

- **CompanyGPT direkt in Office**: Ein Add-in für Word, Excel, PowerPoint und Outlook bringt einen CompanyGPT-Chat direkt neben Ihr Dokument. Der Agent sieht das Dokument – Folien und Zellbereiche auch als Bild – und bearbeitet es direkt, von Formatierung und Tabellen bis zu Kommentaren.
- **Prompts und Skills direkt zur Hand**: Tippen Sie im Add-in `/` für Ihre gespeicherten Prompts und `$` für Ihre Skills, um wiederkehrende Aufgaben ohne erneutes Tippen zu starten.
- **Mehr Möglichkeiten in Outlook und Excel**: Mail-Triage, Postfacheinstellungen und zusätzliche Arbeitsmappen-Werkzeuge erlauben dem Agenten, mehr Routinearbeit in Postfach und Tabellen zu übernehmen. E-Mails werden weiterhin ausschließlich als Entwurf vorbereitet.
- **Bessere Präsentationen**: Präsentationen lassen sich aus Ihren Unternehmensvorlagen aufbauen, und Bilder können per URL, aus einer Datei oder aus Ihrem Drive eingefügt werden.

## 🔜 Demnächst

- **Voiceover in companyTRANSCRIBE**: companyTRANSCRIBE erhält das Gegenstück zur Transkription. Schreiben oder fügen Sie einen Text ein, wählen Sie eine Stimme und erzeugen Sie daraus gesprochenes Audio – etwa für Schulungsunterlagen, Produktvideos oder barrierefreie Fassungen Ihrer Dokumente. Das Ergebnis können Sie anhören, den Text bearbeiten und neu vertonen, frühere Fassungen bleiben in der Historie. Auch Ihre Agenten können Vertonungen erstellen. Zunächst bei ausgewählten Kunden, die allgemeine Verfügbarkeit folgt.
- **Budgets und Kostenkontrolle im AI-Gateway**: Zentrale Budgets pro Organisation und pro Nutzer, mit Unterlimits je Modellanbieter und Zuordnung zu Kostenstellen – damit KI-Ausgaben transparent und planbar bleiben. Derzeit im Pilotbetrieb auf unseren eigenen Umgebungen und ausgewählten Kunden.
