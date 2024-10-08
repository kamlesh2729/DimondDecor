const Nav = document.querySelector("[data-nav]");
const mobnav = document.querySelector("[data-menu]");
const menuclose = document.querySelector("[data-closebtn]");
const menuopen = document.querySelector("[data-menubtn]");
const aproduct = document.querySelector("[data-alldata]");
const pproduct = document.querySelector("[data-prouddata]");
const sproduct = document.querySelector("[data-slidedata]");
const cproduct = document.querySelector("[data-citems]");
const cartBox = document.querySelector("[data-cartbox]");
const Formimage = document.querySelector("[data-formimg]");
const cartlength = document.querySelector("[data-cartlength]");
const cartTotal = document.querySelector("[data-total]");

let listProducts = [];
let filteredProduct = [];
let sliderProduct = [];
let cart = [];

// proudproduct 
const addproudproduct = () => {
  filteredProduct.map((product) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("flex");
    newProduct.classList.add("flex-col");
    newProduct.classList.add("items-center");
    newProduct.classList.add("justify-center");
    newProduct.classList.add("rounded-lg");
    newProduct.classList.add("border-2");
    newProduct.classList.add("border-gray-200");
    newProduct.classList.add("border-solid");
    newProduct.classList.add("hover:border-black");
    newProduct.innerHTML = `
      <div class=" w-pimg h-pimg tab:w-timg tab:h-timg lg:w-pimg1 lg:h-pimg1 desk:w-pimg2 desk:h-pimg2 rounded-t-lg">
          <img src="${product.img}" alt="product" class="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-t-lg">
        </div>
      <div class="w-pimg h-pinfo tab:w-timg tab:h-tinfo lg:w-pimg1 lg:h-pinfo1 desk:w-pimg2 desk:h-pinfo2 px-2 group relative rounded-b-lg ">
        <a href="#" class="mt-2 tab:mt-2 lg:mt-2 desk:mt-4"><h3 class="text-p tab:text-p lg:text-p desk:text-str text-text font-semibold my-2 tab:my-2 lg:my-2 desk:my-4">${product.description}</h3></a>
        <p class="text-p tab:text-p lg:text-p desk:text-[1.3rem] font-medium text-text">$ ${product.price}</p>
        </div>
        `;
    pproduct.appendChild(newProduct);
  });
};
const proudtProduct = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      listProducts = data;
      filteredProduct = listProducts.filter((item) => item.id <= 8);
      addproudproduct();
    });
};
// proudtProduct();

// slider product 
const addsliderproduct = () => {
  sliderProduct.map((product) => {
    let newsProduct = document.createElement("div");
    newsProduct.classList.add('w-[70vw]');
    newsProduct.classList.add('lg:w-[20vw]');
    newsProduct.classList.add('h-[55vh]');
    newsProduct.classList.add('flex');
    newsProduct.classList.add('flex-col');
    newsProduct.classList.add('items-center');
    newsProduct.classList.add('justify-center');
    newsProduct.classList.add('rounded-lg');
    newsProduct.classList.add('border-2');
    newsProduct.classList.add('border-gray-200');
    newsProduct.classList.add('border-solid');
    newsProduct.classList.add('hover:border-black');

    newsProduct.innerHTML = `
      <div class=" w-pimg h-pimg tab:w-timg lg:w-pimg2 desk:w-pimg2 tab:h-timg lg:h-pimg1 desk:h-pimg2 rounded-t-lg">
          <img src="${product.img}" alt="product" class="h-full w-full object-cover object-center rounded-t-lg">
        </div>
      <div class="w-pimg h-pinfo tab:w-timg lg:w-pimg1 desk:w-pimg2 tab:h-tinfo lg:h-pinfo1 desk:h-pinfo2 text-center rounded-b-lg">
      <a href="#" class="mt-2 tab:mt-2 lg:mt-2 desk:mt-4"><h3 class="text-p tab:text-p lg:text-p desk:text-str text-text font-semibold my-2 tab:my-2 lg:my-2 desk:my-4"> ${product.description}</h3></a>
        <p class="text-p font-semibold text-gray-900">$ ${product.price}</p>
      </div>
    `;
    sproduct.appendChild(newsProduct);
  });
};
const Productslider = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      const listProducts = data;
      sliderProduct = listProducts.filter((item) => item.id >= 12);
      addsliderproduct();

      // get localstorage data
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        addTocart();
      }
    });
};
// Productslider();

