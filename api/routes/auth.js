const router = require("express").Router(); // Router method van express.js Router zorgt voor een reactie om een respond
const User = require("../models/User");
const bodyParser = require('body-parser')
// const parser = bodyParser.json()

//Register
router.post("/register", async (req, res) => {
   console.log(req.body)
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,  
        password: req.body.password,  
        
      
      });
     console.log(newUser)
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
    
});



module.exports = router;