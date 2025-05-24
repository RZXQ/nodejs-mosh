const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// Example: GET /api/courses/1
app.get("/api/courses/:id", (req, res) => {
  // Convert route parameter from string to number
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course)
    res.status(404).send("The course with the given ID was not found");

  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
