---
title: Prompt Engineer Toolkit
description: Analyze and rewrite AI prompts for better output, create reusable prompt templates for marketing use cases, run A/B tests, and structure end-to-end AI content workflows with versioning. Have your current prompt(s) as text ready, along with examples of desired and undesired outputs — test cases are optional but strongly recommended.
---

Use this skill when you want to improve prompts for AI-assisted marketing, build reusable prompt templates, or optimize AI content workflows — including A/B testing, versioning, and regression safety. Have your current prompt(s) ready as plain text, along with concrete examples of desired and undesired outputs; a set of test cases with realistic inputs greatly improves evaluation quality but is optional.

## Skill

````markdown
---
name: "prompt-engineer-toolkit"
description: "Analyzes and rewrites prompts for better AI output, creates reusable prompt templates for marketing use cases (ad copy, email campaigns, social media), and structures end-to-end AI content workflows. Use when the user wants to improve prompts for AI-assisted marketing, build prompt templates, or optimize AI content workflows. Requires the current prompt(s) as plain text and examples of desired and undesired outputs; test cases with realistic inputs are optional but strongly recommended. Also use when the user mentions 'prompt engineering,' 'improve my prompts,' 'AI writing quality,' 'prompt templates,' or 'AI content workflow.'"
---

# Prompt Engineer Toolkit

## Overview

Use this skill to move prompts from ad-hoc drafts to production assets with repeatable testing, versioning, and regression safety. Apply it when:
- Launching a new LLM feature that needs reliable outputs
- Prompt quality degrades after model or instruction changes
- Multiple team members edit prompts and need history/diffs
- You need evidence-based prompt choice for production rollout
- You want consistent prompt governance across environments

## Core Capabilities

- A/B prompt evaluation against structured test cases
- Quantitative scoring for adherence, relevance, and safety checks
- Prompt version tracking with immutable history and changelog
- Prompt diffs to review behavior-impacting edits
- Reusable prompt templates and selection guidance
- Regression-friendly workflows for model/prompt updates

## Key Workflows

### 1. Run a Prompt A/B Evaluation

Provide both prompt variants and your test cases in this format, and I will evaluate each prompt against every test case, then aggregate the scores:

**Prompt A and Prompt B:** Paste the full text of each prompt variant.

**Test cases:**

```
Test Case ID | Input (realistic production example)       | Must Contain              | Must NOT Contain     | Required Format/Regex
-------------|---------------------------------------------|---------------------------|----------------------|----------------------
TC01         | "Write a subject line for a summer sale..." | "sale", "summer", CTA     | "free!!!", all-caps  | Max 60 characters
TC02         | "Summarize this product for LinkedIn..."    | company name, value prop  | generic filler       | 3 sentences max
...
```

I will score each output per case across four dimensions:
- **Content coverage**: required markers present
- **Safety compliance**: forbidden phrases absent
- **Format compliance**: regex/structure requirements met
- **Length sanity**: output within expected bounds

I will then aggregate scores across all test cases and recommend the winning prompt with evidence.

### 2. Choose Winner With Evidence

After evaluation, I will produce a summary table:

```
Metric                    | Prompt A | Prompt B
--------------------------|----------|----------
Avg content coverage      |   82%    |   94%
Safety violations         |    1     |    0
Format compliance         |   90%    |   95%
Length within bounds      |   85%    |   100%
Overall recommendation    |          |  WINNER
```

The winner is promoted only if it improves the average score **and** keeps violation count at zero.

### 3. Version Prompts

I will maintain a structured version log for your prompts. Provide:

```
Prompt name:
Version number:
Author:
Change note (what changed and why):
Prompt text (full):
```

I will keep the full history and can show a diff between any two versions by comparing them side-by-side and highlighting changed sentences or instructions.

**Version log format:**

```
Name: support_classifier
v1 | alice | 2025-01-10 | Initial version
v2 | bob   | 2025-02-15 | Added tone constraint (professional only)
v3 | alice | 2025-03-01 | Removed ambiguous instruction in step 3
```

### 4. Regression Loop

1. Store the current prompt as the baseline version.
2. Propose your edited prompt candidate.
3. Provide the same test cases used for the baseline evaluation.
4. I will compare scores between baseline and candidate.
5. I will recommend promoting the candidate only if the average score improves and violation count stays at zero.

## Pitfalls & Best Practices

**Avoid these mistakes:**
1. Picking prompts from single-case outputs — use a realistic, edge-case-rich test suite.
2. Changing prompt and model simultaneously — always isolate variables.
3. Missing `must_not_contain` checks in evaluation criteria.
4. Editing prompts without version metadata, author, or change rationale.
5. Model swap without rerunning the baseline A/B suite.

**Before promoting any prompt, confirm:**
- [ ] Task intent is explicit and unambiguous.
- [ ] Output schema/format is explicit.
- [ ] Safety and exclusion constraints are explicit.
- [ ] No contradictory instructions.
- [ ] A/B score improves and violation count stays at zero.

## Evaluation Design

Each test case should define:
- `input`: realistic production-like input
- `expected_contains`: required markers/content
- `forbidden_contains`: disallowed phrases or unsafe content
- `expected_regex`: required structural patterns

## Versioning Policy

- Use semantic prompt identifiers per feature.
- Record author + change note for every revision.
- Never overwrite historical versions.
- Diff before promoting a new prompt to production.

## Rollout Strategy

1. Create baseline prompt version.
2. Propose candidate prompt.
3. Run A/B evaluation against the same test cases.
4. Promote only if the winner improves the average score and keeps violation count at zero.
5. Track post-release feedback and feed new failure cases back into the test suite.
````

Source: [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — MIT License
