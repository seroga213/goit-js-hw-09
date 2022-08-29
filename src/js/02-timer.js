import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr(refs.input, options);

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function onCountDownTime() {
  let timer = setInterval(() => {
    let countdown = new Date(refs.input.value) - new Date();
    refs.btnStart.disabled = true;
    if (countdown > 0) {
      let timerData = convertMs(countdown);
      refs.days.textContent = addLeadingZero(timerData.days);
      refs.hours.textContent = addLeadingZero(timerData.hours);
      refs.minutes.textContent = addLeadingZero(timerData.minutes);
      refs.seconds.textContent = addLeadingZero(timerData.seconds);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

refs.btnStart.addEventListener('click', onCountDownTime);