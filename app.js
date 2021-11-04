const form = document.querySelector("#form");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  // prevent browser default
  e.preventDefault();

  const emailValue = email.value.trim();
  if (!emailValue) {
    // show empty - show error icon + error msg
    form.classList.add("error");
    errorMsg.innerHTML = "Oops! You forgot to enter your email address";
  } else if (!isValidEmail(emailValue)) {
    // show invalid - show error icon + error msg
    form.classList.add("error");
    errorMsg.innerHTML = "Please provide a valid email address";
  } else {
    // submit - remove error class
    form.classList.remove("error");
    errorMsg.innerHTML = "";
  }
});

// regex for email validation
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
