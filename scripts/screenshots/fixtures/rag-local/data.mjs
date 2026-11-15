// Erfundene Demo-Daten für die lokale Aufnahme der companyRAG-Oberfläche (rag-local.mjs).
// Alles hier ist frei erfunden: keine echten Personen, Firmen, Hosts, IDs oder Adressen (example.com).
// `createDemo({ lang })` liefert einen Handler: (method, path, query, body) -> { status?, json } oder null.

const MIN = 60_000;
const H = 60 * MIN;
const D = 24 * H;

export const ME = { id: 'u-anna', email: 'anna.beispiel@example.com', name: 'Anna Beispiel' };
const MAX = { id: 'u-max', email: 'max.muster@example.com', name: 'Max Muster' };

const t = (ms) => new Date(Date.now() - ms).toISOString();

export function createDemo({ lang = 'de', state = {} } = {}) {
  const de = lang === 'de';
  const tr = (d, e) => (de ? d : e);

  // ---------- Sammlungen ----------
  const col = (id, name, extra = {}) => ({
    id,
    name: id,
    displayName: name,
    createdAt: t(40 * D),
    updatedAt: t(2 * D),
    fileCount: 0,
    tableSizeBytes: 18_400_000,
    searchLanguage: 'german',
    chunkingStrategy: 'auto',
    collectionType: 'rag',
    ownerId: ME.id,
    owner: ME,
    visibility: 'shared',
    myRole: 'owner',
    accessVia: 'owner',
    shareCount: 0,
    ...extra,
  });
  const collections = [
    col('vertrieb', tr('Vertrieb', 'Sales'), { tableSizeBytes: 412_000_000, description: tr('Preislisten, Angebote und Vertriebsunterlagen', 'Price lists, offers and sales material'), fileCount: 38, shareCount: 3 }),
    col('personal-handbuch', tr('Personal-Handbuch', 'HR handbook'), { tableSizeBytes: 96_000_000,
      description: tr('Richtlinien und Abläufe für neue Mitarbeitende', 'Policies and procedures for new employees'),
      fileCount: 21, ownerId: MAX.id, owner: MAX, myRole: 'editor', accessVia: 'share', shareCount: 2,
    }),
    col('produktdokumentation', tr('Produktdokumentation', 'Product documentation'), { tableSizeBytes: 1_320_000_000, description: tr('Handbücher und Datenblätter', 'Manuals and data sheets'), fileCount: 64, shareCount: 1, visibility: 'public' }),
    col('verkaufsdaten', tr('Verkaufsdaten 2026', 'Sales data 2026'), { tableSizeBytes: 8_400_000, collectionType: 'dataset', datasetMode: 'imported', description: tr('Umsatz je Region und Monat', 'Revenue by region and month'), fileCount: 3, visibility: 'private' }),
    col('projekt-alpha', tr('Projekt Alpha', 'Project Alpha'), { tableSizeBytes: 3_200_000,
      collectionType: 'project', projectStatus: 'active', description: tr('Notizen, Links und Chat-Auszüge zum Kundenprojekt Alpha', 'Notes, links and chat excerpts for customer project Alpha'),
      fileCount: 9, shareCount: 2,
    }),
    col('projekt-beta', tr('Projekt Beta', 'Project Beta'), { tableSizeBytes: 1_100_000,
      collectionType: 'project', projectStatus: 'active', description: tr('Planung des Webshop-Relaunchs', 'Planning of the web shop relaunch'),
      fileCount: 4, ownerId: MAX.id, owner: MAX, myRole: 'editor', accessVia: 'share', shareCount: 2,
    }),
  ];

  const shares = {
    vertrieb: [
      { id: 's1', type: 'entra_user', target: ME.id, name: ME.name, email: ME.email, role: 'owner', createdAt: t(40 * D) },
      { id: 's2', type: 'entra_user', target: MAX.id, name: MAX.name, email: MAX.email, role: 'editor', createdAt: t(20 * D) },
      { id: 's3', type: 'entra_group', target: 'g-vertrieb', name: tr('Team Vertrieb', 'Sales team'), role: 'viewer', createdAt: t(10 * D) },
    ],
  };
  const directory = [
    { kind: 'user', id: 'u-lena', displayName: 'Lena Probe', email: 'lena.probe@example.com' },
    { kind: 'user', id: MAX.id, displayName: MAX.name, email: MAX.email },
    { kind: 'group', id: 'g-vertrieb', displayName: tr('Team Vertrieb', 'Sales team') },
    { kind: 'group', id: 'g-personal', displayName: tr('Team Personal', 'Team HR') },
  ];

  // ---------- Dateien (Auszug) ----------
  const fileNames = [tr('Preisliste-2026.xlsx', 'Price-list-2026.xlsx'), 'Onboarding.pdf', tr('Angebotsvorlage.docx', 'Offer-template.docx'), tr('Produktdatenblatt.pdf', 'Product-data-sheet.pdf'), tr('Urlaubsregelung.md', 'Leave-policy.md'), tr('Reisekosten-Richtlinie.pdf', 'Travel-expense-policy.pdf')];
  const jobFiles = [
    [tr('Preisliste-2026.xlsx', 'Price-list-2026.xlsx'), 'vertrieb', 'index'],
    [tr('Angebotsvorlage.docx', 'Offer-template.docx'), 'vertrieb', 'index'],
    [tr('Produktdatenblatt.pdf', 'Product-data-sheet.pdf'), 'produktdokumentation', 'index'],
    ['Onboarding.pdf', 'personal-handbuch', 'index'],
    [tr('Notiz: Kickoff-Termin', 'Note: kickoff date'), 'projekt-alpha', 'curate'],
    [tr('Verkaufsdaten-Q1', 'Sales-data-Q1'), 'verkaufsdaten', 'db_sync'],
    [tr('Urlaubsregelung.md', 'Leave-policy.md'), 'personal-handbuch', 'index'],
    [tr('Reisekosten-Richtlinie.pdf', 'Travel-expense-policy.pdf'), 'personal-handbuch', 'index'],
    [tr('Handbuch-Version-2.pdf', 'Manual-version-2.pdf'), 'produktdokumentation', 'index'],
    [tr('Scan-Lieferschein.pdf', 'Scan-delivery-note.pdf'), 'vertrieb', 'index'],
  ];
  const nameOf = (id) => collections.find((c) => c.id === id)?.displayName ?? id;
  const jobs = jobFiles.map(([fileName, cid, type], i) => {
    const status = i < 2 ? 'queued' : i === 2 ? 'running' : i === 9 ? 'failed' : 'completed';
    const created = (i + 2) * 3 * MIN;
    const dur = [0, 0, 0, 4_000, 128_000, 19_000, 7_000, 12_000, 245_000, 3_000][i];
    const startedAt = status === 'queued' ? undefined : t(created - 20_000);
    return {
      id: `j${i}`, type, status, fileId: `f${i}`, fileName, collectionId: cid, collectionName: nameOf(cid),
      createdAt: t(created), startedAt,
      completedAt: status === 'completed' || status === 'failed' ? new Date(Date.now() - created + 20_000 + dur).toISOString() : undefined,
      queuePosition: status === 'queued' ? i + 1 : undefined,
      error: status === 'failed' ? tr('Text konnte nicht extrahiert werden (leere Seite)', 'Text could not be extracted (empty page)') : undefined,
    };
  });
  const kindTypes = { index: ['index', 'reindex', 'delete', 'rebuild_fts'], curate: ['curate', 'recurate'], db_sync: ['db_sync', 'db_embed'] };

  // ---------- Verbindungen ----------
  const conn = (id, name, type, extra = {}) => ({
    id, name, type, kind: 'secret', scope: 'private', isOwner: true, canUse: true, canEdit: true, canShare: true, sourceBound: false,
    enabled: true, tenantWide: false, state: 'ready', sourceCount: 1, credential: { configured: true, kind: 'basic' },
    createdAt: t(30 * D), updatedAt: t(5 * D), ...extra,
  });
  const connections = [
    conn('cn-sp', 'Microsoft SharePoint', 'sharepoint', { kind: 'oauth', scope: 'personal', sourceCount: 2, credential: { configured: true } }),
    conn('cn-gd', 'Google Drive', 'googledrive', { kind: 'oauth', scope: 'personal', sourceCount: 1, credential: { configured: true } }),
    conn('cn-wd', tr('Archiv-Server', 'Archive server'), 'webdav', {
      sharedWith: [{ principalType: 'entra_group', display: tr('Team Vertrieb', 'Sales team') }], endpointLabel: 'archiv.example.com',
    }),
    conn('cn-db', tr('Reporting-Datenbank', 'Reporting database'), 'database', {
      tenantWide: true, scope: 'tenant', endpointLabel: 'reporting.example.com', owner: { displayName: MAX.name }, isOwner: false, canEdit: false, canShare: false,
    }),
    conn('cn-wc', 'Webcrawl', 'webcrawl', { kind: 'system', scope: 'system', isOwner: false, canEdit: false, canShare: false, sourceCount: 1, credential: { configured: false } }),
  ];

  // ---------- Quellen ----------
  const src = (id, name, sourceType, config, extra = {}) => ({
    id, sourceType, name, config, enabled: true, syncSchedule: null, collectionId: 'vertrieb', collectionName: tr('Vertrieb', 'Sales'),
    createdAt: t(30 * D), updatedAt: t(2 * D), lastSyncAt: t(8 * H), lastSyncStatus: 'ok',
    lastSyncStats: { listed: 24, processed: 3, unchanged: 20, deleted: 1, durationSeconds: 12 },
    attachedByName: ME.name, canWrite: true, canDelete: true, isAttacher: true, ...extra,
  });
  const sources = [
    src('sr-sp', tr('Vertriebsportal', 'Sales portal'), 'sharepoint', {
      siteId: 's1', siteUrl: 'https://example.sharepoint.com/sites/vertrieb', siteName: tr('Vertrieb', 'Sales'), driveId: 'd1', driveName: tr('Dokumente', 'Documents'),
      folderPath: tr('/Preislisten', '/Price lists'), collectionId: 'vertrieb', fileTypes: ['.pdf', '.docx', '.xlsx'],
    }, { connection: { id: 'cn-sp', name: 'Microsoft SharePoint', type: 'sharepoint' } }),
    src('sr-gd', tr('Marketing-Laufwerk', 'Marketing drive'), 'googledrive', {
      sourceType: 'shared_drive', driveId: 'dr1', driveName: 'Marketing', folderId: 'fo1', folderPath: tr('/Produktblaetter', '/Product-sheets'), fileTypes: ['.pdf', '.docx'], exportNative: true, includeSlides: false, collectionId: 'produktdokumentation',
    }, { collectionId: 'produktdokumentation', collectionName: tr('Produktdokumentation', 'Product documentation'), syncSchedule: 'daily', lastSyncAt: t(3 * H), connection: { id: 'cn-gd', name: 'Google Drive', type: 'googledrive' } }),
    src('sr-wd', tr('Archiv-Server', 'Archive server'), 'webdav', { url: 'https://archiv.example.com/remote.php/webdav', path: '/Archiv', fileTypes: ['.pdf', '.docx'] }, {
      collectionId: 'personal-handbuch', collectionName: tr('Personal-Handbuch', 'HR handbook'), syncSchedule: 'weekly', lastSyncAt: t(18 * H), lastSyncStatus: 'failed',
      lastSyncError: 'webdav: list "/Archiv": 401 Unauthorized', lastSyncStats: { listed: 0 },
      connection: { id: 'cn-wd', name: tr('Archiv-Server', 'Archive server'), type: 'webdav' },
    }),
    src('sr-wc', tr('Produktseite', 'Product site'), 'webcrawl', { urls: ['https://www.example.com/produkte'], maxDepth: 2 }, {
      collectionId: 'produktdokumentation', collectionName: tr('Produktdokumentation', 'Product documentation'), lastSyncAt: t(26 * H), lastSyncStats: { listed: 41, processed: 5, unchanged: 36 },
    }),
    src('sr-git', 'docs-handbuch', 'git', { url: 'https://github.com/example/docs-handbuch', branch: 'main', path: '/', fileTypes: ['.md'] }, {
      collectionId: 'produktdokumentation', collectionName: tr('Produktdokumentation', 'Product documentation'), lastSyncAt: t(5 * H),
    }),
  ];

  // ---------- Admin ----------
  const sourceTypes = {
    types: [
      { type: 'sharepoint', enabled: true, default: true, overridden: false, envAvailable: true, alpha: false, existingSources: 1 },
      { type: 'googledrive', enabled: true, default: false, overridden: true, envAvailable: true, alpha: true, existingSources: 1 },
      { type: 'nextcloud', enabled: true, default: true, overridden: false, envAvailable: true, alpha: false, existingSources: 0 },
      { type: 'git', enabled: true, default: true, overridden: false, envAvailable: true, alpha: false, existingSources: 1 },
      { type: 'webdav', enabled: true, default: true, overridden: false, envAvailable: true, alpha: false, existingSources: 1 },
      { type: 'ftp', enabled: false, default: false, overridden: false, envAvailable: true, alpha: false, existingSources: 0 },
      { type: 'webcrawl', enabled: true, default: true, overridden: false, envAvailable: true, alpha: false, existingSources: 1 },
      { type: 'database', enabled: true, default: false, overridden: true, envAvailable: true, alpha: true, existingSources: 0 },
    ],
    updatedAt: t(3 * D),
  };
  const curatorValues = { defaultModel: 'gpt-4.1-mini', dailyTokenBudget: 2_000_000, recurateDailyTokenBudget: 500_000, quietPeriodSeconds: 120 };
  const curatorSettings = {
    enabled: true, configured: true, running: true, effective: curatorValues, defaults: curatorValues, overridden: [], pinned: [],
    allowedModels: ['gpt-4.1-mini', 'gpt-4.1'], bounds: { maxTokenBudget: 50_000_000, maxQuietSeconds: 3600 },
  };
  const today = new Date().toISOString().slice(0, 10);
  const curatorUsage = {
    usage: [
      { date: today, collectionId: 'projekt-alpha', displayName: tr('Projekt Alpha', 'Project Alpha'), purpose: 'curate', promptTokens: 84_200, completionTokens: 12_900, calls: 18 },
      { date: today, collectionId: 'projekt-beta', displayName: tr('Projekt Beta', 'Project Beta'), purpose: 'curate', promptTokens: 21_300, completionTokens: 3_400, calls: 6 },
    ],
    budget: { daily: 2_000_000, usedToday: 121_800, deferredJobs: 0 },
    recurateBudget: { daily: 500_000, usedToday: 0, deferredJobs: 0 },
  };

  const capabilities = {
    credentialStore: true, allowPrivateHosts: false, projectsEnabled: true, curatorEnabled: true,
    sourceTypes: sourceTypes.types.filter((s) => s.enabled).map((s) => ({ type: s.type, available: true, alpha: s.alpha, disabledForUsers: false })),
    databaseSources: {}, ...(state.capabilities ?? {}),
  };

  // Projekt-Inhalte (Einträge, kuratierte Seiten, Wissensgraph) kommen aus project.mjs
  const extra = state.extra ?? (() => null);

  const ok = (json) => ({ json });

  return function handle(method, path, q, body) {
    const e = extra({ method, path, q, body, lang, tr, collections, t, ME, MAX });
    if (e) return e;

    if (path === '/auth/config') return ok({ sessionSharingEnabled: true, signInUrl: '/login', logoutUrl: '/logout' });
    if (path === '/auth/me') return ok({ authenticated: true, user: { ...ME, isAdmin: true, isSuperAdmin: false, canCreate: true, ...(state.user ?? {}) } });

    if (path === '/api/sources/capabilities') return ok(capabilities);
    if (path === '/api/admin/source-types') return ok(sourceTypes);
    if (path === '/api/admin/features') return ok({ projects: { enabled: true, default: false, overridden: true, envAvailable: true }, updatedAt: t(3 * D) });
    if (path === '/api/admin/curator/settings') return ok(curatorSettings);
    if (path === '/api/admin/curator/usage') return ok(curatorUsage);
    if (path === '/api/projects/curator-models') return ok({ default: 'gpt-4.1-mini', allowed: ['gpt-4.1-mini', 'gpt-4.1'] });

    if (path === '/api/collections' && method === 'GET') return ok({ collections, total: collections.length });
    if (path === '/api/collections/preview-name') return ok({ name: String(body?.displayName ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-') });
    if (path === '/api/embedding-models') return ok({ default: 'text-embedding-3-small', models: [{ id: 'text-embedding-3-small', label: 'text-embedding-3-small', provider: 'openai' }] });
    let m = path.match(/^\/api\/collections\/([^/]+)\/shares$/);
    if (m) return ok(shares[m[1]] ?? []);
    if (path === '/api/directory/search') {
      const needle = (q.get('q') ?? '').toLowerCase();
      return ok({ source: 'directory', groupsAvailable: true, principals: directory.filter((p) => !needle || p.displayName.toLowerCase().includes(needle)) });
    }
    if (path === '/api/entra/groups') return ok({ 'g-vertrieb': tr('Team Vertrieb', 'Sales team') });

    if (path === '/api/projects' && method === 'GET') {
      return ok(collections.filter((c) => c.collectionType === 'project').map((c) => ({
        id: c.id, name: c.name, displayName: c.displayName, ownerDisplayName: c.owner.name, description: c.description,
        projectStatus: 'active', myRole: c.myRole, canContribute: true,
      })));
    }

    if (path === '/jobs') {
      let list = jobs;
      const st = q.get('status'); const kind = q.get('kind');
      if (st) list = list.filter((j) => j.status === st);
      if (kind && kindTypes[kind]) list = list.filter((j) => kindTypes[kind].includes(j.type));
      return ok({
        jobs: list, total: list.length, page: 1, pageSize: 20, totalPages: 1,
        statusCounts: { queued: 2, running: 1, completed: 6, failed: 1, total: jobs.length },
        queueStats: { queued: 2, running: 1 }, deletableFailedCount: 1, cancellableQueuedCount: 2,
      });
    }

    if (path === '/api/connections') return ok({ connections });
    if (path === '/api/user/sharepoint-status') return ok({ connected: true, needsReconnect: false });
    if (path === '/api/user/google-status') return ok({ connected: true, needsReconnect: false });
    if (path === '/api/user/nextcloud-status') return ok({ connected: false, configured: false });
    if (path === '/api/user/github-status') return ok({ connected: false });
    if (path === '/api/integrations/webcrawl/status') return ok({ available: true });

    if (/\/write-losses$/.test(path)) return ok({ losses: [] });
    if (path === '/api/sources/googledrive/drives') return ok([
      { id: 'root', name: tr('Meine Ablage', 'My Drive'), kind: 'my_drive' },
      { id: 'dr1', name: 'Marketing', kind: 'shared_drive' },
      { id: 'dr2', name: tr('Vertrieb gemeinsam', 'Sales shared'), kind: 'shared_drive' },
    ]);
    if (path === '/api/sources/googledrive/items') {
      const folder = (id, name) => ({ id, name, mimeType: 'application/vnd.google-apps.folder', size: 0, webViewLink: '', modifiedTime: t(3 * D), isFolder: true });
      const file = (id, name, mime, size) => ({ id, name, mimeType: mime, size, webViewLink: '', modifiedTime: t(5 * D), isFolder: false });
      return ok([folder('fo1', tr('Produktblaetter', 'Product-sheets')), folder('fo2', tr('Messen 2026', 'Trade fairs 2026')), file('fi1', tr('Preisliste-2026.xlsx', 'Price-list-2026.xlsx'), 'application/vnd.ms-excel', 88_000), file('fi2', 'Onboarding.pdf', 'application/pdf', 412_000)]);
    }
    if (path === '/api/okf/bundles') return ok({ bundles: [] });
    if (path === '/api/sources' && method === 'GET') return ok(sources);

    if (path === '/files') {
      return ok({ files: fileNames.map((n, i) => ({ id: `fl${i}`, name: n, sizeBytes: 120_000 + i * 31_000, contentType: 'application/pdf', status: 'indexed', collectionId: 'vertrieb', collectionName: 'Vertrieb', createdAt: t((i + 1) * D) })), total: fileNames.length, page: 1, pageSize: 20, totalPages: 1 });
    }
    return null;
  };
}
