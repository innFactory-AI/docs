---
title: Chat and apps
description: In Chat mode, the desktop app shows your familiar companyGPT; the companyGPT apps open as their own tabs in the same window, and the app routes downloads and links to the right place.
---

The chat in the desktop app is **your companyGPT**, exactly as you know it from the browser: with [agents](/en/company-gpt/agenten/), [MCP servers](/en/company-gpt/integrationen/mcp-server/), [artifacts](/en/company-gpt/integrationen/artefakte/), [projects](/en/company-gpt/projekte/), [skills](/en/company-gpt/skills/) and uploads. The app doesn't rebuild the chat; it shows it in its own window and only adds what a desktop application does better.

## Switching between Chat and Cowork

At the top center, you switch between **Chat** and **Cowork**. The keyboard shortcuts are faster:

| Shortcut (macOS) | Shortcut (Windows) | Effect |
|---|---|---|
| ⌘1 | Ctrl+1 | Chat |
| ⌘2 | Ctrl+2 | Cowork |
| ⌘N | Ctrl+N | New Cowork task |
| ⌥Space | Ctrl+Alt+Space | [Quick-Ask](/en/company-gpt/desktop-app/quick-ask/) from anywhere |

The shortcuts work regardless of whether the chat, Cowork or an app is in the foreground. Your chat session is kept across app restarts.

## companyGPT apps as tabs

When you open an app from the **Apps panel** in the chat or from [All apps](/en/company-gpt/addons/alle-apps/), it appears as **its own tab** next to Chat and Cowork, for example companyRAG, companyFILES, companyTRANSLATE, companyTRANSCRIBE, companyLEARN, companyM365 or companyADMIN. There is one tab per app; further links to the same app open in the existing tab.

- The tabs are signed in with your chat session; you don't need to sign in a second time.
- The tab title is the app's page title. The ✕ on the tab closes it, and you see the chat again.
- "New chat" or a link to a chat in an app jumps to the Chat tab. A link to another app opens that app's tab.

## Links, downloads and files

| Topic | Behavior |
|---|---|
| **Links** | Links to companyGPT stay in the chat, links to a companyGPT app open its tab, links to other websites open your default browser. This also applies to links in Cowork replies. |
| **Downloads** | Files from the chat, for example Word, Excel or PDF documents created by companyFILES, go to your Downloads folder. If the file name already exists, the app picks a free name instead of overwriting. A notice reports the finished download and, if you like, shows the file in Finder or Explorer. |
| **Drag and drop** | Files you drag onto the chat are uploaded by companyGPT just as in the browser. |
| **Copy and paste** | All the usual keyboard shortcuts (copy, paste, undo, select all) work in the chat and in all tabs. |

## Security

The chat and the app tabs show content from your companyGPT server. This content has **no access** to your computer: it can't control Cowork, read files or trigger commands. Only Cowork's local interface talks to the local agent.

## How it works together with Cowork

| What | How |
|---|---|
| **Sign-in** | One Microsoft sign-in for Chat and Cowork. |
| **Models** | Cowork uses your company's [AI Gateway](/en/company-gpt/addons/ai-gateway/), so the same models as the chat, including `auto`. Budgets and permissions apply equally. |
| **Skills** | All skills you're allowed to use in the chat are also available in Cowork. |
| **Company instructions** | Instructions your administrator sets up for Cowork in companyADMIN apply to every Cowork task. |
| **Quick-Ask** | A quick question goes either to the chat or to Cowork. |
| **History** | Deliberately not synchronized: chats are stored in companyGPT, Cowork tasks locally on your computer. |
