import axios from 'axios'
import { useEffect, useState } from 'react'

import Weather from './components/Weather'

import './App.css'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat =pos.coords.latitude
    const lon =pos.coords.longitude
    // console.log({lat, lon});
    const API_KEY = "d759158615cea4fccb9ba2071860b272"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // console.log(url);

    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((error) => console.log(error))

  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)

  }, [])

  return (
    <>
      <main className='h-14 bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white font-lato font-bold text-lg flex justify-center items-center px-4'>
          <Weather weatherInfo = {weatherInfo}/>
      </main>
    </>
  )
}

export default App
