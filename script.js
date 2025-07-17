document.addEventListener("DOMContentLoaded", function () {
  const text = ". Desenvolvedora Back-End ";
  const element = document.getElementById("typed-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 80);
    }
  }

  typeWriter();
});
