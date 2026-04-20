# Note-Taking Style Guide

## Introduction

This guide provides writing conventions that work seamlessly with the Lifecycle System workflow. It's designed to make your notes discoverable in flat folder structures, easily linkable from MOCs, and valuable to Future You.

**Purpose**: Help you write notes that are atomic, well-titled, properly structured, and connected through meaningful links.

**Relationship to Lifecycle System**: This guide supports each workflow stage (Collect → Refine → Library → Archive) with appropriate style expectations at each level.

**When to use this guide**: Apply these conventions when moving notes to Library, creating MOCs, or writing knowledge you'll reference long-term. Don't worry about style when quick-capturing in Collect or journaling in Daily notes.

## Universal Principles

Four core practices that apply across all permanent notes:

**Principle 1: Descriptive titles enable discovery**
- In flat folders, your title is the primary discovery mechanism
- Good: "Progressive Summarization improves recall"
- Bad: "Notes on reading"

**Principle 2: Link concepts, not just references**
- Connect ideas through inline contextual links
- Explain the relationship when linking
- Good: "This connects to [[Zettelkasten]] methodology which also emphasizes atomic notes"
- Bad: "See also: [[Zettelkasten]]"

**Principle 3: Lead with the main idea**
- First 1-2 sentences should answer "what is this about?"
- Hook the reader so MOC browsers can decide if they need this note
- Future You should understand the note's value immediately

**Principle 4: Write for Future You**
- Include enough context to understand without remembering when/why you wrote it
- Assume you'll forget the details
- Make notes standalone and self-explanatory

## Note Titling Conventions

### Effective Title Patterns

**Pattern 1: Subject + Verb + Object**
- "Progressive Summarization improves recall"
- "Flat folders require better titles"
- "MOCs work better than folder hierarchies"

**Pattern 2: Concept Name + Key Attribute**
- "Git staging best practices"
- "Obsidian Lifecycle System workflow"
- "Zettelkasten atomic note principle"

**Pattern 3: Descriptive Phrases for References**
- "Hampton Inn Queen Creek - Arizona Trip 2026"
- "Claudesidian - Bootstrap Repository"
- "Everything Claude Code - Integration Ideas"

### Title Anti-Patterns

Avoid vague, non-searchable titles:
- ❌ "Notes"
- ❌ "Ideas"
- ❌ "Thoughts"
- ❌ "Hotel Info"
- ❌ "Interesting Link"

### When to Include Dates

- **Yes**: Time-sensitive information ("Hampton Inn Queen Creek - Arizona Trip 2026")
- **Yes**: Meeting notes ("Team Standup - 2026-02-11")
- **Yes**: Source notes with edition info ("Atomic Habits 2018")
- **No**: Evergreen knowledge notes (timeless concepts)
- **No**: Reference notes that update (contact info, procedures)

### Evolving Titles

- It's okay to rename notes as you understand them better
- Obsidian automatically updates all links when you rename
- During weekly reviews, improve vague titles you find

## Content Structure

### Opening Sentence Guidelines

The first 1-2 sentences are critical for:
- MOC readers deciding if they need this note
- Future You understanding context at a glance
- Search previews showing relevant content

**Good opening sentences:**
- "Progressive Summarization is a reading technique that uses multiple passes with increasing levels of highlighting to identify key insights."
- "This repository from a Claude hackathon winner demonstrates implementation patterns for integrating Claude with Obsidian."
- "The Lifecycle System uses workflow-based folders instead of topic categories to organize notes."

**Poor opening sentences:**
- "This is interesting." (no context)
- "See below." (forces reading entire note)
- Starting with background instead of the main point

### Heading Hierarchy

Follow Obsidian markdown conventions:

- **H1** (`#`): Note title — must be explicitly written at the top of every note and match the filename exactly. The vault has "Inline title" disabled, so the H1 is the only visible title. When renaming a file, update the H1 to match.
- **H2** (`##`): Major sections
- **H3** (`###`): Subsections
- **Avoid H4+**: If you need H4 or deeper, consider splitting the note

