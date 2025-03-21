const express = require("express");
const Joi = require("joi");

const app = express();

app.use(express.json());

let courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// Function to validate input using Joi schema constraints
function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(10),
  });

  return schema.validate(course);
}

// PUT request handler to update an existing course by ID
app.put("/api/courses/:id", (req, res) => {
  // Find course by ID provided in URL parameters
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  // If the course doesn't exist, return 404 (resource not found)
  if (!course) {
    res.status(404).send("The course with the given ID was not found.");
  } else {
    // Validate request body; returns error details if validation fails
    const { error } = validateCourse(req.body);

    // If validation error exists, respond with 400 (bad request)
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    // Update course name and respond to client
    course.name = req.body.name;
    res.send(`successfully updated ID: ${course.id} with ${course.name}`);
  }
});

// GET request handler to return all courses
app.get("/api/courses/all", (req, res) => {
  res.send(courses);
});

// Set port from environment or default to 3000, and listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
