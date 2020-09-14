const express = require("express");
const app = express();
const port = process.env.PORT || "5000";
const path = require("path");

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

app.listen(port, () => console.log(`Listen to Port: ${port}`));
