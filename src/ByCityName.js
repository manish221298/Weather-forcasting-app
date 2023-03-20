import React, { useState } from 'react';

function ByCityName() {
  const [city, setCity] = useState(''); // initialize city state
  const [weatherData, setWeatherData] = useState(null); // initialize weatherData state
  const cityName = ["patna", "delhi", "kolkata", "chandigarh", "mumbai"]

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiKey = '7a42f972462ec0d69b55cc19f52a597f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    setWeatherData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select a city:
          <select value={city} onChange={handleChange}>
            <option value="">--Please choose a city--</option>
            <option value="patna">Patna</option>
            <option value="delhi">Delhi</option>
            <option value="kolkata">Kolkata</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </label>
        <button type="submit">Get weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default ByCityName;
