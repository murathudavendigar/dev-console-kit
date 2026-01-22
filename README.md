# Dev Console Kit

A smart, colorful, and educational logging utility designed for **React & Next.js students**. 
It helps you debug faster, understand Server/Client environments, and fix CSS layout issues instantly.

---

## Features

**Environment Detection:** Automatically labels logs as `[CLIENT]` or `[SERVER]`.

**Mentor Tips:** Provides a random "Clean Code" tip in the console on every refresh (30+ categorized tips).

**CSS X-Ray:** A "Golden Shot" feature to outline all DOM elements for layout debugging.

**Pretty Logs:** Color-coded success, error, warning, info, and debug messages.  

**Performance Tracking:** Built-in timer functions to measure execution time.

**Toggle Logging:** Enable/disable all logs for production builds.

**Smart Inspection:** Table view for objects in browser, detailed structure in terminal.  

**TypeScript Support:** Full type definitions included.
---

## Installation

```bash
npm install dev-console-kit
```
or
```bash
yarn add dev-console-kit
```

### Verify Installation

After installing, create a test file to verify:

```javascript
import Logger from 'dev-console-kit';

Logger.success("dev-console-kit is working!");
```

---

## Usage

```javascript
import Logger from 'dev-console-kit';
```

### 1. Smart Logging

```javascript
Logger.success("User logged in successfully!");
Logger.error("API Connection Failed", { error: 500 });
Logger.warning("This component is deprecated.");
Logger.info("Application started on port 3000");
Logger.debug("Detailed debugging info", { state: "loading" });
```

### 2. Performance Tracking
Measure how long operations take:

```javascript
Logger.time("API Call");
await fetchUserData();
Logger.timeEnd("API Call"); // Logs: "API Call: 245.32ms"
```

### 3. Toggle Logging
Disable all logs in production:

```javascript
// In your main entry file
if (process.env.NODE_ENV === 'production') {
  Logger.setEnabled(false);
}
```

### 4. Inspecting Data (Props, State, etc.)
Prints data in a clean table format (in browser) or detailed structure (in terminal).

```javascript
const user = { id: 1, name: "John", role: "Admin" };
Logger.inspect("User Data", user);
```

### 5. CSS Layout Debugging
Struggling with CSS? Can't see which div is overflowing? Run this function once to outline **everything** on the page.

```javascript
// Add this inside a useEffect or call it temporarily
Logger.debugLayout();
```

**Tip:** Call `Logger.debugLayout()` once, identify your layout issue, then remove the call.

---

## API Reference

### `Logger.success(msg, data?)`
Logs a success message with optional data.

### `Logger.error(msg, error?)`
Logs an error message with optional error details.

### `Logger.warning(msg)`
Logs a warning message.

### `Logger.info(msg, data?)`
Logs an informational message with optional data.

### `Logger.debug(msg, data?)`
Logs a debug message (useful for verbose logging).

### `Logger.inspect(label, object)`
Inspects and displays an object in a structured format.

### `Logger.time(label)`
Starts a performance timer with the given label.

### `Logger.timeEnd(label)`
Ends a performance timer and logs the elapsed time.

### `Logger.setEnabled(enabled)`
Enables or disables all logging. Useful for production builds.

```javascript
Logger.setEnabled(false); // Disable all logs
Logger.setEnabled(true);  // Re-enable logs
```

### `Logger.debugLayout()`
Activates CSS layout debugging mode (browser only). Outlines all DOM elements with random colors.

---

## Mentor Tips

The package includes 30+ categorized mentor tips covering:
- **React**: Hooks, state management, best practices
- **Next.js**: Server components, routing, optimization
- **CSS**: Flexbox, Grid, responsive design
- **Performance**: Optimization techniques
- **Clean Code**: Best practices and patterns
- **Debugging**: Tips and tricks

A random tip is displayed in the browser console on every refresh!

---

## TypeScript Support

This package includes TypeScript definitions. No additional `@types` package needed!

```typescript
import Logger from 'dev-console-kit';

Logger.success("Fully typed!", { id: 1 });
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

ISC License - See [LICENSE](LICENSE) file for details.

---

## Author

**Murat Hüdavendigâr Öncü**  
 [Website](https://murathudavendigar.vercel.app/)  
 [GitHub](https://github.com/murathudavendigar)

---

## Support

If you find this package helpful, please give it a ⭐️ on [GitHub](https://github.com/murathudavendigar/dev-console-kit)!

For issues and questions, visit the [Issues](https://github.com/murathudavendigar/dev-console-kit/issues) page.