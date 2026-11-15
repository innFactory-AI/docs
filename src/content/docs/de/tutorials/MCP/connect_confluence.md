---
title: Confluence an CompanyGPT anbinden
description: Confluence-Inhalte in CompanyGPT integrieren mit dem Atlassian Rovo MCP Server
---

Wenn Sie das Kollaborationstool Confluence nutzen, besteht die Möglichkeit dieses über den Atlassian Rovo [MCP Server](/de/company-gpt/integrationen/mcp-server/) wie folgt an Ihr CompanyGPT anzubinden:

**1. Konfiguration in Confluence**

1. In Confluence über das **Menü mit den vier Punkten** oben links zu **Weitere > Administration** navigieren.
2. Zum Abschnitt **Rovo** gehen und **Rovo-MCP-Server** auswählen.
3. Dort die Domain des CompanyGPT mit dem Zusatz `/**` hinzufügen.
4. Unter **Berechtigungen > Authentifizierung** kann die Option **API-Token** deaktiviert bleiben, um die Authentifizierung über oAuth zu nutzen.

![confluence-rovo-settings](confluence-rovo-settings.png)

**2. Konfiguration im CompanyGPT**

Diesen Schritt kann nur eine Person ausführen, deren Rolle das Anlegen von MCP-Servern erlaubt (siehe [MCP Server hinzufügen](/de/company-gpt/integrationen/mcp-server/#mcp-server-hinzufügen)).

1. Im CompanyGPT in der linken Seitenleiste die **MCP Einstellungen** öffnen und auf das **Plus-Zeichen (+)** klicken, um einen neuen Server hinzuzufügen.
2. In das Feld **MCP-Server-URL** die folgende Adresse einfügen: `https://mcp.atlassian.com/v1/mcp`.
3. Auf **Erstellen** klicken, um die Einrichtung abzuschließen.

![cGPT-add-mcp-settings](cGPT-add-mcp-settings.png)

:::tip[Hinweis]
Aus Sicherheitsgründen sind nur MCP-Server auf freigegebenen Domains erlaubt. Welche Domains freigegeben sind, legen Administratoren in companyADMIN unter **Konfiguration** → **MCP-Domains** fest.
:::
