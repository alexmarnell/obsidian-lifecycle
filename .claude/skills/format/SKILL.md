---
name: format
description: This skill should be used when user asks to "format this note", "standardize this note", "fix formatting", or "apply vault conventions"
version: 3.0.0
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Format Skill

## Purpose

Standardize Obsidian note formatting according to vault conventions documented in CLAUDE.md.

## When to Use

- User asks to format a specific note
- User requests formatting standardization across multiple notes
- During weekly review to ensure consistency
- After creating new notes that need structure validation
- When notes have malformed YAML frontmatter or inconsistent structure

## Vault Context

**CRITICAL:** Always read `CLAUDE.md` first to understand:
- Lifecycle System workflow and folder organization
- Catalog organization (Projects/Areas/Topics as MOCs)
- YAML frontmatter schemas (defined in `.obsidian/types.json`)
- Template structures for different note types
- Daily note structure with sections
- Project and Area MOC requirements
- Flat Library structure
- Tagging philosophy (backlinks over tags, durable tags only)
- `related` property convention for Library notes

## File Title Updater Plugin

The vault uses the **File Title Updater** plugin (`syncMode: "filename_heading"`), which keeps the H1 heading and filename in sync automatically. Because of this:

- **Never modify H1 headings** — any change to the H1 will trigger a filename rename (and vice versa)
- **Never add wiki-links to H1 titles** (e.g., don't convert `# 2026-02-05` to `# [[2026-02-05]]`)
- If a note is missing an H1, the plugin will handle it — don't add one manually
- Focus formatting efforts on H2+ headings and body content only

## Note Type Detection

Identify note type by examining **folder location** as primary signal and **tags** as secondary:

1. **Daily Note:** Location is `Daily/` OR filename matches `YYYY-MM-DD.md` pattern
2. **Project MOC:** Location is `Catalog/Projects/` OR has `tags: [catalog/project]`
3. **Area MOC:** Location is `Catalog/Areas/` OR has `tags: [catalog/area]`
4. **Topic MOC:** Location is `Catalog/Topics/` OR has `tags: [catalog/topic]`
5. **Library Note:** Location is `Library/`
6. **In Development:** Location is `Refine/`
7. **Collect:** Location is `Collect/` (type undetermined, apply general rules only)

## Formatting Rules

### 1. YAML Frontmatter Validation

**Array Syntax:**
```yaml
# Empty array
related: []

# Array with items
related:
  - "[[Observability (MOC)]]"
  - "[[API Design (MOC)]]"

# Tags array
tags:
  - catalog/project
```

**Date Format:**
```yaml
created: 2026-02-05  # ISO format YYYY-MM-DD
```

**Common Fields by Type:**

**Project MOC:**
```yaml
---
tags:
  - catalog/project
status: active
---
```

**Area MOC:**
```yaml
---
tags:
  - catalog/area
---
```

**Topic MOC:**
```yaml
---
tags:
  - catalog/topic
---
```

**Library Note:**
```yaml
---
related:
  - "[[Topic Name (MOC)]]"
  - "[[Area Name (MOC)]]"
---
```

**Daily Note:**
```yaml
---
# Daily notes typically don't have frontmatter
---
```

### 2. Durable Tag Validation

MOCs must have the correct durable classification tag in YAML frontmatter. If missing, add it:

- **Project MOC** (in `Catalog/Projects/`): must have `catalog/project` in tags
- **Area MOC** (in `Catalog/Areas/`): must have `catalog/area` in tags
- **Topic MOC** (in `Catalog/Topics/`): must have `catalog/topic` in tags

**Examples:**

```yaml
# Before (Project MOC missing tag)
---
status: active
---

# After
---
tags:
  - catalog/project
status: active
---
```

```yaml
# Before (Topic MOC with no frontmatter)
---
---

# After
---
tags:
  - catalog/topic
---
```

### 3. Stray Content Tag Detection

Library notes should only contain durable tags. Any non-durable tags (anything that is NOT `catalog/project`, `catalog/area`, or `catalog/topic`) are stray content tags and should be flagged.

**Approved durable tags:**
- `catalog/project`, `catalog/area`, `catalog/topic`

**When stray tags are found:**
- Remove them from frontmatter
- If a matching Catalog MOC exists, suggest adding a backlink (either inline or via the `related` property)
- If no matching MOC exists, note it in the report and suggest creating a Topic MOC

### 4. Backlink Suggestions for Library Notes

If a Library note has no backlinks to any Catalog MOCs (neither inline nor via a `related` property), suggest relevant MOCs the note could link to. This is a suggestion, not a hard requirement — the goal is discoverability, not compliance.

The `related` frontmatter property is one way to add these links:
```yaml
---
related:
  - "[[Observability (MOC)]]"
---
```

But inline links in the body (`...as described in [[Observability (MOC)]]...`) are equally valid.

### 5. Structure by Note Type

#### Daily Note Structure

**Required sections (in order):**
1. `# YYYY-MM-DD` (H1 title — managed by File Title Updater plugin, do not modify)
2. `## Focus`
3. `## Log`
4. `## Connections`

**Template reference:** `Resources/Templates/Daily Note Template.md`

#### Project MOC Structure

**Expected sections (typical for Project MOCs):**
- Status/Timeline
- Goals/Deliverables
- Background/Context
- Related Notes (links to Library notes)
- Key People
- External Resources (Google Docs, Jira, etc.)

**No strict emoji requirements** - professional documentation style.

#### Area MOC Structure

**Expected sections (typical for Area MOCs):**
- Purpose
- Standards to Maintain
- Current Focus
- Related Notes (links to Library notes)
- Key People
- Active Projects (links to Project MOCs)
- Long-term Goals

**No strict emoji requirements** - ongoing responsibility documentation.

#### Topic MOC Structure

**Expected sections (typical for Topic MOCs):**
- Overview
- Core Concepts (foundational Library notes)
- Deep Dives (detailed Library notes)
- Related Topics (links to other Topic MOCs)
- Projects Using This Knowledge (links to Project MOCs)

**Purpose:** Organize Library notes by knowledge domain.

#### Library Note Structure

**Expected format:**
- Clear, descriptive title
- Links to relevant Catalog MOCs (inline or via optional `related` property)
- Content focused on permanent knowledge/reference
- Minimal structure requirements (depends on content)
- Should be linked from at least one Topic MOC
- No stray content tags (only durable tags allowed)

**No strict formatting** - content-dependent.

### 6. Link Standardization

**Project/Area/Topic MOC References:**
Ensure references to MOCs use wiki-links:
```markdown
# Before
Working on the website redesign project

# After
Working on the [[Website Redesign (MOC)]] project
```

**Library Note References:**
Link to relevant Library notes:
```markdown
# Before
See the API documentation for details

# After
See [[API Implementation Details]] for details
```

**Important:** Only convert to wiki-links if:
1. The referenced note exists in the vault
2. The reference is clearly to a known project, area, topic, or library note

### 7. Typography & Spacing

**Blank Lines:**
- One blank line before headings
- One blank line after headings
- One blank line between distinct content blocks

**List Indentation:**
- Use 2 spaces for nested list items
- Consistent bullet style within a note (prefer `-` for unordered)

**YAML Indentation:**
- Use 2 spaces for YAML nesting
- Arrays use proper YAML syntax (see examples above)

**Heading Hierarchy:**
- H1 (`#`) for note title (typically just the filename)
- H2 (`##`) for major sections
- H3 (`###`) for subsections
- Maintain logical hierarchy (don't skip levels)

**Examples:**

```markdown
# Correct spacing

## Section Heading

Content here with proper spacing.

- List item 1
- List item 2
  - Nested item (2 spaces)

Another paragraph after blank line.

## Next Section

More content.
```

```markdown
# Incorrect spacing
##Section Heading
Content immediately after heading with no spacing.
- List item 1
- List item 2
   - Nested item (3 spaces - inconsistent)
Another paragraph with no blank line.
##Next Section
```

## Workflow

### Single Note Formatting

1. **Read the note:**
   - Get full content
   - Note the file path for context

2. **Detect note type:**
   - Check file location in vault structure (Catalog/Projects, Catalog/Areas, Catalog/Topics, Library, Refine, Collect, Daily)
   - Check tags as secondary signal (`catalog/project`, `catalog/area`, `catalog/topic`)
   - If filename matches YYYY-MM-DD pattern, treat as Daily Note

3. **Load reference template (if applicable):**
   - Daily Note: `Resources/Templates/Daily Note Template.md`
   - Project MOC: `Resources/Templates/Project MOC Template.md`
   - Area MOC: `Resources/Templates/Area MOC Template.md`
   - Topic MOC: `Resources/Templates/Topic MOC Template.md`

4. **Analyze formatting issues:**
   - YAML frontmatter problems (missing fields, wrong syntax)
   - Missing durable classification tags on MOCs
   - Stray content tags on Library notes
   - Library notes with no backlinks to any Catalog MOC
   - Missing or misordered sections
   - Bare references that should be wiki-links
   - Spacing and indentation inconsistencies
   - Heading hierarchy issues

5. **Apply standardization:**
   - Fix YAML frontmatter (preserve all content, fix structure)
   - Add missing durable classification tags to MOCs
   - Remove stray content tags, suggest backlinks to matching MOCs
   - Add missing section headers (for Daily notes)
   - Convert Project/Area/Topic MOC references to wiki-links
   - Convert Library note references to wiki-links
   - Standardize spacing (blank lines around headings, consistent indentation)
   - Fix heading hierarchy

6. **Post-format suggestions:**
   - If note is in Collect: Suggest moving to Refine or Library
   - If note is in Refine: Encourage continued development
   - If note is in Library: Suggest linking to relevant Catalog MOCs if none found
   - If note is MOC: Ensure proper structure, linking, and durable tag

7. **Preserve content:**
   - NEVER delete user content
   - NEVER change the meaning or substance of content
   - Only fix structure, formatting, and links
   - Keep original wording intact

8. **Report changes:**
   - List formatting issues found
   - Describe corrections applied
   - Note any ambiguous cases that need user review
   - Provide workflow suggestions

### Multiple Note Formatting

1. **Get list of files:**
   - If user specifies files, use those
   - If user says "format collect", use `Collect/*.md`
   - If user says "format project MOCs", use `Catalog/Projects/*.md`
   - If user says "format library", use `Library/*.md`

2. **Process each file:**
   - Follow single note workflow above
   - Track all changes per file

3. **Generate summary report:**
   - Files processed count
   - Changes by category (YAML fixes, durable tags added, stray tags removed, wiki-links added, spacing corrected, etc.)
   - Any files with issues needing user attention

## Output Format

### Single Note Report

```markdown
## Formatting Report: [Note Title]

**Note Type Detected:** [Daily Note / Project MOC / Area MOC / Topic MOC / Library Note / In Development (Refine) / Collect]

**Issues Found:**
- [ ] YAML frontmatter: [specific issues]
- [ ] Durable tags: [missing classification tags on MOCs]
- [ ] Stray tags: [non-durable tags found]
- [ ] MOC linking: [Library note not linked to any Catalog MOC]
- [ ] Structure: [missing sections, wrong order]
- [ ] Links: [bare references that should be wiki-links]
- [ ] Typography: [spacing, indentation problems]
- [ ] Headings: [hierarchy issues]

**Corrections Applied:**
1. Fixed YAML frontmatter: [details]
2. Added durable classification tag: [which one]
3. Removed stray content tags: [list]
4. Suggested MOC backlinks: [list]
5. Added missing section headers: [which ones]
6. Converted to wiki-links: [list of conversions]
7. Standardized spacing: [description]
8. Fixed heading hierarchy: [changes]

**Content Preserved:** All user content intact

**Workflow Suggestions:**
- [suggestions based on note location and status]

**Manual Review Needed:** [any ambiguous cases or recommendations]
```

### Multiple Notes Report

```markdown
## Batch Formatting Report

**Files Processed:** [count]

**Changes by Category:**
- YAML frontmatter fixes: [count] files
- Durable tags added: [count] files
- Stray tags removed: [count] files
- Wiki-links added: [count] conversions across [count] files
- Spacing standardized: [count] files
- Heading hierarchy fixed: [count] files
- Section headers added: [count] files

**Files by Type:**
- Daily notes: [count]
- Project MOCs: [count]
- Area MOCs: [count]
- Topic MOCs: [count]
- Library notes: [count]
- In Development (Refine): [count]
- Collect: [count]

**Detailed Changes:**
[List each file with bullet points of changes]

**Issues Requiring Attention:**
[Any files with ambiguous cases or problems]
```

## Safety Features

### Content Preservation
- Never delete user-written content
- Only modify structure and formatting
- Keep all substance and meaning intact

### Validation Before Changes
- Verify referenced notes exist in the vault before creating wiki-links
- Check for filename conflicts if renaming suggested
- Validate YAML syntax before writing

### Error Handling
- If YAML is severely malformed, report to user instead of guessing
- If note type is ambiguous, apply general formatting rules only
- If wiki-link target doesn't exist, leave as bare text and note in report

### Dry-Run Support
If user requests preview, show proposed changes without applying:
```markdown
## Formatting Preview: [Note Title]

**Current YAML:**
[show current]

**Proposed YAML:**
[show proposed]

**Structure Changes:**
- Will add: [sections]
- Will reorder: [sections]

**Link Changes:**
- Will convert: [list]

Type "apply" to make changes or "cancel" to abort.
```

## Examples

### Example 1: Daily Note Formatting

**Before:**
```markdown
# 2026-02-05
## Focus
- Work on migration
## Notes
Met with the team about the project.
```

**After:**
```markdown
# 2026-02-05

## Focus

- [ ] Work on migration

## Log

Met with the team about the [[Website Redesign (MOC)]] project.

## Connections

- **Previous:** [[2026-02-04]]
```

**Changes Applied:**
1. Added missing sections (Log, Connections)
2. Renamed "Notes" to "Log" to match template
3. Converted checkbox format for tasks
4. Added wiki-link for project reference
5. Added proper spacing throughout
6. H1 title left as-is (managed by File Title Updater plugin)

### Example 2: Project MOC — Adding Durable Tag

**Before:**
```markdown
---
status: active
---

# Website Redesign

We're redesigning the marketing website. The design team is leading this.

## Background

Started in late 2025.
```

**After:**
```markdown
---
tags:
  - catalog/project
status: active
---

# Website Redesign

We're redesigning the marketing website. The design team is leading this. See [[Design System Guidelines]] for technical details.

## Background

Started in late 2025.
```

**Changes Applied:**
1. Added `catalog/project` durable tag to YAML frontmatter
2. Added wiki-link to Library note
3. H1 title left as-is (managed by File Title Updater plugin)

### Example 3: Library Note — Stray Tags and Missing Related

**Before:**
```markdown
---
tags:
  - observability
  - monitoring
---

# Distributed Tracing Best Practices

**Related:** [[Observability (MOC)]]

Key patterns for implementing distributed tracing...
```

**After:**
```markdown
---
related:
  - "[[Observability (MOC)]]"
  - "[[Monitoring (MOC)]]"
---

# Distributed Tracing Best Practices

Key patterns for implementing distributed tracing...
```

**Changes Applied:**
1. Removed stray content tags (`observability`, `monitoring`)
2. Added `related` property with backlinks to matching MOCs
3. Standardized spacing

## Edge Cases & Considerations

### Mixed Content in Collect
For notes in `Collect/` with unclear type:
- Apply general formatting only (spacing, headings)
- Don't enforce specific structure
- Note in report: "Note type unclear - consider running `/sort` to classify and move to proper folder"

### Notes in Refine
For notes in `Refine/` that are in development:
- Apply general formatting
- Preserve work-in-progress structure
- Suggest: "Continue developing - move to Library when complete"

### Existing Wiki-Links
If wiki-links already exist but target doesn't exist:
- Leave as-is
- Note in report: "Broken wiki-link detected: [[Target]]"

### Legacy Format Migration
If old notes use different conventions:
- Gradually migrate to new format
- Remove stray content tags, suggest backlinks to MOCs
- Preserve all content
- Note significant structural changes in report

### Stray Tag Conversion Ambiguity
When a stray tag doesn't clearly map to an existing MOC:
- Note it in the report as needing manual review
- Suggest potential MOC names the user could create
- Do not invent MOC links that don't exist

## Integration with Weekly Review

During weekly review workflow:

1. **After `/sort`** - Format newly sorted notes to match destination conventions
2. **MOC cleanup** - Ensure consistent formatting and durable tags in Project/Area/Topic MOCs
3. **Library organization** - Verify Library notes link to Catalog MOCs and have no stray content tags
4. **Refine progress** - Format notes in Refine as they're being developed
5. **Daily note review** - Check recent daily notes for formatting consistency

## Tips for Users

- Run `/format` after creating new notes from scratch
- Use `/format` on Collect notes after running `/sort`
- Format new MOCs after creation to ensure proper structure and durable tags
- Apply formatting to daily notes at end of day
- Format Library notes to clean up stray tags and check for MOC links
- Batch format entire folders during monthly maintenance
- Add "(MOC)" suffix to MOC titles for clarity

## Limitations

- Cannot fix severely corrupted YAML (will report and skip)
- Cannot guess missing required information (will note in report)
- Cannot determine if note should be MOC or Library content (will suggest based on heuristics)
- Cannot automatically update Topic MOCs to link Library notes (only suggests)
- Cannot verify MOC targets exist without scanning the vault (will note unverified links)
- Won't modify notes in `Archive/` unless explicitly requested (preserve historical format)

## Version History

- **3.0.0** - Folder-based detection, durable tag validation, stray tag detection, backlinks-over-tags philosophy
- **2.0.0** - Added Lifecycle System support: MOCs (Project/Area/Topic), Library notes, Refine workflow
- **1.0.0** - Initial implementation with Daily Note, Project, and Area formatting
