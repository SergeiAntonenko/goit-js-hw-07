function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputNumber = controls.firstElementChild;
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", onAddBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onAddBtnClick() {
  const amount = parseInt(inputNumber.value, 10);
  if (amount < 1 || amount > 100) {
    return;
  }

  boxContainer.innerHTML = "";
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div
        class="box"
        style="background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px"
      ></div>`;
  }
  boxContainer.insertAdjacentHTML("beforeend", markup);
  inputNumber.value = "";
}

function onDestroyBtnClick() {
  boxContainer.innerHTML = "";
}
