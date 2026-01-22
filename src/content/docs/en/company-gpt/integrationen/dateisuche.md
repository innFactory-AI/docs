---
title: File Search
description: Learn how File Search in CompanyGPT uses RAG (Retrieval Augmented Generation) to enrich AI responses with specific knowledge from internal documents.
---

File Search allows you to search the contents of files similar to the query and enrich the responses with internal, specific knowledge. File search is only available per user. 

:::note[What is file search suitable for?]
It is best suited for longer text content that does not need to be processed in its entirety, but rather where individual sections relevant to the question should be searched for and included in the answers.

Further information here: [File processing](/en/company-gpt/dateiverarbeitung/)
:::


The files are not added to the context in their entirety; instead, only relevant content is returned through a similarity search. This functionality is called [**RAG - Retrieval Augmented Generation**](/en/prompt-engineering/prompt-techniken/rag) and expands the knowledge of AI and AI agents in CompanyGPT with domain-specific, internal, or even confidential documents. The content is converted into embeddings (vectors) using an AI model. When searching, the search query is also converted into vectors and the proximity is calculated mathematically. This allows **content proximity** to be mapped much better than, for example, using a full-text search.