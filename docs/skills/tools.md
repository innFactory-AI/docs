---
name: tool-search
description: "Always Use this skill whenever you need to find, select, and execute a tool for a specific task but do not yet know its exact name or input schema."
---

### STEP 1: Discover Available Tools
Call the `search_tools` (or `tool_search`) utility first to find what tools exist.
* **The Query Rule:** The `query` parameter MUST be a generic, functional keyword describing what you want to achieve (e.g., `"search"`, `"files"`, `"excel"`, `"database"`, `"sql"`, `"image"`).
* **CRITICAL - Do NOT use the user's content search query** (e.g., do NOT search for "machine learning" or "maschinelles lernen").
* **CRITICAL - Do NOT pass tool-specific arguments** (like `collection`, `topK`, `searchMode`, `mcp_server`) to the tool discovery utility. Only use the arguments defined in the discovery tool's schema.

*Example call:*
```json
{
  "query": "search"
}
```

---

### STEP 2: Analyze and Select the Correct Tool
Review the list of tools returned by your discovery search.
1. **Identify the exact name:** Look at the `name` field of the matched tool. You must use the full, exact name (e.g., use `search_content_mcp_ai-search`, NEVER truncate it to `search_content`).
2. **Locate the schema:** Read the tool's description and parameter definitions to understand what parameters it expects.

---

### STEP 3: Execute the Target Tool
Invoke the selected tool.
* Apply the user's actual search query, filters, and operational parameters (like `collection: "ai_rag_ml"`, `searchMode`, `query`, etc.) **only** during this step.
* Match the input schema of the target tool precisely. Do not carry over any parameters from the discovery step.
```

---

### Summary of Adjustments Made:
* **Strict Parameter Separation:** Explicitly warns the agent never to mix search tool parameters (like discovery query) with operational database parameters (like `collection` or `topK`).
* **Query Distinction:** Emphasizes the difference between a "functional tool keyword" (e.g., `"search"`) and the "user's content query" (e.g., `"machine learning"`).
* **Exact Name Matching:** Mandates copying the full, exact string of the tool name to prevent "Tool not found" errors.