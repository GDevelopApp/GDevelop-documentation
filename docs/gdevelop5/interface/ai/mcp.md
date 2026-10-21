---
title: Use Claude Code, Cursor, Codex or other AI agents with GDevelop (MCP)
---
# Use your own AI agent with GDevelop (MCP)

If you already work with an AI agent like **Claude Code**, **Cursor**, **VS Code (Copilot)**, **Codex** or **Gemini CLI**, you can connect it to GDevelop. The agent can then explore and edit the game opened in the editor, with the same tools as [GDevelop AI](/gdevelop5/interface/ai/): creating scenes and objects, placing instances, adding behaviors and variables, writing events, running gameplay tests and saving the project.

Every change appears **live in the editor**, as if you made it yourself: you can watch the agent work, check what it did and keep editing alongside it.

This uses **MCP** (the "Model Context Protocol"), a standard way for AI agents to use the tools of other apps.

!!! note

    This is available in the **desktop app** of GDevelop (Windows, macOS and Linux). The agent runs on the same computer as GDevelop.

## Set up an agent

1. Open the **Preferences** of GDevelop (in the **File** menu, or **GDevelop** on macOS), then the **Ask AI** section.
2. Turn on **Let AI agents connect to the editor and edit the opened project**.
3. Click on **Set up**, next to **Connect an AI agent to GDevelop**.
4. Choose your agent: GDevelop shows the command to run, or the configuration to add to the settings of the agent. Click on **Copy the command** (or **Copy the configuration**) and follow the instructions displayed for your agent.

For example, with Claude Code, the command looks like this (run it in a terminal):

```bash
claude mcp add --scope user --transport http gdevelop http://127.0.0.1:52520/mcp --header "Authorization: Bearer <your access key>"
```

Then start your agent (or reload its MCP servers). Ask it something like *"What's in my GDevelop game?"* to check that it's connected.

!!! tip

    If your agent is not listed, choose **Other**: most agents supporting MCP can connect to an "HTTP" (or "streamable HTTP") server, with the address and the authorization header given there.

## Working with an agent

- **Keep GDevelop open** with the project you want to work on. The agent can only work while GDevelop is running.
- **Starting a new game:** if no project is opened, the agent can create one, from one of the GDevelop templates or empty. Like with GDevelop AI, the new project is saved in your cloud projects.
- **The agent works on one window.** If you have several GDevelop windows, the agent uses the one you were using when it connected. To make it use another window, click on that window, then reconnect the agent (for example, with the `/mcp` command in Claude Code).
- **See which agents are connected:** while an agent is working, its name is shown at the top right of the window. Click on it to open the settings of the connection.
- **If you open another project**, the agent is told about it on its next action, before changing anything: confirm with it that it's the project you want to work on.
- **Save your work:** like your own changes, the changes of the agent are kept in the editor until the project is saved. Ask the agent to save, or save the project yourself. For a local project, keep a copy (or use version control) before asking for big changes.

!!! note

    Writing events, and finding assets or extensions, use the GDevelop online services: stay **logged in** to your GDevelop account in the editor. The agent's own AI usage is billed by the provider of the agent (Anthropic, OpenAI, Google...), not by GDevelop.

## Good practices

The advice for [GDevelop AI](/gdevelop5/interface/ai/#good-practices) applies to any agent: be specific, plan before building, and check what the agent does. Also:

- **Start by asking the agent to explore the game.** It reads the scenes, objects and events before changing them, and makes better changes.
- **Ask for gameplay tests.** Agents can write and run [gameplay tests](/gdevelop5/interface/gameplay-tests/) to check that a mechanic really works.
- **Ask the agent to save at the end of each step**, so you can come back to a working version.

## Security

The connection is only possible from programs running on **your computer**, and only with the **access key** shown in the configuration. Anyone with this key can edit the projects opened in GDevelop: don't share it, and don't commit it in a public repository.

If you think the access key was shared by mistake, open the setup window again (**Preferences** > **Ask AI** > **Set up**) and click on **Reset the access key**. The agents set up with the old key are disconnected: set them up again with the new configuration.

To stop agents from connecting, turn off **Let AI agents connect to the editor and edit the opened project**.

## Troubleshooting

- **The agent can't connect:** check that GDevelop is running, and that the option is turned on in the preferences. Then open the setup window: if the configuration shown is not the one of your agent (the access key was reset, or the address changed because another program used it), set up the agent again.
- **"No project is opened in the GDevelop editor":** open the project in the GDevelop window the agent works on.
- **"Not logged in to GDevelop":** log in to your GDevelop account in the editor, then ask the agent to try again.
- **"The server could not start"** (in the preferences): another program uses the connection port. Restart GDevelop, or close the other program.
