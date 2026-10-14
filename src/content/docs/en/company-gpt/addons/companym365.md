---
title: companyM365
description: Add-on that gives CompanyGPT agents access to the user's Microsoft 365 mailbox, calendar, files, Teams, OneNote and tasks – via Microsoft SSO and limited to the data the user is allowed to see.
---

With the companyM365 add-on, your CompanyGPT agents gain direct access to the user's Microsoft 365 environment. Through an [MCP Server](/en/company-gpt/integrationen/mcp-server/), agents can search emails, check appointments, read files from OneDrive and SharePoint, find Teams messages, manage tasks and much more – without the user having to open the respective Microsoft application themselves.

The add-on runs as part of your CompanyGPT environment and accesses your Microsoft 365 tenant via Microsoft Graph on behalf of the signed-in user (delegated permissions). As a result, an agent can only ever access the data that the respective user is allowed to see. No data is passed on to third parties.

## Access and Authentication

Access is granted via Microsoft Single Sign-On (SSO) using the existing company account (Microsoft Entra). No separate credentials are required. Every tool call is executed with the identity of the signed-in user, so the personal permissions and visibility rules from Microsoft 365 always apply.

If your organization manages permissions in [companyADMIN](/en/company-gpt/addons/companyadmin/), the use of companyM365 must be enabled there for your role or group.

:::caution[What companyM365 changes on its own]
- **Emails** are only ever created as **drafts**. companyM365 never sends emails on its own – sending always remains a deliberate decision made by the user in Outlook.
- **Calendar appointments are the exception:** when an agent creates, updates or cancels an appointment with attendees, Outlook sends the **invitation, update or cancellation immediately**. Without attendees, nothing is sent.
- Other write tools change data directly: Excel ranges, OneNote pages, tasks, inbox rules, categories and moving emails.

For write actions, ask the agent to summarize what it is about to do first.
:::

## companyM365 in CompanyGPT

