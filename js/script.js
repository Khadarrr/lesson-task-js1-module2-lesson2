let counter = 0;
const button = document.querySelector("button");
const countMeter = document.querySelector(".count");

button.onclick = function () {
    event.target.disabled = true;
    
    counter = 0;

const intervalId = setInterval(function () {
    counter--;
    countMeter.innerHTML = counter;

    if (counter === -20) {
        clearInterval(intervalId);
        button.disabled = false;
    }
}, 1000);

};

