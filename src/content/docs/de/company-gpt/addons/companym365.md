---
title: companyM365
description: MCP-Addon, das CompanyGPT-Agenten sicheren Zugriff auf das Microsoft-365-Postfach, Kalender, Dateien, Teams, OneNote und Aufgaben des Nutzers gibt – per Microsoft-SSO und ausschließlich auf die eigenen Daten beschränkt.
---

Mit dem companyM365 Addon erhalten Ihre CompanyGPT-Agenten direkten Zugriff auf die Microsoft-365-Umgebung des Nutzers. Über einen [MCP Server](/de/company-gpt/integrationen/mcp-server/) können Agenten E-Mails durchsuchen, Termine prüfen, Dateien aus OneDrive und SharePoint lesen, Teams-Nachrichten finden, Aufgaben verwalten und vieles mehr – ohne dass der Nutzer die jeweilige Microsoft-Anwendung selbst öffnen muss.

Das Addon wird vollständig im Microsoft-Tenant des Unternehmens betrieben und arbeitet im Namen des angemeldeten Nutzers (delegierte Berechtigungen). Ein Agent kann dadurch grundsätzlich nur auf die Daten zugreifen, die der jeweilige Nutzer auch selbst einsehen darf. Es findet keine Datenweitergabe an Dritte statt.

## Zugang und Authentifizierung

Der Zugriff erfolgt über Microsoft Single Sign-On (SSO) mit dem bestehenden Firmenkonto (Microsoft Entra). Es werden keine separaten Zugangsdaten benötigt. Jeder Tool-Aufruf wird mit der Identität des angemeldeten Nutzers ausgeführt, sodass stets die persönlichen Berechtigungen und Sichtbarkeiten aus Microsoft 365 gelten.

:::note
Das Addon ist bewusst zurückhaltend mit schreibenden Aktionen. E-Mails werden ausschließlich als **Entwürfe** angelegt – der Versand bleibt immer eine bewusste Entscheidung des Nutzers in Outlook. companyM365 versendet niemals selbstständig E-Mails.
:::

## companyM365 in CompanyGPT

