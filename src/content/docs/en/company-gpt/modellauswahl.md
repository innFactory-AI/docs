---
title: Model Selection
description: When to use which AI model? This overview will help you.
---

### Dynamic Model Routing

Simply select "auto" in the OpenAI model selection to activate CompanyGPT's dynamic routing. The system analyzes your prompt and automatically chooses the most efficient OpenAI model: fast, smaller models for standard questions and high-end models for complex analyses. This saves time and token costs without any manual effort.

### Rule of thumb:

- **Fast & inexpensive** → Mini / Flash / Nano / Haiku
- **Standard & reliable** → large all-round models
- **Complex & critical** → most powerful models
- **EU / internal / data protection** → STACKIT models

---

## OpenAI

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

- **For:** complex problems and maximum intelligence
- **When:** demanding coding, scientific analyses, strategic planning
- **Why:** OpenAI's most advanced model with unmatched logical reasoning

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

### gpt-4o

- **For:** versatile multimodality and fluid interaction
- **When:** image and speech processing, creative drafts, brainstorming
- **Why:** the established flagship model for fast, multimedia tasks

### gpt-4o-mini

- **For:** high speed at minimal cost
- **When:** simple chat assistants, fast filtering of large data volumes
- **Why:** extremely inexpensive lightweight model with solid base intelligence

### auto

- **For:** automated efficiency without manual selection
- **When:** varying tasks, straightforward workflows
- **Why:** automatically selects the most suitable model based on the complexity of your request

### GPT Image 1.5

- **For:** image generation
- **When:** when images need to be generated
- **Why:** OpenAI's image generation model

---

## Google

### Gemini 3.1 Flash-Lite

- **For:** maximum speed and cost efficiency
- **When:** quick follow-up questions, simple bulk tasks, real-time translations
- **Why:** extremely short response time at unbeatably low cost

### Gemini 3.5 Flash

- **For:** autonomous reasoning at high speed
- **When:** complex workflows, deep analyses, demanding coding
- **Why:** Google's fast model with flexible thinking levels for smarter tasks

### Gemini Image Tools / Nano Banana

- **For:** image analysis, image generation, image editing
- **When:** text-to-image generation, image editing with prompts (image + text), and composition of multiple images
- **Why:** Google's image models integrated into CompanyGPT

---

## Anthropic

### Claude Sonnet 4.6

- **For:** programming, complex text processing, and demanding all-round tasks (Recommended)
- **When:** software development, code refactoring, deep text comprehension
- **Why:** the sweet spot of the series. Opus-class performance at Sonnet pricing (1M context)

### Claude Haiku 4.5

- **For:** very fast processing with high logical precision
- **When:** filtering large data volumes, UI-based chatbots, simple to medium tasks at scale
- **Why:** very fast and cost-efficient (less reasoning than Sonnet/Opus)

---

## STACKIT

These open-source models run in the STACKIT Cloud (EU/Germany) and are particularly suited for workloads with high requirements for data protection, data sovereignty, and internal compliance.

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

### google/gemma-3-27b-it

- **For:** versatile instruct tasks with good efficiency
- **When:** internal assistants, knowledge work, structured text production
- **Why:** strong mid-range between small fast and large expensive OSS models

### Qwen/Qwen3.6-27B

- **For:** versatile text tasks and strong multilingual understanding
- **When:** creative writing, logical problem-solving, precise translations
- **Why:** the latest Qwen generation with an optimal balance of compact size and high intelligence

### openai/gpt-oss-20b

- **For:** lightweight open-source text tasks
- **When:** cost-sensitive internal workflows with controllable infrastructure
- **Why:** compact OSS approach for solid quality with lower resource requirements

### Qwen/Qwen3-VL-Embedding-8B

- **For:** multimodal embeddings (text/image) for search and retrieval
- **When:** semantic search, RAG indexing, similarity search across mixed data
- **Why:** specialized in vector representations rather than classic chat responses

### intfloat/e5-mistral-7b-instruct

- **For:** high-quality text embeddings for retrieval and ranking
- **When:** vector search, document retrieval, relevance ranking in RAG pipelines
- **Why:** proven embedding model for precise semantic search applications

---

## Legacy models

:::caution[Will be discontinued]
The GPT-4.1 family will no longer be supported in the near future and will be removed from CompanyGPT. Please migrate to a current model: **GPT-5.6 Terra** or **gpt-5-mini** as a replacement for gpt-4.1, and **GPT-5.6 Luna** or **gpt-5-nano** as a replacement for gpt-4.1-mini.
:::

### gpt-4.1

- **For:** reliable problem-solving and standard contexts
- **When:** text optimization, research, logical comparisons
- **Why:** the proven, refined workhorse for demanding everyday tasks
- **Migrate to:** GPT-5.6 Terra / gpt-5-mini

### gpt-4.1-mini

- **For:** fast processing at low cost
- **When:** structured text creation, data pre-sorting, simple conversations
- **Why:** compact version of GPT-4.1, optimized for efficiency and speed
- **Migrate to:** GPT-5.6 Luna / gpt-5-nano

---

## Quick decision-making aid

- **"I just want a very good answer"** → GPT-5.6 Terra / gpt-5.1 / gpt-5-mini / Claude Sonnet 4.6
- **"It should be as fast and inexpensive as possible"** → GPT-5.6 Luna / gpt-5-nano / gpt-4o-mini / Gemini 3.1 Flash-Lite / Claude Haiku 4.5
- **"I want to program / write code"** → GPT-5.6 Sol / Claude Sonnet 4.6 / gpt-5.4
- **"It's complicated or extremely important"** → GPT-5.6 Sol / gpt-5.4 / gpt-5.1
- **"I'm running a lot of tasks in parallel"** → GPT-5.6 Luna / Claude Haiku 4.5
- **"Data protection (EU/Germany) is mandatory"** → STACKIT models (e.g., Llama 3.3 70B Instruct)
- **"I don't know which model fits"** → auto (dynamic routing)
- **"I need images"** → GPT Image 1.5 / Gemini Image Tools / Nano Banana
