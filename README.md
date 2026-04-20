# Obsidian Lifecycle

A workflow-based Obsidian vault starter where folders represent stages in a note's development, not topic categories.

## The Lifecycle System

Instead of organizing notes by topic (which leads to endless folder debates), this system moves notes through workflow stages:

```
Collect → Refine → Library → Archive
```

- **Collect/** — Quick capture inbox. Process weekly.
- **Refine/** — Notes needing multiple sessions of development.
- **Library/** — Permanent knowledge notes (flat, no subfolders).
- **Archive/** — Completed and inactive content.

Organization happens through **Catalog MOCs** (Maps of Content) and **Bases** (automated queries), not folder hierarchies.

## Catalog System

All organization lives in `Catalog/`:

- **Projects/** — Active work with end goals (MOCs)
- **Areas/** — Ongoing responsibilities (MOCs)
- **Topics/** — Knowledge domains (MOCs)
- **Dashboards/** — Dynamic views powered by Bases

## Getting Started

1. Clone or download this vault
2. Open the folder in Obsidian
3. When prompted about Restricted Mode, click **"Turn on community plugins"**
4. Go to **Settings → Community plugins → Browse**, search for **Templater**, then click **Install** and **Enable**
5. Restart Obsidian — Templater configuration is pre-shipped, no setup needed
6. Start capturing notes in `Collect/`
7. Read [`Library/Obsidian - Lifecycle System.md`](Library/Obsidian%20-%20Lifecycle%20System.md) for the full system guide

## Plugins

**[Templater](https://github.com/SilentVoid13/Templater)** is the only required community plugin. It powers the Daily Note template, which includes a custom script (`Resources/Scripts/connections.js`) that automatically links each daily note to the previous one — even when there are gaps (weekends, holidays, missed days). This is something Obsidian's built-in daily notes can't do.

All other automation (markdown formatting, note organization) is handled by Claude Code skills — no additional Obsidian plugins needed.

## Claude Code Integration

This vault includes a `CLAUDE.md` and skills for use with [Claude Code](https://claude.ai/code):

- **`/sort`** — Processes the Collect folder: classifies notes and moves them to appropriate destinations
- **`/format`** — Standardizes note formatting to vault conventions

### Recommended Skills

- **[Obsidian CLI Skill](https://github.com/pablo-mano/Obsidian-CLI-skill)** — Manage your vault from the terminal using Obsidian's built-in CLI (v1.12+). Useful for file operations, search, and plugin management without leaving Claude Code.

## Key Principles

1. Folders = workflow stages, not categories
2. Flat Library organized through Catalog MOCs
3. Backlinks connect ideas (never content tags)
4. Tags only for durable metadata (`#catalog/project`, `#catalog/area`, `#catalog/topic`)
5. Weekly review keeps the system healthy

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — Use freely, just give credit.
