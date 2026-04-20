# My Obsidian Organization System

## Overview

This system uses the **Lifecycle System** - a workflow-based approach where folders represent stages in a note's development, not topic categories. The key principle: **folders manage workflow, links create connections, and MOCs/Bases provide organization**.

**Critical: This system uses NO subfolders (except in Catalog and Resources).** All organization happens through good note titles, links between notes, and MOCs/Bases in the Catalog folder.

---

## Folder Structure

### 📁 Collect
**Purpose:** Quick capture and initial ideas

Everything starts here. This is your staging area for:
- Quick captures and random thoughts
- Meeting notes that need processing
- Ideas that need development
- Links and resources to review
- Anything that pops into your head

**Weekly commitment:** Clear this folder at least once per week. Process notes and move them forward in the lifecycle or discard them.

**No subfolders.** Every note in Collect sits at the root level.

---

### 📁 Refine
**Purpose:** Notes being actively developed

Notes move here when they need more than 5 minutes of work to complete. This folder prevents your Collect folder from getting clogged with long-term projects.

Use Refine for:
- Notes that need significant development
- Ideas being fleshed out over multiple sessions
- Content that's not ready to be "done" yet

**Goal:** Every note here should eventually graduate to Library or be discarded.

**No subfolders.** All notes in active refinement sit together at the root level.

---

### 📁 Library
**Purpose:** Permanent notes - your knowledge base

This is the final home for most of your notes. Library contains **permanent notes** that are complete enough to stand on their own.

Permanent notes are:
- Finished for now (though they can be updated later)
- Clear enough that future-you will understand them
- Refined enough to share with a friend if needed
- Self-contained with proper context

**Important:** Notes in Library are organized by **good titles** and **links**, not by subfolders. All your knowledge sits together in one folder.

**No subfolders.** Whether it's about marketing, health, programming, or cooking - all permanent notes live at the Library root level, organized through the Catalog.

**Examples of Library notes:**
- "Kangaroos are marsupials"
- "The Pomodoro Technique improves focus"
- "How to make sourdough starter"
- "CSS Grid vs Flexbox comparison"

---

### 📁 Catalog
**Purpose:** Organization through MOCs and Bases

This is where ALL your organization happens. The Catalog is like a library's card catalog system - it helps you navigate and find notes across your vault.

**MOCs (Maps of Content):** Manually curated collections of links organized around a theme, project, or area.

**Bases:** Automated collections that gather notes based on tags, folders, or metadata. Bases update automatically.

**The Catalog has three core subfolders:**

#### Catalog/Projects/
Active work with end goals and completion criteria.

**Examples:**
- "Launch Website (MOC).md"
- "Write Book (MOC).md"
- "Plan Wedding (MOC).md"

Projects link to relevant notes in Library and track progress toward a specific deliverable.

#### Catalog/Areas/
Ongoing responsibilities and life domains with no end date. Standards to maintain.

**Examples:**
- "Health & Fitness (MOC).md"
- "Career Development (MOC).md"
- "Finances (MOC).md"
- "Home Maintenance (MOC).md"

Areas link to notes about ongoing responsibilities that require continuous attention.

#### Catalog/Topics/
Knowledge domains and subjects. Organize your Library notes by theme.

**Examples:**
- "Web Development (MOC).md"
- "Marketing (MOC).md"
- "Personal Finance (MOC).md"
- "Cooking (MOC).md"

Topics help you see all notes related to a subject, regardless of which project or area they came from.

