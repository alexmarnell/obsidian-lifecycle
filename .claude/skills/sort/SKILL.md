---
name: sort
description: This skill should be used when user asks to "sort collect", "process collect", "organize notes", "sort inbox" (legacy), or "move notes from collect"
version: 3.0.0
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(mv:*)
---

# Sort Skill

## Purpose

Process notes in the Collect folder by analyzing content, determining appropriate destinations, and relocating files within the vault according to Lifecycle System workflow stages.

## When to Use

- User asks to sort or process Collect folder
- During weekly review workflow
- User wants to organize accumulated notes in Collect
- After bulk note capture sessions
- When Collect has 5+ notes needing classification
- User mentions "sort inbox" (legacy term for Collect)

## Vault Context

**CRITICAL:** Always read `CLAUDE.md` first to understand:
- Lifecycle System workflow (Collect -> Refine -> Library -> Archive)
- Catalog organization (Projects/Areas/Topics as MOCs, Dashboards as Bases)
- Project vs Area distinction criteria
- Flat Library structure (organized through Topic MOCs)
- Weekly review workflow

**Reference the Project vs Area Guidelines in CLAUDE.md:**
- **Projects:** Clear deliverable + deadline + active work -> `Catalog/Projects/` (as MOCs)
- **Areas:** Ongoing responsibility + no end date + recurring attention -> `Catalog/Areas/` (as MOCs)
- **Knowledge:** Reference material -> `Library/` (flat, linked from Topic MOCs)

## Decision Logic

### Classification Decision Tree

```
FOR EACH note in Collect/:

1. CHECK: Does note describe a deliverable, deadline, or specific end goal?
   YES -> CHECK: Is this a MOC organizing a project (not the project content itself)?
       YES -> DESTINATION: Catalog/Projects/ (as MOC)
             ADD: tags: [catalog/project] in YAML frontmatter
             DONE
       NO -> CHECK: Is work actively happening or planned?
           YES -> DESTINATION: Library/ (project content/knowledge)
                 Link from relevant Project MOC in Catalog/Projects/
                 DONE
           NO -> DESTINATION: Archive/ (if completed)
                OR Collect/ (if someday/maybe)
                DONE

2. CHECK: Does note describe ongoing responsibility without end date?
   YES -> CHECK: Is this a MOC organizing an area (not the area content itself)?
       YES -> DESTINATION: Catalog/Areas/ (as MOC)
             ADD: tags: [catalog/area] in YAML frontmatter
             DONE
       NO -> DESTINATION: Library/ (area content/knowledge)
            Link from relevant Area MOC in Catalog/Areas/
            DONE

3. CHECK: Is note a MOC organizing a knowledge domain or topic?
   YES -> DESTINATION: Catalog/Topics/ (as MOC)
         ADD: tags: [catalog/topic] in YAML frontmatter
         DONE

4. CHECK: Is note reference material, documentation, or knowledge?
   YES -> CHECK: Is note complete and ready for permanent reference?
       YES -> DESTINATION: Library/
             SUGGEST: backlinks to relevant Catalog MOCs (inline or via `related` property)
             Link from relevant Topic MOC in Catalog/Topics/
             DONE
       NO -> DESTINATION: Refine/
            REPORT: Needs development before moving to Library
            DONE

5. CHECK: Is note a utility (template, attachment, etc.)?
   YES -> DESTINATION: Resources/
         DONE

6. CHECK: Is note fully developed with clear purpose?
   NO -> CHECK: Does it need significant multi-session development?
       YES -> DESTINATION: Refine/
             DONE
       NO -> DESTINATION: Stay in Collect/
            REPORT: Needs more development
            DONE

7. DEFAULT: If unclear, stay in Collect/
   REPORT: Ambiguous classification - user decision needed
   DONE
```

### Detailed Classification Criteria

#### Project MOC (-> Catalog/Projects/)

