---
title: Websuche & WebFetch
description: Erfahren Sie, wie CompanyGPT mit der Websuche aktuelle Informationen aus dem Internet findet und mit WebFetch gezielt Inhalte einzelner Webseiten abruft.
---

## Websuche

Die Websuche ermöglicht es CompanyGPT, das Internet zu durchsuchen und aktuelle Inhalte in die Antwort einzubeziehen. Die Suche schalten Sie in der Chateingabe im Menü **Werkzeuge** über **Web-Suche** ein. Der Schalter gilt für den jeweiligen Chat und bleibt aktiv, bis Sie ihn wieder ausschalten.

:::note[Nicht in allen Umgebungen verfügbar]
Ob diese Funktion in Ihrer Umgebung zur Verfügung steht, legt Ihr Unternehmen fest. Wenden Sie sich bei Fragen an Ihren Administrator.
:::

Auf Wunsch können die Quellen direkt in der Antwort mit angegeben werden.

![Websuche mit Quellenangaben](web-search.png)

:::tip[Hintergrund: Grounding]
Die Websuche basiert auf dem Prinzip des „Grounding" – das KI-Modell stützt seine Antworten auf aktuelle, öffentlich verfügbare Informationen aus dem Web. Dadurch werden Halluzinationen reduziert und die Aktualität der Antworten verbessert. Mehr dazu im Google Cloud Blog: [Vertex AI Grounding with Google Search](https://cloud.google.com/blog/products/ai-machine-learning/using-vertex-ai-grounding-with-google-search?hl=en)
:::

## WebFetch

WebFetch eignet sich, wenn gezielt der Inhalt einer bestimmten Webseite abgerufen und verarbeitet werden soll. Im Gegensatz zur Websuche, die eigenständig im Internet recherchiert, ruft WebFetch eine vom Benutzer angegebene URL auf und extrahiert deren Inhalt.

Das ist besonders nützlich, wenn Sie den Inhalt einer bekannten Seite zusammenfassen, analysieren oder als Grundlage für eine Antwort verwenden möchten.

WebFetch wird als [MCP Server](/de/company-gpt/integrationen/mcp-server/) bereitgestellt. Im Chat wählen Sie ihn über die Chateingabe aus, in [Agenten](/de/company-gpt/agenten/#mcp-server) fügen Sie ihn über die Tool-Bibliothek hinzu.

![WebFetch Beispiel](web-fetch-de.png)
