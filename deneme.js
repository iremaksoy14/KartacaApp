const hostname='127.0.0.1'  
const port=3003
var express = require('express');

const mongoose = require('mongoose');
const User=require("./models/User")

const app=express()

mongoose.connect('mongodb://127.0.0.1/user_db',{  
    useNewUrlParser:true,  //belirli deprecation hatalarını önlemek için kullanılıyor
    useUnifiedTopology:true,
    useCreateIndex:true
   
});


app.get("/",(req,res,next)=>{
    User.create({
        username:"Iremaksoy",
        email:"aksoyirem612@gmail.com",
        password:"123456"
    }).then((user) => {
        console.log(user)
        res.send("başarılı")
    
}).catch(err=>{console.log(err)})
  next()
})
app.listen(port,hostname,()=>{
    console.log("http://"+hostname+":"+port+"/")   
    
})


