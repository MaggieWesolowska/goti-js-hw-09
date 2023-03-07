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

function Countdown() {
    days = counter--;
    hours = counter--;
    minutes = counter--;
    seconds = counter--;
};

