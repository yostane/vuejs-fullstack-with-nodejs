const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const creatures = [
  { id: 0, name: "pikashu", hp: 100 },
  { id: 1, name: "salamuche", hp: 120 },
];

let currentId = 3;

app.get("/api/creatures", (req, res) => {
  res.json(creatures);
});

app.post("/api/creatures", (req, res) => {
  const creature = req.body;
  creature.id = currentId;
  currentId += 1;
  creatures.push(creature);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
