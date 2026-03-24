---
title: Model Selection
description: When to use which AI model? This overview will help you.
---

:::note[OpenAI model updates]
Microsoft plans to phase out the OpenAI models GPT-4o and GPT-4o-mini by the end of March 2026 and replace them with newer generations such as GPT 5.1 and GPT 4.1-mini.
:::

### Dynamic Model Routing

Simply select ‘auto’ from the OpenAI model selection to enable CompanyGPT’s dynamic routing. The system analyses your prompt and automatically selects the most efficient OpenAI model: fast, smaller models for standard queries and high-end models for complex analyses. This saves you time and token costs without any manual effort.

### Rule of thumb:

- **Fast & inexpensive** → Mini / Flash / Nano / Haiku
- **Standard & reliable** → Large all-round models
- **Complex & critical** → Most powerful models
- **EU / internal / data protection** → Stackit models

---

## OpenAI

### o3-mini

- **For:** logic, maths, coding and complex problem-solving
- **When:** when the AI needs to ‘think’ (reason) internally before responding
- **Why:** combines extremely fast output speed with in-depth logical precision

### o3

- **For:** pure reasoning
- **When:** when deep thinking takes precedence over pure speed
- **Why:** specialized reasoning focus for complex logic (slightly slower)

### gpt-4o mini

- **For:** short questions, simple texts, quick answers
- **When:** everyday use, chat, summarizing, brainstorming
- **Why:** very fast and inexpensive, sufficient for ~80% of cases

### gpt-4o

- **For:** standard all-round tasks
- **When:** when quality is more important than pure speed
- **Why:** strong in text comprehension, structure, and logic

### gpt-4.1

- **For:** complex analyses, clear arguments
- **When:** strategy, concepts, in-depth explanations
- **Why:** more precise and stable than gpt-4o

### gpt-4.1 mini

- **For:** better quality while maintaining high speed
- **When:** when gpt-4o mini is too superficial
- **Why:** good balance between quality and performance

### gpt-5 mini

- **For:** demanding tasks with efficiency
- **When:** coding, structured outputs, longer texts
- **Why:** more modern and robust than the GPT-4 series

### gpt-5 nano

- **For:** extremely simple, fast tasks
- **When:** auto-complete, short answers, mass tasks
- **Why:** extremely fast and inexpensive, but limited depth

### gpt-5.1-chat

- **For:** interactive dialogues and agent workflows
- **When:** support, fluid conversations, strict adherence to instructions
- **Why:** optimised for natural language and maintaining context in chat

### gpt-5.2-chat

- **For:** more demanding dialogues with high factual accuracy
- **When:** complex advice, brainstorming, detailed explanations in chat
- **Why:** improved logic and significantly reduced hallucinations in direct conversation

### gpt-5.2

- **For:** the most demanding analytical all-round tasks
- **When:** large volumes of documents, complex data analysis, strategic planning
- **Why:** the flagship of the 5.2 generation; pure quality takes precedence over speed (will be replaced by GPT-5.4)

### gpt-5.2 pro

- **For:** tasks requiring higher precision
- **When:** when the basic version of 5.2 was not precise enough
- **Why:** Deprecated, now replaced by GPT-5.4 Pro

### gpt-5.2-codex

- **For:** pure software development and system architecture
- **When:** writing code, refactoring, debugging, planning architecture
- **Why:** a specialised model that outperforms all-round models in programming tasks

### gpt-5.3-chat

- **For:** highly dynamic real-time interactions
- **When:** complex multi-turn dialogues, subtle nuances in language
- **Why:** extremely low latency and perfect understanding of the conversation flow

### gpt-5.3 Codex

- **For:** autonomous software development
- **When:** agentic coding and code optimization
- **Why:** self-optimizing special model, 25% faster than gpt-5.2

### gpt-5.4

- **For:** the absolute maximum in performance (Recommended)
- **When:** when cost is a secondary consideration and the best results are required for extremely complex problems
- **Why:** New flagship (1M context), 33% fewer hallucinations, native computer use

### gpt-5.4 Pro

- **For:** maximum precision for the most complex tasks
- **When:** when deepest reasoning is required and higher costs/latency are accepted
- **Why:** offers the deepest reasoning of all OpenAI models

### gpt-5.4-mini

