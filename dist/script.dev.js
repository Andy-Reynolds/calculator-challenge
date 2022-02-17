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
var percentButton = document.getElementById("percent");
var currentNumber = "";
var operator = "";
var secondaryNumber = 0;
var storedNumber = 0;
var sum = 0; // Functions
// Adds clicked number to display and updates currentNumber

var onNumberButtonClick = function onNumberButtonClick(event) {
  finalResult.innerText = "";
  var displayedButton = event.target.innerText;
  currentNumber = currentInput.innerText += displayedButton;
}; // Stores clicked operator and clears display


var onOperatorButtonClick = function onOperatorButtonClick(event) {
  currentInput.innerText = "";
  finalResult.innerText = "";
  operator = event.target.value;

  if (currentNumber) {
    storedNumber = currentNumber;
    currentNumber = "";
  }
}; // Clears display and resets number and operator variables


var onClearButtonClick = function onClearButtonClick(event) {
  currentInput.innerText = "";
  finalResult.innerText = "";
  currentNumber = "";
  operator = "";
  secondaryNumber = "";
  storedNumber = 0;
  sum = 0;
}; // Clears one character from display


var onBackButtonClick = function onBackButtonClick(event) {
  var displayedButton = event.target.innerText;
  currentInput.innerText = currentInput.innerText.slice(0, -1);
  currentNumber = currentInput.innerText;
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

    case "":
      sum = parseFloat(currentNumber);
  }

  currentInput.innerText = "";
  finalResult.innerText = sum;
}; // Converts number to a percentage of 100


var onPercentButtonClick = function onPercentButtonClick(event) {
  var displayedButton = event.target.innerText;
  currentNumber = currentInput.innerText;
  var percentSum = currentNumber / 100;
  currentInput.innerText = currentInput.innerText += displayedButton;
  finalResult.innerText = percentSum;
  currentNumber = percentSum;
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

equalsButton.addEventListener("click", onEqualsButtonClick); // Calls onPercentButtonClick function when AC is clicked

percentButton.addEventListener("click", onPercentButtonClick);