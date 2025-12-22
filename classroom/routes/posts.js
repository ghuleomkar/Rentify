const express = require("express");
const router = express.Router();



//posts
//index-
router.get("/",(req,res)=>{
    res.send("get for posts")
});


//show 
router.get("/:id",(req,res)=>{
    req.send("get for show posts")
});


//post
router.post("/",(req,res)=>{
    req.send("post for show")
});


//delete 
router.delete("/:id",(req,res)=>{
    req.send("delete for show posts")
});

module.exports = router;