const inputElement = document.querySelector(".input-class");
const nameElement = document.querySelector(".span-class");

inputElement.addEventListener("input", () => {
  if (inputElement.value.trim() === "") {
    nameElement.textContent = "Anonymous";
  } else {
    nameElement.textContent = inputElement.value;
  }
});

const formElement = document.querySelector(".form-class");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputElement.value.trim() === "") {
    nameElement.textContent = "Anonymous";
  } else {
    nameElement.textContent = inputElement.value;
  }
});
