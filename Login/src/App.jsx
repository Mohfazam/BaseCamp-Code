import React, { useState } from 'react';
import './App.css';
import { Signup } from './components/signup';
import { Login } from './components/login';
import { User } from './components/user';

import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/User",
    element: <User/>
  }
]);

function App(){
  return(
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App;