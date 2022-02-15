const buttons = document.getElementsByClassName("buttons");

const onDayButtonClick = (event) => {
  const day = event.target.innerText;
  console.log(`Button pressed: ${day}`);
};

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", onDayButtonClick);
}