# CompanyGPT — Produkt- & Feature-Beschreibung

*Last updated: 2026-06-16*

> Companion zu [`product-marketing.md`](./product-marketing.md). Dieses Dokument ist **produkt- und feature-fokussiert**: Was CompanyGPT ist, woraus es besteht und was es kann. Positionierung, Zielgruppen, Personas und Wettbewerb stehen im Marketing-Dokument. Quellen: `content/leistungen/companygpt/` (Hauptseite + Addons companyRAG, companyFILES, companyDASHBOARD, companyTRANSLATE) und die zugehörigen Layouts.

---

## Was ist CompanyGPT?

CompanyGPT ist ein **privater, DSGVO- und EU-AI-Act-konformer KI-Assistent für Unternehmen**. Die Oberfläche und Bedienung sind an ChatGPT angelehnt — die Lösung läuft jedoch vollständig **in der eigenen Cloud-Infrastruktur des Kunden** (Azure, AWS, Google Cloud oder STACKIT), sodass Unternehmensdaten die eigene Umgebung nie verlassen.

**Technische Basis:** CompanyGPT baut auf **LibreChat** (Open-Source-Chat-Plattform) auf und wird von innFactory um ein eigenes Set an Enterprise-Funktionen und Addons erweitert. Das bedeutet:

- **Vom Open-Source-Kern geerbt:** Multi-Modell-Chat-Oberfläche, Agenten-Modus, MCP-Anbindung, Memory, Web- und Dateisuche, Admin-Dashboard, SSO.
- **Von innFactory ergänzt:** Fixpreis-Aufbau in der Kundeninfrastruktur, KI-Leitlinie (EU-AI-Act), Mitarbeiterschulung sowie die kostenpflichtigen Addons companyRAG, companyFILES, companyDASHBOARD und companyTRANSLATE.

**Liefermodell:** Software-Implementierungsprojekt + Service — kein SaaS-Mietmodell. Einmaliger Fixpreis-Aufbau (ab 9.970 EUR zzgl. USt), **keine Lizenzgebühren**, laufende KI-Kosten tokenbasiert direkt beim Modellanbieter. Optionaler Wartungsvertrag (399 EUR/Monat) schaltet Updates, Support und alle Addons frei.

---

## Kernplattform-Features

| Feature | Beschreibung |
|---------|--------------|
| **Vertraute Chat-Oberfläche** | ChatGPT-ähnliche UI, an Corporate Design anpassbar (Branding, Logo, Farben). |
| **Multi-Modell an einem Ort** | Mehrere führende KI-Modelle hinter einer Oberfläche; Modellwahl pro Anwendungsfall vorkonfigurierbar. |
| **Agenten-Modus** | KI-Agenten per natürlicher Sprache erstellen; komplexere Anwendungen via REST API oder MCP anbinden. |
| **Agent Marketplace** | Zentraler Katalog für interne und freigegebene Agents — mit Metadaten (Zweck, Owner, Tags, Sensitivitätsstufe). |
| **Zugriffsrechte auf Agentenebene** | Präzises Rollen-/Rechtemanagement pro Agent inkl. vollständiger Audit-Logs aller Agent-Aktivitäten. |
| **Memory / Erinnerungsfunktion** | Kontextbewusste Gespräche — die KI merkt sich frühere Präferenzen und Fakten. |
| **MCP-Server-Anbindung** | Externe Datenquellen und Tools per Model Context Protocol einbinden; große Community-Auswahl bestehender MCP-Server. |
| **Websuche** | Aktuelle Web-Informationen mit Quellenangaben; öffentliche oder selbst gehostete Suchdienste. |
| **Dateisuche** | Dateien hochladen, für LLMs durchsuchbar machen und Antworten mit internem Wissen anreichern. |
| **Mistral OCR** | Gescannte Dokumente auswerten — Bilder in maschinenlesbaren Text umwandeln. |
| **SharePoint-Integration** | Synchronisation von Dokumenten, Metadaten und Berechtigungen (Cloud + On-Premise). |
| **n8n-Integration** | Open-Source-Low-Code-Workflow-Automatisierung; n8n als MCP-Server für KI-Agenten nutzbar. |
| **SSO** | Single Sign-on über Microsoft EntraID; Anbindung an bestehendes Identity & Access Management mit regelmäßiger Berechtigungs-Sync. |
| **LibreChat Admin Dashboard** | Eingebaute Transparenz über aktive Nutzer, Requests, Tokenverbrauch und wertstiftende Agenten (Basis; tiefere Auswertung via companyDASHBOARD). |

