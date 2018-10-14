let img = document.querySelector("img"),
    span = document.querySelector("span");

function posToFilter() {
  let controls = {
    blur: document.querySelector("input#blur").value,
    size: document.querySelector("input#spacing").value,
    color: document.querySelector("input#base").value
  };

  img.style.filter = `blur(${controls.blur}px)`;
  img.style.padding = `${controls.size}px`;
  span.style.color = img.style.backgroundColor = controls.color;
}

document.addEventListener("input", e => {
  if (e.target.tagName === "INPUT") posToFilter();
});

posToFilter();
