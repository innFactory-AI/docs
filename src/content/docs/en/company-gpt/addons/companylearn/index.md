---
title: companyLEARN
description: Learning platform in CompanyGPT with courses, lessons, quizzes, a final exam, assigned mandatory courses and certificates, also usable directly in the chat.
---

companyLEARN is the learning platform in CompanyGPT. Courses consist of chapters with text and video lessons, quizzes and optionally a final exam. You can pick courses from the catalog yourself, or you get mandatory courses with a due date assigned to you, for example for compliance training or onboarding. After finishing a course you download your certificate.

You find companyLEARN under **All apps** and in the Apps panel of the chat. Sign-in uses your existing account. How courses are created and assigned is described in the [admin guide](/en/company-gpt/addons/companylearn/admin/).

## Catalog and assigned courses

Your start page leads with the **courses assigned to you**, each with due date, progress and a button to continue. If the due date has passed and the course is not completed, it shows an **overdue** badge. Due dates run until the end of the day (time zone Europe/Berlin). If several assignments cover the same course, the earliest due date applies.

The **catalog** shows all courses you may enrol in yourself. Assigned courses are marked there. Courses an admin has released only for specific people do not appear in the catalog. They show up once they are assigned to you.

## Lessons

A lesson is a text with images or a video. Below the lesson you may find **attachments** to download, such as PDFs or worksheets.

Next to the lesson, the **outline** shows the whole course: chapters with lessons and quiz, completed steps, locked chapters and the current step. **Previous** and **Next** at the bottom move you along in outline order. Locked steps are skipped. On narrow screens the outline collapses.

A chapter stays locked until the lessons of the previous chapter are done and its quiz is passed.

## Quizzes

A quiz can have these rules:

- **Random questions:** you get a selection from a larger question pool. The selection stays fixed for one attempt.
- **Shuffled answers:** the order of the answer options is shuffled per attempt.
- **Attempt limit:** "Attempt X of Y" shows how many attempts you have left. If all are used up, contact an admin, who can reset them.
- **Waiting time:** after a failed attempt a waiting time may apply. The page shows when you can try again.

After submitting you see for each question whether it was right, which options would have been correct and, if provided, an **explanation**. The correct answers are never visible before you submit.

## Final exam

Some courses have a **final exam** after the last chapter. It unlocks once all chapters are complete and works like a quiz (question pool, attempt limit, waiting time, review with explanations). If a course has a final exam, it only counts as completed once you have passed it. It counts as one more step in your progress.

A course that is already completed stays completed, even if chapters or an exam are added later.

## Completion and certificates

When you finish the last step, the **completion page** opens. It shows the completion date, your quiz and exam results, the certificate download (if the course has one) and what to do next: open assigned courses first, then other courses. You can reach it later from the course as well.

On your start page, **Completed** lists your finished courses. **My certificates** lists all certificates and lets you download them as PDF, **in German or in English**, provided the admin has set up a template for that language.

:::note
The certificate shows the name from your account. If no name is known, the download is refused rather than issuing a certificate without a name. If an admin removed your enrolment, the certificate is no longer available.
:::

## companyLEARN in the chat

You can also use companyLEARN in the chat if the agent or model has the **Learn** tool. Ask, for example, "Which courses are there?" or "How far am I in my courses?". These tools are available:

- **learn_list_courses**: lists the courses you may see, optionally only the ones you are enrolled in.
- **learn_course_overview**: shows chapters, lessons, quiz and final exam of a course with lock and completion state.
- **learn_enroll**: enrols you in a course.
- **learn_my_progress**: shows your progress, assigned courses with due dates and the next step.
- **learn_watch_lesson**: shows a lesson directly in the chat.
- **learn_take_quiz**: shows a quiz in the chat. The result is reported back into the conversation after you submit.
- **learn_open_ui**: opens companyLEARN (start page, catalog or a course) in the chat.

In the chat, lessons show only the content, without the outline. Completing a course shows a compact completion view.
