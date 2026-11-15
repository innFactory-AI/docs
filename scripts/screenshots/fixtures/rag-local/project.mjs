// Projekt-Inhalte (Einträge, kuratierte Seiten, Wissensgraph) mit erfundenen Daten.
// Wird in data.mjs vor den Standardantworten gefragt: gibt { json } zurück oder null.

export function projectExtra({ method, path, q, tr, collections, t, ME, MAX }) {
  const MIN = 60_000, H = 60 * MIN, D = 24 * H;
  const PID = 'projekt-alpha';
  const ok = (json) => ({ json });
  const proj = collections.find((c) => c.id === PID);

  const contrib = (who, channel, ago) => ({ name: who.name, email: who.email, channel, at: t(ago) });
  const entry = (id, kind, title, size, who, channel, ago, extra = {}) => ({
    id, name: title, title, entryKind: kind, sizeBytes: size, contentType: kind === 'file' ? 'application/pdf' : 'text/markdown',
    status: 'indexed', collectionId: PID, collectionName: proj.displayName, sourceType: 'entry', createdAt: t(ago), lastIndexedAt: t(ago - MIN),
    contributors: [contrib(who, channel, ago)], ...extra,
  });
  const entries = [
    entry('e1', 'note', tr('Kickoff-Notizen', 'Kickoff notes'), 3_400, ME, 'ui', 6 * D),
    entry('e2', 'link', tr('Angebot Wettbewerber (Link)', 'Competitor offer (link)'), 9_800, MAX, 'ui', 5 * D, { sourceUrl: 'https://www.example.com/angebot' }),
    entry('e3', 'chat', tr('Chat-Auszug: Terminabstimmung', 'Chat excerpt: scheduling'), 2_100, ME, 'chat', 4 * D),
    entry('e4', 'file', tr('Anforderungen-Kunde.pdf', 'Customer-requirements.pdf'), 482_000, MAX, 'ui', 3 * D, { contentType: 'application/pdf' }),
    entry('e5', 'mail', tr('Mail: Rückfragen zur Lieferung', 'Mail: questions about delivery'), 1_900, ME, 'outlook', 2 * D),
    entry('e6', 'note', tr('Entscheidung: Release im Juni', 'Decision: release in June'), 1_200, ME, 'ui', 3 * H, { curation: { state: 'pending', attempts: 0 } }),
  ];

  if (path === '/files') {
    const ids = (q.get('collectionIds') ?? '').split(',');
    if (ids.includes(PID)) {
      const kind = q.get('kind');
      const list = kind === 'tabular' ? [] : entries;
      const pageSize = Number(q.get('pageSize') ?? 20);
      return ok({ files: list.slice(0, pageSize), total: list.length, page: 1, pageSize, totalPages: 1 });
    }
  }
  let m = path.match(/^\/files\/([^/]+)$/);
  if (m && entries.find((e) => e.id === m[1])) return ok({ file: entries.find((e) => e.id === m[1]) });

  // ---------- Seiten ----------
  const pg = (id, slug, title, type, summary, conf, extra = {}) => ({
    id, slug, title, type, origin: 'curated', tags: extra.tags ?? [], summary, confirmed: conf, status: 'active', updatedAt: t(extra.ago ?? 2 * D), sourceCount: extra.sources ?? 2,
  });
  const pages = [
    pg('pg1', 'zielbild', tr('Zielbild und Meilensteine', 'Goal and milestones'), tr('Thema', 'Topic'),
      tr('Das Projekt liefert bis Juni eine erste nutzbare Version. Drei Meilensteine sind vereinbart.', 'The project delivers a first usable version by June. Three milestones are agreed.'), true, { tags: [tr('Planung', 'planning'), tr('Meilensteine', 'milestones')], sources: 3, ago: 3 * D }),
    pg('pg2', 'anforderungen', tr('Anforderungen des Kunden', 'Customer requirements'), tr('Thema', 'Topic'),
      tr('Der Kunde fordert Einmalanmeldung, einen Export als PDF und deutsche Oberflächentexte.', 'The customer asks for single sign-on, a PDF export and German UI texts.'), false, { tags: [tr('Anforderungen', 'requirements')], sources: 2, ago: 2 * D }),
    pg('pg3', 'wettbewerber', tr('Angebot eines Wettbewerbers', 'A competitor offer'), tr('Beleg', 'Evidence'),
      tr('Ein Wettbewerber bietet ein ähnliches Paket zu einem höheren Festpreis an.', 'A competitor offers a similar package at a higher fixed price.'), false, { tags: [tr('Markt', 'market')], sources: 1, ago: 5 * D }),
  ];
  if (m = path.match(/^\/api\/collections\/([^/]+)\/pages$/)) {
    if (m[1] !== PID) return ok({ pages: [], total: 0, hiddenCount: 0, page: 1, pageSize: 20 });
    const ps = Number(q.get('pageSize') ?? 20);
    return ok({ pages: pages.slice(0, ps), total: pages.length, hiddenCount: 0, page: 1, pageSize: ps, canRemove: true });
  }
  if (m = path.match(/^\/api\/collections\/([^/]+)\/pages\/([^/]+)$/)) {
    const p = pages.find((x) => x.id === m[2]);
    if (!p) return null;
    const body = tr(
      `## Ziel\n\nBis **Juni** steht eine erste nutzbare Version für den Kunden bereit. Der Umfang ist bewusst klein gehalten.\n\n## Meilensteine\n\n1. **Kickoff** abgeschlossen, Rollen geklärt\n2. **Prototyp** bis Ende April mit Anmeldung und Suche\n3. **Abnahme** im Juni nach dem Test mit dem Kunden\n\n## Offene Punkte\n\n- Termin für die Abnahme steht noch nicht fest\n- Die Lieferung der Testdaten klärt Max Muster`,
      `## Goal\n\nA first usable version is ready for the customer by **June**. The scope is deliberately small.\n\n## Milestones\n\n1. **Kickoff** done, roles clarified\n2. **Prototype** by the end of April with sign-in and search\n3. **Acceptance** in June after the customer test\n\n## Open points\n\n- The acceptance date is not set yet\n- Max Muster clarifies the delivery of test data`);
    return ok({
      ...p, aliases: [], bodyMd: body, confirmedBodyMd: p.confirmed ? body : undefined, confirmedAt: p.confirmed ? t(3 * D) : undefined, version: 3, parentPageId: undefined,
      sources: [
        { fileId: 'e1', title: entries[0].title, entryKind: 'note', occurredAt: t(6 * D) },
        { fileId: 'e3', title: entries[2].title, entryKind: 'chat', occurredAt: t(4 * D) },
        { fileId: 'e6', title: entries[5].title, entryKind: 'note', occurredAt: t(3 * H) },
      ].slice(0, p.sourceCount),
      contributors: [ME.name, MAX.name],
      links: pages.filter((x) => x.id !== p.id).slice(0, 2).map((x) => ({ id: x.id, slug: x.slug, title: x.title })),
      log: [
        { action: 'created', actorKind: 'curator', at: t(6 * D) },
        { action: 'updated', actorKind: 'curator', at: t(4 * D) },
        ...(p.confirmed ? [{ action: 'confirmed', actorKind: 'user', actor: ME.name, at: t(3 * D) }] : []),
      ],
      canEdit: true, canEnrich: false, canRemove: true,
    });
  }

  // ---------- Gesamtwissen ----------
  if (path === '/api/brain/mutes') return ok([]);
  if (path === '/api/brain/search') return ok({ pages: [], evidence: [], partial: false, skipped: [] });
  if (path === '/api/brain/pages') return ok({ pages: [], total: 0, page: 1, pageSize: 20 });

  const node = (id, kind, label, o = {}) => ({ id, kind, label, href: o.href ?? '', muted: false, count: 0, ...o });
  const cNodes = [], cEdges = [];
  const add = (c, role, aggs, sources) => {
    const cid = `c-${c.id}`;
    cNodes.push(node(cid, 'collection', c.displayName, { role, count: c.fileCount, parent: 'me', collectionId: c.id, href: `/collections/${c.id}`, bytes: c.tableSizeBytes }));
    cEdges.push({ source: 'me', target: cid, kind: 'role', role });
    for (const [agg, n] of aggs) {
      const id = `a-${c.id}-${agg}`;
      cNodes.push(node(id, 'aggregate', { files: tr('Dateien', 'Files'), entries: tr('Einträge', 'Entries'), pages: tr('Seiten', 'Pages'), tables: tr('Tabellen', 'Tables') }[agg], { aggregate: agg, count: n, parent: cid, collectionId: c.id }));
      cEdges.push({ source: cid, target: id, kind: 'member' });
    }
    for (const [type, label, n] of sources) {
      const id = `s-${c.id}-${type}`;
      cNodes.push(node(id, 'source', label, { sourceType: type, count: n, parent: cid, collectionId: c.id }));
      cEdges.push({ source: cid, target: id, kind: 'member' });
    }
  };
  const byId = Object.fromEntries(collections.map((c) => [c.id, c]));
  const meGraph = () => {
    cNodes.length = 0; cEdges.length = 0;
    cNodes.push(node('me', 'me', ME.name, { href: '/brain' }));
    add(byId.vertrieb, 'owner', [['files', 38]], [['sharepoint', tr('Vertriebsportal', 'Sales portal'), 24]]);
    add(byId['personal-handbuch'], 'editor', [['files', 21]], [['webdav', tr('Archiv-Server', 'Archive server'), 12]]);
    add(byId.produktdokumentation, 'owner', [['files', 64]], [['googledrive', tr('Marketing-Laufwerk', 'Marketing drive'), 40], ['webcrawl', tr('Produktseite', 'Product site'), 24]]);
    add(byId.verkaufsdaten, 'owner', [['tables', 3]], []);
    add(byId[PID], 'owner', [['entries', 6], ['pages', 3]], []);
    add(byId['projekt-beta'], 'editor', [['entries', 4], ['pages', 2]], []);
    return { schema: 'companyrag.graph/2', mode: 'me', center: 'me', nodes: [...cNodes], edges: [...cEdges] };
  };
  if (path === '/api/brain/graph' && q.get('mode') === 'me') return ok(meGraph());
  if (path === '/api/brain/graph' && q.get('mode') === 'collection') {
    const g = meGraph();
    const cid = `c-${q.get('collectionId')}`;
    const keep = new Set(['me', cid, ...g.nodes.filter((n) => n.parent === cid).map((n) => n.id)]);
    const nodes = g.nodes.filter((n) => keep.has(n.id)).map((n) => (n.id === cid ? { ...n, parent: undefined } : n));
    return ok({ ...g, mode: 'collection', center: cid, nodes: nodes.filter((n) => n.id !== 'me'), edges: g.edges.filter((e) => keep.has(e.source) && keep.has(e.target) && e.source !== 'me') });
  }
  if (path === '/api/brain/graph/expand') {
    const parent = q.get('node');
    if (parent === `a-${PID}-entries`) {
      const ns = entries.map((e) => node(`e-${e.id}`, 'entry', e.title, { parent, collectionId: PID, href: `/collections/${PID}?entry=${e.id}` }));
      return ok({ schema: 'companyrag.graph/2', mode: 'expand', nodes: ns, edges: ns.map((n) => ({ source: parent, target: n.id, kind: 'member' })) });
    }
    if (parent === `a-${PID}-pages`) {
      const ns = pages.map((p) => node(`p-${p.id}`, 'page', p.title, { parent, collectionId: PID, href: `/collections/${PID}?page=${p.id}` }));
      return ok({ schema: 'companyrag.graph/2', mode: 'expand', nodes: ns, edges: [...ns.map((n) => ({ source: parent, target: n.id, kind: 'member' })), { source: 'p-pg1', target: 'p-pg2', kind: 'link' }, { source: 'p-pg2', target: 'p-pg3', kind: 'link' }] });
    }
    return ok({ schema: 'companyrag.graph/2', mode: 'expand', nodes: [], edges: [] });
  }
  return null;
}
