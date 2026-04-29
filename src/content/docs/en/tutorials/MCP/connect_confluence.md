---
title: Connect Confluence to CompanyGPT
description: Integrate Confluence content into CompanyGPT using the Atlassian Rovo MCP Server
---

If you use the collaboration tool Confluence, you have the option to connect it to your CompanyGPT via the Atlassian Rovo [MCP Server](/en/company-gpt/integrationen/mcp-server/) as follows:

**1. Configuration in Confluence**

1. In Confluence, navigate via the **menu with four dots** in the top left to **More > Administration**.
2. Go to the **Rovo** section and select **Rovo-MCP-Server**.
3. Add the domain of your CompanyGPT with the suffix `/**`.
4. Under **Permissions > Authentication**, the **API Token** option can remain disabled to use OAuth authentication.

![confluence-rovo-settings](confluence-rovo-settings.png)

**2. Configuration in CompanyGPT**

1. In CompanyGPT, go to **MCP Server Settings** and click the **plus sign (+)** to add a new server.
2. Paste the following address into the URL field: `https://mcp.atlassian.com/v1/mcp`.
3. Click **Create** to complete the setup.

![cGPT-add-mcp-settings](cGPT-add-mcp-settings.png)

:::tip[Note]
For security reasons, external MCP servers are disabled by default. To enable them, simply send a brief message.
:::