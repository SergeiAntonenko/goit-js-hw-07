"use strict";

const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange() {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
}
