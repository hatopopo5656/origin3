let inputNumber = '0';
let previousNumber = '';
let operator ='';
let resetDisplay = false;

const display =document.getElementById('display');

function pushNumber(number){
    if (resetDisplay){
        inputNumber = '';
        resetDisplay =false;
    }
    if (number === '.' && inputNumber.includes('.')){
        return;
    }
    if (inputNumber === '0' && number !== '.'){
        if (number === '0'|| number === '00'){
            return;
        }
        inputNumber = number;
    }else{
        inputNumber += number;
    }
    updateDisplay();
}

function pushOperator(op) {
    if (operator !== '' && inputNumber === ''){
        operator = op;
        updateDisplay();
        return;
    }
    if (operator !== '' && !resetDisplay){
        calculate();
    }
    previousNumber = inputNumber;
    operator = op;
    resetDisplay = true;

    inputNumber = '';
    updateDisplay();
}
function calculate() {
    if (operator === '' || previousNumber === '') {
        return;
    }
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(inputNumber);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('0で割れません');
                clearAll();
                return;
            }
            result = prev / current;
            break;
    }
    operator= '';
    previousNumber= '';
    inputNumber = result.toString();
    resetDisplay = true;
    updateDisplay();
}
function clearAll() {
    inputNumber = '0';
    previousNumber = '';
    operator = '';
    resetDisplay = false;
    display.value = inputNumber;
}

function updateDisplay(){
    let symbol = operator;
    if (operator === '*') symbol = '×';
    if (operator === '/') symbol = '÷';

    if (operator === '' && previousNumber === ''){
        display.value = inputNumber;
        return;
    }

    if(operator !== ''){
        display.value = previousNumber +' '+ symbol +' '+ inputNumber;
    } else {
        display.value = inputNumber;
    }
}