**Identifying features:**
- Is a Map of Content (MOC) organizing a project, not the project content itself
- Describes a specific deliverable or outcome at high level
- Has (or implies) a completion date or criteria
- Links to Library notes containing project details/knowledge
- Active work is happening or scheduled
- Uses language like: "migrate to X", "implement Y", "complete Z"
- References deadlines, milestones, or phases

**Examples:**
- "Website Redesign (MOC)" - organizes redesign project
- "API v2 Launch (MOC)" - organizes API launch project
- "Product Strategy 2026 (MOC)" - organizes strategic planning

**Actions:**
- Add `tags: [catalog/project]` to YAML frontmatter
- Ensure sections: Status, Timeline, Deliverables, Related Notes, Key People
- Scan content for Project MOC references -> suggest wiki-links
- Scan content for Library note references -> suggest wiki-links
- Check if completion criteria is clear (note if missing)
- Move to `Catalog/Projects/[Descriptive Project Name] (MOC).md`

**Filename convention:** Descriptive name + " (MOC)" suffix

**Note:** Project *content* and *knowledge* goes to `Library/`, not here. This is only for the organizing MOC.

#### Area MOC (-> Catalog/Areas/)

**Identifying features:**
- Is a Map of Content (MOC) organizing an area, not the area content itself
- Describes ongoing responsibility or domain at high level
- No clear end date or completion criteria
- Requires recurring attention and maintenance
- Links to Library notes containing area details/knowledge
- Uses language like: "managing X", "maintaining Y", "responsible for Z"
- Standards to uphold rather than goals to complete

**Examples:**
- "Career Development (MOC)" - organizes career growth
- "Team Leadership (MOC)" - organizes continuous responsibility
- "Technical Skills (MOC)" - organizes skill development

**Actions:**
- Add `tags: [catalog/area]` to YAML frontmatter
- Ensure sections: Purpose, Standards to Maintain, Current Focus, Related Notes, Key People
- Scan for related projects -> suggest wiki-links to Project MOCs
- Scan for Library note references -> suggest wiki-links
- Move to `Catalog/Areas/[Area Name] (MOC).md`

**Filename convention:** Broad area name + " (MOC)" suffix (e.g., "Team Leadership (MOC)", "Technical Strategy (MOC)")

**Note:** Area *content* and *knowledge* goes to `Library/`, not here. This is only for the organizing MOC.

#### Topic MOC (-> Catalog/Topics/)

**Identifying features:**
- Is a Map of Content (MOC) organizing a knowledge domain
- Collects and links related Library notes by theme
- Provides overview of a subject area
- Not project-specific or area-specific

**Actions:**
- Add `tags: [catalog/topic]` to YAML frontmatter
- Ensure sections: Overview, Core Concepts, Deep Dives, Related Topics, Projects
- Scan for Library note references -> suggest wiki-links
- Move to `Catalog/Topics/[Topic Name] (MOC).md`

**Filename convention:** Topic name + " (MOC)" suffix

#### Knowledge Note (-> Library/)

**Identifying features:**
- Reference material, documentation, or knowledge article
- Technical how-to or process documentation
- Permanent knowledge worth preserving
- Complete enough to be useful as reference
- No action required, just information to reference
- Examples: API docs, runbooks, technical deep-dives, meeting notes (informational)

**Actions:**
- Ensure clear, descriptive title
- Suggest backlinks to relevant Catalog MOCs (inline or via `related` property)
- Identify which Topic MOC(s) should link to this note
- Move to `Library/[Descriptive Title].md`
- Report which Topic MOC(s) should be updated to link to this note

**Metadata example:**
```yaml
---
related:
  - "[[Topic Name (MOC)]]"
  - "[[Project Name (MOC)]]"
---
```

**Filename convention:** Clear, searchable title

**Note:** Library is completely flat - organization happens through Topic MOCs in `Catalog/Topics/`, not subfolders.

#### Utility/Resource (-> Resources/)

