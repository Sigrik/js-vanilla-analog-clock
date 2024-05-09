const analogHourHand = document.createElement("div");
const analogMinuteHand = document.createElement("div");
const analogSecondHand = document.createElement("div");
const analogClockMiddle = document.createElement("div");
const analogClockMiddleRed = document.createElement("div");
const analogClockFace = document.createElement("div");
const digitalClock = document.getElementById("clock-digital");
const date = new Date();
let second = date.getSeconds();
let minute = date.getMinutes();
let hour = date.getHours();
let secondDegree = second * 6;
let minuteDegree = minute * 6;
let hourDegree = hour * 30 + minuteDegree / 12;
analogHourHand.classList.add("hour-hand");
analogMinuteHand.classList.add("minute-hand");
analogSecondHand.classList.add("second-hand");
analogClockFace.classList.add("clock-face");
analogClockMiddle.classList.add("clock-middle");
analogClockMiddleRed.classList.add("clock-middle-red");

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
    analogClockFace.appendChild(hourMark);
    analogClockFace.appendChild(hourNumberContainer);
    hourDegree += 30;
  }
  for (let i = 0; i < 60; i++) {
    const minuteMark = document.createElement("div");
    minuteMark.classList.add("minute-mark");
    minuteMark.style.rotate = `${minuteDegree + "deg"}`;
    analogClockFace.appendChild(minuteMark);
    minuteDegree += 6;
  }
  analogClockFace.appendChild(analogClockMiddle);
  analogClockFace.appendChild(analogClockMiddleRed);
  analogClockFace.appendChild(analogHourHand);
  analogClockFace.appendChild(analogMinuteHand);
  analogClockFace.appendChild(analogSecondHand);
  container.appendChild(analogClockFace);
}

renderClock(document.getElementById("main"));

function updateAnalog() {
  analogSecondHand.style.rotate = `${secondDegree + "deg"}`;
  analogMinuteHand.style.rotate = `${minuteDegree + "deg"}`;
  analogHourHand.style.rotate = `${hourDegree + "deg"}`;
  secondDegree = second * 6 + 6;
  minuteDegree = minute * 6;
  hourDegree = hour * 30 + minuteDegree / 12;
}

function updateDigital() {
  digitalClock.innerHTML = `The time is: ${hour + ":" + minute + ":" + second}`;
}

updateAnalog();
updateDigital();

function runInterval() {
  const startTime = performance.now();
  date.setTime(Date.now());
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  updateAnalog();
  updateDigital();

  function nextInterval() {
    const elapsedTime = performance.now() - startTime;
    if (elapsedTime >= 1000) {
      runInterval();
    } else {
      requestAnimationFrame(nextInterval);
    }
  }
  requestAnimationFrame(nextInterval);
}

runInterval();
