import React, { useEffect, useRef, useState } from "react";
import "./weather.css";
import { assets } from "../../assets/assets";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": assets.clear_icon,
    "01n": assets.clear_icon,
    "02d": assets.cloud_icon,
    "02n": assets.cloud_icon,
    "03d": assets.cloud_icon,
    "03n": assets.cloud_icon,
    "04d": assets.drizzle_icon,
    "04n": assets.drizzle_icon,
    "09d": assets.rain_icon,
    "09n": assets.rain_icon,
    "10d": assets.rain_icon,
    "10n": assets.rain_icon,
    "13d": assets.snow_icon,
    "13n": assets.snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please input city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || assets.clear_icon;

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in getting weather data");
    }
  };

  useEffect(() => {
    search("Ho Chi Minh");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={assets.search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      {weatherData ? (
        <>
          <img
            src={weatherData.icon}
            alt="weather icon"
            className="weather-icon"
          />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={assets.humid_icon} alt="humid" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={assets.wind_icon} alt="wind speed" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
