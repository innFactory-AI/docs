---
title: Dateiverarbeitung
description: Erfahren Sie, wie CompanyGPT hochgeladene Dateien verarbeitet - Bilder und PDFs direkt beim KI-Modell, Office-Dokumente als Text, Dateisuche und Code Interpreter je nach aktiven Werkzeugen sowie die SharePoint-Integration.
---

Im CompanyGPT können Sie Dateien an Ihre Nachrichten anhängen. Wie eine Datei verarbeitet wird, entscheidet CompanyGPT automatisch anhand des Dateityps, des gewählten KI-Modells und der aktiven Werkzeuge. Sie müssen beim Hochladen kein Ziel mehr auswählen.

:::tip[Kurzübersicht]

- Bilder und PDFs: gehen direkt an das KI-Modell, sofern es diese Dateien verarbeiten kann. So werden auch Grafiken, Layout und handschriftliche Inhalte berücksichtigt.
- Office-Dokumente und Textdateien: werden in Text umgewandelt und der Nachricht angehängt, pro Datei bis zu 100.000 Token. Längere Texte werden gekürzt.
- Dateisuche und Code ausführen: Ist eines dieser Werkzeuge aktiv, stehen die Dateien bei Bedarf auch diesem Werkzeug zur Verfügung.
:::

## Dateien hochladen

Klicken Sie in der Chateingabe auf die Büroklammer (**Dateien anhängen**) und wählen Sie die gewünschten Dateien aus. Ist in Ihrer Umgebung die [SharePoint-Integration](#sharepoint-integration) aktiviert, öffnet die Büroklammer ein Menü mit **Vom lokalen Computer** und **Von SharePoint**.

In der Standardkonfiguration gelten folgende Grenzen, die Ihr Unternehmen anpassen kann:

- bis zu 50 Dateien pro Nachricht
- bis zu 100 MB pro Datei

## So werden Dateien verarbeitet

### Bilder und PDFs

Bilder und PDF-Dateien werden zusammen mit Ihrer Nachricht an das KI-Modell gesendet. Dadurch kann das Modell die Inhalte vollständig auslesen und interpretieren, zum Beispiel Bilder analysieren, Texte inklusive Grafiken verarbeiten oder handschriftliche Scans und Fotos auswerten. Über die Nachricht können Sie zusätzliche Anweisungen geben.

Kann das gewählte Modell PDF-Dateien nicht direkt verarbeiten, extrahiert CompanyGPT stattdessen den Text.

**Limitierung**: Es kommt hierbei auf das KI-Modell an, welche Informationen und Dateitypen verarbeitet werden können. Zusätzlich gelten die Grenzen des jeweiligen KI-Anbieters pro Anfrage, bei Claude-Modellen zum Beispiel 32 MB bzw. 100 PDF-Seiten, bei Gemini-Modellen (Google Vertex AI) 20 MB für die gesamte Anfrage einschließlich der angehängten Dateien. Sehr große PDF-Dateien teilen Sie daher am besten auf.

### Office-Dokumente und Textdateien

Aus Office-Dokumenten wird der Text ausgelesen und der Nachricht angehängt. Pro Datei werden bis zu 100.000 Token übernommen, längere Texte werden gekürzt. Das ist nützlich, wenn Sie beispielsweise Texte zusammenfassen oder wichtige Punkte extrahieren möchten.

| Dateityp | Verarbeitung |
| --- | --- |
| Word (`.docx`), PowerPoint (`.pptx`, `.potx`, `.ppt`), E-Books (`.epub`) | Texterkennung (OCR) durch ein KI-Modell, bis 30 Seiten pro Dokument. Bei Word-Dateien übernimmt der eingebaute Parser (bis 15 MB pro Datei), wenn die Texterkennung fehlschlägt oder das Dokument mehr als 30 Seiten hat. |
| Excel (`.xlsx`, `.xls`), OpenDocument (`.odt`, `.ods`) | Eingebauter Parser, bis 15 MB pro Datei. Excel-Dateien werden Blatt für Blatt als Tabelle (CSV) übernommen. |
| Ältere Word-Dateien (`.doc`, Word 97–2003) | werden nicht ausgelesen. Laden Sie solche Dateien bitte als `.docx` oder PDF hoch. |
| Textdateien (z. B. `.txt`, `.md`, `.csv`, `.json`) | werden direkt als Text gelesen |

In einzelnen Umgebungen ohne Texterkennung werden Word-Dateien (`.docx`) direkt mit dem eingebauten Parser ausgelesen.

**Limitierung**: Bei der Umwandlung in Text werden Bilder in den Dokumenten nicht berücksichtigt.

### Dateisuche und Code ausführen

Ist im Chat oder im Agenten die [Dateisuche](/de/company-gpt/integrationen/dateisuche/) oder [Code ausführen](/de/company-gpt/code-interpreter/) aktiv, stellt CompanyGPT die angehängten Dateien bei Bedarf auch diesen Werkzeugen bereit:

- Die **Dateisuche** indexiert die Inhalte und durchsucht sie nach den Abschnitten, die zur Frage passen. Informationen zur Funktionsweise finden Sie hier: [RAG - Retrieval Augmented Generation](/de/prompt-engineering/prompt-techniken/rag/#rag-workflow-für-die-dateiverarbeitung)
- **Code ausführen** kann Dateien, zum Beispiel CSV- oder Excel-Dateien, mit Code auswerten und umwandeln.

**Limitierung**: Dokumente in der Dateisuche sind nur für den jeweiligen User zugänglich. Um Dokumente in der Dateisuche für mehrere User oder die gesamte Organisation zugänglich zu machen, können diese über [Agenten](/de/company-gpt/agenten) oder auch über [companyRAG](/de/company-gpt/addons/companyrag) integriert werden.

## Dateien in Antworten

Erzeugt ein Werkzeug eine Datei, zum Beispiel der Code Interpreter oder companyFILES, erscheint sie in der Antwort als Karte. Darüber laden Sie die Datei herunter; für viele Formate steht auch eine Vorschau zur Verfügung.

## SharePoint-Integration

Über **Von SharePoint** müssen Dateien nicht manuell hochgeladen werden, sondern können direkt aus allen Ihnen zugänglichen SharePoint-Speicherorten hinzugefügt werden. Sie werden genauso verarbeitet wie hochgeladene Dateien.

:::note[Nicht in allen Umgebungen verfügbar]
Ob diese Funktion in Ihrer Umgebung zur Verfügung steht, legt Ihr Unternehmen fest. Wenden Sie sich bei Fragen an Ihren Administrator.
:::