**Example structure:**
```markdown
# Note Title

Opening paragraph explaining the main idea.

## Key Concept 1

Details about first concept.

### Sub-point A
### Sub-point B

## Key Concept 2

Details about second concept.

## Related Concepts

Links to related notes.
```

### Length Guidelines

**Collect**: Any length - unprocessed captures
**Refine**: Developing - aim for 200-500 words for evergreen notes
**Library**:
- Evergreen notes: 200-500 words (atomic - one concept)
- Reference notes: As brief as needed (just the facts)
- Source notes: Can be longer (one book = one note)
- Project notes: Variable based on complexity

**Rule of thumb**: If a note exceeds 1000 words, consider if it contains multiple concepts that should be split into separate notes.

## Frontmatter and Metadata

### Minimal Frontmatter Recommendation

```yaml
---
created: YYYY-MM-DD
---
```

**Created date**: Useful for tracking note age, but optional.

Most Library notes need no frontmatter at all. Only add YAML tags for durable metadata (e.g., `#catalog/project` on MOCs).

### Connecting Content: Backlinks, Not Tags

**Never use tags to connect content to topics.** No `#productivity`, `#health`, `#programming`, `#type/meeting-notes`, or any content-category tags.

**Instead**, link to relevant Catalog MOCs with `[[backlinks]]`. You can do this naturally inline, or use the `related` frontmatter property for structured discoverability:

```markdown
---
related:
  - "[[Web Development (MOC)]]"
  - "[[Launch Website (MOC)]]"
---

# Note Title

This note covers responsive design patterns used in the
[[Launch Website (MOC)]] project...
```

Both approaches create bidirectional connections in the graph. Use whichever feels natural — what matters is that notes link to MOCs, not how.

Why backlinks beat tags:
- MOCs provide curated context, not just flat lists
- One note can link to multiple MOCs (Topics, Areas, Projects)
- The `related` property is structured data — Bases can query it
- If no relevant MOC exists, create one — that's the system working as designed

## Linking Practices

### When to Link

Link whenever you mention a concept that has (or should have) its own note:
- ✅ "The [[Zettelkasten]] method emphasizes atomic notes"
- ✅ "I use [[Progressive Summarization]] to process book notes"
- ✅ "This connects to our [[Content Marketing Strategy]]"

**Don't over-link**: Resist linking every possible word. Link concepts, not common words.
- ❌ "I went to the [[store]] to buy [[groceries]]"
- ✅ "I applied [[Meal Planning Framework]] to this week's shopping"

**Link during writing**: Add links as you write, not as an afterthought. It helps you discover connections.

### How to Link

**Inline Contextual Linking (Preferred)**

Embed links naturally in sentences with context about the relationship:

```markdown
The [[Lifecycle System]] uses workflow-based folders, which means
[[Descriptive Titles Enable Discovery]] becomes critical in flat structures.

This approach differs from [[PARA Method]] which organizes by Projects,
Areas, Resources, and Archives.
```

**Reference Sections (For Sources)**

Use a "References" section at the end for source material:

```markdown
## References
- [[Book Title - Author]]
- [[Article Name]]
- [[Research Paper]]
```

### Link Phrasing Best Practices

**Explain the relationship** when linking:

✅ Good:
- "This connects to [[Linking Your Thinking]] methodology which also emphasizes MOCs"
- "Unlike [[PARA Method]], the Lifecycle System uses workflow stages"
- "See [[Git Staging Best Practices]] for why we stage files individually"

❌ Avoid generic phrases:
- "See also: [[Linking Your Thinking]]"
- "Related: [[PARA Method]]"
- "[[Git Staging Best Practices]]" (link alone without context)

