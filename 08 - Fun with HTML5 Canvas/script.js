let canv = document.querySelector("canvas");
let ctx = canv.getContext("2d");
let drawFlag = false;
let hue = 0;
let width = 1;
let wDir = 1;
const maxWidth = 50;
const step = 0.5;
let [lastX, lastY] = [0,0];

canv.width = window.innerWidth;
canv.height = window.innerHeight;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = width;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.globalCompositeOperation = "overlay";

canv.addEventListener("mousedown", e => {
  drawFlag = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canv.addEventListener("mouseup", () => drawFlag = false);
canv.addEventListener("mousemove", e => draw(e));

function draw(e) {
  if (!drawFlag) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
 
  if (width === maxWidth || width === 0) wDir *= -1;
  width += wDir * step;
  hue++;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = width;
}