function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let imgs = [...document.querySelectorAll("img")];

function slide() {
  imgs.map(img => {
    let pos = document.documentElement.scrollTop, 
        imgY = img.offsetTop, 
        winH = window.innerHeight, 
        imgH = img.height;
    if (pos > imgY - (winH + imgH)/2 && pos < imgY) img.classList.add("active");
    else img.classList.remove("active");
  });
}

document.addEventListener("scroll", debounce(slide));