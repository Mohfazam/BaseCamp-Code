const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();


const MONGO_URL = process.env.MONGO_URL;


const User = require("./models");

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/", async(req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "please fill all the fields"});
    }

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "email already exists"});
        }

        const newUser = new User({name, email, password});

        await newUser.save();
        res.status(201).json({message: "You have signed up successfully"});
    }catch(error){
        console.log("Error while signing you up", error);
    }

});

app.get("/login", async(req, res) => {
  const {email, password} = req.query;

  console.log("Login attempted");

  const user = await User.findOne({email, password});
  if(user){
    res.status(200).json({message: "You have logged in successfully"});
  }
  else{
    res.status(400).json({message: "Invalid email or password"});
  }
});


app.listen(3000);