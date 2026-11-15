---
title: "companyADMIN: Entry Agent, Export with Prompts, Roles from Entra ID and Model Change for Many Agents"
excerpt: "companyADMIN receives many new features in this release, from version 3.4 to 3.14: an entry agent for new chats, roles from Entra ID as read-only, export and write-back for prompts too, new rights for branding, collections and companyVibes, and switching provider and model for many agents at once."
date: 2026-11-15
author:
  name: innFactory Team
lang: en
tags:
  - CompanyGPT
  - companyADMIN
  - companyFILES
  - companyRAG
  - Agents
  - Skills
---

In November companyADMIN received versions 3.4 to 3.14. This is what you notice as an administrator. More under [companyADMIN](/en/company-gpt/addons/companyadmin/). Some items depend on your environment; get in touch if something is missing for you.

:::caution[Action before updating companyFILES]
The new right **Set personal branding** (see below) applies in companyFILES as soon as your version checks it. If everyone should still be able to set their own branding, open the right to everyone beforehand under **Configuration** → **Extensions** → companyFILES with **For everyone**. Otherwise only administrators and explicitly authorised roles and groups keep their own branding.
:::

## 🛡️ companyADMIN

- **Entry agent (3.4)**: A public agent can be the start of every new chat. You set it on the agent page with **Set as entry point**, either **fixed** or **soft** (people can then pick something else themselves). Under **Configuration** → **Labels** there is also **Entry point per role or group**; the first matching rule applies. companyADMIN first checks that the agent and its model are usable for all roles. More under [Providers and models](/en/company-gpt/addons/companyadmin/modelle/#entry-point-for-new-chats).
- **Roles from Entra ID read-only (3.7)**: Roles that Entra ID sets at sign-in, such as ADMIN through the admin group and the roles of the role sync, can no longer be assigned in companyADMIN; Entra ID would reset them at the next sign-in anyway. Removing still works, but Entra ID gives the role back as long as the person is in the group. If you replace a person's current role, companyADMIN now asks **Replace the current role?**. The member list shows in the **Origin** column whether someone is entered through an Entra group or by hand. More under [Roles](/en/company-gpt/addons/companyadmin/rollen-und-rechte/#roles-from-entra-id).
- **Export and write-back for agents, skills and prompts (3.8)**: Exporting existing content to Git and writing back now cover prompts too. Only content shared with everyone or groups and your own is offered; nothing is preselected. A prompt without a command gets one from its name, so a new slash command appears in CompanyGPT. Skills with files uploaded in CompanyGPT cannot be exported. The preview names skipped content with a reason. More under [Library Sync](/en/company-gpt/addons/companyadmin/library-sync/).
- **Share with me (3.9)**: Superadmins can share an agent they see in the list with themselves, to use it in the chat and pass it on. Every share appears in the audit log.
- **Skill files in the code sandbox (3.10)**: Files of synced skills, such as scripts and templates, are available to agents' code execution if your environment is set up for it. The sync then also imports binary files; otherwise it lists them under **Notes**.
- **Right "Set personal branding" (3.11)**: The new right for the companyFILES extension decides who may deviate from the organisation branding. Note the hint above.
- **Cowork (3.12)**: Under **Configuration** → **Cowork** you maintain general instructions for the Cowork agent of the desktop app, the same for everyone, up to 20,000 characters. Saving needs the right **Manage configuration**.
- **Chat projects (3.12.2)**: In environments that offer the function, you control per role whether people may share their chat projects and share them publicly.
- **companyVibes rights (3.12.3)**: Six new rights for companyVibes: **Use companyVibes**, **Create apps**, **Share apps**, **Publish apps publicly**, **Review and approve apps** and **Manage companyVibes**. The two rights for publishing publicly and reviewing exist only explicitly, never automatically and never for everyone.
- **Create collections and sources (3.13)**: In companyRAG, using and creating can now be separated. After the update companyADMIN copies all grants of **Use knowledge** to the new right **Create collections and sources** once, so that nobody loses anything; until then it shows **Migration pending**. Every role that may use may at first also create afterwards. If roles should only use, take the new right away from them and do not open it **For everyone**. More under [Extensions](/en/company-gpt/addons/companyadmin/erweiterungen/#migration-pending).
- **Change provider and model for many agents (3.14)**: Under **Content** → **Agents** you switch provider and model for up to 500 selected agents, or with **Change all agents of a provider …** for all agents of a provider, optionally only for certain models. A preview first shows what changes, then you confirm. Other people's private agents are changed too. Release the target model under **Model access** beforehand, because companyADMIN does not check whether every role may use it. The next sync overwrites agents from a repository without **We own this repo**. **Undo** restores agents that nobody has saved since. More under [Content and visibility](/en/company-gpt/addons/companyadmin/inhalte/#change-provider-and-model-for-several-agents).
