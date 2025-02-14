const express=require("express");
const mongoose = require('mongoose');
app=express();


app.get("/",(req,res)=>{
 res.send("Node API Server Updated!")
});
mongoose.connect("mongodb+srv://sohailhazarysiam:9S8GSj9cXiyWA9Bl@cluster0.pmdpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
 console.log("Connection Success!");
 app.listen(3050,()=>{
  console.log("Server Run on 3001 port!")
 });
})
.catch(()=>{
 console.log("Connection Failed!")
})
