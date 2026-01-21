---
title: Settings
description: Overview and configuration of CompanyGPT settings, including personalization, chat options, commands, voice functions, data management, and account settings.
---

The settings can be accessed via the user menu in the lower left corner.

## General

Basic settings can be configured under **General**: 

![general](general.png)

### Design
- Light
- Dark
- System

### Display language

Language in which the user interface is displayed. 

### User messages as Markdown

Controls the display of user messages as Markdown. Markdown is a lightweight syntax for marking up text. AIs also respond in Markdown, and the content is displayed accordingly (e.g., bold). This setting controls whether user messages should also be displayed in this format.

### Automatically scroll to the latest message 

This setting controls whether existing chats should automatically scroll to the bottom to the latest message when they are opened.

### Hide right sidebar 

Permanently hide the right sidebar.

### Archived chats

View archived chats with the option to restore or permanently delete them.

## Chat

### Font size

Select the font size in which chat messages should be displayed.

### Chat direction

- `ltr`: Left to right
- `rtl`: Right to left

### Press Enter to send messages

When enabled, `Enter` is sufficient to send messages. New lines can be added with `Shift + Enter`. When disabled, `Ctrl / Cmd + Enter` must be used to send messages, `Enter` then adds a new line.

### Center chat input on the welcome screen

Chat input is centered or centered at the bottom on the welcome screen.

### Open thought process dropdowns by default

When AI models are thinking, the thought process can be displayed by default or hidden behind a dropdown and opened when needed.

### Always show code when using the code interpreter

Code is displayed by default.

### Parse LaTeX in messages (may affect performance)

When enabled, LaTeX code in messages is rendered as mathematical equations. Disabling this may improve performance if LaTeX rendering is not required.

### Save drafts locally

When enabled, text and attachments entered into the chat form are automatically saved locally as drafts. These drafts are also available when the page is reloaded or when switching to another conversation. Drafts are stored locally on the device and are deleted once the message is sent.

## Commands

Commands are shortcuts that can be executed in the message input field, allowing quick access to models, prompts, and multiple responses.

### @ command for switching models

Toggles the “@” command for switching endpoints, models, presets, etc.

### Command + for multiple responses

Toggles the “+” command to add a multiple response setting.

### Command / for prompt template

Toggles the “/” command to select a prompt template via the keyboard.

## Language

Both speech-to-text (STT) and text-to-speech (TTS) are available in CompanyGPT. Both can be used via the integrated browser engine as well as via LLMs (the LLMs must be configured accordingly).

### Speech-to-text

Can be used to dictate prompt inputs instead of typing. 

Engines:
- `External`: LLM
- `Browser`: Engine of the current browser

Language: The language of the input

Automatically transcribe audio

Automatically send text

### Text to Speech

Can be used to have messages read aloud.

Engines:
- `External`: LLM
- `Browser`: Engine of the current browser

Voice: Available voices, either from the browser engine or AI

## Personalization

### Use saved memories

Allow the AI to access and use your saved memories when responding.

## Data control

### Import conversations 

Conversations can be imported from an exported JSON file, for example, to share them with colleagues.

### Shared links

View conversations shared via links. The links can be accessed again, the source chats can be opened, or the shared links can be deleted.

### User API keys

If AI API keys have been assigned at the user level, they can be revoked here.

### TTS cache memory

The TTS cache memory can be cleared if it is used.

### Delete all chats

Delete all chats.

:::danger[Caution]
Deleting all chats cannot be undone.
:::

## Account

### Show usernames in messages

When enabled, the sender's username will be displayed above each message that is sent. When disabled, “You” will be displayed above the messages.

### Profile picture

Change profile picture

### Delete account

Delete user account

:::danger[Caution]
Deleting your user account cannot be undone.
:::