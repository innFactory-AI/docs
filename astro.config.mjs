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
			// head: [
			// 	{
			// 		tag: 'script',
			// 		attrs: {
			// 			src: '/src/analytics.js',
			// 			async: true,
			// 		},
			// 	}
			// ],			
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
								{
									label: 'Integrationen',
									translations: { en: 'Integrations' },
									items: [
										{ label: 'Websuche', translations: { en: 'Web Search' }, slug: 'company-gpt/integrationen/websuche' },
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
										{ label: 'companyFILES', translations: { en: 'companyFILES' }, slug: 'company-gpt/addons/fileforge' },
										{ label: 'companyDASHBOARD', translations: { en: 'companyDASHBOARD' }, slug: 'company-gpt/addons/company-dashboard' },
										{ label: 'companyTRANSLATE', translations: { en: 'companyTRANSLATE' }, slug: 'company-gpt/addons/company-translate' },
									]
								},
								{ label: 'Agenten', translations: { en: 'Agents' }, slug: 'company-gpt/agenten' },
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
						label: { de: 'Tutorials', en: 'Tutorials' },
						link: 'tutorials',
						icon: 'rocket',
						items: [
						{
							label: 'Marketing & Content',
							translations: { en: 'Marketing & Content' },
							items: [
								{ label: 'Copywriting-Experte', translations: { en: 'Copywriting Expert' }, slug: 'tutorials/agenten/copywriting' },
								{ label: 'Content-Stratege', translations: { en: 'Content Strategist' }, slug: 'tutorials/agenten/content-strategy' },
								{ label: 'Copy-Editor', translations: { en: 'Copy Editor' }, slug: 'tutorials/agenten/copy-editing' },
								{ label: 'Social-Media-Content-Ersteller', translations: { en: 'Social Content Creator' }, slug: 'tutorials/agenten/social-content' },

								{ label: 'E-Mail-Sequenz-Designer', translations: { en: 'Email Sequence Designer' }, slug: 'tutorials/agenten/email-sequence' },
								{ label: 'Cold-E-Mail-Verfasser', translations: { en: 'Cold Email Writer' }, slug: 'tutorials/agenten/cold-email' },
								{ label: 'Bildgenerierung', translations: { en: 'Image Generation' }, slug: 'tutorials/agenten/bildgenerierung' },
							]
						},
						{
							label: 'Vertrieb & Wachstum',
							translations: { en: 'Sales & Growth' },
							items: [
								{ label: 'Sales-Enablement-Assistent', translations: { en: 'Sales Enablement Assistant' }, slug: 'tutorials/agenten/sales-enablement' },
								{ label: 'Launch-Stratege', translations: { en: 'Launch Strategist' }, slug: 'tutorials/agenten/launch-strategy' },
								{ label: 'Preisstratege', translations: { en: 'Pricing Strategist' }, slug: 'tutorials/agenten/pricing-strategy' },
	
								{ label: 'A/B-Test-Planer', translations: { en: 'A/B Test Planner' }, slug: 'tutorials/agenten/ab-test-setup' },
								{ label: 'Conversion-Rate-Optimierer', translations: { en: 'Conversion Rate Optimizer' }, slug: 'tutorials/agenten/page-cro' },
	
							]
						},
						{
							label: 'Produktivität & Büro',
							translations: { en: 'Productivity & Office' },
							items: [
								{ label: 'Executive Summarizer', translations: { en: 'Executive Summarizer' }, slug: 'tutorials/agenten/executive-summarizer' },
								{ label: 'Meeting Notizen Agent', translations: { en: 'Meeting Notes Agent' }, slug: 'tutorials/agenten/meeting-notizen-agent' },
								{ label: 'Meeting-Insights-Analysator', translations: { en: 'Meeting Insights Analyzer' }, slug: 'tutorials/agenten/meeting-insights-analyzer' },
								{ label: 'Authentic Message Composer', translations: { en: 'Authentic Message Composer' }, slug: 'tutorials/agenten/authentic-message-composer' },
								{ label: 'Dokumenten Abgleich', translations: { en: 'Document Comparison' }, slug: 'tutorials/agenten/dokumenten-abgleich' },
								{ label: 'Confluence Architect', translations: { en: 'Confluence Architect' }, slug: 'tutorials/agenten/confluence-architect' },
								{ label: 'Text Translator', translations: { en: 'Text Translator' }, slug: 'tutorials/agenten/text-translator' },
								{ label: 'Jargon Killer', translations: { en: 'Jargon Killer' }, slug: 'tutorials/agenten/jargon-killer' },
							]
						},
						{
							label: 'Strategie & Analyse',
							translations: { en: 'Strategy & Analysis' },
							items: [
								{ label: '80/20 Analyst', translations: { en: '80/20 Analyst' }, slug: 'tutorials/agenten/8020-analyst' },
								{ label: 'Brainstorming-Facilitator', translations: { en: 'Brainstorming Facilitator' }, slug: 'tutorials/agenten/brainstorming' },
	
								{ label: 'Fake News Checker', translations: { en: 'Fake News Checker' }, slug: 'tutorials/agenten/fake-news-checker' },
								{ label: 'Direct Technical Analyst', translations: { en: 'Direct Technical Analyst' }, slug: 'tutorials/agenten/direct-technical-analyst' },
								{ label: 'RFP Assistant', translations: { en: 'RFP Assistant' }, slug: 'tutorials/agenten/rfp-assistant' },
							]
						},
						{
							label: 'Technik & Automatisierung',
							translations: { en: 'Tech & Automation' },
							items: [
								{ label: 'Code Janitor', translations: { en: 'Code Janitor' }, slug: 'tutorials/agenten/code-janitor' },
								{ label: 'Rechner Agent', translations: { en: 'Calculator Agent' }, slug: 'tutorials/agenten/rechner-agent' },
								{ label: 'n8n Workflow Architect', translations: { en: 'n8n Workflow Architect' }, slug: 'tutorials/agenten/n8n-workflow-architect' },
								{ label: 'Runbook Navigator', translations: { en: 'Runbook Navigator' }, slug: 'tutorials/agenten/runbook-navigator' },
							]
						},
						{
							label: 'Coaching & Simulation',
							translations: { en: 'Coaching & Simulation' },
							items: [
								{ label: 'Socratic Coach', translations: { en: 'Socratic Coach' }, slug: 'tutorials/agenten/socratic-coach' },
								{ label: 'Tough Customer Simulator', translations: { en: 'Tough Customer Simulator' }, slug: 'tutorials/agenten/tough-customer-simulator' },
							]
						},
						{
							label: 'Addons nutzen',
							translations: { en: 'Using add-ons' },
							items: [
								{ label: 'CompanyRAG in CompanyGPT nutzen', translations: { en: 'Using CompanyRAG in CompanyGPT' }, slug: 'tutorials/addons/companyrag-in-companygpt' },
								{ label: 'Upload zu CompanyRAG über n8n', translations: { en: 'Upload to CompanyRAG via n8n' }, slug: 'tutorials/addons/upload-companyrag-n8n' },
							]
						},
					]
					},
				])
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