The add-on is integrated like any other [MCP Server](/en/company-gpt/integrationen/mcp-server/) and can then be used in the [Chat](/en/company-gpt/chat/#integrationen) or assigned directly to an [Agent](/en/company-gpt/agenten/). During the conversation, the agent independently decides which of the tools described below is suitable for the user's request.

The available tools are grouped by Microsoft 365 area. If admin consent is missing for an area in your tenant, the tools remain visible; a call then returns the error `graph_consent_missing`, and all other tools keep working.

## Email (Outlook)

Search, read, organize and prepare emails. Emails are never sent, only created as drafts.

- **search_emails**: Full-text search across the entire mailbox, sorted by relevance.
- **list_recent_emails**: List the most recent emails in a folder (default: Inbox).
- **get_email**: Retrieve a single email in full – including the complete body, sender, recipients and attachment details.
- **read_email_attachment**: Read the content of an email attachment: text, Word, Excel, PowerPoint, CSV and HTML, attached emails and appointments, as well as OneDrive/SharePoint links. Images and scanned PDFs are passed on as images – the selected model must be able to process images. Not supported: .doc, .xls and .msg.
- **create_email_draft**: Create a new email as a draft (optionally formatted).
- **create_reply_draft**: Create a reply to an existing email as a draft.
- **create_forward_draft**: Create a forward of an existing email as a draft.
- **update_email_draft**: Edit an existing draft.
- **attach_file_to_draft**: Attach a file to a draft without sending it – from OneDrive/SharePoint, from the current chat or from [companyFILES](/en/company-gpt/addons/companyfiles/).
- **delete_email_draft**: Delete a draft (genuine drafts only).
- **categorize_email**: Assign Outlook categories to an email.
- **flag_email**: Flag an email for follow-up or clear the flag.
- **mark_email_read**: Mark an email as read or unread.
- **move_email**: Move an email to another folder.
- **create_mail_folder**: Create a new mail folder.

## Mailbox Settings

- **list_categories** / **create_category**: List or create Outlook categories.
- **list_inbox_rules** / **create_inbox_rule** / **delete_inbox_rule**: List, create and delete inbox rules. Rules that forward emails are not possible.

## Shared Mailboxes

Shared mailboxes the user has access to can only be read.

- **list_shared_mailboxes**: List the user's shared mailboxes.
- **list_shared_mailbox_folders**: List the folders of a shared mailbox.
- **list_shared_mailbox_emails**: List the emails in a folder of a shared mailbox.
- **search_shared_mailbox_emails**: Search a shared mailbox.
- **get_shared_mailbox_email**: Retrieve an email from a shared mailbox in full.

## Calendar

Find appointments, check availability and manage appointments.

- **search_calendar**: Find appointments by search term within a date range.
- **list_upcoming_events**: List the next upcoming appointments.
- **get_event**: Retrieve a single appointment in full – including attendees with their accept/decline status, location and Teams join link.
- **list_shared_calendar_events**: Show appointments from a colleague's shared calendar – including secondary calendars and with a search term. If the calendar is not shared, the agent receives a notice.
- **find_meeting_times**: Suggest suitable meeting times for the user, additional attendees as well as rooms and resources. The tool only suggests times and does not create an appointment.
- **get_schedule**: Retrieve free/busy times for up to 20 people and rooms.
- **create_calendar_event**: Create an appointment. **With attendees, the invitation is sent immediately.**
- **update_calendar_event**: Change an appointment. **Attendees receive the update immediately.**
- **cancel_calendar_event**: Cancel an appointment. **Attendees receive the cancellation immediately.**

## Files (OneDrive & SharePoint)

Search, read, upload and share files.

- **search_files**: Search files in the user's own OneDrive and under "Shared with me". The agent searches SharePoint team sites via **microsoft_search** or **find_sharepoint_sites**.
- **find_sharepoint_sites**: Find SharePoint sites including their document libraries by name or URL.
- **list_recent_files**: List recently opened or edited OneDrive files.
- **list_recently_used_files**: List recently used documents across all Microsoft 365 apps.
- **list_trending_files**: Show documents that are currently relevant around the user ("What is my team working on right now?").
- **read_file**: Retrieve the content of a file as text or Markdown (text, Word, Excel, PDF, and PowerPoint as a slide overview with speaker notes) – also via a sharing or SharePoint link. No content is returned for files over 25 MB.
- **list_folder_contents**: List the contents of a OneDrive folder or a SharePoint document library.
- **create_file_share_link**: Create a share link to a OneDrive or SharePoint file (view or edit access).
- **upload_small_file**: Upload a file to OneDrive.
- **delete_file**: Move a file to the recycle bin (recoverable, not a permanent deletion).

## Excel Workbooks

Read and edit Excel files in OneDrive or SharePoint without opening them.

- **workbook_get_overview**: Show the worksheets, tables and used ranges of a workbook.
- **workbook_read_range**: Read a cell range.
- **workbook_write_range**: Write values into a cell range. **The file is changed immediately.**
- **workbook_list_table_rows**: List the rows of an Excel table.

## People and Contacts

Find colleagues as well as personal contacts.

- **search_people**: Relevance-based search across the company directory and frequent contacts – by name, email or job title.
- **search_contacts**: Search the personal Outlook contacts.
- **get_person**: Retrieve detailed information about a person (job title, company, email addresses, phone numbers).

## Teams

Search and read Teams chats and channel messages.

- **search_teams_messages**: Search chats and channel messages by search term.
- **list_recent_chats**: List the most recently active Teams chats (one-on-one, group and meeting chats).
- **get_chat_message**: Retrieve a single Teams message.

## OneNote

Search, read and write notes.

- **search_onenote_pages**: Search OneNote pages by title and content.
- **read_onenote_page**: Retrieve the content of a OneNote page as text.
- **create_onenote_page**: Create a new OneNote page. Markdown is converted into simple formatting (headings, lists, tables, bold, italic, links); images are not carried over.
- **append_to_onenote_page**: Append text to the end of an existing OneNote page.

## Tasks (To Do & Planner)

View and manage tasks from Microsoft To Do and Microsoft Planner.

- **list_tasks**: List all tasks from Planner and To Do.
- **search_tasks**: Search tasks by title.
- **list_task_lists**: List the personal To Do lists.
- **get_task**: Retrieve a single task in full.
- **create_task**: Create a new To Do task.
- **update_task**: Change an existing To Do task.
- **complete_task**: Mark a To Do task as completed.
- **delete_task**: Delete a To Do task.
- **list_planner_plans** / **list_planner_buckets**: List the accessible Planner plans or their columns (buckets).
- **get_planner_task**: Retrieve a Planner task with description, checklist and assignments.
- **create_planner_task** / **update_planner_task**: Create or change Planner tasks, including assigning them to people.
- **complete_planner_task**: Mark a Planner task as completed.
- **delete_planner_task**: Delete a Planner task. **Planner has no recycle bin – deletion is permanent.**
- **list_group_members**: List the members of a Microsoft 365 group, for example to assign Planner tasks.

## Meeting Transcripts

Find and read transcripts of Teams meetings and from [companyTRANSCRIBE](/en/company-gpt/addons/company-transcribe/).

- **list_my_meeting_transcripts**: List transcripts of self-organized Teams meetings within a date range.
- **list_attended_meeting_transcripts**: List transcripts of all attended Teams meetings. This requires your administrator to additionally set up application permissions (`OnlineMeetings.Read.All`, `OnlineMeetingTranscript.Read.All`) and an Application Access Policy; otherwise the tool returns `app_access_missing`.
- **read_meeting_transcript**: Retrieve a meeting transcript – broken down by speaker, timestamp and text.
- **list_transcripts**: List the user's own transcriptions from companyTRANSCRIBE (not Teams meetings).
- **read_transcript**: Read a companyTRANSCRIBE transcription in full, with speaker labels if speaker recognition was active.

## Cross-source Search and Profile

Cross-source search as well as tools for orientation within the user's own Microsoft 365 account.

- **microsoft_search**: Cross-source search across files, SharePoint, emails, appointments and more.
- **get_my_profile**: Retrieve the user's own profile (name, email, job title, department, location) – so agents can interpret requests such as "my manager" or "my office".
- **list_mail_folders**: List the user's own mail folders.
- **list_calendars**: List the user's own calendars and the calendars of other people – each indicating whether it is the default, a shared or a secondary calendar.

## Microsoft 365 Groups

These tools work as soon as your administrator has granted consent for `Group.Read.All`; otherwise they return `graph_consent_missing`.

- **list_groups**: List the Microsoft 365 Groups the user is a direct member of.
- **search_group_conversations**: Search the Outlook conversations of a specific group (with a short preview).
- **read_group_conversation**: Read a group conversation in full – all posts with sender and time.
