const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
let time = 0;
let score = 0;
const colors = [
  "darkblue",
  "orange",
  "aqua",
  "indigo",
  "lime",
  "white",
  "mintcream",
  "orangered",
];

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.remove();
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const cirlce = document.createElement("div");
  const color = getRandomColor();
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  cirlce.classList.add("circle");
  cirlce.style.width = `${size}px`;
  cirlce.style.height = `${size}px`;
  cirlce.style.top = `${y}px`;
  cirlce.style.left = `${x}px`;
  cirlce.style.background = color;

  board.append(cirlce);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
