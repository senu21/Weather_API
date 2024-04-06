import React from 'react';

const WeatherDataDisplay = ({ weatherData }) => {
  return (
    <div className="weather-card-container">
      {weatherData.map(data => (
        <div className="weather-card" key={data._id}>
          <h2>{data._district}</h2>
          <p>Temperature: {data._temperature}°C</p>
          <p>Humidity: {data._humidity}%</p>
          <p>Air Pressure: {data._airPressure} hPa</p>
          <p>Last Updated: {data._lastUpdatedDateTime}</p>
          {data.updatedNow && <p>{data._district} updated now!</p>}
        </div>
      ))}
    </div>
  );
};

export default WeatherDataDisplay;
