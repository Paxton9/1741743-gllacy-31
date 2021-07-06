const popup = document.querySelector(".feedback-wrapper");
const contactbtn = document.querySelector(".contacts-btn");
const close = document.querySelector(".close");
const login = popup.querySelector("[name=fullname]");
const mail = popup.querySelector("[name=login]")
const form = popup.querySelector("form");
contactbtn.addEventListener ("click", function (evt) {
  evt.preventDefault
  popup.classList.remove("modal-hidden")
  popup.classList.add("modal-animation")
  login.focus()
});
close.addEventListener ("click", function (evt) {
  evt.preventDefault
  popup.classList.add("modal-hidden")
  popup.classList.remove("modal-animation")

});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", mail.value);
    }
  }
});
