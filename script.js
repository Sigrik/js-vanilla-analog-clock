const analogHour = document.getElementById("clock-hour");
const analogMinute = document.getElementById("clock-minute");
const analogSecond = document.getElementById("clock-second");
const digitalClock = document.getElementById("clock-digital");
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

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
