const popup = document.querySelector(".feedback-wrapper");
const contactbtn = document.querySelector(".contacts-btn");
const close = document.querySelector(".close");
const login = popup.querySelector("[name=fullname]");
const form = popup.querySelector("form");
contactbtn.addEventListener ("click", function (evt) {
  evt.preventDefault
  popup.classList.remove("modal-hidden")
  login.focus()
});
close.addEventListener ("click", function (evt) {
  evt.preventDefault
  popup.classList.add("modal-hidden")
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
