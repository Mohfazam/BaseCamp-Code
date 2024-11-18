import { useState } from 'react'
import './App.css'


function ColorPicker(){
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  function HexToRGB(hex){
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    return `${r}, ${g}, ${b}`;
      
    
  }

  return (
    <div>
      <h1>Color Picker</h1>
      <div>
        <p>Select Your Color : <input type="color" value={color} onChange={handleColorChange} /></p>
      </div>
      <p>HexCode : <strong>{color}</strong></p>
      <p>RGB Code : [<strong>{HexToRGB(color)}</strong>]</p>
    </div>
  )
}



function App() {
  

  return (
    <>
      <ColorPicker />
    </>
  )
}

export default App
