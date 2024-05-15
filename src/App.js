import Coordinates from "./components/Coordinates";
import Weather from "./components/Weather";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  // Déclaration de l'état de la donnée
  const [data, setData] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [latitude, setLatitude] = useState("14.6937");
  const [longitude, setLongitude] = useState("-17.4441");

  // Définir la valeur de la latitude/longitude
  function setLatitudeValue(latitudeValue){
    setLatitude(latitudeValue);
    getWeather();
  }
  function setLongitudeValue(longitudeValue){
    setLongitude(longitudeValue);
    getWeather();
  }

  // Déclaration de la clé d'API et de l'url
  const apiKey = "d4df683c5b4813fc746da7cd719cfc76";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
   // Fonction pour récupérer les données
  function getWeather (){
    axios.get(url).then((response) => {
      setData(response.data);
      setIsReady(true);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Utilisation de l'effet pour récupérer les données
  useEffect(() => {
    getWeather();
  }
  , []);

  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 font-sans">
      <div className="flex flex-row gap-4">
        {isReady ? <Weather data={data}/> : <p>Loading...</p>}
        <Coordinates latitude={latitude} longitude={longitude} setLatitudeValue={setLatitudeValue} setLongitudeValue={setLongitudeValue}/>
      </div>
    </div>
  );
}

export default App;
