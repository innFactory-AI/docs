---
title: Structuring prompts
description: Introduction to the functionalities of CompanyGPT
---

When creating complex prompts, it makes sense to divide them into clearly recognizable sections. This makes it clear to both the AI system and human users which parts of the prompt fulfill which function. A structured division helps to avoid confusion, improves traceability, and usually leads to more precise and consistent results.

## Marking sections

There are various formats for clearly delimiting sections. The use of angle brackets, similar to those used in XML or HTML, has proven particularly effective. Here, each section is marked by an opening and a closing tag – for example:

```
<Instruction>
Please summarize the following text in three sentences.
</instruction>

<output format>
- Point 1
- Point 2
- Point 3
</output format>

<persona>
You are an experienced editor.
</persona>

<context>
The text is taken from a recent newspaper article.
</context>

<input>
The text to be analyzed follows here.
</input>
```

This approach makes it particularly easy for AI to assign different pieces of information in a targeted manner and thus deliver the desired output in a structured way. However, it is not absolutely necessary to use this exact format. Any clear structuring principle can be used as long as the sections are clearly distinguishable from one another.

### Alternative: Use of headings

Markdown headings are also useful for clearly marking the individual sections of a prompt:

```
# Instruction
Please summarize the text.

# Output format
Bullet point list

# Persona
You are a marketing expert.

# Context
Content of a product brochure.
```
Headings are particularly helpful when prompts become more extensive or when several thematic levels need to be covered. They promote clarity and comprehensibility—both for the AI and for the human prompt authors.

## When are sections and headings useful?

- **Short prompts**: If prompts consist of only one or two sentences, an additional section structure is usually not necessary.
- **More complex prompts**: As soon as more context, specific instructions, person roles, or a desired output format are specified, it is advisable to structure the text into sections. Headings or tags prevent misunderstandings and help to make the prompt clear.