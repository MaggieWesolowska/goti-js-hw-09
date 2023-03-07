import '../css/timer-styles.css';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const getDate = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.addEventListener('click',() =>{

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
      let countDownDate = new Date().getTime();
  let now = new Date().getTime();
  if (countDownDate <= now) {
    Notiflix.Notify.warning('Please choose a date in the future');
  } else {
    setCountdown();
  }
  });
  
const setCountdown = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  
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
  };
    document.querySelector('[data-days]').innerHTML = days;
    document.querySelector('[data-hours]').innerHTML = hours;
    document.querySelector('[data-minutes]').innerHTML = minutes;
    document.querySelector('[data-seconds]').innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(setCountdown);
  }
}, 1000);

