# X Sensitive Reply Filter

A Chrome extension that helps you hide unwanted replies on X (Twitter) based on keywords you specify.

## Features

- 🔍 Filter replies containing specific keywords
- ✏️ Easy-to-use interface for managing keywords
- 💾 Automatically saves your keywords across sessions
- 🔄 Real-time filtering without page refresh
- 🔒 Privacy-focused: all data stored locally in your browser

## Installation

### From Chrome Web Store
1. Preparing

### From Source (Developer Mode)
1. Clone this repository or download the ZIP file
```
git clone https://github.com/shlk20/x-sensitive-reply-filter.git
```
2. Install dependencies and build
```
npm install
npm run build
```
3. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - Click "Load unpacked"
   - Select the extension directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. Add keywords you want to filter:
   - Type a keyword in the input field
   - Click "Add Keyword" or press Enter
   - The keyword will appear in the list below

3. Remove keywords:
   - Click the "Delete" button next to any keyword you want to remove

4. Visit X/Twitter:
   - Replies containing your specified keywords will be automatically hidden
   - Changes take effect immediately

## Development

This extension is built with TypeScript. To set up the development environment:

1. Install dependencies:
```
npm install
```
2. Watch for changes:
```
npm run watch
```
3. Make your changes
4. Build for production:
```
npm run build
```
## Project Structure
```
x-reply-filter/
├── src/
│ ├── popup.ts # Popup UI logic
│ └── content.ts # Content script for X/Twitter
├── dist/ # Compiled JavaScript
├── popup.html # Popup UI layout
├── manifest.json # Extension manifest
└── tsconfig.json # TypeScript configuration
```
## Privacy

- All keywords are stored locally in your browser using Chrome's storage API
- No data is sent to external servers
- No tracking or analytics
- No personal data collection

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions:
- Open an issue on GitHub

## Acknowledgments

- Built with TypeScript
- Uses Chrome Extension Manifest V3