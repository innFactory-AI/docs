---
title: "One Interface for All Add-ons, companyLEARN and a Reorganized companyADMIN"
excerpt: "The add-ons adopt the look of the chat, companyLEARN brings training into CompanyGPT, and companyADMIN has been reorganized — with a status page and Insights in place of companyDASHBOARD. companyFILES reads emails, archives and legacy Office formats, companyTRANSCRIBE survives connection drops, and the companyM365 Office add-in now looks like the chat and works across several windows."
date: 2026-10-16
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyADMIN
  - companyLEARN
  - companyFILES
  - companyRAG
  - companyTRANSCRIBE
  - companyTRANSLATE
  - companyM365
  - companyDASHBOARD
  - MCP
  - API
---

In October, the add-ons come together under one shared interface. On top of that, there is companyLEARN 1.0, a rebuilt companyADMIN and many smaller improvements.

## 🧭 One interface for all add-ons

- **Built like the chat**: companyADMIN, companyFILES, companyRAG, companyTRANSLATE, companyTRANSCRIBE, companyLEARN, the companyM365 admin area and All apps now share the chat's sidebar: **New chat** and **All apps** at the top, the add-on's menu below, and at the bottom the account menu with the **Theme** (light, dark, system or high contrast), the **Language** in some add-ons, and **Log out**. **Log out** also signs you out of the chat. On a phone, the sidebar becomes a slide-out menu. More under [Shared interface](/en/company-gpt/addons/gemeinsame-oberflaeche/).
- **One sign-in for everything**: The add-ons use your chat sign-in, so there is no separate login any more. If you are not signed in or lack access, a consistent page explains what to do.
- **All apps**: The [All apps](/en/company-gpt/addons/alle-apps/) overview shows the applications enabled for you — as a page of its own and, where available in your environment, as the **Apps** list in the chat sidebar. Which tiles you see is decided by your organization, depending on the environment via the permissions in companyADMIN.

## 🎓 companyLEARN 1.0

- **Training in CompanyGPT**: [companyLEARN](/en/company-gpt/addons/companylearn/), the add-on for internal training, is now available in version 1.0 with a new interface. Courses consist of chapters with lessons as video or text, and a chapter can end with a quiz and a pass mark. By default, a chapter only unlocks once the previous one is completed. The dashboard and the course catalog show learners their progress.
- **Manage courses**: In **Course management**, people with the "Manage courses" permission create courses, arrange chapters and lessons, upload videos (MP4, WebM) and publish courses when they are ready. A REST API with its own API keys connects other systems.
- **Learning in the chat**: Through the **Learn** MCP server, agents find suitable courses, enroll you, show your progress and open lessons and quizzes right in the chat. The result of a quiz arrives in the conversation automatically.
- **Access**: As a rule, admins control who may use companyLEARN and manage courses in companyADMIN with the "Use courses" and "Manage courses" permissions. companyLEARN is enabled per environment — get in touch if you would like to use it.

## 🛡️ companyADMIN

- **Reorganized**: The menu is now structured into **Insights**, **Status**, **Access**, **Content** and **Configuration**. Instead of dialogs, agents, roles, groups and other entries open detail pages with tabs. The interface follows your browser language and can be switched between German and English in the account menu. More under [companyADMIN](/en/company-gpt/addons/companyadmin/).
- **Status page**: [Status](/en/company-gpt/addons/companyadmin/status/) shows at a glance whether all add-ons are reachable, which configuration applies, how roles are set up and where admin rights come from. Under **Logs** you find the companyADMIN log with every change made through companyADMIN and the companyGPT log, formerly the audit log.
- **Control access to add-ons**: Where access to the add-ons is controlled via companyADMIN, you grant permissions such as "Use translation", "Use transcription", "Use knowledge", "Use Microsoft 365" or "Use courses" to roles, depending on the environment to groups, or to everyone; "View Insights" only to roles and groups. The tiles under **All apps** follow these permissions. See [Extensions](/en/company-gpt/addons/companyadmin/erweiterungen/).
- **Model access as a matrix**: Under **Model access** you set the models for all roles in one table, down to the individual model.

