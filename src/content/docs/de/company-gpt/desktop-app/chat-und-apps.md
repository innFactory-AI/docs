---
title: Chat und Apps
description: Im Chat-Modus zeigt die Desktop-App dein gewohntes companyGPT; die companyGPT-Apps öffnen sich als eigene Tabs im selben Fenster, Downloads und Links leitet die App passend weiter.
---

Der Chat in der Desktop-App ist **dein companyGPT**, genau so, wie du es aus dem Browser kennst: mit [Agenten](/de/company-gpt/agenten/), [MCP-Servern](/de/company-gpt/integrationen/mcp-server/), [Artefakten](/de/company-gpt/integrationen/artefakte/), [Projekten](/de/company-gpt/projekte/), [Skills](/de/company-gpt/skills/) und Uploads. Die App baut den Chat nicht nach, sondern zeigt ihn in einem eigenen Fenster und ergänzt nur das, was eine Desktop-Anwendung besser kann.

## Zwischen Chat und Cowork wechseln

Oben in der Mitte schaltest du zwischen **Chat** und **Cowork** um. Schneller geht es mit den Tastenkürzeln:

| Kürzel (macOS) | Kürzel (Windows) | Wirkung |
|---|---|---|
| ⌘1 | Strg+1 | Chat |
| ⌘2 | Strg+2 | Cowork |
| ⌘N | Strg+N | Neue Cowork-Aufgabe |
| ⌥Leertaste | Strg+Alt+Leertaste | [Quick-Ask](/de/company-gpt/desktop-app/quick-ask/) von überall |

Die Kürzel funktionieren unabhängig davon, ob gerade der Chat, Cowork oder eine App im Vordergrund ist. Deine Chat-Sitzung bleibt über Neustarts der App erhalten.

## companyGPT-Apps als Tabs

Öffnest du eine App über das **Apps-Panel** im Chat oder über [Alle Apps](/de/company-gpt/addons/alle-apps/), erscheint sie als **eigener Tab** neben Chat und Cowork, zum Beispiel companyRAG, companyFILES, companyTRANSLATE, companyTRANSCRIBE, companyLEARN, companyM365 oder companyADMIN. Pro App gibt es einen Tab, weitere Links auf dieselbe App öffnen sich im vorhandenen Tab.

- Die Tabs sind mit deiner Chat-Sitzung angemeldet, eine zweite Anmeldung ist nicht nötig.
- Der Tab-Titel ist der Seitentitel der App. Über das ✕ am Tab schließt du ihn, danach siehst du wieder den Chat.
- „Neuer Chat“ oder ein Link auf einen Chat in einer App springt in den Chat-Tab. Ein Link auf eine andere App öffnet deren Tab.

## Links, Downloads und Dateien

| Thema | Verhalten |
|---|---|
| **Links** | Links auf companyGPT bleiben im Chat, Links auf eine companyGPT-App öffnen deren Tab, Links auf andere Websites öffnen deinen Standardbrowser. Das gilt auch für Links in Cowork-Antworten. |
| **Downloads** | Dateien aus dem Chat, zum Beispiel von companyFILES erstellte Word-, Excel- oder PDF-Dokumente, landen in deinem Download-Ordner. Gibt es den Dateinamen schon, wählt die App einen freien Namen, statt zu überschreiben. Ein Hinweis meldet den fertigen Download und zeigt die Datei auf Wunsch im Finder bzw. Explorer. |
| **Drag & Drop** | Dateien, die du auf den Chat ziehst, lädt companyGPT wie im Browser hoch. |
| **Kopieren und Einfügen** | Alle üblichen Tastenkürzel (Kopieren, Einfügen, Rückgängig, Alles auswählen) funktionieren im Chat und in allen Tabs. |

## Sicherheit

Der Chat und die App-Tabs zeigen Inhalte deines companyGPT-Servers. Diese Inhalte haben **keinen Zugriff** auf deinen Rechner: Sie können weder Cowork steuern noch Dateien lesen oder Befehle auslösen. Nur die lokale Oberfläche von Cowork spricht mit dem lokalen Agenten.

## Zusammenspiel mit Cowork

| Was | Wie |
|---|---|
| **Anmeldung** | Eine Microsoft-Anmeldung für Chat und Cowork. |
| **Modelle** | Cowork nutzt das [AI Gateway](/de/company-gpt/addons/ai-gateway/) deines Unternehmens, also dieselben Modelle wie der Chat, einschließlich `auto`. Budgets und Freigaben gelten gleichermaßen. |
| **Skills** | Alle Skills, die du im Chat nutzen darfst, stehen auch in Cowork bereit. |
| **Unternehmensvorgaben** | Anweisungen, die dein Administrator in companyADMIN für Cowork hinterlegt, gelten für jede Cowork-Aufgabe. |
| **Quick-Ask** | Eine schnelle Frage geht wahlweise an den Chat oder an Cowork. |
| **Verläufe** | Werden bewusst nicht abgeglichen: Chats liegen in companyGPT, Cowork-Aufgaben lokal auf deinem Rechner. |
