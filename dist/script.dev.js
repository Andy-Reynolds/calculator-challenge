"use strict";

var buttons = document.getElementsByClassName("buttons");

var onDayButtonClick = function onDayButtonClick(event) {
  var day = event.target.innerText;
  console.log("Button pressed: ".concat(day));
};

for (var index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", onDayButtonClick);
}