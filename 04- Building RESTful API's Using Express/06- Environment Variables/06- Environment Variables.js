// Express Server Setup
const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/api/courses", (req, res) => res.send([1, 2, 3]));

// Port Configuration
const port = process.env.port || 3000; // Fallback to 3000 if env var not set

// Server Start
app.listen(port, () => console.log(`Listening on port ${port}`));

// Note: On Mac, set port with `export port=5001`
