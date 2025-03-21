const express = require("express");
const Joi = require("joi"); // Joi is a validation library that returns a Joi class used for input validation
const app = express();

// Middleware to parse JSON payload in POST/PUT requests
app.use(express.json());

// Initial array of example courses (sample data source)
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

// POST endpoint to add a new course
app.post("/api/courses", (req, res) => {
  // 1. basic input validation (commented out: original code)
  // if (!req.body.name || req.body.name.length < 3) {
  //   res.status(400).send("Name is required and should be minimum 3 characters.");
  //   return;
  // }

  // 2. introducing joi for validation (recommended approach)
  // Joi schema defines the expected structure and constraints of our request data
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    // Explanation: 'name' must be a string type, minimum 3 chars, and is required.
  });

  // validate the input based on our schema; returns an object containing validation details
  const result = schema.validate(req.body);
  console.log(result); // inspect Joi's returned object containing 'value' and potentially 'error'

  // Check if validation returned an error
  if (result.error) {
    // Joi provides detailed information about validation, accessible in 'details[0].message'
    res.status(400).send(result.error.details[0].message);
    return; // must return explicitly here to stop executing further code
  }

  // If input passes validation successfully
  const newCourse = { id: courses.length + 1, name: req.body.name };
  courses.push(newCourse); // add the new valid course to the courses array
  res.send(newCourse); // return the newly created object to the client
});

// Environment variable to set the listening port, default is 3000 if PORT is not set
const port = process.env.PORT || 3000;

// Start server and display message indicating the port it listens on
app.listen(port, () => console.log(`Listening on port: ${port}`));
