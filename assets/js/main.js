const formElement = document.querySelector("#form");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isEmailValid = () => {
  const emailValue = document.querySelector("#email").value;
  const isValid = validateEmail(emailValue);
  const errorMessageElement = document.querySelector(".signup__error");
  const emailInputElement = document.querySelector("#email");
  const popupElement = document.querySelector(".popup");
  const signupElement = document.querySelector(".signup");

  if (isValid) {
    popupElement.style.display = "block";
    signupElement.style.display = "none";
  } else {
    errorMessageElement.classList.add("error");
    emailInputElement.classList.add("error");
  }
};

const validateForm = (event) => {
  event.preventDefault();

  isEmailValid();
};

formElement.addEventListener("submit", (event) => {
  validateForm(event);
});
