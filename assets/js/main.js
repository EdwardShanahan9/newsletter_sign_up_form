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
  const popupElement = document.querySelector(".popup__container");
  const signupElement = document.querySelector(".signup");
  const userEmail = document.querySelector(".popup__email");

  if (isValid) {
    popupElement.style.display = "flex";
    signupElement.style.display = "none";
    userEmail.textContent = emailValue;
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
