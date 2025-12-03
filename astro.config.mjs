// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLlmsTxt from 'starlight-llms-txt'


// https://astro.build/config
export default defineConfig({
	outDir: './dist',
	site: 'https://docs.company-gpt.com',
	integrations: [
		starlight({
			
			title: 'CompanyGPT Dokumentation',
			editLink: {
				baseUrl: 'https://github.com/innFactory-AI/docs/edit/main'
			},
			defaultLocale: 'root',
			locales: {
				root: { label: 'Deutsch', lang: 'de' },
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
						label: 'Dokumentation',
						link: '/intro/company-gpt',
						icon: 'open-book',
						items: [{
							label: 'Einführung',
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'CompanyGPT', slug: 'intro/company-gpt' },
							],
						},
						{
							label: 'CompanyGPT',
							items: [
								{ label: 'User Interface', slug: 'company-gpt/user-interface' },
								{ label: 'Einstellungen', slug: 'company-gpt/einstellungen' },
								{ label: 'Chat', slug: 'company-gpt/chat' },
								{
									label: 'Integrationen', items: [
										{ label: 'Websuche', slug: 'company-gpt/integrationen/websuche' },
										{ label: 'Dateisuche', slug: 'company-gpt/integrationen/dateisuche' },
										{ label: 'Artefakte', slug: 'company-gpt/integrationen/artefakte' },
										{ label: 'MCP Server', slug: 'company-gpt/integrationen/mcp-server' },
									]
								},
								{
									label: 'Addons', items: [
										{ label: 'KI Suche', slug: 'company-gpt/addons/ki-suche' },
									]
								},
								{ label: 'Agenten', slug: 'company-gpt/agenten' },
								{ label: 'Prompts', slug: 'company-gpt/prompts' },
								{ label: 'Erinnerungen', slug: 'company-gpt/erinnerungen' },
								{ label: 'KI Einstellungen', slug: 'company-gpt/ki-einstellungen' },
								{ label: 'Dateiverarbeitung', slug: 'company-gpt/dateiverarbeitung' },
								{ label: 'Lesezeichen', slug: 'company-gpt/lesezeichen' },
							]
						},
						{
							label: 'Prompt Engineering',
							items: [
								{ label: 'Übersicht', slug: 'prompt-engineering/uebersicht' },
								{ label: 'Bestandteile von Prompts', slug: 'prompt-engineering/bestandteile-von-prompts' },
								{ label: 'Prompts formatieren', slug: 'prompt-engineering/prompts-formatieren' },
								{ label: 'Prompts strukturieren', slug: 'prompt-engineering/prompts-strukturieren' },
								{
									label: 'Prompttechniken', items: [
										{ label: 'Übersicht', slug: 'prompt-engineering/prompt-techniken/uebersicht' },
										{ label: 'Zero-Shot Prompting', slug: 'prompt-engineering/prompt-techniken/zero-shot' },
										{ label: 'Few-Shot Prompting', slug: 'prompt-engineering/prompt-techniken/few-shot' },
										{ label: 'Prompt Chaining', slug: 'prompt-engineering/prompt-techniken/prompt-chaining' },
										{ label: 'RAG', slug: 'prompt-engineering/prompt-techniken/rag' },
										{ label: 'Tool Use', slug: 'prompt-engineering/prompt-techniken/tool-use' },
									]
								},
								// { label: 'Best Practices', slug: 'prompt-engineering/best-practices' },
							]
						},
						]
					},
					{
						label: 'Tutorials',
						link: '/tutorials',
						icon: 'rocket',
						items: [{
							label: 'Agenten erstellen',
							items: [
								{ label: 'Meeting Notizen Agent', slug: 'tutorials/agenten/meeting-notizen-agent' },
							]

						}]
					}
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
