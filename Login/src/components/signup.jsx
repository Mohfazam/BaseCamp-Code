import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export function Signup(){

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();



    function handlename(e){
        const namee = e.target.value;
        setname(namee);
    }

    function handleEmail(e){
        const emaill = e.target.value;
        setemail(emaill);
    }

    function handlePassword(e){
        const passwordd = e.target.value;
        setpassword(passwordd);

    }

    async function handlesignup(){
        
  
        const userData = {name, email, password};

        try{
            const respone = await axios.post("http://localhost:3000/", userData).then( response => console.log(response.data));
            alert("You have signed up successfully");
            navigate("/login");
        }catch(error){
            console.log("Error while signing you up", error);
        }

        if(LoggedIn){

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