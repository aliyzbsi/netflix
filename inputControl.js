const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern = /^[0-9]{10}$/;

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailPhoneError = document.getElementById("emailPhoneError");
const passwordError = document.getElementById("passwordError");

function validateEmail() {
  if (
    !emailPattern.test(emailInput.value) &&
    !phonePattern.test(emailInput.value)
  ) {
    emailPhoneError.style.display = "block";
  } else {
    emailPhoneError.style.display = "none";
  }
}

function validatePassword() {
  if (passwordInput.value.length < 4 || passwordInput.value.length > 60) {
    passwordError.style.display = "block"; //hata mesajını göster
  } else {
    passwordError.style.display = "none"; //hata mesajını gizle
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    validateEmail();
    validatePassword();

    if (
      emailPhoneError.style.display === "block" ||
      passwordError.style.display === "block"
    ) {
      event.preventDefault(); //formun gönderilmesini engeller
    }
  });

emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
