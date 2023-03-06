const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let colorSwitcher;

startBtn.addEventListener('click', () => {
   colorSwitcher = setInterval(() => {
    (getRandomHexColor)}, 1000);
   return body.style.backgroundColor === colorSwitcher;
});

stopBtn.addEventListener('click', () => {
    clearInterval(colorSwitcher);
});
