/**
 * Templater User Script: connections.js
 *
 * Provides backward navigation for Daily Notes that skips gaps
 * (weekends, holidays, and other missing notes).
 *
 * Forward navigation is provided automatically through Obsidian's backlinks panel.
 */

/**
 * Get the previous daily note that actually exists
 * @param {object} tp - Templater object
 * @returns {string|null} - Basename of previous note (YYYY-MM-DD) or null
 */
function getPreviousDaily(tp) {
  const currentDate = tp.file.title; // Should be YYYY-MM-DD
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Get all markdown files in Daily/ folder
  const allFiles = tp.app.vault.getMarkdownFiles();
  const dailyFiles = allFiles.filter(f =>
    f.path.startsWith("Daily/") && dateRegex.test(f.basename)
  );

  // Sort by basename (ISO date format sorts correctly)
  dailyFiles.sort((a, b) => a.basename.localeCompare(b.basename));

  // Find all notes with dates before current date
  const previousNotes = dailyFiles.filter(f => f.basename < currentDate);

  // Return the most recent previous note
  if (previousNotes.length > 0) {
    return previousNotes[previousNotes.length - 1].basename;
  }

  return null;
}

module.exports = {
  getPreviousDaily
};
