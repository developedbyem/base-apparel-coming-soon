const form = document.querySelector(".form form");
function formValidation() {
  const email = form.querySelector("input");
  if (
    email.value === "" ||
    !email.value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)
  ) {
    form.parentElement.classList.add("error");
  } else {
    form.parentElement.classList.remove("error");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
