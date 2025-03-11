// ===========================================================
//                      File System (fs) Module
// ===========================================================

const fs = require("fs");

// ===========================================================
//                      Synchronous vs Asynchronous Methods
// ===========================================================

// Sync methods (e.g., readdirSync) are blocking; avoid in production, use async methods (e.g., readdir) instead
const filesSync = fs.readdirSync("./");
console.log(filesSync);

// Async method with callback as second parameter
const filesAsync = fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

// ===========================================================
//                      Understanding Callbacks
// ===========================================================

/*
Callback Details:
- What is a Callback?
  A callback is a function you pass to an async method (like readdir). It’s executed later, after the operation completes.

- When is the Callback Called?
  The callback runs AFTER Node.js finishes the async task (e.g., reading the directory). Node.js starts the operation, moves on to other code, and calls your callback when done.

- Parameters in the Callback:
  - `err`: Node.js sets this to an error object if something fails (e.g., directory not found). If no error, it’s null.
  - `files`: Node.js sets this to the result (array of file names) if the operation succeeds.

- Who Passes Values?
  Node.js performs the operation and passes the results to your callback:
    - If there’s an error, Node.js gives `err` a value and `files` is undefined.
    - If successful, Node.js gives `files` the result and `err` is null.
  Your code just decides what to do with these values.

- Why Use Callbacks?
  Async methods with callbacks keep your app responsive by not blocking execution while waiting for slow operations like file reading.
*/
