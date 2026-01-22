# Examples

This directory contains practical examples of using `dev-console-kit` in different scenarios.

## Available Examples

### 1. React Example ([react-example.jsx](./react-example.jsx))
Demonstrates how to use dev-console-kit in a standard React component:
- Logging component lifecycle events
- Inspecting state and props
- Error handling with Logger
- Using debugLayout for CSS debugging

### 2. Next.js Example ([nextjs-example.jsx](./nextjs-example.jsx))
Shows usage in Next.js App Router with both Server and Client components:
- Server-side logging (shows `[SERVER]` prefix)
- Client-side logging (shows `[CLIENT]` prefix)
- Environment-aware debugging
- Best practices for production vs development

## Running the Examples

These are demonstration files showing usage patterns. To use them in your project:

1. Install dev-console-kit in your project
2. Copy the relevant example code
3. Adapt it to your specific use case

## Key Takeaways

- **Server logs** appear in your terminal/console
- **Client logs** appear in the browser DevTools console
- Use `Logger.inspect()` for complex objects
- Use `Logger.debugLayout()` temporarily when debugging CSS
- Remove debug calls before committing to production

## Need Help?

Visit the [main README](../README.md) for full API documentation.
