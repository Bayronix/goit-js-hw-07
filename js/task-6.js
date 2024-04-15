function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const inputElement = document.querySelector(".input_num");
const createButton = document.querySelector(".buttonCreate");
const destroyButton = document.querySelector(".buttonDestroy");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  destroyBoxes();

  if (amount < 1 || amount > 100) {
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const smallBox = document.createElement("div");
    smallBox.classList.add("small_box");
    smallBox.style.backgroundColor = getRandomHexColor();
    smallBox.style.width = `${size}px`;
    smallBox.style.height = `${size}px`;
    fragment.appendChild(smallBox);
  }

  boxesContainer.appendChild(fragment);
  boxesContainer.classList.add("new-div");
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", function () {
  const amount = parseInt(inputElement.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", function () {
  destroyBoxes();
});
