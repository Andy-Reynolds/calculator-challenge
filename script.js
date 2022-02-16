// Variables
const allButtons = document.getElementsByClassName("buttons");
const numberButtons = document.getElementsByClassName("buttons__number");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("back");
const operatorButtons = document.getElementsByClassName("buttons__operator");
const currentInput = document.getElementById("current-input");
const equalsButton = document.getElementById("equals");

let initialNumber = "";
let operator = "";
let secondaryNumber = "";
let storedNumber = 0;
let sum = 0;

// Functions


// Adds clicked number to display
const onNumberButtonClick = (event) => {
  const displayedButton = event.target.innerText;
  console.log(displayedButton);
  if (displayedButton == Number) {
    currentInput.innerText = "";
    initialNumber = currentInput.innerText += displayedButton;
  } else {
    initialNumber = currentInput.innerText += displayedButton;
  }
};

// Adds clicked operator to display
const onOperatorButtonClick = (event) => {
  currentInput.innerText = "";
  const displayedButton = event.target.innerText;
  currentInput.innerText += displayedButton;

  operator = event.target.value;
  currentInput.innerText = "";

  console.log(operator);

  if (initialNumber) {
    console.log("Initial number before operator click is " + initialNumber);
    storedNumber = initialNumber;
    initialNumber = "";
    console.log("Initial number after operator click is " + initialNumber);
    console.log("stored number is " + storedNumber);
  }
};

// Clears display
const onClearButtonClick = (event) => {
  currentInput.innerText = "";
};

// Clears one character from display
const onBackButtonClick = (event) => {
  const displayedButton = event.target.innerText;
  currentInput.innerText = currentInput.innerText.slice(0,-1); 
};

// Equals button function
const onEqualsButtonClick = (event) => {
  switch(operator) {
    case "add": sum = storedNumber + initialNumber;
    break;
  }
  console.log(sum);
};


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