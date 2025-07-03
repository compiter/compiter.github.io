


// let cart = {};

// const products = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 50 },
//   { id: 3, name: "Product 3", price: 75 },
// ];

// const showProducts = () => {
//   let str = "<ul>";
//   products.map((value) => {
//     str += `<li>${value.id} - ${value.name} - $${value.price}</li>`;
//   });
//   str += "</ul>";
//   let r = document.getElementById("root");
//   r.innerHTML = str;
// };

// function addToCart(id) {
//   cart = { ...cart, [id]: 1 };
// }

// function increment(id) {
//   cart = { ...cart, [id]: cart[id] + 1 };
// }

// function decrement(id) {
//   cart = { ...cart, [id]: cart[id] - 1 };
// }

// // Console Output Simulation
// console.log("List of Products");
// console.log(products);

// console.log(`Added Product 1 to cart`);
// addToCart(1);
// addToCart(2);

// console.log(cart);

// console.log(`Added Product 3 to cart`);
// addToCart(3);
// console.log(cart);

// console.log(`Incremented one quantity of Product 1 in cart`);
// increment(1);
// console.log(cart);

// console.log(`Incremented one more quantity of Product 1 in cart`);
// increment(1);
// console.log(cart);

// console.log(`Decremented one quantity of Product 1 from cart`);
// decrement(1);
// console.log(cart);

// increment(3);
// increment(3);
// console.log(cart);

// increment(2);
// increment(2);
// increment(2);
// increment(2);
// increment(2);
// console.log(cart);

// // Display detailed cart
// console.log("Display Cart with Product Details");
// products.map((value) => {
// if (cart[value.id]) {
//     console.log(
//       `${value.name} - $${value.price} - ${cart[value.id]} pcs - $${value.price * cart[value.id]}`
//     );
// }
// });

// const total = products.reduce((sum, value) => {
//   return sum + value.price * (cart[value.id] ?? 0);
// }, 0);
// console.log(`Order Value: $${total}`);

// // Render products in HTML
// showProducts();




// let cart = {};

// const products = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 50 },
//   { id: 3, name: "Product 3", price: 75 },
// ];

// const showProducts = () => {
//   let str = "";
//   products.forEach((product) => {
//     str += `
//       <div class="card">
//         <h3>${product.name}</h3>
//         <p>$${product.price}</p>
//         <button onclick="addToCart(${product.id})">Add to Cart</button>
//       </div>
//     `;
//   });
//   document.getElementById("root").innerHTML = `<div class="product-list">${str}</div>`;
// };

// function addToCart(id) {
//   cart = { ...cart, [id]: (cart[id] || 0) + 1 };
//   console.log(`Added ${products.find(p => p.id === id).name} to cart`);
//   console.log(cart);
// }

// // show products when page loads
// window.onload = showProducts;





// let cart = {};

// const products = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 50 },
//   { id: 3, name: "Product 3", price: 75 },
// ];

// const showProducts = () => {
//   let str = "";
//   products.forEach((product) => {
//     str += `
//       <div class="card">
//         <h3>${product.name}</h3>
//         <p>$${product.price}</p>
//         <button onclick="addToCart(${product.id})">Add to Cart</button>
//       </div>
//     `;
//   });
//   document.getElementById("root").innerHTML = `
//     <div class="product-list">${str}</div>
//     <hr>
//     <div id="cart-root"></div>
//   `;
//   showCart(); // call to display cart below products
// };

// function addToCart(id) {
//   cart = { ...cart, [id]: (cart[id] || 0) + 1 };
//   showCart();
// }

// function showCart() {
//   let str = "<h2>Cart Summary</h2>";
//   let total = 0;
//   let hasItems = false;

//   products.forEach((product) => {
//     if (cart[product.id]) {
//       const quantity = cart[product.id];
//       const subtotal = product.price * quantity;
//       total += subtotal;
//       hasItems = true;
//       str += `
//         <div class="cart-item">
//           ${product.name} - $${product.price} × ${quantity} = $${subtotal}
//         </div>
//       `;
//     }
//   });

//   if (!hasItems) {
//     str += "<p>Your cart is empty.</p>";
//   } else {
//     str += `<h3>Total: $${total}</h3>`;
//   }

//   document.getElementById("cart-root").innerHTML = str;
// }

// // show products on load
// window.onload = showProducts;




// /shopping cart
// let cart = {};
// const products = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 50 },
//   { id: 3, name: "Product 3", price: 75 },
// ];
// const showProducts = () => {
//   let str = "<div class='row'>";
//   products.map((value) => {
//     str += `<div>
//     <h3>${value.name}</h3>
//     <h4>$${value.price}</h4>
//     <button onclick='addToCart(${value.id})'>Add to Cart</button>
//     </div>`;
//   });
//   str += "</div>";
//   let r = document.getElementById("root");
//   r.innerHTML = str;
// };

