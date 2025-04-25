import React from "react";
import "./weather.css";
import { assets } from "../../assets/assets";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={assets.search_icon} alt="" />
      </div>

      <img
        src={assets.cloud_icon}
        alt="weather icon"
        className="weather-icon"
      />
      <p className="temperature">20°C</p>
      <p className="location">Chemnitz</p>
      <div className="weather-data">
        <div className="col">
          <img src={assets.humid_icon} alt="humid" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={assets.wind_icon} alt="wind speed" />
          <div>
            <p>3.5 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
