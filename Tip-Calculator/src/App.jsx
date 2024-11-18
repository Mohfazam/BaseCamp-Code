import { useState } from 'react'
import './App.css'


function TipCalculator(){

  const [billAmount, setBillAmount] = useState(0);
  const [TipPercentage, setTipPercentage] = useState(0);
  const [tip, setTip] = useState(0);

  function BillAmount(e){
    let Bill = e.target.value;
    calculateTip(Bill, tipPercentage);
    setBillAmount(Bill);
  }
  function tipPercentage(e){
    let TipP = e.target.value;
    calculateTip(TipP);
    setTipPercentage(BillAmount, TipP);
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
      <h2>Bill Amount : {billAmount}</h2>
      <h2>Tip Percentage : {TipPercentage}</h2>
      <h1>Total Bill : {tip.parseFloat().Fixed(2)}</h1>
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
