# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-22

### Added
- **New Logger Methods:**
  - `Logger.info()` - For informational messages
  - `Logger.debug()` - For detailed debugging output
  - `Logger.time(label)` - Start performance timer
  - `Logger.timeEnd(label)` - End performance timer and log elapsed time
  - `Logger.setEnabled(boolean)` - Toggle all logging on/off (useful for production)

### Changed
- **Mentor Tips System:**
  - Moved mentor tips to separate `mentorTips.js` module for better maintainability
  - Expanded tips from 7 to 30+ categorized tips
  - Tips now organized by category: React, Next.js, CSS, Performance, Clean Code, Debugging
  - Added helper functions: `getAllTips()`, `getRandomTip()`, `getRandomTipByCategory()`

### Improved
- All logger methods now respect the `setEnabled()` state
- Better color coding with new info (cyan) and debug (gray) styles
- Enhanced documentation with more examples and use cases
- Performance tracking with automatic formatting (ms for < 1s, s for >= 1s)
- Updated TypeScript definitions with new methods

## [1.0.0] - 2026-01-22

### Added
- Initial release of dev-console-kit
- Environment detection (Client vs Server)
- Smart logging methods: `success()`, `error()`, `warning()`
- Object inspection with `inspect()`
- CSS layout debugger with `debugLayout()`
- Random mentor tips for educational purposes
- TypeScript definitions
- Comprehensive JSDoc comments
- Examples for React and Next.js
- Full documentation

### Features
- Automatic `[CLIENT]`/`[SERVER]` environment labels
- Color-coded console output (ANSI for terminal, CSS for browser)
- Educational mentor tips
- Smart object inspection (table view in browser)
- CSS layout debugging tool
- TypeScript support out of the box

[1.1.0]: https://github.com/murathudavendigar/dev-console-kit/releases/tag/v1.1.0
[1.0.0]: https://github.com/murathudavendigar/dev-console-kit/releases/tag/v1.0.0
