const search = document.querySelector(".search");
const searchwrapper = document.querySelector(".search-wrapper")
search.addEventListener("click", function (evt) {
  searchwrapper.classList.remove("modal-hidden")
});
search.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
        searchwrapper.classList.add("modal-hidden")
  }
});
