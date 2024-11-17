import { useState, useEffect } from 'react'
import { atom, selector, useRecoilState, RecoilRoot } from 'recoil';
import './App.css'

const timAtom = atom({
  key: "time",
  default: new Date()
})

const timeSelector = selector({
  key: "timeSelector",
  get: function ({get}){
    const time = get(timAtom);
    return time.toLocaleDateString();
  }
})

function App() {
  const [time, setTime] = useRecoilState(timAtom);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000)


      return () => clearInterval(interval);
    }, [])
  

  return (
    
    <div>
    <h1>Current Time</h1>
    <h2>{time.toLocaleTimeString()}</h2>
    </div>
    
  )
}

export default App
