import React from 'react';
import exportFromJSON from 'export-from-json';

function DownloadCsv() {
  const exportType = 'csv';
  const fileName = 'CSV_DATA';

  const downloadCSV = async () => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7a42f972462ec0d69b55cc19f52a597f';

    const response = await fetch(url);
    const weatherData = await response.json();

    // Extract relevant data into an array of objects
    const data = [
      {
        temperature: weatherData.main,
        // humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind,
      },
    ];

    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div>
      <button className="btn btn-primary btn-block" onClick={downloadCSV}>
        Download csv
      </button>
    </div>
  );
}

export default DownloadCsv;
