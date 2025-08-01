import express from 'express';
const app=express();
app.listen(8080,()=>{
console.log("server started")
});
app.use(express.json());
let products=[];
app.post("/",(req,res)=>{
    const{id,name,price}=req.body;
    const obj={
        id,
        name,
        price,
    };
products.push(req.body)

res.json("product created");
});
app.get("/",(req,res)=>{
    res.json(products);
});
app.delete("/:id",(req,res)=>{
const id=req.params.id;
products=products.filter((product)=>product.id!==id);
res.json("product Deleted");
});