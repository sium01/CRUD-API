const express=require("express");
const product=require("../models/product.model.js");
const router=express.Router();
const {getProducts,getProduct,createProduct, updateProduct,deleteProduct}=require("../controller/controler.js");

router.get("/",getProducts);

router.get('/:id',getProduct);


router.post('/:id' ,createProduct);

//update a product
router.put('/:id',updateProduct);


//delete a product
router.delete('/:id',deleteProduct);




module.exports=router;