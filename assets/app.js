// const nameInputRef = document.querySelector("#name");
// const lastNameInputRef = document.querySelector("#lastName");
// const emailInputRef = document.querySelector("#email");
// const passwordInputRef = document.querySelector("#password");
// const confirmPasswordInputRef = document.querySelector("#confirmPassword");
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
    minLength: 8,
  },
  {
    id: "email",
    minLength: 5,
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  {
    id: "password",
    minLength: 8,
  },
  {
    id: "confirmPassword",
    minLength: 8,
  },
];

function validateForm(event) {
  event.preventDefault();
  isSubmited = true;

  const emailInput = document.querySelector("#email");
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("error");
    return;
  }

  emailInput.classList.remove("error");
}

// function some_func(otherFunc, ev) {
//   // magic happens
// }
// someObj.addEventListener("click", some_func.bind(null, some_other_func), false);
function validateOnKeyup() {
  inputsToValidate.forEach((input) => {
    const inputRef = document.querySelector(`#${input.id}`);

    isSubmited = true;
    inputRef.addEventListener(
      "input",
      validateMinLength.bind(inputRef, input.minLength)
    );
    inputRef.addEventListener(
      "blur",
      validateMinLength.bind(inputRef, input.minLength)
    );
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

inputsRef.forEach((input) => {
  input.addEventListener("keyup", validateOnKeyup);
});
buttonRef.addEventListener("click", validateForm);
