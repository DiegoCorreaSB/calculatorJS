//Numbers

//Operators
const btnReset = document.getElementById ('btnReset');
const btnDelete = document.getElementById ('btnDelete');
const btnDivision = document.getElementById ('btnDivision');
const btnMultiplication = document.getElementById ('btnMultiplication');
const btnSubtraction = document.getElementById ('btnSubtraction');
const btnSum = document.getElementById ('btnSum');
const btnResult = document.getElementById ('btnResult');

//view
let viewScreen = document.getElementById ('viewScreen');
let firstNumber, operation, temporaryNumber, calculate, secondNumber;

//numbers
function appendNumber(number){
    viewScreen.value += number;
    temporaryNumber = viewScreen.value
    console.log(temporaryNumber);
    secondNumber = parseInt (temporaryNumber)
    
}

function setOperation(op){
    operation = op
    firstNumber = parseInt(temporaryNumber)
    console.log(firstNumber);
    
    viewScreen.value = ''
}

function calculation() {
    switch (operation) {
        case '+':
            calculate = firstNumber + secondNumber;
            break;
        case '-':
            calculate = firstNumber - secondNumber;
            break;
        case '*':
            calculate = firstNumber * secondNumber;
            break;
        case '/':
            calculate = firstNumber / secondNumber;
            break;
        default:
            return;
    }

}

btnResult.onclick = () => {
    calculation()
    viewScreen.value = calculate;
}

btnReset.onclick = () => {
    viewScreen.value = ''
    operation = ''
}


btnDelete.onclick = () => {
    
    viewScreen.value = viewScreen.value.slice(0, -1);
}


