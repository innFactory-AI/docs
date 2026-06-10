import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Fixed product / add-on tag set used to categorize changelog entries.
export const CHANGELOG_TAGS = [
	'CompanyGPT',
	'companyRAG',
	'companyFILES',
	'companyDASHBOARD',
	'companyTRANSLATE',
	'MCP',
	'Skills',
	'Agents',
	'API',
] as const;

const changelog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		date: z.date(),
		author: z.object({
			name: z.string(),
			avatar: z.string().optional(),
		}),
		tags: z.array(z.enum(CHANGELOG_TAGS)).default([]),
		image: z.string().optional(),
		lang: z.enum(['de', 'en']),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	changelog,
};
