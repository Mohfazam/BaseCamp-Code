import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleEmail(e){
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    }

    function handlePassword(e){
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    }

    async function handleLogin(){
        try {
            const response = await axios.get("http://localhost:3000/login", {
                params: { 
                    email: email,
                    password: password
                }
            });
            alert("You have logged in successfully");
            console.log(response.data);
            console.log("Redirecting attempt");
            navigate("/user");
            console.log("Redirecting successfully");
        } catch(error) {
            console.error("Error details:", error.response ? error.response.data : error);
            alert(error.response?.data?.message || "Login failed");
        }
    }

    return(
        <>
        <h1>Login</h1>
        
        <div>
            <h3>Email</h3>
            <input type="text" value={email} onChange={handleEmail}/>

            <h3>Password</h3>
            <input type="password" value={password} onChange={handlePassword}/>
        </div>

        <div>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
        <br />
        <br />
        <Link to="/">SignUp</Link>
        </>
    )
}