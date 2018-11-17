document.addEventListener("mousemove", shift);

function shift(e) {
  const text = document.querySelector("h1");
  const [x,y] = (e.target !== text) ? [e.offsetX, e.offsetY] : [e.offsetX + text.offsetLeft, e.offsetY + text.offsetTop];
  const k = 0.5;
  const [stepX, stepY] = [k*(x - screen.width/2), k*(y - screen.height/2)];
  text.style.textShadow = `${stepX}px ${stepY}px 0 yellow,
  ${-stepX}px ${stepY}px 0 rgba(255,0,0,1),
  ${stepX}px ${-stepY}px 0 rgba(0,255,0,1),
  ${-stepX}px ${-stepY}px 0 rgba(0,0,255,1)`;
}

