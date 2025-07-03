//objects
// const student={
//     name:"harsh",
//     age:21,
//     city:"delhi"
// };
// console.log(student); // { name: 'harsh', age: 21, city: 'delhi' }
// console.log(student.name); // harsh
// console.log(student["age"]); // 21
// student.city="mumbai";
// console.log(student); // { name: 'harsh', age: 21, city: 'mumbai' }
// student.city="delhi";
// console.log(student); // { name: 'harsh', age: 21, city:
// delete student.city; // { name: 'harsh', age: 21 }
// console.log(student); // { name: 'harsh', age: 21 }
// delete student.age; // { name: 'harsh' }
// console.log(student); // { name: 'harsh' }

// const keys=Object.keys(student);
// console.log(keys); // [ 'name' ]
// const values=Object.values(student);
// console.log(values); // [ 'harsh' ]
const cart={
1:5,
3:1,
5:2,
};
const items=Object.keys(cart).length;
console.log(items); // 3
cart[3]=2; // update quantity of item with id 3
console.log(cart); // { '1': 5, '3': 2, '
// cart[3]=cart[3]+1; // increment quantity of item with id 3
// console.log(cart); // { '1': 5, '3': 3, '
// cart[3]=cart[3]-1; // decrement quantity of item with id 3
// console.log(cart); // { '1': 5, '3': 2, '
