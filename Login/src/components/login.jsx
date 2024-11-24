import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Login(){
    return(
        <>
        <h1>login</h1>
        
        <div>

        <h3>Email</h3>
        <input type="text" />

        <h3>Passport</h3>
        <input type="password" />
        </div>

        <div>
            <br />
        <button>Login</button>
        
        </div>
        <br />
        <br />
        <Link to="/">SignUp</Link>
        
        </>
    )
}