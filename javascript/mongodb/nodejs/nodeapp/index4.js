import express from 'express';
const app=express()
app.listen(8080,()=>{
console.log("server started")
})
const auth=(req,res,next)=>{
const name=req.params.name;
if(name=="john"){
next();

}
else{
    res.send("Access denied");
}
};
app.get("/:name",auth,(req,res)=>{
res.send(" hello world");

});


