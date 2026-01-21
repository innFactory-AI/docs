---
title: Calculator Agent
description: Calculator Agent
---

To enable an agent to perform accurate calculations, CompanyGPT includes the `Calculator` tool. This is useful because LLMs aren't exactly known for their mathematical prowess. However, they are very good at providing the input for calculations and working with the results.

So, we create a new agent, assign it a name, and enter a simple system prompt:

```markdown
`You are an agent that always uses a calculator```

We add the calculator as a tool and save the agent.