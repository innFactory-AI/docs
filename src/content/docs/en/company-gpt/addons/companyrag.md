---
title: CompanyRAG
description: CompanyRAG Add-on
---

With the CompanyRAG add-on, you can make large quantities of documents available to your agents via the MCP interface. The documents can be indexed from different sources and integrated using the [RAG - Retrieval Augmented Generation](/en/prompt-engineering/prompt-techniken/rag) methodology. There are no limitations on the length of individual documents or the total number of documents.

Indexing can be implemented once or on a recurring basis, depending on your use case.

## CompanyRAG User Interface

The user interface allows you to add individual and multiple files or entire data sources for indexing.
The interface is divided into:
- [Files](#files)
- [Collections](#collections)
- [Sources](#sources)
- [Jobs](#jobs)
- [Upload](#upload)

### Files

An overview of all files that have been added to the service.
The overview includes:
- **Name**: Document designation of the document (partially abbreviated - hover function for full display)
- **Collection**: The collection that the file has been assigned to
- **Size**: File size
- **Status**: Status of the associated job
  - Completed: Document has been successfully indexed
  - Pending: Indexing job is still pending
  - Failed: Indexing was not successful
- **Last indexed**: Date and time of the last completed indexing job
- **Actions**:
  - Re-index: Creates a new indexing job
  - Delete: Deletes the file from the service including associated jobs and indexed form

### Collections

Collections are storage locations and allow you to organize documents and permissions.

#### Create Collections

![create-collection](create-collection.png)

In addition to name and description, visibility can also be set:

- Private: Only you can access this collection and associated documents. However, you can add further shares later.
- Public: Everyone can see the collection and display files from it.

All collections you own appear under the `My` tab. Collections specifically shared with you (Admin or Viewer role) are shown under `Shared with me`. Under `Public`, all publicly visible collections are displayed.

#### Collection Actions

![share-edit-delete-collections](actions-collections.png)
   Share   Edit                          Delete

- **Share:**
  - **Type**: Share with individual users, an Entra group, or the entire organization.
  - **Role**: Viewer (collection and associated documents can be viewed) or Admin (collection and associated documents can be edited)
  After confirmation via `Add Share`, the share is granted and added to the `Current Shares` list.
- **Edit**: Change the name and description of the collection.
- **Delete**: Delete the collection.

:::danger
Deleting a collection permanently deletes all associated documents and jobs of the collection!
:::

### Sources

Connect Teams and SharePoint as document sources and manage synchronization

#### Connect SharePoint

Click the "+ Connect SharePoint" button to start the selection.

![connect_sharepoint_flow](connect_sharepoint.png)

1. **Select website or team**: Select the SharePoint website or team
2. **Select library**: Libraries of the selected website/team
3. **Browse folder**: Select the folder and file types for synchronization. Set the collection where the files should be synchronized to.

:::note
Only folders are selectable. All supported files in this folder and in underlying hierarchical levels (subfolders) are automatically synchronized.
:::

After connection, the folder appears under "All Sources" as Active. Synchronization must be initiated once via the "Synchronize now" button. Subsequently, the connected documents are added as synchronization jobs and future contents of the folder are automatically synchronized.

#### Source Actions

- **Synchronize now**: Start initial/manual synchronization
- **Pause/Resume**: Deactivate or reactivate selected sources
- **Delete**: Remove the data source - already synchronized files remain in the collection

### Jobs

Display indexing jobs and status

Status:
- Pending: Document will be indexed soon
- Running: Document is currently being indexed
- Completed: Document has been indexed
- Failed: Document could not be indexed. Further information can be found in the "Error" column.

Actions:
- Delete: Deletes the job from the queue or history. Status Completed → Indexed file remains. Status Pending → File will not be indexed. Running processes cannot be deleted.
- Retry

### Upload

Upload individual and multiple files manually for indexing.

Supported formats: PDF, DOCX, DOC, TXT, MD, RTF, HTML, HTM, XML, CSV, JSON, EML, XLSX, XLS, PPTX, PPT

## CompanyRAG in CompanyGPT

Via the [MCP Server](/en/company-gpt/integrationen/mcp-server/) "ai-search", the RAG service can be connected with CompanyGPT to search indexed documents across all (available to the user) collections
(see [Similarity Search](/en/prompt-engineering/prompt-techniken/rag/#rag-workflow-for-file-processing))

The following specialized search tools for the RAG Collection – from semantic search to document retrieval to metadata filtering – are available:

1. **search_content**:
Semantic similarity search for general queries. Default choice for most user questions.
Required parameters: query (search text), source (technical name of the collection)
Optional: topK (number of results: default 5, max 20)

2. **find_content_by_source**:
Retrieve all content from a specific document. Use for queries about individual documents (e.g., "What's in documentation.md?").
Required parameters: source (document name), collection (technical name of the collection)

3. **find_content_by_metadata**:
Filter content by metadata attributes. Use for filtered results (e.g., "All urgent tasks from 2026").
Required parameters: filter (JSON object with operators $and, $or, $not), collection (technical name of the collection)

The MCP server can be added to an [agent](/en/company-gpt/agenten/) for easier use.

A step-by-step guide for setting up a search agent with a suitable instruction can be found in the tutorial **[Using CompanyRAG in CompanyGPT](/en/tutorials/addons/companyrag-in-companygpt/).**

## Downloads 

- [companyRAG Windows Syncer 2.5.0](/downloads/companyRAG-syncer-windows-v2.5.0.zip)