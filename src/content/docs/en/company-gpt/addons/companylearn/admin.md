---
title: companyLEARN for admins
description: Create courses with chapters, lessons, quizzes and a final exam, publish them, assign them to a person, group or everyone, maintain certificate templates and review learning progress.
---

This page is for people with the `ext:learn:admin` permission. How learners use companyLEARN is described in the [overview](/en/company-gpt/addons/companylearn/).

## Creating courses

A course consists of **chapters**. A chapter contains **lessons** (text in Markdown or a video) and optionally a **quiz**. Chapters and lessons can be reordered with up/down.

- **Text lessons:** next to the Markdown editor a live preview shows the result. You upload images (PNG, JPEG, WebP, GIF) at the cursor position. External image URLs are not loaded for security reasons but shown as a link.
- **Video lessons:** you upload the video file. Playback is protected and supports seeking.
- **Attachments:** once a lesson is saved, you attach files (PDF, Word, Excel, PowerPoint, TXT, CSV, ZIP, PNG, JPEG), and can remove and reorder them. Learners download them below the lesson. If you delete a lesson, its attachments and images are deleted too, unless they are used elsewhere.

### Quiz settings

In the quiz editor you define questions with answer options and can add an **explanation** (Markdown) per question. Further settings:

- Shuffle answer options (on/off)
- "N random questions out of M": a fixed selection is drawn per attempt and scored on exactly that set.
- Attempt limit (empty = unlimited)
- Waiting time in minutes after a failed attempt (empty = none)

Existing quizzes behave as before (no shuffling, all questions, unlimited attempts, no explanation).

If someone has used up all attempts of a quiz, reset them with **Reset attempts** in the person view of the overview. Earlier attempts stay in the history, marked as reset. Only later attempts count toward the limit.

### Final exam

In the course editor, **Abschlussprüfung** (final exam) lets you add an optional quiz for the whole course, with the same settings as a chapter quiz. It unlocks when all chapters are complete. With an exam, a course counts as completed only after the exam is passed.

:::note
Completions are final. If you later add a chapter, quiz or exam, enrolments that are already completed are not reopened, and their certificates stay valid. Anyone who has not finished yet must complete the new parts.
:::

## Publishing and visibility

A new course is a **draft** that learners cannot see. **Publish** releases it, **Unpublish** takes it out of the offer again.

The **Selbsteinschreibung erlauben** (allow self-enrolment) switch controls visibility:

- **On (default):** the course is in the catalog and anyone may enrol. You can still assign it.
- **Off:** the course is not in the catalog. Only people with an assignment or an existing enrolment see and open it; everyone else gets a "not found" response. Self-enrolment is not possible. Someone removed from an assignment keeps access to their own progress.

Admins always see every course.

## Assignments

In the **Assignments** area you assign a course. You pick the target with one search box for people and groups:

- **One person**
- **An Entra group:** the members are taken over immediately and re-synced automatically every day. New members get the assignment, members who left lose it. Progress and enrolment stay; the course just stops being mandatory and no longer counts as overdue. A button starts the sync on demand.
- **Everyone:** applies to all known learners and to every person on their first visit.

As due date you choose a **fixed date** or **N days after assignment**. The latter suits onboarding, because it counts from each person's own assignment.

For each assignment you see status counts (assigned, in progress, completed, overdue) and the people list with status, due date and progress. You can filter by **overdue** and export the list as **CSV**. Deleting an assignment withdraws it for everyone.

:::note
For groups, all members receive the assignment, including people who never opened companyLEARN. They are marked **noch nie angemeldet** (never signed in) in the list, so the reason for an overdue status is visible right away. Therefore pick groups whose members have access to companyLEARN. For **Everyone**, only people who have already used companyLEARN count, so the figures are limited accordingly.
:::

On systems that use Keycloak instead of Entra, group assignments refer to a group name. The assignment applies as soon as someone signs in with that group. There, only people who have signed in since the assignment are counted.

## Overview

The **Übersicht** (overview) shows KPIs with a trend (7, 30 or 90 days), a course table, course reports with every learner (including "stalled": no activity for more than 14 days), a learner list and a person view with courses, quiz attempts and timeline. Here you enrol and unenrol people and export to CSV. Unenrolling keeps progress and quiz results, only the completion date is removed. The related certificate is then no longer available. Assignments and due dates also appear in the course and person views. Only admins see names and e-mail addresses.

## Certificates

Certificates are generated from **Word templates** (`.docx`). You upload one template per language (German, English), either as the default for all courses or for a single course. Per course you switch the certificate on or off and choose the template (course-specific or default).

The template contains fixed placeholders that are replaced as plain text. Nothing is calculated or executed:

| Placeholder | Content |
|---|---|
| `{name}` | Name of the learner |
| `{course}` | Course title |
| `{completionDate}` | Completion date, formatted in the certificate's language |
| `{certificateId}` | Unique ID used to verify a certificate |

On upload, companyLEARN lists the placeholders it found, rejects unknown ones and warns about missing ones. **Preview** renders a PDF with sample data.

The PDF is generated on the first download per language and stored. A changed template applies to downloads made afterwards. PDFs already generated stay as they are. In the person view you download a person's certificate. Certificates are only available if the operator has set up PDF conversion for the tenant.

## Creating a course from a document in the chat

You can have a whole course created in the chat, for example from a policy or a handbook. Attach the document (or use companyRAG or M365) and ask the model to create a course from it. The model reads the document and creates chapters, text lessons, quizzes with explanations and optionally a final exam through the `learn_admin_create_course` tool. Further admin tools are `learn_admin_list_courses`, `learn_admin_get_course`, `learn_admin_update_course`, `learn_admin_publish`, `learn_admin_report`, `learn_admin_enroll` and `learn_admin_reset_quiz_attempts`. They are available to admins only.

A step-by-step guide with a prompt is provided by the skill [Create a course from a document](/en/tutorials/skills/company-learn/course-authoring-skill/).

:::caution[The course stays a draft]
A course created in the chat is always unpublished. The tool gives you a link to the course editor. Review content and quiz questions, add videos and images (those exist only in the editor) and only then publish the course. A course that is already published cannot be changed through the chat. Unpublish it first or edit it in the editor.
:::
