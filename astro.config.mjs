// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import { rehypeEagerFirstImage } from './src/plugins/rehype-eager-first-image.mjs';
import { existsSync, readFileSync } from 'node:fs';

// Skill pages and their sidebar groups are generated (see scripts/sync-skills.mjs, AGENTS.md).
const skillsSidebarFile = new URL('./src/generated/skills-sidebar.json', import.meta.url);
if (!existsSync(skillsSidebarFile)) {
	throw new Error('src/generated/skills-sidebar.json is missing. Run `npm run skills:sync` first.');
}
const skillsSidebarRaw = JSON.parse(readFileSync(skillsSidebarFile, 'utf8'));
// Skill pages exist only in de/en; the cs locale falls back to German content, so give it the English labels.
const withCsLabels = (item) => ({
	...item,
	...(item.translations?.en && { translations: { ...item.translations, cs: item.translations.en } }),
	...(item.items && { items: item.items.map(withCsLabels) }),
});
const skillsSidebar = skillsSidebarRaw.map(withCsLabels);

// Measurement ID of the innfactory.ai GA4 web data stream. docs.company-gpt.com
// reports into that same stream via cross-domain measurement, so the ID is
// shared with the main site rather than being a stream of its own. Measurement
// IDs are public by design (they ship in the page source), hence no secret.
const GA_MEASUREMENT_ID = 'G-C0PENKMCTH';

/**
 * Google Consent Mode v2. The tag loads on every page but starts fully denied,
 * so an undecided visitor is measured cookielessly; src/components/CookieConsent.astro
 * flips `analytics_storage` once they choose, and this script replays a stored
 * choice before the first hit so returning visitors are not re-measured cookielessly.
 */
