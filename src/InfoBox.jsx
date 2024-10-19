import React, { useEffect } from "react"; // Ensure useEffect is imported
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info, setBackgroundImage }) {
  const Hot_URL =
    "https://img.freepik.com/premium-photo/orange-sky-with-sun-clouds-during-hot-summer-weather_144356-92319.jpg";
  const Cool_URL =
    "https://png.pngtree.com/thumb_back/fh260/background/20240923/pngtree-foggy-autumn-park-with-cold-weather-dark-and-atmospheric-seasonal-scene-image_16246776.jpg";
  const Rain_URL =
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";

  useEffect(() => {
    if (info.humidity > 70) {
      setBackgroundImage(Rain_URL);
    } else if (info.temp > 80) {
      setBackgroundImage(Hot_URL);
    } else {
      setBackgroundImage(Cool_URL);
    }
  }, [info, setBackgroundImage]);

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 70
                ? Rain_URL
                : info.temp > 80
                ? Hot_URL
                : Cool_URL
            }
            title="Weather Conditions"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.temp > 95 ? (
                <WbSunnyIcon />
              ) : info.temp < 40 ? (
                <AcUnitIcon />
              ) : (
                <ThunderstormIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <div>Temperature: {info.temp}&deg;F</div>
              <div>Humidity: {info.humidity}</div>
              <div>Pressure: {info.pressure}</div>
              <div>Visibility: {info.visibility}</div>
              <div>Wind Speed: {info.windSpeed}</div>
              <div>Conditions: {info.conditions}</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
