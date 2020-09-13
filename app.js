const express = require("express");
const app = express();
const port = process.env.PORT || "5000";
const path = require("path");

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

app.listen(port, () => console.log(`Listen to Port: ${port}`));
