// DOMContentLoaded => au chargement de la page
document.addEventListener("DOMContentLoaded", async () => {});

async function retreiveNumbers() {
  const response = await fetch("/random");
  const numbers = await response.json();
  // numbers -> [10, 12, 3, ...]

  const contentElement = document.getElementById("content");
  contentElement.innerText = numbers.toString();

  const listElement = document.getElementById("contentList");
  listElement.innerHTML = "";
  const colors = ["red", "blue", "green"];
  const emojis = ["🙄", "😫", "🔥", "😍"];
  for (const number of numbers) {
    // le modulo % permet de toujours rester dans les bornes du tableau
    const style = `style='color:${colors[number % colors.length]}'`;
    const emoji = emojis[number % emojis.length];
    listElement.innerHTML += `<li ${style}>${emoji} ${number}</li>`;
  }
}
