import React, { useState, useEffect } from 'react';

const apiKey = 'your-api-key-here'; // replace with your API key from OpenWeatherMap

const defaultLocation = {
  lat: 28.7041,
  lon: 77.1025,
  name: 'Delhi',
};

const cities = [
  { lat: 28.7041, lon: 77.1025, name: 'Delhi' },
  { lat: 19.0760, lon: 72.8777, name: 'Mumbai' },
  { lat: 12.9716, lon: 77.5946, name: 'Bangalore' },
  // add more cities as needed
];

function Weather() {
  const [location, setLocation] = useState(defaultLocation);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=7a42f972462ec0d69b55cc19f52a597f`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  }, [location]);

  function handleLocationChange(event) {
    const selectedCity = cities.find(city => city.name === event.target.value);
    setLocation(selectedCity);
  }

  return (
    <div>
      <h1>Weather for {location.name}</h1>
      <h3>get weather data by select latitude and longitude</h3>
      <select value={location.name} onChange={handleLocationChange}>
        {cities.map(city => (
          <option key={`${city.lat},${city.lon}`} value={city.name}>{city.name}</option>
        ))}
      </select>
      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp} &deg;C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Description: {weather.weather[0].description}</p>
    </div>
  ) : (
    <p>Loading weather data...</p>
  )}
</div>

);
}

export default Weather;
