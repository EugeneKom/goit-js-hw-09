import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  formEl: document.querySelector('form'),
  firstDelayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
}

let firstDelay = 0;
let delayStep = 0;
let amountPromises = 0;


let positionPromises = 1;



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject) => {
    if (shouldResolve) {
      // Fulfill
      resolve({position,delay})
    } else {
      // Reject
      reject({position, delay})
    }
  
  })
}

refs.formEl.addEventListener('submit', (evt)=> {
  evt.preventDefault()

  firstDelay = +refs.firstDelayInput.value
  delayStep = +refs.stepInput.value
  amountPromises = +refs.amountInput.value

  onClickStartPomises(firstDelay,amountPromises)
})


function onClickStartPomises(time,count) {

  if (count === 0) {
    return
  }
  setTimeout(()=>{
    createPromise(positionPromises, time).then(({ position, delay }) => {
      Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    positionPromises +=1
    time += delayStep
    count -= 1
    
    onClickStartPomises(time,count)
  },time)
}




