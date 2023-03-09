import Notiflix from 'notiflix';

const form = document.querySelector('form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formInput = {
    firstDelay: firstDelay.value,
    delayStep: delayStep.value,
    amount: amount.value,
  }
  createPromise(position, delay);
});

function getFormInput() {
  const formInput = {
    firstDelay: firstDelay.value,
    delayStep: delayStep.value,
    amount: amount.value,
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(Notiflix.Notify.success`(${position} in ${delay}ms)`);
  })
  .catch(({ position, delay }) => {
    console.log(Notiflix.Notify.failure`(${position} in ${delay}ms)`);
  });