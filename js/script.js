let buffer = "0";
let runningTotal = 0;
let previousOperator;
const screen = document.querySelector(".screen");


function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    });
}

init();