**Identifying features:**
- Templates, attachments, or system files
- Not knowledge content, but vault utilities
- Examples: Templates, images, diagrams

**Actions:**
- Move to appropriate subfolder: `Resources/Templates/` or `Resources/Attachments/`
- No metadata required

#### In Development (-> Refine/)

**Identifying features:**
- Note has potential but needs significant development
- Requires multiple sessions to complete
- More than a quick capture, but not yet Library-ready
- Clear enough direction but incomplete content
- Examples: Half-written documentation, research in progress, drafts

**Actions:**
- Move to `Refine/[Working Title].md`
- Report to user: "Needs development - moved to Refine/"
- Suggest next steps for completion

**Filename convention:** Descriptive working title

#### Underdeveloped / Unclear (-> Stay in Collect/)

**Identifying features:**
- Fragmentary notes or incomplete thoughts
- Unclear purpose or next steps
- Needs more context to classify
- Too brief to even move to Refine
- Placeholder notes ("TODO: research X")

**Actions:**
- Do NOT move from Collect
- Report to user with reason and suggestions
- Recommend: "Expand on [specific aspect] to clarify destination"

## Metadata

### YAML Frontmatter by Destination

**Project MOC:**
```yaml
---
tags:
  - catalog/project
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
  - "[[Project Name (MOC)]]"
---
```

### Metadata Rules

