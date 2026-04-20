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
3. Install community plugins when prompted (Templater, Linter, File Title Updater)
4. Start capturing notes in `Collect/`
5. Read `Library/Obsidian - Lifecycle System.md` for the full system guide

## Claude Code Integration

This vault includes a `CLAUDE.md` and skills for use with [Claude Code](https://claude.ai/code):

- **`/sort`** — Processes the Collect folder: classifies notes and moves them to appropriate destinations
- **`/format`** — Standardizes note formatting to vault conventions

## Key Principles

1. Folders = workflow stages, not categories
2. Flat Library organized through Catalog MOCs
3. Backlinks connect ideas (never content tags)
4. Tags only for durable metadata (`#catalog/project`, `#catalog/area`, `#catalog/topic`)
5. Weekly review keeps the system healthy

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — Use freely, just give credit.
