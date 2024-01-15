"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const userEmail = e.target.elements.email.value.trim();
  const userPassword = e.target.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email: userEmail,
      password: userPassword,
    };
    console.log(obj);
    form.reset();
  }
}
