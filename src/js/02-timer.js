import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

console.log('asdfasd')


const refs = {
    dateTimeEl: document.getElementById('datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    daysText: document.querySelector('span[data-days]'),
    hoursText: document.querySelector('span[data-hours]'),
    minutesText: document.querySelector('span[data-minutes]'),
    secondsText: document.querySelector('span[data-seconds]'),
}

refs.btnStart.disabled = true;

let timePickUser = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timePickUser = selectedDates[0]

    if(options.defaultDate > timePickUser) {
        Notify.warning('Please choose a date in the future');
          refs.btnStart.disabled = true;
          return
      };

        refs.btnStart.disabled = false;

        return timePickUser
    },
  };


function timer (time) {
    const intervalTimerId = setInterval(() => {
        const result = time - Date.now()
        const convertTime = convertMs(result)

        refs.daysText.textContent = addLeadingZero(convertTime.days)
        refs.hoursText.textContent = addLeadingZero(convertTime.hours)
        refs.minutesText.textContent = addLeadingZero(convertTime.minutes)
        refs.secondsText.textContent = addLeadingZero(convertTime.seconds)
        if (result < 1000) {
            clearInterval(intervalTimerId)
        }

    },1000)
  }

let calendar = flatpickr(refs.dateTimeEl, options)


refs.btnStart.addEventListener('click',() => {
    timer(timePickUser)
    refs.btnStart.disabled = true
});


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function addLeadingZero (value) {
    const convertToString = `${value}`
     return convertToString.padStart(2,0)
   }
 