// function addToCart(id) {
//   cart = { ...cart, [id]: 1 };
// }
// function increment(id) {
//   cart = { ...cart, [id]: cart[id] + 1 };
// }
// function decrement(id) {
//   cart = { ...cart, [id]: cart[id] - 1 };
// }
// function showCart() {
//   let str = "";
//   products.map((value) => {
//     cart[value.id] > 0 && (str += `<li>${value.name}-$${value.price}-<button>-</button>${cart[value.id]}<button>+</button>-$${value.price*cart[value.id]}</li>`);
//   });
//   let r = document.getElementById("root");
//   r.innerHTML = str;
// }

// const total = products.reduce((sum, value) => {
//   return sum + value.price * (cart[value.id] ?? 0);
// }, 0);
// // console.log(`Order Value:${total}`);




// let cart = {};

// const products = [
// { id: 1, name: "Product 1", price: 25 },
// { id: 2, name: "Product 2", price: 50 },
// { id: 3, name: "Product 3", price: 75 },
// ];

// const showProducts = () => {
// let str = "<div class='row'>"; products.map((value) => {
// str += `<div>
// <h3>${value.name}</h3>
//  <h4>$${value.price}</h4>
//  <button onclick='addToCart(${value.id})'>Add to Cart</button>
// </div>`;
// });
//  str += "</div>";
//  document.getElementById("root").innerHTML = str;
// };

// function addToCart(id) {
//  cart[id] = (cart[id] || 0) + 1;
// showCart();
// }

// function increment(id) {
// cart[id]++;
//  showCart();
// }

// function decrement(id) {
// if (cart[id] > 1) {
//  cart[id]--;
// } else {
// delete cart[id];
//  }
//  showCart();
// }

// function showCart() {
//  let str = "<ul>";
//  products.map((value) => {
// if (cart[value.id]) {
//  str += `
//  <li>
//  ${value.id} - ${value.name} -
// <button onclick="decrement(${value.id})">-</button>
//  ${cart[value.id]}
//  <button onclick="increment(${value.id})">+</button>
//  - $${value.price * cart[value.id]}
// </li>`;

// }
//  });
//  str += "</ul>";

//  // Total order value
// const total = products.reduce((sum, value) => {
//  return sum + value.price * (cart[value.id] ?? 0);
//  }, 0);

//  str += `<h3>Total Order Value: $${total}</h3>`;
//  document.getElementById("root").innerHTML = str;
// }



// pping cart
// let cart = {};
// const products = [
//   { id: 1, name: "Product 1", price: 25 },
//   { id: 2, name: "Product 2", price: 50 },
//   { id: 3, name: "Product 3", price: 75 },
// ];
// const showProducts = () => {
//   let str = "<div class='row'>";
//   products.map((value) => {
//     str += `<div>
//     <h3>${value.name}</h3>
//     <h4>$${value.price}</h4>
//     <button onclick='addToCart(${value.id})'>Add to Cart</button>
//     </div>`;
//   });
//   str += "</div>";
//   let r = document.getElementById("root");
//   r.innerHTML = str;
// };

// function addToCart(id) {
//   cart = { ...cart, [id]: 1 };
// }
// function increment(id) {
//   cart = { ...cart, [id]: cart[id] + 1 };
// }
// function decrement(id) {
//   cart = { ...cart, [id]: cart[id] - 1 };
// }
// function showCart() {
//   let str = "";
//   products.map((value) => {
//     cart[value.id] > 0 && (str += `<li>${value.name}-$${value.price}-<button>-</button>${cart[value.id]}<button>+</button>-$${value.price*cart[value.id]}</li>`);
//   });
//   let r = document.getElementById("root");
//   r.innerHTML = str;
// }

// const total = products.reduce((sum, value) => {
//   return sum + value.price * (cart[value.id] ?? 0);
// }, 0);
// console.log(`Order Value:${total}`);




let cart = {};
const products = [
{ id: 1, name: "Product 1", price: 25 },
{ id: 2, name: "Product 2", price: 50 },
{ id: 3, name: "Product 3", price: 75 },
];

function showProducts() {
let str = "<div class='row'>";
products.forEach((value) => {
str += `<div>
<h3>${value.name}</h3>
<h4>$${value.price}</h4>
<button onclick='addToCart(${value.id})'>Add to Cart</button>
</div>`;
 });
 str += "</div>";
document.getElementById("root").innerHTML = str;
}

function addToCart(id) {
cart[id] = (cart[id] || 0) + 1;
 showCart();
}

function increment(id) {
 cart[id] += 1;
 showCart();
}

function decrement(id) {
 if (cart[id] > 1) {
cart[id] -= 1;
 } else {
 delete cart[id];
}
 showCart();
}

function showCart() {
 let str = "<ul>";
 let total = 0;
 products.forEach((product) => {
 const qty = cart[product.id] || 0;
 if (qty > 0) {
const subtotal = product.price * qty;
 total += subtotal;
 str += `<li>
 ${product.name} - $${product.price} 
 <button onclick="decrement(${product.id})">-</button>
 ${qty}
 <button onclick="increment(${product.id})">+</button>
 = $${subtotal}
  </li>`;
}
 });
 str += `</ul><h3>Total order value: $${total}</h3>`;
 document.getElementById("root").innerHTML = str;
}
