const form = document.getElementById("form");

const sus = document.querySelector("button");
const emailValidation = document.querySelector(".email-error");
const userEmail = document.querySelector("[name = email]");
const input = document.querySelector("input");
const validateEmailFormat = (e) => {
  const fieldValue = e.target.value;
  const field = e.target;
  if (fieldValue.trim() <= 0) {
    emailValidation.style.display = "block";
  } else {
    emailValidation.style.display = "none";
  }
};

userEmail.addEventListener("blur", validateEmailFormat);

const validateEmail = (e) => {
  const fieldValue = e.target.value;
  const field = e.target;
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  if (fieldValue.trim().length <= 5) {
    input.style.background = "hsl(from var(--clr-primary) h s l / 0.3)";
  } else if (fieldValue.trim().length > 5 && !regex.test(field.value)) {
    emailValidation.style.display = "block";
    input.style.border = "1px solid var(--clr-primary)";
    input.style.background = "hsl(from var(--clr-primary) h s l / 0.3)";
  } else {
    emailValidation.style.display = "none";
    input.style.border = "1px solid var(--clr-neutral-Grey)";
    input.style.background = "var(--clr-neutral-White)";
  }
};

userEmail.addEventListener("input", validateEmail);
userEmail.addEventListener("blur", validateEmail);

// const handleSubmit = (e) => {
//   e.preventDefault(e);

//   const data = Object.fromEntries(new FormData(e.target));
// };
// form.addEventListener("submit", handleSubmit);
