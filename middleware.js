  const myMiddleware=(req,res,next)=>{
    var sayi1=Math.random()
    sayi1=Math.round((sayi1*3));
     
   setTimeout(()=>{
       console.log(req.method)

   },sayi1)
    next()
}

module.exports=myMiddleware