// import add from"./calc.mjs"
// const result=add(4,5);
// console.log(result)
// import add,{subtract,multiply}from"./calc.mjs"
// const result =add(4,5)
// console.log(result)
// const result1=subtractr(9,2)
// console.log(result1)

import add, { subtract, multiply } from "./calc.mjs";

const result = add(4, 5);
console.log(result); // 9

const result1 = subtract(9, 2);
console.log(result1); // 7
