import WeatherData from "./WeatherData";
import DownloadCsv from "./DownloadCsv";
import ByCityName from "./ByCityName";

function App() {

  const API_KEY = '7a42f972462ec0d69b55cc19f52a597f'



  return (
    <div className="App">
     <h1>Weather app</h1>
     <WeatherData lat={37.7749} lon={-122.4194} apiKey={API_KEY} /><br /> <br />
     <h3>csv download functionality</h3>
    <DownloadCsv /><br /><br /><br /> <br />
    <h3>get weather data by select city</h3>
    <ByCityName />
    </div>
  );
}

export default App;
