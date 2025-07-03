// promises
// function f1(){
//     setTimeout(()=>{return 5;

//     },1000);

// }
// function f2(x){
// console.log(x+7)
// }
// const n=f1()
// const result=f2(n)
// console.log(result)

// function f1(){

//     return new Promise((resolve,reject)=>{
//     resolve(5);
// reject("something went wrong")
// });
// }
// function f2(x){
// console.log(x+7)
// }
// // f1().then((n)=>f2(n));
// f1()
// .then((n)=>f2(n))
// .catch((err)=>console.log(err));



// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then((data)=>{
// data.map(value=>{
//     console.log(value.name)
// })
// })
// .catch((err)=>console.log(err));

const fetchData=async()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/users");
const data= await res.json();
data.map((value)=>{
console.log(value.name);
})
};
fetchData();
