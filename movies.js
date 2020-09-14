const express = require("express");
const path = require("path");
const Joi = require("@hapi/joi");
const route = express.Router();

const movies = [
  {
    id: 1,
    name: "Star Wars",
  },
  {
    id: 2,
    name: "Star Trek",
  },
  {
    id: 3,
    name: "Toy Story",
  },
  {
    id: 4,
    name: "Transformers",
  },
  {
    id: 5,
    name: "Terminator",
  },
];

route.get("/", (req, res) => {
  res.send("Helow Test");
});

route.get("/person", (req, res) => {
  res.send("This is Person Route");
});

// Pass the params
route.get("/person/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.params.name);
  console.log(req.params.age);
  res.send(req.query);
});

// Static Files
route.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ============ Handling HTTP ============
// GET
route.get("/api/movies", (req, res) => {
  // res.send(["Star Wars", "Star Trek", "Toy Story"]);
  res.send(movies);
});

// GET Detail
route.get("/api/movies/:id", (req, res) => {
  let movie = movies.find((apapun) => apapun.id === parseInt(req.params.id));
  if (!movie) {
    res.send(`No movie found for the id: ${req.params.id}`);
  }
  res.send(movie);
});

// CREATE
route.post("/api/movies", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(), // minimal 3 karakter untuk name nya
  });

  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  if (!req.body.name || req.body.name.length < 3) {
    res
      .status(400)
      .send("The Name of Moview is not present or less than 3 characters");
    return;
  }

  let movie = {
    id: movies.length + 1,
    name: req.body.name,
  };
  movies.push(movie);
  res.send(movie);
});

// PUT, Update data
route.put("/api/movies/:id", (req, res) => {
  // Find the movie based on Id, If not found Throw Error
  let movie = movies.find((apapun) => apapun.id === parseInt(req.params.id));
  if (!movie) {
    res.send(`No movie found for the Id: ${req.params.id}`);
  }

  // If found need to update
  // Validation fot request
  // Once validate update the Movies
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const result = schema.validate(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // return that movie
  movie.name = req.body.name;
  res.send(movie);
});

// DELETE
route.delete("/api/movies/:id", (req, res) => {
  // Find the movie based on Id
  let movie = movies.find((apapun) => apapun.id === parseInt(req.params.id));
  if (!movie) {
    res.send(`No movie found for the Id: ${req.params.id}`);
  }

  // Remove that object from that Index
  const index = movies.indexOf(movie);
  movies.splice(index, 1); // 1 element
  res.send(movie);
});

module.exports = route;
