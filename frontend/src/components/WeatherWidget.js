import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Pilisszántó,HU&units=metric&lang=hu&appid=${apiKey}`
        );
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();

        const dailyForecast = data.list.reduce((acc, item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!acc.find((entry) => entry.date === date)) {
            acc.push({
              date,
              temp: item.main.temp,
              weather: item.weather[0].description,
              icon: item.weather[0].icon,
            });
          }
          return acc;
        }, []);

        setForecast(dailyForecast.slice(0, 7));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [apiKey]);

  return (
    <div className="weather-widget">
      <h3>Időjárás előrejelzés</h3>
      {error ? (
        <p>Hiba történt: {error}</p>
      ) : (
        <div className="forecast-container">
          {forecast.map((day) => (
            <div className="forecast-day" key={day.date}>
              <p>{new Date(day.date).toLocaleDateString("hu-HU")}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.weather}
              />
              <p>{day.weather}</p>
              <p>{Math.round(day.temp)}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
