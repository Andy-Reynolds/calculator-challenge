"use strict";

// Variables
var allButtons = document.getElementsByClassName("buttons");
var numberButtons = document.getElementsByClassName("buttons__number");
var clearButton = document.getElementById("clear");
var backButton = document.getElementById("back");
var operatorButtons = document.getElementsByClassName("buttons__operator");
var currentInput = document.getElementById("current-input");
var finalResult = document.getElementById("final-result");
var equalsButton = document.getElementById("equals");
var currentNumber = "";
var operator = "";
var secondaryNumber = "";
var storedNumber = 0;
var sum = 0; // Functions
// Adds clicked number to display

var onNumberButtonClick = function onNumberButtonClick(event) {
  var displayedButton = event.target.innerText;
  console.log(displayedButton);

  if (displayedButton == Number) {
    currentInput.innerText = "";
    currentNumber = currentInput.innerText += displayedButton;
  } else {
    currentNumber = currentInput.innerText += displayedButton;
  }
}; // Adds clicked operator to display


var onOperatorButtonClick = function onOperatorButtonClick(event) {
  currentInput.innerText = "";
  var displayedButton = event.target.innerText;
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
}; // Clears display


var onClearButtonClick = function onClearButtonClick(event) {
  currentInput.innerText = "";
  finalResult.innerText = "";
}; // Clears one character from display


var onBackButtonClick = function onBackButtonClick(event) {
  var displayedButton = event.target.innerText;
  currentInput.innerText = currentInput.innerText.slice(0, -1);
}; // Equals button function


var onEqualsButtonClick = function onEqualsButtonClick(event) {
  switch (operator) {
    case "add":
      sum = parseFloat(storedNumber) + parseFloat(currentNumber);
      break;

    case "minus":
      sum = parseFloat(storedNumber) - parseFloat(currentNumber);
      break;

    case "multiply":
      sum = parseFloat(storedNumber) * parseFloat(currentNumber);
      break;

    case "divide":
      sum = parseFloat(storedNumber) / parseFloat(currentNumber);
      break;
  }

  console.log(sum);
  currentInput.innerText = "";
  finalResult.innerText = sum;
}; // Logic
// Calls onNumberButtonClick function when number is clicked


for (var index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", onNumberButtonClick);
} // Calls onOperatorButtonClick function when number is clicked


for (var _index = 0; _index < operatorButtons.length; _index++) {
  operatorButtons[_index].addEventListener("click", onOperatorButtonClick);
} // Calls onClearButtonClick function when AC is clicked


clearButton.addEventListener("click", onClearButtonClick); // Calls onBackButtonClick function when AC is clicked

backButton.addEventListener("click", onBackButtonClick); // Calls onEqualsButtonClick function when AC is clicked

equalsButton.addEventListener("click", onEqualsButtonClick);