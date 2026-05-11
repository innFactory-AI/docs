---
title: companyRAG API
description: Documentation for the CompanyRAG Indexer API secured with API key authentication.
---

This documentation describes the API interface for the CompanyRAG Indexer, which is secured via API key authentication.


## Authentication

All endpoints in this specification require authentication via [API Key](/en/company-gpt/addons/companyrag/#api-key). The API Key must be sent in the `Authorization` header using the Bearer token format.

API Keys are generated via the admin panel and have the format `rag_<64-character-hex-string>`.

**Example authentication header:**
```
Authorization: Bearer rag_a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890
```

**Alternative (cookie-based for browser clients):**
The API also supports an `access_token` cookie as fallback authentication.

### Security Scheme

**Name:** BearerAuth
**Type:** HTTP
**Schema:** `bearer`
**Description:** API Key authentication using a Bearer token. Format: `Bearer rag_<64-character-hex>`.

---

## Error Handling

All errors follow this format:

```json
{
  "error": "Error message description"
}
```

Common HTTP status codes:
*   `400 Bad Request`: Invalid request parameters
*   `401 Unauthorized`: Missing or invalid authentication
*   `403 Forbidden`: Insufficient permissions
*   `404 Not Found`: Resource not found
*   `500 Internal Server Error`: Server-side error

---

## Server

The API is available via the following server:

`https://[COMPANY].company-gpt.com/companygpt/rag/api` (Please replace [COMPANY] in the correct place with the actual domain, or copy it accordingly from the browser address bar in the RAG UI under API Key)

---

## Data Models (Schemas)

### Error
Error message object.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `error`  | `string` | Error message |

### PaginationMeta
Metadata for pagination.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `total`  | `integer` | Total number of items |
| `page`   | `integer` | Current page number (1-indexed) |
| `pageSize` | `integer` | Number of items per page |
| `totalPages` | `integer` | Total number of pages |

### FileInfo
Metadata of a file.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Unique file ID |
| `name`   | `string` |        | Original file name |
| `blobPath` | `string` |        | Path in blob storage |
| `sizeBytes` | `integer` | `int64` | File size in bytes (optional) |
| `contentType` | `string` |        | MIME type (optional) |
| `status` | `string` |        | File processing status (`pending`, `indexed`, `failed`, `deleted`) |
| `collectionId` | `string` | `uuid` | Associated collection ID (optional) |
| `collectionName` | `string` |        | Associated collection name (optional) |
| `createdAt` | `string` | `date-time` | ISO 8601 creation timestamp |
| `updatedAt` | `string` | `date-time` | ISO 8601 last update timestamp |
| `lastIndexedAt` | `string` | `date-time` | ISO 8601 last indexing timestamp (optional) |

### FileListResponse
Paginated list of files.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `files`  | `array` of `FileInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |
| `totalPages` | `integer` | |

### FileUploadRequest
Request for uploading a file (multipart/form-data).
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `file`   | `string` | `binary` | File to upload |
| `collectionId` | `string` | `uuid` | Target collection ID (optional) |

### FileUploadResponse
Response after successful file upload.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | File ID |
| `name`   | `string` |        | File name |
| `status` | `string` |        | File status (`pending`, `indexed`, `failed`) |
| `collectionId` | `string` | `uuid` | Collection ID |
| `createdAt` | `string` | `date-time` | Creation timestamp |

### JobInfo
Information about an indexing job.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Unique job ID |
| `fileId` | `string` | `uuid` | Associated file ID |
| `fileName` | `string` |        | Name of the processed file (optional) |
| `collectionId` | `string` | `uuid` | Associated collection ID (optional) |
| `collectionName` | `string` |        | Associated collection name (optional) |
| `type`   | `string` |        | Job action type (`index`, `delete`, `reindex`) |
| `status` | `string` |        | Current job status (`pending`, `running`, `completed`, `failed`, `cancelled`) |
| `retryCount` | `integer` |        | Number of attempts |
| `maxRetries` | `integer` |        | Maximum number of allowed attempts |
| `error`  | `string` |        | Error message for failed job (optional) |
| `createdAt` | `string` | `date-time` | ISO 8601 creation timestamp |
| `startedAt` | `string` | `date-time` | ISO 8601 start timestamp (optional) |
| `completedAt` | `string` | `date-time` | ISO 8601 completion timestamp (optional) |

### JobListResponse
Paginated list of jobs.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `jobs`   | `array` of `JobInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |
| `totalPages` | `integer` | |
| `statusCounts` | `object` | Number of jobs per status (`pending`, `running`, `completed`, `failed`, `cancelled`) |

### CollectionInfo
Metadata of a collection.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | Unique collection ID |
| `name`   | `string` |        | Collection name |
| `description` | `string` |        | Collection description (optional) |
| `createdAt` | `string` | `date-time` | |
| `updatedAt` | `string` | `date-time` | |

### CollectionListResponse
Paginated list of collections.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `collections` | `array` of `CollectionInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |
| `totalPages` | `integer` | |

### CollectionCreateRequest
Request to create a collection.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `name`   | `string` | Collection name |
| `description` | `string` | Collection description (optional) |

### CollectionUpdateRequest
Request to update a collection.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `name`   | `string` | New collection name (optional) |
| `description` | `string` | New collection description (optional) |

### SourceInfo
Configuration of a data source.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | |
| `name`   | `string` |        | |
| `type`   | `string` |        | Type of source (`sharepoint`, `firecrawl`, `custom`) |
| `config` | `object` |        | Source-specific configuration |
| `createdAt` | `string` | `date-time` | |
| `updatedAt` | `string` | `date-time` | |

### SourceListResponse
Paginated list of data sources.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `sources` | `array` of `SourceInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |

### SourceCreateRequest
Request to create a data source.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `name`   | `string` | |
| `type`   | `string` | Type of source (`sharepoint`, `firecrawl`, `custom`) |
| `config` | `object` | Source-specific configuration |

### APIKeyInfo
Information about an API key.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | |
| `clientName` | `string` |        | Human-readable name for the key |
| `permissions` | `array` of `string` | | Array of permissions (e.g. `["read", "write"]`) |
| `createdAt` | `string` | `date-time` | |
| `lastUsedAt` | `string` | `date-time` | Last usage timestamp (can be null) |
| `revoked` | `boolean` |        | Indicates whether the key has been revoked |

### APIKeyListResponse
Paginated list of API keys.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `keys`   | `array` of `APIKeyInfo` | |
| `total`  | `integer` | |
| `page`   | `integer` | |
| `pageSize` | `integer` | |

### APIKeyCreateRequest
Request to create an API key.
| Property | Type | Description |
| :------- | :-- | :----------- |
| `clientName` | `string` | Human-readable name for this API key |
| `permissions` | `array` of `string` | Requested permissions (default: `['read']`) |

### APIKeyCreateResponse
Response after creating an API key.
| Property | Type | Format | Description |
| :------- | :-- | :----- | :----------- |
| `id`     | `string` | `uuid` | |
| `key`    | `string` |        | The actual API key (displayed only once) |
| `clientName` | `string` |        | |
| `permissions` | `array` of `string` | | |
| `createdAt` | `string` | `date-time` | |

---

## API Endpoints

### Files

Endpoints for managing files.

#### `GET /files`
**Summary:** List files
**Description:** Retrieves a paginated list of files accessible to the authenticated user. The results are filtered based on the user's collection permissions.
**Operation-ID:** `listFiles`
**Parameters:**
*   `page` (`query`, optional): Page number (1-indexed, default 1). Type: `integer`, Minimum: `1`.
*   `pageSize` (`query`, optional): Items per page (default 20, max 100). Type: `integer`, Minimum: `1`, Maximum: `100`.
*   `collectionId` (`query`, optional): Filter by collection ID. Type: `string`, Format: `uuid`.
*   `status` (`query`, optional): Filter by file status. Type: `string`, Enum: `['pending', 'indexed', 'failed']`.
**Responses:**
*   `200 OK`: Successful response. Schema: `FileListResponse`.
*   `401 Unauthorized`: Schema: `Error`.
*   `500 Internal Server Error`: Schema: `Error`.

#### `POST /files`
**Summary:** Upload a file
**Description:** Uploads a new file to a collection. The file is queued for indexing.
**Operation-ID:** `uploadFile`
**Request body (multipart/form-data):**
*   `file` (required): The file to upload (binary). Type: `string`, Format: `binary`.
*   `collectionId` (optional): Target collection UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `201 Created`: File uploaded successfully. Schema: `FileUploadResponse`.
*   `400 Bad Request`: Invalid request. Schema: `Error`.
*   `401 Unauthorized`: Schema: `Error`.
*   `413 Payload Too Large`: File too large. Schema: `Error`.

#### `GET /files/{fileId}`
**Summary:** Retrieve file details
**Description:** Retrieves metadata and indexing history for a specific file.
**Operation-ID:** `getFile`
**Parameters:**
*   `fileId` (`path`, required): File UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: File details. Schema: `FileInfo`.
*   `401 Unauthorized`: Schema: `Error`.
*   `403 Forbidden`: Access denied. Schema: `Error`.
*   `404 Not Found`: File not found. Schema: `Error`.

#### `DELETE /files/{fileId}`
**Summary:** Delete a file
**Description:** Deletes a file and removes it from all indexes.
**Operation-ID:** `deleteFile`
**Parameters:**
*   `fileId` (`path`, required): File UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: File deleted. Content: `application/json`, Schema: `object` with property `status` (string, Example: 'deleted').
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: File not found.

#### `POST /files/{fileId}/reindex`
**Summary:** Reindex a file
**Description:** Queues a file for reprocessing.
**Operation-ID:** `reindexFile`
**Parameters:**
*   `fileId` (`path`, required): File UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Reindex job queued. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: File not found.

### Jobs

Endpoints for managing indexing jobs.

#### `GET /jobs`
**Summary:** List indexing jobs
**Description:** Retrieves a paginated list of indexing jobs with optional filtering.
**Operation-ID:** `listJobs`
**Parameters:**
*   `page` (`query`, optional): Page number (default 1). Type: `integer`, Minimum: `1`.
*   `pageSize` (`query`, optional): Items per page (default 20, max 100). Type: `integer`, Minimum: `1`, Maximum: `100`.
*   `status` (`query`, optional): Filter by job status. Type: `string`, Enum: `['pending', 'running', 'completed', 'failed', 'cancelled']`.
*   `collectionId` (`query`, optional): Filter by collection ID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: List of jobs. Schema: `JobListResponse`.
*   `401 Unauthorized`:

#### `GET /jobs/{jobId}`
**Summary:** Retrieve job details
**Description:** Retrieves detailed information about a specific job.
**Operation-ID:** `getJob`
**Parameters:**
*   `jobId` (`path`, required): Job UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Job details. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: Job not found.

#### `DELETE /jobs/{jobId}`
**Summary:** Delete/cancel a job
**Description:** Cancels a pending job or deletes a completed job.
**Operation-ID:** `deleteJob`
**Parameters:**
*   `jobId` (`path`, required): Job UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Job deleted. Content: `application/json`, Schema: `object` with property `status` (string, Example: 'deleted').
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: Job not found.

#### `POST /jobs/{jobId}/retry`
**Summary:** Retry a failed job
**Description:** Retries a failed indexing job.
**Operation-ID:** `retryJob`
**Parameters:**
*   `jobId` (`path`, required): Job UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Job retried. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: Job not found.
*   `409 Conflict`: Job cannot be retried in its current state.

#### `POST /jobs/retry-all-failed`
**Summary:** Retry all failed jobs
**Description:** Retries all failed jobs for the user's accessible collections.
**Operation-ID:** `retryAllFailedJobs`
**Responses:**
*   `200 OK`: Retry queued for all failed jobs. Content: `application/json`, Schema: `object` with property `retried` (integer, Description: Number of jobs queued for retry).

#### `DELETE /jobs/failed`
**Summary:** Delete all failed jobs
**Description:** Deletes all failed jobs for the user's accessible collections.
**Operation-ID:** `deleteAllFailedJobs`
**Responses:**
*   `200 OK`: Failed jobs deleted. Content: `application/json`, Schema: `object` with property `deleted` (integer).

#### `POST /reindex-all`
**Summary:** Reindex all files
**Description:** Queues all files in the user's accessible collections for reindexing.
**Operation-ID:** `reindexAll`
**Responses:**
*   `200 OK`: Reindex jobs queued. Content: `application/json`, Schema: `object` with property `queued` (integer, Description: Number of files queued for reindexing).

### Collections

Endpoints for managing collections.

#### `GET /api/collections`
**Summary:** List collections
**Description:** Retrieves a paginated list of collections accessible to the user.
**Operation-ID:** `listCollections`
**Parameters:**
*   `page` (`query`, optional): Page number (default 1). Type: `integer`.
*   `pageSize` (`query`, optional): Items per page (default 20, max 100). Type: `integer`.
**Responses:**
*   `200 OK`: List of collections. Schema: `CollectionListResponse`.
*   `401 Unauthorized`:

#### `POST /api/collections`
**Summary:** Create collection
**Description:** Creates a new collection.
**Operation-ID:** `createCollection`
**Request body (application/json):**
*   Schema: `CollectionCreateRequest`.
**Responses:**
*   `201 Created`: Collection created. Schema: `CollectionInfo`.
*   `400 Bad Request`: Invalid request. Schema: `Error`.
*   `401 Unauthorized`:

#### `GET /api/collections/{collectionId}`
**Summary:** Retrieve collection details
**Description:** Retrieves metadata for a specific collection.
**Operation-ID:** `getCollection`
**Parameters:**
*   `collectionId` (`path`, required): Collection UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Collection details. Schema: `CollectionInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: Collection not found.

#### `PUT /api/collections/{collectionId}`
**Summary:** Update collection
**Description:** Updates collection metadata.
**Operation-ID:** `updateCollection`
**Parameters:**
*   `collectionId` (`path`, required): Collection UUID. Type: `string`, Format: `uuid`.
**Request body (application/json):**
*   Schema: `CollectionUpdateRequest`.
**Responses:**
*   `200 OK`: Collection updated. Schema: `CollectionInfo`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: Collection not found.

#### `DELETE /api/collections/{collectionId}`
**Summary:** Delete collection
**Description:** Deletes a collection and all associated data.
**Operation-ID:** `deleteCollection`
**Parameters:**
*   `collectionId` (`path`, required): Collection UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Collection deleted.
*   `401 Unauthorized`:
*   `403 Forbidden`: Access denied.
*   `404 Not Found`: Collection not found.

### Sources

Endpoints for managing data sources.

#### `GET /api/sources`
**Summary:** List data sources
**Description:** Retrieves a paginated list of configured data sources.
**Operation-ID:** `listSources`
**Parameters:**
*   `page` (`query`, optional): Type: `integer`.
*   `pageSize` (`query`, optional): Type: `integer`.
**Responses:**
*   `200 OK`: List of sources. Schema: `SourceListResponse`.
*   `401 Unauthorized`:

#### `POST /api/sources`
**Summary:** Create data source
**Description:** Configures a new data source (SharePoint, Firecrawl, etc.).
**Operation-ID:** `createSource`
**Request body (application/json):**
*   Schema: `SourceCreateRequest`.
**Responses:**
*   `201 Created`: Source created. Schema: `SourceInfo`.
*   `400 Bad Request`: Invalid request.
*   `401 Unauthorized`:

#### `GET /api/sources/{sourceId}`
**Summary:** Retrieve source details
**Operation-ID:** `getSource`
**Parameters:**
*   `sourceId` (`path`, required): Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Source details. Schema: `SourceInfo`.
*   `401 Unauthorized`:
*   `404 Not Found`: Source not found.

#### `PUT /api/sources/{sourceId}`
**Summary:** Update source
**Operation-ID:** `updateSource`
**Parameters:**
*   `sourceId` (`path`, required): Type: `string`, Format: `uuid`.
**Request body (application/json):**
*   Schema: `SourceCreateRequest`.
**Responses:**
*   `200 OK`: Source updated. Schema: `SourceInfo`.
*   `401 Unauthorized`:
*   `404 Not Found`: Source not found.

#### `DELETE /api/sources/{sourceId}`
**Summary:** Delete source
**Operation-ID:** `deleteSource`
**Parameters:**
*   `sourceId` (`path`, required): Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Source deleted.
*   `401 Unauthorized`:
*   `404 Not Found`: Source not found.

#### `POST /api/sources/{sourceId}/sync`
**Summary:** Trigger source synchronization
**Description:** Manually triggers a synchronization of this data source.
**Operation-ID:** `syncSource`
**Parameters:**
*   `sourceId` (`path`, required): Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: Synchronization triggered. Schema: `JobInfo`.
*   `401 Unauthorized`:
*   `404 Not Found`: Source not found.

### Admin - API Keys

Endpoints for administrators to manage API keys.

#### `GET /admin/api-keys`
**Summary:** List API keys (Admin)
**Description:** Lists all API keys (administrators only).
**Operation-ID:** `listAPIKeys`
**Parameters:**
*   `page` (`query`, optional): Type: `integer`.
*   `pageSize` (`query`, optional): Type: `integer`.
**Responses:**
*   `200 OK`: List of API keys. Schema: `APIKeyListResponse`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Admin access required.

#### `POST /admin/api-keys`
**Summary:** Create API key (Admin)
**Description:** Creates a new API key for a user or an application.
**Operation-ID:** `createAPIKey`
**Request body (application/json):**
*   Schema: `APIKeyCreateRequest`.
**Responses:**
*   `201 Created`: API key created (key is displayed only once). Schema: `APIKeyCreateResponse`.
*   `400 Bad Request`: Invalid request. Schema: `Error`.
*   `401 Unauthorized`:
*   `403 Forbidden`: Admin access required.

#### `DELETE /admin/api-keys/{keyId}`
**Summary:** Revoke API key (Admin)
**Description:** Revokes an API key, preventing further use.
**Operation-ID:** `revokeAPIKey`
**Parameters:**
*   `keyId` (`path`, required): API key UUID. Type: `string`, Format: `uuid`.
**Responses:**
*   `200 OK`: API key revoked.
*   `401 Unauthorized`:
*   `403 Forbidden`: Admin access required.
*   `404 Not Found`: API key not found.
