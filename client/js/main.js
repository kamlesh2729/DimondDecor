let slideIndex = 1;
ImgSlider(slideIndex);

function preslide(n) {
  ImgSlider(slideIndex - n);
}

function nextslide(n) {
  ImgSlider((slideIndex += n));
}

function currentslide(n) {
  ImgSlider((slideIndex = n));
}

function ImgSlider(n) {
  let Images = document.querySelectorAll(".imgSlide");
  for (let index = 0; index < Images.length; index++) {
    Images[index].classList.add("hidden");
  }
  slideIndex++;
  if (slideIndex > Images.length) {
    slideIndex = 1;
  }
  Images[slideIndex - 1].classList.remove("hidden");
  Images[slideIndex - 1].classList.add("block");
  setTimeout(ImgSlider, 5000);
}

let testIndex = 0;
testSlider(testIndex);

function testSlider(n) {
  let Images = document.querySelectorAll("[data-test]");
  for (let index = 0; index < Images.length; index++) {
    Images[index].classList.add("hidden");
  }
  slideIndex++;
  if (slideIndex > Images.length) {
    slideIndex = 1;
  }
  Images[slideIndex - 1].classList.remove("hidden");
  Images[slideIndex - 1].classList.add("block");
  setTimeout(testSlider, 5000);
}

const addallProduct = () => {
  
}

const getAllProduct = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      const listProducts = data;
      addallProduct();
      console.log(listProducts);
    });
};

getAllProduct();

const proudtProduct = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      const listProducts = data;
      const filteredProduct = listProducts.filter((item) => item.id <= 9);
      console.log(filteredProduct);
    });
}
proudtProduct();

const Productslider = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      const listProducts = data;
      const sliderProduct = listProducts.filter((item) => item.id >= 12);
      console.log(sliderProduct);
    });
}
Productslider();
