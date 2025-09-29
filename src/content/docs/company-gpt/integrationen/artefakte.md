---
title: Artefakte
description: Artefakte im CompanyGPT
---

Artefakte ermöglichen dem KI Modell im CompanyGPT Code zu erstellen und diesen auszuführen / anzuzeigen. So können beispielsweise Diagramme erzeugt, aber auch Code-Komponenten erzeugt und dargestellt werden.

Aktiviert die Verwendung von Code-Artefakten für diesen Agenten. Standardmäßig werden zusätzliche, spezielle Anweisungen für die Nutzung von Artefakten hinzugefügt, es sei denn, der "Benutzerdefinierte Prompt-Modus" ist aktiviert.

**Anweisungen für shadcn/ui-Komponenten einschließen**: Wenn aktiviert, werden Anweisungen zur Verwendung von shadcn/ui-Komponenten eingeschlossen. shadcn/ui ist eine Sammlung wiederverwendbarer Komponenten, die mit Radix UI und Tailwind CSS erstellt wurden. Hinweis: Dies sind umfangreiche Anweisungen, die Sie nur aktivieren sollten, wenn es Ihnen wichtig ist, das KI-Modell über die korrekten Importe und Komponenten zu informieren. Weitere Informationen zu diesen Komponenten finden Sie unter: https://ui.shadcn.com/

**Benutzerdefinierter Promptmodus für Artefakte**: Wenn aktiviert, wird die Standard-Systemaufforderung für Artefakte nicht eingeschlossen. Alle Anweisungen zur Erzeugung von Artefakten müssen in diesem Modus manuell bereitgestellt werden.

Beispiel: 
```
Wenn Inhalt als Artefakt dargestellt werden soll, muss folgende Formatierung genutzt werden:
 
:::artifact{identifier="unique-identifier" type="mime-type" title="Artifact Title"}
```
Inhalt hier
```
:::
 
Verwenden Sie für das Attribut „type“ eine der folgenden Optionen:
- „text/html“ für HTML-Inhalte
- „application/vnd.mermaid“ für Mermaid-Diagramme
- „application/vnd.react“ für React-Komponenten
- „image/svg+xml“ für SVG-Bilder
```