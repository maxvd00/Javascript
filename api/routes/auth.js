const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => { 
  const newUser = new User({ // maakt nieuwe user aan 
    username: req.body.username,//username
    email: req.body.email, //email
    password: CryptoJS.AES.encrypt( //wachtwoord encrypt
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user); // gaat goed
  } catch (err) {
    res.status(500).json(err); // error 500
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or username!"); //echo foutmelding als email verkeerd is

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY); 
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8); 

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!"); // echo foutmelding als wachtwoord verkeerd is 

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;