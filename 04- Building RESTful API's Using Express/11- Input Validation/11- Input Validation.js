// JSON schema validation
const express = require("express");
// Import Joi for input validation
const Joi = require("joi");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/api/courses", (req, res) => res.send(courses));

app.post("/api/courses", (req, res) => {
  // Define validation schema with Joi
  // - name: must be a string, at least 3 characters, and is required
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  // Validate request body against schema
  // Destructure to get only the error from validation result
  const { error } = schema.validate(req.body);

  // If validation fails, return 400 Bad Request with error message
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
