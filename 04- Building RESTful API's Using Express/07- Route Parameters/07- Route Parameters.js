// ============================================
// EXPRESS INITIALIZATION
// ============================================
const express = require("express");
const app = express();

// ============================================
// ROUTE PARAMETERS EXAMPLES
// ============================================

// [1] Root Route
// Simple route returning a greeting message
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// [2] Basic API Route
// Returns a list of courses [1, 2, 3]
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

// [3] Single Route Parameter Example
// Usage: GET /api/courses/:id
// Example: GET /api/courses/1 → Returns "1"
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id); // sends back the specified 'id'
});

// [4] Multiple Route Parameters Example
// Usage: GET /api/posts/:year/:month
// Example: GET /api/posts/2018/1
// Additionally demonstrates query parameters
// Example with query string: GET /api/posts/2018/1?sortBy=name → Returns { sortBy: "name" }
app.get("/api/posts/:year/:month", (req, res) => {
  // res.send(req.params);
  res.send(req.query);
});

// ============================================
// LISTENER SETUP
// ============================================

// Start server on PORT (from environment variable or default to 3000)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

/* =================================================================
 Practical Examples (how to test routes):

 - Root route (Hello World):
   → GET http://localhost:3000/

 - Retrieve courses:
   → GET http://localhost:3000/api/courses

 - Single parameter (e.g., course ID = 2):
   → GET http://localhost:3000/api/courses/2

 - Multiple route parameters (year/month) with query string:
   → GET http://localhost:3000/api/posts/2018/1?sortBy=name
====================================================================*/
