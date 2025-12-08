---
title: Upload zur KI Suche über n8n
description: Beschreibung Meeting NOtizen Agent erstellen
---

Wenn sie das [Addon KI-Suche für den CompanyGPT](/company-gpt/addons/ki-suche/) aktiviert haben, können Sie über n8n ganz einfach Dokumente bereitstellen. Die KI Suche stellt mehrere Endpunkte bereit, die genutzt werden können. 

## Upload einer PDF per Fomular

Dieses Formular können Sie einfach kopieren und in ihr n8n einfügen:

**Workflow**
```json
{
  "nodes": [
    {
      "parameters": {
        "formTitle": "FILE UPLOAD",
        "formFields": {
          "values": [
            {
              "fieldLabel": "file",
              "fieldType": "file",
              "multipleFiles": false
            },
            {
              "fieldLabel": "collection",
              "fieldType": "dropdown",
              "fieldOptions": {
                "values": [
                  {
                    "option": "intranet"
                  }
                ]
              }
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2.3,
      "position": [
        80,
        352
      ],
      "id": "b9d7af1b-7d16-47ce-8163-a71dc349fa67",
      "name": "On form submission1",
      "webhookId": "262498be-4c8c-487d-828d-95ef45be8531"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "http://<demo-url>/upload",
        "sendBody": true,
        "contentType": "multipart-form-data",
        "bodyParameters": {
          "parameters": [
            {
              "name": "collection",
              "value": "={{ $json.collection }}"
            },
            {
              "name": "chunkSize",
              "value": "1000"
            },
            {
              "name": "chunkOverlap",
              "value": "200"
            },
            {
              "parameterType": "formBinaryData",
              "name": "file",
              "inputDataFieldName": "file"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.3,
      "position": [
        304,
        352
      ],
      "id": "192c3c60-47b6-45cf-b771-f9be43e875eb",
      "name": "HTTP Request2"
    }
  ],
  "connections": {
    "On form submission1": {
      "main": [
        [
          {
            "node": "HTTP Request2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "instanceId": "c1c8469986f58ebd924f14ba9d906e06945522498f80983b80a6b52d2f49689f"
  }
}
```

**Response**

```json
[
  {
    "success": true,
    "message": "File uploaded successfully",
    "data": {
      "fileName": "uebersicht.pdf",
      "fileType": "document",
      "mimeType": "application/pdf",
      "size": 107815
    }
  }
]
```

## Upload über CURL von lokalem Ordner 

**Workflow**
```json
{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "b8a3e079-2312-4686-9af2-2f2e3d0f0891",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        -64,
        256
      ],
      "id": "1e7a6978-d322-41d7-b691-015b0a47569d",
      "name": "Webhook",
      "webhookId": "b8a3e079-2312-4686-9af2-2f2e3d0f0891"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "http://<demo-url>/upload",
        "sendBody": true,
        "contentType": "multipart-form-data",
        "bodyParameters": {
          "parameters": [
            {
              "name": "collection",
              "value": "={{ $json.body.collection }}"
            },
            {
              "name": "chunkSize",
              "value": "1000"
            },
            {
              "name": "chunkOverlap",
              "value": "200"
            },
            {
              "parameterType": "formBinaryData",
              "name": "file",
              "inputDataFieldName": "file"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.3,
      "position": [
        160,
        256
      ],
      "id": "a828d020-851f-42ee-b339-c6c78565e07d",
      "name": "HTTP Request"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ $json.data }}",
        "options": {}
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.4,
      "position": [
        368,
        256
      ],
      "id": "e3c3fed6-ec18-48c2-a132-540b0cd0ae9a",
      "name": "Respond to Webhook"
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "HTTP Request",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "instanceId": "2fbc8246e31db5c758268b025fbdc214e01a9221d9316612f902007ee687ec76"
  }
}
```

**CURL**
```bash
curl -X POST https://<n8n-instanz>/webhook/b8a3e079-2312-4686-9af2-2f2e3d0f0891 \
  -F "file=@/pfad/zur/datei.pdf" \
  -F "collection=intranet" \
  -F "chunkSize=1000" \
  -F "chunkOverlap=200"
```

**Response**

```json
[
  {
    "success": true,
    "message": "File uploaded successfully",
    "data": {
      "fileName": "uebersicht.pdf",
      "fileType": "document",
      "mimeType": "application/pdf",
      "size": 107815
    }
  }
]
```

## Endpunkte

### Systemüberprüfung

`GET /health`

Gibt den Status des Dienstes zurück.

**Antwort:**
```json
{
  "status": "OK",
  "timestamp": "2025-11-26T12:00:00Z",
  "method": "GET"
}
```

### Text indexieren

`POST /index`

**Content-Type:** `application/json`

**Anfrage-Body:**

- `source`: Quell-Identifikator (z.B. Dateiname oder URL) (erforderlich)
- `content`: Zu indexierender Textinhalt (erforderlich) - kann einfacher Text oder ein JSON-String sein
- `collection`: Name der Sammlung (optional, Standard: "embeddings")
- `chunkSize`: Chunk-Größe für die Textaufteilung (optional, Standard: 1000)
- `chunkOverlap`: Überlappung zwischen den Chunks (optional, Standard: 200)
- `sourceMeta`: Zusätzliche Metadaten (optional)

**Beispiel:**

```bash
curl -X POST http://<service-url>/index \
  -H "Content-Type: application/json" \
  -d '{
    "source": "test.pdf",
    "content": "This is the text content to be indexed...",
    "collection": "test",
    "chunkSize": 1000,
    "chunkOverlap": 200,
    "sourceMeta": {
      "name": "test-name",
      "title": "test-title"
    }
  }'
```

**Antwort:**
```json
{
  "success": true,
  "message": "Text indexed into 5 chunks."
}
```

### Datei-Upload mit OCR

`POST /upload`

**Content-Type:** `multipart/form-data`

**Formularfelder:**

- `file`: Hochzuladende PDF-Datei (erforderlich) - **Nur PDF-Dateien werden unterstützt**
- `collection`: Name der Sammlung (optional, Standard: "embeddings")
- `chunkSize`: Chunk-Größe (optional, Standard: 1000)
- `chunkOverlap`: Überlappung zwischen den Chunks (optional, Standard: 200)
- `sourceMeta`: JSON-String mit Metadaten (optional)

**Wichtige Hinweise:**

- **Nur PDF**: Dieser Endpunkt akzeptiert nur PDF-Dateien. Andere Dateitypen werden abgewiesen.
- **Automatische PDF-Aufteilung**: PDFs mit mehr als 30 Seiten werden aufgrund von Einschränkungen der Azure-API vor der OCR-Verarbeitung automatisch in 30-seitige Chunks aufgeteilt.
- **Beibehaltung der Seitenzahlen**: Die Seitenzahlen bleiben über die Chunks hinweg erhalten, sodass Seite 35 in einem 50-seitigen PDF weiterhin als Seite 35 indexiert wird.
- **Sequenzielle Verarbeitung**: Die Chunks werden sequenziell verarbeitet, um die korrekte Reihenfolge und Ressourcenverwaltung sicherzustellen.

**Beispiel:**

```bash
curl -X POST http://<service-url>/upload \
  -F "file=@/path/to/document.pdf" \
  -F "collection=test" \
  -F "chunkSize=1000" \
  -F "chunkOverlap=200" \
  -F 'sourceMeta={"name":"test-name","title":"test-title"}'
```

**Antwort:**
```json
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "fileName": "document.pdf",
    "fileType": "document",
    "mimeType": "application/pdf",
    "size": 12345
  }
}
```