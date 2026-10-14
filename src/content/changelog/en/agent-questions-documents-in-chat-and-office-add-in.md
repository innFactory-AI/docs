---
title: "Agents That Ask Back and Remember, Documents Right in the Chat and Office Add-in 3.0"
excerpt: "Agents in CompanyGPT ask follow-up questions and remember what matters, companyFILES drops generated documents into the chat as attachments with a preview, the companyM365 Office add-in reaches version 3.0, and companyADMIN lets you control agent capabilities and models per role."
date: 2026-08-31
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - Agents
  - companyFILES
  - companyRAG
  - companyM365
  - companyADMIN
  - companyTRANSLATE
  - companyDASHBOARD
---

In August, agents work more closely with you, generated documents move straight into the chat, and administrators get considerably more controls.

## ✨ CompanyGPT

- **Agents ask follow-up questions**: When an agent is missing a piece of information, it asks — as a question card or a short form — and only continues once you have answered. More under [Agents](/en/company-gpt/agenten/).
- **Agents with memory**: Agents can save and delete [memories](/en/company-gpt/erinnerungen/). In the Agent Builder you decide whether an agent keeps its memories separate from your other ones.
- **GPT-5.6 Luna as the default**: New chats start with GPT-5.6 Luna. Environments with Google models also gain Gemini 3.7 Flash and Gemini 3.5 Flash-Lite. See [Model selection](/en/company-gpt/modellauswahl/) for an overview.
- **Take code and diagrams with you**: Code blocks can be downloaded directly. Mermaid diagrams open as an artifact and can be exported as SVG or PNG, and [artifacts](/en/company-gpt/integrationen/artefakte/) can be viewed full screen.
- **Edit without regenerating**: When you edit one of your own messages, you choose whether the answer is regenerated or the change is simply saved.
- **Long text as a file**: In the settings you can have very long pasted texts attached as a file instead of filling the input field.
- **Enter while an answer is running**: In the [settings](/en/company-gpt/einstellungen/#sending) you decide whether `Enter` steers a running answer or queues your message for afterwards.
- **Archive all chats**: In the settings you move all chats to the archive at once.
- **Shared chats and context at a glance**: Chats with an active shared link are marked in the chat list. The [context indicator](/en/company-gpt/chat/#context-indicator) shows in color how full the context is.
- **Lean context with many tools**: Tools from connected MCP servers are only loaded once an agent needs them, so there is room left in the context even with many connected tools.

## 📄 companyFILES

- **Documents right in the chat**: Documents created by companyFILES appear in the conversation as an attachment card with a preview — in addition to the download link. More under [Creating documents](/en/company-gpt/addons/companyfiles/dokumente-erstellen/).
- **Extend attached presentations**: A PowerPoint deck attached in the chat can be extended with slides from its own layouts, and the layouts' picture placeholders are filled. When reading a deck, companyFILES recognizes the layout and the free placeholders of every slide. See [Presentations](/en/company-gpt/addons/companyfiles/praesentationen/).
- **AI labelling**: Generated documents carry a note in their metadata that they were created with AI — in line with the transparency obligation of Art. 50 of the EU AI Act.
- **Older download links keep working**: If the access embedded in a link has expired, your current sign-in takes over instead of the download failing.

## 📚 companyRAG

- **STACKIT for embeddings**: Where set up in your environment, STACKIT is available alongside Azure and Google as an embedding provider — for knowledge bases whose data should stay in a German cloud.
- **Tidier source cards**: Pausing, editing and deleting a source now live in the "…" menu, while **Sync Now** stays directly visible.
- **No more sign-in loop**: People with a very large number of group memberships no longer end up in a loop when signing in.
- **More security**: Access checks and the separation between users have been hardened further.

## 🧩 companyM365

- **Office add-in 3.0**: The add-in for Word, Excel, PowerPoint and Outlook leaves preview and is rolled out to more environments as version 3.0. You open it from a menu on the **Home** tab, which also offers quick actions per app — for example summarizing and proofreading in Word, explaining a formula in Excel or drafting a reply in Outlook. More under [companyM365](/en/company-gpt/addons/companym365/).
- **Outlook on the Mac**: The add-in also runs in Outlook for Mac. This needs one additional setup step by your IT.
- **Access to transcripts**: Agents can list and read your own transcripts from companyTRANSCRIBE, provided companyTRANSCRIBE is active in your environment.
- **More stable start**: The add-in no longer freezes when it opens.

## 🛡️ companyADMIN

- **Agent capabilities per role**: You decide for every role which agent capabilities it may use — including ADMIN and USER.
- **Models per role and model labels**: Models can be released to each role individually, and you maintain the model labels for the selection in the chat directly in companyADMIN.
- **Library sync with your own Git server**: Besides GitHub, self-hosted Git servers such as GitLab or Gitea now work too. Skills changed in CompanyGPT can be written back to the repository, and existing content can be exported in one go.
- **Understand visibility**: The visibility of an item shows its owner and all shares with their permission level.
- **Marketplace categories**: You manage the categories of the agent marketplace directly in companyADMIN.
- **Audit log**: The tamper-proof audit log of CompanyGPT can be searched in companyADMIN and checked for completeness.

Find out more about administration under [companyADMIN](/en/company-gpt/addons/companyadmin/).

## 🌐 companyTRANSLATE

- **Google glossaries from spreadsheet exports**: CSV and TSV glossaries that use a semicolon as delimiter or have a header row no longer get stuck in the "not ready" state.
- **Example glossary**: Downloading the example glossary works again.

## 📊 companyDASHBOARD

- **Invoice amount at a glance**: A new tile shows the expected invoice amount for the month from infrastructure and token costs according to the innFactory Hub, with a forecast and the date of the data. Until 15 days after the end of the month, the value is marked as preliminary.
- **Clearly labelled estimates**: The token costs calculated in the dashboard are shown as an estimate. The figures from the innFactory Hub are binding.
