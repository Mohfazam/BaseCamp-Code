import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import dotenv from 'dotenv';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;





import './App.css'
import { set } from 'mongoose';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Weather App</h1>
      <Fetchweather />
    </>
  )

}


function Fetchweather(){

  const [city, setCity] = useState("");
  const [Lat, setLat] = useState(null);
    const [Lon, setLon] = useState(null);
    const [main, setmain] = useState("");
    const [des, setdes] = useState("");

  function handleSearch(e){
    setCity(e.target.value);
  }


  async function handleSubmit(e) {
    
    e.preventDefault();
    try {
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: city,
          limit: 1,
          appid: apiKey,
        },
      });
      if(response.data.length > 0){
        const location = response.data[0];
        setLat(location.lat);
        setLon(location.lon);
        fetchData(location.lat, location.lon);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  async function fetchData(lat, lon){
    try{
      const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: lat,
          lon: lon,
          appid: apiKey,
          units: "metric"
        }
      });
      

      
        setmain(weather.data.weather[0].main);
        setdes(weather.data.weather[0].description);
        console.log(weather.data.weather[0].main);
        console.log(weather.data.weather[0].description);
      
    } catch(error){
      console.log("Error fetching weather data:", error);
    }
  }
  
  

  return (
    <>
      <input type="text" placeholder="Enter Your City" onChange={handleSearch}/>
      <button onClick={handleSubmit}>Search</button>
      <h2>Weather in {city}</h2>
      <p>Main Weather: {main}</p>
      <p>Description: {des}</p>

    </>
  )
}




export default App
