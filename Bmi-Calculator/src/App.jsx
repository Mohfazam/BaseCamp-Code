import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bmi(){
  const [weight, setWeight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");

  function handleWeight(e){
    let w = parseFloat(e.target.value);
    calculateBMI(w,height);
    setWeight(w);
  }

  function handleheight(e){
    let h = parseFloat(e.target.value);
    calculateBMI(weight,h);
    setheight(h);
  }

  function calculateBMI(w, h){
    let bmi = w / ((h / 100) * (h / 100));

    setBmi(bmi);
    handleCategory(bmi);
  }

  function handleCategory(bmi){
    if (bmi < 18.5) {
      setCategory("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Normal weight");
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      setCategory("Overweight");
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      setCategory("Obesity (Class 1)");
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      setCategory("Obesity (Class 2)");
    } else {
      setCategory("Extreme Obesity (Class 3)");
    }
  }

  return(
    <div>
      <h1>BMI Calculator</h1>
      <h4>Enter Weight in KG'S</h4>
      <input type="number" placeholder='Enter Weight in Kilograms' onChange={handleWeight} />
      <br />
      <h4>Enter height in cms</h4>
      <input type="number" placeholder='Enter height in cms' onChange={handleheight} />
      <h3>BMI is : {bmi.toFixed(2)}</h3>
      <h3>Category is : {category}</h3>
    </div>
  )
}

function App() {


  return (
    <>
      <Bmi />
    </>
  )
}

export default App
