const express = require("express");
const app = express();
const mongoose = require("mongoose"); // import van MONGO_DB
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

//connect met MONGODB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connectie is gelukt"))
  .catch((err) => { console.log(err);
  });

app.use(express.json()); // accepteerd json files
app.listen(8800, () => {
  console.log("Backend server is aan het runnen");
});
app.use("/api/auth", authRoute);


