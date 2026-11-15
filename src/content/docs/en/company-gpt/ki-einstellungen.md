---
title: AI Settings
description: Adjust the parameters of the selected model in CompanyGPT, such as instructions, temperature, context tokens, and reasoning effort, and save them as a preset.
---

:::note[New chat interface]
Screenshots and labels on this page show the [new chat interface](/en/company-gpt/neue-chat-oberflaeche/). It is currently available in the demo access and in pilot environments; in other environments, labels and steps may still differ.
:::

Under **Parameters** in the sidebar, you adjust the parameters of the currently selected model, for example specific instructions for the AI or detailed AI parameters. **Save As Preset** stores these settings under a name. Select saved presets in the chat header via **Presets** to use them flexibly in conversations. **Reset** restores the default values. In the panel, the parameters are grouped into the sections **Identity**, **Sampling**, **Limits**, **Reasoning**, **Context**, and **Advanced**.

![Parameters panel with the parameters of a GPT model](ai-settings-en.png)

**Parameters** is only available when a model, not an agent, is selected. Which parameters are shown depends on the selected model. The following overview describes the parameters shown for GPT models.

:::tip[Did you know?]{icon="rocket"}
When you hover your mouse over a settings option, additional information will be displayed.
:::

## Custom Name

Sets a custom name for the AI that is shown in the chat.

## Custom Instructions

This field is used to store specific instructions that control the behavior of the AI during a conversation. It serves to assign the AI a role, style, or specific tasks.

```text
You are a helpful assistant who answers users' questions and makes a joke at the end.
```

## AI parameters

The following parameters allow detailed control of AI behavior and resource usage.

### Max Context Tokens

Defines the maximum number of tokens that can be sent to the model in the context of a request. This parameter controls the amount of data available to the AI for each request. If no value is specified, model-based system defaults are used. Higher values may result in increased costs and potential errors.

### Max Output Tokens

Sets the maximum number of tokens the model is allowed to generate in a chat completion. The total number of input tokens and generated response tokens is limited by the maximum context length of the model. Exceeding the maximum context tokens by this value can lead to errors.

### Temperature

This parameter influences the creativity and randomness of AI responses.
*   **Higher values:** Lead to more creative and random results.
*   **Lower values:** Lead to more deterministic and less creative responses.
It is recommended to adjust either the temperature *or* the top P value, not both at the same time. Values above 1 are generally not recommended.

### Top P

The top P parameter controls the model's selection of tokens based on their cumulative probability. The model selects tokens from the most probable downward until the sum of their probabilities reaches the specified Top P value. This influences the diversity of possible response tokens.

### Frequency Penalty

A value between -2.0 and 2.0. Positive values reduce the likelihood that the model will repeat tokens that have already been used frequently. This encourages the generation of new and more diverse formulations in the text.

### Presence Penalty

A value between -2.0 and 2.0. Positive values penalize the use of tokens that already appear in the text so far. This increases the model's tendency to address new topics or diversify information.

### Stop Sequences

Up to four definable character strings that, when encountered, cause the API to stop generating further tokens. This allows precise control of the AI's response endings.

### Resend Files

If this option is enabled, all files previously attached to the chat are resent to the model with each new message.
**Note:** This can significantly increase the cost of a request due to the increased number of tokens and lead to errors with many attachments.

### Image Detail

Determines the resolution for image recognition requests to the model:
*   **Low:** Cheaper and faster, but offers less detail.
*   **High:** More detailed and accurate, but more expensive.
*   **Auto:** Automatically selects between “Low” and “High” based on the resolution of the uploaded image.

### Web Search

Enables the model's integrated web search function (e.g., via OpenAI). This allows the AI to obtain current information from the internet and thus generate more accurate and up-to-date responses.

### Reasoning Effort

Applies only to models that perform internal reasoning. This parameter limits the computational effort required for logical conclusions.
*   Reducing the reasoning effort results in faster responses and lower token consumption.
*   The **Minimal** setting generates very few reasoning tokens to achieve maximum response speed (time-to-first-token). This is particularly useful for tasks such as coding or strictly following instructions.

Which levels are available depends on the model. For models with reasoning, you can also set the reasoning effort directly in the input bar, see [New chat interface](/en/company-gpt/neue-chat-oberflaeche/#new-input-bar).

### Use Responses API

Enables the use of the Responses API (instead of Chat Completions), which provides advanced features from OpenAI. Among other things, this API is required to enable reasoning summaries.

### Reasoning Summary

Only available when using the Responses API. This option generates a summary of the model's internal thought process. This can be helpful for troubleshooting and better understanding AI decisions. Selectable options are **Unset**, **Auto**, **Concise**, and **Detailed**.

### Reasoning Mode

Only available when using the Responses API. Sets the reasoning mode: **Standard** or **Pro**. **Pro** enables extended reasoning on supported models.

### Reasoning Context

Only available when using the Responses API. Controls how much prior conversation reasoning the model reuses: **Auto**, **Current turn**, or **All turns**.

### Verbosity

Controls the length and depth of detail of the model's responses.
*   **Lower values:** Result in shorter, more concise responses.
*   **Higher values:** Result in more verbose and detailed responses.
The available options are **None**, **Low**, **Medium**, and **High**.

### Disable Streaming

Disables line-by-line streaming of responses so that the model's complete response is received at once. This option may be useful for certain models (e.g., o3) that require organizational verification for streaming.

### File Token Limit

Defines a maximum token limit for processing attached files. This is used for cost control and efficient resource management during file analysis by the AI.
