const mongoose=require('mongoose');
const { type } = require('os');
const product=mongoose.Schema(
 
 {
name:{
 type:String,
 require:[true,"Please enter the product name"]
},price:{
 type:Number,
 required:true,
 default:0

}


 }


)