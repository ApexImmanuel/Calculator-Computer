let operator = "";
let previousValue = "";
let currentValue = "";

let clear = document.querySelector("#btn-clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

numbers.forEach((number) => number.addEventListener("click", (e) => {
    handleNumber(e.target.innerText);
    currentScreen.innerText = currentValue;
}));

function handleNumber(num) {
    if (currentValue.length <= 5) {
    currentValue += num;    
    }
}

operators.forEach((op) => op.addEventListener("click", (e) => {
    handleOperator(e.target.innerText);
    previousScreen.innerText = previousValue + " " + operator;
    currentScreen.innerText = currentValue;
}));

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

clear.addEventListener("click", () => {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.innerText = "";
    currentScreen.innerText = "";
})


equal.addEventListener("click", () => {
    calculate();
    previousScreen.innerText = "";
    currentScreen.innerText = previousValue;

});

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operator === "+") {
         previousValue += currentValue;
    } else if (operator === "-") {
         previousValue -= currentValue;
    } else if (operator === "X") {
         previousValue *= currentValue;
    } else if (operator === "/") {
         previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}
function roundNumber (num) {
    return Math.round(num * 1000) / 1000;
}
