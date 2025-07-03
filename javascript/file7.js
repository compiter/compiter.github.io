const f1 = () => {
console.log("hello");
}
// const f1=10;
const main=(x)=>{
x();
}
main(f1)
// spread operator
const add = (...args) => {
    console.log(args[0]);
}
add(4,5,6,7,8)
