import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export function Signup(){

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");



    function handlename(e){
        const namee = e.target.value;
        setname(name);
    }

    function handleEmail(e){
        const email = e.target.value;
        setemail(email);
    }

    function handlePassword(e){
        const password = e.target.value;
        setpassword(password);

    }

    async function handlesignup(){

        
        
        const userData = {name, email, password};
        // if(!name || !email || !password){
        //     alert("Please fill all the fields");
        //     return;
        // }

        try{
            const respone = await axios.post("http://localhost:5000/signup", userData);
            alert("You have signed up successfully");
        }catch(error){
            console.log("Error while signing you up", error);
        }
    }

    return(
        <>
        <h1>Sign Up</h1>
        
        <div>
        <h3>Name</h3>
        <input type="text" onChange={handlename}/>

        <h3>Email</h3>
        <input type="text" onChange={handleEmail}/>

        <h3>Password</h3>
        <input type="password" onChange={handlePassword}/>
        </div>

        <div>
            <br />
        <button onClick={handlesignup}>Signup</button>
        
        </div>
        <br />
        <br />
        <Link to="/login">Login</Link>
        
        </>
    )
}