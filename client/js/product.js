const mobnav = document.querySelector("[data-menu]");
const menuclose = document.querySelector("[data-closebtn]");
const menuopen = document.querySelector("[data-menubtn]");
const aproduct = document.querySelector("[data-alldata]");
let listProducts = [];

const addallProduct = () => {
    listProducts.map(product => {
        let newsProduct = document.createElement('div');
        newsProduct.classList.add('flex');
        newsProduct.classList.add('flex-col');
        newsProduct.classList.add('items-center');
        newsProduct.classList.add('justify-center');
        newsProduct.classList.add('rounded-lg');
        newsProduct.classList.add('border-2');
        newsProduct.classList.add('border-gray-200');
        newsProduct.classList.add('border-solid');
        newsProduct.classList.add("hover:border-black");
      newsProduct.innerHTML = `
      <div class=" w-pimg h-pimg tab:w-timg tab:h-timg lg:w-pimg1 lg:h-pimg1 desk:w-pimg2 desk:h-pimg2 rounded-t-lg">
          <img src="${product.img}" alt="product" class="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-t-lg">
        </div>
      <div class="w-pimg h-pinfo tab:w-timg tab:h-tinfo lg:w-pimg1 lg:h-pinfo1 desk:w-pimg2 desk:h-pinfo2 text-center group relative rounded-b-lg ">
        <a href="#" class="mt-2 tab:mt-2 lg:mt-2 desk:mt-4"><h3 class="text-p tab:text-p lg:text-p desk:text-str text-text font-semibold my-2 tab:my-2 lg:my-2 desk:my-4">${product.description}</h3></a>
        <div class="flex justify-center items-center gap-8">
        <p class="text-p tab:text-p lg:text-p desk:text-[1.3rem] font-medium text-text">${product.texture}</p>
        <p class="text-p tab:text-p lg:text-p desk:text-[1.3rem] font-medium text-text">${product.price}</p>
        </div>
        <button class="w-[38vw] tab:w-[19vw] lg:w-[11vw] desk:w-[11vw] h-10 text-p font-semibold rounded-full absolute left-[4rem] tab:left-[4rem] lg:left-[4rem] desk:left-[4rem] -bottom-[1.5rem] transtion-all duration-500 ease-in-out hidden group-hover:block group-hover:bottom-0 hover:duration-500 hover:ease-in-out bg-yellow-200">
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </div>
    `;
    aproduct.append(newsProduct);
  });

};

const getAllProduct = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      listProducts = data;
      addallProduct();
    });
};

getAllProduct();

menuclose.addEventListener("click", () => {
  mobnav.classList.remove('left-0');
  mobnav.classList.add('-left-full');
});
menuopen.addEventListener("click", () => {
  mobnav.classList.remove('-left-full');
  mobnav.classList.add('left-0');
});