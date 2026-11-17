---
title: Administration
description: For IT and administrators – prerequisites, distributing the desktop app, preconfiguration via Intune on macOS and Windows, policies for Cowork, plugins and Cowork instructions in companyADMIN, and setting up the Windows sandbox.
---

This page is for IT and administrators. It describes what must be in place in the companyGPT environment, how you preconfigure the app on managed devices and how you decide what Cowork may do.

## Prerequisites

- **Desktop app enabled:** innFactory enables the desktop app for your environment. After that, your companyGPT address provides the configuration for the app (`https://<address>/.well-known/companygpt-app.json`), and companyGPT's existing Entra app gets the **Mobile and desktop applications** platform with the redirect URI `http://localhost`.
- **AI Gateway:** Cowork talks to the models through the [AI Gateway](/en/company-gpt/addons/ai-gateway/). The same permissions and budgets apply as in the chat.
- **companyADMIN** (optional): version 3.12.0 or later for Cowork instructions, 3.15.0 or later for plugins, 3.16.0 or later for policies. innFactory enables the **Cowork** and **Plugins** pages in companyADMIN for your environment.

The app signs in as a public client (authorization code with PKCE, without a client secret) to companyGPT's **existing Entra app**. Its tokens are therefore accepted by the AI Gateway, the chat, companyADMIN and the companyGPT apps without further changes. All configuration values are public; none of them is secret.

## Distribution