**Section linking**: Link to specific sections when relevant:
- `[[Note Title#Section Name]]`
- Example: `[[Lifecycle System - Obsidian#Folder Structure]]`

## Note Types and Templates

### Evergreen Knowledge Notes

**Purpose**: Permanent concepts and ideas - the core of your knowledge base

**Location**: Library

**Characteristics**:
- Timeless (not date-specific)
- Atomic (one concept per note)
- Well-titled and self-explanatory
- Rich with contextual links

**Structure**:
```markdown
# Note Title

Opening paragraph stating the main idea in 1-3 sentences.

## Key Points
- Bullet 1
- Bullet 2
- Bullet 3

## Why This Matters
Context, implications, or applications

## Examples
Real-world examples or use cases (optional)

## Related Concepts
- [[Link 1]] - how it connects
- [[Link 2]] - how it connects
```

**Example**:
```markdown
# Progressive Summarization Improves Recall

Progressive Summarization is a reading technique that uses multiple
passes with increasing levels of highlighting to identify key insights.
Each pass distills content further, creating layers of summarization.

## The Four Passes

1. **First pass**: Read and take notes
2. **Second pass**: Bold the important passages
3. **Third pass**: Highlight the most critical points
4. **Fourth pass**: Create summary in your own words

## Why This Works

Multiple passes force active engagement with material. Each layer of
summarization tests your understanding and creates clear visual hierarchy.

## Related Concepts
- [[Spaced Repetition]] - also leverages multiple exposures
- [[Zettelkasten]] - compatible note-taking methodology
```

### Reference Notes

**Purpose**: Quick facts, contact info, pricing, specifications, procedures

**Location**:
- Library (when permanent)
- Archive (when time-sensitive info is outdated)

**Characteristics**:
- Factual and concise
- Context included for Future You
- Descriptive titles with specifics

**Structure**:
```markdown
# Descriptive Title with Context

Key information presented upfront.

## Details
Organized sections as needed

## Notes
Any context that helps Future You understand why this matters
```

**Example**:
```markdown
# Hampton Inn Queen Creek - Arizona Trip 2026

**Option 1** for [[Heartley's Hunt]] accommodation in Arizona.

## Details
- Check-in: 2026-03-22
- Check-out: 2026-03-25
- Cost: $951.97
- Address: 5601 W Hunt Hwy, Queen Creek, AZ 85142
- Booking: [Link if available]

## Why This Option
- Close proximity to [[Great Wolf Lodge Scottsdale]]
- Family-friendly amenities
- Within budget

## Alternatives
- [[Alternative Hotel Option 1]]
- [[Alternative Hotel Option 2]]

## Decision
[To be updated when decision is made]
```

### Source Notes

**Purpose**: Capture insights from books, articles, videos, podcasts

**Location**: Library

**Characteristics**:
- One source per note (one book = one note)
- Progressive summarization layers
- Personal synthesis included
- Links to related concepts

**Structure**:
```markdown
# Source Title - Key Insight

**Source**: [[Author Name]] - Book/Article Title
**Type**: Book / Article / Video / Podcast
**Date**: YYYY-MM-DD (when consumed)

## Summary
2-4 sentence overview of main ideas

## Key Insights

Use progressive summarization layers:
- **Bold** the most important insights
- ==Highlight== the critical points (if needed)
- Regular text for supporting details

### Insight 1: Descriptive heading
Details about first key insight

### Insight 2: Descriptive heading
Details about second key insight

## My Thoughts
Personal synthesis - what you think about it, how it applies to your context,
questions it raises

## How I'll Apply This
Concrete actions or applications (optional)

## Related Concepts
- [[Concept 1]] - connection explanation
- [[Concept 2]] - connection explanation

## References
- Citation info
- Purchase link
- Author's website
```

### Meeting and Project Notes

**Purpose**: Capture discussions, decisions, action items, project planning

**Location**:
- Collect (during/immediately after meeting)
- Refine (if needs development)
- Library (if valuable long-term) or Archive (when project complete)

