
let slideIndex = 0;
function ImgSlider() {
  let Images = document.querySelectorAll(".imgSlide");
  for (let index = 0; index < Images.length; index++) {
    Images[index].classList.add("hidden");
  }
  slideIndex++;
  if (slideIndex > Images.length) { slideIndex = 1 }
  Images[slideIndex - 1].classList.remove("hidden");
  Images[slideIndex - 1].classList.add("block");
  setTimeout(ImgSlider, 3000);
}

ImgSlider();