- **For:** state-of-the-art quality for high-volume tasks
- **When:** processing large datasets, routine tasks at a very high level
- **Why:** 2x faster than its predecessor, ideal for quick code edits and classification

### gpt-5.4 nano

- **For:** repetitive tasks and sub-agents
- **When:** when the lowest latency is absolutely necessary
- **Why:** extremely fast, but with a limited feature set

---

## Google

### Gemini 3.1 Pro (GA)

- **For:** complex reasoning and massive contexts (Recommended)
- **When:** processing huge documents (2M tokens) and multimodal tasks
- **Why:** Google's current, most powerful all-round flagship

### Gemini 3.1 Flash (GA)

- **For:** highest speed with large contexts
- **When:** fast processing of up to 1M tokens
- **Why:** fastest model of the 3.x series, extremely strong price-performance ratio

### Gemini 3.1 Flash Thinking

- **For:** complex STEM tasks
- **When:** mathematical or logical problems that require an internal thought process
- **Why:** extended reasoning (takes time to think, hence higher latency)

### Gemini 3.1 Pro Deep Research

- **For:** long analysis tasks and multi-hop research
- **When:** in-depth internet research across multiple sources
- **Why:** specialized model for complex information gathering (not universally applicable)

### Gemini 3 Pro (Preview)

- **For:** reasoning-first approaches and multimodal tasks
- **When:** testing reasoning capabilities
- **Why:** deprecated preview predecessor (replaced by 3.1 Pro GA)

### Gemini 3 Flash (Preview)

- **For:** fast multimodal tasks
- **When:** early tests of flash speed
- **Why:** deprecated preview predecessor (replaced by 3.1 Flash GA)

### Gemini 2.5 Flash

- **For:** maximum speed
- **When:** quick queries, brainstorming, iterations
- **Why:** very fast, good at overview and context

### Gemini 2.5 Pro

- **For:** deep thinking and large contexts
- **When:** complex documents, comparisons, analyses
- **Why:** Google's formerly strongest model with high structural quality (Deprecated)

### Gemini 2.0 Flash

- **For:** simple, extremely cheap tasks
- **When:** when absolute cost efficiency is what counts
- **Why:** deprecated, but proven entry-level model (Deprecated)

### Gemini Image Tools / Nano Banana

- **For:** image analysis, image generation, image editing
- **When:** text-to-image generation, image editing using prompts (image + text) and the composition of multiple images
- **Why:** Google’s image models, which are integrated into CompanyGPT

---

## Anthropic

### Claude 4.6 Opus

- **For:** maximum complexity and in-depth analysis
- **When:** strategic planning, extremely long contexts (1M), the most challenging logic tasks
- **Why:** Anthropic’s most powerful model for agent teams and parallel workflows (highest costs)

### Claude 4.6 Sonnet

- **For:** programming, complex text processing and demanding all-round tasks (Recommended)
- **When:** software development, code refactoring, deep text comprehension, structured data extraction
- **Why:** The sweet spot of the range. Opus-class performance at the Sonnet price (1M context)

### Claude 4.5 Haiku

- **For:** very fast processing with high logical precision
- **When:** filtering large amounts of data, UI-based chatbots, simple to medium tasks in bulk
- **Why:** very fast and cost-efficient (less reasoning than Sonnet/Opus)

### Claude 4.5 Sonnet

- **For:** good balance between performance and latency
- **When:** tasks that require up to 200k token context
- **Why:** deprecated model, outperformed by 4.6

### Claude 4.5 Opus

- **For:** premium quality and high reasoning performance of the previous generation
- **When:** complex tasks using an older model stack
- **Why:** deprecated flagship, replaced by Opus 4.6

---

## Perplexity AI

- **For:** looking things up, overview, fact checking, research
- **When:** questions with facts and sources
- **Why?** Answer **with sources**

---

## Quick decision-making aid

- **“I just want a good answer”** → gpt-5 mini / Claude 4.6 Sonnet
- **“I need it fast”** → gpt-5 nano, gpt-5.4 mini, or Gemini 3.1 Flash
- **“I want to program / write code”** → Claude 4.6 Sonnet / GPT-5.3 Codex
- **“It's complicated or extremely important”** → gpt-5.4, gpt-5.4 Pro, or Gemini 3.1 Pro
- **“Search documents”** → Gemini 3.1 Flash / Claude 4.6 Sonnet
