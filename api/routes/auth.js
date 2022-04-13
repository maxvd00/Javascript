const router = require("express").Router(); // Router method van express.js Router zorgt voor een reactie om een respond
const User = require("../models/User");
const bodyParser = require("body-parser");
const CryptoJS = require("crypto-js"); 
// const parser = bodyParser.json()

//Register
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(404).json("Wrong password or username!");

    const { password, ...info } = user._doc; // zorgt ervoor dat het wachtwoord niet zichtbaar meer is ook niet de encryptie

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
