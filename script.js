const analogHour = document.getElementById("clock-hour");
const analogMinute = document.getElementById("clock-minute");
const analogSecond = document.getElementById("clock-second");
const digitalClock = document.getElementById("clock-digital");
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

function renderClock(container) {
  let hourDegree = 0;
  let minuteDegree = 0;
  for (let i = 0; i < 12; i++) {
    const hourNumberContainer = document.createElement("div");
    const hourNumber = document.createElement("div");
    const hourMark = document.createElement("div");
    hourNumberContainer.classList.add("hour-number-container");
    hourNumber.classList.add("hour-number");
    hourMark.classList.add("hour-mark");
    hourMark.style.rotate = `${hourDegree + "deg"}`;
    hourNumber.style.rotate = `${-hourDegree - 30 + "deg"}`;
    hourNumberContainer.style.rotate = `${hourDegree + 30 + "deg"}`;
    hourNumber.innerHTML = i + 1;
    hourNumberContainer.appendChild(hourNumber);
    container.appendChild(hourMark);
    container.appendChild(hourNumberContainer);
    hourDegree += 30;
  }
  for (let i = 0; i < 60; i++) {
    // minute is 6 degrees, 4 bars between every hour, skip every 5th by adding 2x degree starting with the first
    console.log(minuteDegree);
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("minute-mark");
    minuteMark.style.rotate = `${minuteDegree + "deg"}`;
    container.appendChild(minuteMark);
    minuteDegree += 6;
  }
}

renderClock(document.getElementById("clock-face"));

function updateAnalog() {}

function updateDigital() {
  digitalClock.innerHTML = `The time is: ${hour + ":" + minute + ":" + second}`;
}

updateDigital();

setInterval(() => {
  date.setTime(Date.now());
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  updateAnalog();
  updateDigital();
}, 1000);
