---
title: companyM365
description: Addon, das CompanyGPT-Agenten Zugriff auf Postfach, Kalender, Dateien, Teams, OneNote und Aufgaben in Microsoft 365 gibt – per Microsoft-SSO und beschränkt auf die Daten, die der Nutzer selbst sehen darf.
---

Mit dem companyM365 Addon erhalten Ihre CompanyGPT-Agenten direkten Zugriff auf die Microsoft-365-Umgebung des Nutzers. Über einen [MCP Server](/de/company-gpt/integrationen/mcp-server/) können Agenten E-Mails durchsuchen, Termine prüfen, Dateien aus OneDrive und SharePoint lesen, Teams-Nachrichten finden, Aufgaben verwalten und vieles mehr – ohne dass der Nutzer die jeweilige Microsoft-Anwendung selbst öffnen muss.

Das Addon läuft als Teil Ihrer CompanyGPT-Umgebung und greift über Microsoft Graph im Namen des angemeldeten Nutzers auf Ihren Microsoft-365-Tenant zu (delegierte Berechtigungen). Ein Agent kann dadurch grundsätzlich nur auf die Daten zugreifen, die der jeweilige Nutzer auch selbst einsehen darf. Es findet keine Datenweitergabe an Dritte statt.

## Zugang und Authentifizierung

Der Zugriff erfolgt über Microsoft Single Sign-On (SSO) mit dem bestehenden Firmenkonto (Microsoft Entra). Es werden keine separaten Zugangsdaten benötigt. Jeder Tool-Aufruf wird mit der Identität des angemeldeten Nutzers ausgeführt, sodass stets die persönlichen Berechtigungen und Sichtbarkeiten aus Microsoft 365 gelten.

Verwaltet Ihr Unternehmen die Rechte über [companyADMIN](/de/company-gpt/addons/companyadmin/), muss die Nutzung von companyM365 dort für Ihre Rolle oder Gruppe freigegeben sein.

:::caution[Was companyM365 selbstständig ändert]
- **E-Mails** werden ausschließlich als **Entwürfe** angelegt. companyM365 versendet niemals selbstständig E-Mails – der Versand bleibt immer eine bewusste Entscheidung des Nutzers in Outlook.
- **Kalendertermine sind die Ausnahme:** Legt ein Agent einen Termin mit Teilnehmenden an, ändert oder sagt ihn ab, verschickt Outlook die **Einladung, Aktualisierung bzw. Absage sofort**. Ohne Teilnehmende wird nichts versendet.
- Weitere schreibende Werkzeuge ändern Daten direkt: Excel-Bereiche, OneNote-Seiten, Aufgaben, Posteingangsregeln, Kategorien und das Verschieben von E-Mails.

Lassen Sie sich bei schreibenden Aktionen vom Agenten vorher zusammenfassen, was er tun wird.
:::

## companyM365 in CompanyGPT

