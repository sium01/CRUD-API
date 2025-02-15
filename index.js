const express=require("express");
const mongoose = require('mongoose');
const product=require('./models/productmodel.js');
app=express();
app.use(express.json());



app.get("/",(req,res)=>{
 res.send("Node API Server Updated!")
});


app.get("/api/products",async(req,res)=>{
try{
 const products=await product.find({});
 res.status(200).json(products);
}catch(err){
 res.status(404).json({message:err.message});
}
});


// API to get a single product
app.get('/api/products/:id',async(req,res)=>{
try{
 const products=await product.findById(req.params.id);
 res.status(200).json(products);
}catch(err){
 res.status(404).json({message:err.message});
}
});

//API to update a product
app.put('/api/products/:id',async(req,res)=>{
try{
 const products=await product.findById(req.params.id);
 if(products){
  products.name=req.body.name; 
  products.Quantity=req.body.Quantity;
  products.price=req.body.price;
  products.image=req.body.image;
  products.category=req.body.category;
  
  const updatedProduct=await products.save();
  res.status(200).json(updatedProduct);
 }else{
  res.status(404).json({message:"Product Not Found!"});
 }
}catch(err){
 res.status(404).json({message:err.message});
}
});

//API to delete a product

app.delete("/api/products/:id",async(req,res)=>{
 try{
  const productes=await product.findByIdAndDelete(req.params.id);
  if(!productes){
   return res.status(404).json({message:"Wrong Answer!"});
  }
   res.status(200).json({message:"Product Deleted!"});
  
  
 }catch(err){
  res.status(404).json({message: 'Error deleting user', error: error.message});
 }
});





app.post('/api/products',async(req,res)=>{
try{
 const products=await product.create(req.body);
 res.status(200).json(products);
} catch(err){
 res.status(404).json({message:err.message});
}
});





mongoose.connect("mongodb+srv://sohailhazarysiam:9S8GSj9cXiyWA9Bl@cluster0.pmdpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
 console.log("Connection Success!");
})
.catch(()=>{
 console.log("Connection Failed!")
});
app.listen(4025,()=>{
 console.log("Server Run on 3001 port!")
});
