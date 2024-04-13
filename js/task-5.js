function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const bodyElement = document.body;
const spanColorElement = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", function () {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  spanColorElement.textContent = color;
});

// buttonChangeColor.addEventListener("click", placeholder);
// function placeholder() {
//   const color = getRandomHexColor();
//   bodyElement.style.backgroundColor = color;
//   spanColorElement.textContent = color;
// }
