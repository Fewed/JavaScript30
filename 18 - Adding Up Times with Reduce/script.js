const els = [...document.querySelectorAll("[data-time]")];
const time = els.map(item => {
  const val = item.dataset.time.split(":");
  return 60*val[0] + +val[1];
}).reduce((acc,cur) => acc + cur, 0);

const h = Math.floor(time / 3600);
const s = time % 60;
const m = (time - s)/60 - 60*h;

console.log(h,m,s);
