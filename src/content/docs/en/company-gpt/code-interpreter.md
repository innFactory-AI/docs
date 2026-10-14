---
title: Code Interpreter
description: With the "Run Code" integration, CompanyGPT writes and executes code in an isolated sandbox within your own infrastructure – for data analysis, charts, and exact calculations.
---

Language models predict text and do not calculate — they reach their limits with exact mathematics, data analysis, or creating charts. With the **Run Code** integration (Code Interpreter), CompanyGPT can instead write code, execute it in an isolated sandbox, and include the actual result in its answer. Execution takes place entirely within your own infrastructure; no data is transferred to external services.

## Activation

Turn on the integration directly in the [chat input](/en/company-gpt/chat/) in the **Tools** menu via **Run Code**. The switch applies to the respective chat and stays on until you turn it off again. It can also be assigned to [agents](/en/company-gpt/agenten/) as a capability via the Tool Library, allowing an agent to execute code on its own.

## Files

Files you attach to a message do not have to be uploaded separately for the Code Interpreter. If **Run Code** is active, CompanyGPT automatically makes the attached files available to the Code Interpreter as soon as it needs them. For an agent, you can additionally add fixed files for code execution. For more information, see [File processing](/en/company-gpt/dateiverarbeitung/).

Files created by the Code Interpreter, for example an analyzed Excel file or a chart, appear in the answer as a card from which you can download the file. For many formats, a preview is available there as well.

## Use cases

- **Data analysis**: Uploaded data sources (e.g. CSV, Excel, or JSON files) can be filtered, aggregated, and transformed. The result is available as output in the chat or as a file to download.
- **Charts and visualizations**: Charts can be generated from data (e.g. with Matplotlib) and are displayed directly in the chat.
- **Exact calculations**: Instead of estimating a result, the model writes the calculation as code and returns the actually computed result.
- **Format conversion and code testing**: Unstructured data can be converted into structured formats (e.g. JSON), and code snippets can be executed and verified directly.

## Supported languages

The Code Interpreter executes **Python**, **JavaScript/TypeScript** (Node.js and Bun), and **Bash**.

## Security

- **Your own infrastructure**: Code execution runs as a dedicated service in the company's cluster — no external execution service is used.
- **Isolated sandbox**: Each execution takes place in its own sealed-off sandbox. The code has no access to the company network or the internet.
- **Temporary sandbox**: The sandbox is only available for the duration of the execution. Files created by the Code Interpreter are stored by CompanyGPT like other files in the chat, so you can still download them later via the card in the answer.

:::note[Limitation]
Execution time and output size per run are limited. The Code Interpreter is not suitable for long-running or very memory-intensive workloads.
:::
