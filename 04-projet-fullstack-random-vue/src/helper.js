function getRandom(max, min) {
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
}

function getRandomNumbers(nb) {
  const numbers = [];
  for (let i = 0; i < nb; i++) {
    numbers.push(getRandom(3, 17));
  }
  return numbers;
}

// permet d'utiliser la fonction depuis main.js
module.exports = getRandomNumbers;

// recette de cuisine -> function cuisinerChoucroute(nbPersonnes)
// cuisinerChoucroute -> passer les étapes de la recette (les instructions)
// cuisinerChoucroute(2) -> le plat pour 2 personnes
