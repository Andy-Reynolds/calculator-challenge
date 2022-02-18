// Variables
const allButtons = document.getElementsByClassName("buttons");
const numberButtons = document.getElementsByClassName("buttons__number");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("back");
const operatorButtons = document.querySelectorAll(".buttons__operator");
const currentInput = document.getElementById("current-input");
const finalResult = document.getElementById("final-result");
const equalsButton = document.getElementById("equals");

let currentNumber = "";
let operator = "";
let secondaryNumber = 0;
let storedNumber = 0;
let sum = 0;



// Functions


// Adds clicked number to display and updates currentNumber
const onNumberButtonClick = (event) => {
  finalResult.innerText = "";
  const displayedButton = event.target.innerText;
  currentNumber = currentInput.innerText += displayedButton;
};


// Stores and highlights clicked operator and clears display
const onOperatorButtonClick = (event) => {
  currentInput.innerText = "";
  finalResult.innerText = "";

  operator = event.target.value;

  if (currentNumber) {
    storedNumber = currentNumber;
    currentNumber = "";
  }

  for (let index = 0; index < operatorButtons.length; index++) {
    operatorButtons[index].classList.remove('active');
  };

  event.target.classList.add("active");

};


// Clears display and resets number and operator variables
const onClearButtonClick = (event) => {
  currentInput.innerText = "";
  finalResult.innerText = "";
  currentNumber = "";
  operator = "";
  secondaryNumber = "";
  storedNumber = 0;
  sum = 0;

  for (let index = 0; index < operatorButtons.length; index++) {
    operatorButtons[index].classList.remove('active');
  };
};


// Clears one character from display
const onBackButtonClick = (event) => {
  const displayedButton = event.target.innerText;
  currentInput.innerText = currentInput.innerText.slice(0,-1);
  currentNumber = currentInput.innerText
};


// Equals button function
const onEqualsButtonClick = (event) => {
  switch(operator) {
    case "add": sum = parseFloat(storedNumber) + parseFloat(currentNumber);
    break;
    case "minus": sum = parseFloat(storedNumber) - parseFloat(currentNumber);
    break;
    case "multiply": sum = parseFloat(storedNumber) * parseFloat(currentNumber);
    break;
    case "divide": sum = parseFloat(storedNumber) / parseFloat(currentNumber);
    break;
    case "percent": sum = (parseFloat(storedNumber)/100) * parseFloat(currentNumber);
    break;
    case "" : sum = parseFloat(currentNumber);
  }

  currentInput.innerText = "";
  finalResult.innerText = sum
  currentNumber = sum;

  for (let index = 0; index < operatorButtons.length; index++) {
    operatorButtons[index].classList.remove('active');
  };
};



// Logic


// Calls onNumberButtonClick function when number is clicked
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", onNumberButtonClick);
}

// Calls onOperatorButtonClick function when operator is clicked
for (let index = 0; index < operatorButtons.length; index++) {
  operatorButtons[index].addEventListener("click", onOperatorButtonClick);
}

// Calls onClearButtonClick function when AC is clicked
clearButton.addEventListener("click", onClearButtonClick);

// Calls onBackButtonClick function when back is clicked
backButton.addEventListener("click", onBackButtonClick);

// Calls onEqualsButtonClick function when equals is clicked
equalsButton.addEventListener("click", onEqualsButtonClick);