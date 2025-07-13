const box = document.getElementById('box');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 30;
let gameInterval;

function getRandomPosition() {
  const areaRect = gameArea.getBoundingClientRect();
  const maxX = areaRect.width - 50;
  const maxY = areaRect.height - 50;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  return { x, y };
}

function moveBox() {
  const { x, y } = getRandomPosition();
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  moveBox();

  box.onclick = () => {
    if (timeLeft > 0) {
      score++;
      scoreDisplay.textContent = score;
      moveBox();
    }
  };

  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      alert("⏰ Time's up! Your score is: " + score);
    }
  }, 1000);
}

