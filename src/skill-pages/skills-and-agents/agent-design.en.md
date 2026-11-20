---
title: Agent Design
description: Decide between agent, skill, subagent, handoff, MCP server and knowledge base, and get a ready-to-enter agent blueprint.
label: Agent Design
---

Use this skill before you build a new agent or a set of specialised agents. Following Anthropic's current
guidance, it starts from one capable agent with skills and only adds subagents, handoffs or further agents for a
named reason (context protection, parallel work, separate permissions). The result is a blueprint with the fields
of the agent form, short instructions and a test plan.

:::note
The agent cannot create agents itself. You enter the blueprint in the agent form; MCP servers and tools it
suggests must be enabled in your companyGPT.
:::
