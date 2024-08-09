// import items from './data';
// const getProduct = () => {
  //     Data.map((product) => {
//       console.log(product);
//     });
// }
// getProduct();

let myIndex = 0;

function slider() {
  let Test = document.querySelectorAll('[data-test]');
  for (let index = 0; index < Test.length; index++) {
    Test[index].classList.add("hidden");
    console.log(Test[index]);
    myIndex++;
    if (myIndex > Test.length) { myIndex = 1 }
    Test[myIndex - 1].classList.remove("hidden");
    Test[myIndex - 1].classList.add("block");
    console.log(Test[myIndex - 1]);
    setTimeout(slider, 2000);
  }

  
}
slider();