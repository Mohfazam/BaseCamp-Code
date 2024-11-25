const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");



const User = require("./models");

const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://cluster0.hfdziwx.mongodb.net/?retryWrites=true&w=majority");


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
    }catch(error){
        console.log("Error while signing you up", error);
    }

});


app.listen(3000);