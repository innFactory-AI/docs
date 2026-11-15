---
title: Artefakte
description: Artefakte im CompanyGPT ermöglichen dem KI-Modell Code zu erstellen und auszuführen, Diagramme zu generieren und Komponenten darzustellen, mit Optionen für shadcn/ui und benutzerdefinierte Prompts.
---

:::note[Neue Chat-Oberfläche]
Bilder und Beschriftungen auf dieser Seite zeigen die [neue Chat-Oberfläche](/de/company-gpt/neue-chat-oberflaeche/). Sie ist derzeit im Demo-Zugang und in Pilotumgebungen verfügbar; in anderen Umgebungen können Beschriftungen und Abläufe noch abweichen.
:::

Artefakte ermöglichen dem KI-Modell im CompanyGPT, Code zu erstellen und diesen auszuführen/anzuzeigen. So können beispielsweise Diagramme erzeugt, aber auch Code-Komponenten erzeugt und dargestellt werden.

## Artefakte aktivieren

Im Chat aktivieren Sie Artefakte über das Plus-Symbol in der Chateingabe (**Attach and tools**) unter **Tools** mit **Artefakte**. Artefakte erscheinen dann als Chip in der Eingabeleiste; dort wählen Sie auch den [Modus](#modi). Für [Agenten](/de/company-gpt/agenten/#artefakte) fügen Sie **Artefakte** über die Tool-Bibliothek hinzu und wählen dort einen **Modus**.

Standardmäßig werden zusätzliche, spezielle Anweisungen für die Nutzung von Artefakten hinzugefügt, es sei denn, Sie wählen den Modus **Custom prompt**.

![Chat mit einem Balkendiagramm als Artefakt: links der Chat mit dem Chip Artefakte im Modus Standard, rechts das geöffnete Artefakt in der Vorschau](./artefakte-beispiel.png)

## Artefakte ansehen und exportieren

Artefakte öffnen sich in einem eigenen Bereich neben dem Chat. Dort wechseln Sie zwischen **Code** und **Vorschau**, kopieren oder laden den Inhalt herunter und öffnen das Artefakt mit **Vollbild öffnen** in voller Größe. Mit **Open in new window** öffnen Sie es in einem eigenen Browserfenster.

Mermaid-Diagramme, die das KI-Modell im Chat ausgibt, werden direkt als Diagramm dargestellt. Mit **Als Artefakt öffnen** zeigen Sie ein Diagramm im Artefakt-Bereich an. Über **Diagramm exportieren** speichern Sie es dort mit **Als SVG exportieren** oder **Als PNG exportieren** als Grafik.

## Modi

Den Modus wählen Sie im Chat in der Liste **Attach and tools** neben **Artefakte** oder über den Chip **Artefakte** in der Eingabeleiste:

**Standard**: Die Standard-Anweisungen für die Nutzung von Artefakten werden eingeschlossen.

**shadcn/ui**: Zusätzlich werden Anweisungen zur Verwendung von shadcn/ui-Komponenten eingeschlossen. shadcn/ui ist eine Sammlung wiederverwendbarer Komponenten, die mit Radix UI und Tailwind CSS erstellt wurden. Hinweis: Dies sind umfangreiche Anweisungen, die Sie nur wählen sollten, wenn es Ihnen wichtig ist, das KI-Modell über die korrekten Importe und Komponenten zu informieren. Weitere Informationen zu diesen Komponenten finden Sie unter: https://ui.shadcn.com/

**Custom prompt**: Die Standard-Systemaufforderung für Artefakte wird nicht eingeschlossen. Alle Anweisungen zur Erzeugung von Artefakten müssen in diesem Modus manuell bereitgestellt werden.

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
