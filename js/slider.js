const slidecontrol = document.querySelector(".slider-controls");
const control = document.querySelector(".control");
const sitewrapper = document.querySelector('.site-wrapper')
const image = document.querySelector(".slider-image")
const slide = document.querySelector(".slide")
slidecontrol.addEventListener ("click", function (evt) {
    control.classList.toggle("current")
});
