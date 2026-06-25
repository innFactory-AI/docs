---
title: "Großes CompanyGPT-Update: Projekte, Live-Kostenanzeige, Google-Übersetzung & mehr"
excerpt: "Ein großes Plattform-Update bringt Chat-Projekte, Live-Kontext- und Kostenanzeige sowie angepinnte Chats, dazu Google-Übersetzung mit Glossaren, automatisches Ausfüllen von PDF-Formularen und Embeddings pro Sammlung in companyRAG."
date: 2026-06-25
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyTRANSLATE
  - companyFILES
  - companyRAG
---

Ein großes Release über die gesamte Plattform: CompanyGPT wechselt auf eine wichtige neue Basisversion mit Chat-Projekten, Live-Kontext- und Kostenanzeige sowie angepinnten Unterhaltungen – dazu eine zweite Übersetzungs-Engine, automatisches Ausfüllen von PDF-Formularen und mehr Kontrolle über Ihre Wissensdatenbanken.

## ✨ CompanyGPT

Die zugrunde liegende Plattform wurde auf eine wichtige neue Version aktualisiert und über alle Tenants ausgerollt. Highlights, die Sie sofort nutzen können:

- **Chat-Projekte**: Fassen Sie zusammengehörige Unterhaltungen in Projekten zusammen, damit größere Arbeiten an einem Ort organisiert bleiben.
- **Angepinnte Unterhaltungen**: Pinnen Sie wichtige Chats an den Anfang Ihrer Liste für schnellen Zugriff.
- **Live-Kontext- und Kostenanzeige**: Eine Kontextanzeige zeigt in Echtzeit, wie viel des Kontextfensters Sie nutzen – samt Token-Verbrauch und den damit verbundenen Kosten.
- **Zeitstempel für Nachrichten**: Fahren Sie über eine Nachricht, um zu sehen, wann genau sie gesendet wurde.
- **Ausgewählten Text zitieren**: Markieren Sie Text aus einem früheren Teil des Chats und zitieren Sie ihn direkt in Ihrer nächsten Nachricht, um das Modell auf die richtige Stelle zu fokussieren.
- **Gesprächsstarter**: Modelle können vorgeschlagene Einstiegs-Prompts anbieten, sodass der Start leichter fällt.
- **Überarbeitete Einstellungen**: Ein neu gestalteter, durchsuchbarer Einstellungsdialog macht es deutlich schneller, die gewünschte Option zu finden, und funktioniert besser auf Mobilgeräten.
- **Tastenkürzel**: Navigieren und interagieren Sie schneller mit der Oberfläche, ohne zur Maus zu greifen.

## 📄 companyFILES

- **Beliebige PDF-Formulare ausfüllen**: Laden Sie ein PDF mit Formularfeldern hoch und lassen Sie es automatisch ausfüllen – ohne Template-Registrierung oder Einrichtung.
- **Chat-Anhänge bearbeiten**: In einem Chat angehängte Dateien lassen sich jetzt direkt bearbeiten, sodass Sie ein Dokument verfeinern können, ohne von vorne zu beginnen.
- **Zuverlässigere Office-Ausgabe**: Erzeugte Word-, Excel- und PowerPoint-Dateien bestehen die Validierung jetzt sauberer und vermeiden Falschmeldungen bei eigentlich gültigen Dokumenten.

## 🌐 companyTRANSLATE

- **Google-Cloud-Translation-Engine**: Die Live-Textübersetzung kann jetzt zusätzlich zu Azure über Google Cloud Translation laufen – mit automatischem Fallback auf Azure, damit Ihre Übersetzungen auch dann funktionieren, wenn ein Anbieter nicht verfügbar ist.
- **Glossare in der Live-Übersetzung**: Wählen Sie ein Glossar direkt in der Live-Übersetzungsansicht, damit Ihre Fach- und Markenterminologie konsistent angewendet wird. Glossare werden über beide Übersetzungs-Engines synchron gehalten.
- **Rückmeldung zur Glossar-Bereitschaft**: Sie sehen jetzt vor der Übersetzung, ob ein Glossar für ein bestimmtes Sprachpaar bereit ist – so gibt es keine Überraschungen mitten in der Übersetzung.

## 📚 companyRAG

### ✨ Neue Funktionen

- **Embeddings pro Sammlung wählen**: Legen Sie pro Sammlung fest, welches Embedding-Modell aus mehreren Anbietern verwendet wird, um Embeddings an Ihre Inhalte und Sprache anzupassen.
- **Bildbeschreibungen für gescannte Dokumente**: companyRAG kann jetzt pro Sammlung Beschreibungen für Bilder in OCR-verarbeiteten Dokumenten erzeugen, sodass visuelle Inhalte in der Suche auffindbar werden.
- **Statistische Abfragen auf Datensätzen**: Verteilungs- und Statistikfunktionen stehen jetzt in Datensatz-Abfragen zur Verfügung, sodass Sie umfangreichere numerische Analysen direkt über Ihren extrahierten Daten durchführen können.
- **Bessere Website-Quellen**: Sitemap-Crawling und das Abrufen von Rohinhalten wurden verbessert, sodass Website-Quellen vollständiger indexiert werden.

### 🔧 Verbesserungen

- **Lesbare Freigabenamen**: Geteilte Sammlungen zeigen jetzt menschenlesbare Namen statt roher IDs.
- **Formatierte Abfrageergebnisse**: Datensatz-Abfrageergebnisse werden als saubere Markdown-Tabellen zurückgegeben, die leichter zu lesen sind.
- **Angenehmere Datensatz-Uploads**: Erneut hochgeladene Datensätze werden automatisch dedupliziert, und ersetzte Dateien werden nach einem erfolgreichen Upload bereinigt.

### 🐛 Fehlerbehebungen

- Hängengebliebene Indexierungs-Jobs werden jetzt automatisch wiederhergestellt, wenn ein Worker neu startet, sodass Uploads nicht stecken bleiben.
- Sammlungsfreigaben per E-Mail werden unabhängig von der Groß-/Kleinschreibung zuverlässig zugeordnet.

## 🎙️ companyTRANSCRIBE (Beta)

- **Audio-Transkription, jetzt in der Beta**: Unser neues Transkriptions-Add-on ist als Beta für ausgewählte Kunden verfügbar. Es wandelt Audioaufnahmen in durchsuchbare Transkripte um, lässt Sie das Audio abspielen, während das Transkript synchron mitmarkiert wird, und stellt Transkripte über eine schreibgeschützte Verbindung für Agenten bereit.
- **Sprecher­erkennung für bis zu 35 Sprecher**: Transkripte trennen automatisch, wer was gesagt hat, und unterscheiden bis zu 35 verschiedene Sprecher – ideal für Meetings, Interviews und Workshops.
- **MCP Server für CompanyGPT**: Nahtlose integration in CompanyGPT für weitere verarbeitung über Agenten.