---
title: companyRAG API
description: Hier ist die Beschreibung deiner API.
---

Diese Dokumentation beschreibt die API-Schnittstelle für den CompanyRAG Indexer, die über API-Key-Authentifizierung gesichert ist.


## Authentifizierung

Alle Endpunkte in dieser Spezifikation erfordern eine Authentifizierung über [API Key](/de/company-gpt/addons/companyrag/#api-schl%C3%BCssel). Der API Key muss im `Authorization`-Header im Bearer Token-Format übermittelt werden.

API Keys werden über das Admin-Panel generiert und haben das Format `rag_<64-character-hex-string>`.

**Beispiel für den Authentifizierungs-Header:**
```
Authorization: Bearer rag_a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890
```

**Alternative (Cookie-basiert für Browser-Clients):**
Die API unterstützt auch ein `access_token`-Cookie als Fallback-Authentifizierung.

### Sicherheitsschema

**Name:** BearerAuth
**Typ:** HTTP
**Schema:** `bearer`
**Beschreibung:** API Key Authentifizierung mittels Bearer Token. Format: `Bearer rag_<64-character-hex>`.

---

## Fehlerbehandlung

Alle Fehler folgen diesem Format:

```json
{
  "error": "Error message description"
}
```

Häufige HTTP-Statuscodes:
*   `400 Bad Request`: Ungültige Anfrageparameter
*   `401 Unauthorized`: Fehlende oder ungültige Authentifizierung
*   `403 Forbidden`: Unzureichende Berechtigungen
*   `404 Not Found`: Ressource nicht gefunden
*   `500 Internal Server Error`: Server-seitiger Fehler

---

## Server

Die API ist über die folgenden Server erreichbar:

`https://[FIRMA].company-gpt.com/companygpt/rag/api` (Bitte [FIRMA] an der richtigen Stelle durch die tatsächliche Domain ersetzen oder in der RAG-UI unter API-Schlüssel demensprechend aus der Browser-Adressleiste kopieren)

---

## Datenmodelle (Schemas)

### Error
Fehlermeldungs-Objekt.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `error`  | `string` | Fehlermeldung |

### PaginationMeta
Metadaten für die Paginierung.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `total`  | `integer` | Gesamtzahl der Elemente |
| `page`   | `integer` | Aktuelle Seitennummer (1-indiziert) |
| `pageSize` | `integer` | Anzahl der Elemente pro Seite |
| `totalPages` | `integer` | Gesamtzahl der Seiten |

### FileInfo
Metadaten einer Datei.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Eindeutige Datei-ID |
| `name`   | `string` |        | Originaler Dateiname |
| `blobPath` | `string` |        | Pfad im Blob-Speicher |
| `sizeBytes` | `integer` | `int64` | Dateigröße in Bytes (optional) |
| `contentType` | `string` |        | MIME-Typ (optional) |
| `status` | `string` |        | Verarbeitungsstatus der Datei (`pending`, `indexed`, `failed`, `deleted`) |
| `collectionId` | `string` | `uuid` | Zugehörige Sammlungs-ID (optional) |
| `collectionName` | `string` |        | Zugehöriger Sammlungsname (optional) |
| `createdAt` | `string` | `date-time` | ISO 8601 Erstellungszeitstempel |
| `updatedAt` | `string` | `date-time` | ISO 8601 Letzter Aktualisierungszeitstempel |
| `lastIndexedAt` | `string` | `date-time` | ISO 8601 Letzter Indexierungszeitstempel (optional) |

### FileListResponse
Paginierte Liste von Dateien.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `files`  | `array` of `FileInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |
| `totalPages` | `integer` | |

### FileUploadRequest
Anfrage zum Hochladen einer Datei (multipart/form-data).
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `file`   | `string` | `binary` | Hochzuladende Datei |
| `collectionId` | `string` | `uuid` | Ziel-Sammlungs-ID (optional) |

### FileUploadResponse
Antwort nach erfolgreichem Dateiupload.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Datei-ID |
| `name`   | `string` |        | Dateiname |
| `status` | `string` |        | Status der Datei (`pending`, `indexed`, `failed`) |
| `collectionId` | `string` | `uuid` | Sammlungs-ID |
| `createdAt` | `string` | `date-time` | Erstellungszeitstempel |

### JobInfo
Informationen zu einem Indexierungs-Job.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Eindeutige Job-ID |
| `fileId` | `string` | `uuid` | Zugehörige Datei-ID |
| `fileName` | `string` |        | Name der verarbeiteten Datei (optional) |
| `collectionId` | `string` | `uuid` | Zugehörige Sammlungs-ID (optional) |
| `collectionName` | `string` |        | Zugehöriger Sammlungsname (optional) |
| `type`   | `string` |        | Job-Aktionstyp (`index`, `delete`, `reindex`) |
| `status` | `string` |        | Aktueller Job-Status (`pending`, `running`, `completed`, `failed`, `cancelled`) |
| `retryCount` | `integer` |        | Anzahl der Versuche |
| `maxRetries` | `integer` |        | Maximale Anzahl erlaubter Versuche |
| `error`  | `string` |        | Fehlermeldung bei fehlgeschlagenem Job (optional) |
| `createdAt` | `string` | `date-time` | ISO 8601 Erstellungszeitstempel |
| `startedAt` | `string` | `date-time` | ISO 8601 Startzeitstempel (optional) |
| `completedAt` | `string` | `date-time` | ISO 8601 Abschlusszeitstempel (optional) |

### JobListResponse
Paginierte Liste von Jobs.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `jobs`   | `array` of `JobInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |
| `totalPages` | `integer` | |
| `statusCounts` | `object` | Anzahl der Jobs pro Status (`pending`, `running`, `completed`, `failed`, `cancelled`) |

### CollectionInfo
Metadaten einer Sammlung.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Eindeutige Sammlungs-ID |
| `name`   | `string` |        | Sammlungsname |
| `description` | `string` |        | Sammlungsbeschreibung (optional) |
| `createdAt` | `string` | `date-time` | |
| `updatedAt` | `string` | `date-time` | |

### CollectionListResponse
Paginierte Liste von Sammlungen.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `collections` | `array` of `CollectionInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |
| `totalPages` | `integer` | |

### CollectionCreateRequest
Anfrage zum Erstellen einer Sammlung.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `name`   | `string` | Sammlungsname |
| `description` | `string` | Sammlungsbeschreibung (optional) |

### CollectionUpdateRequest
Anfrage zum Aktualisieren einer Sammlung.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `name`   | `string` | Neuer Sammlungsname (optional) |
| `description` | `string` | Neue Sammlungsbeschreibung (optional) |

### SourceInfo
Konfiguration einer Datenquelle.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | |
| `name`   | `string` |        | |
| `type`   | `string` |        | Typ der Quelle (`sharepoint`, `firecrawl`, `custom`) |
| `config` | `object` |        | Quellen-spezifische Konfiguration |
| `createdAt` | `string` | `date-time` | |
| `updatedAt` | `string` | `date-time` | |

### SourceListResponse
Paginierte Liste von Datenquellen.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `sources` | `array` of `SourceInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |

### SourceCreateRequest
Anfrage zum Erstellen einer Datenquelle.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `name`   | `string` | |
| `type`   | `string` | Typ der Quelle (`sharepoint`, `firecrawl`, `custom`) |
| `config` | `object` | Quellen-spezifische Konfiguration |

### APIKeyInfo
Informationen zu einem API-Key.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | |
| `clientName` | `string` |        | Menschlich lesbarer Name für den Schlüssel |
| `permissions` | `array` of `string` | | Array von Berechtigungen (z.B. `["read", "write"]`) |
| `createdAt` | `string` | `date-time` | |
| `lastUsedAt` | `string` | `date-time` | Letzter Verwendungszeitstempel (kann null sein) |
| `revoked` | `boolean` |        | Gibt an, ob der Schlüssel widerrufen wurde |

### APIKeyListResponse
Paginierte Liste von API-Keys.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `keys`   | `array` of `APIKeyInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |

### APIKeyCreateRequest
Anfrage zum Erstellen eines API-Keys.
| Property | Typ | Beschreibung |
| :------- | :-- | :----------- |
| `clientName` | `string` | Menschlich lesbarer Name für diesen API-Key |
| `permissions` | `array` of `string` | Angefragte Berechtigungen (Standard: `['read']`) |

### APIKeyCreateResponse
Antwort nach Erstellung eines API-Keys.
| Property | Typ | Format | Beschreibung |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | |
| `key`    | `string` |        | Der tatsächliche API-Key (nur einmal angezeigt) |
| `clientName` | `string` |        | |
| `permissions` | `array` of `string` | | |
| `createdAt` | `string` | `date-time` | |

---

## API Endpunkte

### Files

Endpoints zur Verwaltung von Dateien.

#### `GET /files`
**Zusammenfassung:** Dateien auflisten
**Beschreibung:** Ruft eine paginierte Liste der für den authentifizierten Benutzer zugänglichen Dateien ab. Die Ergebnisse werden basierend auf den Sammlungsberechtigungen des Benutzers gefiltert.
**Operation-ID:** `listFiles`
**Parameter:**
*   `page` (`query`, optional): Seitennummer (1-indiziert, Standard 1). Typ: `integer`, Minimum: `1`.
*   `pageSize` (`query`, optional): Elemente pro Seite (Standard 20, Max 100). Typ: `integer`, Minimum: `1`, Maximum: `100`.
*   `collectionId` (`query`, optional): Filtern nach Sammlungs-ID. Typ: `string`, Format: `uuid`.
*   `status` (`query`, optional): Filtern nach Dateistatus. Typ: `string`, Enum: `['pending', 'indexed', 'failed']`.
**Antworten:**
*   `200 OK`: Erfolgreiche Antwort. Schema: `FileListResponse`.
*   `401 Unauthorized`: Schema: `Error`.
*   `500 Internal Server Error`: Schema: `Error`.

#### `POST /files`
**Zusammenfassung:** Eine Datei hochladen
**Beschreibung:** Lädt eine neue Datei in eine Sammlung hoch. Die Datei wird zur Indexierung in die Warteschlange gestellt.
**Operation-ID:** `uploadFile`
**Anfragebody (multipart/form-data):**
*   `file` (erforderlich): Die hochzuladende Datei (binär). Typ: `string`, Format: `binary`.
*   `collectionId` (optional): Ziel-Sammlungs-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `201 Created`: Datei erfolgreich hochgeladen. Schema: `FileUploadResponse`.
*   `400 Bad Request`: Ungültige Anfrage. Schema: `Error`.
*   `401 Unauthorized`: Schema: `Error`.
*   `413 Payload Too Large`: Datei zu groß. Schema: `Error`.

#### `GET /files/{fileId}`
**Zusammenfassung:** Dateidetails abrufen
**Beschreibung:** Ruft Metadaten und die Indexierungshistorie für eine bestimmte Datei ab.
**Operation-ID:** `getFile`
**Parameter:**
*   `fileId` (`path`, erforderlich): Datei-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Dateidetails. Schema: `FileInfo`.
*   `401 Unauthorized`: Schema: `Error`.
*   `403 Forbidden`: Zugriff verweigert. Schema: `Error`.
*   `404 Not Found`: Datei nicht gefunden. Schema: `Error`.

#### `DELETE /files/{fileId}`
**Zusammenfassung:** Eine Datei löschen
**Beschreibung:** Löscht eine Datei und entfernt sie aus allen Indizes.
**Operation-ID:** `deleteFile`
**Parameter:**
*   `fileId` (`path`, erforderlich): Datei-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Datei gelöscht. Content: `application/json`, Schema: `object` mit Property `status` (string, Beispiel: 'deleted').
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Datei nicht gefunden.

#### `POST /files/{fileId}/reindex`
**Zusammenfassung:** Eine Datei neu indexieren
**Beschreibung:** Stellt eine Datei zur erneuten Verarbeitung in die Warteschlange.
**Operation-ID:** `reindexFile`
**Parameter:**
*   `fileId` (`path`, erforderlich): Datei-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Reindex-Job in die Warteschlange gestellt. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Datei nicht gefunden.

### Jobs

Endpoints zur Verwaltung von Indexierungs-Jobs.

#### `GET /jobs`
**Zusammenfassung:** Indexierungs-Jobs auflisten
**Beschreibung:** Ruft eine paginierte Liste von Indexierungs-Jobs mit optionaler Filterung ab.
**Operation-ID:** `listJobs`
**Parameter:**
*   `page` (`query`, optional): Seitennummer (Standard 1). Typ: `integer`, Minimum: `1`.
*   `pageSize` (`query`, optional): Elemente pro Seite (Standard 20, Max 100). Typ: `integer`, Minimum: `1`, Maximum: `100`.
*   `status` (`query`, optional): Filtern nach Job-Status. Typ: `string`, Enum: `['pending', 'running', 'completed', 'failed', 'cancelled']`.
*   `collectionId` (`query`, optional): Filtern nach Sammlungs-ID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Liste von Jobs. Schema: `JobListResponse`.
*   `401 Unauthorized`:

#### `GET /jobs/{jobId}`
**Zusammenfassung:** Job-Details abrufen
**Beschreibung:** Ruft detaillierte Informationen zu einem bestimmten Job ab.
**Operation-ID:** `getJob`
**Parameter:**
*   `jobId` (`path`, erforderlich): Job-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Job-Details. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Job nicht gefunden.

#### `DELETE /jobs/{jobId}`
**Zusammenfassung:** Einen Job löschen/abbrechen
**Beschreibung:** Bricht einen ausstehenden Job ab oder löscht einen abgeschlossenen Job.
**Operation-ID:** `deleteJob`
**Parameter:**
*   `jobId` (`path`, erforderlich): Job-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Job gelöscht. Content: `application/json`, Schema: `object` mit Property `status` (string, Beispiel: 'deleted').
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Job nicht gefunden.

#### `POST /jobs/{jobId}/retry`
**Zusammenfassung:** Einen fehlgeschlagenen Job erneut versuchen
**Beschreibung:** Versucht einen fehlgeschlagenen Indexierungs-Job erneut.
**Operation-ID:** `retryJob`
**Parameter:**
*   `jobId` (`path`, erforderlich): Job-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Job erneut versucht. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Job nicht gefunden.
*   `409 Conflict`: Job kann im aktuellen Zustand nicht erneut versucht werden.

#### `POST /jobs/retry-all-failed`
**Zusammenfassung:** Alle fehlgeschlagenen Jobs erneut versuchen
**Beschreibung:** Versucht alle fehlgeschlagenen Jobs für die zugänglichen Sammlungen des Benutzers erneut.
**Operation-ID:** `retryAllFailedJobs`
**Antworten:**
*   `200 OK`: Erneuter Versuch für alle fehlgeschlagenen Jobs in die Warteschlange gestellt. Content: `application/json`, Schema: `object` mit Property `retried` (integer, Beschreibung: Anzahl der zur Wiederholung in die Warteschlange gestellten Jobs).

#### `DELETE /jobs/failed`
**Zusammenfassung:** Alle fehlgeschlagenen Jobs löschen
**Beschreibung:** Löscht alle fehlgeschlagenen Jobs für die zugänglichen Sammlungen des Benutzers.
**Operation-ID:** `deleteAllFailedJobs`
**Antworten:**
*   `200 OK`: Fehlgeschlagene Jobs gelöscht. Content: `application/json`, Schema: `object` mit Property `deleted` (integer).

#### `POST /reindex-all`
**Zusammenfassung:** Alle Dateien neu indexieren
**Beschreibung:** Stellt alle Dateien in den zugänglichen Sammlungen des Benutzers zur Neuindexierung in die Warteschlange.
**Operation-ID:** `reindexAll`
**Antworten:**
*   `200 OK`: Reindex-Jobs in die Warteschlange gestellt. Content: `application/json`, Schema: `object` mit Property `queued` (integer, Beschreibung: Anzahl der zur Neuindexierung in die Warteschlange gestellten Dateien).

### Collections

Endpoints zur Verwaltung von Sammlungen.

#### `GET /api/collections`
**Zusammenfassung:** Sammlungen auflisten
**Beschreibung:** Ruft eine paginierte Liste der für den Benutzer zugänglichen Sammlungen ab.
**Operation-ID:** `listCollections`
**Parameter:**
*   `page` (`query`, optional): Seitennummer (Standard 1). Typ: `integer`.
*   `pageSize` (`query`, optional): Elemente pro Seite (Standard 20, Max 100). Typ: `integer`.
**Antworten:**
*   `200 OK`: Liste von Sammlungen. Schema: `CollectionListResponse`.
*   `401 Unauthorized`:

#### `POST /api/collections`
**Zusammenfassung:** Sammlung erstellen
**Beschreibung:** Erstellt eine neue Sammlung.
**Operation-ID:** `createCollection`
**Anfragebody (application/json):**
*   Schema: `CollectionCreateRequest`.
**Antworten:**
*   `201 Created`: Sammlung erstellt. Schema: `CollectionInfo`.
*   `400 Bad Request`: Ungültige Anfrage. Schema: `Error`.
*   `401 Unauthorized`:

#### `GET /api/collections/{collectionId}`
**Zusammenfassung:** Sammlungsdetails abrufen
**Beschreibung:** Ruft Metadaten für eine bestimmte Sammlung ab.
**Operation-ID:** `getCollection`
**Parameter:**
*   `collectionId` (`path`, erforderlich): Sammlungs-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Sammlungsdetails. Schema: `CollectionInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Sammlung nicht gefunden.

#### `PUT /api/collections/{collectionId}`
**Zusammenfassung:** Sammlung aktualisieren
**Beschreibung:** Aktualisiert Sammlungsmetadaten.
**Operation-ID:** `updateCollection`
**Parameter:**
*   `collectionId` (`path`, erforderlich): Sammlungs-UUID. Typ: `string`, Format: `uuid`.
**Anfragebody (application/json):**
*   Schema: `CollectionUpdateRequest`.
**Antworten:**
*   `200 OK`: Sammlung aktualisiert. Schema: `CollectionInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Sammlung nicht gefunden.

#### `DELETE /api/collections/{collectionId}`
**Zusammenfassung:** Sammlung löschen
**Beschreibung:** Löscht eine Sammlung und alle zugehörigen Daten.
**Operation-ID:** `deleteCollection`
**Parameter:**
*   `collectionId` (`path`, erforderlich): Sammlungs-UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Sammlung gelöscht.
*   `401 Unauthorized`:
*   `403 Forbidden`: Zugriff verweigert.
*   `404 Not Found`: Sammlung nicht gefunden.

### Sources

Endpoints zur Verwaltung von Datenquellen.

#### `GET /api/sources`
**Zusammenfassung:** Datenquellen auflisten
**Beschreibung:** Ruft eine paginierte Liste der konfigurierten Datenquellen ab.
**Operation-ID:** `listSources`
**Parameter:**
*   `page` (`query`, optional): Typ: `integer`.
*   `pageSize` (`query`, optional): Typ: `integer`.
**Antworten:**
*   `200 OK`: Liste von Quellen. Schema: `SourceListResponse`.
*   `401 Unauthorized`:

#### `POST /api/sources`
**Zusammenfassung:** Datenquelle erstellen
**Beschreibung:** Konfiguriert eine neue Datenquelle (SharePoint, Firecrawl, etc.).
**Operation-ID:** `createSource`
**Anfragebody (application/json):**
*   Schema: `SourceCreateRequest`.
**Antworten:**
*   `201 Created`: Quelle erstellt. Schema: `SourceInfo`.
*   `400 Bad Request`: Ungültige Anfrage.
*   `401 Unauthorized`:

#### `GET /api/sources/{sourceId}`
**Zusammenfassung:** Quellendetails abrufen
**Operation-ID:** `getSource`
**Parameter:**
*   `sourceId` (`path`, erforderlich): Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Quellendetails. Schema: `SourceInfo`.
*   `401 Unauthorized`:
*   `404 Not Found`: Quelle nicht gefunden.

#### `PUT /api/sources/{sourceId}`
**Zusammenfassung:** Quelle aktualisieren
**Operation-ID:** `updateSource`
**Parameter:**
*   `sourceId` (`path`, erforderlich): Typ: `string`, Format: `uuid`.
**Anfragebody (application/json):**
*   Schema: `SourceCreateRequest`.
**Antworten:**
*   `200 OK`: Quelle aktualisiert. Schema: `SourceInfo`.
*   `401 Unauthorized`:
*   `404 Not Found`: Quelle nicht gefunden.

#### `DELETE /api/sources/{sourceId}`
**Zusammenfassung:** Quelle löschen
**Operation-ID:** `deleteSource`
**Parameter:**
*   `sourceId` (`path`, erforderlich): Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Quelle gelöscht.
*   `401 Unauthorized`:
*   `404 Not Found`: Quelle nicht gefunden.

#### `POST /api/sources/{sourceId}/sync`
**Zusammenfassung:** Quellensynchronisierung auslösen
**Beschreibung:** Löst manuell eine Synchronisierung von dieser Datenquelle aus.
**Operation-ID:** `syncSource`
**Parameter:**
*   `sourceId` (`path`, erforderlich): Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: Synchronisierung ausgelöst. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `404 Not Found`: Quelle nicht gefunden.

### Admin - API Keys

Endpoints für die Verwaltung von API-Keys durch Administratoren.

#### `GET /admin/api-keys`
**Zusammenfassung:** API-Keys auflisten (Admin)
**Beschreibung:** Listet alle API-Keys auf (nur für Administratoren).
**Operation-ID:** `listAPIKeys`
**Parameter:**
*   `page` (`query`, optional): Typ: `integer`.
*   `pageSize` (`query`, optional): Typ: `integer`.
**Antworten:**
*   `200 OK`: Liste von API-Keys. Schema: `APIKeyListResponse`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Admin-Zugriff erforderlich.

#### `POST /admin/api-keys`
**Zusammenfassung:** API-Key erstellen (Admin)
**Beschreibung:** Erstellt einen neuen API-Key für einen Benutzer oder eine Anwendung.
**Operation-ID:** `createAPIKey`
**Anfragebody (application/json):**
*   Schema: `APIKeyCreateRequest`.
**Antworten:**
*   `201 Created`: API-Key erstellt (Schlüssel wird nur einmal angezeigt). Schema: `APIKeyCreateResponse`.
*   `400 Bad Request`: Ungültige Anfrage. Schema: `Error`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Admin-Zugriff erforderlich.

#### `DELETE /admin/api-keys/{keyId}`
**Zusammenfassung:** API-Key widerrufen (Admin)
**Beschreibung:** Widerruft einen API-Key, wodurch die weitere Verwendung verhindert wird.
**Operation-ID:** `revokeAPIKey`
**Parameter:**
*   `keyId` (`path`, erforderlich): API-Key UUID. Typ: `string`, Format: `uuid`.
**Antworten:**
*   `200 OK`: API-Key widerrufen.
*   `401 Unauthorized`:
*   `403 Forbidden`: Admin-Zugriff erforderlich.
*   `404 Not Found`: API-Key nicht gefunden.