// create functions for adding, subtracting, multiplying, and dividing
// the calculator operation will consist of a number, an operator, and another number. Create three variables for each of the parts of the calculators operation
// create a new function 'operate' that takes an operator and 2 numbers and then calls one of the operation functions above
// create a function that populates the display when you click the number buttons, you should be storing the display value in a variable somewhere

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let display = document.querySelector(".calc-screen");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalsButton = document.querySelector(".equals");
let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    displayValue = "";
    display.textContent = displayValue;
});

// if number is clicked, assign to the first number variable
// if operator is clicked, assign to the operator variable

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        display.textContent = displayValue;
        console.log(displayValue.length);
        if(displayValue.length >= 9){
            display.textContent = "Error";
        }
    });
    
});
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = displayValue;
        displayValue = "";
        operator = button.textContent;
    });
}
);

equalsButton.addEventListener("click", () => {
    secondNumber = displayValue;
    displayValue = "";
    display.textContent = operate(operator, firstNumber, secondNumber);
});