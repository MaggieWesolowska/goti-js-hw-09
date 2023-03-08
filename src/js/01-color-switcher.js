const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let colorTimer;

const assignBodyColor = () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
}

startBtn.addEventListener('click', () => {
    colorTimer = setInterval(assignBodyColor, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(colorTimer);
});
