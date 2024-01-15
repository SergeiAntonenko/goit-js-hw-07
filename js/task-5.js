function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const widgetBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

widgetBtn.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}