// product page 
const addallProduct = () => {
  listProducts.map((product) => {
    let newsProduct = document.createElement("div");
    newsProduct.classList.add("flex");
    newsProduct.classList.add("flex-col");
    newsProduct.classList.add("items-center");
    newsProduct.classList.add("justify-center");
    newsProduct.classList.add("rounded-lg");
    newsProduct.classList.add("border-2");
    newsProduct.classList.add("border-gray-200");
    newsProduct.classList.add("border-solid");
    newsProduct.classList.add("hover:border-black");
    newsProduct.setAttribute("data-id", product.id);
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
        <button class="addtocart w-[38vw] tab:w-[19vw] lg:w-[11vw] desk:w-[11vw] h-10 text-p font-semibold rounded-full absolute left-[4rem] tab:left-[4rem] lg:left-[4rem] desk:left-[4rem] -bottom-[1.5rem] transtion-all duration-500 ease-in-out hidden group-hover:block group-hover:bottom-0 hover:duration-500 hover:ease-in-out bg-yellow-200" data-addtocart>
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </div>
    `;
    newsProduct.querySelector('[data-addtocart]').addEventListener("click", checkdataid);
    aproduct.appendChild(newsProduct);
  });
};
const getAllProduct = () => {
  fetch("/client/js/data.json")
    .then((respone) => respone.json())
    .then((data) => {
      listProducts = data;
      addallProduct();

      // get localstorage data 
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addTocart();
      }
    });
};
// getAllProduct();

// add to cart 
function checkdataid() {
  let product = this.parentElement;
  let product_id = product.parentElement.dataset.id;
  Cartquantity(product_id);
}
function Cartquantity(product_id) {
  let cartinproduct = cart.findIndex((value) => value.product_id == product_id);
  const cartProduct = listProducts.filter((value) => value.id == product_id);
  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        id: cartProduct[0].id,
        img: cartProduct[0].img,
        price: cartProduct[0].price,
        description: cartProduct[0].description,
        quantity: 1,
      },
    ];
  } else if(cartinproduct < 0 ){
    cart.push({
      product_id: product_id,
      id: cartProduct[0].id,
      img: cartProduct[0].img,
      price: cartProduct[0].price,
      description: cartProduct[0].description,
      quantity: 1,
    });
  } else {
    cart[cartinproduct].quantity = cart[cartinproduct].quantity + 1;
  }
  
  addTocart();
  addtoLocalstorage();
}
function addtoLocalstorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function addTocart() {
  cproduct.innerHTML = '';
  let Total = 0;
  if (cart.length == 0) {
          let div = document.createElement("div");
          div.classList.add("h-full");
          div.classList.add("flex");
          div.classList.add("justify-between");
          div.classList.add("text-black");
    div.classList.add("bg-white");
    
    div.innerHTML = `<div class="w-full h-full inline-flex items-center justify-center bg-pink-100">
    <img src="./assetes/cart/empty-cart.png" alt="empty-cart"></div>`;

    cproduct.appendChild(div);
  } else {
    cart.forEach(carts => {
      let div = document.createElement("div");
      div.classList.add("h-[20vh]");
      div.classList.add("flex");
      div.classList.add("justify-between");
      div.classList.add("text-black");
      div.classList.add("bg-white");
      div.dataset.id = carts.product_id;

      div.innerHTML = `
      <div class="h-[20vh] w-[10vw]">
        <img src="${carts.img}" class="h-[20vh]" alt="product">
        </div>
        <div class="py-2">
        <span class="mt-2 text-p text-center font-semibold">${carts.description}</span>
        <div class="mt-1 text-p text-center font-semibold">${carts.price}</div>
        <div class="mt-2 flex items-center">
          <span class="w-8 h-8 text-center text-str bg-gray-100 rounded-full" data-incressqty><i class="fa-solid fa-plus fa-2xs" style="color: #46d61f;"></i></span>
          <span class="w-8 h-8 text-center text-str font-semibold">${carts.quantity}</span>
          <span class="w-8 h-8 text-center text-str bg-gray-100 rounded-full" data-decressqty><i class="fa-solid fa-minus fa-2xs" style="color: #df0707;"></i></span>
        </div>
        </div>
        <div class="py-2">
        <span class="text-p font-medium">total</span>
        <div class="text-p font-semibold">${carts.price * carts.quantity}</div>
        </div>
        <div class="relative">
        <button type="button" class="w-6 h-6 text-center text-p text-red-500 hover:text-black bg-gray-200 rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-red-500 absolute top-2 right-3" data-removecart><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;
      Total = Total + carts.price*carts.quantity;

      cproduct.appendChild(div);
      div.querySelector("[data-incressqty]").addEventListener("click", addQty);
      div.querySelector("[data-decressqty]").addEventListener("click", lessQty);
      div.querySelector("[data-removecart]").addEventListener("click", Deletecart);
    })
  }
  
  cartlength.innerText = cart.length;
  cartTotal.innerHTML = Total;
} 

