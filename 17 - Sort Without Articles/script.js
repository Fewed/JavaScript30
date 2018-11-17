const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const r = val => val.replace(/^(the |an |a )/i, "");
const arr = bands.sort((a,b) => r(a) > r(b) ? 1 : -1);

let ul = document.querySelector("ul");
ul.innerHTML = arr.reduce((acc,cur) => acc + `<li>${cur}</li>`, "");


