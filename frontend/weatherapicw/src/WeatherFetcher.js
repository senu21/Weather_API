import React, { useState } from 'react';
import './App.css';
import WeatherDataDisplay from './WeatherDataDisplay'; // Import WeatherDataDisplay component

const WeatherFetcher = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const fetchData = () => {
    const apiKey = 'xvkffkvkrsvmtormbgdttjdcjgfskmsrhfsrmg';
    fetch('https://weatherapinodejsbackendcw.onrender.com/api/v1/weather/lk/latest', {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => setWeatherData(data.data))
      .catch(error => console.error('Error fetching weather data:', error));
  };

  const handleClick = () => {
    setIsClick(!isClick); // Toggle isClick state when button is clicked
    fetchData(); // Fetch data
  };

  return (
    <div>
      <button className='button-86' onClick={handleClick}>All</button>
      {isClick && <WeatherDataDisplay weatherData={weatherData} />}
    </div>
  );
};

export default WeatherFetcher;
