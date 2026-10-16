---
title: KI-Einstellungen
description: Passen Sie in CompanyGPT die Parameter des gewählten Modells an, etwa Anweisungen, Temperatur, Kontext-Token und Denkaufwand, und speichern Sie sie als Voreinstellung.
---

:::note[Neue Chat-Oberfläche]
Bilder und Beschriftungen auf dieser Seite zeigen die [neue Chat-Oberfläche](/de/company-gpt/neue-chat-oberflaeche/). Sie ist derzeit im Demo-Zugang und in Pilotumgebungen verfügbar; in anderen Umgebungen können Beschriftungen und Abläufe noch abweichen.
:::

Unter **KI-Einstellungen** in der Seitenleiste passen Sie die Parameter des aktuell gewählten Modells an, zum Beispiel spezifische Anweisungen für die KI oder detaillierte KI-Parameter. Über **Voreinstellung speichern** sichern Sie diese Einstellungen unter einem Namen. Gespeicherte Voreinstellungen wählen Sie im Kopfbereich des Chats über **Voreinstellungen** aus und können sie so in Konversationen flexibel einsetzen. Mit **Zurücksetzen** stellen Sie die Standardwerte wieder her. Im Panel sind die Parameter in die Bereiche **Identity**, **Sampling**, **Limits**, **Reasoning**, **Kontext** und **Erweitert** gegliedert.

![Panel KI-Einstellungen mit den Parametern eines GPT-Modells](ai-settings.png)

**KI-Einstellungen** steht nur zur Verfügung, wenn ein Modell und kein Agent ausgewählt ist. Welche Parameter angezeigt werden, hängt vom gewählten Modell ab. Die folgende Übersicht beschreibt die Parameter, die bei GPT-Modellen angezeigt werden.

:::tip{icon="rocket"}
Wenn Sie den Mauszeiger über eine Einstellung bewegen, werden zusätzliche Informationen angezeigt.
:::

## Benutzerdefinierter Name

Legt einen eigenen Namen für die KI fest, der im Chat angezeigt wird.

## Benutzerdefinierte Anweisungen

In diesem Feld wird eine spezifische Anweisung hinterlegt, die das Verhalten der KI während einer Konversation steuert. Sie dient dazu, der KI eine Rolle, einen Stil oder bestimmte Aufgaben vorzugeben.

```text
Du bist ein hilfreicher Assistent, der die Fragen der Benutzer beantwortet und am Ende einen Witz macht.
```

## KI-Parameter

Die folgenden Parameter ermöglichen die detaillierte Steuerung des KI-Verhaltens und der Ressourcennutzung.

### Max. Kontext-Token

Definiert die maximale Anzahl von Token, die im Kontext einer Anfrage an das Modell gesendet werden können. Dieser Parameter kontrolliert die Datenmenge, die der KI für jede Anforderung zur Verfügung steht. Wird kein Wert angegeben, kommen modellbasierte Systemstandards zum Einsatz. Höhere Werte können zu erhöhten Kosten und potenziellen Fehlern führen.

### Max. Antwort-Token

Legt die maximale Anzahl von Token fest, die das Modell in einer Chat-Vervollständigung generieren darf. Die Gesamtanzahl der Eingabe-Token und der generierten Antwort-Token ist durch die maximale Kontextlänge des Modells begrenzt. Eine Überschreitung der maximalen Kontext-Token durch diesen Wert kann zu Fehlern führen.

### Temperatur

Dieser Parameter beeinflusst die Kreativität und Zufälligkeit der KI-Antworten.
*   **Höhere Werte:** Führen zu kreativeren und zufälligeren Ergebnissen.
*   **Niedrigere Werte:** Führen zu deterministischeren und weniger kreativen Antworten.
Es wird empfohlen, entweder die Temperatur *oder* den Top P-Wert anzupassen, nicht beide gleichzeitig. Werte über 1 sind in der Regel nicht empfehlenswert.

### Top P

Der Top P-Parameter steuert die Auswahl der Token durch das Modell auf Basis ihrer kumulativen Wahrscheinlichkeit. Das Modell wählt Token von den wahrscheinlichsten abwärts, bis die Summe ihrer Wahrscheinlichkeiten den festgelegten Top P-Wert erreicht. Dies beeinflusst die Vielfalt der möglichen Antwort-Token.

### Frequency Penalty

Ein Wert zwischen -2.0 und 2.0. Positive Werte reduzieren die Wahrscheinlichkeit, dass das Modell bereits häufig verwendete Token wiederholt. Dies fördert die Erzeugung neuer und vielfältigerer Formulierungen im Text.

### Presence Penalty

