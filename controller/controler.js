const product=require('../models/product.model.js');



const getProducts=async(req,res)=>{
    try{
        const products=await product.find();
        res.json(products);
    }catch(error){
        console.log(error);
    }
};
const getProduct=async(req,res)=>{
try{
 const products=await product.find({});
 res.status(200).json(products);

}catch(error){
 res.status(404).json({message:error.message});
}


};

const createProduct=async(req,res)=>{
try{
const product=await product.create(req.body);
res.status(201).json(product);
}
catch(error){
res.status(400).json({message:error.message});
}
};



const updateProduct=async(req,res)=>{
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
 };





const deleteProduct=async(req,res)=>{ 
try{
 const products=await product.findById(req.params.id);
 if(products){
  await products.remove();
  res.json({message:"Product Removed!"});
 }else{
  res.status(404).json({message:"Product Not Found!"});
 }
}
catch(error){
 res.status(404).json({message:error.message});
}
};



module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};