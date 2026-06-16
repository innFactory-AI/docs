// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLlmsTxt from 'starlight-llms-txt'
import { rehypeEagerFirstImage } from './src/plugins/rehype-eager-first-image.mjs';


// https://astro.build/config
export default defineConfig({
	outDir: './dist',
	site: 'https://docs.company-gpt.com',
	markdown: {
		rehypePlugins: [rehypeEagerFirstImage],
	},
	integrations: [
		starlight({
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/scripts/skill-download.js',
						defer: true,
					},
				},
			],
			title: { de: 'CompanyGPT Dokumentation', en: 'CompanyGPT Documentation' },
			editLink: {
				baseUrl: 'https://github.com/innFactory-AI/docs/edit/main'
			},
			defaultLocale: 'de',
			locales: {
				de: { label: 'Deutsch', lang: 'de' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{ label: 'innFactory AI Consulting GmbH', icon: 'rocket', href: 'https://innfactory.ai' }
			],
			customCss: ['./src/styles/global.css', '@fontsource/sora/400.css', '@fontsource/sora/700.css'],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
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
				starlightLlmsTxt({
					projectName: "innFactory CompanyGPT Documentation",
					description: "Dokumentation und Anleitungen zu CompanyGPT, dem internen ChatGPT für Unternehmen. Prompt Engineering und vieles mehr.",
					details: "innFactory AI Consulting GmbH - https://innfactory.ai",
					optionalLinks: [
						{ label: 'Website', url: 'https://innfactory.ai' },
						{ label: 'CompanyGPT', url: 'https://company-gpt.com' },
					]
				}),
				starlightSidebarTopics([
					{
						label: { de: 'Dokumentation', en: 'Documentation' },
						link: 'intro/company-gpt',
						icon: 'open-book',
						items: [{
							label: 'Einführung',
							translations: { en: 'Introduction' },
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'CompanyGPT', translations: { en: 'CompanyGPT' }, slug: 'intro/company-gpt' },
							],
						},
						{
							label: 'CompanyGPT',
							translations: { en: 'CompanyGPT' },
							items: [
								{ label: 'Modellauswahl', translations: { en: 'Model selection' }, slug: 'company-gpt/modellauswahl' },
								{ label: 'User Interface', translations: { en: 'User Interface' }, slug: 'company-gpt/user-interface' },
								{ label: 'Einstellungen', translations: { en: 'Settings' }, slug: 'company-gpt/einstellungen' },
								{ label: 'Chat', translations: { en: 'Chat' }, slug: 'company-gpt/chat' },
								{ label: 'Projekte', translations: { en: 'Projects' }, slug: 'company-gpt/projekte' },
								{
									label: 'Integrationen',
									translations: { en: 'Integrations' },
									items: [
										{ label: 'Websuche & WebFetch', translations: { en: 'Web Search & WebFetch' }, slug: 'company-gpt/integrationen/websuche' },
										{ label: 'Dateisuche', translations: { en: 'File Search' }, slug: 'company-gpt/integrationen/dateisuche' },
										{ label: 'Artefakte', translations: { en: 'Artifacts' }, slug: 'company-gpt/integrationen/artefakte' },
										{ label: 'MCP Server', translations: { en: 'MCP Servers' }, slug: 'company-gpt/integrationen/mcp-server' },
									]
								},
								{
									label: 'Addons',
									translations: { en: 'Add-ons' },
									items: [
										{ label: 'companyRAG', translations: { en: 'companyRAG' }, slug: 'company-gpt/addons/companyrag' },
										{ label: 'companyFILES', translations: { en: 'companyFILES' }, slug: 'company-gpt/addons/companyfiles' },
										{ label: 'companyDASHBOARD', translations: { en: 'companyDASHBOARD' }, slug: 'company-gpt/addons/company-dashboard' },
										{ label: 'companyTRANSLATE', translations: { en: 'companyTRANSLATE' }, slug: 'company-gpt/addons/company-translate' },
										{ label: 'companyM365', translations: { en: 'companyM365' }, slug: 'company-gpt/addons/companym365' },
									]
								},
								{ label: 'Agenten', translations: { en: 'Agents' }, slug: 'company-gpt/agenten' },
								{ label: 'Skills', translations: { en: 'Skills' }, slug: 'company-gpt/skills' },
								{ label: 'Prompts', translations: { en: 'Prompts' }, slug: 'company-gpt/prompts' },
								{ label: 'Erinnerungen', translations: { en: 'Memories' }, slug: 'company-gpt/erinnerungen' },
								{ label: 'KI Einstellungen', translations: { en: 'AI Settings' }, slug: 'company-gpt/ki-einstellungen' },
								{ label: 'Dateiverarbeitung', translations: { en: 'File processing' }, slug: 'company-gpt/dateiverarbeitung' },
								{ label: 'Lesezeichen', translations: { en: 'Bookmarks' }, slug: 'company-gpt/lesezeichen' },
							]
						},
						{
							label: 'Prompt Engineering',
							translations: { en: 'Prompt Engineering' },
							items: [
								{ label: 'Übersicht', translations: { en: 'Overview' }, slug: 'prompt-engineering/uebersicht' },
								{ label: 'Bestandteile von Prompts', translations: { en: 'Components of Prompts' }, slug: 'prompt-engineering/bestandteile-von-prompts' },
								{ label: 'Prompts formatieren', translations: { en: 'Formatting prompts' }, slug: 'prompt-engineering/prompts-formatieren' },
								{ label: 'Prompts strukturieren', translations: { en: 'Structuring prompts' }, slug: 'prompt-engineering/prompts-strukturieren' },
								{
									label: 'Prompttechniken',
									translations: { en: 'Prompt techniques' },
									items: [
										{ label: 'Übersicht', translations: { en: 'Overview' }, slug: 'prompt-engineering/prompt-techniken/uebersicht' },
										{ label: 'Zero-Shot Prompting', translations: { en: 'Zero-shot prompting' }, slug: 'prompt-engineering/prompt-techniken/zero-shot' },
										{ label: 'Few-Shot Prompting', translations: { en: 'Few-shot prompting' }, slug: 'prompt-engineering/prompt-techniken/few-shot' },
										{ label: 'Prompt Chaining', translations: { en: 'Prompt chaining' }, slug: 'prompt-engineering/prompt-techniken/prompt-chaining' },
										{ label: 'RAG', translations: { en: 'RAG' }, slug: 'prompt-engineering/prompt-techniken/rag' },
										{ label: 'Tool Use', translations: { en: 'Tool use' }, slug: 'prompt-engineering/prompt-techniken/tool-use' },
									]
								},
								// { label: 'Best Practices', slug: 'prompt-engineering/best-practices' },
							]
						},
						]
					},
					{
						label: { de: 'API Referenz', en: 'API Reference' },
						link: 'api',
						icon: 'laptop',
						items: [
							{
								label: 'API',
								translations: { en: 'API' },
								items: [
									{ label: 'companyRAG API', translations: { en: 'companyRAG API' }, slug: 'api/company-rag-api' },
									{ label: 'Agents API', translations: { en: 'Agents API' }, slug: 'api/agents-api' },
								]
							},
						]
					},
					{
						label: { de: 'Tutorials', en: 'Tutorials' },
						link: 'tutorials',
						icon: 'rocket',
						items: [
							{
								label: 'Addons',
								translations: { en: 'Addons' },
								items: [
									{ label: 'CompanyRAG in CompanyGPT nutzen', translations: { en: 'Using CompanyRAG in CompanyGPT' }, slug: 'tutorials/addons/companyrag-in-companygpt' },
								]
							},
							{
								label: 'MCP',
								translations: { en: 'MCP' },
								items: [
									{ label: 'Confluence verbinden', translations: { en: 'Connect Confluence' }, slug: 'tutorials/mcp/connect_confluence' },
								]
							},
							{
								label: 'Skills',
								translations: { en: 'Skills' },
								items: [
									{ label: 'Übersicht', translations: { en: 'Overview' }, slug: 'tutorials/skills' },
									{
										label: 'companyFILES',
										translations: { en: 'companyFILES' },
										items: [
											{ label: 'Charts & Diagramme', translations: { en: 'Charts & Diagrams' }, slug: 'tutorials/skills/files/charts-diagram-skill' },
											{ label: 'Konvertierung', translations: { en: 'Convert' }, slug: 'tutorials/skills/files/convert-skill' },
											{ label: 'Excel', translations: { en: 'Excel' }, slug: 'tutorials/skills/files/excel-skill' },
											{ label: 'Dateiverwaltung', translations: { en: 'File Management' }, slug: 'tutorials/skills/files/file-management-skill' },
											{ label: 'PDF', translations: { en: 'PDF' }, slug: 'tutorials/skills/files/pdf-skill' },
											{ label: 'PowerPoint', translations: { en: 'PowerPoint' }, slug: 'tutorials/skills/files/powerpoint-skill' },
											{ label: 'Einstellungen & UI', translations: { en: 'Settings & UI' }, slug: 'tutorials/skills/files/settings-ui-skill' },
											{ label: 'Vorlagen', translations: { en: 'Templates' }, slug: 'tutorials/skills/files/templates-skill' },
											{ label: 'Word & ODT', translations: { en: 'Word & ODT' }, slug: 'tutorials/skills/files/word-odt-skill' },
										]
									},
									{
										label: 'Customer Success',
										translations: { en: 'Customer Success' },
										items: [
											{ label: 'Onboarding-Plan', translations: { en: 'Onboarding Plan' }, slug: 'tutorials/skills/customer-success/onboarding-plan-skill' },
											{ label: 'QBR-Builder', translations: { en: 'QBR Builder' }, slug: 'tutorials/skills/customer-success/qbr-builder-skill' },
											{ label: 'Kundengesundheit', translations: { en: 'Customer Health' }, slug: 'tutorials/skills/customer-success/customer-health-skill' },
											{ label: 'Eskalations-Brief', translations: { en: 'Escalation Brief' }, slug: 'tutorials/skills/customer-success/escalation-brief-skill' },
											{ label: 'Vertragsverlängerung', translations: { en: 'Renewal Prep' }, slug: 'tutorials/skills/customer-success/renewal-prep-skill' },
											{ label: 'Success-Plan', translations: { en: 'Success Plan' }, slug: 'tutorials/skills/customer-success/success-plan-skill' },
										]
									},
									{
										label: 'Engineering',
										translations: { en: 'Engineering' },
										items: [
											{ label: 'Deployment-Vorbereitung', translations: { en: 'Deployment Prep' }, slug: 'tutorials/skills/engineering/deployment-prep-skill' },
											{ label: 'Code-Review', translations: { en: 'Code Review' }, slug: 'tutorials/skills/engineering/code-review-skill' },
											{ label: 'Standup', translations: { en: 'Standup' }, slug: 'tutorials/skills/engineering/standup-skill' },
											{ label: 'Tech-Debt', translations: { en: 'Tech Debt' }, slug: 'tutorials/skills/engineering/tech-debt-skill' },
											{ label: 'Debugging', translations: { en: 'Debugging' }, slug: 'tutorials/skills/engineering/debugging-skill' },
											{ label: 'Technische Doku', translations: { en: 'Tech Docs' }, slug: 'tutorials/skills/engineering/tech-docs-skill' },
											{ label: 'Architektur-Design', translations: { en: 'Architecture Design' }, slug: 'tutorials/skills/engineering/architecture-design-skill' },
											{ label: 'Postmortem', translations: { en: 'Postmortem' }, slug: 'tutorials/skills/engineering/postmortem-skill' },
											{ label: 'Test-Planung', translations: { en: 'Test Planning' }, slug: 'tutorials/skills/engineering/test-planning-skill' },
										]
									},
									{
										label: 'Human Resources',
										translations: { en: 'Human Resources' },
										items: [
											{ label: 'Interview-Leitfaden', translations: { en: 'Interview Guide' }, slug: 'tutorials/skills/human-resources/interview-guide-skill' },
											{ label: 'Leistungsbeurteilung', translations: { en: 'Performance Review' }, slug: 'tutorials/skills/human-resources/performance-review-skill' },
											{ label: 'Mitarbeiter-Onboarding', translations: { en: 'Employee Onboarding' }, slug: 'tutorials/skills/human-resources/employee-onboarding-skill' },
											{ label: 'Lernplan', translations: { en: 'Learning Plan' }, slug: 'tutorials/skills/human-resources/learning-plan-skill' },
											{ label: 'Vergütung', translations: { en: 'Compensation' }, slug: 'tutorials/skills/human-resources/compensation-skill' },
											{ label: 'Stellenbeschreibung', translations: { en: 'Job Description' }, slug: 'tutorials/skills/human-resources/job-description-skill' },
										]
									},
									{
										label: 'IT Knowledge Management',
										translations: { en: 'IT Knowledge Management' },
										items: [
											{ label: 'Change Request', translations: { en: 'Change Request' }, slug: 'tutorials/skills/it-knowledge-management/change-request-skill' },
											{ label: 'Security-Assessment', translations: { en: 'Security Assessment' }, slug: 'tutorials/skills/it-knowledge-management/security-assessment-skill' },
											{ label: 'Vendor-Assessment', translations: { en: 'Vendor Assessment' }, slug: 'tutorials/skills/it-knowledge-management/vendor-assessment-skill' },
											{ label: 'IT-Doku', translations: { en: 'IT Docs' }, slug: 'tutorials/skills/it-knowledge-management/it-docs-skill' },
											{ label: 'Incident Response', translations: { en: 'Incident Response' }, slug: 'tutorials/skills/it-knowledge-management/incident-response-skill' },
											{ label: 'Knowledge Article', translations: { en: 'Knowledge Article' }, slug: 'tutorials/skills/it-knowledge-management/knowledge-article-skill' },
										]
									},
									{
										label: 'Marketing',
										translations: { en: 'Marketing' },
										items: [
											{ label: 'Content-Entwurf', translations: { en: 'Content Draft' }, slug: 'tutorials/skills/marketing/content-draft-skill' },
											{ label: 'Brand Voice', translations: { en: 'Brand Voice' }, slug: 'tutorials/skills/marketing/brand-voice-skill' },
											{ label: 'Performance-Report', translations: { en: 'Performance Report' }, slug: 'tutorials/skills/marketing/performance-report-skill' },
											{ label: 'Kampagnen-Planung', translations: { en: 'Campaign Planning' }, slug: 'tutorials/skills/marketing/campaign-planning-skill' },
											{ label: 'E-Mail-Sequenz', translations: { en: 'Email Sequence' }, slug: 'tutorials/skills/marketing/email-sequence-skill' },
											{ label: 'SEO-Audit', translations: { en: 'SEO Audit' }, slug: 'tutorials/skills/marketing/seo-audit-skill' },
										]
									},
									{
										label: 'Operations',
										translations: { en: 'Operations' },
										items: [
											{ label: 'Change-Management', translations: { en: 'Change Management' }, slug: 'tutorials/skills/operations/change-management-skill' },
											{ label: 'Statusbericht', translations: { en: 'Status Report' }, slug: 'tutorials/skills/operations/status-report-skill' },
											{ label: 'Kapazitätsplanung', translations: { en: 'Capacity Planning' }, slug: 'tutorials/skills/operations/capacity-planning-skill' },
											{ label: 'Prozess-Doku', translations: { en: 'Process Doc' }, slug: 'tutorials/skills/operations/process-doc-skill' },
											{ label: 'Prozessoptimierung', translations: { en: 'Process Optimization' }, slug: 'tutorials/skills/operations/process-optimization-skill' },
											{ label: 'Risikobewertung', translations: { en: 'Risk Assessment' }, slug: 'tutorials/skills/operations/risk-assessment-skill' },
											{ label: 'Runbook', translations: { en: 'Runbook' }, slug: 'tutorials/skills/operations/runbook-skill' },
											{ label: 'Compliance-Tracking', translations: { en: 'Compliance Tracking' }, slug: 'tutorials/skills/operations/compliance-tracking-skill' },
										]
									},
									{
										label: 'Product Management',
										translations: { en: 'Product Management' },
										items: [
											{ label: 'Wettbewerber-Briefing', translations: { en: 'Competitor Brief' }, slug: 'tutorials/skills/product-management/competitor-brief-skill' },
											{ label: 'Sprint-Planung', translations: { en: 'Sprint Planning' }, slug: 'tutorials/skills/product-management/sprint-planning-skill' },
											{ label: 'Stakeholder-Update', translations: { en: 'Stakeholder Update' }, slug: 'tutorials/skills/product-management/stakeholder-update-skill' },
											{ label: 'Research-Synthese', translations: { en: 'Research Synthesis' }, slug: 'tutorials/skills/product-management/research-synthesis-skill' },
											{ label: 'Metriken-Review', translations: { en: 'Metrics Review' }, slug: 'tutorials/skills/product-management/metrics-review-skill' },
											{ label: 'Produkt-Brainstorming', translations: { en: 'Product Brainstorm' }, slug: 'tutorials/skills/product-management/product-brainstorm-skill' },
											{ label: 'Roadmap-Update', translations: { en: 'Roadmap Update' }, slug: 'tutorials/skills/product-management/roadmap-update-skill' },
											{ label: 'Produkt-Spec', translations: { en: 'Product Spec' }, slug: 'tutorials/skills/product-management/product-spec-skill' },
										]
									},
									{
										label: 'Productivity',
										translations: { en: 'Productivity' },
										items: [
											{ label: 'Meeting-Vorbereitung', translations: { en: 'Meeting Prep' }, slug: 'tutorials/skills/productivity/meeting-prep-skill' },
											{ label: 'Wochenrückblick', translations: { en: 'Weekly Review' }, slug: 'tutorials/skills/productivity/weekly-review-skill' },
											{ label: 'Memory-Management', translations: { en: 'Memory Management' }, slug: 'tutorials/skills/productivity/memory-management-skill' },
										]
									},
									{
										label: 'Sales',
										translations: { en: 'Sales' },
										items: [
											{ label: 'Deal-Strategie', translations: { en: 'Deal Strategy' }, slug: 'tutorials/skills/sales/deal-strategy-skill' },
											{ label: 'Account-Research', translations: { en: 'Account Research' }, slug: 'tutorials/skills/sales/account-research-skill' },
											{ label: 'Forecast', translations: { en: 'Forecast' }, slug: 'tutorials/skills/sales/forecast-skill' },
											{ label: 'Battlecard', translations: { en: 'Battlecard' }, slug: 'tutorials/skills/sales/battlecard-skill' },
											{ label: 'Gesprächsvorbereitung', translations: { en: 'Call Prep' }, slug: 'tutorials/skills/sales/call-prep-skill' },
											{ label: 'Pipeline-Review', translations: { en: 'Pipeline Review' }, slug: 'tutorials/skills/sales/pipeline-review-skill' },
											{ label: 'Sales-Asset', translations: { en: 'Sales Asset' }, slug: 'tutorials/skills/sales/sales-asset-skill' },
											{ label: 'Outreach', translations: { en: 'Outreach' }, slug: 'tutorials/skills/sales/outreach-skill' },
											{ label: 'Gesprächszusammenfassung', translations: { en: 'Call Summary' }, slug: 'tutorials/skills/sales/call-summary-skill' },
										]
									},
								]
							},
							{
								label: 'Agenten',
								translations: { en: 'Agents' },
								items: [
									{
										label: 'Marketing & Content',
										translations: { en: 'Marketing & Content' },
										items: [
											{ label: 'Bildgenerierung', translations: { en: 'Image Generation' }, slug: 'tutorials/agenten/bildgenerierung' },
										]
									},
									{
										label: 'Produktivität & Büro',
										translations: { en: 'Productivity & Office' },
										items: [
											{ label: 'Executive Summarizer', translations: { en: 'Executive Summarizer' }, slug: 'tutorials/agenten/executive-summarizer' },
											{ label: 'Meeting Notizen Agent', translations: { en: 'Meeting Notes Agent' }, slug: 'tutorials/agenten/meeting-notizen-agent' },
											{ label: 'Dokumenten Abgleich', translations: { en: 'Document Comparison' }, slug: 'tutorials/agenten/dokumenten-abgleich' },
											//{ label: 'CompanyGPT Helper', translations: { en: 'CompanyGPT Helper' }, slug: 'tutorials/agenten/companygpt-helper' },
										]
									},
									{
										label: 'Strategie & Analyse',
										translations: { en: 'Strategy & Analysis' },
										items: [
											{ label: 'Brainstorming-Facilitator', translations: { en: 'Brainstorming Facilitator' }, slug: 'tutorials/agenten/brainstorming' },
										]
									},
								]
							}

						]
					},
					{
						label: { de: 'Changelog', en: 'Changelog' },
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
