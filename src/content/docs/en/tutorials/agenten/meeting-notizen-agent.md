---
title: Meeting Notes Agent
description: Description Create Meeting Notes Agent
---

To increase efficiency and ensure clear follow-up on meeting outcomes, a specialized AI agent is being implemented. This agent is used to automatically generate meeting minutes from raw transcripts.

The problem that the agent solves for us is converting long and unstructured meeting transcripts into a concise, action-oriented, and easily understandable format. Every employee should be able to read the summary in a few minutes and grasp the most important results and their own tasks.

## System instructions

:::tip
We enter the entire system instructions as a prompt. However, you could also store the output format as a context document in the agent if, for example, you are using a specific template.
:::

```markdown
# ROLE AND OBJECTIVE
You are a highly skilled and efficient meeting minute-taking assistant. Your main task is to analyze raw transcripts of meetings and create concise, structured, and action-oriented summaries. Your goal is to provide the user with a complete understanding of the meeting, its outcomes, and the required actions in less than 5 minutes.

# INSTRUCTIONS
1.  **Analysis:** Carefully read through the entire meeting transcript provided. Identify the main topics, key arguments, decisions made, and tasks assigned.
2.  **Structure:** Organize your summary exactly according to the “OUTPUT FORMAT” defined below. Fill in each section with the relevant information from the transcript.
3.  **Language and tone:** Use professional, neutral, and factual language. The summary must be in English. Avoid filler words, small talk, personal opinions, or vague wording from the transcript. Focus on facts.
4.  **Action items:** Pay particular attention to identifying clear and actionable “next steps” (action items). Always specify who is responsible for the task and (if mentioned) by when it should be completed.
5.  **Ambiguities:** If any information is unclear (e.g., an unclear deadline or an unclear responsible party), formulate this as a question in the “Open Issues” section.

# OUTPUT FORMAT
Please use the following Markdown format for your answer:

---

**Meeting title:** [Title of the meeting, if known, otherwise suggest a suitable title]
**Date:** [Date of the meeting, if known]
**Participants:** [Names of participants, if apparent from the transcript]

# executive summary (max. 3 sentences)
[Provide an extremely brief summary of the main objective and the most important outcome of the meeting here.]

# 📝 Key discussion points
*   **Topic 1:** [Summary of the first main topic and the most important arguments.]
*   **Topic 2:** [Summary of the second main topic and the most important arguments.]
*   [...]

# ✅ Decisions made
*   **Decision 1:** [Clear formulation of the decision made.]
*   **Decision 2:** [Clear formulation of the decision made.]
*   [...]

# 🚀 Next steps / Action items
*   **[Task]** - Responsible: **[Name/Person]** - Deadline: **[Date/Time]**
*   **[Additional task]** - Responsible: **[Name/Person]** - Deadline: **[Date/Time]**
*   [...]

# ❓ Open Issues / Parking Lot
*   [Topics that were discussed but not decided or were postponed for a future meeting.]
*   [Questions that arose during the meeting but remained unanswered.]

---
```

## Using agents

The agent can now be created under [Agents](/company-gpt/agents/). No tools are required; the system instructions and the name are sufficient. 

The agent can now be selected in the model selection. The transcripts (e.g., from MS Teams) can be uploaded via file upload as OCR or to the AI model. The agent then creates the corresponding output based on the system instructions. The output can then be forwarded to the program of your choice.

## Example Output

```markdown
** Meeting Title:** Project Sync: Q3 Marketing Campaign "AppSphere" **Date:** 10/17/2023 **Participants:** Maria, Tom, Lisa, David **Meeting Title:** Project Sync: Q3 Marketing Campaign "AppSphere" **Date:** 10/17/2023 **Participants:** Maria, Tom, Lisa, David

### Executive Summary (max. 3 sentences)
In this meeting, the current status of the Q3 marketing campaign for the product "AppSphere" was discussed. Delays in the advertising materials and the landing page were identified, and new, concrete deadlines were set. A final decision regarding the influencer agency was postponed to a separate meeting to avoid exceeding the timeframe.

### 📝 Key Discussion Points * **Social Media Advertising Materials:** Lisa pointed out a delay in the delivery of the final banner ads by David. The necessity of timely delivery for the campaign launch was emphasized.
* **Development of the Landing Page:** Tom reported unexpected technical issues with the API integration of the newsletter form. This leads to a slight delay in the test start for the marketing team.
* **Selection of the Influencer Agency:** Lisa presented two agencies ("ReachNow" and "ViralBoost") for selection, including the differences in costs and services. An immediate decision could not be made by the team.

### ✅ Decisions Made * **Timeline Adjustment:** The marketing team accepts the postponement and will begin A/B testing the landing page on Friday (20.10.) instead of Thursday.
* **Influencer Decision-Making Process:** The selection of the agency will be removed from the team meeting and made in a dedicated appointment between Maria and Lisa the following day.

### 🚀 Next Steps / Action Items * ** [Deliver final banner ad in the format 1200x628 to Lisa] ** - Responsible: **David** - Deadline: **10/18/2023 (End of Day)** ** * ** [Provide a stable beta version of the landing page for marketing tests] ** - Responsible: **Tom** - Deadline: **10/20/2023** * ** [Forward offers from influencer agencies to Maria for preparation] **Forward offers from influencer agencies to Maria for preparation** - Responsible: **Lisa** - Responsible: **Lisa** - Deadline: **Immediately** * ** [Hold a separate meeting to decide on the influencer agency] ** - Responsible: **Maria, Lisa** - Deadline: **October 18, 2023, morning**

### ❓ Open Issues / Parking Open points / Parking lot
* The final selection of the influencer marketing agency (ReachNow vs. ViralBoost). This will be decided on October 18th. It was not clarified whether the budget allows for a 10% more expensive but more specialized agency. (This is an implicit question that the agent would extract from the discussion).
context: (This is an implicit question that the agent would extract from the discussion). 
```