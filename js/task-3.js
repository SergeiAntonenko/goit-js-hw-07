"use strict";

const input = document.getElementById("name-input");
const headerSpan = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange() {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    headerSpan.textContent = "Anonymous";
  } else {
    headerSpan.textContent = `${inputValue}`;
  }
}
