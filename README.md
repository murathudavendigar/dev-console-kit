# Dev Console Kit

A smart, colorful, and educational logging utility designed for **React & Next.js students**. 
It helps you debug faster, understand Server/Client environments, and fix CSS layout issues instantly.

---

## Features

**Environment Detection:** Automatically labels logs as `[CLIENT]` or `[SERVER]`.

**Mentor Tips:** Provides a random "Clean Code" tip in the console on every refresh.

**CSS X-Ray:** A "Golden Shot" feature to outline all DOM elements for layout debugging.

**Pretty Logs:** Color-coded success, error, and warning messages.  

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
```

### 2. Inspecting Data (Props, State, etc.)
Prints data in a clean table format (in browser) or detailed structure (in terminal).

```javascript
const user = { id: 1, name: "John", role: "Admin" };
Logger.inspect("User Data", user);
```

### 3. CSS Layout Debugging
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

### `Logger.inspect(label, object)`
Inspects and displays an object in a structured format.

### `Logger.debugLayout()`
Activates CSS layout debugging mode (browser only). Outlines all DOM elements with random colors.

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