import { getRandomTip } from "./mentorTips.js";

// --- 1. Environment Detection ---
const isClient = typeof window !== "undefined";
const envLabel = isClient ? "[CLIENT]" : "[SERVER]";

// --- 2. Logger State Management ---
let isEnabled = true;
const timers = new Map();

// --- 3. Random Mentor Tips ---
// Show a tip only on the Client side (Browser console) to avoid server clutter
if (isClient) {
  const randomTip = getRandomTip();
  setTimeout(() => {
    if (isEnabled) {
      console.log(
        `%c Mentor Tip %c ${randomTip}`,
        "background: #333; color: #f0db4f; border-radius: 4px; padding: 2px 6px; font-weight: bold;",
        "color: #666; font-style: italic; font-size: 11px;",
      );
    }
  }, 500);
}

// --- 4. Styling Configuration ---
const styles = {
  label: isClient
    ? "background: #0070f3; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
    : "\x1b[36m",
  success: isClient ? "color: #28a745; font-weight: bold;" : "\x1b[32m",
  error: isClient ? "color: #dc3545; font-weight: bold;" : "\x1b[31m",
  warning: isClient ? "color: #ffc107; font-weight: bold;" : "\x1b[33m",
  info: isClient ? "color: #17a2b8; font-weight: bold;" : "\x1b[34m",
  debug: isClient ? "color: #6c757d; font-weight: bold;" : "\x1b[90m",
  reset: isClient ? "" : "\x1b[0m",
};

// --- 5. The Logger Object ---
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
    if (!isEnabled) return;
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
    if (!isEnabled) return;
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
    if (!isEnabled) return;
    isClient
      ? console.log(`%c${envLabel}%c ⚠️ ${msg}`, styles.label, styles.warning)
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.warning}⚠️ ${msg}${styles.reset}`,
        );
  },

  /**
   * Logs an informational message
   * @param {string} msg - The info message to display
   * @param {*} [data=""] - Optional additional data to log
   */
  info: (msg, data = "") => {
    if (!isEnabled) return;
    isClient
      ? console.log(`%c${envLabel}%c ${msg}`, styles.label, styles.info, data)
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.info}  ${msg}${styles.reset}`,
          data,
        );
  },

  /**
   * Logs a debug message (useful for verbose logging)
   * @param {string} msg - The debug message to display
   * @param {*} [data=""] - Optional additional data to log
   */
  debug: (msg, data = "") => {
    if (!isEnabled) return;
    isClient
      ? console.log(`%c${envLabel}%c ${msg}`, styles.label, styles.debug, data)
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.debug}  ${msg}${styles.reset}`,
          data,
        );
  },

  /**
   * Inspects and displays an object in a structured format
   * Uses console.table in browser, console.dir in Node.js
   * @param {string} label - A descriptive label for the inspection
   * @param {*} object - The object to inspect
   */
  inspect: (label, object) => {
    if (!isEnabled) return;
    if (isClient) {
      console.group(
        `%c Inspect: ${label}`,
        "color: #6f42c1; font-weight: bold;",
      );
      console.table(object);
      console.groupEnd();
    } else {
      console.log(`Inspect: ${label}`);
      console.dir(object, { depth: null, colors: true });
    }
  },

  /**
   * Starts a performance timer with the given label
   * @param {string} label - The timer label
   */
  time: (label) => {
    if (!isEnabled) return;
    const startTime = isClient ? performance.now() : Date.now();
    timers.set(label, startTime);
    Logger.debug(`Timer started: ${label}`);
  },

  /**
   * Ends a performance timer and logs the elapsed time
   * @param {string} label - The timer label (must match the label used in time())
   */
  timeEnd: (label) => {
    if (!isEnabled) return;
    if (!timers.has(label)) {
      Logger.warning(`Timer "${label}" does not exist!`);
      return;
    }

    const startTime = timers.get(label);
    const endTime = isClient ? performance.now() : Date.now();
    const elapsed = endTime - startTime;
    timers.delete(label);

    const formattedTime =
      elapsed < 1000
        ? `${elapsed.toFixed(2)}ms`
        : `${(elapsed / 1000).toFixed(2)}s`;

    isClient
      ? console.log(
          `%c${envLabel}%c ${label}: ${formattedTime}`,
          styles.label,
          styles.info,
        )
      : console.log(
          `${styles.label}${envLabel}${styles.reset} ${styles.info}  ${label}: ${formattedTime}${styles.reset}`,
        );
  },

  /**
   * Enables or disables all logging
   * @param {boolean} enabled - Whether logging should be enabled
   */
  setEnabled: (enabled) => {
    isEnabled = enabled;
    if (enabled) {
      Logger.success("Logger enabled");
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
      "%c Layout Debug Mode Activated! ",
      "background: black; color: red; font-size: 14px; font-weight: bold; padding: 4px;",
    );

    [].forEach.call(document.querySelectorAll("*"), function (a) {
      a.style.outline =
        "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
  },
};

export default Logger;
