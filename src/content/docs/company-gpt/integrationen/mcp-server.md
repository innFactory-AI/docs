---
title: MCP Server
description: MCP Server - Erfahren Sie, wie das Model Context Protocol die Kommunikation zwischen CompanyGPT und externen Diensten ermöglicht und Tools für kundenspezifische Anwendungen integriert.
---

Das Model Context Protocol (MCP) ist ein spezialisiertes Protokoll und eine Schnittstelle, die CompanyGPT die nahtlose Kommunikation mit externen Diensten ermöglicht. Diese Dienste laufen auf kundenspezifischen MCP-Servern, die oft komplexe Backend-Funktionalitäten hosten oder spezifische Unternehmensprozesse orchestrieren. Ursprünglich von Anthropic entwickelt, wird das MCP mittlerweile von nahezu allen KI-Anwendungen unterstützt, wodurch CompanyGPT auf eine breite Masse bestehender MCP-Server zurückgreifen kann. Bei Bedarf lassen sich eigene Server entwickeln, um nahezu jede Anwendung an CompanyGPT anzubinden.

Das MCP basiert auf einer Client-Server-Architektur, bei der CompanyGPT als Client die vom Server bereitgestellten „Tools“ konsumiert. Ein MCP-Server kann beliebig viele solcher Tools beinhalten, wobei das integrierte LLM selbstständig entscheidet, welches Tool genutzt und welche Parameter übergeben werden. Nach der Ausführung wertet das LLM die Ergebnisse aus und formuliert eine entsprechende Antwort an den Benutzer.

Mehr Informationen zu MCP finden Sie hier: [Prompt Engineering / MCP](/prompt-engineering/prompt-techniken/tool-use#das-mcp-model-context-protocol-als-tool)