---
title: Formatting prompts
description: Learn how to format prompts for AI systems such as CompanyGPT precisely using Markdown. Optimize your communication with headings, lists, tables, and paragraphs for structured and clear instructions.
---

Proper formatting of prompts plays a key role in enabling AI systems to process complex tasks in a more structured, clear, and precise manner. A clear structure makes the information content easier for the AI to understand, and formatted prompts are also easier for human users to comprehend.

## Important Markdown syntax for prompt formatting

To make prompts clear, we recommend using basic Markdown elements ([Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)).

### Headings

For structuring into topic areas.
```
# First heading

## Second heading

### Third heading
```

### Bold, italics

To highlight important words or instructions.
- Bold (`**Text**`)
- Italics (`*italics*`)
- Bold + italics (`***boldanditalics***`)

### Ordered lists

```
1. Point 1
2. Point 2
3. Point 3
    3.1 Point 3.1
```

### Unordered lists

```
- Text here
- Text here too
- More text here
    - And text here as well
```

### Tables

Important:
- `|` at the beginning and end
- at least (`---`) 3x for the delimitation of the header row
- ensure the same number of cells in all rows

```
| Header row text 1 | Header row text 2 | Header row text 3 |
| --- | --- | --- |
| Value1 Row 1 | Value2 Row 1 | Value3 Row 1 |
| Value1 Row 2 | Value2 Row 2 | Value3 Row 2 |
| Value1 Row 3 | Value2 Row 3 | Value3 Row 3 |
```

### Paragraphs

Use blank lines to clearly separate content.

```
Explain the following topic to me: AI

Answer as if I were 12 years old.
```

### Example
```
# Create a summary

Please summarize the following text in **three bullet points**:

- Focus on the most important statements
- Use **objective language**
- Avoid repetition

**Text:**
> The text to be analyzed is here.