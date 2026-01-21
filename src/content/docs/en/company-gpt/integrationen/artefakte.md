---
title: Artifacts
description: Artifacts in CompanyGPT enable the AI model to create and execute code, generate diagrams, and display components, with options for shadcn/ui and custom prompts.
---

Artifacts enable the AI model in CompanyGPT to create code and execute/display it. For example, diagrams can be generated, but code components can also be generated and displayed.

Enables the use of code artifacts for this agent. By default, additional special instructions for using artifacts are added unless “Custom Prompt Mode” is enabled.

**Include instructions for shadcn/ui components**: When enabled, instructions for using shadcn/ui components are included. shadcn/ui is a collection of reusable components created with Radix UI and Tailwind CSS. Note: These are extensive instructions that you should only enable if it is important to you to inform the AI model about the correct imports and components. For more information about these components, see: https://ui.shadcn.com/

**Custom prompt mode for artifacts**: When enabled, the default system prompt for artifacts is not included. All instructions for generating artifacts must be provided manually in this mode.

Example:
```
If content is to be presented as an artifact, the following formatting must be used:
 
:::artifact{identifier=“unique-identifier” type="mime-type" title="Artifact Title"}
```
Content here
```
:::
 
Use one of the following options for the “type” attribute:
- “text/html” for HTML content
- “application/vnd.mermaid” for Mermaid diagrams
- “application/vnd.react” for React components
- “image/svg+xml” for SVG images
```