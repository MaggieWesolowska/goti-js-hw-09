import Notiflix from 'notiflix';

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
    console.log(`Notiflix.Notify.success(${position} in ${delay}ms)`);
  })
  .catch(({ position, delay }) => {
    console.log(`Notiflix.Notify.failure(${position} in ${delay}ms)`);
  });