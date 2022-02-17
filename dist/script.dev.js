"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var currentNumber = 0;
var operator = "";
var secondaryNumber = 0;
var storedNumber = 0;
var sum = 0; // Functions
// Adds clicked number to display

var onNumberButtonClick = function onNumberButtonClick(event) {
  finalResult.innerText = "";
  var displayedButton = event.target.innerText;
  console.log(displayedButton);
  console.log(currentNumber); // if (displayedButton == Number) {
  // currentInput.innerText = "";

  currentNumber = currentInput.innerText += displayedButton; // } else {
  //   currentNumber = currentInput.innerText += displayedButton;
  // }

  console.log(currentNumber);
}; // Adds clicked operator to display


var onOperatorButtonClick = function onOperatorButtonClick(event) {
  currentInput.innerText = "";
  finalResult.innerText = "";
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

  console.log(displayedButton);
  console.log(_typeof(displayedButton));
}; // Clears display


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
  console.log(currentNumber);
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

  console.log(sum);
  currentInput.innerText = "";
  finalResult.innerText = sum;
};

var onPercentButtonClick = function onPercentButtonClick(event) {
  var displayedButton = event.target.innerText;
  console.log(displayedButton);
  currentNumber = currentInput.innerText;
  var percentSum = currentNumber / 100;
  console.log(currentNumber);
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