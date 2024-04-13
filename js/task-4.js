const formToFill = document.querySelector(".login-form");
formToFill.addEventListener("submit", submitProcess);

function submitProcess(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Заповніть пусте поле");
    return;
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
