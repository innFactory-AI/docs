---
title: Tools nutzen und Aktionen ausführen mit CompanyGPT
description: Erweiterung der Fähigkeiten von CompanyGPT durch externe Tools und Prozesse
---

## Tools nutzen und Aktionen ausführen mit CompanyGPT

Large Language Models (LLMs) wie die in CompanyGPT integrierten sind unglaublich leistungsfähig, wenn es darum geht, Text zu verstehen und zu generieren. Ihre Kernkompetenz liegt jedoch in der Sprachverarbeitung. Um wirklich nützlich im Unternehmenskontext zu sein, müssen sie oft **mit externen Systemen interagieren**, **aktuelle Informationen abrufen** oder **konkrete Aktionen ausführen**. Hier kommt die **Tool-Nutzung (Tool Use)** ins Spiel.

### Was ist Tool-Nutzung?

Tool-Nutzung ermöglicht es CompanyGPT, über seine reine Sprachfähigkeit hinauszugehen und wie ein intelligenter Agent mit der digitalen Umgebung zu interagieren. Anstatt nur textbasierte Antworten zu geben, kann CompanyGPT dank der Integration von Tools:

*   **Auf dynamische und aktuelle Informationen zugreifen:** Informationen, die nicht Teil des ursprünglichen Trainingsdatensatzes des LLM sind (z. B. der aktuelle Status eines Jira-Tickets, der Inhalt eines kürzlich aktualisierten Confluence-Artikels oder Echtzeitdaten aus internen Systemen).
*   **Aktionen in externen Systemen ausführen:** Das Ändern von Daten, das Auslösen von Prozessen oder das Kommunizieren mit anderen Anwendungen.
*   **Komplexe Aufgaben lösen:** Durch die Kombination mehrerer Schritte, die jeweils ein spezielles Tool erfordern.

Im Wesentlichen wird CompanyGPT nicht nur zu einem Gesprächspartner, sondern zu einem **Assistenten, der aktiv in Ihren Unternehmensworkflows handeln kann.**

### Wie funktioniert Tool-Nutzung in CompanyGPT?

Der Mechanismus hinter der Tool-Nutzung ist elegant:

1.  **Tool-Definitionen:** CompanyGPT wird eine Liste von verfügbaren Tools präsentiert. Jedes Tool hat eine klare Beschreibung seiner Funktion und der Parameter, die es benötigt (z. B. `jira_ticket_erstellen(summary, description, project, assignee)` oder `confluence_suchen(suchbegriff)`).
2.  **LLM-Entscheidung:** Basierend auf der Benutzeranfrage analysiert das LLM, ob und welches Tool benötigt wird, um die Anfrage bestmöglich zu beantworten oder die gewünschte Aktion auszuführen.
3.  **Parameter-Extraktion:** Das LLM extrahiert die notwendigen Parameter aus der Benutzeranfrage, um das ausgewählte Tool korrekt aufzurufen.
4.  **Tool-Aufruf:** CompanyGPT gibt einen "Tool-Aufruf" zurück, der dem System mitteilt, welches Tool mit welchen Parametern ausgeführt werden soll.
5.  **Ausführung und Ergebnis:** Ein externer "Tool-Executor" führt das eigentliche Tool (z. B. einen API-Aufruf an Jira oder Confluence) aus. Das Ergebnis dieser Ausführung (z. B. der Status des erstellten Tickets, die Suchergebnisse) wird dann zurück an CompanyGPT gesendet.
6.  **Antwortgenerierung:** CompanyGPT nutzt das Ergebnis des Tool-Aufrufs als zusätzlichen Kontext, um eine umfassende und relevante Antwort an den Benutzer zu generieren oder weitere Aktionen zu planen.

### Beispiele für Tool-Nutzung in CompanyGPT

Die Möglichkeiten sind vielfältig und können genau auf Ihre Unternehmensbedürfnisse zugeschnitten werden:

*   **Informationsabruf aus Unternehmenssystemen:**
    *   "Finde die neueste Richtlinie zu Spesenabrechnungen im **SharePoint**."
    *   "Wie viele offene Tickets hat unser Team derzeit in **Jira**?"
    *   "Gib mir eine Zusammenfassung des Artikels über unser neues Produkt aus dem internen **Confluence-Wiki**."
    *   "Zeige mir die letzten drei Nachrichten im 'Projekt X'-Kanal in **Teams**."
