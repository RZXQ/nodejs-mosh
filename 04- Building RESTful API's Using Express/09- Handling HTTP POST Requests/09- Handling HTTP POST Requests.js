const express = require("express");
const app = express();

// express.json() is a built-in middleware function provided by Express.
// It parses incoming requests with JSON payloads.
// When used, request body data becomes available in req.body
// (automatically parses stringified JSON into JavaScript objects).
app.use(express.json());

// Define an initial array of course objects for example data storage.
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// HTTP POST request endpoint to add a new course to the server.
// URL: "/api/courses"
// Usage: Client sends course object in request body as JSON.
app.post("/api/courses", (req, res) => {
  // Construct a new course object using:
  // 1. An id which uniquely identifies the new course (simple auto-increment based on existing array length).
  // 2. A 'name' property, obtained from the request's body.
  const course = { id: courses.length + 1, name: req.body.name };

  courses.push(course);

  // Return the newly added course object back to the client, indicating a successful creation.
  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
