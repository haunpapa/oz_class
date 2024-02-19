let display = document.getElementById("display_number");
let inputNumbers = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function display_input(number) {
    if (number === '+' || number === '-' || number === '*' || number === '/') {
        operator = number;
        firstNumber = inputNumbers;
        inputNumbers = '';
    } else if (number === '=') {
        secondNumber = inputNumbers;
        calculate();
    } else if (number === 'C') {
        clearAll();
    } else {
        inputNumbers += number;
    }
    display.value = inputNumbers;
}

function calculate() {
    let result;
    switch(operator) {
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            result = Number(firstNumber) / Number(secondNumber);
            break;
    }
    display.value = result;
    resetValues();
}

function clearAll() {
    inputNumbers = '';
    operator = '';
    firstNumber = '';
    secondNumber = '';
    display.value = '';
}

