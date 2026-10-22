---
title: Code Interpreter
description: With the "Run Code" integration, CompanyGPT writes and executes code in an isolated sandbox within your own infrastructure – for data analysis, charts, and exact calculations.
---

Language models predict text and do not calculate — they reach their limits with exact mathematics, data analysis, or creating charts. With the **Run Code** integration (Code Interpreter), CompanyGPT can instead write code, execute it in an isolated sandbox, and include the actual result in its answer. Execution takes place entirely within your own infrastructure; no data is transferred to external services.

## Activation

The integration can be enabled or disabled for individual messages directly in the [chat input](/en/company-gpt/chat/). It can also be assigned to [agents](/en/company-gpt/agenten/) as a capability, allowing an agent to execute code on its own.

## Use cases

- **Data analysis**: Uploaded data sources (e.g. CSV, Excel, or JSON files) can be filtered, aggregated, and transformed. The result is available as output in the chat or as a file to download.
- **Charts and visualizations**: Charts can be generated from data (e.g. with Matplotlib) and are displayed directly in the chat.
- **Exact calculations**: Instead of estimating a result, the model writes the calculation as code and returns the actually computed result.
- **Format conversion and code testing**: Unstructured data can be converted into structured formats (e.g. JSON), and code snippets can be executed and verified directly.

## Files in the Code Interpreter

- **Attached files**: When **Run Code** is active, files attached to a message (e.g. CSV, Excel) are available to the code in the working directory `/mnt/data`.
- **Result files**: Files the code creates (e.g. a chart as PNG or a cleaned Excel file) appear as attachments to the response and can be downloaded.
- **Templates from companyFILES**: With the tool `attach_template_to_chat`, [companyFILES](/en/company-gpt/addons/companyfiles/) places a template in the chat as a file. From the **next message** on, the code can edit it, for example to change many parts of a Word or PowerPoint layout at once. This requires companyFILES to be allowed to store files directly in the chat; your administrators set this up.
- **Skills with bundled files**: If a [skill](/en/company-gpt/skills/) ships its own files (e.g. guides under `references/` or scripts), they are provided read-only under `/mnt/data/skills/<skill-name>/`. Ready-made skills are listed under [Skills tutorials](/en/tutorials/skills/).

## Supported languages

The Code Interpreter executes **Python**, **JavaScript/TypeScript** (Node.js and Bun), and **Bash**.

## Security

- **Your own infrastructure**: Code execution runs as a dedicated service in the company's cluster — no external execution service is used.
- **Isolated sandbox**: Each execution takes place in its own sealed-off sandbox. The code has no access to the company network or the internet.
- **Temporary data**: Files provided for execution and files generated during execution are stored only temporarily; the sandbox is no longer available after execution.

:::note[Limitation]
Execution time and output size per run are limited. The Code Interpreter is not suitable for long-running or very memory-intensive workloads.
:::
