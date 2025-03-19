const express = require("express");
const app = express();

// Root route handler
app.get("/", (req, res) => {
  console.log("Detected request on root route (/)");
  res.send("Hello World!");
});

// API route handler for "/api/courses"
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// Listening on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
