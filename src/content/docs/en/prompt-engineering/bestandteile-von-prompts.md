---
title: Components of Prompts
description: An overview of the most important elements and structures of prompts in prompt engineering.
---

A well-structured prompt consists of several essential elements that influence the quality and accuracy of the response. The most important components are explained below and supplemented with examples.

:::tip[Basic principles]
Not all components need to be present in every prompt. Each component serves a purpose and refines the result in a certain direction, but its importance varies depending on the use case.

Every prompt for more complex tasks could consist of at least the following components:
1. Instruction
2. Context
3. Input
4. Output format
5. Persona
:::

## 1. Instruction
The instruction describes what the language model should do or answer. It is often the core of a prompt.

**Example:**  
*Write a poem about summer.*



## 2. Context
The context provides additional information or background to guide the model's response in a more targeted manner.

**Example:**  
*You are a poetry slam participant and want to wow the audience.*



## 3. Input
Input is specific data, questions, or text to which the response should relate.

**Example:**  
*Text: The sun is shining, the sea is sparkling.*



## 4. Output format
The output format describes how the response should look (e.g., as a list, table, continuous text).

**Example:**  
*Output the answer as a table with two columns (What happens? Why is it important?).*



## 5. Persona
The persona determines the perspective or role from which the answer should be given (e.g., as an expert, teacher, child).

**Example:**  
*You are a computer science professor and explain the term “cloud computing.”*



## 6. Constraints
Constraints are specifications that limit the answer in terms of length, style, or content.

**Example:**  
*Answer in a maximum of three sentences and do not use technical terms.*


## 7. Exemplary approach (`Examples`)
Putting examples at the beginning of the prompt shows the model what the answer might look like.

**Example:**  
*Example:  
Question: What is AI?  
Answer: Artificial intelligence is the ability of machines to solve tasks intelligently.*



## 8. Tools
Sometimes the prompt may contain information about external tools or functions that should be used.

**Example:**  
*Use the Wikipedia API to research current data.*



## Composition of an effective prompt

A typical prompt can consist of a targeted combination of the above elements:

```text
You are an environmental scientist (persona). 
Explain the greenhouse effect (instruction), taking into account current CO2 emissions (context). 
Answer in a maximum of five sentences (restriction). 
Provide the answer as a numbered list (output format).
```



Each component contributes to creating clarity and precision in prompt engineering. By consciously integrating and combining these elements, interaction with AI models can be made more precise and effective.