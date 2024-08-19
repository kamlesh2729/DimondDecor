const aproduct = document.querySelector("[data-alldata]");
const pproduct = document.querySelector("[data-prouddata]");
const sproduct = document.querySelector("[data-slidedata]");
let listProducts = [];
let filteredProduct = [];
let sliderProduct = [];

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

const addproudproduct = () => {
  filteredProduct.map(product => {
    let newProduct = document.createElement('div');
    newProduct.classList.add('flex');
    newProduct.classList.add('flex-col');
    newProduct.classList.add('items-center');
    newProduct.classList.add('justify-center');
    newProduct.classList.add('rounded-lg');
    newProduct.classList.add('border-2');
    newProduct.classList.add('border-gray-200');
    newProduct.classList.add('border-solid');
    newProduct.innerHTML = `
      <div class=" w-pimg h-pimg tab:w-timg tab:h-timg lg:w-pimg1 lg:h-pimg1 desk:w-pimg2 desk:h-pimg2 rounded-t-lg">
          <img src="${product.img}" alt="product" class="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-t-lg">
        </div>
      <div class="w-pimg h-pinfo tab:w-timg tab:h-tinfo lg:w-pimg1 lg:h-pinfo1 desk:w-pimg2 desk:h-pinfo2 text-center group relative rounded-b-lg ">
        <a href="#" class="mt-2 tab:mt-2 lg:mt-2 desk:mt-4"><h3 class="text-p tab:text-p lg:text-p desk:text-str text-text font-semibold my-2 tab:my-2 lg:my-2 desk:my-4">Basic Tee</h3></a>
        <div class="flex justify-center items-center gap-8">
        <p class="text-p tab:text-p lg:text-p desk:text-[1.3rem] font-medium text-text">Black</p>
        <p class="text-p tab:text-p lg:text-p desk:text-[1.3rem] font-medium text-text">$35</p>
        </div>
      </div>
    `;
    pproduct.append(newProduct);
  })
}

const proudtProduct = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      listProducts = data;
      filteredProduct = listProducts.filter((item) => item.id <= 8);
      addproudproduct();
    });
};
proudtProduct();

const addsliderproduct = () => {
  sliderProduct.map(product => {
    let newsProduct = document.createElement('div');
    newsProduct.innerHTML = `
    <div class="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 border-solid hover:border-black">
      <div class=" w-pimg h-pimg tab:w-timg lg:w-pimg1 desk:w-pimg2 tab:h-timg lg:h-pimg1 desk:h-pimg2 rounded-t-lg">
          <img src="${product.img}" alt="product" class="h-full w-full object-cover object-center rounded-t-lg">
        </div>
      <div class="w-pimg h-pinfo tab:w-timg lg:w-pimg1 desk:w-pimg2 tab:h-tinfo lg:h-pinfo1 desk:h-pinfo2 text-center rounded-b-lg">
        <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Basic Tee
              </a>
          </h3>
        <p class="mt-1 text-sm text-gray-500">Black</p>
        <p class="text-sm font-medium text-gray-900">$35</p>
      </div>
    </div>
    `;
    sproduct.append(newsProduct);
  })
}
const Productslider = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      const listProducts = data;
      sliderProduct = listProducts.filter((item) => item.id >= 12);
      addsliderproduct();
    });
};
Productslider();
