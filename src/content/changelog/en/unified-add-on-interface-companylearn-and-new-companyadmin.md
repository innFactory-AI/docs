---
title: "One Interface for All Add-ons, companyLEARN and a Reorganized companyADMIN"
excerpt: "The add-ons adopt the look of the chat, companyLEARN brings training into CompanyGPT, and companyADMIN has been reorganized — with a status page and Insights in place of companyDASHBOARD. companyFILES reads emails, archives and legacy Office formats, companyTRANSCRIBE survives connection drops, and the companyM365 Office add-in now looks like the chat."
date: 2026-10-14
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
---

In October, the add-ons come together under one shared interface. On top of that, there is companyLEARN 1.0, a rebuilt companyADMIN and many smaller improvements.

## 🧭 One interface for all add-ons

- **Built like the chat**: companyADMIN, companyFILES, companyRAG, companyTRANSCRIBE and the app overview now share the chat's sidebar: **New chat** and **All apps** at the top, the add-on's menu below, and at the bottom the account menu with the theme (light, dark, system or high contrast), the language in some add-ons, and **Log out**. On a phone, the sidebar becomes a slide-out menu. More under [Shared interface](/en/company-gpt/addons/gemeinsame-oberflaeche/).
- **One sign-in for everything**: The add-ons use your chat sign-in, so there is no separate login any more. If you are not signed in or lack access, a consistent page explains what to do.
- **All apps**: The [All apps](/en/company-gpt/addons/alle-apps/) overview — as a page of its own and as a panel in the chat sidebar — shows the applications you are allowed to use. Which tiles appear depends on your permissions in companyADMIN.

## 🎓 companyLEARN 1.0

- **Training in CompanyGPT**: [companyLEARN](/en/company-gpt/addons/companylearn/), the add-on for internal training, is now available in version 1.0 with a new interface. Courses consist of chapters with lessons as video or text, and a chapter can end with a quiz and a pass mark. Optionally, a chapter only unlocks once the previous one is completed. The dashboard and the course catalog show learners their progress.
- **Manage courses**: In **Course management**, admins create courses, arrange chapters and lessons by drag and drop, upload videos (MP4, WebM) and publish courses when they are ready. A REST API with its own API keys connects other systems.
- **Learning in the chat**: Through the companyLEARN MCP server, agents find suitable courses, enroll you, show your progress, open lessons and run quizzes.
- **Access**: In most environments, admins control who may use companyLEARN and manage courses in companyADMIN with the "Use courses" and "Manage courses" permissions. companyLEARN is enabled per environment — get in touch if you would like to use it.

## 🛡️ companyADMIN

- **Reorganized**: The menu is now structured into **Insights**, **Status**, **Access**, **Content** and **Configuration**. Instead of dialogs, agents, roles, groups and other entries open detail pages with tabs. The interface follows your browser language and can be switched between German and English in the account menu. More under [companyADMIN](/en/company-gpt/addons/companyadmin/).
- **Status page**: [Status](/en/company-gpt/addons/companyadmin/status/) shows at a glance whether all add-ons are reachable, which configuration applies, how roles are set up and where admin rights come from. Under **Logs** you find the companyADMIN log with every change made through companyADMIN and the companyGPT log, formerly the audit log.
- **Control access to add-ons**: Where access to the add-ons is controlled via companyADMIN, you grant permissions such as "Use translation", "Use transcription", "Use knowledge", "Use Microsoft 365" or "Use courses" to roles, to groups or to everyone, and "View Insights" to roles and groups. The tiles under **All apps** follow these permissions. See [Extensions](/en/company-gpt/addons/companyadmin/erweiterungen/).
- **Model access as a matrix**: Under **Model access** you set the models for all roles in one table, down to the individual model.

## 📊 companyDASHBOARD

- **Replaced by Insights**: The reports from companyDASHBOARD are now in [Insights](/en/company-gpt/addons/companyadmin/insights/) in companyADMIN. companyDASHBOARD has been switched off since 4 October; its previous address redirects to companyADMIN.

## 📄 companyFILES

- **Read emails, archives and legacy formats**: companyFILES now reads Outlook messages (.msg) and emails (.eml) including their attachments, ZIP archives, legacy Office files (.doc, .xls, .ppt) as well as RTF, OpenDocument, EPUB, Jupyter notebooks and TIFF. Scanned content is captured with text recognition. Once you upload such files to companyFILES, the agent reads them page by page in the chat. Individual attachments or archive entries can be stored as a document of their own with **Save as document**. More under [Creating documents](/en/company-gpt/addons/companyfiles/dokumente-erstellen/).
- **Preview with one click**: Clicking a document opens its preview, and small images get a thumbnail and can be enlarged. Folders no longer exist.
- **Template into the chat**: When companyFILES is open inside the chat, **Use Template** writes a matching prompt into the chat.
- **Templates without program code**: Expressions in [templates](/en/company-gpt/addons/companyfiles/vorlagen/) are limited to paths, operators, the FOR, IF and EXEC commands and a list of simple functions. Templates with program code, such as arrow functions or `.map`, stop with a clear message. Please check your own templates.
- **Images in PDF and PowerPoint**: Images are only loaded from publicly reachable addresses or from your own files, no longer from internal networks.

