const typedText = document.getElementById("typed-text");
const words = ["Desenvolvedora BackEnd"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Velocidade da digitação
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typedText.textContent = "";
  setTimeout(type, 300); // Pequena pausa antes de começar
});
