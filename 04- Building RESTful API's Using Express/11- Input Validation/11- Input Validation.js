// JSON schema validation
const express = require("express");
// Import Zod for input validation - correct import is { z }
const { z } = require("zod");

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
  // Define validation schema with Zod
  const schema = z.object({
    // With Zod, .required() is unnecessary as fields are required by default
    name: z.string().min(3),
  });

  try {
    // Zod's parse method throws an error if validation fails
    // It doesn't return an object with an error property
    const validData = schema.parse(req.body);

    const course = {
      id: courses.length + 1,
      name: validData.name,
    };
    courses.push(course);
    res.send(course);
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      console.log(error);
      res.status(400).send(error.errors[0].message);
    } else {
      res.status(500).send("An unexpected error occurred");
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
