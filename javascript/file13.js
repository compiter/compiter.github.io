// spread
// const marks={
//     maths:95,

// };
// marks={...marks,science:54};
// console.log(marks)
// let students=["harsh","Ananta","Khushboo"]
// students=[...students,"Azam"]
// console.log(students)


// Use 'let' instead of 'const' so you can reassign
let marks = {
 maths: 95,
};

// Now you can spread and reassign
marks = { ...marks, science: 54 };
console.log(marks); // { maths: 95, science: 54 }

let students = ["harsh", "Ananta", "Khushboo"];
students = [...students, "Azam"];
console.log(students); // ["harsh", "Ananta", "Khushboo", "Azam"]
