let player = document.querySelector("video"),
    btnPlay = document.querySelector(".player__button"),
    barVolume = document.querySelector("input[name='volume']"),
    barSpeed = document.querySelector("input[name='playbackRate']"),
    btns = [...document.querySelectorAll(".player__button")],
    barProgress = document.querySelector(".progress__filled"),
    barTime = document.querySelector(".progress"),
    isDragging = false;

barVolume.addEventListener("input", () => player.volume = barVolume.value);

barSpeed.addEventListener("input", () => player.playbackRate = barSpeed.value);

document.addEventListener("click", e => {
  if (e.target === btnPlay || e.target === player) {
    if (player.paused) {
      btnPlay.textContent = "►";
      player.play();
    }
    else {
      btnPlay.textContent = "❚ ❚";
      player.pause();
    }
  }

  if (e.target.getAttribute("data-skip") !== null) {
    player.currentTime += +e.target.getAttribute("data-skip");
  }
});

player.addEventListener("timeupdate", () => {
  barProgress.style.flexBasis = `${100 * player.currentTime / player.duration}%`;
});

barTime.addEventListener("mousedown", e => {
  isDragging = true;
  player.currentTime = player.duration * e.offsetX / 640;
  barProgress.style.flexBasis = `${100 * player.currentTime / player.duration}%`;
});

barTime.addEventListener("mouseup", e => {
  isDragging = false;
});

barTime.addEventListener("mousemove", e => {
  if (isDragging) {
    player.currentTime = player.duration * e.offsetX / barTime.offsetWidth;
    barProgress.style.flexBasis = `${100 * player.currentTime / player.duration}%`;
  }
});

player.addEventListener("dblclick", player.webkitRequestFullScreen);


function init() {
  player.volume = barVolume.value;
  player.playbackRate = barSpeed.value;
  btnPlay.textContent = "❚ ❚";
}

init();