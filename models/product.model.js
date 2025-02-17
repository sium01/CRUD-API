const mongoose=require('mongoose');
const productSchema=mongoose.Schema(
 
 {
name:{
 type:String,
 require:[true,"Please enter the product name"]
},
Quantity:{
 type:Number,String,
 required:true,
 default:0
},
price:{
 type:Number,
 required:true,
 default:0

},
image:{
 type:String,
 required:true
},
brand:{
 type:String,
 required:true
},
category:{
 type:String,
 required:true
},
countInStock:{
 type:Number,
 required:true,
 default:0
},
rating:{
 type:Number,
 required:true,
 default:0
},
numReviews:{
 type:Number,
 required:true,
 default:0
},
description:{
 type:String,
 required:true
}
},
 {timestamps:true}

);
const Product=mongoose.model('Product',productSchema);

module.exports=Product;