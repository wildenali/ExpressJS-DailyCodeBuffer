const express = require("express");
const app = express();
const port = process.env.PORT || "5000";
const path = require("path");
const Joi = require("@hapi/joi");

app.use(express.json()); // ini middleware

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

app.get("/", (req, res) => {
  res.send("Helow Test");
});

app.get("/person", (req, res) => {
  res.send("This is Person Route");
});

// Pass the params
app.get("/person/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.params.name);
  console.log(req.params.age);
  res.send(req.query);
});

// Static Files
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ============ Handling HTTP ============
// GET
app.get("/api/movies", (req, res) => {
  // res.send(["Star Wars", "Star Trek", "Toy Story"]);
  res.send(movies);
});

// GET Detail
app.get("/api/movies/:id", (req, res) => {
  let movie = movies.find((apapun) => apapun.id === parseInt(req.params.id));
  if (!movie) {
    res.send(`No movie found for the id: ${req.params.id}`);
  }
  res.send(movie);
});

// CREATE
app.post("/api/movies", (req, res) => {
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

app.listen(port, () => console.log(`Listen to Port: ${port}`));
