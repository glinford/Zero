export function parseNaturalLanguageSearch(query: string): string {
  // Common search patterns
  const patterns = [
    // From pattern
    {
      regex: /^from\s+([^:\s]+)/i,
      transform: (match: string[]) => `from:${match[1]}`,
    },
    // To pattern
    {
      regex: /^to\s+([^:\s]+)/i,
      transform: (match: string[]) => `to:${match[1]}`,
    },
    // Subject pattern
    {
      regex: /^subject\s+([^:\s]+)/i,
      transform: (match: string[]) => `subject:${match[1]}`,
    },
    // Has attachment pattern
    {
      regex: /^has\s+(attachment|file)/i,
      transform: () => 'has:attachment',
    },
    // Is pattern (unread, read, starred)
    {
      regex: /^is\s+(unread|read|starred)/i,
      transform: (match: string[]) => `is:${match[1]}`,
    },
  ];

  // Check if query matches any pattern
  for (const pattern of patterns) {
    const match = query.match(pattern.regex);
    if (match) {
      return pattern.transform(match);
    }
  }

  return query;
}
