import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form"); 
form.addEventListener("submit", handleSubmit); 
// console.log(form);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const delay = parseInt(form.querySelector('[name="delay"]').value, 10);
    const state = form.querySelector('[name="state"]:checked').value;
    
    // console.log(delay);
    // console.log(state);
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === `fulfilled`) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise.then(
        (result) => {
            iziToast.show({
                title: `Success`,
                message: `✅ Fulfilled promise in ${result}ms`,
                timeout: delay,
                position: 'topRight',
            });
        },
        (result) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${result}ms`,
                timeout: delay,
                position: 'topRight',
            });
        }
    );

    form.reset();

}