Ein Wert zwischen -2.0 und 2.0. Positive Werte bestrafen die Verwendung von Token, die bereits im bisherigen Text vorkommen. Dadurch wird die Tendenz des Modells erhöht, neue Themen anzusprechen oder Informationen zu diversifizieren.

### Stop-Sequenzen

Bis zu vier definierbare Zeichenketten, bei deren Auftreten die API die Generierung weiterer Token beendet. Dies ermöglicht eine präzise Steuerung des Antwortendes der KI.

### Anhänge erneut senden

Ist diese Option aktiviert, werden alle zuvor im Chat angehängten Dateien mit jeder neuen Nachricht erneut an das Modell gesendet.
**Hinweis:** Dies kann die Kosten einer Anfrage aufgrund der erhöhten Token-Anzahl erheblich steigern und bei vielen Anhängen zu Fehlern führen.

### Bild-Detail

Bestimmt die Auflösung für Bilderkennungsanfragen an das Modell:
*   **Niedrig:** Günstiger und schneller, bietet geringere Detailgenauigkeit.
*   **Hoch:** Detaillierter und präziser, aber teurer.
*   **Auto:** Wählt automatisch zwischen "Niedrig" und "Hoch" basierend auf der Auflösung des hochgeladenen Bildes.

### Web-Suche

Aktiviert die integrierte Websuchfunktion des Modells (z.B. über OpenAI). Dies ermöglicht es der KI, aktuelle Informationen aus dem Internet zu beziehen und somit präzisere und zeitgemäßere Antworten zu generieren.

### Denkaufwand

Gilt ausschließlich für Modelle, die einen internen Denkprozess (Reasoning) durchführen. Dieser Parameter begrenzt den Rechenaufwand für logische Schlussfolgerungen.
*   Eine Reduzierung des Denkaufwands führt zu schnelleren Antworten und einem geringeren Token-Verbrauch.
*   Die Einstellung **Minimal** erzeugt sehr wenige Reasoning-Token, um eine maximale Reaktionsgeschwindigkeit (Time-to-First-Token) zu erzielen. Dies ist besonders nützlich für Aufgaben wie das Codieren oder das strikte Befolgen von Anweisungen.

Welche Stufen zur Auswahl stehen, hängt vom Modell ab. Bei Modellen mit Denkprozess stellen Sie den Denkaufwand auch direkt in der Eingabeleiste ein, siehe [Neue Chat-Oberfläche](/de/company-gpt/neue-chat-oberflaeche/#neue-eingabeleiste).

### Responses-API nutzen

Ermöglicht die Nutzung der Responses-API (anstelle von Chat Completions), die erweiterte Funktionen von OpenAI bereitstellt. Diese API ist unter anderem erforderlich, um Zusammenfassungen des Denkprozesses zu aktivieren.

### Zusammenfassung des Nachdenkens

Nur verfügbar, wenn die Responses-API genutzt wird. Diese Option generiert eine Zusammenfassung des internen Denkprozesses des Modells. Dies kann zur Fehlersuche und zum besseren Verständnis der KI-Entscheidungen hilfreich sein. Wählbare Optionen sind **Aufheben**, **Auto**, **Prägnant** und **Detailliert**.

### Nachdenkmodus

Nur verfügbar, wenn die Responses-API genutzt wird. Legt den Nachdenkmodus fest: **Standard** oder **Pro**. **Pro** aktiviert bei unterstützten Modellen erweitertes Nachdenken.

### Nachdenkkontext

Nur verfügbar, wenn die Responses-API genutzt wird. Legt fest, wie viel vom bisherigen Nachdenken der Unterhaltung das Modell wiederverwendet: **Auto**, **Aktuelle Gesprächsrunde** oder **Gesamte Unterhaltung**.

### Ausführlichkeit

Steuert die Länge und Detailtiefe der Modellantworten.
*   **Niedrigere Werte:** Führen zu kürzeren, prägnanteren Antworten.
*   **Höhere Werte:** Führen zu ausführlicheren und detaillierteren Antworten.
Zur Auswahl stehen **Keine**, **Niedrig**, **Mittel** und **Hoch**.

### Streaming deaktivieren

Deaktiviert das zeilenweise Streaming der Antworten, sodass die vollständige Antwort des Modells auf einmal empfangen wird. Diese Option kann für bestimmte Modelle (z.B. o3), die eine Organisationsverifizierung für Streaming voraussetzen, nützlich sein.

### Datei-Token-Limit

Definiert ein maximales Token-Limit für die Verarbeitung von angehängten Dateien. Dies dient der Kostenkontrolle und der effizienten Ressourcenverwaltung bei der Dateianalyse durch die KI.
