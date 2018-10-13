let hands = {
  hour: document.querySelector(".hour-hand"),
  min: document.querySelector(".min-hand"),
  second: document.querySelector(".second-hand")
};

let angles = {
  hour: 0,
  min: 0,
  second: 0
};

let [hours, mins, seconds, timezoneOffset, hourBase] = [0, 0, 0, 3, 12];

function step() {
  Object.keys(angles).map(target => {
    if (angles[target] === 0) hands[target].classList.remove("hand-transition");
    hands[target].style.transform = `rotate(${angles[target] + 90}deg)`;
    if (angles[target] >= 6) hands[target].classList.add("hand-transition");
  });
}

function timeToAngle() {
  angles.second = 360 * seconds / 60;
  angles.min = 360 * mins / 60 + angles.second / 60;
  angles.hour = Math.round(100 * (360 * hours / hourBase + angles.min / 60)) / 100;
}

function loop() {
  let date = new Date();

  if (seconds !== date.getUTCSeconds()) {
    hours = date.getUTCHours();
    mins = date.getUTCMinutes();
    seconds = date.getUTCSeconds();

    hours += timezoneOffset;
    if (hours >= hourBase)  hours -= hourBase;

    timeToAngle();
    step();
  }

  requestAnimationFrame(loop);
}

loop();