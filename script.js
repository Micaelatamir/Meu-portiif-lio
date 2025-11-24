// typing-like highlight effect for the code block (visual only)
document.addEventListener("DOMContentLoaded", () => {
  const codeBlock = document.getElementById("codeBlock");
  if (!codeBlock) return;

  const text = codeBlock.textContent.trim();
  // split into lines then reveal line by line
  const lines = text.split("\n");
  codeBlock.innerHTML = ""; // clear
  lines.forEach((line, i) => {
    const lineEl = document.createElement("div");
    lineEl.className = "code-line";
    lineEl.style.opacity = 0;
    lineEl.textContent = line;
    codeBlock.appendChild(lineEl);
    // staggered reveal
    setTimeout(() => {
      lineEl.style.transition = "opacity 420ms ease, transform 420ms ease";
      lineEl.style.opacity = 1;
      lineEl.style.transform = "translateY(0)";
    }, 160 * i);
  });
});
