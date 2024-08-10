// import { items } from './data';

// const getProduct = () => {
//       items.map((product) => {
//       console.log(product);
//     });
// }
// getProduct();

var myIndex = 0;

function slider() {
  let Test = document.querySelectorAll('[data-test]');
  for (let index = 0; index < Test.length; index++) {
    Test[index].classList.add("hidden");
  }
    myIndex++;
    if (myIndex > Test.length) { myIndex = 1 }
    Test[myIndex - 1].classList.remove("hidden");
    Test[myIndex - 1].classList.add("block");
  setTimeout(slider, 2000);
}
slider();

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