Das Addon wird wie jeder andere [MCP Server](/de/company-gpt/integrationen/mcp-server/) eingebunden und kann anschließend im [Chat](/de/company-gpt/chat/#integrationen) oder direkt einem [Agenten](/de/company-gpt/agenten/) zugewiesen werden. Der Agent entscheidet während des Gesprächs selbstständig, welches der unten beschriebenen Tools für die Anfrage des Nutzers geeignet ist.

Die verfügbaren Tools sind nach Microsoft-365-Bereichen gegliedert. Fehlt für einen Bereich die Admin-Zustimmung in Ihrem Tenant, bleiben die Tools sichtbar; ein Aufruf meldet dann den Fehler `graph_consent_missing`, alle anderen Tools funktionieren weiter.

## E-Mail (Outlook)

Durchsuchen, Lesen, Ordnen und Vorbereiten von E-Mails. E-Mails werden nie versendet, sondern nur als Entwürfe angelegt.

- **search_emails**: Volltextsuche über das gesamte Postfach, sortiert nach Relevanz.
- **list_recent_emails**: Die neuesten E-Mails eines Ordners auflisten (Standard: Posteingang).
- **get_email**: Eine einzelne E-Mail vollständig abrufen – inklusive komplettem Text, Absender, Empfängern und Anhang-Informationen.
- **read_email_attachment**: Inhalt eines E-Mail-Anhangs lesen: Text, Word, Excel, PowerPoint, CSV und HTML, angehängte E-Mails und Termine sowie OneDrive-/SharePoint-Links. Bilder und gescannte PDFs werden als Bild übergeben – dafür muss das gewählte Modell Bilder verarbeiten können. Nicht unterstützt: .doc, .xls und .msg.
- **create_email_draft**: Eine neue E-Mail als Entwurf anlegen (wahlweise formatiert).
- **create_reply_draft**: Eine Antwort auf eine bestehende E-Mail als Entwurf anlegen.
- **create_forward_draft**: Eine Weiterleitung einer bestehenden E-Mail als Entwurf anlegen.
- **update_email_draft**: Einen bestehenden Entwurf bearbeiten.
- **attach_file_to_draft**: Eine Datei an einen Entwurf anhängen, ohne ihn zu versenden – aus OneDrive/SharePoint, aus dem aktuellen Chat oder aus [companyFILES](/de/company-gpt/addons/companyfiles/).
- **delete_email_draft**: Einen Entwurf löschen (nur tatsächliche Entwürfe).
- **categorize_email**: Outlook-Kategorien zu einer E-Mail zuweisen.
- **flag_email**: Eine E-Mail zur Nachverfolgung markieren oder die Markierung entfernen.
- **mark_email_read**: Eine E-Mail als gelesen oder ungelesen markieren.
- **move_email**: Eine E-Mail in einen anderen Ordner verschieben.
- **create_mail_folder**: Einen neuen Mail-Ordner anlegen.

## Postfach-Einstellungen

- **list_categories** / **create_category**: Outlook-Kategorien auflisten bzw. anlegen.
- **list_inbox_rules** / **create_inbox_rule** / **delete_inbox_rule**: Posteingangsregeln auflisten, anlegen und löschen. Regeln, die E-Mails weiterleiten, sind nicht möglich.

## Freigegebene Postfächer

Freigegebene Postfächer, auf die der Nutzer Zugriff hat, können nur gelesen werden.

- **list_shared_mailboxes**: Die freigegebenen Postfächer des Nutzers auflisten.
- **list_shared_mailbox_folders**: Die Ordner eines freigegebenen Postfachs auflisten.
- **list_shared_mailbox_emails**: Die E-Mails eines Ordners in einem freigegebenen Postfach auflisten.
- **search_shared_mailbox_emails**: Ein freigegebenes Postfach durchsuchen.
- **get_shared_mailbox_email**: Eine E-Mail aus einem freigegebenen Postfach vollständig abrufen.

## Kalender

Termine finden, Verfügbarkeiten prüfen und Termine verwalten.

- **search_calendar**: Termine per Suchbegriff innerhalb eines Zeitraums finden.
- **list_upcoming_events**: Die nächsten anstehenden Termine auflisten.
- **get_event**: Einen einzelnen Termin vollständig abrufen – inklusive Teilnehmern mit Zu-/Absagen, Ort und Teams-Beitrittslink.
- **list_shared_calendar_events**: Termine aus dem freigegebenen Kalender einer Kollegin oder eines Kollegen anzeigen – auch aus Zweitkalendern und mit Suchbegriff. Ist der Kalender nicht freigegeben, erhält der Agent einen Hinweis.
- **find_meeting_times**: Passende Besprechungstermine für den Nutzer, weitere Teilnehmer sowie Räume und Ressourcen vorschlagen. Das Tool schlägt nur vor und legt keinen Termin an.
- **get_schedule**: Frei/Belegt-Zeiten für bis zu 20 Personen und Räume abrufen.
- **create_calendar_event**: Einen Termin anlegen. **Mit Teilnehmenden wird die Einladung sofort versendet.**
- **update_calendar_event**: Einen Termin ändern. **Teilnehmende erhalten die Aktualisierung sofort.**
- **cancel_calendar_event**: Einen Termin absagen. **Teilnehmende erhalten die Absage sofort.**

## Dateien (OneDrive & SharePoint)

Dateien suchen, lesen, hochladen und teilen.

- **search_files**: Dateien im eigenen OneDrive und unter „Mit mir geteilt“ suchen. SharePoint-Teamseiten durchsucht der Agent über **microsoft_search** oder **find_sharepoint_sites**.
- **find_sharepoint_sites**: SharePoint-Seiten samt Dokumentbibliotheken per Name oder URL finden.
- **list_recent_files**: Zuletzt geöffnete oder bearbeitete OneDrive-Dateien auflisten.
- **list_recently_used_files**: Zuletzt verwendete Dokumente über alle Microsoft-365-Apps hinweg auflisten.
- **list_trending_files**: Dokumente anzeigen, die im Umfeld des Nutzers gerade relevant sind ("Woran arbeitet mein Team gerade?").
- **read_file**: Den Inhalt einer Datei als Text oder Markdown abrufen (Text, Word, Excel, PDF sowie PowerPoint als Folienübersicht mit Sprechernotizen) – auch über einen Freigabe- oder SharePoint-Link. Bei Dateien über 25 MB wird kein Inhalt geliefert.
- **list_folder_contents**: Den Inhalt eines OneDrive-Ordners oder einer SharePoint-Dokumentbibliothek auflisten.
- **create_file_share_link**: Einen Freigabelink zu einer OneDrive- oder SharePoint-Datei erstellen (Lese- oder Bearbeitungszugriff).
- **upload_small_file**: Eine Datei in OneDrive hochladen.
- **delete_file**: Eine Datei in den Papierkorb verschieben (wiederherstellbar, kein endgültiges Löschen).

## Excel-Arbeitsmappen

Excel-Dateien in OneDrive oder SharePoint lesen und bearbeiten, ohne sie zu öffnen.

- **workbook_get_overview**: Blätter, Tabellen und genutzte Bereiche einer Arbeitsmappe anzeigen.
- **workbook_read_range**: Einen Zellbereich lesen.
- **workbook_write_range**: Werte in einen Zellbereich schreiben. **Die Datei wird direkt geändert.**
- **workbook_list_table_rows**: Die Zeilen einer Excel-Tabelle auflisten.

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

Notizen durchsuchen, lesen und schreiben.

- **search_onenote_pages**: OneNote-Seiten nach Titel und Inhalt durchsuchen.
- **read_onenote_page**: Den Inhalt einer OneNote-Seite als Text abrufen.
- **create_onenote_page**: Eine neue OneNote-Seite anlegen. Markdown wird in einfache Formatierung umgewandelt (Überschriften, Listen, Tabellen, fett, kursiv, Links); Bilder werden nicht übernommen.
- **append_to_onenote_page**: Text am Ende einer bestehenden OneNote-Seite anfügen.

## Aufgaben (To Do & Planner)

Aufgaben aus Microsoft To Do und Microsoft Planner anzeigen und verwalten.

- **list_tasks**: Alle Aufgaben aus Planner und To Do auflisten.
- **search_tasks**: Aufgaben nach Titel durchsuchen.
- **list_task_lists**: Die persönlichen To-Do-Listen auflisten.
- **get_task**: Eine einzelne Aufgabe vollständig abrufen.
- **create_task**: Eine neue To-Do-Aufgabe erstellen.
- **update_task**: Eine bestehende To-Do-Aufgabe ändern.
- **complete_task**: Eine To-Do-Aufgabe als erledigt markieren.
- **delete_task**: Eine To-Do-Aufgabe löschen.
- **list_planner_plans** / **list_planner_buckets**: Die zugänglichen Planner-Pläne bzw. deren Spalten (Buckets) auflisten.
- **get_planner_task**: Eine Planner-Aufgabe mit Beschreibung, Checkliste und Zuweisungen abrufen.
- **create_planner_task** / **update_planner_task**: Planner-Aufgaben anlegen bzw. ändern, inklusive Zuweisung an Personen.
- **complete_planner_task**: Eine Planner-Aufgabe als erledigt markieren.
- **delete_planner_task**: Eine Planner-Aufgabe löschen. **Planner hat keinen Papierkorb – das Löschen ist endgültig.**
- **list_group_members**: Die Mitglieder einer Microsoft-365-Gruppe auflisten, z. B. um Planner-Aufgaben zuzuweisen.

## Besprechungsprotokolle

Transkripte von Teams-Besprechungen und aus [companyTRANSCRIBE](/de/company-gpt/addons/company-transcribe/) finden und lesen.

- **list_my_meeting_transcripts**: Transkripte selbst organisierter Teams-Besprechungen in einem Zeitraum auflisten.
- **list_attended_meeting_transcripts**: Transkripte aller besuchten Teams-Besprechungen auflisten. Dafür muss Ihr Administrator zusätzlich Anwendungsberechtigungen (`OnlineMeetings.Read.All`, `OnlineMeetingTranscript.Read.All`) und eine Application Access Policy einrichten; andernfalls meldet das Tool `app_access_missing`.
- **read_meeting_transcript**: Ein Besprechungstranskript abrufen – aufgeteilt nach Sprecher, Zeitstempel und Text.
- **list_transcripts**: Die eigenen Transkriptionen aus companyTRANSCRIBE auflisten (keine Teams-Besprechungen).
- **read_transcript**: Eine Transkription aus companyTRANSCRIBE vollständig lesen, mit Sprecherangaben, wenn die Sprechererkennung aktiv war.

## Übergreifende Suche und Profil

Bereichsübergreifende Suche sowie Tools zur Orientierung im eigenen Microsoft-365-Konto.

- **microsoft_search**: Quellenübergreifende Suche über Dateien, SharePoint, E-Mails, Termine und mehr.
- **get_my_profile**: Das eigene Profil abrufen (Name, E-Mail, Position, Abteilung, Standort) – damit Agenten Anfragen wie "mein Vorgesetzter" oder "mein Büro" einordnen können.
- **list_mail_folders**: Die eigenen Mail-Ordner auflisten.
- **list_calendars**: Die eigenen Kalender und die Kalender anderer Personen auflisten – jeweils mit Angabe, ob es sich um den Standard-, einen geteilten oder einen Zweitkalender handelt.

## Microsoft-365-Gruppen

Diese Tools funktionieren, sobald Ihr Administrator die Zustimmung für `Group.Read.All` erteilt hat; andernfalls melden sie `graph_consent_missing`.

- **list_groups**: Die Microsoft-365-Gruppen auflisten, in denen der Nutzer direktes Mitglied ist.
- **search_group_conversations**: Die Outlook-Unterhaltungen einer bestimmten Gruppe durchsuchen (mit kurzer Vorschau).
- **read_group_conversation**: Eine Gruppen-Unterhaltung vollständig lesen – alle Beiträge mit Absender und Zeitpunkt.
