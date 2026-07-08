---
title: companyTRANSCRIBE
description: DSGVO-konforme Transkriptionsanwendung im Microsoft-Tenant mit Audio- und Videotranskription, Sprechererkennung und automatischer Protokollierung ohne Datenweitergabe an Dritte.
---

companyTRANSCRIBE ist eine Transkriptionsanwendung, die wie der CompanyGPT vollständig im Microsoft-Tenant des Unternehmens betrieben wird. Sie unterstützt die präzise Transkription von Audio- und Videodateien sowie von Live-Aufnahmen, kombiniert mit einer intelligenten Sprechererkennung. Da keine Daten an externe Dienste übermittelt werden, erfüllt die Anwendung die Anforderungen der DSGVO.

## Zugang und Authentifizierung

Der Zugang erfolgt ausschließlich über Microsoft Single Sign-On (SSO) mit dem bestehenden Firmenkonto. Es werden keine separaten Zugangsdaten benötigt, und es findet keine Datenübertragung an Drittanbieter statt.

## Audio- und Videotranskription

companyTRANSCRIBE unterstützt zwei Transkriptionsmodi:

- **Datei-Transkription**: Upload von gängigen Audio- und Videoformaten (z. B. .mp3, .wav, .m4a, .mp4) bis zu 500 MB zur nachträglichen Transkription von aufgezeichneten Besprechungen
- **Live-Transkription**: Direkte Aufnahme und Echtzeit-Transkription von Gesprächen direkt im Browser über das Mikrofon des Endgeräts

![Transkription](transcribe-screenshot.png)

## Transkriptionshistorie und OneDrive-Integration

Alle Transkriptionen werden automatisch in einer benutzerbezogenen Historie protokolliert. Die transkribierten Texte sowie automatisch erstellte Protokolle können direkt in OneDrive gespeichert oder in verschiedenen Formaten (z. B. Word, TXT, SRT für Untertitel) exportiert werden. Ein lokales Caching außerhalb der Microsoft-Cloud findet nicht statt.

![Dateien transkribieren](transcribe-data.png)

## Sprechererkennung und Protokollvorlagen

Das System vereinfacht die Nachbereitung durch zwei integrierte Kernfeatures:

- **Automatische Sprechererkennung (Diarization)**: Erkennt unterschiedliche Stimmen im Audio und ordnet die Textabschnitte automatisch den jeweiligen Sprechern zu
- **Smarte Protokollvorlagen**: Auf Knopfdruck lassen sich aus dem Rohtranskript strukturierte Meeting-Protokolle, Zusammenfassungen oder To-do-Listen im gewünschten Format generieren

Beide Funktionen arbeiten vollautomatisch und lassen sich individuell anpassen.
