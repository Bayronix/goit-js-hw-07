function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const inputElement = document.querySelector(".input");
const inputButtonCreate = document.querySelector(".button1");
const inputButtonDestroy = document.querySelector(".button2");

let smallBox = [];

inputButtonCreate.addEventListener("click", function () {
  if (document.querySelector(".new-div")) {
    document.querySelector(".new-div").remove();
  }

  smallBox.forEach((div) => {
    div.remove();
  });
  smallBox = [];

  const inputValue = parseInt(inputElement.value);
  if (inputValue >= 0 && inputValue <= 100) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    document.body.appendChild(newDiv);
    for (let i = 0; i < inputValue; i++) {
      const smallBoxes = document.createElement("div");
      smallBoxes.classList.add("small_boxes_css");
      smallBoxes.style.backgroundColor = getRandomHexColor();
      const size = 30 + (i % 7) * 10;
      if (size > 100) break;
      smallBoxes.style.width = `${size}px`;
      smallBoxes.style.height = `${size}px`;
      newDiv.appendChild(smallBoxes);
      smallBox.push(smallBoxes);
    }
    inputElement.value = "";
  } else {
    console.log("Please enter a number between 0 and 100.");
  }
});

inputButtonDestroy.addEventListener("click", function () {
  smallBox.forEach((div) => {
    div.remove();
  });
  smallBox = [];
});