---

## Unterstützte KI-Modelle

CompanyGPT bündelt Modelle mehrerer Anbieter — alle EU-verfügbar bzw. souverän betreibbar:

- **OpenAI** — GPT-5.1, GPT-4.1, GPT-4o (über Azure EU), GPT-5 Mini, GPT-5 Nano
- **Google** — Gemini 2.5 Pro, Gemini 2.5 Flash; Google Nano Banana (Bildgenerierung/-bearbeitung); via Vertex AI zusätzlich Kimi K2, Qwen
- **Anthropic** — Claude 4.6 (Sonnet, Opus)
- **Perplexity AI** — mehrstufige Echtzeit-Webrecherche mit quellenbelegten Antworten
- **Über Azure AI Foundry** — DeepSeek, Mistral, Llama
- **Souverän** — selbst gehostete Modelle über **STACKIT Model Serving** (Inferenz in deutschen Rechenzentren)

**Bildgenerierung:** Google Nano Banana erstellt neue Visuals per Texteingabe und optimiert bestehende Bilder.

---

## Addons

Alle Addons setzen einen aktiven CompanyGPT-Wartungsvertrag (399 EUR/Monat zzgl. USt) voraus und laufen vollständig in der eigenen Kunden-Infrastruktur.

### companyRAG — KI-Suche über die gesamte Wissensbasis
Macht große Mengen Unternehmensdokumente **semantisch durchsuchbar** und stellt sie KI-Agenten direkt zur Verfügung.
- **MCP-Server `ai-search`** mit drei Tools: `search_content` (semantische Ähnlichkeitssuche), `find_content_by_source` (dokumentenspezifisch), `find_content_by_metadata` (metadatenbasiert)
- **Unbegrenzte** Dokumentenanzahl und Dateilänge — skaliert mit dem Bedarf
- **16 Formate:** PDF, DOCX, DOC, TXT, MD, RTF, HTML, XML, CSV, JSON, EML, XLSX, XLS, PPTX, PPT
- **SharePoint-/Teams-Sync:** neue Dateien im konfigurierten Ordner werden automatisch indexiert
- **Sammlungen & Rechte:** Dokumente gruppieren, Zugriff privat oder geteilt (Nutzer, Entra-Gruppen, gesamte Organisation)
- **Auftragsübersicht:** Status pro Indexierung, fehlgeschlagene Aufträge mit Fehlerdetails wiederholbar

### companyFILES — der zentrale Datei-Hub
Verwaltet KI-generierte Dokumente, stellt Vorlagen bereit und macht Visualisierungen durchsuchbar. Sechs Kernfunktionen:
- **Dokumentenerstellung:** native Word (.docx), Excel (.xlsx), PowerPoint (.pptx) und PDF direkt aus dem Chat
- **Intelligente Vorlagen:** hinterlegte .docx/.xlsx/.pptx-Templates automatisch mit aktuellen Daten befüllen
- **Visualisierungen:** interaktive Charts/Diagramme (Balken, Linien, Torten, Mermaid-Flowcharts) per Prompt
- **Dateikonvertierung:** Excel ↔ CSV/JSON, Word ↔ PDF, Markdown ↔ HTML u. a.
- **Datei-Upload:** Drag & Drop, beliebige Dateien für den Assistenten verfügbar machen
- **Organisation:** Ordnerstruktur, ZIP-Archive, Überblick über alle Dateien

