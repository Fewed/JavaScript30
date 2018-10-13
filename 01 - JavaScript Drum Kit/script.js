let sounds = [...document.querySelectorAll("audio")],
    controls = [...document.querySelectorAll(".key")];

document.addEventListener("keydown", e => {
  sounds.map((sound, i) => {
    if (e.keyCode === +sound.getAttribute("data-key")) {
      controls[i].classList.add("playing");
      sound.currentTime = 0;
      sound.play();
    }
  });
});

document.addEventListener("transitionend", e => {
  controls[controls.indexOf(e.target)].classList.remove("playing");
});