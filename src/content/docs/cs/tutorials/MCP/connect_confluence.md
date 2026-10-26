---
title: Připojení Confluence k CompanyGPT
description: Integrace obsahu z Confluence do CompanyGPT pomocí Atlassian Rovo MCP Server
---

Pokud používáte nástroj pro spolupráci Confluence, můžete ho k CompanyGPT připojit přes Atlassian Rovo [MCP Server](/cs/company-gpt/integrationen/mcp-server/) následovně:

**1. Konfigurace v Confluence**

1. V Confluence přejděte přes **nabídku se čtyřmi tečkami** vlevo nahoře do **More > Administration**.
2. Přejděte do oddílu **Rovo** a vyberte **Rovo-MCP-Server**.
3. Přidejte doménu svého CompanyGPT s příponou `/**`.
4. V části **Permissions > Authentication** může možnost **API Token** zůstat vypnutá, aby se použilo ověřování OAuth.

![confluence-rovo-settings](confluence-rovo-settings.png)

**2. Konfigurace v CompanyGPT**

Tento krok může provést pouze osoba, jejíž role umožňuje vytvářet MCP servery (viz [Přidání MCP serveru](/cs/company-gpt/integrationen/mcp-server/#přidání-serveru-mcp)).

1. V CompanyGPT otevřete v levém postranním panelu **MCP Settings** a kliknutím na **znaménko plus (+)** přidejte nový server.
2. Do pole **MCP Server URL** vložte tuto adresu: `https://mcp.atlassian.com/v1/mcp`.
3. Kliknutím na **Create** nastavení dokončete.

![cGPT-add-mcp-settings](cGPT-add-mcp-settings.png)

:::tip[Poznámka]
Z bezpečnostních důvodů jsou povoleny pouze MCP servery na schválených doménách. Které domény jsou schválené, nastavují administrátoři v companyADMIN v části **Configuration** → **MCP domains**.
:::
