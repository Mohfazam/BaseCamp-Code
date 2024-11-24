import React, { useState } from 'react';

export function Signup(){
    return(
        <>
        <h1>Sign Up</h1>
        
        <div>
        <h3>Name</h3>
        <input type="text" />

        <h3>Email</h3>
        <input type="text" />

        <h3>Passport</h3>
        <input type="password" />
        </div>

        <div>
            <br />
        <button>Signup</button>
        
        </div>
        <br />
        <br />
        <button>Login</button>
        
        </>
    )
}