---
title: Chat
description: CompanyGPT chat interface – prompt input, context indicator, integrations, message options, temporary chats, and sharing and exporting chat histories.
---

The chat is the main interface for communicating with the various language models and agents.

![chat interface](./chat-en.png)

:::caution[Always keep in mind]
All messages and files in the current chat are always part of the context. It is therefore a good idea to use a separate chat for each topic.
:::

## Prompt input

Chat messages or prompts are entered via the input field. Press `Enter` to send a message and `Shift` + `Enter` to add a new line. You can change this behavior in the [Settings](/en/company-gpt/einstellungen/#sending). A message can also consist of attachments only.

![Prompt input](chat-input-en.png)

:::tip
Information on prompt engineering and prompt instructions can be found here: [Prompt Engineering](/en/prompt-engineering/uebersicht/)
:::

A redesigned input bar is currently only available in the demo access and in pilot environments, see [New chat interface](/en/company-gpt/neue-chat-oberflaeche/).

### Messages during a running response

You can keep typing while a response is being generated. When you send, the new message is either included in the running response (**Steer**) or queued for after the response (**Queue**). What `Enter` does by default is set in the [Settings](/en/company-gpt/einstellungen/#sending). The send button also lets you choose for individual messages. If the running response cannot be steered, the message is queued.

### Context indicator

The circle icon in the input field shows how much of the model's context window the current chat uses. When space is running low, the indicator changes color. Hover over it or click it to see the breakdown, for example by **Messages**, **System prompt**, tools, and **Free space**.

In the breakdown, you can also compact the context yourself with **Compact context**: CompanyGPT replaces the conversation so far with a summary. Earlier messages stay visible in the chat but are no longer sent to the model.

## Integrations

In addition to the actual prompt input, the context can be further expanded by:

- [File Search](/en/company-gpt/integrationen/dateisuche/)
- [Web Search](/en/company-gpt/integrationen/websuche/)
- [Skills](/en/company-gpt/skills/)
- [Run Code](/en/company-gpt/code-interpreter/)
- [Artifacts](/en/company-gpt/integrationen/artefakte/)
- [MCP Server](/en/company-gpt/integrationen/mcp-server/)
- [Memory](/en/company-gpt/erinnerungen/#in-chat), if available in your environment

You turn these on or off in the respective chat.

## Messages

The message history develops over time within the conversation between the user and the AI model(s). After each message, the user can use a different model or agent, which of course always receives the entire previous context.

### Message options

Messages in the chat have quick actions:

![Chat message quick actions](chat-quick-actions.png)

- **Regenerate** and **message variants**: Using **Regenerate**, several response variants can be generated, between which you can switch.
- **Read aloud**: Using [Text to speech](/en/company-gpt/einstellungen/#text-to-speech), the message is read aloud with the selected engine.
- **Copy to clipboard**: Copies the entire content of the message to the clipboard.
- **Edit**: Opens an editor in the message, see [Editing messages](#editing-messages).
- Fork icon: Creates a new chat from a specific message with all previous messages. This is helpful if, for example, you want to think in different directions. Choose which messages are included: **Visible messages only**, **Include related branches**, or **Include all to/from here**.
- **Feedback**: Rate a response with thumbs up or down and optionally add a comment.

### Editing messages

**Edit** opens an editor directly in the message:

- **Your own messages**: **Update & rerun** sends the changed message and generates a new response. **Save** keeps the change without generating a new response. If you have not changed anything, **Rerun** generates a new response to the unchanged message, for example after a cancelled response.
- **AI responses**: **Save** keeps your change in the history, for example to correct a response before you continue. **Rerun**, on the other hand, generates a new response and discards your changes.

**Cancel** closes the editor without applying any changes.

### Quoting

To quote specific content, select it in a message and choose **Add to chat**. The selected text is attached to your next message as a quote. You can also collect several passages one after another.

### Code, diagrams, and artifacts

- **Code blocks** can be copied with **Copy code** or downloaded as a file with **Download code**.
- **Mermaid diagrams** are rendered directly as diagrams. Use **Export diagram** to save them with **Export as SVG** or **Export as PNG**.
- [Artifacts](/en/company-gpt/integrationen/artefakte/) open in a separate area next to the chat. Use **Enter full screen** to view an artifact in full screen.

### Tool calls

When a model or agent uses tools, such as web search or an MCP server, CompanyGPT shows the calls in the response. Several consecutive calls are grouped into one row that you can expand; failed calls are counted in it. If you want the details to always be expanded, enable **Auto-expand tool details** in the [Settings](/en/company-gpt/einstellungen/#messages).

If an agent reaches the maximum number of steps for one response, it stops and shows the notice **Reached the tool call limit for this turn**. Everything done up to that point is kept. Choose **Keep going** to let the agent continue from where it stopped, or **Answer now** to have it answer immediately with what it already has.

## Temporary chat

Use the **Temporary Chat** button in the header to start a temporary chat. It does not appear in your chat history and is deleted automatically. While a temporary chat is active, the header shows a corresponding indicator.

If new chats should always start as temporary chats, enable **Temporary Chat by default** in the [Settings](/en/company-gpt/einstellungen/#temporary-chat-by-default).

## Sharing and exporting

Message histories can be shared or exported to different file formats. Both are available via **Export/Share** at the top right of the header; sharing is also available via **Share** in a chat's menu.

![share-and-export](share-and-export-en.png)

### Sharing

**Create a shared link** generates a link to the chat. Your name stays private. Images and files in the chat are only visible to others if you enable **Share files in this conversation**. **Show QR Code** additionally gives you a QR code.

The address of the link stays the same. Edits to messages that are already shared appear right away. Messages you add after sharing only become visible when you select **Update link**. This publishes the current state of the chat and your current file-sharing choice under the same address.

**Manage Access** lets you see and change who can open the link. **Delete Link** removes the share. Chats with an active link are marked in the chat history and on the **Export/Share** icon. An overview of all your shared chats is available in the [Settings](/en/company-gpt/einstellungen/#shared-chats) under **Shared chats**.

:::caution
Shared links can only be opened by people who sign in to the same CompanyGPT environment, even if the link is shared publicly. Without public sharing, they also need read permission, which you grant via **Manage Access**. If your CompanyGPT is only accessible from the company network, this also applies to shared links.
:::

### Export

Message histories can also be exported. This has the advantage that they can be saved as files in different formats. Histories in JSON format can also be [imported](/en/company-gpt/einstellungen/#import-conversations) again.

![export-chat](export-chat-en.png)

To export, choose a **Filename** and the **Type**: Markdown, text, JSON, CSV, or screenshot (PNG).

In addition, depending on the file format, the following settings can be made:

- **Include endpoint options**: The model names are also saved in the information (not for CSV and screenshot).
- **Export all message branches**: If there are branches, they can also be exported (JSON and CSV only).
- **Recursive or sequential?** (JSON only): Display of messages within the JSON object, either as a flat list of messages or as a recursive list with nested messages.
