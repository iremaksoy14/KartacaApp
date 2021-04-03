
var express = require('express');

var router = express.Router();
const User=require("../models/User")

/* Todo Listeleme Islemi Burada Yapilacak. */


    router.get("/",(req,res)=>{
       
          res.render('body/index',)
       
                             })

     router.get("/showusers",(req,res)=> {
  

        User.find({}).then(users=>{
            console.log(users)
 
            res.render("body/home",{users:users})
        })

        });

router.get('/adduser', (req, res)=> {
     
    res.render("body/adduser")
})
  

/* User Ekleme Islemi Burada Yapilacak. */
router.post("/adduser", (req, res)=>{
 
      User.create({
          username:req.body.username,
          email:req.body.email,
          password:req.body.password
      }).then((user) => {
               res.redirect("/")
    }).catch((err) => {
        console.log(err)
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
  
});

router.get("/update/:id",(req,res)=>{
    const id=req.params.id
    User.findById(id).then(user=>{
        res.render("body/update",{user:user})

    })
    
})

/* User Guncelleme Islemi Burada Yapilacak. */
router.put("/update/:id", function(req, res){
    
    var id = req.params.id;

    User.findOne({_id:id}).then((user) => {
        user.username=req.body.username,
        user.email=req.body.email,
        user.password=req.body.password
        user.save().then(()=>{
            res.redirect("/body/home")
        })
    }).catch((err) => {
        res.json("Güncelleme İşleminde Hata Oluştu.");
    });
  
});

/* User Silme Islemi Burada Yapilacak. */
router.delete("/sil/:id", (req, res)=>{
  
    var id = req.params.id;
    User.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.")
        res.redirect("body/home");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
  
});

module.exports = router;