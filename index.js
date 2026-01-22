// --- 1. Environment Detection ---
const isClient = typeof window !== "undefined";
const envLabel = isClient ? "[CLIENT]" : "[SERVER]";

// --- 2. Random Mentor Tips ---
const mentorTips = [
  "⚠️ Don't forget: The 'useEffect' dependency array is crucial!",
  "💡 Tip: Always use the 'key' prop when mapping lists in React.",
  "🚀 Performance: Avoid defining functions inside render unless necessary.",
  "🧹 Clean Code: Meaningful variable names save lives.",
  "⚡ Next.js: 'use client' is needed only for interactivity (state, effects).",
  "🎨 CSS: Flexbox and Grid are your best friends. Master them.",
  "🐛 Debugging: Sometimes the best solution is to delete it and write it again.",
];

// Show a tip only on the Client side (Browser console) to avoid server clutter
if (isClient) {
  const randomTip = mentorTips[Math.floor(Math.random() * mentorTips.length)];
  setTimeout(() => {
    console.log(
      `%c Mentor Tip %c ${randomTip}`,
      "background: #333; color: #f0db4f; border-radius: 4px; padding: 2px 6px; font-weight: bold;",
      "color: #666; font-style: italic; font-size: 11px;",
    );
  }, 500);
}

// --- 3. Styling Configuration ---
const styles = {
  label: isClient
    ? "background: #0070f3; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
    : "\x1b[36m",
  success: isClient ? "color: #28a745; font-weight: bold;" : "\x1b[32m",
  error: isClient ? "color: #dc3545; font-weight: bold;" : "\x1b[31m",
  warning: isClient ? "color: #ffc107; font-weight: bold;" : "\x1b[33m",
  reset: isClient ? "" : "\x1b[0m",
};

// --- 4. The Logger Object ---
/**
 * Logger utility for React & Next.js development
 * Provides environment-aware logging with pretty formatting
 * @namespace Logger
 */
const Logger = {
  /**
   * Logs a success message with optional data
   * @param {string} msg - The success message to display
   * @param {*} [data=""] - Optional additional data to log
   */
  success: (msg, data = "") => {
    isClient
      ? console.log(
          `%c${envLabel}%c ✅ ${msg}`,
          styles.label,
          styles.success,
          data,
        )
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.success}✅ ${msg}${styles.reset}`,
          data,
        );
  },

  /**
   * Logs an error message with optional error details
   * @param {string} msg - The error message to display
   * @param {*} [error=""] - Optional error object or details to log
   */
  error: (msg, error = "") => {
    isClient
      ? console.log(
          `%c${envLabel}%c ❌ ${msg}`,
          styles.label,
          styles.error,
          error,
        )
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.error}❌ ${msg}${styles.reset}`,
          error,
        );
  },

  /**
   * Logs a warning message
   * @param {string} msg - The warning message to display
   */
  warning: (msg) => {
    isClient
      ? console.log(`%c${envLabel}%c ⚠️ ${msg}`, styles.label, styles.warning)
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.warning}⚠️ ${msg}${styles.reset}`,
        );
  },

  /**
   * Inspects and displays an object in a structured format
   * Uses console.table in browser, console.dir in Node.js
   * @param {string} label - A descriptive label for the inspection
   * @param {*} object - The object to inspect
   */
  inspect: (label, object) => {
    if (isClient) {
      console.group(
        `%c 🔍 Inspect: ${label}`,
        "color: #6f42c1; font-weight: bold;",
      );
      console.table(object);
      console.groupEnd();
    } else {
      console.log(`🔍 Inspect: ${label}`);
      console.dir(object, { depth: null, colors: true });
    }
  },

  /**
   * Activates CSS layout debugging mode (browser only)
   * Outlines all DOM elements with random colors to help identify layout issues
   * This is particularly useful for debugging CSS problems
   */
  debugLayout: () => {
    if (!isClient)
      return console.warn("debugLayout only works in the browser!");

    console.log(
      "%c 💀 Layout Debug Mode Activated! ",
      "background: black; color: red; font-size: 14px; font-weight: bold; padding: 5px;",
    );

    [].forEach.call(document.querySelectorAll("*"), function (a) {
      a.style.outline =
        "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
  },
};

export default Logger;
