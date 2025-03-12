// ===========================================================
//                        Module Importing (require)
// ===========================================================

// How 'require' resolves modules in Node.js:
// 1. Core Module (e.g., fs, path)
// 2. File or Folder (./ or ../ with relative paths)
// 3. node_modules folder (installed via npm)
const underscore = require("underscore");

// ===========================================================
//                     Underscore Package Usage
// ===========================================================

// 'contains' checks if a value exists in the array
const numbers = [1, 2, 3];
const value = 3;

console.log(underscore.contains(numbers, value)); // true
