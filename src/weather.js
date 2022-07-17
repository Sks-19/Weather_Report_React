import React, { useState } from "react";
import axios from "axios";
import './weather.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Weather() {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=26ccca7e0eb67957d35e1d9d974d493b`;

    const searchLocation = (event) =>
    {
        if(event.key == 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
            })
            setLocation('')
        }
    }

    return (
          <div class="container-fluid px-1  mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="row card0">
                <div class="card1 col-lg-8 col-md-7">
                    <small>Today's Weather Update</small>
                    <div class="text-center">
                        <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
                    </div>
                    <div class="row px-3 mt-3 mb-3">
                        {data.main ? <h1 id="temprature" class="large-font mr-3 text-danger">{data.main.temp.toFixed()}*C</h1> : null}
                        <div class="d-flex flex-column mr-3">
                            <h2 class="mt-3 mb-0 text-white">{data.name}</h2>
                            <small>10:36 - Tuesday, 22 Oct '19</small>
                        </div>
                        <div class="d-flex flex-column text-center font-weight-bold">
                            {data.weather ? <h1 className="text-white">{data.weather[0].description}</h1> : null}
                        </div>
                    </div>
                </div>
                <div class="card2 col-lg-4 col-md-5">
                      <div className="search">
                        <input className="input"
                         value={location}
                         onChange={event => setLocation(event.target.value)}
                         onKeyPress={searchLocation}
                         placeholder = 'Enter Location'
                         type="text"/>
                       </div>
                       {data.name != undefined &&
                        <div className="bottom">
                        <h1>Weather Details</h1>
                        <div class="row px-1">
                            <p class="font-weight-bold col-sm-5">Cloudy</p>
                            {data.clouds ? <p className="ml-auto col-sm-5">{data.clouds.all}</p>: null}
                        </div>
                        <div class="row px-1">
                            <p class="font-weight-bold col-sm-5">Feels Like</p>
                            {data.main ? <p className="ml-auto col-sm-5">{data.main.feels_like} *F</p> : null}
                        </div>
                        <div class="row px-1">
                            <p class="font-weight-bold col-sm-5">Pressure</p>
                            {data.main ? <p className="ml-auto col-sm-5">{data.main.pressure}</p> : null}
                        </div>
                        <div class="row px-1">
                            <p class="font-weight-bold col-sm-5">Humidity</p>
                            {data.main ? <p className="ml-auto col-sm-5">{data.main.humidity} %</p> : null}
                        </div>
                        <div class="row px-1">
                            <p class="font-weight-bold col-sm-5">Wind Speed</p>
                            {data.wind ? <p className="ml-auto col-sm-5">{data.wind.speed.toFixed()} Km/h</p> : null }
                        </div>
                        </div>                       
                       }
                       

                        <div class="line mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;