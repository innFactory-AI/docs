---
title: "GPT-6, Insights in companyADMIN and Tables as Datasets"
excerpt: "GPT-6 Luna becomes the default model, files go straight into the chat, and code execution is active in all environments. companyADMIN shows usage and costs in Insights, companyRAG makes tables queryable via SQL and connects WebDAV and FTP, and companyM365 reads shared mailboxes."
date: 2026-09-30
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - Agents
  - Skills
  - companyADMIN
  - companyRAG
  - companyFILES
  - companyTRANSCRIBE
  - companyTRANSLATE
  - companyM365
  - companyDASHBOARD
---

September brings a new model generation, a tidier chat and new reports for administrators.

## ✨ CompanyGPT

- **GPT-6 Luna is the default**: In most environments, new chats start with GPT-6 Luna, and GPT-6 Sol is available as a second GPT-6 model. Environments with Google models also gain Gemini 3.8 Flash. The "auto" entry in the model selection has been removed. Details in [Model selection](/en/company-gpt/modellauswahl/).
- **Upload files directly**: The paperclip now uploads files without asking for a destination. Images and PDFs go straight to the model, Office documents as text. Excel files are read directly instead of going through text recognition. See [File processing](/en/company-gpt/dateiverarbeitung/).
- **More headroom for agents**: Up to 25 attachments per message, up to 50 subagents and 150 steps per run.
- **Code execution everywhere**: The [Code Interpreter](/en/company-gpt/code-interpreter/) is now active in all environments. This also makes agents with code execution and the analysis of Excel files work reliably.
- **Reorganized settings**: The [settings](/en/company-gpt/einstellungen/) have been rearranged. New options include the time format and first day of the week as well as high-contrast themes.
- **Find chats faster**: The chat list can be filtered and sorted, for example by active, archived or bookmarked chats. You arrange pinned chats and favorites by drag and drop, and you can drag a chat straight onto a project.
- **Compact the context**: When space runs low, you compact the context via the [context indicator](/en/company-gpt/chat/#context-indicator). CompanyGPT then replaces the conversation so far with a summary.
- **Clearer tool calls**: Several tool calls of an agent are shown as a group, and failed calls are counted. A temporary chat is clearly marked.
- **Assign skills deliberately**: In the Agent Builder you decide whether an agent uses all, none or only selected [skills](/en/company-gpt/skills/).

## 🛡️ companyADMIN

- **Insights: usage and costs**: The new [Insights](/en/company-gpt/addons/companyadmin/insights/) area shows how your organization uses CompanyGPT — with the tabs Overview, Agents, Models, MCP tools, Costs and Activity, a selectable period, a tile with the reselling costs from the innFactory Hub and an export as an Excel file. The figures are updated every ten minutes. People who should only see the reports get access to Insights without administration rights.
- **Agent detail pages**: A click on an agent shows its owner, model, instructions, tools, MCP servers, skills, subagents, visibility and usage. The agent list shows owner, model, requests in the last 30 days and last use.
- **Create roles more easily**: A new role can be taken over directly from an Entra group and starts with the permissions of USER. If a role needed for sign-in is missing, companyADMIN creates it itself.
- **Role permissions in one place**: Role permissions are now managed in companyADMIN instead of in the base configuration. The new **Baseline & adjustments** page shows which defaults apply and which of your adjustments take effect.
- **Reworked model releases**: Model releases per role now apply reliably for all providers. Please check your restrictions for Azure models once and set them again if needed.
- **Labels for agents**: A model label can now point to an agent as well. The option to allow only labelled models clearly warns about its consequences before you enable it.
- **All MCP servers at a glance**: The MCP tools overview lists every server with its origin — from the deployment, the admin configuration, a plugin or created by users.

## 📚 companyRAG

- **Tables as datasets**: With the **Tabular files as datasets** option, a [collection](/en/company-gpt/addons/companyrag/sammlungen/) stores CSV, Excel and Parquet files as datasets you can query via SQL instead of embedding them row by row — also when the files come from SharePoint, Nextcloud or Google Drive. Existing tables are switched over with **Convert existing tables to datasets**.
- **New sources: WebDAV and FTP**: Folders on WebDAV servers (for example ownCloud or Synology) and on FTP or FTPS servers can be synced as a [source](/en/company-gpt/addons/companyrag/quellen/), each with its own credentials stored encrypted. Git sources can use their own access token or an SSH deploy key.
- **Custom file extensions**: A source can allow additional file extensions that are read as plain text. MDX files are indexed like Markdown.
- **Traceable syncs**: The source card shows the outcome (successful, partial, failed), the reason and the figures of the last run. After a first complete run, SharePoint sources only transfer changes.
- **More robust syncs**: Long runs from SharePoint and Google Drive survive an expiring sign-in, and an incomplete folder listing no longer leads to documents being deleted. Files of deleted sources are removed from the index so that outdated content no longer shows up in answers.
- **Superadmins manage every collection**: Superadmins can manage any collection.
- **Understandable errors**: If indexing a dataset fails, the reason is shown directly on the file.

## 📄 companyFILES

- **Fewer interruptions under load**: The request limit now applies per person instead of to the whole environment, so many simultaneous users no longer slow each other down.

## 🎙️ companyTRANSCRIBE

- **Larger uploads**: Audio files of up to 200 MB and 240 minutes can be uploaded. Longer files are rejected right away.

## 🌐 companyTRANSLATE

- **Glossaries from spreadsheet programs**: CSV and TSV glossaries with a semicolon delimiter or a header row now also work for document translation, and glossaries uploaded earlier are corrected automatically. Language names in the header row such as "Deutsch;Englisch (en)" are recognized.

## 🧩 companyM365

- **Attachments in mail drafts**: Agents attach files to mail drafts — from a OneDrive or SharePoint link, from the current chat, from companyFILES or, in the add-in, the open Office document. Emails are still only prepared as drafts.
- **Read shared mailboxes**: Agents can search and read shared mailboxes you have access to.
- **Write to OneNote**: Agents create OneNote pages and add to existing ones. Markdown is converted to simple formatting.
- **More reliable add-in**: The add-in runs more stably, for example during brief connection problems and with several tool calls in a row. The quick actions in Outlook work again.

## 📊 companyDASHBOARD

- **Successor in companyADMIN**: The reports from companyDASHBOARD are now available as Insights in companyADMIN. companyDASHBOARD keeps running in parallel for the time being.
