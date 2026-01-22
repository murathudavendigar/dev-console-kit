/**
 * Dev Console Kit - TypeScript Definitions
 * A smart, colorful, and educational logging utility for React & Next.js
 */

/**
 * Logger interface with various logging and debugging methods
 */
export interface Logger {
  /**
   * Logs a success message with optional data
   * @param msg - The success message to display
   * @param data - Optional additional data to log
   */
  success(msg: string, data?: any): void;

  /**
   * Logs an error message with optional error details
   * @param msg - The error message to display
   * @param error - Optional error object or details to log
   */
  error(msg: string, error?: any): void;

  /**
   * Logs a warning message
   * @param msg - The warning message to display
   */
  warning(msg: string): void;

  /**
   * Inspects and displays an object in a structured format
   * Uses console.table in browser, console.dir in Node.js
   * @param label - A descriptive label for the inspection
   * @param object - The object to inspect
   */
  inspect(label: string, object: any): void;

  /**
   * Activates CSS layout debugging mode (browser only)
   * Outlines all DOM elements with random colors to help identify layout issues
   * This is particularly useful for debugging CSS problems
   */
  debugLayout(): void;
}

declare const Logger: Logger;
export default Logger;
