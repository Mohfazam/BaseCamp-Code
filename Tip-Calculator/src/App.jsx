import { useState } from 'react'
import './App.css'


function TipCalculator(){

  const [billAmount, setBillAmount] = useState(0);
  const [TipPercentage, setTipPercentage] = useState(0);
  const [tip, setTip] = useState(0);

  function BillAmount(e){
    let Bill = parseFloat(e.target.value);
    calculateTip(Bill, tipPercentage);
    setBillAmount(Bill);
  }
  function tipPercentage(e){
    let TipP = parseFloat(e.target.value);
    calculateTip(billAmount, TipP);
    setTipPercentage(TipP);
  }

  function calculateTip(Bill, TipP){
    const tip = (Bill * TipP) / 100;
    setTip(tip);
  }


  return (
    <div>
      <h1>Tip Calculator</h1>
      <input type="number" placeholder='Enter Bill Amount' onChange={BillAmount}/>
      <input type="number" placeholder='Tip Percentage' onChange={tipPercentage}/>
      <h2>Bill Amount : ${billAmount}</h2>
      <h2>Tip Percentage : ${TipPercentage}</h2>
      <h1>Total Bill : ${tip}</h1>
    </div>
  )
}

function App() {
 
  

  return (
    <>
      <TipCalculator />
    </>
  )
}

export default App
