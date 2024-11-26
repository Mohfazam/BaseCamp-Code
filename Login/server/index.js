const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");



const User = require("./models");

const app = express();
app.use(express.json());

app.use(cors());


mongoose.connect("")
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


app.listen(3000);