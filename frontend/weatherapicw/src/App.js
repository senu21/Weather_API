import React, { useState } from "react";
import "./App.css";
import WeatherFetcher from "./WeatherFetcher"; // Importing WeatherFetcher component
import MapContainer from "./components/map_container";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div className="container" style={{display: "flex", flexDirection:"column",padding: "20px", justifyContent: "center", alignItems:"center", gap: "20px"}}>
            {/* <WeatherFetcher setWeatherData={setWeatherData} />
            <WeatherFetcherByDistrict setWeatherData={setWeatherData} /> */}
            <MapContainer />
            <WeatherFetcher setWeatherData={setWeatherData} />
    </div>
  );
};

export default App;
