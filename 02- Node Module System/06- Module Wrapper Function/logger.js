// ===========================================================
//                      Node.js Module Wrapper
// ===========================================================

// Before execution, Node.js automatically wraps your module inside:
// (function(exports, require, module, __filename, __dirname) {
//   // Your module code here
// });

// Benefits of the Module Wrapper:
// 1. Separates top-level variables from global scope.
// 2. Provides module-specific variables:
//    - `module` and `exports` for exporting module values
//    - `__filename` and `__dirname` for absolute paths

console.log(__filename);
console.log(__dirname);

// ===========================================================
//                      Module Exporting
// ===========================================================

const url = "http://mylogger.io/log";

// Basic logging function
function log(message) {
  console.log(message);
}

// ===========================================================
//                Examples of module exporting:
// ===========================================================

// 1. Exporting the entire function/object directly as a module:
module.exports = log;

// 2. Exporting the function/object as a property of the exports object:
module.exports.log = log;

// 3. Alternatively, directly assigning a named property to `exports` object:
exports.log = log;

// 4. Important note:
// The keyword `exports` is a reference to `module.exports`.
// Reassigning the `exports` reference directly will NOT EXPORT the module:
// ❌ Not allowed: exports = logMessage;
