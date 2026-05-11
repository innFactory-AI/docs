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

### GPT 5.5

- **For:** coding, professional knowledge work, and the most complex tasks
- **When:** software development, strategic decisions, critical analyses, high-stakes outputs
- **Why:** latest flagship (1M context) with the highest overall performance across all categories

### GPT 5.4

- **For:** coding and demanding analyses with very long context
- **When:** large document volumes, extensive reports, long-context workflows
- **Why:** more affordable than GPT 5.5 while still delivering strong quality (1M context)

### GPT 5.4 Mini

- **For:** high quality with high throughput, coding, and autonomous agents
- **When:** batch processing, scaled content workflows, computer use, subagents
- **Why:** strongest mini model (400K context) with support for computer use and subagents

### GPT 5.3 Chat

- **For:** dynamic real-time interaction
- **When:** assistant dialogues, iterative coordination, quick follow-up questions in chat
- **Why:** chat-optimized for smooth conversations and strong context retention

### GPT 5.2 Codex

- **For:** software development and technical implementation
- **When:** writing code, refactoring, debugging, creating tests
- **Why:** specialized for development tasks with high code quality

### GPT 5.2

- **For:** challenging analysis and structuring tasks
- **When:** complex evaluations, difficult trade-offs, precise reasoning
- **Why:** strong reasoning model for demanding general workloads

### GPT 5.2 Chat

- **For:** demanding dialogues with high reliability
- **When:** consulting-like conversations, long interactions, precise follow-ups
- **Why:** optimized for chat quality and more robust against hallucinations

### GPT 5.1 Chat

- **For:** interactive dialogues and agent workflows
- **When:** support, fluent conversations, strict adherence to instructions
- **Why:** chat-optimized for natural language and stable context management

### GPT 5.1

- **For:** versatile general-purpose tasks
- **When:** structured texts, analyses, automations without a primary chat focus
- **Why:** balanced quality, speed, and reliability for everyday use

### GPT 5 Mini

- **For:** demanding tasks with efficiency
- **When:** coding, structured outputs, longer texts
- **Why:** more modern and robust than the GPT-4 series

### GPT 5 Nano

- **For:** extremely simple, fast tasks
- **When:** auto-completion, short answers, mass tasks
- **Why:** extremely fast and inexpensive, but limited depth

### O3 Mini

- **For:** logic, mathematics, coding, and step-by-step reasoning
- **When:** when clean derivation is more important than style or creativity
- **Why:** strongly optimized for precise problem-solving and rational derivations

### GPT 4.1

- **For:** complex analyses, clean argumentation
- **When:** strategy, concepts, in-depth explanations
- **Why:** more precise and stable than GPT 4o

### GPT 4.1 Mini

- **For:** better quality while still maintaining high speed
- **When:** when GPT 4o mini is too superficial
- **Why:** a good middle ground between quality and performance

### GPT Image 1.5

- **For:** image generation
- **When:** when images need to be generated
- **Why:** OpenAI's image generation model

---

## Google

### Gemini 2.5 Flash

- **For:** maximum speed
- **When:** quick follow-up questions, brainstorming, iterations
- **Why:** very fast, good for overview and context

### Gemini 2.5 Pro

- **For:** deep thinking and large contexts
- **When:** complex documents, comparisons, analyses
- **Why:** Google's strong model for high quality on complex tasks

### Gemini Image Tools / Nano Banana

- **For:** image analysis, image generation, image editing
- **When:** text-to-image generation, image editing with prompts (image + text), and composition of multiple images
- **Why:** Google's image models integrated into CompanyGPT

---

## Anthropic

### Claude Opus 4.6

- **For:** highest complexity and in-depth analyses
- **When:** strategic planning, extremely long contexts (1M), most difficult logic tasks
- **Why:** strongest Anthropic model available in CompanyGPT for agent teams and parallel workflows (highest costs)

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

### Mistral Nemo Instruct

- **For:** fast, general instruct tasks
- **When:** internal assistants, standard QA, summaries with EU hosting
- **Why:** efficient all-rounder with a good balance of quality, latency, and cost

### Qwen 3 VL Embedding 8B

- **For:** multimodal embeddings (text/image) for search and retrieval
- **When:** semantic search, RAG indexing, similarity search across mixed data
- **Why:** specialized in vector representations rather than classic chat responses

### Qwen 3 VL 235B

- **For:** multimodal high-end analysis with image and text understanding
- **When:** visual document analysis, complex image-text tasks, demanding inference
- **Why:** very powerful VL model for deeper understanding of multimodal content

### GPT OSS 20B

- **For:** lightweight open-source text tasks
- **When:** cost-sensitive internal workflows with controllable infrastructure
- **Why:** compact OSS approach for solid quality with lower resource requirements

### Llama 3.1 8B Instruct

- **For:** fast inference for standard instruct use cases
- **When:** chatbots, classification, extraction, and simple automations
- **Why:** small model size with high efficiency and solid production maturity

### Llama 3.3 70B Instruct

- **For:** more demanding generation and reasoning in the EU stack
- **When:** more complex enterprise questions, longer responses, better level of detail
- **Why:** 70B class provides significantly more quality than small models while retaining OSS flexibility

### GPT OSS 120B

- **For:** highest OSS quality for complex text tasks
- **When:** when internally hosted top performance is required instead of maximum speed
- **Why:** large open-source model for strong analytical and linguistic results

### E5 Mistral 7B Instruct

- **For:** high-quality text embeddings for retrieval and ranking
- **When:** vector search, document retrieval, relevance ranking in RAG pipelines
- **Why:** proven embedding model for precise semantic search applications

### Gemma 3 27B

- **For:** versatile instruct tasks with good efficiency
- **When:** internal assistants, knowledge work, structured text production
- **Why:** strong mid-range between small fast and large expensive OSS models

---

## Perplexity AI

- **For:** research, fact-checking, lookups, and overviews with source citations
- **When:** questions that require current facts, web sources, or well-founded derivations
- **Why:** answers always come **with citable sources** — from quick fact checks to in-depth multi-source research

---

## Quick decision-making aid

- **"I just want a very good answer"** → GPT 5.1 / GPT 5 Mini / Claude Sonnet 4.6
- **"It should be as fast and inexpensive as possible"** → GPT 5 Nano / GPT 5.4 Mini / Gemini 2.5 Flash / Claude Haiku 4.5
- **"I want to program / write code"** → GPT 5.2 Codex / Claude Sonnet 4.6
- **"It's complicated or extremely important"** → GPT 5.5 / GPT 5.4 / Claude Opus 4.6 / Gemini 2.5 Pro
- **"I need sources from the web"** → Perplexity AI
- **"Data protection (EU/Germany) is mandatory"** → STACKIT models (e.g., Llama 3.3 70B Instruct)
- **"I work in chat (dialogue)"** → GPT 5.3 Chat / GPT 5.2 Chat / GPT 5.1 Chat
- **"I need images"** → GPT Image 1.5 / Gemini Image Tools / Nano Banana
