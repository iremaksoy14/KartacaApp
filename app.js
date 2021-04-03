const express=require("express")
const app=express()
const hostname='127.0.0.1'  
const port=3002  
const exphbs=require('express-handlebars') 
const myMiddleware=require("./middleware")
const mongoose = require('mongoose');
const bodyParser=require("body-parser")
const methodOverride=require('method-override')




mongoose.connect('mongodb://127.0.0.1/user_db',{  
    useNewUrlParser:true,  //belirli deprecation hatalarını önlemek için kullanılıyor
    useUnifiedTopology:true,
    useCreateIndex:true
   
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));  
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



const main=require("./routes/main")
app.use("/",main)
app.use(express.static('public'))

app.use("/",myMiddleware)

app.listen(port,hostname,()=>{
    console.log("http://"+hostname+":"+port+"/")   

    
})