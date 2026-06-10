import { CHANGELOG_TAGS } from '../../content.config';

export type ChangelogTag = (typeof CHANGELOG_TAGS)[number];

// Hue per product / add-on, reusing the admonition hues already defined in global.css.
// Pills are rendered as hsl(<hue> <sat> <light>) so they adapt to light/dark via the
// `.changelog-tag` rules in global.css.
export const TAG_HUE: Record<ChangelogTag, number> = {
	CompanyGPT: 180, // brand cyan
	companyRAG: 101, // green
	companyFILES: 234, // blue
	companyDASHBOARD: 281, // purple
	companyTRANSLATE: 41, // orange
	MCP: 200,
	Skills: 320,
	Agents: 260,
	API: 0,
};

type Locale = 'de' | 'en';

const STRINGS = {
	de: {
		title: 'Changelog',
		search: 'Suchen',
		readMore: 'Mehr erfahren',
		allTags: 'Alle',
		onThisPage: 'Auf dieser Seite',
		back: 'Zurück zum Changelog',
		share: 'Teilen',
		copyLink: 'Link kopieren',
		copied: 'Kopiert!',
		empty: 'Keine Einträge gefunden.',
	},
	en: {
		title: 'Changelog',
		search: 'Search',
		readMore: 'Read more',
		allTags: 'All',
		onThisPage: 'On this page',
		back: 'Back to Changelog',
		share: 'Share',
		copyLink: 'Copy link',
		copied: 'Copied!',
		empty: 'No entries found.',
	},
} as const;

export function t(locale: Locale) {
	return STRINGS[locale] ?? STRINGS.en;
}

export function formatDate(date: Date, locale: Locale): string {
	return new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}
