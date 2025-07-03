// const score=[2,1,7,5,3];
// console.log(score); // [ 2, 1, 7, 5, 3 ]
// console.log(score[0]); // 2
// console.log(score[1]); // 1
// score.push(9); // adds 4 to the end of the array
// console.log(score); // [ 2, 1, 7, 5, 3, 9 ]
// console.log(score.length); // 6

// const score1=[7,8,9];
// const newScore=[...score,9];
// console.log(newScore); // [ 2, 1, 7, 5, 3, 9, 7, 8, 9 ]


// const cart={
//     1:5,
//     5:3,

// };
// const newCart={...cart, 2:9}; // adds a new item with id 3 and quantity 2
// // const newCart={...cart, 4:1};
// console.log(newCart); // { '1': 5, '5': 3, '2': 9 }
// let cart={};
// const products=[


//         {id:1,name:"product 1",price:25},
//         {id:2, name:"product 2",price: 50},
//             {id:3, name:"product 3",price: 100},
//     ];
//     // console.log(products[0])
//     // const newProducts=[...products,{id:4,name:"product 4",price:56}]
//     function addToCart(id){
//     cart={...cart,[id]:1};
//     }
//     addToCart(1)
//     console.log(cart)
// addToCart(3)
//     console.log(cart)



//     let cart = {};

// function addToCart(id) {
//     cart = { ...cart, [id]: (cart[id] || 0) + 1 };
// }

// addToCart(1);   // adds item with ID 1 (quantity: 1)
// addToCart(1);   // adds same item again (quantity: 2)
// addToCart(3);   // adds item with ID 3 (quantity: 1)

// console.log(cart);  // Output: { '1': 2, '3': 1 }

// const score =[2,1,7,5,3];
// score.forEach((value)=>{
// console.log(value);
// })

// score.map =[2,1,7,5,3];
// score.forEach((value)=>{
// console.log(value);
// })
// const score =[2,1,7,5,3];
// const newScore =score.map((value)=>{
// return value+5

// });
// console.log(newScore)



// const score =[2,1,7,5,3];
// const newScore =score.filter((value)=>{
// return value>2

// });
// console.log(newScore)


// const score =[2,1,7,5,3];
// const newScore =score.find((value)=>{
// return value>2

// });
// console.log(newScore)


const score =[2,1,7,5,3];
const newScore =score.reduce((sum,value)=>{
return sum+value

},0);
console.log(newScore)