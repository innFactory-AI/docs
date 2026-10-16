---
title: File processing
description: Learn how CompanyGPT processes uploaded files—images and PDFs passed directly to the AI model, Office documents as text, file search and Code Interpreter depending on the active tools, and SharePoint integration.
---

:::note[New chat interface]
Screenshots and labels on this page show the [new chat interface](/en/company-gpt/neue-chat-oberflaeche/). It is currently available in the demo access and in pilot environments; in other environments, labels and steps may still differ.
:::

In CompanyGPT, you can attach files to your messages. CompanyGPT automatically decides how a file is processed, based on the file type, the selected AI model, and the active tools. You no longer have to choose a destination when uploading.

:::tip[Quick overview]
- Images and PDFs: are sent directly to the AI model if it can process these files. This way, graphics, layout, and handwritten content are taken into account as well.
- Office documents and text files: are converted to text and attached to the message, up to 100,000 tokens per file. Longer texts are truncated.
- File search and Run Code: if one of these tools is active, the files are also available to it when needed.
:::

## Uploading files

In the chat input, click the plus icon (**Attach and tools**), choose **From Local Computer** under **Attach**, and then select the files. If the [SharePoint integration](#sharepoint-integration) is enabled in your environment, you also find **From SharePoint** there.

The standard configuration has the following limits, which your organization can adjust:

- up to 50 files per message
- up to 100 MB per file

## How files are processed

### Images and PDFs

Images and PDF files are sent to the AI model together with your message. This allows the model to read and interpret the content in full, for example to analyze images, process texts including graphics, or evaluate handwritten scans and photos. You can give additional instructions in your message.

If the selected model cannot process PDF files directly, CompanyGPT extracts the text instead.

**Limitation**: The AI model determines which information and file types can be processed. In addition, the limits of the respective AI provider apply per request, for example 32 MB or 100 PDF pages for Claude models and 20 MB for the entire request including the attached files for Gemini models (Google Vertex AI). It is therefore best to split very large PDF files.

### Office documents and text files

The text is read from Office documents and attached to the message. Up to 100,000 tokens per file are included; longer texts are truncated. This is useful if, for example, you want to summarize texts or extract important points.

| File type | Processing |
| --- | --- |
| Word (`.docx`), PowerPoint (`.pptx`, `.potx`, `.ppt`), e-books (`.epub`) | Text recognition (OCR) by an AI model, up to 30 pages per document. For Word files, the built-in parser (up to 15 MB per file) takes over if text recognition fails or the document has more than 30 pages. |
| Excel (`.xlsx`, `.xls`), OpenDocument (`.odt`, `.ods`) | Built-in parser, up to 15 MB per file. Excel files are taken over sheet by sheet as a table (CSV). |
| Older Word files (`.doc`, Word 97–2003) | are not read. Please upload such files as `.docx` or PDF. |
| Text files (e.g. `.txt`, `.md`, `.csv`, `.json`) | are read directly as text |

In some environments without text recognition, Word files (`.docx`) are read directly by the built-in parser.

**Limitation**: When converting to text, images in the documents are not taken into account.

### File search and Run Code

If [file search](/en/company-gpt/integrationen/dateisuche/) or [Run Code](/en/company-gpt/code-interpreter/) is active in the chat or in the agent, CompanyGPT also provides the attached files to these tools when needed:

- **File search** indexes the contents and searches them for the sections that match the question. Information on how this works can be found here: [RAG - Retrieval Augmented Generation](/en/prompt-engineering/prompt-techniken/rag/#rag-workflow-for-file-processing)
- **Run Code** can analyze and convert files, for example CSV or Excel files, with code.

**Limitation**: Documents in file search are only accessible to the respective user. To make documents accessible to multiple users or the entire organization in the file search, they can be integrated via [agents](/en/company-gpt/agenten) or via [companyRAG](/en/company-gpt/addons/companyrag).

## Files in answers

If a tool creates a file, for example the Code Interpreter or companyFILES, it appears in the answer as a card. From there, you can download the file; for many formats, a preview is available as well.

## SharePoint integration

With **From SharePoint**, files do not have to be uploaded manually but can be added directly from all SharePoint locations accessible to you. They are processed in the same way as uploaded files.

:::note[Not available in all environments]
Whether this feature is available in your environment is decided by your organization. If you have questions, contact your administrator.
:::
