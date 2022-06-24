const express = require("express");
const getRandomNumbers = require("./helper");

const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.get("/random", (req, res) => {
  const t = getRandomNumbers(10);
  res.json(t);
});

// http://toto.com/random/10 -> /random/:nb(\d+) -> d+ -> nb est un entier
// http://toto.com/users/ux/1 -> /:main/:category/:id
// https://expressjs.com/en/guide/routing.html
app.get("/random/:nb(\\d+)", (req, res) => {
  const nb = parseInt(req.params.nb);
  const t = getRandomNumbers(nb);
  res.json(t);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
