const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let colorTimer;

startBtn.addEventListener('click', () => {
    colorTimer = setInterval(() => {
    const randomColor = getRandomHexColor(); 
    body.style.backgroundColor = randomColor;}, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(colorTimer);
});
