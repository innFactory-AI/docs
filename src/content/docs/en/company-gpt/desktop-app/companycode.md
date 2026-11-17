---
title: companyCODE
description: companyCODE is the companyGPT agent in the terminal for developers – with the same Microsoft sign-in, the AI Gateway's models and your company's skills.
---

**companyCODE** is Cowork's counterpart for software development: an AI agent in the terminal that works in your project folder. It uses the same Microsoft sign-in, the models of your company's [AI Gateway](/en/company-gpt/addons/ai-gateway/) and the [skills](/en/company-gpt/skills/) from the chat. It deliberately doesn't have Cowork's Office features.

## Installation

companyCODE comes with the desktop app. On first start, the app sets up the `companycode` command in a folder that is on your `PATH`. If there's no suitable folder, the app creates `~/.local/bin` and adds it to your shell configuration. Then open a new terminal window. App updates also update companyCODE.

Under **Settings → companyCODE in the terminal** you see where the command is located, and remove or reinstall it.

## Usage

```sh
companycode login companygpt.firma.de   # once: sign in in the browser (over SSH: device code)
cd mein-projekt && companycode          # start the agent in this folder
companycode -c                          # continue the last session in this folder (-r: pick one)
companycode -p "Explain src/main.rs"    # one-off answer without the interactive interface
companycode status | sync | logout      # check sign-in, sync skills, sign out
```

`companycode --help` shows all commands.

## Cowork and companyCODE compared

| | Cowork (desktop app) | companyCODE (terminal) |
|---|---|---|
| **Interface** | Its own interface in the app | Interactive interface in the terminal |
| **Sign-in** | Microsoft | Microsoft, over SSH or without a screen via device code |
| **Models and skills** | AI Gateway, your company's skills | the same |
| **Commands** | In the sandbox, without internet, with approvals | Directly and with internet (builds, tests, package managers) |
| **Office, artifacts, Quick-Ask, dictation** | yes | no, deliberately |

:::caution
companyCODE runs commands **without a sandbox** and with internet access, like other coding agents. Only use it in project folders you trust.
:::

Project files such as `AGENTS.md` or `CLAUDE.md`, your own skills under `~/.agents/skills/` and MCP servers (`companycode mcp …`) work as usual.