Das Addon wird wie jeder andere [MCP Server](/de/company-gpt/integrationen/mcp-server/) eingebunden und kann anschließend im [Chat](/de/company-gpt/chat/#integrationen) oder direkt einem [Agenten](/de/company-gpt/agenten/) zugewiesen werden. Der Agent entscheidet während des Gesprächs selbstständig, welches der unten beschriebenen Tools für die Anfrage des Nutzers geeignet ist.

Die verfügbaren Tools sind nach Microsoft-365-Bereichen gegliedert.

## E-Mail (Outlook)

Durchsuchen, Lesen und Vorbereiten von E-Mails. Schreibende Tools erstellen ausschließlich Entwürfe.

- **search_emails**: Volltextsuche über das gesamte Postfach, sortiert nach Relevanz.
- **list_recent_emails**: Die neuesten E-Mails eines Ordners auflisten (Standard: Posteingang).
- **get_email**: Eine einzelne E-Mail vollständig abrufen – inklusive komplettem Text, Absender, Empfängern und Anhang-Informationen.
- **read_email_attachment**: Inhalt eines E-Mail-Anhangs lesen (Text, Word, Excel, PDF).
- **create_email_draft**: Eine neue E-Mail als Entwurf anlegen.
- **create_reply_draft**: Eine Antwort auf eine bestehende E-Mail als Entwurf anlegen.
- **create_forward_draft**: Eine Weiterleitung einer bestehenden E-Mail als Entwurf anlegen.
- **update_email_draft**: Einen bestehenden Entwurf bearbeiten.
- **delete_email_draft**: Einen Entwurf löschen (nur tatsächliche Entwürfe).
- **categorize_email**: Outlook-Kategorien zu einer E-Mail zuweisen.
- **flag_email**: Eine E-Mail zur Nachverfolgung markieren oder die Markierung entfernen.

## Kalender

Termine finden, Details abrufen und freie Zeitfenster vorschlagen.

- **search_calendar**: Termine per Suchbegriff innerhalb eines Zeitraums finden.
- **list_upcoming_events**: Die nächsten anstehenden Termine auflisten.
- **get_event**: Einen einzelnen Termin vollständig abrufen – inklusive Teilnehmern mit Zu-/Absagen, Ort und Teams-Beitrittslink.
- **list_shared_calendar_events**: Termine aus dem freigegebenen Kalender einer Kollegin oder eines Kollegen anzeigen.
- **find_meeting_times**: Passende Besprechungstermine für den Nutzer und weitere Teilnehmer vorschlagen.

## Dateien (OneDrive & SharePoint)

Dateien suchen, lesen, hochladen und teilen – über OneDrive und alle zugänglichen SharePoint-Seiten.

- **search_files**: Dateien über OneDrive und zugängliche SharePoint-Seiten suchen.
- **list_recent_files**: Zuletzt geöffnete oder bearbeitete OneDrive-Dateien auflisten.
- **list_recently_used_files**: Zuletzt verwendete Dokumente über alle Microsoft-365-Apps hinweg auflisten.
- **list_trending_files**: Dokumente anzeigen, die im Umfeld des Nutzers gerade relevant sind ("Woran arbeitet mein Team gerade?").
- **read_file**: Den Inhalt einer Datei als Text abrufen (Text, Word, Excel, PDF).
- **list_folder_contents**: Den Inhalt eines OneDrive-Ordners auflisten.
- **create_file_share_link**: Einen Freigabelink zu einer OneDrive- oder SharePoint-Datei erstellen (Lese- oder Bearbeitungszugriff).
- **upload_small_file**: Eine Datei in OneDrive hochladen.
- **delete_file**: Eine Datei in den Papierkorb verschieben (wiederherstellbar, kein endgültiges Löschen).

## Personen und Kontakte

Kolleginnen und Kollegen sowie persönliche Kontakte finden.

- **search_people**: Relevanzbasierte Suche im Firmenverzeichnis und nach häufigen Kontakten – nach Name, E-Mail oder Position.
- **search_contacts**: Die persönlichen Outlook-Kontakte durchsuchen.
- **get_person**: Detailinformationen zu einer Person abrufen (Position, Firma, E-Mail-Adressen, Telefonnummern).

## Teams

Teams-Chats und Kanal-Nachrichten durchsuchen und lesen.

- **search_teams_messages**: Chats und Kanal-Nachrichten nach einem Suchbegriff durchsuchen.
- **list_recent_chats**: Die zuletzt aktiven Teams-Chats auflisten (Einzel-, Gruppen- und Besprechungschats).
- **get_chat_message**: Eine einzelne Teams-Nachricht abrufen.

## OneNote

Notizen durchsuchen und lesen.

- **search_onenote_pages**: OneNote-Seiten nach Titel und Inhalt durchsuchen.
- **read_onenote_page**: Den Inhalt einer OneNote-Seite als Text abrufen.

## Aufgaben (Planner & To Do)

Aufgaben aus Microsoft Planner und Microsoft To Do anzeigen und verwalten.

- **list_tasks**: Alle Aufgaben aus Planner und To Do auflisten.
- **search_tasks**: Aufgaben nach Titel durchsuchen.
- **list_task_lists**: Die persönlichen To-Do-Listen auflisten.
- **get_task**: Eine einzelne Aufgabe vollständig abrufen.
- **create_task**: Eine neue To-Do-Aufgabe erstellen.
- **update_task**: Eine bestehende To-Do-Aufgabe ändern.
- **complete_task**: Eine To-Do-Aufgabe als erledigt markieren.
- **delete_task**: Eine To-Do-Aufgabe löschen.

## Besprechungsprotokolle

Transkripte von Teams-Besprechungen finden und lesen.

- **list_my_meeting_transcripts**: Transkripte selbst organisierter Teams-Besprechungen in einem Zeitraum auflisten.
- **list_attended_meeting_transcripts**: Transkripte aller besuchten Teams-Besprechungen auflisten (sofern in Ihrem Tenant aktiviert).
- **read_meeting_transcript**: Ein Besprechungstranskript abrufen – aufgeteilt nach Sprecher, Zeitstempel und Text.

## Übergreifende Suche und Profil

Bereichsübergreifende Suche sowie Tools zur Orientierung im eigenen Microsoft-365-Konto.

- **microsoft_search**: Quellenübergreifende Suche über Dateien, SharePoint, E-Mails, Termine und mehr.
- **get_my_profile**: Das eigene Profil abrufen (Name, E-Mail, Position, Abteilung, Standort) – damit Agenten Anfragen wie "mein Vorgesetzter" oder "mein Büro" einordnen können.
- **list_mail_folders**: Die eigenen Mail-Ordner auflisten.
- **list_calendars**: Die eigenen Kalender auflisten.

## Microsoft-365-Gruppen (optional)

Sofern in Ihrem Tenant aktiviert, stehen zusätzlich Tools für Microsoft-365-Gruppen zur Verfügung.

- **list_groups**: Die Microsoft-365-Gruppen auflisten, in denen der Nutzer direktes Mitglied ist.
- **search_group_conversations**: Die Outlook-Unterhaltungen einer bestimmten Gruppe durchsuchen.