**Optional workflow-specific extensions (add as needed):**
- **Dashboards/** - Overview MOCs and Bases (Weekly Review, Recent Notes, etc.)
- **Indexes/** - Master MOCs that link to other MOCs (All Projects, All Topics, etc.)

**Example structure:**
```
Catalog/
├── Projects/
│   └── Launch Website (MOC).md
├── Areas/
│   ├── Health & Fitness (MOC).md
│   └── Career Development (MOC).md
└── Topics/
    ├── Web Development (MOC).md
    └── Marketing (MOC).md

Library/
├── Color Theory.md
├── SEO Basics.md
├── Morning Routine.md
├── Strength Training Guide.md
└── Content Marketing Strategy.md
```

The "Launch Website" project MOC links to Color Theory and SEO Basics from Library. The "Marketing" topic MOC links to SEO Basics and Content Marketing Strategy. Same notes in Library, multiple organizational views.

**The Catalog is the ONLY folder where subfolders are allowed.** This exception exists because the Catalog's purpose is navigation and organization - just like a real library catalog has different drawers or sections.

---

### 📁 Archive
**Purpose:** Completed and inactive content

When projects complete or notes become inactive, move them here to keep your active workspace clean.

**What gets archived:**
- Completed project MOCs from Catalog
- Notes from Library that are no longer relevant but worth keeping
- Inactive area MOCs (responsibilities you no longer have)
- Old content you want to preserve but don't need active access to

**What stays active:**
- Library notes you still reference or might need
- Active project and area MOCs
- Any regularly-used content

**No subfolders.** Archived content sits together. Use good titles and dates to keep things findable.

---

### 📁 Daily
**Purpose:** Daily notes only

Your daily notes live here in their own space, separate from the lifecycle workflow.

Use daily notes to:
- Journal and reflect
- Track what you did each day
- Create links to Library notes or capture ideas for Collect
- Build a chronological record

Daily notes can reference notes anywhere in your vault through links.

**No subfolders.** Daily notes are inherently chronological; no need for year/month folders.

---

### 📁 Resources
**Purpose:** Templates and media assets

Store reusable templates and media attachments that support your notes.

**Resources has two subfolders:**

#### Resources/Templates/
Reusable note structures for quick creation.

**Template examples:**
- Daily note template
- Meeting notes template
- Project MOC template
- Book notes template
- Decision log template

#### Resources/Attachments/
Media files embedded in your notes - images, diagrams, PDFs, and other reference materials.

**Why Resources has subfolders:** Templates (markdown files for creating notes) and Attachments (media files embedded in notes) are fundamentally different types of utility files. Separating them by purpose keeps the folder organized and usable. Resources is the second exception to the "no subfolders" rule, alongside Catalog.

---

## Tagging Philosophy: Backlinks Over Tags

**Rule: If a link can do the job, use a link. If a folder can do the job, use a folder. Tags are only for the narrow slice of information that doesn't belong as a note and needs to survive when notes move around.**

Tag sprawl is one of the fastest ways to kill a note-taking practice. Once you have fifty tags, you spend more time wondering if you're tagging consistently than actually writing notes. This system deliberately minimizes tags.

### What Tags Are For

Tags are **durable metadata** — attributes that need to survive folder transitions. When a Project MOC moves from `Catalog/Projects/` to `Archive/`, its `#catalog/project` tag preserves its type classification. The folder tells you the state (active vs. archived) but loses the type. That's the one job tags do well.

**Approved durable tags:**
- `#catalog/project` - Project MOC type (survives archiving)
- `#catalog/area` - Area MOC type (survives archiving)
- `#catalog/topic` - Topic MOC type (survives archiving)

You may discover additional durable tags as your system matures — patterns where you need to query notes across folders by a classification that no link or folder can express. Add them sparingly and only when a genuine need emerges.

### What Tags Are NOT For

**Never use tags to connect content to topics.** Don't create `#productivity`, `#health`, `#finance`, or `#kanban-method` tags. Instead:

- Create a note or MOC for the concept and link to it with `[[backlinks]]`
- Every Library note should link to relevant Catalog MOCs (Topics, Areas, Projects) — either inline in the body or via the optional `related` frontmatter property
- If no relevant Catalog MOC exists, create one — that's the system working as designed

### Guidelines

- **Start with zero content tags** - Only the durable tags listed above
- **If tempted to create a tag, create a note instead** - `#kanban-method` → `[[Kanban Method]]`
- **Links connect, folders locate, tags classify** - Each tool has one job
- **Bases query tags** - This is their primary value: gathering notes by durable classification across folders

---

## Workflow

### Daily Routine
1. Create or open today's note in `Daily`
2. Journal, reflect, and track your day
3. Link to relevant notes or create new captures in `Collect`
4. Use checkboxes and links to track tasks

### Weekly Review
1. **Process Collect:** Review all notes in `Collect`
   - Refine quick captures into coherent thoughts
   - Move notes needing more work to `Refine`
   - Move finished notes directly to `Library`
   - Delete what's no longer relevant

2. **Progress Refine:** Check notes in `Refine`
   - Continue developing in-progress notes
   - Move completed notes to `Library`
3. **Maintain Catalog:** Update MOCs and check Bases
   - Add newly-finished Library notes to relevant MOCs
   - Update project MOCs with progress
   - Check Bases to discover new patterns or connections

5. **Archive Completed Work:**
   - Move completed project MOCs to `Archive`
   - Archive any Library notes no longer needed actively

### As Notes Develop

**The lifecycle flow:**
```
Collect → Refine (if needed) → Library → linked from Catalog MOCs
                    ↓
                Eventually → Archive (when complete/inactive)
```

Most notes follow this path:
1. Quick capture lands in `Collect`
2. During weekly review, refined and moved to `Refine` (if complex) or `Library` (if simple)
3. Added to or linked from relevant MOCs in `Catalog`
4. Stays in `Library` as permanent knowledge
5. Eventually archived if it becomes inactive (or stays in Library if still useful)

---

## Key Principles

### 1. No Subfolders (Except in Catalog and Resources)
Most folders are completely flat. Organization happens through:
- **Good note titles** - The main idea should be in the title
- **Links between notes** - Connect related ideas
- **MOCs in Catalog** - Manually organize notes by creating curated link collections
- **Bases in Catalog** - Automatically gather notes using queries
- **Tags for durable metadata** - Only for classification that survives folder transitions

**The TWO exceptions:**

1. **Catalog folder** has three core subfolders (Projects, Areas, Topics) because its purpose is navigation and organization - like a real library catalog with different sections. You can optionally add workflow-specific extensions like Dashboards and Indexes as your system matures.

2. **Resources folder** has two subfolders (Templates, Attachments) because templates and attachments are fundamentally different types of utility files that serve distinct purposes. Templates are markdown files for creating notes; Attachments are media files embedded in notes.

All other folders (Collect, Refine, Library, Archive, Daily) remain completely flat.

### 2. Folders = Workflow Stages
Folders represent where a note is in its development:
- Collecting → Refining → Finished → Cataloged → Archived

They do NOT represent topics or categories. A note about marketing and a note about cooking both live in Library together.

### 3. The Catalog is Your Organization Hub
Instead of organizing notes into topic folders, you create organization in the Catalog:
- **Project MOCs** organize work with end goals
- **Area MOCs** organize ongoing responsibilities  
- **Topic MOCs** organize knowledge by theme
- **Bases** automatically gather notes by criteria

One note can appear in multiple MOCs. A "Content Marketing Strategy" note might be linked from:
- "Marketing Topic MOC"
- "Launch Website Project MOC"
- "Business Area MOC"

This is impossible with subfolders but natural with MOCs.

### 4. Backlinks Over Tags
When deciding how to connect information:
1. **Use a link** to connect content to topics, projects, areas, and related ideas
2. **Use a folder** to indicate workflow stage (Collect → Refine → Library → Archive)
3. **Use a tag** only for durable metadata that survives folder transitions (`#catalog/project`, `#catalog/area`, `#catalog/topic`)
4. **Never create a subfolder** outside Catalog and Resources

### 5. Good Titles Enable Discovery
With no subfolders, note titles must be descriptive and searchable:
- ✅ "Kangaroos are marsupials"
- ✅ "The Pomodoro Technique uses 25-minute intervals"
- ✅ "How to make sourdough starter"
- ❌ "Facts about Kangaroos"
- ❌ "Productivity tip"
- ❌ "Recipe notes"

When you search, you should be able to find notes by their titles alone.

### 6. Weekly Maintenance is Essential
Without regular processing:
- `Collect` becomes overwhelming
- `Refine` gets clogged
- Notes never reach `Library`
- MOCs become outdated

Commit to weekly reviews. This system only works with consistent maintenance.

### 7. Follow the Style Guide
Good titles, strong opening sentences, and contextual links make the flat structure work. See [[Obsidian - Note-Taking Style Guide]] for writing conventions that support the Lifecycle System workflow.

### 8. Trust the Process
It will feel strange at first to have all your notes in one flat Library folder. You'll want to create subfolders for different topics.

Resist this urge.

After a few weeks of using MOCs and Bases in your Catalog, you'll discover that topic-based organization works better through links than through folders. You'll be able to see the same note from multiple organizational perspectives, which is impossible with rigid folder hierarchies.

---

## Getting Started

1. **Create the seven folders**
   - Collect
   - Refine
   - Library
   - Catalog (with three subfolders: Projects, Areas, Topics)
   - Archive
   - Daily
   - Resources (with two subfolders: Templates, Attachments)

2. **Start capturing** in `Collect`
   - Don't overthink it
   - Just capture ideas as they come

3. **Create your first daily note** in `Daily`
   - Start building the habit

4. **Do your first weekly review**
   - Process Collect notes
   - Move some to Library
   - Experience the workflow

6. **Create your first MOC** in `Catalog`
   - When you notice 3-5 related notes in Library
   - Decide if it's a Project, Area, or Topic
   - Place it in the appropriate Catalog subfolder
   - Don't force it - let it emerge naturally

6. **Create your first Base** in `Catalog`
   - Place in Catalog/Dashboards/ if you've added that optional folder

7. **Add tags sparingly**
   - Only add new tags when you discover a genuine need

9. **Resist creating subfolders** (except in Catalog and Resources)
   - Every time you want to create a subfolder in Library, create a Topic MOC instead
   - Trust that flat folders + MOCs work better

10. **Give it a month**
    - This system requires a mindset shift
    - Commit to the process for at least 4 weekly reviews
    - Then evaluate and adjust

---

## Common Questions

### "Won't Library become a mess with everything in one folder?"

No, because you don't browse Library like a folder tree. You:
- **Search** for notes by title
- **Navigate via links** from note to note
- **Use MOCs** to see curated collections
- **Use Bases** to filter automatically
- **Use the graph view** to explore connections

The folder structure becomes almost invisible once you're working in your vault.

### "What if I have hundreds of notes on one topic?"

Create a MOC for that topic in Catalog. For example:
- "Web Development MOC" with links to all your web dev notes
- Organize the MOC with sections like "Fundamentals," "Frameworks," "Best Practices"
- The notes still live in Library, but the MOC provides structure

You can even create multiple MOCs for the same topic from different perspectives.

### "When should I move a note from Collect to Refine vs. straight to Library?"

Ask: "Does this need more than 5 minutes of work?"
- **Yes** → Move to Refine
- **No** → Move to Library

Many notes can go straight from Collect to Library after a quick refinement during weekly review.

### "Should Daily notes eventually move to Archive?"

That's up to you. Some people:
- Keep all daily notes forever in Daily
- Archive daily notes older than 1 year
- Only archive daily notes when they reference archived projects

Choose what feels right.

### "What's the difference between a MOC and a Base?"

- **MOC** - Manual, curated, specific. You choose exactly which notes to include and how to organize them. Like a hand-written index.
- **Base** - Automatic, dynamic, broad. A query that gathers notes matching criteria. Like a saved search.

Use MOCs when you want control. Use Bases when you want automation.

---

## Example Catalog Structure

Here's what a mature Catalog might look like:

```
Catalog/
├── Projects/
│   ├── Launch Website (MOC).md
│   ├── Write Book (MOC).md
│   └── Learn Spanish (MOC).md
├── Areas/
│   ├── Health & Fitness (MOC).md
│   ├── Career Development (MOC).md
│   ├── Finances (MOC).md
│   └── Home Maintenance (MOC).md
└── Topics/
    ├── Web Development (MOC).md
    ├── Marketing (MOC).md
    ├── Personal Finance (MOC).md
    └── Cooking (MOC).md
```

**With optional extensions:**
```
Catalog/
├── Projects/
│   └── [project MOCs]
├── Areas/
│   └── [area MOCs]
├── Topics/
│   └── [topic MOCs]
├── Dashboards/
│   ├── Weekly Review (Base).md
│   └── Recent Notes (Base).md
└── Indexes/
    ├── All Projects (MOC).md
    └── All Topics (MOC).md
```

The three-subfolder structure (Projects, Areas, Topics) keeps your organizational system clear and navigable as it grows. Optional extensions like Dashboards and Indexes support specialized workflows when needed.

---

*This system is designed to evolve with you. Adjust as needed, but give any changes at least a month before evaluating whether they work. The power of this system reveals itself through consistent use over time.*
