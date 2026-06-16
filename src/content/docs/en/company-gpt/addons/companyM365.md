---
title: companyM365
description: MCP add-on that gives CompanyGPT agents secure access to the user's Microsoft 365 mailbox, calendar, files, Teams, OneNote and tasks – via Microsoft SSO and strictly limited to the user's own data.
---

With the companyM365 add-on, your CompanyGPT agents gain direct access to the user's Microsoft 365 environment. Through an [MCP Server](/en/company-gpt/integrationen/mcp-server/), agents can search emails, check appointments, read files from OneDrive and SharePoint, find Teams messages, manage tasks and much more – without the user having to open the respective Microsoft application themselves.

The add-on runs entirely within the company's Microsoft tenant and acts on behalf of the signed-in user (delegated permissions). As a result, an agent can only ever access the data that the respective user is allowed to see. No data is passed on to third parties.

## Access and Authentication

Access is granted via Microsoft Single Sign-On (SSO) using the existing company account (Microsoft Entra). No separate credentials are required. Every tool call is executed with the identity of the signed-in user, so the personal permissions and visibility rules from Microsoft 365 always apply.

:::note
The add-on is deliberately conservative with write actions. Emails are only ever created as **drafts** – sending always remains a deliberate decision made by the user in Outlook. companyM365 never sends emails on its own.
:::

## companyM365 in CompanyGPT

The add-on is integrated like any other [MCP Server](/en/company-gpt/integrationen/mcp-server/) and can then be used in the [Chat](/en/company-gpt/chat/#integrationen) or assigned directly to an [Agent](/en/company-gpt/agenten/). During the conversation, the agent independently decides which of the tools described below is suitable for the user's request.

The available tools are grouped by Microsoft 365 area.

## Email (Outlook)

Search, read and prepare emails. Write tools only ever create drafts.

- **search_emails**: Full-text search across the entire mailbox, sorted by relevance.
- **list_recent_emails**: List the most recent emails in a folder (default: Inbox).
- **get_email**: Retrieve a single email in full – including the complete body, sender, recipients and attachment details.
- **read_email_attachment**: Read the content of an email attachment (text, Word, Excel, PDF).
- **create_email_draft**: Create a new email as a draft.
- **create_reply_draft**: Create a reply to an existing email as a draft.
- **create_forward_draft**: Create a forward of an existing email as a draft.
- **update_email_draft**: Edit an existing draft.
- **delete_email_draft**: Delete a draft (genuine drafts only).
- **categorize_email**: Assign Outlook categories to an email.
- **flag_email**: Flag an email for follow-up or clear the flag.

## Calendar

Find appointments, retrieve details and suggest free time slots.

- **search_calendar**: Find appointments by search term within a date range.
- **list_upcoming_events**: List the next upcoming appointments.
- **get_event**: Retrieve a single appointment in full – including attendees with their accept/decline status, location and Teams join link.
- **list_shared_calendar_events**: Show appointments from a colleague's shared calendar.
- **find_meeting_times**: Suggest suitable meeting times for the user and additional attendees.

## Files (OneDrive & SharePoint)

Search, read, upload and share files – across OneDrive and all accessible SharePoint sites.

- **search_files**: Search files across OneDrive and accessible SharePoint sites.
- **list_recent_files**: List recently opened or edited OneDrive files.
- **list_recently_used_files**: List recently used documents across all Microsoft 365 apps.
- **list_trending_files**: Show documents that are currently relevant around the user ("What is my team working on right now?").
- **read_file**: Retrieve the content of a file as text (text, Word, Excel, PDF).
- **list_folder_contents**: List the contents of a OneDrive folder.
- **create_file_share_link**: Create a share link to a OneDrive or SharePoint file (view or edit access).
- **upload_small_file**: Upload a file to OneDrive.
- **delete_file**: Move a file to the recycle bin (recoverable, not a permanent deletion).

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

Search and read notes.

- **search_onenote_pages**: Search OneNote pages by title and content.
- **read_onenote_page**: Retrieve the content of a OneNote page as text.

## Tasks (Planner & To Do)

View and manage tasks from Microsoft Planner and Microsoft To Do.

- **list_tasks**: List all tasks from Planner and To Do.
- **search_tasks**: Search tasks by title.
- **list_task_lists**: List the personal To Do lists.
- **get_task**: Retrieve a single task in full.
- **create_task**: Create a new To Do task.
- **update_task**: Change an existing To Do task.
- **complete_task**: Mark a To Do task as completed.
- **delete_task**: Delete a To Do task.

## Meeting Transcripts

Find and read transcripts of Teams meetings.

- **list_my_meeting_transcripts**: List transcripts of self-organized Teams meetings within a date range.
- **list_attended_meeting_transcripts**: List transcripts of all attended Teams meetings (if enabled in your tenant).
- **read_meeting_transcript**: Retrieve a meeting transcript – broken down by speaker, timestamp and text.

## Cross-source Search and Profile

Cross-source search as well as tools for orientation within the user's own Microsoft 365 account.

- **microsoft_search**: Cross-source search across files, SharePoint, emails, appointments and more.
- **get_my_profile**: Retrieve the user's own profile (name, email, job title, department, location) – so agents can interpret requests such as "my manager" or "my office".
- **list_mail_folders**: List the user's own mail folders.
- **list_calendars**: List the user's own calendars.

## Microsoft 365 Groups (optional)

If enabled in your tenant, additional tools for Microsoft 365 Groups are available.

- **list_groups**: List the Microsoft 365 Groups the user is a direct member of.
- **search_group_conversations**: Search the Outlook conversations of a specific group.
