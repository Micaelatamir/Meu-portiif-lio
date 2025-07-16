const typedText = document.querySelector('.typed-text');
const text = typedText.textContent;
typedText.textContent = '';
let index = 0;

function typeText() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