function getlocalstoredata() {
  // get localstorage data
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    addTocart();
  }
}

function addQty() {
  let tproduct = this.parentElement.parentElement.parentElement;
  let tid = tproduct.dataset.id;
  let Cartproduct = cart.findIndex((value) => value.product_id == tid);

  if (Cartproduct >= 0) {
    cart[Cartproduct].quantity = cart[Cartproduct].quantity + 1;
  }
    addTocart();
    addtoLocalstorage();
  
}
function lessQty() {
  let tproduct = this.parentElement.parentElement.parentElement;
  let tid = tproduct.dataset.id;
  let Cartproduct = cart.findIndex((value) => value.product_id == tid);

  if (cart[Cartproduct].quantity >= 1) {
    cart[Cartproduct].quantity = cart[Cartproduct].quantity - 1;
  }
  // if (cart[Cartproduct].quantity < 1) {
  //   cart.slice(Cartproduct, 1);
  // }
  if (cart[Cartproduct].quantity == 0) {
    cart = cart.filter((items)=> items.product_id !== tid)
    // Deletecart();
  }
    addTocart();
    addtoLocalstorage();
}
function Deletecart() {
  let tproduct = this.parentElement.parentElement;
  let tid = tproduct.dataset.id;
  cart = cart.filter((items) => items.product_id !== tid);
    addTocart();
    addtoLocalstorage();
}

menuclose.addEventListener("click", () => {
  mobnav.classList.remove("left-0");
  mobnav.classList.add("-left-full");
});
menuopen.addEventListener("click", () => {
  mobnav.classList.add("left-0");
  mobnav.classList.remove("-left-full");
});

const HandelScroll = () => {
  if (window.scrollY > 0) {
    Nav.style.position = "sticky";
    Nav.style.top = "0";
    Nav.classList.add('z-[108]');
  } else {
    Nav.style.position = "relative";
  }
};

window.addEventListener("scroll", HandelScroll);

function Signup() {
    Formimage.classList.add("-translate-x-full");
    Formimage.classList.remove("translate-x-0");
    Formimage.classList.add("border-l-2");
    Formimage.classList.remove("border-r-2");
}
function Login() {
    Formimage.classList.add("translate-x-0");
    Formimage.classList.remove("-translate-x-full");
    Formimage.classList.add("border-r-2");
    Formimage.classList.remove("border-l-2");
}


