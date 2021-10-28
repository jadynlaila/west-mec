const connectDB = require("./db/connect");
const express = require("express");
const { route } = require("./routes/projects");
const app = express();
require("dotenv").config();

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get("/", (req, res) => res.send(`<h1>Store API</h1>`))
  .use('/api/v1/products', route)


const startApp = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(3000, () => {
      console.log("listening @ 300");
    });
  } catch (err) {
    console.log(err);
  }
};

startApp();