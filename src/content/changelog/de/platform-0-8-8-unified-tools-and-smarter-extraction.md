---
title: "Plattform-Update 0.8.8, ein einheitliches Tool-Erlebnis und smartere Dokumentenextraktion"
excerpt: "CompanyGPT wechselt auf Plattform-Version 0.8.8 – mit On-the-fly-Erstellung von Skills, Subagenten, präziserem Kostentracking und schnellerer Navigation – dazu eine einheitliche Tool-Seitenleiste und ein überarbeitetes, zuverlässigeres companyRAG."
date: 2026-07-07
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyRAG
  - companyTRANSLATE
---

CompanyGPT wechselt auf die neueste Plattform-Version 0.8.8, die Add-on-Tools erhalten einen einheitlichen Look und eine gemeinsame Seitenleiste, und companyRAG wird nachvollziehbarer und einfacher einstellbar.

## ✨ CompanyGPT

Die zugrunde liegende Plattform wurde über alle Tenants hinweg auf die neueste Version 0.8.8 aktualisiert. Highlights dieser Version:

- **Skills spontan erstellen**: Agenten können jetzt neue Skills direkt in einer Unterhaltung anlegen – ein einmal beschriebener Ablauf lässt sich so speichern und später wiederverwenden.
- **Subagenten**: Agenten können Teile einer Aufgabe an spezialisierte Subagenten abgeben, was längere, mehrstufige Abläufe zuverlässiger macht.
- **Präziseres Kontext- & Kostentracking**: Die Kontext-Anzeige gleicht sich jetzt mit den tatsächlich vom Modellanbieter gemeldeten Tokens ab, sodass die angezeigten Verbrauchs- und Kostenwerte genauer sind.
- **Schnellere Navigation in langen Chats**: Eine Nachrichten-Minimap ermöglicht das schnelle Springen in langen Unterhaltungen – inklusive Ein-Klick-Sprung zur neuesten Nachricht.
- **Anhänge bleiben in geteilten Links erhalten**: Beim Teilen eines Unterhaltungslinks werden die Dateianhänge als Snapshot gesichert, sodass Empfänger sie weiterhin öffnen können.
- **Einheitliche Add-on-Seitenleiste**: Deine Add-on-Tools erscheinen jetzt gemeinsam in der Seitenleiste – der Wechsel zwischen Chat und Tools wie companyTRANSLATE oder companyTRANSCRIBE ist damit nur einen Klick entfernt.

## 📚 companyRAG

### ✨ Neue Funktionen

- **Live-Einblick in die Warteschlange**: Die Jobs-Seite zeigt jetzt die globale Warteschlangenlänge und die genaue Position deines Jobs an, sodass du abschätzen kannst, wie lange ein Indexierungsjob voraussichtlich warten muss.
- **Editierbarer Extraktions-Prompt**: Du kannst den für die Extraktion verwendeten Prompt jetzt direkt bearbeiten und steuerst so, wie Daten aus deinen Dokumenten gezogen werden. Der Extraktionsdialog ist zudem vollständig lokalisiert.
- **Überarbeitete Navigation**: Die obere Navigation in der Seitenleiste wurde neu strukturiert, damit du schneller zwischen den Bereichen wechseln kannst.

### 🔧 Verbesserungen

- **Große Dokumente extrahieren zuverlässig**: Die Extraktion arbeitet große Dateien jetzt per Cursor-Fortsetzung mit Seitenlimit ab, sodass umfangreiche Dokumente nicht mehr fehlschlagen oder mittendrin hängen bleiben.
- **Schärfere gescannte Seiten**: Scan-artige Seiten werden jetzt wortgetreu transkribiert statt zusammengefasst, sodass beim Indexieren gescannter Dokumente nichts verloren geht.
- **Vollständige SharePoint-Synchronisierung**: Große, flache SharePoint-Ordner werden jetzt korrekt paginiert, sodass wirklich jede Datei darin synchronisiert wird.
- **Stabilere Extraktion**: Extraktionsläufe mit Gemini sind robuster – mit genügend Spielraum zum „Nachdenken“ und sauberer Behandlung von Sonderfällen in den Antworten.
- **Klarere Beta-Kennzeichnung**: Die Extraktion und die Bildbeschreibung sind jetzt als Beta gekennzeichnet, sodass ihr Reifegrad transparent ist.

### 🐛 Fehlerbehebungen

- Dateien, die zu keiner Collection gehören, werden wieder angezeigt.

## 🌐 companyTRANSLATE

- **Überarbeitete Oberfläche**: companyTRANSLATE übernimmt jetzt den gemeinsamen companyUI-Look – mit einer neuen vertikalen Seitenleiste anstelle des bisherigen horizontalen Headers und flüssigerem Skeleton-Loading beim Start der App.

## 🎙️ companyTRANSCRIBE (Beta)

- **Einheitlicher Look und schnelle Navigation**: companyTRANSCRIBE übernimmt das gemeinsame companyUI-Design – mit schnellen Links zurück zum Chat und zu den anderen Tools.
- **Geschützte Aufnahmen**: Laufende Aufnahmen sind jetzt gegen versehentliche Navigation und Session-Ablauf geschützt, sodass eine lange Aufnahme nicht mitten in der Sitzung verloren geht.
- **Zuverlässigere Uploads**: Browser-Aufnahmen werden vor der Übermittlung in Mono-MP3 umgewandelt, was die Transkription zuverlässiger macht.
