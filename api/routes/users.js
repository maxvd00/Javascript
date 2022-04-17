const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//Update 

router.put("/id", async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        
    }
})
//Delete
//Get
//get user stats