- Preserve existing YAML fields (don't overwrite user data)
- Add `tags` field for MOCs if not present
- Add `related` field for Library notes if not present
- If YAML frontmatter doesn't exist, create it
- Merge new tags with existing tags (don't replace)

## Wiki-Link Suggestions

Scan content for linkable entities:

1. **Project MOC references:**
   - Check if Project MOC exists in `Catalog/Projects/`
   - Suggest wiki-link: "website redesign" -> `[[Website Redesign (MOC)]]`

2. **Area MOC references:**
   - Check if Area MOC exists in `Catalog/Areas/`
   - Suggest wiki-link: "team leadership" -> `[[Team Leadership (MOC)]]`

3. **Topic MOC references:**
   - Check if Topic MOC exists in `Catalog/Topics/`
   - Suggest wiki-link: "data modeling" -> `[[Data Modeling (MOC)]]`

4. **Library note references:**
   - Check if knowledge note exists in `Library/`
   - Suggest wiki-link to relevant Library notes

**Implementation:**
- Use Glob to list existing Project MOCs, Area MOCs, Topic MOCs, Library notes
- Use fuzzy matching for suggestions (e.g., "api launch" matches "API v2 Launch (MOC)")
- Include suggestions in report, optionally apply automatically

## Workflow

### Single Collect Processing Run

1. **Discover notes in Collect:**
   ```
   Use Glob: Collect/*.md
   Exclude: .DS_Store, hidden files
   ```

2. **Get vault context:**
   - List existing Project MOCs: `Catalog/Projects/*.md`
   - List existing Area MOCs: `Catalog/Areas/*.md`
   - List existing Topic MOCs: `Catalog/Topics/*.md`
   - List existing Library notes: `Library/*.md` (for reference)
   - Store for wiki-link suggestion matching

3. **Process each note:**

   a. **Read note content:**
      - Get full content
      - Parse existing YAML frontmatter (if any)
      - Analyze content structure and language

   b. **Classify note type:**
      - Apply decision tree logic
      - Determine destination folder

   c. **Check development status:**
      - Is note complete enough to classify?
      - Does it have sufficient context?
      - Is purpose clear?

   d. **Add metadata:**
      - For Project MOCs: add `tags: [catalog/project]`
      - For Area MOCs: add `tags: [catalog/area]`
      - For Topic MOCs: add `tags: [catalog/topic]`
      - For Library notes: suggest backlinks to relevant Catalog MOCs

   e. **Suggest wiki-links:**
      - Scan for Project MOC references (match against Catalog/Projects/)
      - Scan for Area MOC references (match against Catalog/Areas/)
      - Scan for Topic MOC references (match against Catalog/Topics/)
      - Scan for Library note references (match against Library/)
      - Optionally apply links automatically or include in report

   f. **Identify Topic MOC linking:**
      - For notes going to Library/, suggest which Topic MOC(s) should link to it
      - Check existing Topic MOCs in Catalog/Topics/
      - Include in report for user to update MOCs

   g. **Move file:**
      - If staying in Collect: skip move
      - If moving to Refine: use `mv` to Refine/ folder
      - If moving to Library: use `mv` to Library/ folder (flat structure)
      - If moving to Catalog: use `mv` to appropriate Catalog subfolder (Projects/Areas/Topics)
      - Verify no filename conflicts at destination
      - If conflict exists, suggest alternate filename

4. **Generate summary report:**
   - Files processed count
   - Files moved by destination (Catalog/Projects, Catalog/Areas, Catalog/Topics, Library, Refine, Resources, Archive)
   - Files remaining in Collect (with reasons)
   - Wiki-link suggestions applied
   - Topic MOC linking recommendations (for Library notes)
   - Recommended next actions

### Error Handling

- **Filename conflicts:** Suggest `[Name] 2.md` or append timestamp
- **Ambiguous classification:** Leave in Collect, report to user
- **Malformed existing YAML:** Attempt to fix, or report if severely broken

## Output Format

### Summary Report

```markdown
## Collect Processing Report

**Processed:** [X] notes from Collect/

### Moved to Destinations

**Project MOCs (Catalog/Projects/):** [count]
- [[Project Name (MOC)]] - [brief classification reason]
- [[Project Name 2 (MOC)]] - [brief classification reason]

**Area MOCs (Catalog/Areas/):** [count]
- [[Area Name (MOC)]] - [brief classification reason]

**Topic MOCs (Catalog/Topics/):** [count]
- [[Topic Name (MOC)]] - [brief classification reason]

**Library (Library/):** [count]
- [[Knowledge Note 1]] - [brief classification reason]
  - **Suggest linking from:** [[Topic MOC Name]]
  - **Related added:** [[Topic MOC Name]], [[Project MOC Name]]
- [[Knowledge Note 2]] - [brief classification reason]
  - **Suggest linking from:** [[Another Topic MOC]]
  - **Related added:** [[Another Topic MOC]]

**Refine (Refine/):** [count]
- [[Working Title 1]] - [brief classification reason] - needs development
- [[Working Title 2]] - [brief classification reason] - needs development

**Utilities (Resources/):** [count]
- [[Utility Name]] - [brief classification reason]

**Archives (Archive/):** [count]
- [[Archived Item]] - [brief classification reason]

### Remaining in Collect

**Needs More Development:** [count]
- [Note Title] - [reason: too brief, unclear purpose, needs context]
  - **Suggestion:** [what to add/clarify or consider moving to Refine]

**Ambiguous Classification:** [count]
- [Note Title] - [why unclear]
  - **Options:** [possible destinations with reasoning]

### Wiki-Links Added

**Project MOC References:** [count] links added
- "website redesign" -> [[Website Redesign (MOC)]] in [note name]

**Area MOC References:** [count] links added
- "team leadership" -> [[Team Leadership (MOC)]] in [note name]

**Library Note References:** [count] links added
- "api documentation" -> [[Library Note Title]] in [note name]

### Topic MOC Linking Recommendations

**For Library notes, update these Topic MOCs:**
- [[Topic Name (MOC)]] - add link to [[New Library Note 1]]
- [[Another Topic (MOC)]] - add link to [[New Library Note 2]]

### Recommended Next Actions

1. Review notes remaining in Collect (needs development)
2. Update Topic MOCs with links to new Library notes (see recommendations above)
3. Run `/format` on newly sorted notes for structure standardization
4. Continue developing notes in Refine/ folder
5. Consider creating new Topic MOC for: [suggested topic based on patterns]

### Processing Stats

- **Files moved:** [X]
- **Files updated in place:** [X]
- **Files needing user decision:** [X]
```

### Detailed Per-File Report (Optional)

```markdown
## Detailed Changes Per File

### [Original Filename.md] -> Catalog/Projects/[New Filename (MOC)].md

**Classification:** Project MOC
**Reasoning:** Content describes organizing a project with implied deadline
**Metadata added:** tags: [catalog/project]

**Wiki-Links Added:**
- Related knowledge note -> [[Architecture Details]]

**Suggested Improvements:**
- Add explicit completion criteria
- Link to external planning doc
- Add sections: Status, Timeline, Deliverables, Related Notes, Key People

---

### [Knowledge Note.md] -> Library/[Knowledge Note Title].md

**Classification:** Knowledge Note
**Reasoning:** Reference documentation about API implementation
**Metadata added:** related: [[API Design (MOC)]], [[API v2 Launch (MOC)]]

**Topic MOC Recommendation:**
- Should be linked from [[API Design (MOC)]] in Catalog/Topics/

**Suggested Improvements:**
- Ensure title is descriptive and searchable

---

### [Topic Overview.md] -> Catalog/Topics/[Topic Name (MOC)].md

**Classification:** Topic MOC
**Reasoning:** Organizes knowledge domain with links to related notes
**Metadata added:** tags: [catalog/topic]

**Suggested Improvements:**
- Add sections: Overview, Core Concepts, Deep Dives, Related Topics

---

### [Another Note.md] -> STAYS IN COLLECT

**Classification:** Underdeveloped
**Reasoning:** Fragmentary notes without clear purpose

**Issues:**
- No clear goal or deliverable described
- Unclear if this is organizing a project/area (MOC) or knowledge content
- Needs more context

**Recommendations:**
- Clarify: Is this organizing a project/area (-> MOC) or is it knowledge (-> Library)?
- Consider moving to Refine/ if needs multi-session development
- Add specific deliverables or outcomes
- Expand on background and purpose
```

## File Operations

### Move Command Pattern

```bash
# Standard moves
mv "Collect/Original Name.md" "Catalog/Projects/Descriptive Project Name (MOC).md"
mv "Collect/Knowledge Note.md" "Library/Knowledge Note Title.md"
mv "Collect/Working Draft.md" "Refine/Working Draft.md"
mv "Collect/Topic Overview.md" "Catalog/Topics/Topic Name (MOC).md"

# Handle spaces in filenames (always quote paths)
mv "Collect/Note with spaces.md" "Catalog/Areas/Area with spaces (MOC).md"
mv "Collect/Reference doc.md" "Library/Reference doc.md"

# Check for conflicts first
ls "Catalog/Projects/Potential Conflict.md" 2>/dev/null && echo "Conflict exists"
ls "Library/Potential Conflict.md" 2>/dev/null && echo "Conflict exists"
```

### Filename Sanitization

- Preserve user's filename if appropriate
- Remove or replace problematic characters: `/`, `\`, `:`, `*`, `?`, `"`, `<`, `>`, `|`
- Keep alphanumerics, spaces, hyphens, underscores, parentheses
- Trim leading/trailing spaces
- Limit length to reasonable bounds (< 200 chars)

### Conflict Resolution

If destination file exists:
1. Check if content is identical (duplicate) -> skip move, report
2. Check if content differs -> suggest alternate filename
3. Offer options: `[Name] 2.md`, `[Name] (YYYY-MM-DD).md`, `[Name] - [Topic].md`

## Integration with Other Skills

### With `/format` Skill

After sorting, recommend formatting:
```markdown
**Next Step:** Run `/format` on the following notes to standardize structure:
- Catalog/Projects/[New Project MOC].md
- Catalog/Areas/[New Area MOC].md
- Library/[New Knowledge Note].md
```

### With Weekly Review Workflow

Sorting is step 1 of weekly review:
1. `/sort` - Process Collect folder (this skill)
2. Review sorted notes for completeness
3. Update Topic MOCs with links to new Library notes
4. `/format` - Standardize formatting
5. Continue developing notes in Refine/
6. Update Project and Area MOCs with progress
7. Archive completed work

## Edge Cases & Considerations

### Daily Notes in Collect

If a daily note (YYYY-MM-DD.md) appears in Collect:
- **Destination:** `Daily/`
- **Action:** Move to correct location
- **Note in report:** "Daily note found in Collect - moved to Daily/"

### Meeting Notes

If note is meeting notes:
- **Check:** Is it informational reference or actionable project?
- **Informational:** -> `Library/` (permanent knowledge)
- **Actionable:** -> Extract project/area MOC, move accordingly
- **Suggestion:** Consider linking from relevant Project/Area MOC in Catalog instead of standalone note

### Completed Projects in Collect

If note describes completed project:
- **Check:** Is this a MOC or content?
- **MOC:** -> `Archive/` (move the MOC itself)
- **Content:** -> `Library/` (knowledge preserved, even if project done) or `Archive/` if truly obsolete
- **Note in report:** "Completed project archived"

### "Someday/Maybe" Items

If note is aspirational but not active:
- **Destination:** Stay in `Collect/`
- **Note in report:** "Marked as someday/maybe - kept in Collect for periodic review"

### Notes Already in Refine

If processing notes in Refine folder:
- **Check:** Is note now complete enough for Library?
- **YES:** Move to `Library/`, recommend Topic MOC linking
- **NO:** Keep in `Refine/`
- **Note in report:** "Note still in development - remains in Refine/"

### Duplicate Content

If note duplicates existing Project/Area MOC or Library note:
- **Action:** Don't move, merge manually
- **Report:** "Duplicate of [[Existing Note]] - review and merge manually"

### Multi-Topic Notes

If single note covers multiple distinct topics:
- **Report:** "Note covers multiple topics - consider splitting"
- **Suggestion:** List potential split destinations (separate Library notes or MOCs)
- **Action:** Leave in Collect for user to split manually, or move to Refine for development

### Notes with External References

If note heavily references external docs (Google Docs, Jira, etc.):
- Still classify normally (Project MOC, Area MOC, Library knowledge)
- Preserve external links
- Project MOCs often link to external planning docs

### MOC vs Content Confusion

If unclear whether note is organizing (MOC) or content (Library):
- **MOC indicators:** Lists links to other notes, has sections like "Related Notes" or "Key People", organizes a project/area at high level
- **Library indicators:** Contains actual knowledge/documentation, technical details, reference material
- **When in doubt:** Ask user or default to Library (easier to convert to MOC later)
- **Report:** "Classified as [choice] - consider if this should be [other option]"

## Safety Features

### Pre-Move Validation

- Check destination folder exists
- Check for filename conflicts
- Validate YAML syntax before writing
- Ensure source file exists before move

### Content Preservation

- Never delete content during classification
- Only add structure where needed
- Preserve all user-written text
- Keep existing YAML fields (don't overwrite)

### Dry-Run Mode

If user requests preview without moving:
```markdown
## Sort Preview (Dry Run)

The following moves would be made:

- `Collect/Note1.md` -> `Catalog/Projects/Project Name (MOC).md`
  - Classification: Project MOC
  - Reason: Organizes project with clear deliverable and deadline
  - Metadata: tags: [catalog/project]

- `Collect/Note2.md` -> `Library/Knowledge Note.md`
  - Classification: Knowledge Note
  - Reason: Reference documentation
  - Metadata: related: [[Topic Name (MOC)]]
  - Topic MOC recommendation: Link from [[Topic Name (MOC)]]

- `Collect/Note3.md` -> `Refine/Working Title.md`
  - Classification: In Development
  - Reason: Has potential but needs multi-session development

- `Collect/Note4.md` -> STAY IN COLLECT
  - Classification: Underdeveloped
  - Reason: Needs more context

Type "apply" to execute moves or "cancel" to abort.
```

### Rollback Support (Future)

- Log all moves to `.claude/sort-log.json`
- Enable undo command to reverse last sort operation
- Include original paths and content checksums

## User Preferences & Customization

Users can customize sorting behavior by adding preferences to vault `CLAUDE.md`:

```markdown
## Sorting Preferences

- **Auto-apply wiki-links:** Yes/No
- **Conflicting filenames:** Append date / Append number / Ask user
- **Someday/maybe handling:** Keep in Collect / Move to Archive/Someday/
- **MOC suffix:** Add "(MOC)" suffix automatically / Ask user
- **Library vs Refine threshold:** Prefer moving to Refine for development / Prefer Library when mostly complete
```

Check for these preferences before processing.

## Tips for Users

- Run `/sort` weekly during review session
- Process Collect when it reaches 5-10 notes
- Review classification decisions before running `/format`
- Keep Collect clear for effective capture throughout the week
- Use descriptive titles in Collect for easier classification
- Move partially-developed notes to Refine/ instead of leaving in Collect
- Update Topic MOCs after sorting to link new Library notes
- Use "(MOC)" suffix in filenames to distinguish MOCs from content

## Common Patterns

### Capture-Sort-Format-Review Workflow

1. **Capture:** Quick notes to `Collect/` throughout week
2. **Sort:** Run `/sort` during weekly review
3. **Link Topic MOCs:** Update Topic MOCs to link new Library notes
4. **Format:** Run `/format` on sorted notes
5. **Review:** Read through newly sorted notes, add details
6. **Develop:** Continue work on notes in Refine/
7. **Connect:** Link MOCs to related Library notes and other MOCs

### Lifecycle Progression

Notes move through workflow stages:
- **Collect** -> Quick captures, entry point
- **Refine** -> Needs multi-session development
- **Library** -> Permanent knowledge, organized via Topic MOCs
- **Archive** -> Completed or obsolete

### Project MOC Identification Keywords

Words/phrases that often indicate **Project MOCs:**
- "migrate to", "implement", "build", "launch", "complete"
- "deadline", "by [date]"
- "phase 1", "milestone", "deliverable"
- "ship", "release", "deploy"
- Note: MOC organizes the project at high level, detailed content goes to Library

### Area MOC Identification Keywords

Words/phrases that often indicate **Area MOCs:**
- "manage", "maintain", "responsible for"
- "ongoing", "continuous", "recurring"
- "leadership", "oversight", "strategy"
- "standards", "guidelines", "practices"
- Note: MOC organizes the area at high level, detailed content goes to Library

### Library Note Identification

Indicators for **Library notes:**
- Technical documentation, how-tos, runbooks
- Reference material, API docs, architecture details
- Meeting notes (informational), research findings
- Any permanent knowledge worth preserving
- Should be linked from at least one Topic MOC in Catalog/Topics/

## Limitations

- Cannot read user's mind for ambiguous notes
- Cannot automatically merge duplicate content
- Cannot split multi-topic notes (user must do manually)
- Cannot fetch external context (Google Docs, Slack threads)
- Cannot automatically update Topic MOCs with links (reports recommendations only)
- Cannot distinguish MOC vs content with 100% accuracy (uses heuristics)
- Won't move notes from non-Collect folders unless explicitly requested (safety feature)

## Version History

- **3.0.0** - Folder-placement approach with wiki-link suggestions and durable MOC tags
- **2.0.0** - Updated for Lifecycle System: Collect -> Refine -> Library workflow, Catalog MOCs (Projects/Areas/Topics), flat Library structure
- **1.0.0** - Initial implementation with classification logic, wiki-link suggestions, and batch processing
