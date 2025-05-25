//put all the operator buttons in a variable
const allOperators = document.querySelectorAll(".operator");
//put all the numbers in a variable
const allNumbers = document.querySelectorAll(".numbers");
//display the numbers on the html
let display = document.querySelector(".display");
display.textContent = 0; // the default set to 0

//create variable to save the numbers
let integer = '';
let scndInteger = '';
let currentDisplay = '';
let operatorClicked = false;

//functions for each operator
function add (a, b){
    return a + b;
}
function subtract (a, b){
    return a - b;
}
function divide (a, b){
    return a / b;
}
function multiply (a, b){
    return a * b;
}

function calculator(){
    //listen for clicks on each number to display in the html
    allNumbers.forEach(function(number){
        number.addEventListener("click", function(){
            if (operatorClicked == false){
                integer += number.textContent;
                display.textContent = integer;
                integer = Number(integer); //change to integer for later functions
            }
            else{
                scndInteger += number.textContent;
                display.textContent = scndInteger;
                scndInteger = Number(scndInteger); //change to integer for later functions
            }
        })
    })
    //display operator on the calculator
    allOperators.forEach(function(operator){
        operator.addEventListener("click", function(){
            if (operator.textContent == '='){
                console.log(calculate(integer, currentDisplay, scndInteger));
            }
            else{
                currentDisplay = operator.textContent
                display.textContent = currentDisplay;
                operatorClicked = true;
            }
        })
    })
}
function calculate(a, operator, b){
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
    }    
}

calculator();
