// Variables
const allButtons = document.getElementsByClassName("buttons");
const numberButtons = document.getElementsByClassName("buttons__number");
const clearButton = document.getElementById("clear");
const backButton = document.getElementById("back");
const operatorButtons = document.getElementsByClassName("buttons__operator");
const currentInput = document.getElementById("current-input");


// Functions


// Adds clicked number to display
const onNumberButtonClick = (event) => {
  const displayedButton = event.target.innerText;
  currentInput.innerText += displayedButton;
};

// Adds clicked number to display
const onOperatorButtonClick = (event) => {
  const displayedButton = event.target.innerText;
  currentInput.innerText += displayedButton;
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
