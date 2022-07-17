import React, {useState} from "react";
import axios from 'axios';
import Weather from "./weather";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  //const apiKey = `26ccca7e0eb67957d35e1d9d974d493b`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=26ccca7e0eb67957d35e1d9d974d493b`;
  
  const searchLocation = (event) => {
    if(event.key == 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <Weather />
    // <div className="app">
    //   <div className="search">
    //     <input
    //     value={location}
    //     onChange={event => setLocation(event.target.value)}
    //     onKeyPress={searchLocation}
    //     placeholder = 'Enter location'
    //     type="text"/>
    //   </div>
    //   <div className="container">
    //     <div className="top">
    //       <div className="location">
    //         <p>{data.name}</p>
    //       </div>
    //       <div className="temp">
    //         {data.main ? <h1>{data.main.temp.toFixed()}*C</h1> : null}
    //       </div>
    //       <div className="description">
    //       {data.weather ? <p className="bold">{data.weather[0].main}</p> : null}
    //       </div>
    //     </div>
    //     {data.name != undefined && 
    //     <div className="bottom">
    //       <div className="feels">
    //       {data.main ? <p className="bold">{data.main.feels_like}*F</p> : null}
    //         <p>Feels Like</p>
    //       </div>
    //       <div className="humidity">
    //       {data.main ? <p className="bold">{data.main.humidity}%</p> : null }
    //       <p>Humdity</p>
    //       </div>
    //       <div className="wind">
    //       {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null }
    //         <p>Wind Speed</p>
    //       </div>
    //     </div>
    //     }
        
    //   </div>
    // </div>
  );
}

export default App;
