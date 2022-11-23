const signupForm = document.querySelector(".signup");
const closeSignupFrom = document.querySelector(".close-signup-form");
const overlay = document.querySelector(".overlay");
const cancelSignup = document.querySelectorAll(".cancel");
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

for (let i = 0; i < cancelSignup.length; i++) {
  console.log(cancelSignup);
  cancelSignup[i].addEventListener("click", closeFrom);
}
overlay.addEventListener("click", closeFrom);

document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key === "Escape") {
    closeFrom();
  }
});

openSignUpForm.addEventListener("click", openForm);

const loginForm = document.querySelector(".log");
const switchBtn = document.querySelector(".login");
const signForm = document.querySelector(".sign");
const signBtn = document.querySelector(".sign-up");
console.log(signBtn);

switchBtn.addEventListener("click", function () {
  signForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

signBtn.addEventListener("click", function () {
  loginForm.classList.add("hidden");
  signForm.classList.remove("hidden");
});
