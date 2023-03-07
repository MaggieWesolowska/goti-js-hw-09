import '../css/timer-styles.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const getDate = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', () => {

});

const fp = flatpickr(getDate, () => {
    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          console.log(selectedDates[0]);
        },
      };
  });

let countDownDate = new Date().getTime();

const setCountdown = setInterval(function() {
  let now = new Date().getTime();
  let timeDistance = countDownDate - now;
  
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

  if (timeDistance < 0) {
    clearInterval(setCountdown);
  }
}, 1000);