**Characteristics**:
- Date in title
- Action items with owners
- Links to related project MOCs

**Structure**:
```markdown
# Meeting/Project Name - YYYY-MM-DD

**Attendees**: Names or roles
**Related**: [[Project MOC]]

## Agenda
- Topic 1
- Topic 2
- Topic 3

## Discussion Notes
Freeform capture of key points discussed

## Decisions Made
- Decision 1: What was decided and why
- Decision 2: What was decided and why

## Action Items
- [ ] Task 1 ([[Person Name]]) - due date
- [ ] Task 2 ([[Person Name]]) - due date
- [ ] Task 3 ([[Person Name]]) - due date

## Follow-up
- Next meeting: [Date]
- Links to: [[Related Note]]
```

### Daily Notes

**Purpose**: Daily journal, activity log, daily planning

**Location**: Daily

**Characteristics**:
- Dated filename (YYYY-MM-DD)
- Freeform and personal
- Links to Collect for ideas worth developing
- Minimal formatting required

**Structure**:
```markdown
# YYYY-MM-DD

## Morning
Plans or intentions for the day

## Log
Timestamped activities (optional)
- 09:00 - Activity
- 14:00 - Activity

## Notes
Thoughts, ideas, observations

If any idea needs development, create a note in [[Collect]]

## Tasks
- [ ] Task 1
- [ ] Task 2

## Reflection
What went well, what to improve (optional)

## Gratitude
Three things you're grateful for (optional)
```

## MOC Best Practices

### Writing MOC-Friendly Notes

Your notes work well in MOCs when they have:

1. **Strong, self-explanatory titles** - MOC readers see title first
2. **Clear opening sentence** - Hooks readers, explains value
3. **Consistent depth** - Notes in same domain should be at similar conceptual levels
4. **Standalone completeness** - Each note understandable on its own, without reading the MOC
5. **Proper headings** - Enable section linking (`[[Note#Section]]`)

**Bad MOC experience**:
```markdown
## Web Development
- [[Notes]]
- [[Ideas]]
- [[Framework Info]]
```
(Reader has no idea what these contain)

**Good MOC experience**:
```markdown
## Web Development Fundamentals
- [[React Component Lifecycle Explained]] - How mounting, updating, and unmounting work
- [[CSS Grid vs Flexbox Comparison]] - When to use each layout system
- [[REST API Best Practices]] - Conventions for endpoint design
```

### Structuring MOCs

**Basic MOC Structure:**
```markdown
# Topic/Project/Area Name (MOC)

Brief description of what this MOC organizes (1-2 sentences)

## Section 1
- [[Note Title]] - why it's here, what it covers
- [[Note Title]] - why it's here, what it covers

## Section 2
- [[Note Title]] - context or description
- [[Note Title]] - context or description

## Related MOCs
- [[Related Topic (MOC)]]
- [[Project Name (MOC)]]
```

**Enhanced MOC Structure** (for mature MOCs):
```markdown
# Topic Name (MOC)

## Overview
What this MOC covers, why it matters, how it's organized

## Fundamentals
Core concepts in this domain
- [[Note]] - brief description
- [[Note]] - brief description

## Advanced Topics
- [[Note]] - description
- [[Note]] - description

## How-To Guides
- [[Note]] - practical application
- [[Note]] - practical application

## Case Studies / Examples
- [[Note]] - real-world example
- [[Note]] - real-world example

## Related MOCs
- [[Related Topic (MOC)]] - how it connects
- [[Project Name (MOC)]] - how it connects

## In Progress
Notes being developed, questions to explore, gaps to fill
```

