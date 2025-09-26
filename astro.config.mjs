// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	outDir: './dist',
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
			customCss: ['./src/styles/global.css'],
			logo: {
				src: './src/assets/logo.svg',
				alt: 'innFactory AI Dokumentation',

			},
			tagline: 'Dokumentation und Anleitungen zu CompanyGPT, dem internen ChatGPT für Unternehmen. Prompt Engineering und vieles mehr.',
			favicon: './src/assets/favicon-32x32.png',
			lastUpdated: true,
			titleDelimiter: '|',
			markdown: {
				headingLinks: true,
			},
			description: 'Dokumentation und Anleitungen zu CompanyGPT, dem internen ChatGPT für Unternehmen. Prompt Engineering und vieles mehr.',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
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
					]
				},
				{
					label: 'Prompt Engineering',
					items: [
						{ label: 'Übersicht', slug: 'prompt-engineering/uebersicht' },
						{ label: 'Prompts formatieren', slug: 'prompt-engineering/prompts-formatieren' },
						{ label: 'Prompts strukturieren', slug: 'prompt-engineering/prompts-strukturieren' },
						{
							label: 'Prompttechniken', items: [
								{ label: 'Zero-Shot Prompting', slug: 'prompt-engineering/prompt-techniken/zero-shot' },
								{ label: 'Few-Shot Prompting', slug: 'prompt-engineering/prompt-techniken/few-shot' },
								{ label: 'Prompt Chaining', slug: 'prompt-engineering/prompt-techniken/prompt-chaining' },
							]
						},
						// { label: 'Best Practices', slug: 'prompt-engineering/best-practices' },
					]
				},


			],
		}),
	],
});
