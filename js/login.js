const loginLink = document.querySelector(".login-link");
const modalLogin = document.querySelector(".login-form-wrapper")
const loginForm = modalLogin.querySelector(".login-form");
const loginLogin = modalLogin.querySelector("[name=login]");
const loginPassword = modalLogin.querySelector("[name=password]");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-hidden");
  modalLogin.classList.add("modal-animation");
});

loginForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    modalLogin.classList.add("modal-error");
  } else {
    localStorage.setItem("login", loginLogin.value);
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});
loginLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      modalLogin.classList.add("modal-hidden");
    }
});
