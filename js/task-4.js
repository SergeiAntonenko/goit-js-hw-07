"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const userEmail = form.elements.email.value.trim();
  const userPassword = form.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      userEmail,
      userPassword,
    };
    console.log(obj);
  }

  form.reset();
}
