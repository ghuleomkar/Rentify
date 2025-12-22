const express = require("express");
const router = express.Router();



//index-users
router.get("/",(req,res)=>{
    res.send("get for users")
});


//show users
router.get("/:id",(req,res)=>{
    req.send("get for show users")
});


//post users
router.post("/",(req,res)=>{
    req.send("post for show users")
});


//delete users
router.delete("/:id",(req,res)=>{
    req.send("delete for show users")
});


module.exports = router;