**MOC Organization Tips**:
- Group related notes under descriptive headings
- Add brief context after each link (don't just list links)
- Order notes logically (fundamentals before advanced, or by workflow)
- Link to related MOCs to enable navigation
- Keep MOCs as curated collections, not exhaustive lists

## Workflow-Specific Guidelines

### Collect Folder

**Purpose**: Quick capture - get ideas out of your head fast

**Style requirements**: NONE - just capture the thought

**Good practices**:
- Capture first, organize later
- Don't spend time formatting - speed matters more

**Examples of acceptable Collect notes**:
- Single sentence captures
- Pasted URLs with no context
- Voice-to-text rambles
- Screenshot with filename only

**Key principle**: Lower the friction for capture. Style comes later.

### Refine Folder

**Purpose**: Develop notes that need more than 5 minutes of work

**Style requirements**:
- Give it a proper descriptive title
- Add basic structure using headings
- Start linking to related concepts
- Clarify the main idea

**Goal**: Progress toward Library standards, but work-in-progress is expected

**Examples of notes that belong in Refine**:
- Book notes being processed with progressive summarization
- Project plans being developed
- Concepts being researched and elaborated
- Notes being restructured from Collect

**Key principle**: Active development zone. It's okay if it's not perfect yet.

### Library Folder

**Purpose**: Permanent knowledge - finished, polished, reference-ready

**Style requirements** (all of these):
- ✅ Follows titling conventions - descriptive and searchable
- ✅ Has strong opening sentence explaining main idea
- ✅ Uses heading hierarchy appropriately
- ✅ Links to related concepts with context
- ✅ Added to at least one relevant MOC in Catalog
- ✅ Includes enough context for Future You
- ✅ Atomic (if it's an evergreen note)

**Quality bar**: Could you share this note with a friend and they'd understand it without your explanation?

**Examples of Library-ready notes**:
- Evergreen knowledge notes on concepts you've internalized
- Completed source notes with insights extracted
- Well-documented reference information
- Finished how-to guides

**Key principle**: Permanent knowledge deserves permanence-quality standards.

### Archive Folder

**Purpose**: Completed projects, outdated information, inactive content

**Style requirements**: Same as Library (should already be polished)

**When to archive**:
- Projects are complete (move Project MOC and related notes)
- Information is outdated but worth keeping (e.g., "Hampton Inn 2026")
- Notes no longer actively referenced but have historical value
- After extracting evergreen insights from time-specific notes

**What NOT to archive**:
- Evergreen knowledge notes (these stay in Library forever)
- Active reference information
- MOCs you still use regularly

**Key principle**: Keep Library active and relevant by moving inactive content to Archive.

## Examples: Before and After

### Example 1: Title Improvement

**Before:**
```
Filename: Hotel Info.md
```
**Problem**: Not searchable, not descriptive, no context

**After:**
```
Filename: Hampton Inn Queen Creek - Arizona Trip 2026.md
```
**Benefit**: Discoverable by searching "Hampton" or "Arizona" or "2026", provides context

---

### Example 2: Structure Improvement

**Before:**
```markdown
# Hampton Inn Queen Creek

Check-in: 2026-03-22
Check-out: 2026-03-25
Cost: $951.97
```
**Problems**: No context, no connection to why this matters, poor discoverability

**After:**
```markdown
# Hampton Inn Queen Creek - Arizona Trip 2026

**Option 1** for [[Heartley's Hunt]] accommodation.

## Details
- Check-in: 2026-03-22
- Check-out: 2026-03-25
- Cost: $951.97
- Booking: [Link if available]

## Why This Option
Close to [[Great Wolf Lodge Scottsdale]], family-friendly amenities

## Alternatives
- [[Other Hotel Option]]

## Decision
Selected because... [to be updated when decided]
```
**Improvements**: Context in opening, linked to related project, structured for easy scanning, includes decision-making rationale

---

### Example 3: Link Improvement

**Before:**
```markdown
# Everything-claude-code

This repo has ideas I could use.

https://github.com/affaan-m/everything-claude-code
```
**Problems**: Vague title, no context about what ideas, link alone without explanation

**After:**
```markdown
# Everything Claude Code - Integration Ideas

This repository from a Claude hackathon winner demonstrates implementation
patterns for integrating [[Claude with Obsidian]]. The approach uses prompts,
tools, and automation to enhance note-taking workflows.

## Key Features to Explore
- Feature 1: Automated note creation from prompts
- Feature 2: Integration with [[Obsidian Templates]]
- Feature 3: Task management workflows

## How This Relates to My Project
Relevant to [[Claude and Obsidian (MOC)]] project goals. Particularly
interested in the prompt engineering approach and template system.

## Source
https://github.com/affaan-m/everything-claude-code

## Related
- [[Claudesidian]] - alternative bootstrap approach
- [[Claude and Obsidian (MOC)]] - main project MOC
```
**Improvements**: Descriptive title, clear context, specific features identified, linked to relevant project, explains relevance

---

### Example 4: Atomic Note Creation

**Instead of one giant note**:
```
# Disney World Trip 2026

[3000 words covering planning, budget, experiences, lessons learned, packing lists, etc.]
```

**Create atomic notes**:

1. `Disney World 2026 - Trip Planning.md` (Library)
   - Planning process and decisions

2. `Disney World - Our Family Experience 2026.md` (Library or Archive)
   - Narrative story of the trip

3. `Disney World Trip Budget 2026.md` (Library or Archive)
   - Budget breakdown and costs

4. `Disney World Best Practices from Experience.md` (Library)
   - Evergreen insights extracted: what worked, what didn't, tips for future trips

5. `Disney World Packing List Template.md` (Resources/Templates)
   - Reusable packing list

**Then link them from**: `Family Trips (MOC)` in Catalog/Areas or `Travel (MOC)` in Catalog/Topics

**Benefits**: Each note is focused, discoverable, and can be linked/updated independently. The evergreen insights stay permanently valuable even as specific trip details get archived.

---

### Example 5: Opening Sentence Impact

**Before:**
```markdown
# Lifecycle System

This is a system I use for organizing notes.
```
**Problem**: Vague, doesn't explain what makes it different

**After:**
```markdown
# Lifecycle System - Obsidian Workflow

The Lifecycle System uses workflow-based folders (Collect → Refine → Library → Archive)
instead of topic-based hierarchies, organizing notes by their development stage rather
than subject matter.
```
**Improvement**: Immediately clear what it is and what makes it unique

## Quick Reference Checklist

### Before Moving a Note from Collect → Library

- [ ] **Descriptive title** with main concept or specific context
- [ ] **Opening sentence** explains what this note is about
- [ ] **Proper headings** for sections (if longer than a paragraph)
- [ ] **Links to related concepts** using [[wikilinks]] with context
- [ ] **Added to at least one MOC** in Catalog
- [ ] **`Related:` line** added with backlinks to relevant Catalog MOCs
- [ ] **Future You will understand** this without additional context

### Before Creating a New Note

- [ ] **Search first** - Does this concept already have a note?
- [ ] **Is this atomic?** - One concept, or should it be split?
- [ ] **Can I phrase this as a standalone idea?** - Not just "notes on X"

### Before Creating a MOC

- [ ] **Do I have 3+ related notes** that need organizing?
- [ ] **Is this a Project, Area, or Topic?** - Determines Catalog subfolder placement
- [ ] **Placed in correct Catalog subfolder?** - Projects / Areas / Topics

### Before Archiving

- [ ] **Is this truly inactive?** - Not referenced anymore?
- [ ] **Have I extracted evergreen insights?** - Anything timeless that belongs in Library?
- [ ] **Any project notes that should go with it?** - Archive project MOCs when projects complete

## When to Ignore This Guide

### Don't Worry About Style When:

- **Quick capturing in Collect** - Capture first, refine later
- **Writing in Daily notes** - Journals are personal and freeform
- **Processing is urgent** - Get it done, refinement can happen later
- **The note is purely for you** and will never be linked or referenced
- **You're in flow state** - Don't break creative momentum to format

### The Guide Matters Most When:

- **Moving notes to Library** - Permanent knowledge deserves quality
- **Creating MOCs** - Organizational structure helps Future You navigate
- **Writing notes others might see** - Team wikis, shared vaults
- **Building knowledge you'll reference years from now** - Investment in your future self
- **Weekly reviews** - Batch-processing Collect notes into Library

**Remember**: Perfect is the enemy of good. It's better to have a "good enough" note in Library than a perfect note stuck in Refine. Apply the guide pragmatically.

## Evolving Your Style

### Start Simple (Week by Week)

Don't try to apply everything at once. Build habits gradually:

**Week 1: Focus on better titles**
- Practice descriptive titles for new notes in Collect
- Rename 2-3 vague titles during weekly review

**Week 2: Add opening sentences**
- When moving notes to Library, add strong opening sentences
- Ask: "Would Future Me immediately understand what this is?"

**Week 3: Practice linking**
- Add 3-5 contextual links per new Library note
- Explain why concepts connect when linking

**Week 4: Refine MOC structure**
- Add descriptions after links in existing MOCs
- Group related notes under headings
- Add "Related MOCs" sections

### Review Quarterly

Every 3 months, audit your system:

**Questions to ask**:
- Are my notes discoverable? Can I find things easily?
- Are my MOCs useful? Do they help me navigate knowledge?
- What's working well? What feels clunky?
- Which guidelines am I following naturally? Which feel forced?

**Actions to take**:
- Search for vague titles and rename them
- Identify orphan notes (no inbound/outbound links) and connect them
- Add missing notes to relevant MOCs
- Adjust this guide based on what works for your specific use

### Customize to Your Needs

**This guide serves your system, not vice versa**. If a guideline consistently feels burdensome or doesn't serve you, change it.

**Signs a guideline isn't working**:
- You avoid moving notes to Library because of formatting overhead
- You create notes outside the system to avoid requirements
- A convention feels like busywork without benefit

**What to do**:
- Simplify the guideline
- Make it optional
- Remove it entirely
- Document your alternative approach

**The goal**: Useful notes that serve Future You, not perfect adherence to rules.

## Getting Started

### Your First Steps

1. **Read through this guide once** to familiarize yourself with conventions

2. **Start with one practice** (choose what resonates):
   - Better titles for new Collect notes
   - Opening sentences when moving to Library
   - Adding contextual links

3. **Refine one existing note** as practice:
   - Pick a note from Collect with potential
   - Apply the relevant guidelines
   - Move it to Library
   - Add it to a MOC
   - Notice how it's more useful now

4. **Build gradually** over 4 weeks using the evolution roadmap above

### Integration with Weekly Review

During your weekly Lifecycle System review, incorporate style practices:

**Processing Collect**:
- Improve titles before moving to Refine or Library
- Add opening sentences to notes heading to Library
- Delete captures that aren't worth developing

**Developing Refine**:
- Check if notes are ready for Library standards
- Add links to related concepts
- Move polished notes to Library

**Maintaining Library**:
- Add new Library notes to relevant MOCs
- Spot-check recent additions for quality
- Improve any notes with vague titles

**Cleaning Archive**:
- Verify archived notes had evergreen insights extracted
- Archive completed project MOCs

### Success Indicators

You'll know the style guide is working when:

1. **You find notes faster** - Good titles enable search
2. **Links make sense** - Connections reveal themselves naturally
3. **MOCs are useful** - You actually use them to navigate knowledge
4. **Future You is grateful** - Opening old notes, you immediately understand them
5. **Weekly reviews speed up** - Clear standards make processing faster
6. **Knowledge compounds** - New notes build on and connect to existing knowledge

---

## Related

- [[Obsidian - Lifecycle System]] - The workflow system this guide supports

---

*Last updated: 2026-04-18*
