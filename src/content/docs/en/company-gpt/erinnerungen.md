---
title: Memories
description: How CompanyGPT remembers facts, preferences, and project details across individual chats – automatically or manually.
---

When memories are active in your environment and you [reference saved memories](/en/company-gpt/einstellungen/#reference-saved-memories), CompanyGPT can remember facts, preferences, and project details across individual conversations. This not only makes your interactions more personal and relevant, but also significantly more efficient.

Memories can be created in two ways: automatically and manually.

## How memories are stored

Each memory is stored as a key-value pair: the key is the keyword, the value is the corresponding information. Automatic saving assigns information to eight fixed keys:

| Key | Content |
| --- | --- |
| `user_profile` | Who you are: name, role, team, background |
| `company_context` | What your organization does: products, services, partners, technology in use, structure |
| `rules_and_preferences` | How CompanyGPT should communicate and work: tone, format, language, fixed requirements |
| `active_work` | What you are currently working on: projects, goals, deadlines, open decisions |
| `reference_data` | Where to find things: links, documents, tools, recurring templates |
| `glossary` | Company-specific terms, abbreviations, and internal names |
| `decisions` | Decisions that have been made, with their rationale |
| `corrections` | Your explicit corrections until they have been applied to the matching key |

In the standard configuration, up to 12,000 tokens are available for all memories combined; the limit may differ in some environments. The percentage in the **Memories** area of the sidebar shows how much of it is used. Hover over it to see the exact number of tokens. Once the limit is reached, no further memories can be created.

## Automatic saving

If you have activated this function, CompanyGPT analyzes the most recent messages of your chats in the background and saves information that will still be useful later. Existing entries are updated instead of being duplicated. Entries are saved in your language and with a date.

Automatic saving is instructed not to store one-off questions, speculation, credentials such as passwords or API keys, or sensitive personal data.

## Manual saving

You can directly instruct CompanyGPT to remember something. This is particularly useful for facts that you want to store permanently.

### In chat

Simply enter a command such as:

```text
“Remember that I am the project manager for the ‘Phoenix’ project.”
“Remember: The marketing budget is €20,000.”
“Save this information: My main contact at customer X is John Doe.”
```

If the **Memory** option is available in the **Tools** menu of the input field in your environment and it is enabled, the model can also save or delete memories itself during the chat.

### Via the sidebar

In the left sidebar, you will find the **Memories** area. There you can see all saved memories, search them with **Filter memories...**, edit them, or delete them.

Use the plus icon (**Create Memory**) to add a new memory. The **Key** may only contain lowercase letters and underscores; the **Value** is free text.

**Example**:

- Key: `active_work`
- Value: `Project Phoenix | Project lead: [Your Name]`

Each key can only exist once. If the key already exists, add to the existing entry via **Edit**. Custom keys are also possible; however, automatic saving does not maintain entries under custom keys.

## Turning memories on and off

If your environment allows it, use **Use memory** in the **Memories** area or [Reference saved memories](/en/company-gpt/einstellungen/#reference-saved-memories) in the settings to decide whether CompanyGPT includes your memories in its responses.

## Agent memories

[Agents](/en/company-gpt/agenten/) can also save memories, depending on the agent's settings even separately from your personal memories. If such memories exist, filter the **Memories** area by **All memories**, **Personal**, or a specific agent.