- **macOS:** `.dmg` (Apple Silicon). Pilot builds aren't signed and notarized yet, so Gatekeeper only lets them run after a confirmation. Signed builds can be distributed through Intune.
- **Windows:** installer (`.exe`, x64), installs per user to `%LOCALAPPDATA%\companyGPT`. Cowork requires [Git for Windows](https://git-scm.com/download/win).

The app installs updates itself and verifies the update's signature when doing so.

## Preconfiguration via Intune

On managed devices, IT supplies the connection values. The user then doesn't have to enter anything, and the fields are locked in the settings. Values from the profile take precedence over local settings.

| Value | Meaning |
|---|---|
| `chatUrl` | Address of companyGPT, e.g. `https://companygpt.firma.de` |
| `gatewayUrl` | Address of the AI Gateway including `/v1` |
| `entra.tenantId`, `entra.clientId`, `entra.scope` | Entra tenant, client ID of the companyGPT app and scope `api://<client-id>/access_user` |
| `allowApiKey` | `false` hides the "Gateway key" option and ignores stored keys |
| `policy` | Policies for Cowork (see below) |

### macOS

**Devices → macOS → Configuration → Create → Templates → Preference file**, domain name `com.innfactory.cgpt-app-pilot`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>chatUrl</key><string>https://companygpt.firma.de</string>
  <key>gatewayUrl</key><string>https://GATEWAY-ADRESSE/v1</string>
  <key>entra</key>
  <dict>
    <key>tenantId</key><string>TENANT-ID</string>
    <key>clientId</key><string>CLIENT-ID</string>
    <key>scope</key><string>api://CLIENT-ID/access_user</string>
  </dict>
  <key>allowApiKey</key><false/>
  <key>policy</key>
  <dict>
    <key>computerUse</key><false/>
  </dict>
</dict>
</plist>
```

### Windows

The app reads the registry key `SOFTWARE\Policies\innFactory\companyAPP`, first under `HKLM` (per device), then under `HKCU` (per user). For each value, `HKLM` wins.

| Value | Type | Meaning |
|---|---|---|
| `chatUrl`, `gatewayUrl` | `REG_SZ` | as above |
| `entraTenantId`, `entraClientId`, `entraScope` | `REG_SZ` | the `entra` block (only all three together) |
| `allowApiKey` | `REG_DWORD` | `0` hides the "Gateway key" option |
| Subkey `Policy` | | the policies below (`REG_DWORD` 0/1 for switches, `REG_MULTI_SZ` for `mcpAllowlist`) |

Without ADMX, the easiest way to distribute the values is as a PowerShell platform script in Intune (**Devices → Scripts and remediations → Platform scripts**, as System, 64-bit):

```powershell
$key = 'HKLM:\SOFTWARE\Policies\innFactory\companyAPP'
New-Item -Path "$key\Policy" -Force | Out-Null
Set-ItemProperty $key chatUrl 'https://companygpt.firma.de'
Set-ItemProperty $key gatewayUrl 'https://GATEWAY-ADRESSE/v1'
Set-ItemProperty $key entraTenantId 'TENANT-ID'
Set-ItemProperty $key entraClientId 'CLIENT-ID'
Set-ItemProperty $key entraScope 'api://CLIENT-ID/access_user'
New-ItemProperty $key allowApiKey -PropertyType DWord -Value 0 -Force | Out-Null
# Policy (optional): turn off own MCP servers and lasting approvals
New-ItemProperty "$key\Policy" ownMcpServers -PropertyType DWord -Value 0 -Force | Out-Null
New-ItemProperty "$key\Policy" lastingApprovals -PropertyType DWord -Value 0 -Force | Out-Null
```

## Policies: what Cowork may do

You can turn off Cowork features in companyADMIN (**Configuration → Cowork → Policies**) and/or through device management. All keys are optional; a missing key keeps the default behavior. For each key: **device management before companyADMIN before the user's own setting.** `false` turns a feature off and locks it in the app ("Managed by your company").

| Key | Type | Effect when turned off or set |
|---|---|---|
| `memory` | Switch | No memory; the setting is locked. |
| `ownMcpServers` | Switch | Own MCP servers aren't loaded; the MCP page is read-only. |
| `ownSkills` | Switch | Own skills aren't loaded; adding and editing are hidden. |
| `computerUse` | Switch | The "Computer" connector isn't available. |
| `browserConnectors` | Switch | The "Chrome" and "Separate browser" connectors aren't available. |
| `web` | Switch | No web search and no reading web pages through the AI Gateway. |
| `autoApprove` | Switch | "Allow all" isn't available, nor is "Allow everything for this task". |
| `lastingApprovals` | Switch | No "Always allow for this task"; earlier lasting approvals no longer count. |
| `mcpAllowlist` | List | Own MCP servers (including those from own plugins) only load if they match an entry: a URL (same scheme, same host and port, path below it), a command name such as `uvx` or `npx`, an absolute path, or `npx:<package>` / `uvx:<package>`. Up to 100 entries. An empty list allows no server. |

You turn off own plugins in companyADMIN in the plugin settings ("Allow own plugins"). Own plugins that are turned on are also subject to `ownSkills`, `ownMcpServers` and `mcpAllowlist`; the company's plugins are not.

The app enforces the policies where it loads features, not just in the interface. It picks up changes made through device management without a restart (at the latest after five minutes or when the window gets focus). It caches the policy from companyADMIN; offline, the last known state applies.

## Cowork instructions

Under **Configuration → Cowork** in companyADMIN, you set up instructions that apply to every Cowork task, for example on tone, storage locations or internal guidelines. The app loads them with the user's Microsoft sign-in.

## The company's plugins

Under **Configuration → Plugins** in companyADMIN, you approve plugins from a Git repository or marketplace, per role or group as **Available**, **On by default** or **Required**. companyADMIN hosts the plugin packages itself. The app only downloads them from there and only installs packages whose checksum matches the approval. Neither Git nor npm is needed on the computers for this.

## Set up the Windows sandbox

On Windows, Cowork's commands run as a separate local account (`srt-sandbox`) with restricted rights and without network access. The setup is needed once per device with administrator rights. Until then, every task shows a yellow shield, and Cowork asks before every command that changes something.

- **By the user:** click the yellow shield in a task and choose **Set up** (one-time UAC prompt).
- **By IT** (e.g. an Intune script, as System or with elevated rights):

```powershell
& "$env:LOCALAPPDATA\companyGPT\pi-agent\extensions\sandbox\vendor\srt-win\x64\srt-win.exe" --srt-win install
```

The step can safely be repeated. Adjust the path if the app is installed in a different location. If the script runs as System, `$env:LOCALAPPDATA` points to the System account's profile. In that case, use the path in the user's profile.

:::note
Inside the Windows sandbox, tools installed per user (e.g. `pip install --user`, nvm) aren't available. The app brings its own Python environment.
:::
