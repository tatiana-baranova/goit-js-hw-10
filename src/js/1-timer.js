import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const btnStart = document.querySelector("[data-start]");
const datePicker = document.querySelector("#datetime-picker");
let userSelectedDate = null;
let timerId;

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
    iziToast.error({
        title: 'Warning!',
        message: 'Please choose a date in the future',
        position: 'topRight',
    });
    btnStart.disabled = true;
    } else {
    userSelectedDate = selectedDate;
    btnStart.disabled = false;
    }
},
};

flatpickr("#datetime-picker", options);

btnStart.addEventListener("click", function () {
if (userSelectedDate) {
    btnStart.disabled = true;
    datePicker.disabled = true;
    timerId = setInterval(() => {
    const deltaTime = userSelectedDate - new Date();

    
    if (deltaTime <= 0) {
        clearInterval(timerId);
        updateTimer(0, 0, 0, 0);
        iziToast.success({
        title: "Success!",
        message: "Timer has finished!",
        position: 'topRight',
        });
        datePicker.disabled = false;
        return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    updateTimer(days, hours, minutes, seconds);
    }, 1000);
}
});

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

function updateTimer(days, hours, minutes, seconds) {
document.querySelector("[data-days]").textContent = addLeadingZero(days);
document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
return String(value).padStart(2, "0");
}
