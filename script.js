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
//create variable for the number after calculated using the functions
let answer = '';

//functions for each operator
function add (a, b){
    answer = a + b;
    display.textContent = answer;
}
function subtract (a, b){
    answer = a - b;
    display.textContent = answer;
}
function divide (a, b){
    answer = a / b;
    display.textContent = answer;
}
function multiply (a, b){
    answer = a * b;
    display.textContent = answer;
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
                calculate(integer, currentDisplay, scndInteger);
                //after it is done calculating, the first variable integer will contain the answer
                //of the calculation and the second integer variable will be set to 0 for future
                //operations
                operatorClicked = false;
                integer = answer;
                scndInteger = 0;
            }
            else{
                //show the operator clicked and turn it to true so it can be added to the second integer
                currentDisplay = operator.textContent
                display.textContent = currentDisplay;
                operatorClicked = true;
            }
        })
    })
}

//functions for the calculation
function calculate(a, operator, b){
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '÷':
            return divide(a, b);
        case '*':
            return multiply(a, b);
    }    
}

calculator();
