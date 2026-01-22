export const mentorTips = {
  react: [
    "Don't forget: The 'useEffect' dependency array is crucial!",
    "Always use the 'key' prop when mapping lists in React.",
    "Avoid defining functions inside render unless necessary.",
    "Use useCallback for functions passed to child components.",
    "useMemo is for expensive calculations, not for everything!",
    "Conditional rendering: Use && for simple cases, ternary for if-else.",
    "Fragment (<></>) is your friend - avoid unnecessary divs.",
    "useState setter is async - don't rely on immediate value changes.",
  ],

  nextjs: [
    "'use client' is needed only for interactivity (state, effects).",
    "Server Components are default in Next.js 13+ - use them wisely!",
    "Use next/image for automatic image optimization.",
    "next/link provides client-side navigation - don't use <a> tags.",
    "API routes in Next.js run on the server - safe for secrets.",
    "Use generateMetadata for dynamic SEO in App Router.",
    "Server Actions simplify form handling without API routes.",
  ],

  css: [
    "Flexbox and Grid are your best friends. Master them.",
    "Mobile-first design: Start with mobile styles, then scale up.",
    "Use CSS variables (--custom-property) for theming.",
    "rem units for scalability, em for component-relative sizing.",
    "Avoid !important - it's a code smell. Fix specificity instead.",
    "CSS Grid for layouts, Flexbox for components.",
    "Use gap instead of margin for flex/grid spacing.",
    "Pseudo-elements (::before, ::after) reduce DOM bloat.",
  ],

  performance: [
    "Premature optimization is the root of all evil - profile first!",
    "React.lazy() + Suspense for code splitting and faster loads.",
    "Debounce expensive operations like API calls on input.",
    "Virtual scrolling for long lists (react-window, react-virtualized).",
    "Use Web Vitals to measure real user performance (CLS, LCP, FID).",
    "Memoize components with React.memo when props rarely change.",
    "Bundle analysis: Use webpack-bundle-analyzer to find bloat.",
  ],

  cleanCode: [
    "Meaningful variable names save lives.",
    "A function should do ONE thing and do it well.",
    "Comments explain WHY, not WHAT - code should be self-documenting.",
    "YAGNI: You Aren't Gonna Need It - don't over-engineer.",
    "DRY: Don't Repeat Yourself - but don't over-abstract either.",
    "Early returns reduce nesting - fail fast, succeed late.",
    "Magic numbers? Extract them as named constants.",
  ],

  debugging: [
    "Sometimes the best solution is to delete it and write it again.",
    "console.log is underrated - but console.table is better for objects.",
    "Use browser DevTools Network tab to debug API issues.",
    "React DevTools shows component hierarchy and props.",
    "Rubber duck debugging works - explain your code out loud.",
    "Binary search debugging: Comment out half, find which half fails.",
    "Read the error message completely - it often tells you the solution.",
  ],
};

/**
 * Get all tips as a flat array
 * @returns {string[]} All mentor tips
 */
export const getAllTips = () => {
  return Object.values(mentorTips).flat();
};

/**
 * Get a random tip from all categories
 * @returns {string} A random tip
 */
export const getRandomTip = () => {
  const allTips = getAllTips();
  return allTips[Math.floor(Math.random() * allTips.length)];
};

/**
 * Get a random tip from a specific category
 * @param {string} category - The category name (react, nextjs, css, performance, cleanCode, debugging)
 * @returns {string} A random tip from the specified category
 */
export const getRandomTipByCategory = (category) => {
  const categoryTips = mentorTips[category];
  if (!categoryTips) {
    console.warn(
      `Unknown category: ${category}. Available: ${Object.keys(mentorTips).join(", ")}`,
    );
    return getRandomTip();
  }
  return categoryTips[Math.floor(Math.random() * categoryTips.length)];
};
