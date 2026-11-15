---
title: Model Selection
description: When to use which AI model? This overview will help you.
---

Which models appear in your model selection is decided by your organization – not every environment offers all of the models described here. In most environments, **gpt-6-luna** is the preselected model for new chats.

### Rule of thumb:

- **Fast & inexpensive** → Luna / Mini / Nano / Flash / Haiku
- **Standard & reliable** → large all-round models
- **Complex & critical** → most powerful models
- **Hosting in Germany / open source** → STACKIT models in [CompanyGPT Sovereign](/en/company-gpt/sovereign/) or, if available, in your environment

Models marked as deprecated are listed under [Legacy models](#legacy-models), together with the model you should switch to.

:::note[Where do the models run?]
In CompanyGPT, the models from OpenAI, Google and Anthropic run in EU data centers by default (Azure OpenAI in the EU data zone, Google Vertex AI in EU regions). Individual environments or models – especially for image generation – may differ. The STACKIT models run in data centers in Germany. Your administrator can tell you the details for your environment.
:::

---

## OpenAI

### The GPT-6 family

In CompanyGPT, GPT-6 is available in two tiers. They belong to the same generation and differ in how much reasoning depth, speed, and cost you get: **Sol** (the more capable tier) and **Luna** (fastest and most economical). The Sol tier is also available in a newer version, **gpt-6.1-sol**. Choose the tier based on the complexity of the task, not out of habit.

### gpt-6.1-sol

- **For:** demanding tasks where you want the newest version of the Sol tier
- **When:** agentic coding, multi-step development tasks, complex analyses and workflows
- **Why:** the updated version of gpt-6-sol – same tier, newer release

### gpt-6-sol

- **For:** demanding tasks with strong intelligence at fair cost
- **When:** agentic coding, multi-step development tasks, complex workflows
- **Why:** the more capable tier of the GPT-6 generation with careful validation

### gpt-6-luna (default model)

- **For:** fast answers at minimal cost
- **When:** everyday tasks, high-volume applications, automated pipelines
- **Why:** the most economical and lightweight model of the GPT-6 family – preselected for new chats in most environments

### The GPT-5.6 family

GPT-5.6 is available in three tiers. They belong to the same generation and differ in how much reasoning depth, speed, and cost you get: **Sol** (maximum capability), **Terra** (balanced), and **Luna** (fastest and most economical). Choose the tier based on the complexity of the task, not out of habit.

### GPT-5.6 Sol

- **For:** the flagship tier with the highest capability
- **When:** intricate software architecture, advanced programming, cybersecurity, deep multi-step scientific analysis, heavy creative strategy, oversight of other models — whenever precision outweighs cost
- **Why:** the strongest reasoning of the 5.6 generation

### GPT-5.6 Terra

- **For:** the balanced mid-range tier for everyday professional and business workflows
- **When:** standard business applications, document drafting, general assistant workflows
- **Why:** the middle ground between speed and intelligence

### GPT-5.6 Luna

- **For:** the fastest and most cost-efficient tier
- **When:** routine high-frequency automation, fast parsing, highly parallel agent tasks, and other high-volume or speed-sensitive work of lower complexity
- **Why:** lowest latency and cost in the 5.6 generation

### gpt-5.4

- **For:** demanding tasks across many topics
- **When:** coding, analyses, text work, and planning in everyday work
- **Why:** strong all-round model of the GPT-5 generation; for the highest capability, choose GPT-5.6 Sol, gpt-6-sol or gpt-6.1-sol

### gpt-5.1

- **For:** deep thinking with high reliability
- **When:** complex documents, data analyses, advanced text work
- **Why:** strong GPT-5 generation performance optimized for practical use

### gpt-5-mini

- **For:** high quality at high speed
- **When:** everyday programming tasks, structured research, logical iterations
- **Why:** excellent balance of GPT-5 intelligence and fast processing time

### gpt-5-nano

- **For:** ultra-fast answers and simple assistance
- **When:** quick questions, simple formatting, text corrections
- **Why:** extremely resource-efficient model of the GPT-5 family with minimal latency

:::note[Further GPT models in individual environments]
Some environments additionally offer further variants of the GPT-5 generation, such as **gpt-5.4-mini**, **gpt-5**, **gpt-5.2** or **gpt-5.2-codex** (specialized in programming tasks), as well as the older reasoning model **o3-mini**. For new tasks we recommend the models described above; instead of o3-mini, for example, gpt-5-mini.
:::

### GPT Image 1.5

- **For:** image generation and image editing
- **When:** when images need to be created or edited
- **Why:** OpenAI's image model, processed in the EU data zone

### GPT Image 2.5

- **For:** image generation and image editing with the newer generation of OpenAI image models
- **When:** when images need to be created or edited and your environment uses GPT Image 2.5
- **Why:** newer generation of OpenAI image models; processing takes place globally and not in the EU data zone

You create images with the **OpenAI Image Tools**. Which image model is behind them is decided by your environment – in most environments it is GPT Image 1.5, in some GPT Image 2.5 or GPT Image 2. GPT Image 2 and GPT Image 2.5 run outside the EU data zone.

:::caution
Microsoft is retiring GPT Image 1.5 in Azure on 16 December 2026. For image generation you can use [Nano Banana](#gemini-image-tools--nano-banana) instead or – if your environment offers it – GPT Image 2.5.
:::

---

## Google

The Gemini models are available if Google is enabled in your environment. The models of the Gemini 2.5 generation have been superseded, see [Legacy models](#legacy-models).

### Gemini 4 Argon

- **For:** demanding tasks with a lot of context
- **When:** large documents and codebases (up to 1M tokens of context), complex analyses and multi-step reasoning
- **Why:** the first model of the Gemini 4 generation, processed in an EU region; so far only available in some environments

### Gemini 3.8 Flash / Gemini 3.7 Flash / Gemini 3.5 Flash

- **For:** autonomous reasoning at high speed
- **When:** complex workflows, deep analyses, demanding coding
- **Why:** Google's fast models with flexible thinking levels; 3.8 Flash is the newest Flash tier

### Gemini 3.5 Flash-Lite / Gemini 3.1 Flash-Lite

- **For:** maximum speed and cost efficiency
- **When:** quick follow-up questions, simple bulk tasks, real-time translations
- **Why:** extremely short response time at very low cost; 3.5 Flash-Lite is the newer tier

### Gemini 3.1 Pro (preview)

- **For:** particularly demanding analyses and complex reasoning
- **When:** when the Flash models reach their limits, for example with very extensive or nested tasks
- **Why:** Google's more capable Pro tier; so far only available in some environments and as a preview, so its behavior and availability may still change

### Gemini Image Tools / Nano Banana

- **For:** image analysis, image generation, image editing
- **When:** text-to-image generation, image editing with prompts (image + text), and composition of multiple images
- **Why:** Google's image models integrated into CompanyGPT; Nano Banana is processed in an EU region

In some environments, the Gemini Image Tools use the more capable **Nano Banana Pro**. It is processed globally and not in an EU region.

---

## Anthropic

The Claude models are available if Anthropic is enabled in your environment. The current generation is **Claude 5.5** with the Opus, Sonnet and Haiku tiers; it runs via the EU region of Google Vertex AI. The Claude 4.x models are deprecated, see [Legacy models](#legacy-models).

### Claude Opus 5.5

- **For:** the most demanding tasks, where quality comes before cost
- **When:** complex analyses, extensive code changes, long multi-step agentic tasks
- **Why:** the most capable Claude model of the current 5.5 generation; successor to Claude Opus 5 and the Opus 4.x models

### Claude Sonnet 5.5

- **For:** programming, complex text processing, and demanding all-round tasks (Recommended)
- **When:** software development, code refactoring, agents, deep text comprehension
- **Why:** the sweet spot of the series – high capability for everyday work at a considerably lower cost than Opus; successor to Claude Sonnet 5 and Sonnet 4.6

### Claude Haiku 5.5

- **For:** very fast processing at very low cost
- **When:** filtering large data volumes, UI-based chatbots, simple to medium tasks at scale, subtasks of agents
- **Why:** the fastest and most economical model of the 5.5 generation; successor to Claude Haiku 4.5

### Claude Opus 5 / Claude Sonnet 5 (previous generation)

- **For:** the most demanding tasks (Opus 5) or programming and all-round tasks (Sonnet 5)
- **When:** if your environment does not offer the 5.5 generation yet
- **Why:** the previous generation of Claude 5.5; once available, switch to Claude Opus 5.5 or Claude Sonnet 5.5

:::note
Which Claude generation you see depends on your environment: some environments already offer Claude 5.5, others still offer Claude 5 or the deprecated 4.x models. Some environments additionally offer further providers such as Mistral or Perplexity.
:::

---

## STACKIT

These open-source models run in the STACKIT Cloud in data centers in Germany and are particularly suited for workloads with high requirements for data sovereignty and internal compliance. They are available in [CompanyGPT Sovereign](/en/company-gpt/sovereign/) and otherwise only in environments where STACKIT is enabled; the exact set of models differs from environment to environment. In addition, the search in [companyRAG](/en/company-gpt/addons/companyrag/) uses its own embedding models depending on the environment; they cannot be selected in the chat.

### google/gemma-4-31B-it

- **For:** versatile instruct tasks with good efficiency
- **When:** internal assistants, knowledge work, structured text production
- **Why:** newer Gemma generation as a mid-range option between small fast and large OSS models

### Qwen/Qwen3.8-27B

- **For:** versatile text tasks and strong multilingual understanding
- **When:** creative writing, logical problem-solving, precise translations
- **Why:** newer Qwen generation with a good balance of compact size and capability

### openai/gpt-oss-120b

- **For:** highest OSS quality for complex text tasks
- **When:** when internally hosted top performance is required instead of maximum speed
- **Why:** large open-source model for strong analytical and linguistic results

### Qwen/Qwen3-VL-235B-A22B-Instruct-FP8

- **For:** multimodal high-end analysis with image and text understanding
- **When:** visual document analysis, complex image-text tasks, demanding inference
- **Why:** very powerful VL model for deeper understanding of multimodal content

### cortecs/Llama-3.3-70B-Instruct-FP8-Dynamic

- **For:** more demanding generation and reasoning in the EU stack
- **When:** more complex enterprise questions, longer responses, better level of detail
- **Why:** the 70B class provides significantly more quality than small models while retaining OSS flexibility

### openai/gpt-oss-20b

- **For:** lightweight open-source text tasks
- **When:** cost-sensitive internal workflows with controllable infrastructure
- **Why:** compact OSS approach for solid quality with lower resource requirements

---

## Legacy models

The following models are deprecated and are being superseded by newer generations. As long as your environment still offers them, you can keep using them; for new chats and agents, please choose the successor model named for each.

:::caution[Will be discontinued]
The entire GPT-4 family (gpt-4.1, gpt-4.1-mini, gpt-4o, gpt-4o-mini) will no longer be supported in the near future and will be removed from CompanyGPT; in some environments it is already unavailable. Please migrate to a current model: **gpt-6-luna**, **GPT-5.6 Terra** or **gpt-5-mini** as a replacement for gpt-4.1 and gpt-4o, and **GPT-5.6 Luna** or **gpt-5-nano** as a replacement for gpt-4.1-mini and gpt-4o-mini.

The Claude 4.x models (Claude Opus 4.5, 4.6, 4.7 and 4.8, Claude Sonnet 4.5 and 4.6, Claude Haiku 4.5) are being superseded by the Claude 5.5 generation: **Claude Opus 5.5** replaces Opus 4.x, **Claude Sonnet 5.5** replaces Sonnet 4.x, **Claude Haiku 5.5** replaces Haiku 4.5.

The models of the Gemini 2.5 generation (Gemini 2.5 Pro, 2.5 Flash and 2.5 Flash-Lite) and older are no longer available in the chat. Their successors are **Gemini 3.8 Flash** for 2.5 Pro and 2.5 Flash, and **Gemini 3.5 Flash-Lite** for 2.5 Flash-Lite; where available, **Gemini 3.1 Pro** replaces 2.5 Pro. The Nano Banana image tool is not affected.
:::

### gpt-4.1

- **For:** reliable problem-solving and standard contexts
- **When:** text optimization, research, logical comparisons
- **Why:** the proven, refined workhorse for demanding everyday tasks
- **Migrate to:** gpt-6-luna / GPT-5.6 Terra / gpt-5-mini

### gpt-4.1-mini

- **For:** fast processing at low cost
- **When:** structured text creation, data pre-sorting, simple conversations
- **Why:** compact version of GPT-4.1, optimized for efficiency and speed
- **Migrate to:** GPT-5.6 Luna / gpt-5-nano

### gpt-4o

- **For:** versatile multimodality and fluid interaction
- **When:** image and speech processing, creative drafts, brainstorming
- **Why:** the established flagship model for fast, multimedia tasks
- **Migrate to:** gpt-6-luna / GPT-5.6 Terra / gpt-5-mini

### gpt-4o-mini

- **For:** high speed at minimal cost
- **When:** simple chat assistants, fast filtering of large data volumes
- **Why:** extremely inexpensive lightweight model with solid base intelligence
- **Migrate to:** GPT-5.6 Luna / gpt-5-nano

### Claude Opus 4.x (4.5, 4.6, 4.7, 4.8)

- **For:** the most demanding tasks, where quality comes before cost
- **When:** complex analyses, extensive code changes, multi-step agentic tasks
- **Why:** the most capable Claude models of the 4.x generation
- **Migrate to:** Claude Opus 5.5

### Claude Sonnet 4.x (4.5, 4.6)

- **For:** programming, complex text processing, and demanding all-round tasks
- **When:** software development, code refactoring, deep text comprehension
- **Why:** the previous sweet spot of the Claude series between capability and cost
- **Migrate to:** Claude Sonnet 5.5

### Claude Haiku 4.5

- **For:** very fast processing with high logical precision
- **When:** filtering large data volumes, UI-based chatbots, simple to medium tasks at scale
- **Why:** fast and cost-efficient (less reasoning than Sonnet/Opus)
- **Migrate to:** Claude Haiku 5.5

---

## Quick decision-making aid

- **"I don't know which model fits"** → gpt-6-luna (default model)
- **"I just want a very good answer"** → gpt-6-sol / gpt-6.1-sol / GPT-5.6 Terra / Claude Sonnet 5.5
- **"It should be as fast and inexpensive as possible"** → gpt-6-luna / GPT-5.6 Luna / gpt-5-nano / Gemini 3.5 Flash-Lite / Claude Haiku 5.5
- **"I want to program / write code"** → gpt-6.1-sol / gpt-6-sol / GPT-5.6 Sol / Claude Sonnet 5.5
- **"It's complicated or extremely important"** → GPT-5.6 Sol / gpt-6.1-sol / Claude Opus 5.5
- **"I'm running a lot of tasks in parallel"** → gpt-6-luna / GPT-5.6 Luna / Claude Haiku 5.5
- **"Hosting in Germany is mandatory"** → STACKIT models in [CompanyGPT Sovereign](/en/company-gpt/sovereign/) or, if available, in your environment (e.g., Llama 3.3 70B Instruct)
- **"I need images"** → OpenAI Image Tools (GPT Image 1.5 or GPT Image 2.5) / Gemini Image Tools (Nano Banana)
- **"I still use a GPT-4 or Claude 4.x model"** → see [Legacy models](#legacy-models) for the right successor model
