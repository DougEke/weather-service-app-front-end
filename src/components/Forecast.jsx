import React from "react";
import "../styles/forecast.css";

function Forecast (props, date) {

    const {data} = props;
    // const date = new Date();

    const iconurl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

    console.log("Forecast debug: " + data);

    return (
        <div>
            <h1 className="forecast-title">
                {[date[0], date[1], date[2]]}
            </h1>

            <img className="forecast-weather-icon" 
                src = {iconurl}
                alt={data.weather[0].main} 
            />

            <div className="forecast-temperature">
                <span className="forecast-max-temp">
                    {Math.floor(data.main.temp_max - 273.15)}
                    <sup className="temp-symbol">o</sup>
                </span>
                <span className="forecast-min-temp">
                    {Math.floor(data.main.temp_min - 273.15)}
                    <sup className="temp-symbol">o</sup>
                </span>
            </div>            
        </div>
    );
}

export default Forecast;