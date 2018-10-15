document.addEventListener("input", e => {
  if (e.target.tagName === "INPUT") {
    document.body.style.setProperty(`--${e.target.name}`, e.target.value);
  }
});