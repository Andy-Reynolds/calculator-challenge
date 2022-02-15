"use strict";

// Variables
var allButtons = document.getElementsByClassName("buttons");
var numberButtons = document.getElementsByClassName("buttons__number");
var clearButton = document.getElementById("clear");
var backButton = document.getElementById("back");
var operatorButtons = document.getElementsByClassName("buttons__operator");
var currentInput = document.getElementById("current-input"); // Functions
// Adds clicked number to display

var onNumberButtonClick = function onNumberButtonClick(event) {
  var displayedButton = event.target.innerText;
  currentInput.innerText += displayedButton;
}; // Adds clicked number to display


var onOperatorButtonClick = function onOperatorButtonClick(event) {
  var displayedButton = event.target.innerText;
  currentInput.innerText += displayedButton;
}; // Clears display


var onClearButtonClick = function onClearButtonClick(event) {
  currentInput.innerText = "";
}; // Clears one character from display


var onBackButtonClick = function onBackButtonClick(event) {
  var displayedButton = event.target.innerText;
  currentInput.innerText = currentInput.innerText.slice(0, -1);
}; // Logic
// Calls onNumberButtonClick function when number is clicked


for (var index = 0; index < numberButtons.length; index++) {
  numberButtons[index].addEventListener("click", onNumberButtonClick);
} // Calls onOperatorButtonClick function when number is clicked


for (var _index = 0; _index < operatorButtons.length; _index++) {
  operatorButtons[_index].addEventListener("click", onOperatorButtonClick);
} // Calls onClearButtonClick function when AC is clicked


clearButton.addEventListener("click", onClearButtonClick); // Calls onBackButtonClick function when AC is clicked

backButton.addEventListener("click", onBackButtonClick);