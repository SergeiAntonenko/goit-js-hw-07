function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const widget = document.querySelector(".widget");
const widgetBtn = widget.querySelector(".change-color");
const widgetSpan = widget.firstElementChild.firstElementChild;

widgetBtn.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  widgetSpan.textContent = getRandomHexColor();
  body.style = `background-color: ${widgetSpan.textContent}`;
}