## 📊 companyDASHBOARD

- **Replaced by Insights**: The reports from companyDASHBOARD are now in [Insights](/en/company-gpt/addons/companyadmin/insights/) in companyADMIN. companyDASHBOARD has been switched off since 4 October; its previous address redirects to companyADMIN.

## 📄 companyFILES

- **Read emails, archives and legacy formats**: With the extension for reading further formats, where active in your environment, companyFILES reads Outlook messages (.msg) and emails (.eml) including their attachments, ZIP archives, legacy Office files (.doc, .xls, .ppt) as well as RTF, OpenDocument, EPUB, Jupyter notebooks and TIFF. Scanned content is captured with text recognition. Once you upload such files to companyFILES, the agent reads them page by page in the chat. Individual attachments or archive entries can be stored as a document of their own with **Save as document**. More under [Creating documents](/en/company-gpt/addons/companyfiles/dokumente-erstellen/).
- **Preview with one click**: Clicking a document opens its preview, and small images get a thumbnail and can be enlarged. Folders no longer exist.
- **Template into the chat**: When companyFILES is open inside the chat, **Use Template** writes a matching prompt into the chat.
- **Templates without program code**: Expressions in Word [templates](/en/company-gpt/addons/companyfiles/vorlagen/) are limited to paths, operators, the FOR, IF and EXEC commands and a list of simple functions. Templates with program code, such as arrow functions or `.map`, stop with a clear message. Please check your own templates.
- **Images in PDF and PowerPoint**: Images are only loaded from publicly reachable addresses or from your own files, no longer from internal networks.
- **Clearer notices**: The upload dialog names the supported file types, and the diagram view now shows most of its controls in German. If only a text excerpt of a file is available in the chat, companyFILES asks you to upload the original file again.

## 📚 companyRAG

- **Excel as a dataset**: Excel files work reliably as datasets, and every sheet of a workbook becomes a table of its own.
- **German number and date formats**: CSV files with a decimal comma and German date formats are recognized correctly.
- **Large uploads**: Large files can also be uploaded over slower connections without the upload stopping early.
- **Permissions from Teams sites**: Shares of SharePoint sites that belong to a team are applied correctly.
- **Access via companyADMIN**: Depending on the environment, admins control who may use the knowledge bases in companyADMIN with the "Use knowledge" permission.
- **Clear message when access is missing**: If an agent queries a collection you have no access to, it receives an understandable error message instead of retrying the request over and over. Access checks have also been hardened further.
- **Polish**: Missing German texts have been added. Google Drive sources no longer offer a schedule, because changes are picked up automatically anyway.

## 🎙️ companyTRANSCRIBE

- **Recordings survive connection drops**: The audio stays in the browser until the recording is saved and is uploaded automatically as soon as the connection is back. If you stop while offline, companyTRANSCRIBE waits and offers **Retry now**, **Download audio** and **Discard**. Recordings left behind by a closed tab appear on the recording page under **Recordings not yet saved**. More under [Recording](/en/company-gpt/addons/company-transcribe/aufnehmen/).
- **Protected recordings**: If you leave the page during a recording, the recording is stopped and saved after a confirmation. If your sign-in expires, companyTRANSCRIBE keeps recording and saves the recording.
- **Precise jumps**: Clicking a timestamp jumps to exactly the right spot, even in long recordings.
- **Quicker start**: You reach **Record** and **Upload** from the menu and from buttons in the page header of the **Transcripts** overview.

## 🧩 companyM365

