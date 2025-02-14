const mongoose=require('mongoose');
const product=mongoose.Schema(
 
 {
name:{
 type:String,
 require:[true,"Please enter the product name"]
}


 }


)