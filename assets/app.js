const nameInputRef = document.querySelector("#name");
const lastNameInputRef = document.querySelector("#lastName");
const emailInputRef = document.querySelector("#email");
const passwordInputRef = document.querySelector("#password");
const confirmPasswordInputRef = document.querySelector("#confirmPassword");

const inputsRef = document.querySelectorAll("input");
let isSubmited = false;

const buttonRef = document.querySelector("#submit");

// const inputsToValidate = ["name", "lastName", "email", "password", "confirmPassword"];

const inputsToValidate = [
  {
    id: "name",
    minLength: 5,
  },
  {
    id: "lastName",
    minLength: 5,
  },
  {
    id: "email",
    minLength: 5,
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  {
    id: "password",
    minLength: 6,
  },
  {
    id: "confirmPassword",
    minLength: 6,
  },
];

function validateForm(event) {
  event.preventDefault();
  isSubmited = true;
  validEmail();
  validatePasswordAndConfirmPassword();
  validateAllFieldsOnSubmit();
}

function validEmail() {
  const emailInput = document.querySelector("#email");
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("error");
    return;
  }

  emailInput.classList.remove("error");
}

function validatePasswordAndConfirmPassword() {
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    return false;
  }
  passwordInput.classList.add("error");
  confirmPasswordInput.classList.remove("error");
  return true;
}

function validateAllFieldsOnSubmit() {
  inputsToValidate.forEach((input) => {
    const inputRef = document.querySelector(`#${input.id}`);
    const inputRefTrimed = inputRef.value.trim();

    if (inputRefTrimed.length < input.minLength) {
      inputRef.classList.add("error");
    } else {
      inputRef.classList.remove("error");
    }
  });
}

function validateMinLength(minLength, inputRef) {
  console.log("teste");
  if (!isSubmited) {
    return;
  }

  const inputRefTrimed = inputRef.currentTarget.value.trim();

  if (inputRefTrimed.length < minLength) {
    inputRef.currentTarget.classList.add("error");
    return;
  }
  inputRef.currentTarget.classList.remove("error");
}

function validateOnInput() {
  inputsToValidate.forEach((input) => {
    const inputRef = document.querySelector(`#${input.id}`);
    isSubmited = true;
    inputRef.addEventListener("blur", validate.bind(inputRef, input));
  });
}

function validate(inputRef, input) {
  if (input.pattern) {
    validatePattern(inputRef, input.pattern);
  }

  if (input.minLength) {
    validateMinLength(inputRef, input.minLength);
  }

  if (hasError) {
    showErrorMessage(inputRef, input.id);
  } else {
    removeErrorMenssage(inputRef);
  }
}

function showErrorMessage() {
  const errorText = document.querySelector(`#textError${id}`);
  errorText.style.display = "block";
  errorText.classList.add("error");
}

function removeErrorMenssage() {
  const textoError = document.querySelector(`#textErro${id}}`);
  textoError.classList.remove("error");
}

inputsRef.forEach((input) => {
  input.addEventListener("keyup", validateOnInput);
});
buttonRef.addEventListener("click", validateForm);
