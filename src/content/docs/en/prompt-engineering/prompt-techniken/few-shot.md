---
title: Few-Shot Prompting
description: Discover Few-Shot Prompting, a method for guiding large language models (LLMs) with just a few examples to produce more accurate, consistent, and domain-specific results.
---

## Description
In few-shot prompting, several examples of inputs and the corresponding desired outputs are provided in the prompt. The aim is to use these examples to demonstrate to the language model (LLM) what kind of response or transformation is expected for a specific task. The examples provided serve as guidance for the model and help to minimize uncertainty and improve the quality and consistency of responses.

The model uses both its internal knowledge and the structure provided by the examples. This makes few-shot prompting particularly suitable for tasks that are not completely self-explanatory and require specific formatting or a defined evaluation scale. In the prompt, the examples are inserted in special blocks such as `<Examples> ... </Examples>` – this pattern makes it clear which elements serve as examples and what is expected of the model.

## Advantages

- Allows the behavior of the model to be controlled in a targeted and flexible manner without formulating explicit rules.
- Particularly useful for domain-specific or creative tasks where the desired output may vary.
- Suitable for adapting the response quality to specific requirements (e.g., custom labels for sentiment analysis, a specific output format, etc.).

## Typical examples

### Sentiment analysis with user-defined labels

```
Text: “I love it!”, Sentiment: Positive.

Text: “It's okay.”, Sentiment: Neutral.

Text: “That's terrible.”, Sentiment: Negative.

Text: “The service was exemplary.”, Sentiment:
```

### Entity extraction

```
Input: “Apple Inc. was founded by Steve Jobs.”

Output: {‘Company’: ‘Apple Inc.’, ‘Founder’: ‘Steve Jobs’}

Input: “Microsoft was co-founded by Bill Gates.”

Output:
```

### Rewriting text in a specific tone/style

For example, by specifying multiple transformations from casual to formal, e.g.:

```
Input: “Come on over!” → Output: “I cordially invite you to come by.”

Input: “I told you so!” → Output: “I had already pointed that out to you.”

(Now follows a new input for processing.)
```

## Areas of application

Few-shot prompting is well suited for use cases in which the desired output structure, style, or specific labels are not generally known but must be specified individually. These include, for example, custom labeling, proprietary data formats, specific text conversions, creative tasks, and customer-specific use cases.