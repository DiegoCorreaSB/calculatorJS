//darkmode
let modeContainer = document.getElementById ('modeContainer');
let mainContainer = document.getElementById ('mainContainer');
let containerCalculator = document.getElementById ('containerCalculator');
let btnNumber = document = document.getElementsByClassName ('btnNumber')

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
let firstNumber, operation, temporaryNumber, calculate = 0, secondNumber;

//numbers
function appendNumber(number){
    viewScreen.value += number;
    temporaryNumber = viewScreen.value;
    console.log(temporaryNumber);
    secondNumber = parseInt (temporaryNumber);
    
}

function setOperation(op){
    operation = op;
    console.log(firstNumber);
    if (calculate != 0){
        firstNumber = calculate;
    } else {
         firstNumber = parseInt(temporaryNumber);
     }
    viewScreen.value = '';
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

    console.log(firstNumber);
}

btnResult.onclick = () => {
    calculation()
    viewScreen.value = calculate;
}

btnReset.onclick = () => {
    viewScreen.value = '';
    operation = '';
    calculate = 0;
}


btnDelete.onclick = () => {
    
    viewScreen.value = viewScreen.value.slice(0, -1);
}

//mododark
modeContainer.addEventListener ('click', () => {
    modeContainer.classList.toggle ('darkMode');
    mainContainer.classList.toggle ('darkMode');
    containerCalculator.classList.toggle ('darkMode');
    btnNumber.classList.toggle ('darkMode');
    
})


