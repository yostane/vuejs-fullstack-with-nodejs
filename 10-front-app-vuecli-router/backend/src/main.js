const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/", express.static("public"));

const pokemons = [
  { name: "pikachu", hp: 100 },
  { name: "salamèche", hp: 120 },
];

app.get("/pokemons", (req, res) => {
  res.json(pokemons);
});

app.post("/pokemon", (req, res) => {
  pokemons.push(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