const analyticsHead = [
	{
		tag: 'script',
		content: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
	ad_storage: 'denied',
	ad_user_data: 'denied',
	ad_personalization: 'denied',
	analytics_storage: 'denied',
	functionality_storage: 'granted',
	security_storage: 'granted',
	wait_for_update: 500,
});
try {
	if (localStorage.getItem('cg-docs-consent-v1') === 'granted') {
		gtag('consent', 'update', { analytics_storage: 'granted' });
	}
} catch (e) {}
gtag('js', new Date());
// No config call — and therefore no hits — while developing locally, so the
// property never sees localhost traffic.
if (!/^(localhost|127\\.0\\.0\\.1|\\[::1\\])$/.test(location.hostname)) {
	gtag('config', '${GA_MEASUREMENT_ID}');
}
`.trim(),
	},
	{
		tag: 'script',
		attrs: {
			src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
			async: true,
		},
	},
];


// https://astro.build/config
export default defineConfig({
	outDir: './dist',
	site: 'https://docs.company-gpt.com',
	// Moved or replaced pages keep their old URLs alive.
	redirects: {
		'/de/onboarding': '/de/demo-zugang/',
		'/en/onboarding': '/en/demo-zugang/',
		'/de/company-gpt/addons/company-dashboard': '/de/company-gpt/addons/companyadmin/insights/',
		'/en/company-gpt/addons/company-dashboard': '/en/company-gpt/addons/companyadmin/insights/',
		'/de/company-gpt/addons/companyadmin/benutzer-und-gruppen': '/de/company-gpt/addons/companyadmin/gruppen/',
		'/en/company-gpt/addons/companyadmin/benutzer-und-gruppen': '/en/company-gpt/addons/companyadmin/gruppen/',
	},
	markdown: {
		// Astro 7 renders Markdown with Sätteri by default. We stay on the
		// remark/rehype pipeline so page output is unchanged by the upgrade and
		// our rehype plugin keeps working; revisit once Sätteri is the norm.
		processor: unified({
			rehypePlugins: [rehypeEagerFirstImage],
		}),
	},
	integrations: [
		starlight({
			head: [
				...analyticsHead,
				{
					tag: 'script',
					attrs: {
						src: '/scripts/skill-download.js',
						defer: true,
					},
				},
			],
			title: { de: 'CompanyGPT Dokumentation', en: 'CompanyGPT Documentation', cs: 'Dokumentace CompanyGPT' },
			editLink: {
				baseUrl: 'https://github.com/innFactory-AI/docs/edit/main'
			},
			defaultLocale: 'de',
			locales: {
				de: { label: 'Deutsch', lang: 'de' },
				en: { label: 'English', lang: 'en' },
				cs: { label: 'Čeština', lang: 'cs' },
			},
			social: [
				{ label: 'innFactory AI Consulting GmbH', icon: 'rocket', href: 'https://innfactory.ai' }
			],
			// The companyGPT UI theme (colour roles + fonts) from @innfactory/companygpt-ui,
			// synced by `npm run ui:sync`; global.css maps Starlight onto it.
			customCss: [
				'./src/styles/companygpt-ui/fonts.css',
				'./src/styles/companygpt-ui/theme.css',
				'./src/styles/global.css',
			],
			// Code blocks pick up the same 0.5rem radius as the rest of the
			// CompanyGPT UI; Starlight's default is square corners.
			expressiveCode: {
				styleOverrides: {
					borderRadius: '0.5rem',
					borderColor: 'var(--sl-color-hairline-light)',
					// --cg-code-* flip with the theme in global.css so code frames sit
					// one surface step above the page, as they do in the chat UI.
					codeBackground: 'var(--cg-code-bg)',
					frames: {
						frameBoxShadowCssValue: 'none',
						editorTabBarBackground: 'var(--cg-code-tabbar-bg)',
						editorActiveTabBackground: 'var(--cg-code-bg)',
						terminalBackground: 'var(--cg-code-bg)',
						terminalTitlebarBackground: 'var(--cg-code-tabbar-bg)',
					},
				},
			},
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
				PageTitle: './src/components/PageTitle.astro',
				LanguageSelect: './src/components/LanguageSelect.astro',
				// Mounts the cookie consent card site-wide; see the component for why.
				Footer: './src/components/Footer.astro',
			},
			logo: {
				src: './src/assets/logo.svg',
				alt: 'innFactory AI Dokumentation',

			},
			tagline: 'Dokumentation und Anleitungen zu CompanyGPT, dem internen ChatGPT für Unternehmen. Prompt Engineering und vieles mehr.',
			favicon: 'favicon.svg',
			lastUpdated: true,
			titleDelimiter: '|',
			markdown: {
				headingLinks: true,
			},
			description: 'Dokumentation und Anleitungen zu CompanyGPT, dem internen ChatGPT für Unternehmen. Prompt Engineering und vieles mehr.',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
				// Generates the companyRAG API reference from the OpenAPI spec at build
				// time. The spec is the single source of truth — do not hand-maintain
				// endpoint or schema tables in Markdown.
				starlightOpenAPI([
					{
						base: 'api/companyrag',
						label: 'companyRAG API Reference',
						schema: './src/openapi/rag-api.yaml',
					},
				]),
				starlightLlmsTxt({
					projectName: "innFactory CompanyGPT Documentation",
					description: "Dokumentation und Anleitungen zu CompanyGPT, dem internen ChatGPT für Unternehmen. Prompt Engineering und vieles mehr.",
					details: "innFactory AI Consulting GmbH - https://innfactory.ai",
					optionalLinks: [
						{ label: 'Website', url: 'https://innfactory.ai' },
						{ label: 'CompanyGPT', url: 'https://innfactory.ai/de/leistungen/companygpt/' },
					]
				}),
				starlightSidebarTopics([
					{
						label: { de: 'Dokumentation', en: 'Documentation', cs: 'Dokumentace' },
						link: 'intro/company-gpt',
						icon: 'open-book',
						// Lets unlisted pages (e.g. the hidden onboarding page, via the `topic`
						// frontmatter field) associate with this topic without being listed in it.
						id: 'documentation',
						items: [{
							label: 'Einführung',
							translations: { en: 'Introduction', cs: 'Úvod' },
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'CompanyGPT', translations: { en: 'CompanyGPT', cs: 'CompanyGPT' }, slug: 'intro/company-gpt' },
							],
						},
						{
							label: 'Einrichtung',
							translations: { en: 'Setup', cs: 'Nastavení' },
							items: [
								{ label: 'Onboarding-Portal', translations: { en: 'Onboarding portal', cs: 'Portál pro onboarding' }, slug: 'einrichtung/onboarding-portal' },
								{ label: 'CompanyGPT Sovereign', translations: { en: 'CompanyGPT Sovereign', cs: 'CompanyGPT Sovereign' }, slug: 'company-gpt/sovereign' },
							]
						},
						{
							label: 'CompanyGPT',
							translations: { en: 'CompanyGPT', cs: 'CompanyGPT' },
							items: [
								{ label: 'Modellauswahl', translations: { en: 'Model selection', cs: 'Výběr modelu' }, slug: 'company-gpt/modellauswahl' },
								{ label: 'User Interface', translations: { en: 'User Interface', cs: 'Uživatelské rozhraní' }, slug: 'company-gpt/user-interface' },
								{ label: 'Einstellungen', translations: { en: 'Settings', cs: 'Nastavení' }, slug: 'company-gpt/einstellungen' },
								{ label: 'Chat', translations: { en: 'Chat', cs: 'Chat' }, slug: 'company-gpt/chat' },
								{ label: 'Neue Chat-Oberfläche', translations: { en: 'New chat interface', cs: 'Nové rozhraní chatu' }, badge: { text: { de: 'Vorschau', en: 'Preview', cs: 'Náhled' }, variant: 'caution' }, slug: 'company-gpt/neue-chat-oberflaeche' },
								{ label: 'Projekte', translations: { en: 'Projects', cs: 'Projekty' }, slug: 'company-gpt/projekte' },
								{
									label: 'Integrationen',
									translations: { en: 'Integrations', cs: 'Integrace' },
									items: [
										{ label: 'Websuche & WebFetch', translations: { en: 'Web Search & WebFetch', cs: 'Vyhledávání na webu a WebFetch' }, slug: 'company-gpt/integrationen/websuche' },
										{ label: 'Dateisuche', translations: { en: 'File Search', cs: 'Vyhledávání v souborech' }, slug: 'company-gpt/integrationen/dateisuche' },
										{ label: 'Artefakte', translations: { en: 'Artifacts', cs: 'Artefakty' }, slug: 'company-gpt/integrationen/artefakte' },
										{ label: 'MCP Server', translations: { en: 'MCP Servers', cs: 'MCP servery' }, slug: 'company-gpt/integrationen/mcp-server' },
									]
								},
								{
									label: 'Addons',
									translations: { en: 'Add-ons', cs: 'Doplňky' },
									items: [
										{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons' },
										{ label: 'Gemeinsame Oberfläche', translations: { en: 'Shared interface', cs: 'Společné rozhraní' }, slug: 'company-gpt/addons/gemeinsame-oberflaeche' },
										{ label: 'Alle Apps', translations: { en: 'All apps', cs: 'Všechny aplikace' }, slug: 'company-gpt/addons/alle-apps' },
										{
											label: 'companyRAG',
											translations: { en: 'companyRAG', cs: 'companyRAG' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/companyrag' },
												{ label: 'Sammlungen', translations: { en: 'Collections', cs: 'Kolekce' }, slug: 'company-gpt/addons/companyrag/sammlungen' },
												{ label: 'Strukturierte Daten', translations: { en: 'Structured data', cs: 'Strukturovaná data' }, badge: { text: 'Beta', variant: 'caution' }, slug: 'company-gpt/addons/companyrag/strukturierte-daten' },
												{ label: 'Datensatzsammlungen', translations: { en: 'Dataset collections', cs: 'Kolekce datových sad' }, slug: 'company-gpt/addons/companyrag/datensaetze' },
												{ label: 'OKF-Bundles', translations: { en: 'OKF bundles', cs: 'Balíčky OKF' }, badge: { text: { de: 'Experimentell', en: 'Experimental', cs: 'Experimentální' }, variant: 'caution' }, slug: 'company-gpt/addons/companyrag/okf-bundles' },
												{ label: 'Dateien', translations: { en: 'Files', cs: 'Soubory' }, slug: 'company-gpt/addons/companyrag/dateien' },
												{ label: 'Hochladen', translations: { en: 'Upload', cs: 'Nahrávání' }, slug: 'company-gpt/addons/companyrag/hochladen' },
												{ label: 'Quellen', translations: { en: 'Sources', cs: 'Zdroje' }, slug: 'company-gpt/addons/companyrag/quellen' },
												{ label: 'Integrationen', translations: { en: 'Integrations', cs: 'Integrace' }, slug: 'company-gpt/addons/companyrag/integrationen' },
												{ label: 'Aufträge', translations: { en: 'Jobs', cs: 'Úlohy' }, slug: 'company-gpt/addons/companyrag/auftraege' },
												{ label: 'API-Schlüssel', translations: { en: 'API keys', cs: 'API klíče' }, slug: 'company-gpt/addons/companyrag/api-schluessel' },
												{ label: 'Audit-Protokoll', translations: { en: 'Audit log', cs: 'Auditní protokol' }, slug: 'company-gpt/addons/companyrag/audit-protokoll' },
												{ label: 'In CompanyGPT nutzen', translations: { en: 'Using it in CompanyGPT', cs: 'Použití v CompanyGPT' }, slug: 'company-gpt/addons/companyrag/in-companygpt' },
											]
										},
										{
											label: 'companyKNOWLEDGE',
											translations: { en: 'companyKNOWLEDGE', cs: 'companyKNOWLEDGE' },
											badge: { text: { de: 'Experimentell', en: 'Experimental', cs: 'Experimentální' }, variant: 'caution' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/companyknowledge' },
												{ label: 'Agent einrichten', translations: { en: 'Setting up the agent', cs: 'Nastavení agenta' }, slug: 'company-gpt/addons/companyknowledge/agent' },
												{ label: 'Wissen erzeugen und pflegen', translations: { en: 'Creating and maintaining knowledge', cs: 'Vytváření a správa znalostí' }, slug: 'company-gpt/addons/companyknowledge/wissen-erzeugen' },
											]
										},
										{
											label: 'companyFILES',
											translations: { en: 'companyFILES', cs: 'companyFILES' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/companyfiles' },
												{ label: 'Die Oberfläche', translations: { en: 'The interface', cs: 'Rozhraní' }, slug: 'company-gpt/addons/companyfiles/oberflaeche' },
												{ label: 'Einstellungen', translations: { en: 'Settings', cs: 'Nastavení' }, slug: 'company-gpt/addons/companyfiles/einstellungen' },
												{ label: 'Agent einrichten', translations: { en: 'Setting up the agent', cs: 'Nastavení agenta' }, slug: 'company-gpt/addons/companyfiles/agent' },
												{ label: 'Dokumente erstellen', translations: { en: 'Creating documents', cs: 'Vytváření dokumentů' }, slug: 'company-gpt/addons/companyfiles/dokumente-erstellen' },
												{ label: 'Visualisierungen', translations: { en: 'Visualizations', cs: 'Vizualizace' }, slug: 'company-gpt/addons/companyfiles/visualisierungen' },
												{ label: 'Präsentationen bearbeiten', translations: { en: 'Editing presentations', cs: 'Úprava prezentací' }, slug: 'company-gpt/addons/companyfiles/praesentationen' },
												{ label: 'Vorlagen', translations: { en: 'Templates', cs: 'Šablony' }, slug: 'company-gpt/addons/companyfiles/vorlagen' },
												{ label: 'CAD, BIM und 3D', translations: { en: 'CAD, BIM and 3D', cs: 'CAD, BIM a 3D' }, slug: 'company-gpt/addons/companyfiles/cad-und-3d' },
											]
										},
										{
											label: 'companyTRANSLATE',
											translations: { en: 'companyTRANSLATE', cs: 'companyTRANSLATE' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/company-translate' },
												{ label: 'Text übersetzen', translations: { en: 'Translate text', cs: 'Překlad textu' }, slug: 'company-gpt/addons/company-translate/text-uebersetzen' },
												{ label: 'Dokument übersetzen', translations: { en: 'Translate document', cs: 'Překlad dokumentu' }, slug: 'company-gpt/addons/company-translate/dokument-uebersetzen' },
												{ label: 'Glossare', translations: { en: 'Glossaries', cs: 'Glosáře' }, slug: 'company-gpt/addons/company-translate/glossare' },
												{ label: 'Übersetzen im Chat', translations: { en: 'Translating in the chat', cs: 'Překládání v chatu' }, slug: 'company-gpt/addons/company-translate/im-chat' },
											]
										},
										{
											label: 'companyTRANSCRIBE',
											translations: { en: 'companyTRANSCRIBE', cs: 'companyTRANSCRIBE' },
											badge: { text: 'Beta', variant: 'caution' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/company-transcribe' },
												{ label: 'Aufnehmen und transkribieren', translations: { en: 'Recording and transcribing', cs: 'Nahrávání a přepis' }, slug: 'company-gpt/addons/company-transcribe/aufnehmen' },
												{ label: 'Transkripte bearbeiten', translations: { en: 'Editing transcripts', cs: 'Úprava přepisů' }, slug: 'company-gpt/addons/company-transcribe/transkripte' },
												{ label: 'Sprachausgaben', translations: { en: 'Voiceovers', cs: 'Hlasové výstupy' }, slug: 'company-gpt/addons/company-transcribe/sprachausgaben' },
												{ label: 'Zugriff über den CompanyGPT-Chat', translations: { en: 'Access from the CompanyGPT chat', cs: 'Přístup z chatu CompanyGPT' }, slug: 'company-gpt/addons/company-transcribe/mcp-integration' },
											]
										},
										{
											label: 'companyLEARN',
											translations: { en: 'companyLEARN', cs: 'companyLEARN' },
											badge: { text: { de: 'Neu', en: 'New', cs: 'Nové' }, variant: 'tip' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/companylearn' },
												{ label: 'Die Oberfläche', translations: { en: 'The interface', cs: 'Rozhraní' }, slug: 'company-gpt/addons/companylearn/oberflaeche' },
												{ label: 'Lernen', translations: { en: 'Learning', cs: 'Učení' }, slug: 'company-gpt/addons/companylearn/lernen' },
												{ label: 'Im Chat', translations: { en: 'In the chat', cs: 'V chatu' }, slug: 'company-gpt/addons/companylearn/im-chat' },
												{ label: 'Kurse verwalten', translations: { en: 'Managing courses', cs: 'Správa kurzů' }, slug: 'company-gpt/addons/companylearn/kurse-verwalten' },
												{ label: 'Videos', translations: { en: 'Videos', cs: 'Videa' }, slug: 'company-gpt/addons/companylearn/videos' },
												{ label: 'Externe API', translations: { en: 'External API', cs: 'Externí API' }, slug: 'company-gpt/addons/companylearn/api' },
											]
										},
										{
											label: 'companyM365',
											translations: { en: 'companyM365', cs: 'companyM365' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/companym365' },
												{ label: 'Werkzeuge im Chat', translations: { en: 'Tools in the chat', cs: 'Nástroje v chatu' }, slug: 'company-gpt/addons/companym365/werkzeuge' },
												{ label: 'Office-Add-in', translations: { en: 'Office add-in', cs: 'Doplněk pro Office' }, slug: 'company-gpt/addons/companym365/office-add-in' },
												{ label: 'Word, Excel und PowerPoint', translations: { en: 'Word, Excel and PowerPoint', cs: 'Word, Excel a PowerPoint' }, slug: 'company-gpt/addons/companym365/word-excel-powerpoint' },
												{ label: 'Outlook', translations: { en: 'Outlook', cs: 'Outlook' }, slug: 'company-gpt/addons/companym365/outlook' },
												{ label: 'Mehrere Office-Fenster', translations: { en: 'Multiple Office windows', cs: 'Více oken Office' }, badge: { text: { de: 'Neu', en: 'New', cs: 'Nové' }, variant: 'tip' }, slug: 'company-gpt/addons/companym365/mehrere-fenster' },
												{ label: 'Teams', translations: { en: 'Teams', cs: 'Teams' }, slug: 'company-gpt/addons/companym365/teams' },
												{ label: 'Administration', translations: { en: 'Administration', cs: 'Správa' }, slug: 'company-gpt/addons/companym365/administration' },
											]
										},
										{ label: 'AI Gateway', translations: { en: 'AI Gateway', cs: 'AI Gateway' }, slug: 'company-gpt/addons/ai-gateway' },
										{
											label: 'companyADMIN',
											translations: { en: 'companyADMIN', cs: 'companyADMIN' },
											items: [
												{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'company-gpt/addons/companyadmin' },
												{ label: 'Insights', translations: { en: 'Insights', cs: 'Insights' }, slug: 'company-gpt/addons/companyadmin/insights' },
												{ label: 'Status', translations: { en: 'Status', cs: 'Stav' }, slug: 'company-gpt/addons/companyadmin/status' },
												{ label: 'Protokolle', translations: { en: 'Logs', cs: 'Protokoly' }, slug: 'company-gpt/addons/companyadmin/audit-log' },
												{
													label: 'Zugriff',
													translations: { en: 'Access', cs: 'Přístup' },
													items: [
														{ label: 'Nutzer', translations: { en: 'Users', cs: 'Uživatelé' }, slug: 'company-gpt/addons/companyadmin/nutzer' },
														{ label: 'Rollen', translations: { en: 'Roles', cs: 'Role' }, slug: 'company-gpt/addons/companyadmin/rollen-und-rechte' },
														{ label: 'Gruppen', translations: { en: 'Groups', cs: 'Skupiny' }, slug: 'company-gpt/addons/companyadmin/gruppen' },
														{ label: 'Direkt-Grants', translations: { en: 'Direct grants', cs: 'Přímá oprávnění' }, slug: 'company-gpt/addons/companyadmin/direkte-berechtigungen' },
													]
												},
												{
													label: 'Inhalte',
													translations: { en: 'Content', cs: 'Obsah' },
													items: [
														{ label: 'Inhalte und Sichtbarkeit', translations: { en: 'Content and visibility', cs: 'Obsah a viditelnost' }, slug: 'company-gpt/addons/companyadmin/inhalte' },
														{ label: 'Kategorien', translations: { en: 'Categories', cs: 'Kategorie' }, slug: 'company-gpt/addons/companyadmin/kategorien' },
														{ label: 'Bibliotheks-Sync', translations: { en: 'Library Sync', cs: 'Synchronizace knihovny' }, slug: 'company-gpt/addons/companyadmin/library-sync' },
													]
												},
												{
													label: 'Konfiguration',
													translations: { en: 'Configuration', cs: 'Konfigurace' },
													items: [
														{ label: 'Provider und Modelle', translations: { en: 'Providers and models', cs: 'Poskytovatelé a modely' }, slug: 'company-gpt/addons/companyadmin/modelle' },
														{ label: 'Agent-Fähigkeiten', translations: { en: 'Agent capabilities', cs: 'Schopnosti agentů' }, slug: 'company-gpt/addons/companyadmin/agent-capabilities' },
														{ label: 'Agent-Laufzeit', translations: { en: 'Agent runtime', cs: 'Běhové prostředí agentů' }, slug: 'company-gpt/addons/companyadmin/agent-laufzeit' },
														{ label: 'MCP-Domains', translations: { en: 'MCP domains', cs: 'MCP domény' }, slug: 'company-gpt/addons/companyadmin/mcp-domains' },
														{ label: 'Vorgabe & Anpassungen', translations: { en: 'Baseline & adjustments', cs: 'Výchozí stav a úpravy' }, slug: 'company-gpt/addons/companyadmin/vorgabe-und-anpassungen' },
														{ label: 'Tools', translations: { en: 'Tools', cs: 'Nástroje' }, slug: 'company-gpt/addons/companyadmin/tools' },
														{ label: 'Erweiterungen', translations: { en: 'Extensions', cs: 'Rozšíření' }, slug: 'company-gpt/addons/companyadmin/erweiterungen' },
													]
												},
											]
										},
									]
								},
								{ label: 'Agenten', translations: { en: 'Agents', cs: 'Agenti' }, slug: 'company-gpt/agenten' },
								{ label: 'Skills', translations: { en: 'Skills', cs: 'Skills' }, slug: 'company-gpt/skills' },
								{ label: 'Code Interpreter', translations: { en: 'Code Interpreter', cs: 'Code Interpreter' }, slug: 'company-gpt/code-interpreter' },
								{ label: 'Prompts', translations: { en: 'Prompts', cs: 'Prompty' }, slug: 'company-gpt/prompts' },
								{ label: 'Erinnerungen', translations: { en: 'Memories', cs: 'Paměť' }, slug: 'company-gpt/erinnerungen' },
								{ label: 'KI Einstellungen', translations: { en: 'AI Settings', cs: 'Nastavení AI' }, slug: 'company-gpt/ki-einstellungen' },
								{ label: 'Dateiverarbeitung', translations: { en: 'File processing', cs: 'Zpracování souborů' }, slug: 'company-gpt/dateiverarbeitung' },
								{ label: 'Lesezeichen', translations: { en: 'Bookmarks', cs: 'Záložky' }, slug: 'company-gpt/lesezeichen' },
							]
						},
						{
							label: 'Prompt Engineering',
							translations: { en: 'Prompt Engineering', cs: 'Prompt Engineering' },
							items: [
								{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'prompt-engineering/uebersicht' },
								{ label: 'Bestandteile von Prompts', translations: { en: 'Components of Prompts', cs: 'Součásti promptů' }, slug: 'prompt-engineering/bestandteile-von-prompts' },
								{ label: 'Prompts formatieren', translations: { en: 'Formatting prompts', cs: 'Formátování promptů' }, slug: 'prompt-engineering/prompts-formatieren' },
								{ label: 'Prompts strukturieren', translations: { en: 'Structuring prompts', cs: 'Strukturování promptů' }, slug: 'prompt-engineering/prompts-strukturieren' },
								{
									label: 'Prompttechniken',
									translations: { en: 'Prompt techniques', cs: 'Techniky promptování' },
									items: [
										{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'prompt-engineering/prompt-techniken/uebersicht' },
										{ label: 'Zero-Shot Prompting', translations: { en: 'Zero-shot prompting', cs: 'Zero-shot prompting' }, slug: 'prompt-engineering/prompt-techniken/zero-shot' },
										{ label: 'Few-Shot Prompting', translations: { en: 'Few-shot prompting', cs: 'Few-shot prompting' }, slug: 'prompt-engineering/prompt-techniken/few-shot' },
										{ label: 'Prompt Chaining', translations: { en: 'Prompt chaining', cs: 'Řetězení promptů' }, slug: 'prompt-engineering/prompt-techniken/prompt-chaining' },
										{ label: 'RAG', translations: { en: 'RAG', cs: 'RAG' }, slug: 'prompt-engineering/prompt-techniken/rag' },
										{ label: 'Tool Use', translations: { en: 'Tool use', cs: 'Používání nástrojů' }, slug: 'prompt-engineering/prompt-techniken/tool-use' },
									]
								},
								// { label: 'Best Practices', slug: 'prompt-engineering/best-practices' },
							]
						},
						]
					},
					{
						label: { de: 'API Referenz', en: 'API Reference', cs: 'Reference API' },
						link: 'api',
						icon: 'laptop',
						// The OpenAPI pages generated by starlight-openapi live outside the docs
						// collection and are mapped to this topic via `topics` below.
						id: 'api',
						items: [
							{
								label: 'API',
								translations: { en: 'API', cs: 'API' },
								items: [
									{ label: 'companyRAG API', translations: { en: 'companyRAG API', cs: 'companyRAG API' }, slug: 'api/company-rag-api' },
									{ label: 'Agents API', translations: { en: 'Agents API', cs: 'Agents API' }, slug: 'api/agents-api' },
									{ label: 'AI Gateway API', translations: { en: 'AI Gateway API', cs: 'AI Gateway API' }, slug: 'api/ai-gateway' },
								]
							},
							// Endpoint and schema pages generated from src/openapi/rag-api.yaml.
							...openAPISidebarGroups,
						]
					},
					{
						label: { de: 'Tutorials', en: 'Tutorials', cs: 'Návody' },
						link: 'tutorials',
						icon: 'rocket',
						items: [
							{
								label: 'Addons',
								translations: { en: 'Addons', cs: 'Doplňky' },
								items: [
									{ label: 'CompanyRAG in CompanyGPT nutzen', translations: { en: 'Using CompanyRAG in CompanyGPT', cs: 'Použití CompanyRAG v CompanyGPT' }, slug: 'tutorials/addons/companyrag-in-companygpt' },
									{ label: 'CompanyGPT Hilfe Agent', translations: { en: 'CompanyGPT Help Agent', cs: 'Agent nápovědy CompanyGPT' }, slug: 'tutorials/addons/companygpt-hilfe-agent' },
								]
							},
							{
								label: 'MCP',
								translations: { en: 'MCP', cs: 'MCP' },
								items: [
									{ label: 'Confluence verbinden', translations: { en: 'Connect Confluence', cs: 'Připojení Confluence' }, slug: 'tutorials/mcp/connect_confluence' },
								]
							},
							{
								label: 'Skills',
								translations: { en: 'Skills', cs: 'Skills' },
								items: [
									{ label: 'Übersicht', translations: { en: 'Overview', cs: 'Přehled' }, slug: 'tutorials/skills' },
									// Generated from innFactory-AI/company-ai-stack-skills by scripts/sync-skills.mjs
									...skillsSidebar,
								]
							},
							{
								label: 'Agenten',
								translations: { en: 'Agents', cs: 'Agenti' },
								items: [
									{
										label: 'Marketing & Content',
										translations: { en: 'Marketing & Content', cs: 'Marketing a obsah' },
										items: [
											{ label: 'Bildgenerierung', translations: { en: 'Image Generation', cs: 'Generování obrázků' }, slug: 'tutorials/agenten/bildgenerierung' },
										]
									},
									{
										label: 'Produktivität & Büro',
										translations: { en: 'Productivity & Office', cs: 'Produktivita a kancelář' },
										items: [
											{ label: 'Executive Summarizer', translations: { en: 'Executive Summarizer', cs: 'Executive Summarizer' }, slug: 'tutorials/agenten/executive-summarizer' },
											{ label: 'Meeting Notizen Agent', translations: { en: 'Meeting Notes Agent', cs: 'Agent pro zápisy ze schůzek' }, slug: 'tutorials/agenten/meeting-notizen-agent' },
											{ label: 'Dokumenten Abgleich', translations: { en: 'Document Comparison', cs: 'Porovnání dokumentů' }, slug: 'tutorials/agenten/dokumenten-abgleich' },
											//{ label: 'CompanyGPT Helper', translations: { en: 'CompanyGPT Helper' }, slug: 'tutorials/agenten/companygpt-helper' },
										]
									},
									{
										label: 'Strategie & Analyse',
										translations: { en: 'Strategy & Analysis', cs: 'Strategie a analýza' },
										items: [
											{ label: 'Brainstorming-Facilitator', translations: { en: 'Brainstorming Facilitator', cs: 'Facilitátor brainstormingu' }, slug: 'tutorials/agenten/brainstorming' },
										]
									},
								]
							}

						]
					},
					{
						label: { de: 'Changelog', en: 'Changelog', cs: 'Seznam změn' },
						link: 'changelog/',
						icon: 'list-format',
						// Empty items keeps this a "group" topic so the plugin generates a
						// locale-aware URL (/de/changelog/, /en/changelog/). The `id` lets the
						// custom pages under src/pages associate with this topic (see `topics`
						// below) so they keep the main topics navigation in the sidebar.
						id: 'changelog',
						items: [],
					},
				], {
					// The changelog pages live in src/pages (not the docs collection). Map them
					// to the `changelog` topic so the topics navigation (Documentation / API /
					// Tutorials / Changelog) still renders on them and users can get back to docs.
					topics: {
						changelog: ['/de/changelog', '/de/changelog/**', '/en/changelog', '/en/changelog/**'],
						// starlight-openapi injects its routes without a locale prefix.
						api: ['/api/companyrag', '/api/companyrag/**'],
					},
				})
			],
			// sidebar: [
			// 	{
			// 		label: 'Einführung',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'CompanyGPT', slug: 'intro/company-gpt' },
			// 		],
			// 	},
			// 	{
			// 		label: 'CompanyGPT',
			// 		items: [
			// 			{ label: 'User Interface', slug: 'company-gpt/user-interface' },
			// 			{ label: 'Einstellungen', slug: 'company-gpt/einstellungen' },
			// 			{ label: 'Chat', slug: 'company-gpt/chat' },
			// 			{ label: 'Integrationen', items: [
			// 				{ label: 'Websuche', slug: 'company-gpt/integrationen/websuche' },
			// 				{ label: 'Dateisuche', slug: 'company-gpt/integrationen/dateisuche' },
			// 				{ label: 'Artefakte', slug: 'company-gpt/integrationen/artefakte' },
			// 				{ label: 'MCP Server', slug: 'company-gpt/integrationen/mcp-server' },
			// 			] },
			// 			{ label: 'Agenten', slug: 'company-gpt/agenten' },
			// 			{ label: 'Prompts', slug: 'company-gpt/prompts' },
			// 			{ label: 'Erinnerungen', slug: 'company-gpt/erinnerungen' },
			// 			{ label: 'KI Einstellungen', slug: 'company-gpt/ki-einstellungen' },
			// 			{ label: 'Dateiverarbeitung', slug: 'company-gpt/dateiverarbeitung' },
			// 			{ label: 'Lesezeichen', slug: 'company-gpt/lesezeichen' },
			// 		]
			// 	},
			// 	{
			// 		label: 'Prompt Engineering',
			// 		items: [
			// 			{ label: 'Übersicht', slug: 'prompt-engineering/uebersicht' },
			// 			{ label: 'Bestandteile von Prompts', slug: 'prompt-engineering/bestandteile-von-prompts' },
			// 			{ label: 'Prompts formatieren', slug: 'prompt-engineering/prompts-formatieren' },
			// 			{ label: 'Prompts strukturieren', slug: 'prompt-engineering/prompts-strukturieren' },
			// 			{
			// 				label: 'Prompttechniken', items: [
			// 					{ label: 'Übersicht', slug: 'prompt-engineering/prompt-techniken/uebersicht' },
			// 					{ label: 'Zero-Shot Prompting', slug: 'prompt-engineering/prompt-techniken/zero-shot' },
			// 					{ label: 'Few-Shot Prompting', slug: 'prompt-engineering/prompt-techniken/few-shot' },
			// 					{ label: 'Prompt Chaining', slug: 'prompt-engineering/prompt-techniken/prompt-chaining' },
			// 					{ label: 'RAG', slug: 'prompt-engineering/prompt-techniken/rag' },
			// 					{ label: 'Tool Use', slug: 'prompt-engineering/prompt-techniken/tool-use' },
			// 				]
			// 			},
			// 			// { label: 'Best Practices', slug: 'prompt-engineering/best-practices' },
			// 		]
			// 	},


			// ],
		}),
	],
});
