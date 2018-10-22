let boxes = [...document.querySelectorAll("input")];
let isShifted = false;

document.addEventListener("keydown", e => { if (e.shiftKey) isShifted = true });
document.addEventListener("keyup", e => { if (e.shiftKey) isShifted = false });

document.addEventListener("input", e => {
  if (e.target.checked && isShifted) {
    let bounds = boxes.filter(item => item.checked).map(item => boxes.indexOf(item));
    for (let i = bounds[0]; i < bounds[bounds.length-1]; i++) boxes[i].checked = true;
  }
});
