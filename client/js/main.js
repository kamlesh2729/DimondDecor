// import Data from './data';

// const getProduct = () => {
//     Data.map((product, index) => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//     <div class="bg-yellow-200" key=${index}>
//     <img src=${product.image} class="w-pimg h-pimg" alt="product">
//     <div class="w-pinfo h-pinfo bg-orange-200 text-center">
//       <h5 class="font-titles text-bt font-medium">${product.description}</h5>
//       <p class="font-text text-p font-normal">${product.specs}.</p>
//     </div>
//   </div>`;
//     });
// }

// window.onload(getProduct());

var myIndex = 0;
carosuel();

function carosuel() {
  var i;
  var x = document.getElementsByClassName("imgSlide");
  for (i = 0; i < x.length; i++) {
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].classList.add("block");
  setTimeout(carosuel(), 3000);
}