/**
 * Formats a date value for display. Handles both ISO dates (2026-02-01)
 * from the CMS datetime widget and legacy strings (February 2026).
 *
 * 'long'  → "February 2026"  (article headers)
 * 'short' → "Feb 2026"       (cards, bylines)
 */
export function formatDate(value: string | undefined, style: 'long' | 'short' = 'long'): string {
  if (!value) return ''

  // Already a readable string (e.g. "February 2026", "Jan 2026")
  if (!/^\d{4}-\d{2}-\d{2}/.test(value)) return value

  const date = new Date(value + 'T00:00:00')
  if (isNaN(date.getTime())) return value

  return date.toLocaleDateString('en-GB', { month: style, year: 'numeric' })
}
