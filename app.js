const express = require("express");
const app = express();
const port = process.env.PORT || "5000";
const movies = require("./movies");

app.use(express.json()); // ini middleware
app.use("", movies);
app.use("/api/movies", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.listen(port, () => console.log(`Listen to Port: ${port}`));