## 📚 companyRAG

- **Excel as a dataset**: Excel files work reliably as datasets, and every sheet of a workbook becomes a table of its own.
- **German number and date formats**: CSV files with a decimal comma and German date formats are recognized correctly.
- **Large uploads**: Large files can also be uploaded over slower connections without the upload stopping early.
- **Permissions from Teams sites**: Shares of SharePoint sites that belong to a team are applied correctly.
- **Access via companyADMIN**: In most environments, admins control who may use the knowledge bases in companyADMIN with the "Use knowledge" permission.

## 🎙️ companyTRANSCRIBE

- **Recordings survive connection drops**: The audio stays in the browser until the recording is saved and is uploaded automatically as soon as the connection is back. If you stop while offline, companyTRANSCRIBE waits and offers **Retry now**, **Download audio** and **Discard**. Recordings left behind by a closed tab appear on the recording page under **Recordings not yet saved**. More under [Recording](/en/company-gpt/addons/company-transcribe/aufnehmen/).
- **Protected recordings**: If you leave the page during a recording, you are asked first and the recording is saved. If your sign-in expires, companyTRANSCRIBE keeps recording and saves the recording.
- **Precise jumps**: Clicking a timestamp jumps to exactly the right spot, even in long recordings.
- **New interface**: Transcripts and voiceovers form two groups in the menu, and **Record** and **Upload** sit in the page header.

## 🧩 companyM365

- **Add-in in the chat's look**: The [Office add-in](/en/company-gpt/addons/companym365/office-add-in/) now looks like the CompanyGPT chat in Word, Excel, PowerPoint, Outlook and the Teams tab, and follows the light, dark or contrast theme of Office and Teams. You can search the history and pin, rename and delete chats.
- **More chat in the document**: Type `/` for prompts and quick actions and `#` to insert files, emails, appointments and transcripts as references. By default, the add-in shows changes as suggestion cards that you accept or reject; Word additionally offers a mode for tracked changes. You can steer or stop an answer while it is running.
- **Workflows per app**: Excel analyzes data with code and inserts the result as a new sheet, provided code execution is active. PowerPoint first suggests an outline and then builds the deck. Outlook suggests meeting times, prepares meetings and tidies up the inbox — each only after you confirm. Word and Outlook give coaching hints on tone, clarity and structure.
- **More tools in the chat**: Agents read shared and secondary calendars, find SharePoint sites with their document libraries and check the availability of up to 20 people and rooms.
- **Administration for admins**: A dedicated admin area provides the app package for the Office add-in and the Teams tab to upload to the Microsoft 365 admin center. Access requires the "Manage Microsoft 365" permission, and usage is controlled by "Use Microsoft 365" in companyADMIN.
- **Teams bot and multiple windows** (currently only in pilot environments): A Teams bot answers questions in chats and channels, privately for the person asking by default. In the add-in, one chat works across several open Office windows, with changes in other windows only after confirmation. Saved agents get access to the Office tools in the add-in.

## 🌐 companyTRANSLATE

- **Access via companyADMIN**: In most environments, admins control who may translate and manage glossaries with the "Use translation" and "Manage glossaries" permissions. Without permission, a clear notice is shown.
- **Translate in the chat** (currently only in pilot environments): An agent translates attached documents (PDF, Word, PowerPoint, Excel, TXT, Markdown, HTML up to 40 MB) and texts directly in the chat, optionally with saved glossaries, a glossary file or term pairs in the prompt. The result arrives in the chat as a file. More under [Translating in the chat](/en/company-gpt/addons/company-translate/im-chat/).
- **Shared interface**: companyTRANSLATE gets the shared interface with the areas Text, Documents and Glossaries.

## ✨ CompanyGPT

- **Up to 50 attachments per message**: You can now attach up to 50 files to a single message.
- **AI Gateway: larger requests, more time**: In environments with the AI Gateway, requests of up to 128 MiB now go through, for example several large PDFs in one message. Long-running requests, such as those to reasoning models, get up to ten minutes instead of one. If a request is too large, the error message names the limit and the size.

## 🔜 Coming soon

- **New chat interface**: A new input field with a palette for attachments and tools, projects with their own instructions and reference files, chat options in the header, notifications and scheduled chats that start an agent at fixed times. The preview [New chat interface](/en/company-gpt/neue-chat-oberflaeche/) gives a first impression. Currently only available in the demo access and in pilot environments; no date has been set yet for customer environments.