const cartOpen = () => {
  cartBox.classList.add("right-0");
  cartBox.classList.remove("-right-full");
};
const cartClose = () => {
  cartBox.classList.add("-right-full");
  cartBox.classList.remove("right-0");
};

function getcart() {
  console.log('onload function work')
  // get localstorage data
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    addTocart();
  }
}

const slideLeft = () => {
  let Slider = document.querySelector('[data-slidedata]');
  Slider.scrollLeft = Slider.scrollLeft - 230;
};

const slideRight = () => {
  let Slider = document.querySelector("[data-slidedata]");
  Slider.scrollLeft = Slider.scrollLeft + 275;
};


const email = document.getElementById("Logemail");
const password = document.getElementById("Logpassword");
const signpassword = document.getElementById("Signpassword");
const confirmpassword = document.getElementById("Confirmpassword");
function UserLogin() {
  console.log(email.value, password.value);
}

const PassonOff = document.querySelector("[data-eyeicon]");
function Hideshow() {
  password.type = password.type === "password" ? "text" : "password";
  signpassword.type = signpassword.type === "password" ? "text" : "password";
  if (password.type === "password") {
    PassonOff.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    PassonOff.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
}
const EyeonOff = document.querySelector("[data-eyeonoff]");
function Hideshowc() {
  confirmpassword.type = confirmpassword.type === "password" ? "text" : "password";
  if (password.type === "password") {
    EyeonOff.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    EyeonOff.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
}

const Esymbol = document.querySelector("[data-evalidmsg]");
const Psymbol = document.querySelector("[data-pvalidmsg]");
const emsg = document.getElementById("emsg");
const Pmsg = document.getElementById("pmsg");
// password.addEventListener("keyup", checkData);

// function checkData() {
//   let returndata = true;
//   let passval = password.value;
//   const lowercase = new RegExp('(?=.*[a-z])');
//   const uppercase = new RegExp('(?=.*[A-Z])');
//   const number = new RegExp('(?=.*[0-9])');
//   const spcialchar = new RegExp('(?=.*[!@#\$%\^&\*])');
//   const length = new RegExp('(?=.{6,})');

// if (length.test(passval)) {
//   Psymbol.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #06a235;"></i>`;    
// } else {
//   Psymbol.innerHTML = `<i class="fa-regular fa-circle-xmark" style="color: #fb0404;"></i>`;
//       Pmsg.classList.add("text-red-600");
//       Pmsg.innerHTML = "password should be minium 6 character";
//       returndata = false;
// }

//   if (lowercase.test(passval)) {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #06a235;"></i>`;    
//   } else {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-xmark" style="color: #fb0404;"></i>`;
//     Pmsg.classList.add("text-red-600");
//     Pmsg.innerHTML = "please Enter one lowercase";
//     returndata = false;
//   }

//   if (uppercase.test(passval)) {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #06a235;"></i>`;    
//   } else {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-xmark" style="color: #fb0404;"></i>`;
//     Pmsg.classList.add("text-red-600");
//   Pmsg.innerHTML = "please Enter one uppercase ";
//   returndata = false;
//   }

//   if (number.test(passval)) {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #06a235;"></i>`;    
//   } else {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-xmark" style="color: #fb0404;"></i>`;
//     Pmsg.classList.add("text-red-600");
//   Pmsg.innerHTML = "please Enter one number";
//   returndata = false;
//   }

//   if (spcialchar.test(passval)) {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-check" style="color: #06a235;"></i>`;    
//   } else {
//     Psymbol.innerHTML = `<i class="fa-regular fa-circle-xmark" style="color: #fb0404;"></i>`;
//     Pmsg.classList.add("text-red-600");
//   Pmsg.innerHTML = "please Enter one spcial character";
//   returndata = false;
//   }
//   return returndata;
// }