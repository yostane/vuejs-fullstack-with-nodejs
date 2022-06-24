const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pokemons = [
  { name: "pikashu", hp: 100 },
  { name: "salamuche", hp: 120 },
];

app.get("/api/creatures", (req, res) => {
  res.json(pokemons);
});

app.post("/api/creatures", (req, res) => {
  pokemons.push(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
