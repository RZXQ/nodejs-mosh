// ===========================================================
//                         Path Module
// ===========================================================

// The `path` module in Node.js provides utilities for working with file and directory paths.
// It helps handle path operations in a cross-platform way, avoiding issues with OS-specific differences.
const path = require("path");

// ===========================================================
//                   Parsing File Path Information
// ===========================================================

// `path.parse(__filename)` extracts detailed information about the current file's path.
// This method returns an object containing useful properties:
// - root: The root directory (e.g., '/' on Unix, 'C:\\' on Windows)
// - dir: The full directory path of the file
// - base: The file name including extension
// - ext: The file extension (e.g., '.js')
// - name: The file name without extension
const pathObject = path.parse(__filename);

// Logging the parsed object to see the extracted path details
console.log(pathObject);

// ===========================================================
//                   Why Use the Path Module?
// ===========================================================

// 1. **Cross-Platform Compatibility**
//    - Different operating systems use different path separators (e.g., `/` on Unix vs `\` on Windows).
//    - The `path` module abstracts these differences, ensuring consistent path handling.

// 2. **Avoiding Hardcoded Paths**
//    - Instead of manually concatenating strings to construct file paths, `path` provides built-in methods.
//    - This improves code maintainability and prevents errors caused by incorrect separators.

// 3. **File Path Manipulation**
//    - You can extract file names, extensions, and directories dynamically.
//    - Useful when working with file systems, logging, or file-based configurations.

// 4. **Security & Readability**
//    - Using `path` functions ensures paths are correctly resolved and prevents common errors.
//    - Code is easier to read compared to manually handling string-based paths.
