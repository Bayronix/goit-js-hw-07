const app = {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  },

  inputElement: document.querySelector(".input_num"),
  inputButtonCreate: document.querySelector(".button1"),
  inputButtonDestroy: document.querySelector(".button2"),
  smallBox: [],
  newDiv: null,

  createBoxes(amount) {
    if (this.newDiv) {
      this.newDiv.remove();
    }

    this.smallBox = [];

    if (amount >= 1 && amount <= 100) {
      const fragment = document.createDocumentFragment();

      const boxElements = Array.from({ length: amount }, (_, index) => {
        const size = 30 + (index % 7) * 10;
        if (size > 100) return null;
        const smallBoxes = document.createElement("div");
        smallBoxes.classList.add("small_boxes_css");
        smallBoxes.style.backgroundColor = this.getRandomHexColor();
        smallBoxes.style.width = `${size}px`;
        smallBoxes.style.height = `${size}px`;
        return smallBoxes;
      }).filter((box) => box !== null);

      boxElements.forEach((box) => {
        fragment.appendChild(box);
        this.smallBox.push(box);
      });

      this.newDiv = document.createElement("div");
      this.newDiv.classList.add("new-div");
      this.newDiv.appendChild(fragment);
      document.body.appendChild(this.newDiv);

      this.inputElement.value = "";
    } else {
      console.log("Please enter a number between 0 and 100.");
    }
  },

  destroyBoxes() {
    this.smallBox.forEach((box) => {
      box.remove();
    });
    this.smallBox = [];
  },

  init() {
    this.inputButtonCreate.addEventListener("click", () => {
      const amount = parseInt(this.inputElement.value);
      this.createBoxes(amount);
    });
    this.inputButtonDestroy.addEventListener("click", () =>
      this.destroyBoxes()
    );
  },
};

app.init();
