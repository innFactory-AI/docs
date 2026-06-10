---
description: Generate a changelog roundup entry from recent git history across the product repos
argument-hint: "[time window e.g. '2 weeks'] [optional: repo names]"
allowed-tools: Bash(gh:*), Bash(git:*), Bash(npx astro sync:*), Read, Write, Edit, Glob, Grep
---

You are generating a **changelog entry** for this docs site from the recent git history of the innFactory product repos.

Relevant Repositories: 
- CompanyGPT: https://github.com/innFactory/companyGPT
- Librechat: https://github.com/danny-avila/LibreChat
- CompanyRAG: https://github.com/innFactory/companyRAG
- CompanyTranslate: https://github.com/innFactory/companytranslate
- CompanyDashboard: https://github.com/innFactory/companyDashboard

Background information: We provide services for customer and deploy CompanyGPT in their Azrue Tennants, based on Librechat. The companyGPT repo has all terraform deployments and shows what customers have. there it is not important what each customer has, but what is provided for all. usually the important part will be librechat updates. 

The other services are our addons and have many updates usually. 

it is important to check what was rolled out in companygpt globally and then match it against the changes in the addon repos and librechat. there should never be something tennant specific, or mentioning of tennants, but always on a global level. so only commits that have no scope like `fix: ...` or `feat: ...` are for all tennants. 

If a new LibreChat Version is rolled out, check what changes are included or happened there and mention them, if they are user facing and useful. 


## Arguments
`$ARGUMENTS` may contain a time window (e.g. "last 2 weeks", "since 2026-05-27") and/or specific repo names. Defaults if not given:
- **Time window:** last 2 weeks from today.
- **Repos:** `innFactory/companyRAG`, `innFactory/companyFILES`, and more. If none provided, check all. 

## Step 1 — Gather history
Use `gh` to pull commits in the window for each repo. Compute the `since` date from today minus the window.
```
gh api "repos/innFactory/<repo>/commits?since=<ISO8601>&per_page=100" \
  --jq '.[] | "\(.sha[0:8]) | \(.commit.author.date[0:10]) | \(.commit.message | split("\n")[0])"'
```
If a repo returns 404, tell the user the repo name is wrong and ask before guessing.

For commits that look like meaningful features/fixes, inspect the changed files to judge whether they are user-facing:
```
gh api repos/innFactory/<repo>/commits/<sha> \
  --jq '"[\(.sha[0:8])] \(.commit.message | split("\n")[0])\nFiles: \([.files[].filename] | join(", "))"'
```
Heuristics for **user-facing & useful** (include): new UI pages/components, new sources/integrations, new capabilities a user interacts with, visible quality improvements, generated-document features. **Exclude**: pure refactors, test-only changes, CI/version bumps, infra/storage backends, auth/SSO plumbing, internal security/ACL fixes, i18n-only tweaks, dependency bumps — unless the user asks to include them.

## Step 2 — Learn the current format (do not assume)
- Read `src/content.config.ts` for the `changelog` collection schema and the valid `tags` enum. Tags are **case-sensitive** (currently: `CompanyGPT`, `companyRAG`, `companyFILES`, `companyDASHBOARD`, `companyTRANSLATE`, `MCP`, `Skills`, `Agents`, `API` — but re-read in case it changed).
- Read one or two existing entries under `src/content/changelog/en/` and `src/content/changelog/de/` to match tone and structure.

## Step 3 — Write the entry
Create a matching **en + de pair** with the **same slug** (kebab-case filename):
- `src/content/changelog/en/<slug>.md`
- `src/content/changelog/de/<slug>.md`

Required frontmatter: `title`, `excerpt`, `date` (YYYY-MM-DD, today), `author.name: innFactory Team`, `lang` (`en`/`de`), and `tags` (one per product covered). Body: a one-line intro, then a `##` section per product with bold-led bullets describing each highlight in user-facing terms (what the user can now do — not the commit message). The German file is a faithful translation with identical structure. Only link to docs/tutorial pages if you can verify the slug exists; otherwise omit links.

Unless the user asks for one entry per product, write a **single roundup entry** tagged with all covered products.

### Format

```markdown
# Some nice Headline what changed

## ✨ New Features

- **Team Workspaces**: Create separate workspaces for different 
  projects. Invite team members and keep everything organized.

- **Keyboard Shortcuts**: Press ? to see all available shortcuts. 
  Navigate faster without touching your mouse.

## 🔧 Improvements

- **Faster Sync**: Files now sync 2x faster across devices
- **Better Search**: Search now includes file contents, not just titles

## 🐛 Fixes

- Fixed issue where large images wouldn't upload
- Resolved timezone confusion in scheduled posts
- Corrected notification badge count
```

## Step 4 — Validate
Run `npx astro sync` and confirm it completes with no schema errors (Astro fails on invalid frontmatter). Report the created file paths and a short summary of what you included and what you deliberately left out (and why).
