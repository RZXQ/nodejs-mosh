const express = require("express");
const app = express();
app.use(express.json());

// Courses data (sample array of objects)
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// GET method: returns array of all courses to the client
app.get("/api/courses/all", (req, res) => {
  res.send(courses);
});

// DELETE method: removes an existing course by specified ID
app.delete("/api/courses/:id", (req, res) => {
  // Find the course object matching provided ID in the URL
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  // Check if course exists; if NOT found, respond with 404 and stop further processing
  if (!course) {
    res.status(404).send("course not found");
    return;
    // Another concise way (alternative syntax):
    // if (!course) return res.status(404).send("course not found");
  }

  // Get the index of the course to be deleted in our array
  const index = courses.indexOf(course);

  // Remove the course from courses array using splice method
  const [element] = courses.splice(index, 1);

  // Send the deleted course back to the client as a confirmation
  res.send(element);
});

// Set port and start server, listening for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
