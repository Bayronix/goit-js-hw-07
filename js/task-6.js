function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const inputElement = document.querySelector(".input_num");
const createButton = document.querySelector(".buttonCreate");
const destroyButton = document.querySelector(".buttonDestroy");
const boxesContainer = document.getElementById("boxes");
let smallBoxes = [];

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  smallBoxes = [];

  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();
    Array.from({ length: amount }).forEach((_, index) => {
      const size = 30 + (index % 7) * 10;
      if (size > 100) return;
      const smallBox = document.createElement("div");
      smallBox.classList.add("small_box");
      smallBox.style.backgroundColor = getRandomHexColor();
      smallBox.style.width = `${size}px`;
      smallBox.style.height = `${size}px`;
      fragment.appendChild(smallBox);
      smallBoxes.push(smallBox);
    });
    // Додаємо клас прямо до контейнера після додавання фрагменту
    boxesContainer.appendChild(fragment);
    boxesContainer.classList.add("new-div");
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  smallBoxes = [];
}

createButton.addEventListener("click", function () {
  const amount = parseInt(inputElement.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", function () {
  destroyBoxes();
});
