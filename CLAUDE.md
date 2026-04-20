# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this Obsidian vault.

## Repository Overview

This is an Obsidian vault template using the **Lifecycle System** — a workflow-based personal knowledge management approach where folders represent stages in a note's development, not topic categories.

## Vault Structure

### Workflow Folders

- **Collect/** - Quick capture and initial ideas. Process weekly.
- **Refine/** - Notes being actively developed that need multiple sessions.
- **Library/** - Permanent knowledge notes (completely flat, organized through Catalog MOCs).
- **Daily/** - Daily journal notes only (chronological record).
- **Archive/** - Completed and inactive content.

### Organization & Resources

- **Catalog/** - ALL organization happens here through MOCs and Bases:
  - **Catalog/Projects/** - Project MOCs (active work with end goals)
  - **Catalog/Areas/** - Area MOCs (ongoing responsibilities)
  - **Catalog/Topics/** - Topic MOCs (knowledge domains)
  - **Catalog/Dashboards/** - Bases (automated queries) for dynamic views
- **Resources/** - Templates, attachments, and scripts:
  - **Resources/Templates/** - Note templates
  - **Resources/Attachments/** - Media files
  - **Resources/Scripts/** - Templater user scripts

**Key principle:** NO subfolders except in Catalog and Resources. All Library notes are flat — organized through good titles, links, and MOCs.

## Catalog System: Organization Hub

The Catalog is where ALL organization happens. Instead of topic subfolders in Library, you create organization through MOCs and Bases in the Catalog.

### Project MOCs (Catalog/Projects/)
Active work with end goals and completion criteria. Project MOCs include:
- Status and timeline
- Key deliverables
- Related Library notes
- Key people
- External resources
- Progress updates

Use template: `Resources/Templates/Project MOC Template.md`

### Area MOCs (Catalog/Areas/)
Ongoing responsibilities with no end date. Area MOCs include:
- Purpose and standards to maintain
- Current focus
- Related Library notes
- Key people
- Active projects in this area
- Long-term goals

Use template: `Resources/Templates/Area MOC Template.md`

### Topic MOCs (Catalog/Topics/)
Knowledge domains and subjects. Topic MOCs organize Library notes by theme, independent of which project/area they belong to.
- Overview of the domain
- Core concepts (foundational notes)
- Deep dives (detailed explorations)
- Related topics
- Projects using this knowledge

Use template: `Resources/Templates/Topic MOC Template.md`

### Dashboards (Catalog/Dashboards/)
Bases (automated queries) that gather content dynamically based on filters.

**Existing Bases:**
- `Active Projects.base` - Lists all Project MOCs
- `Areas.base` - Lists all Area MOCs
- `Topics.base` - Lists all Topic MOCs
- `Collect Dashboard.base` - Shows notes in Collect
- `Refine Dashboard.base` - Shows notes in Refine
- `All Library Notes.base` - Shows all Library notes
- `Recent Activity.base` - Shows recently modified files

**Embedding Bases:** Use `![[Catalog/Dashboards/Base Name.base]]` to embed in any note.

**When to create a Base vs MOC:**
- **Base**: Content has structured metadata, changes frequently, benefits from automation
- **MOC**: Needs human curation, strategic context, thoughtful organization, commentary

## Tagging Philosophy: Backlinks Over Tags

**Rule: If a link can do the job, use a link. If a folder can do the job, use a folder. Tags are only for the narrow slice of information that doesn't belong as a note and needs to survive when notes move around.**

Tags are ONLY for **durable metadata** — attributes that need to survive folder transitions. For example, when a Project MOC moves from `Catalog/Projects/` to `Archive/`, its `#catalog/project` tag preserves its type classification. This is the one thing a folder can't tell you after a move.

**NEVER use tags to connect content to topics, areas, or projects.** Use `[[backlinks]]` to Catalog MOCs instead. A Library note about web development should link to `[[Web Development (MOC)]]`, not carry a `#web-dev` tag. These backlinks can appear anywhere — inline in the body, or in a `related` frontmatter property for structured discoverability.

**Approved durable tags:**
- `#catalog/project` - Project MOC type (survives archiving)
- `#catalog/area` - Area MOC type (survives archiving)
- `#catalog/topic` - Topic MOC type (survives archiving)

**Content connections use backlinks:**
- Link to relevant Catalog MOCs naturally in the note body, or use the optional `related` frontmatter property:
  ```yaml
  ---
  related:
    - "[[Web Development (MOC)]]"
    - "[[Launch Website (MOC)]]"
  ---
  ```
- Both approaches create bidirectional connections — use whichever feels natural
- If no relevant Catalog MOC exists, ask the user whether to create a new one or add a subsection to an existing one
- Stray content tags (e.g., `#productivity`, `#documentation`) should be converted to backlinks

## Obsidian Configuration

**Custom property types** (defined in `.obsidian/types.json`):
- `related`: multitext — wiki-links to relevant Catalog MOCs (used on Library/Refine notes)

**Templates:** Located in `Resources/Templates/`
- Daily Note Template - Sections: Focus, Log
- Project MOC Template - For active projects with deliverables (includes `tags: [catalog/project]`)
- Area MOC Template - For ongoing responsibilities (includes `tags: [catalog/area]`)
- Topic MOC Template - For knowledge domains (includes `tags: [catalog/topic]`)

**File Title Updater plugin:** The vault uses the File Title Updater plugin to keep filenames and H1 headings in sync (`syncMode: filename_heading`). Never modify H1 headings directly — rename the file instead, and the H1 will update automatically (and vice versa).

**Daily notes configuration:**
- Folder: `Daily/`
- Template: `Resources/Templates/Daily Note Template`
- Format: `YYYY-MM-DD.md`

**Community plugins:**
- **Templater** - Template engine with scripting support
- **Obsidian Linter** - Markdown formatting on save
- **File Title Updater** - Keeps filenames and H1 headings in sync

## Templater Development Practices

**Prefer custom user scripts over inline template logic:**
- Extract complex logic into reusable scripts in `Resources/Scripts/`
- Keep template files focused on structure and simple variable insertion
- User scripts should be well-documented with JSDoc comments

**Current scripts:**
- `Resources/Scripts/connections.js` - Daily note backward navigation (skips gaps in dates)

## Skills

The vault has project-local skills that automate common workflows:

- **`/sort`** — Processes the Collect/ folder: classifies notes by content, suggests wiki-links, and moves them to appropriate Lifecycle System destinations (Library/, Refine/, Catalog/, etc.). Use during the "Process Collect" step of weekly review.
- **`/format`** — Standardizes note formatting to vault conventions: validates YAML frontmatter, standardizes spacing and heading hierarchy, converts references to wiki-links. Use after sorting or when cleaning up notes.

## Core Principles

1. **Folders = workflow stages** - Collect → Refine → Library → Archive
2. **Flat Library organized through Catalog** - No topic subfolders, all notes together
3. **MOCs provide organization** - Projects/Areas/Topics in Catalog create structure
4. **Backlinks connect related ideas** - Use `[[backlinks]]` to Catalog MOCs, never content tags
5. **Tags only for durable metadata** - Classification that survives folder transitions (`#catalog/project`, etc.)
6. **Bases provide automation** - Leverage structured metadata for dynamic views
7. **Good note titles enable discovery** - With flat Library, titles must be descriptive
8. **Weekly maintenance is essential** - Process Collect, progress Refine, update Catalog

## Weekly Review Workflow

When helping with weekly review:

1. **Process Collect (Collect/):** Run `/sort` to classify and move notes to their Lifecycle System destinations. Follow up with `/format` on newly sorted notes to standardize formatting.

2. **Progress Refine (Refine/):**
   - Check notes in active development
   - Continue developing in-progress notes
   - Move completed notes to Library/

3. **Maintain Catalog:**
   - **Update Project MOCs (Catalog/Projects/):**
     - Add Progress & Updates entry with dated header: `### Latest Update - YYYY-MM-DD`
     - Check off completed deliverables
     - Add newly-finished Library notes to relevant Project MOCs
     - Update project status (active/on-hold/completed)
     - Identify projects ready to archive
   - **Update Area MOCs (Catalog/Areas/):**
     - Link new Library notes to relevant areas
     - Refresh current focus and goals
     - Review ongoing responsibilities
   - **Update Topic MOCs (Catalog/Topics/):**
     - Add new Library notes to topic collections
     - Identify emerging themes or connections

4. **Review Recent Activity:**
   - Check `![[Catalog/Dashboards/Recent Activity.base]]`
   - Ensure notes are linked from MOCs

5. **Archive Completed Work:**
   - Move completed Project MOCs to Archive/
   - Archive Library notes no longer actively needed
   - Keep useful Library notes active even if project is done

## Project vs Area Guidelines

**Project characteristics:**
- Has a clear end goal or deliverable
- Has a completion date or criteria
- Active work happening now
- Location: `Catalog/Projects/` (as MOCs)

**Area characteristics:**
- No end date — it's ongoing
- A standard to maintain
- Recurring attention needed
- Location: `Catalog/Areas/` (as MOCs)

## When Creating New Content

### Daily Notes
- Created automatically in `Daily/` with date-based naming (YYYY-MM-DD)
- Template sections: Focus, Log
- Link to projects, people, and areas liberally

### Quick Captures
- Start in `Collect/` — this is your inbox
- Don't worry about structure initially
- Process weekly into Refine or Library

### Knowledge Notes (for Library/)
- Start in `Collect/` or `Refine/` depending on complexity
- Once complete, move to `Library/`
- Use descriptive titles
- Link to relevant Catalog MOCs (inline or via the `related` frontmatter property)
- Do NOT add content tags — use backlinks instead
- If no Catalog MOC fits, ask user if they want to create a new Topic MOC
- Link from relevant MOCs in Catalog

### Project MOCs
- Create in `Catalog/Projects/`
- Use template: `Resources/Templates/Project MOC Template.md`
- Add `tags: [catalog/project]` in YAML frontmatter (template includes this)
- Include: Status, timeline, deliverables, related Library notes, key people, external resources
- Move to `Archive/` when complete

### Area MOCs
- Create in `Catalog/Areas/`
- Use template: `Resources/Templates/Area MOC Template.md`
- Add `tags: [catalog/area]` in YAML frontmatter (template includes this)
- Include: Purpose, standards, current focus, related Library notes, key people, goals
- Update regularly during weekly review

### Topic MOCs
- Create in `Catalog/Topics/`
- Use template: `Resources/Templates/Topic MOC Template.md`
- Add `tags: [catalog/topic]` in YAML frontmatter (template includes this)
- Include: Overview, core concepts, deep dives, related topics, projects
- Add new Library notes as you build knowledge in this domain

### Bases (Dashboards)
- Save in `Catalog/Dashboards/` with `.base` extension
- Use YAML format with `filters:` and `views:` sections
- Can embed in other notes with `![[Catalog/Dashboards/Base Name.base]]`

## Helping with Note Revision

When asked to revise notes:
1. Check if title clearly conveys main idea
2. Ensure note is atomic (one clear idea)
3. Suggest linking opportunities (backlinks to Catalog MOCs, related Library notes)
4. Verify folder location and check for stray content tags (convert to backlinks)
5. Ensure note links to relevant Catalog MOCs (inline or via `related` property)
6. Improve clarity and readability
7. Preserve the user's voice and writing style
