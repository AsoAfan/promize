const signupForm = document.querySelector(".signup");
const closeSignupFrom = document.querySelector(".close-signup-form");
const overlay = document.querySelector(".overlay");
const cancelSignup = document.querySelector(".cancel");

console.log(closeSignupFrom);

const openSignUpForm = document.querySelector(".start-btn");

const closeFrom = function () {
  signupForm.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openForm = function () {
  signupForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

closeSignupFrom.addEventListener("click", closeFrom);
overlay.addEventListener("click", closeFrom);
cancelSignup.addEventListener("click", closeFrom);

document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key === "Escape") {
    closeFrom();
  }
});

openSignUpForm.addEventListener("click", openForm);
