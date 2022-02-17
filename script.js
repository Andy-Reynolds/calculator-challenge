// Variables
const allButtons = document.getElementsByClassName("buttons");
const numberButtons = document.getElementsByClassName("buttons__number");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("back");
const operatorButtons = document.getElementsByClassName("buttons__operator");
const currentInput = document.getElementById("current-input");
const finalResult = document.getElementById("final-result");
const equalsButton = document.getElementById("equals");
const percentButton = document.getElementById("percent");

let currentNumber = 0;
let operator = "";
let secondaryNumber = 0;
let storedNumber = 0;
let sum = 0;

// Functions


// Adds clicked number to display
const onNumberButtonClick = (event) => {
  finalResult.innerText = "";
  const displayedButton = event.target.innerText;
  console.log(displayedButton);
  console.log(currentNumber);
  // if (displayedButton == Number) {
    // currentInput.innerText = "";
    currentNumber = currentInput.innerText += displayedButton;
  // } else {
  //   currentNumber = currentInput.innerText += displayedButton;
  // }
  console.log(currentNumber);
};

// Adds clicked operator to display
const onOperatorButtonClick = (event) => {
  currentInput.innerText = "";
  finalResult.innerText = "";
  const displayedButton = event.target.innerText;
  currentInput.innerText += displayedButton;

  operator = event.target.value;
  currentInput.innerText = "";

  console.log(operator);

  if (currentNumber) {
    console.log("Current number before operator click is " + currentNumber);
    storedNumber = currentNumber;
    currentNumber = "";
    console.log("Current number after operator click is " + currentNumber);
    console.log("stored number is " + storedNumber);
  }

  console.log(displayedButton);
  console.log(typeof displayedButton);
};

// Clears display
const onClearButtonClick = (event) => {
  currentInput.innerText = "";
  finalResult.innerText = "";
  currentNumber = "";
  operator = "";
  secondaryNumber = "";
  storedNumber = 0;
  sum = 0;
};

// Clears one character from display
const onBackButtonClick = (event) => {
  const displayedButton = event.target.innerText;
  currentInput.innerText = currentInput.innerText.slice(0,-1);
  currentNumber = currentInput.innerText
  console.log(currentNumber); 
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
    case "" : sum = parseFloat(currentNumber);
  }
  console.log(sum);
  currentInput.innerText = "";
  finalResult.innerText = sum
};

const onPercentButtonClick = event => {
  const displayedButton = event.target.innerText;
  console.log(displayedButton);
  currentNumber = currentInput.innerText;
  const percentSum = currentNumber/100;
  console.log(currentNumber);
  currentInput.innerText = currentInput.innerText += displayedButton;
  finalResult.innerText = percentSum;
  currentNumber = percentSum;
}


// Logic


// Calls onNumberButtonClick function when number is clicked
for (let index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", onNumberButtonClick);
}

// Calls onOperatorButtonClick function when number is clicked
for (let index = 0; index < operatorButtons.length; index++) {
  operatorButtons[index].addEventListener("click", onOperatorButtonClick);
}

// Calls onClearButtonClick function when AC is clicked
clearButton.addEventListener("click", onClearButtonClick);

// Calls onBackButtonClick function when AC is clicked
backButton.addEventListener("click", onBackButtonClick);

// Calls onEqualsButtonClick function when AC is clicked
equalsButton.addEventListener("click", onEqualsButtonClick);

// Calls onPercentButtonClick function when AC is clicked
percentButton.addEventListener("click", onPercentButtonClick);