- **Add-in in the chat's look**: The [Office add-in](/en/company-gpt/addons/companym365/office-add-in/) now looks like the CompanyGPT chat in Word, Excel, PowerPoint, Outlook and the Teams tab, and follows the light, dark or contrast theme of Office and Teams. You can search the history and pin, rename and delete chats.
- **More chat in the document**: Type `/` for prompts and quick actions and — where available in your environment — `#` to insert files, emails, appointments and transcripts as references. By default, the add-in shows changes as suggestion cards that you accept or reject; Word additionally offers a mode for tracked changes. You can stop an answer while it is running and, depending on your environment, steer it.
- **Workflows per app**: Excel analyzes data with code where code execution is enabled, otherwise with formulas, and inserts result tables as a new sheet with one click. PowerPoint first suggests an outline and then builds the deck. Outlook suggests meeting times, prepares meetings and tidies up the inbox. Nothing is carried out until you confirm it; invitations are then sent immediately. Word and Outlook give coaching hints on tone, clarity and structure.
- **Multiple Office windows**: If the add-in is open in several windows, the assistant can also read the other windows on request and insert content across applications, for example a table from Word as a new sheet in Excel. It only carries out a change in another window once you have confirmed it in your own chat. More under [Multiple Office windows](/en/company-gpt/addons/companym365/mehrere-fenster/).
- **More reliable start**: Every start begins with the default model, and you can type before the list of agents has loaded. If Office restarts the add-in pane, your chat is back. Very large Office files and manipulated image attachments no longer bring the service down.
- **More tools in the chat**: Agents read shared and secondary calendars, find SharePoint sites with their document libraries and check the availability of up to 20 people and rooms.
- **Administration for admins**: A dedicated admin area provides the app package for the Office add-in and the Teams tab to upload to the Microsoft 365 admin center. Access requires the "Manage Microsoft 365" permission, and usage is controlled by "Use Microsoft 365" in companyADMIN.
- **Teams bot and Office tools for agents** (currently only in pilot environments): A Teams bot answers questions in chats and channels; if an answer uses your data, such as Microsoft 365 tools or files, only you see it. Saved agents get access to the Office tools in the add-in.

## 🌐 companyTRANSLATE

- **Access via companyADMIN**: Depending on the environment, admins control who may translate and manage global glossaries in companyADMIN with the "Use translation" and "Manage glossaries" permissions. Without permission, the **No access** page is shown.
- **More formats, 30-day retention**: In the **Documents** area you can now also translate Excel, TXT, Markdown and HTML files of up to 40 MB. Translations are kept for 30 days; download results you need for longer in good time. More under [Translate document](/en/company-gpt/addons/company-translate/dokument-uebersetzen/).
- **Language names in your language**: In the English interface, languages now appear with their English names. The glossary upload dialog now correctly describes the header row as optional.
- **Translate in the chat** (currently only in pilot environments): An agent translates attached documents and texts directly in the chat, optionally with saved glossaries, a glossary file or term pairs in the prompt. The result arrives in the chat as a file. More under [Translating in the chat](/en/company-gpt/addons/company-translate/im-chat/).

## ✨ CompanyGPT

- **Up to 50 attachments per message**: You can now attach up to 50 files to a single message.
- **AI Gateway: larger requests, more time**: In environments with the AI Gateway, requests of up to 128 MiB instead of 10 MiB now go through; the AI providers' own limits still apply, for example 20 MB for Gemini. Up to ten minutes instead of one may now pass before an answer starts, for example with reasoning models.
- **AI Gateway: more robust under load**: If the gateway briefly pauses a throttled model, it now responds with `429` and the remaining wait time instead of `502`. If a provider's quota is exhausted, it switches to another deployment of the same model. More under [AI Gateway API](/en/api/ai-gateway/).

## 🔜 Coming soon

- **New chat interface**: A new input field with a palette for attachments and tools, projects with their own instructions and reference files, chat options in the header, notifications and scheduled chats that start an agent at fixed times. The preview [New chat interface](/en/company-gpt/neue-chat-oberflaeche/) gives a first impression. Currently only available in the demo access and in pilot environments; no date has been set yet for customer environments.
