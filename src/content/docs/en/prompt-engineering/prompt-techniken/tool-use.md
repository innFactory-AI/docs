---
title: Using tools and performing actions with CompanyGPT
description: Extending the capabilities of CompanyGPT with external tools and processes
---

## Using tools and performing actions with CompanyGPT

Large language models (LLMs) such as those integrated into CompanyGPT are incredibly powerful when it comes to understanding and generating text. However, their core competence lies in language processing. To be truly useful in a business context, they often need to **interact with external systems**, **retrieve up-to-date information**, or **perform specific actions**. This is where **tool use** comes into play.

### What is tool use?

Tool use enables CompanyGPT to go beyond its pure language capabilities and interact with the digital environment like an intelligent agent. Instead of just providing text-based responses, the integration of tools allows CompanyGPT to:

*   **Access dynamic and up-to-date information:** Information that is not part of the LLM's original training dataset (e.g., the current status of a Jira ticket, the content of a recently updated Confluence article, or real-time data from internal systems).
*   **Perform actions in external systems:** Change data, trigger processes, or communicate with other applications.
*   **Solve complex tasks:** By combining multiple steps, each requiring a specific tool.

Essentially, CompanyGPT becomes not just a conversation partner, but an **assistant that can actively participate in your business workflows.**

### How does tool usage work in CompanyGPT?

The mechanism behind tool usage is elegant:

1.  **Tool definitions:** CompanyGPT is presented with a list of available tools. Each tool has a clear description of its function and the parameters it requires (e.g., `jira_create_ticket(summary, description, project, assignee)` or `confluence_search(search term)`).
2.  **LLM decision:** Based on the user request, the LLM analyzes whether and which tool is needed to best answer the request or perform the desired action.
3.  **Parameter extraction:** The LLM extracts the necessary parameters from the user request to correctly call the selected tool.
4.  **Tool call:** CompanyGPT returns a “tool call” that tells the system which tool to execute and with which parameters.
5.  **Execution and result:** An external “tool executor” executes the actual tool (e.g., an API call to Jira or Confluence). The result of this execution (e.g., the status of the ticket created, the search results) is then sent back to CompanyGPT.
6.  **Response generation:** CompanyGPT uses the result of the tool call as additional context to generate a comprehensive and relevant response to the user or to plan further actions.

### Examples of tool usage in CompanyGPT

The possibilities are endless and can be tailored precisely to your company's needs:

*   **Retrieving information from company systems:**
    *   “Find the latest policy on expense reports in **SharePoint**.”
    *   “How many open tickets does our team currently have in **Jira**?”
    *   “Give me a summary of the article about our new product from the internal **Confluence Wiki**.”
    *   “Show me the last three messages in the ‘Project X’ channel in **Teams**.”
* **Action execution and automation:**
    * “Create a new Jira ticket for a bug titled ‘Login issue in App X’, priority high, assigned to John Doe.”
    * “Schedule a meeting with the marketing team for next Wednesday at 10 a.m., topic: campaign planning.”
* “Send a message to everyone on the ‘Development’ team in Teams: ‘Daily standup starts in 5 minutes!’”
* “Update the status of Jira ticket ABC-123 to ‘In progress’.”

### The MCP (Model Context Protocol) as a tool

A particularly important element in the tool architecture of CompanyGPT is the **MCP (Model Context Protocol)**. The MCP is a specialized protocol and interface that enables CompanyGPT to seamlessly communicate with **external services running on customer-specific MCP servers**. These servers often host complex backend functionalities or orchestrate specific business processes.

When CompanyGPT receives a request that requires interaction with such a specialized service, the MCP is used as a dedicated tool.

**How the MCP tool works:**

*   **Standardized communication:** The MCP provides a standardized method for CompanyGPT to send requests to the services hosted on the MCP servers and receive their responses.
*   **Triggering specialized services:** Instead of CompanyGPT having to know the internal details of a complex service, it simply calls the appropriate MCP tool. This tool knows how to interact with the respective service via the MCP.
* **Parameter transfer:** CompanyGPT transfers the necessary start parameters to the MCP (e.g., “Create new user” with the parameters “Name,” “Role,” “Permissions”). The MCP then forwards these to the external service.
*   **Abstract service execution:** The external service connected via the MCP then takes over the complete execution of the stored logic. This could include, for example:
*   Creating a new account in Active Directory or HR software.
    * Configuring access rights in various systems.
* Triggering a multi-step onboarding workflow.
* **Status feedback:** The external service sends a status or the result of the execution back to CompanyGPT via the MCP so that the user can be informed about the progress or completion of the action.

By using MCP as a tool, CompanyGPT becomes a central access point for initiating and monitoring complex, business-critical processes managed by specialized external services. It significantly expands CompanyGPT's automation capabilities by providing a robust and standardized interface to these powerful backend systems.

### Benefits of using tools for CompanyGPT

The integration of tools (including MCP) into CompanyGPT revolutionizes the way you interact with your internal AI assistant:

*   **Increased productivity:** Automation of recurring tasks and quick access to needed information.
*   **Better decisions:** CompanyGPT can help you based on real-time data and company-specific knowledge.
*   **Seamless integration:** CompanyGPT becomes an integral part of your existing IT landscape.
*   **Extended functionality:** CompanyGPT can do things that a pure language model could never do, from data search to process automation.