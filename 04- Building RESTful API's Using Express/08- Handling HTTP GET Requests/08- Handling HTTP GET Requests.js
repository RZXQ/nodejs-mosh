const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// 1. Route handler that sends a simple "Hello World" message when accessing the root URL.
app.get("/", (req, res) => res.send("Hello World"));

// 2. Route handler that returns the list of all courses.
app.get("/api/courses", (req, res) => res.send(courses));

// 3. Route handler that returns a specific course by its ID.
app.get("/api/courses/:id", (req, res) => {
  // Parse the course id from URL parameter and convert to integer.
  const course = courses.find((n) => n.id === parseInt(req.params.id));

  // If no course is found with the given ID, return a 404 status with an appropriate error message.
  if (!course)
    res.status(404).send("The course with the given ID was not found.");

  // If course is found, send it back to the client.
  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on port", port));