### companyDASHBOARD — KI-Nutzung transparent messen & steuern
Zentrales Dashboard mit **10 KPI-Metriken** für datenbasierte Entscheidungen:
- Nutzer-Statistiken (alle Agents, Total/Active Users, Vergleich zur Vorperiode)
- Anfragen & Konversationen im Zeitraum (mit Trend ↑/↓)
- Token-Verbrauch (Input/Output) als präzise Kostenbasis
- MCP Tool-Calls, Web-Suchen, verarbeitete Dateien
- Token-Nutzung pro Modell (aufgeschlüsselt nach Provider/Modelltyp)
- Aufschlüsselung pro Agent und Zeitraum, flexibler Zeitraumfilter (Tage bis Jahre)
- **CSV-Export** aller Metriken

### companyTRANSLATE — DSGVO-konformer KI-Übersetzer
Sicherer KI-Übersetzer, **vollständig im Microsoft-Tenant des Kunden** integriert — Alternative zu Compliance-riskanten öffentlichen Übersetzer-Tools.
- **Login ausschließlich über Microsoft Corporate Account (SSO)** — kein separater Zugang, keine Datenweitergabe
- **Text- und Dokumentenübersetzung:** PDF, Word (.docx), PowerPoint (.pptx) bis 40 MB; Rohtext bis 5.000 Zeichen direkt im Interface
- **Zweistufiges Glossar:** globales Glossar (von Admins verwaltet, verbindliche Terminologie) + persönliches Glossar (projektspezifische Begriffe pro Nutzer)
- **Zentraler Verlauf:** alle Übersetzungen automatisch protokolliert
- Unterstützt alle gängigen Geschäftssprachen (Sprachumfang abhängig vom eingesetzten Modell)

---

## Deployment & Infrastruktur

- **Cloud-Optionen:** Microsoft Azure, AWS, Google Cloud, STACKIT
- **Datenstandort:** EU; bei STACKIT souveräne Rechenzentren in Deutschland
- **Integrationen:** Microsoft 365, SharePoint, n8n, MCP
- **Identity:** Microsoft EntraID / bestehendes IAM
- **Implementierungsdauer:** einsatzbereit in wenigen Wochen (standardisierte Basis + maßgeschneiderte Anpassung)

---

## Compliance & Sicherheit (als Feature)

- **100 % Datenkontrolle** — Daten verlassen nie die eigene Infrastruktur
- **DSGVO- und EU-AI-Act-konform**
- **KI-Leitlinie inklusive** — individuell nach rechtlicher Anamnesebefragung erstellt
- **Mitarbeiterschulung inklusive** — KI-Kompetenz nach EU-AI-Act (zugleich zentraler Hebel zur Kostenkontrolle: bedarfsgerechte Modellwahl spart bis zu 80 % Modellkosten)
- **Audit-Logs** auf Agentenebene

---

## Aufbau-Prozess (Lieferumfang)

1. **CompanyGPT-Aufbau** — Fixpreis-Setup im Cloud-Account des Kunden
2. **KI-Leitlinie erstellen** — individuell nach rechtlicher Anamnesebefragung
3. **Mitarbeiterschulung** — KI-Kompetenz nach EU-AI-Act
4. **Go-Live & Support** — Rollout und laufender Support

---

## Schnellreferenz Preise

| Posten | Preis (zzgl. USt) |
|--------|-------------------|
| CompanyGPT Fixpreis-Aufbau (inkl. KI-Leitlinie & Schulung) | ab 9.970 EUR |
| Lizenzgebühren | 0 EUR |
| Laufende KI-Kosten (tokenbasiert, direkt beim Anbieter, 10–50 Nutzer) | ~500–1.500 EUR/Monat |
| Optionaler Wartungsvertrag (Updates, Support, alle Addons) | 399 EUR/Monat |
