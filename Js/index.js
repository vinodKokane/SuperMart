// let cart_container = document.querySelector(".cart-items-box");
// let cart_btn = document.getElementById("cart-btn");
// cart_btn.onclick = () => {
//   cart_container.classList.toggle("active");
// };

// window.onscroll = () => {
//   cart_container.classList.remove("active");
// };

function change_header() {
  let menu_bar = document.querySelector(".menuBar");
  let current = window.scrollY;
  // console.log(current);

  if (current > 120) {
    menu_bar.classList.add("menubar-fixed");
  }
  else {
    menu_bar.classList.remove("menubar-fixed");
  }
}
window.addEventListener("scroll", change_header);


// product data--------------------
let product = [
  {
    id: 1,
    name: "Tata Salt",
    image: "Images/1.png",
    price: 27
  },
  {
    id: 2,
    name: "Fortune-Sunflower",
    image: "Images/2.png",
    price: 120
  },
  {
    id: 3,
    name: "Ashirvad-Atta",
    image: "Images/3.png",
    price: 60
  },
  {
    id: 4,
    name: "Toor Daal",
    image: "Images/4.png",
    price: 90
  },
  {
    id: 5,
    name: "Parryss Sugar",
    image: "Images/5.png",
    price: 30
  },
  {
    id: 6,
    name: "Saffola Gold",
    image: "Images/6.png",
    price: 120
  }, {
    id: 7,
    name: "Sona Masoori Daal",
    image: "Images/7.png",
    price: 67
  }, {
    id: 8,
    name: "Milky-Mist-Paneer",
    image: "Images/8.png",
    price: 100
  }, {
    id: 9,
    name: "Basmati Rice",
    image: "Images/9.png",
    price: 99
  }, {
    id: 10,
    name: "Sunflower",
    image: "Images/10.png",
    price: 127
  }, {
    id: 11,
    name: "Nestle Slim",
    image: "Images/12.png",
    price: 35
  }, {
    id: 12,
    name: "Bread",
    image: "Images/13.png",
    price: 55
  }, {
    id: 13,
    name: "Fried Graam",
    image: "Images/14.png",
    price: 35
  }, {
    id: 14,
    name: "Navaratna Daal",
    image: "Images/15.png",
    price: 45
  }, {
    id: 15,
    name: "White Peasmatar",
    image: "Images/16.png",
    price: 72
  }, {
    id: 16,
    name: "Channa-Dal",
    image: "Images/17.png",
    price: 47
  }
]
// all item can copy in categories

var categories = [... new Set(product.map((e) => {
  return e;
}))]

console.log(categories);
// --------------------------------------------------------------
let cart = [];
let cartItem = document.getElementById("cartItem");


function addToCart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}


function displaycart() {


  let j = 0, total = 0;

  let count = document.getElementById("count");

  count.innerHTML = cart.length;

  if (cart.length == 0) {

    cartItem.innerHTML = "Your cart is empty";

    document.getElementById("total").innerHTML = "$" + 0 + ".00";

  }
  else {
    console.log("-----cart-----", cart)
    cartItem.innerHTML = cart.map((items) => {

      var { name, image, price } = items;



      total += Number(price);

      document.getElementById("total").innerHTML = "$" + total + ".00";

      // console.log(name,price,image);

      return (
        `<div class='cart-item'>
                   <div class='row-img'>
                    <img class ='rowimg' src='${image}'>
                    </div>
                    <p style ='font-size:12px;'>${name}</p>
                    <h2 style ='font-size:15px;'>${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join("");
  }
}


function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

