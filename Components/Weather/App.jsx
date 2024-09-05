import React,{useState} from 'react'
import './App.css'

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    async function fetchWeather(){
        const apiKey = 'bccccc62cf022f575cf8e4169cdd7e3b';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
    };

    function handleSearch(){
        fetchWeather();
    };
  return (
    <div>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name" 
            />
            <button onClick={handleSearch}>Search</button>

            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            )}
        </div>
  )
}

export default Weather