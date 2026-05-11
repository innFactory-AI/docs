---
title: Skills
description: Learn how to use, create, and upload skills in CompanyGPT – reusable instructions that specialize the AI assistant for specific tasks.
---

Skills are reusable instructions that specialize the AI assistant for specific tasks. They extend the assistant’s capabilities without requiring you to rewrite complex prompts every time.

## Skills overview

Skills are managed in the left sidebar under **Skills**. Under **My Skills**, you can see all your skills at a glance.

![The Skills sidebar showing a list of available skills](./skills-main-en.png)

## Creating a skill

Click the **+** button at the top of the Skills sidebar to create a new skill. A dropdown menu appears with two options.

![Dropdown menu with options to write or upload a skill](./skills-new-en.png)

### Write skill instructions

Select **Write skill instructions** to create a skill yourself. You need to fill in the following fields:

- **Name** – A unique name for the skill
- **Description** – A short explanation of when and what the skill is used for
- **Instructions** – The actual instructions in Markdown format

![Form for writing a new skill with Name, Description, and Instructions fields](./skills-write-en.png)

### Upload a skill

Select **Upload a skill** to upload an existing skill file via drag & drop or click.

![Upload area for importing skill files](./skills-upload-en.png)

The following file formats are supported:

| Format            | Requirements                                      |
| ----------------- | ------------------------------------------------- |
| `.md`             | Must contain skill name and description in YAML   |
| `.zip` / `.skill` | Must include a `SKILL.md` file                    |

:::tip
You can find ready-made skills to try and download in [Skills Tutorials](/en/tutorials/skills/).
:::

## Skill view

The detail view of a skill shows the rendered content with description and Markdown content, for example tool tables or decision guides.

![Skill detail view showing rendered content with toggle, edit, and delete options](./skills-view-en.png)

From here, you can:

- **Enable or disable** – using the toggle in the top-right corner
- **Edit** – adjust instructions, name, or category
- **Delete** – remove the skill permanently

## Editing a skill

Open a skill and click **Edit** to adjust name, description, instructions, and category.

![Skill edit form showing Name, Description, Instructions, and Category fields](./skills-edit-en.png)

:::note
The **Description** determines when the skill is activated automatically. Write it so the assistant can recognize the correct use case.
:::

## Adding skills to agents

Skills can also be assigned directly to an [agent](/en/company-gpt/agents/). Open the agent settings and enable the **Skills** toggle. By default, the agent has access to the full skill catalog.

![Enabling the Skills toggle in the agent settings](./skills-agent-enable-en.png)

Click **Add Skills** to select specific skills that the agent is allowed to use. This lets you precisely control an agent's capabilities.

![Skill catalog for adding skills to an agent](./skills-agent-add-en.png)
