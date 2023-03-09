import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const getDate = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', 'disabled');
let countdownDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    let chosenDate = new Date(selectedDates[0]);
    let now = new Date();

    if (chosenDate < now) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', 'disabled');
    } else {
      countdownDate = chosenDate;
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(getDate, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let addLeadingZero = value => value.toString().padStart(2, 0);

function updateValuesInHTML(distance) {
  const { days, hours, minutes, seconds } = convertMs(distance);
  daysCount.textContent = addLeadingZero(days);
  hoursCount.textContent = addLeadingZero(hours);
  minutesCount.textContent = addLeadingZero(minutes);
  secondsCount.textContent = addLeadingZero(seconds);
}

function checkTimerInput() {
  return (
    daysCount.textContent === '00' &&
    hoursCount.textContent === '00' &&
    minutesCount.textContent === '00' &&
    secondsCount.textContent === '00'
  );
}

startBtn.addEventListener('click', () => {
  function timeCounter() {
    let now = new Date();
    let distance = countdownDate - now;

    updateValuesInHTML(distance);

    const isTimerFinished = checkTimerInput();
    if (isTimerFinished) {
      clearInterval(setCountdown);
    }
  }

  const setCountdown = setInterval(timeCounter, 1000);
});
