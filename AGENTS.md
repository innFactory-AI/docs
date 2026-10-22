# docs: agent instructions

Astro + Starlight site for docs.company-gpt.com, bilingual (`src/content/docs/de/` and `en/` mirrors). Authoring
guides live in `.claude/skills/` (`creating-docs-page`, `creating-tutorial`, `converting-skill-packages`, `onboarding`);
read the matching one before adding content. Theme rules are in `README.md` ("Design: companyGPT UI theme").

## Skills are generated: edit them in company-ai-stack-skills

The pages under `src/content/docs/{de,en}/tutorials/skills/` (every skill page plus `index.md`) and their sidebar
groups are **generated** from [innFactory-AI/company-ai-stack-skills](https://github.com/innFactory-AI/company-ai-stack-skills).
That repo is the single source: one folder per skill and locale with `SKILL.md` (the skill, plus optional bundled
files such as `references/`), a page wrapper `<locale>/pages/<category>/<slug>.md` (title, description, sidebar
label, intro), and `catalog.json` (categories, order, index texts). Its `AGENTS.md` has the
writing rules.

- `scripts/sync-skills.mjs` (`npm run skills:sync`) downloads `main` of that repo (or `SKILLS_REF`), validates it and
  writes the pages and `src/generated/skills-sidebar.json`, which `astro.config.mjs` spreads into the Skills group.
  Skills with bundled files also get a zip package under `public/skill-packages/<locale>/<category>/<slug>.zip`,
  linked from the page.
- It runs automatically before `npm run dev`, `npm start` and `npm run build`, and as its own step in
  `.github/workflows/ci.yaml`.
- The output is gitignored. **Never edit or commit generated skill pages here**; changes would be overwritten on the
  next build. Change the skill in company-ai-stack-skills instead.
- To preview skill changes before they are merged: check out the skills repo next to this one and run
  `SKILLS_DIR=../company-ai-stack-skills npm run dev` (or `node scripts/sync-skills.mjs --from <dir>`).
- Every push to `main` of the skills repo sends a `repository_dispatch` (`skills-updated`) here, which rebuilds and
  deploys the site, so docs and skills repo stay in sync without a docs commit.
- `public/scripts/skill-download.js` adds the "Download Skill" button to every page under `/tutorials/skills/`; it
  saves the fenced skill after the `## Skill` heading as `<slug>.md`. Keep that page shape when changing the generator.

Hand-written pages about the Skills *feature* (`company-gpt/skills.md`) are normal docs pages and stay in this repo.

## Conventions

- Every page exists in `de/` and `en/`; register new pages in `astro.config.mjs` with `translations: { en: … }`
  (tab indentation).
- German uses du-form. Product names: companyGPT, companyRAG, companyFILES, companyM365, … (lowercase `company`).
- Verify with `npm run build` before opening a PR. Feature branches and PRs; never push to `main` (pushes to `main`
  deploy to GitHub Pages).
