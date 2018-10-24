let arr = [];
let code = "magic";

document.addEventListener("keydown", e => {
  arr.push(e.key);
  if (arr.length > code.length) arr.shift();
  if (arr.join("") === code) cornify_add();
});