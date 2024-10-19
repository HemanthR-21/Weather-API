import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    conditions: "Partially cloudy",
    humidity: 66.8,
    pressure: 1007,
    temp: 91.3,
    visibility: 1.9,
    windSpeed: 6.9,
  });

  const [backgroundImage, setBackgroundImage] = useState(
    "https://via.placeholder.com/1920x1080"
  );

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} setBackgroundImage={setBackgroundImage} />
    </div>
  );
}
