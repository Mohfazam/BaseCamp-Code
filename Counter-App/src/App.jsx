import { useState } from 'react'
import './App.css'


function App() {
    
const [count, setCount] = useState(0)

  return (
    <>
       <p>count = {count}</p>
       <br />
      <Increment setCount={setCount}/>
      <br />
      <Decrement setCount={setCount}/>
      <br />
      <Reset setCount={setCount}/>
    </>
  )
}


function Increment({setCount}){

  function increase(){
    setCount(c => c + 1)
  }

  return(
    <div>
      <button onClick={increase}>Increment</button>
    </div>
  )
}

function Decrement({setCount}){

  function decrease(){
    setCount(c => c - 1)
  }

  return(
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Reset({setCount}){

  function resetter(){
    setCount(0);
  }

  return(
    <div>
      <button onClick={resetter}>Reset</button>
    </div>
  )
}

export default App
