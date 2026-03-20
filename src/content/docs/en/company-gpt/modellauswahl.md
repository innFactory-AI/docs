---
title: Model Selection
description: When to use which AI model? This overview will help you.
---

:::note[OpenAI model updates]
Microsoft plans to phase out the OpenAI models GPT-4o and GPT-4o-mini by the end of March 2026 and replace them with newer generations such as GPT 5.1 and GPT 4.1-mini.
:::

### Dynamic Model Routing

CompanyGPT features intelligent, dynamic model routing. The system checks your prompts in real time for complexity and contextual requirements, and automatically forwards the request to the most suitable LLM. Standard queries are processed by smaller, extremely fast models, whilst complex analytical tasks are routed to high-end models. You save significantly on token costs and receive faster responses without having to make manual adjustments.

### Rule of thumb:

- **Fast & inexpensive** → Mini / Flash / Nano / Haiku
- **Standard & reliable** → Large all-round models
- **Complex & critical** → Most powerful models
- **EU / internal / data protection** → Stackit models

---

## OpenAI

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

---

## Google

### Gemini 2.5 Flash

- **For:** maximum speed
- **When:** quick queries, brainstorming, iterations
- **Why:** very fast, good at overview and context

### Gemini 2.5 Pro

- **For:** deep thinking and large contexts
- **When:** complex documents, comparisons, analyses
- **Why:** Google's strongest model with high structural quality

### Gemini Image Tools / Nano Banana

- **For:** image analysis, image generation, image editing
- **When:** text-to-image generation, image editing using prompts (image + text) and the composition of multiple images
- **Why:** Google’s image models, which are integrated into CompanyGPT

---

## Anthropic

### Claude 4.6 Opus

- **For:** maximum complexity and in-depth analysis
- **When:** strategic planning, extremely long contexts, the most challenging logic tasks
- **Why:** Anthropic’s most powerful model, when precision takes absolute priority over cost and speed

### Claude 4.6 Sonnet

- **For:** programming, complex text processing and demanding all-round tasks
- **When:** software development, code refactoring, deep text comprehension, structured data extraction
- **Why:** The sweet spot of the range. Extremely strong at coding (often at or above Opus level) whilst remaining efficient

### Claude 4.5 Haiku

- **For:** very fast processing with high logical precision
- **When:** filtering large amounts of data, UI-based chatbots, simple to medium tasks in bulk
- **Why:** the fastest and most affordable model in the 3.5 series, often outperforms older flagship models

---

## Perplexity AI

- **For:** looking things up, overview, fact checking, research
- **When:** questions with facts and sources
- **Why?** Answer **with sources**

---

## Quick decision-making aid

- **“I just want a good answer”** → gpt-4o
- **“I need it fast”** → gpt-4o mini or Gemini 2.5 Flash
- **“It's complicated or important”** → gpt-4.1, gpt-5 mini, or Gemini 2.5 Pro
- **“Search documents”** → Gemini 2.5 Flash