*   **Aktionsausführung und Automatisierung:**
    *   "Erstelle ein neues Jira-Ticket für einen Bug mit dem Titel 'Login-Problem in App X', Priorität hoch, zugewiesen an Max Mustermann."
    *   "Buche einen Termin mit dem Marketingteam für nächste Woche Mittwoch um 10 Uhr, Thema: Kampagnenplanung."
    *   "Sende eine Nachricht an alle im 'Entwicklung'-Team in Teams: 'Daily Standup beginnt in 5 Minuten!'"
    *   "Aktualisiere den Status des Jira-Tickets ABC-123 auf 'In Bearbeitung'."

### Das MCP (Model Context Protocol) als Tool

Ein besonders wichtiges Element in der Tool-Architektur von CompanyGPT ist das **MCP (Model Context Protocol)**. Das MCP ist ein spezialisiertes Protokoll und eine Schnittstelle, die es CompanyGPT ermöglicht, nahtlos mit **externen Diensten zu kommunizieren, die auf kundenspezifischen MCP-Servern laufen**. Diese Server hosten oft komplexe Backend-Funktionalitäten oder orchestrieren spezifische Unternehmensprozesse.

Wenn CompanyGPT eine Anfrage erhält, die eine Interaktion mit einem solchen spezialisierten Dienst erfordert, wird das MCP als dediziertes Tool verwendet.

**Funktionsweise des MCP-Tools:**

*   **Standardisierte Kommunikation:** Das MCP stellt eine standardisierte Methode für CompanyGPT dar, um Anfragen an die auf den MCP-Servern gehosteten Dienste zu senden und deren Antworten zu empfangen.
*   **Auslösen spezialisierter Dienstleistungen:** Statt dass CompanyGPT die internen Details eines komplexen Dienstes kennen muss, ruft es einfach das entsprechende MCP-Tool auf. Dieses Tool weiß, wie es über das MCP mit dem jeweiligen Dienst interagiert.
*   **Parameterübergabe:** CompanyGPT übergibt die notwendigen Startparameter an das MCP (z. B. "Neuen Benutzer anlegen" mit den Parametern "Name", "Rolle", "Berechtigungen"). Das MCP leitet diese dann an den externen Dienst weiter.
*   **Abstrakte Dienstausführung:** Der externe Dienst, der über das MCP angebunden ist, übernimmt dann die vollständige Ausführung der hinterlegten Logik. Dies könnte beispielsweise umfassen:
    *   Das Anlegen eines neuen Kontos im Active Directory oder einer HR-Software.
    *   Das Konfigurieren von Zugriffsrechten in verschiedenen Systemen.
    *   Das Auslösen eines Onboarding-Workflows mit mehreren Schritten.
*   **Statusrückmeldung:** Der externe Dienst sendet über das MCP einen Status oder das Ergebnis der Ausführung an CompanyGPT zurück, damit der Benutzer über den Fortschritt oder den Abschluss der Aktion informiert werden kann.

Durch die Nutzung des MCP als Tool wird CompanyGPT zu einem zentralen Zugangspunkt für die Initiierung und Überwachung komplexer, geschäftskritischer Prozesse, die von spezialisierten externen Diensten verwaltet werden. Es erweitert die Automatisierungsfähigkeiten von CompanyGPT erheblich, indem es eine robuste und standardisierte Schnittstelle zu diesen leistungsstarken Backend-Systemen bietet.

### Vorteile der Tool-Nutzung für CompanyGPT

Die Integration von Tools (einschließlich des MCP) in CompanyGPT revolutioniert die Art und Weise, wie Sie mit Ihrem internen KI-Assistenten interagieren:

*   **Erhöhte Produktivität:** Automatisierung wiederkehrender Aufgaben und schneller Zugriff auf benötigte Informationen.
*   **Bessere Entscheidungen:** CompanyGPT kann Ihnen auf Basis von Echtzeitdaten und unternehmensspezifischem Wissen helfen.
*   **Nahtlose Integration:** CompanyGPT wird zu einem integralen Bestandteil Ihrer bestehenden IT-Landschaft.
*   **Erweiterte Funktionalität:** CompanyGPT kann Dinge tun, die ein reines Sprachmodell niemals könnte, von der Datensuche bis zur Prozessautomatisierung.