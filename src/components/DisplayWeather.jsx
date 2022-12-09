import React from "react";
import "../styles/displayweather.css";
import Forecast from "./Forecast";
import ForecastedWeather from "./ForecastedWeather";

function DisplayWeather (props) {
    const {data} = props;    

    const iconurl = "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";

    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    return (
        <div className="displayweather">
            {data.cod != 404 ? (
                <React.Fragment>
                    <div className="maincard">
                        <span className="cardtitle">
                            {data.name}, {data.sys.country}. Weather
                        </span>
                        <span className="cardsubtitle" >
                        {daylist[new Date().getDay()]} {new Date().toLocaleTimeString()}
                            
                        </span>

                        <h1>
                            {"  "}
                            {Math.floor(data.main.temp - 273.15)}
                            <sup>o</sup>
                        </h1>

                        <span className="weather-main" >
                            {data.weather[0].main}
                        </span>

                        <img className="weather-icon" 
                            src={iconurl} 
                            alt="" 
                            srcset="" />

                        <span className="weather-description">
                            {"  "}
                            {data.weather[0].description}
                        </span>

                    </div>

                    <div className="weatherdetails">
                        <div className="section1">
                            <table>
                                <tr>
                                    <td>
                                        <h4>High/Low</h4>                                            
                                    </td>
                                    <td>
                                        <span>
                                            {Math.floor(data.main.temp_max - 273.15)}/
                                            {Math.floor(data.main.temp_min - 273.15)}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Humidity</h4>                                            
                                    </td>
                                    <td>
                                        <span>
                                            {data.main.humidity}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Pressure</h4>                                            
                                    </td>
                                    <td>
                                        <span>
                                            {data.main.pressure} hPa
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Visibility</h4>                                            
                                    </td>
                                    <td>
                                        <span>
                                            {data.visibility / 1000} km
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="section2">
                            <table>
                                <tr>
                                    <td>
                                        <h4>Wind</h4>
                                    </td>
                                    <td>
                                        <span>{Math.floor((data.wind.speed * 18) /5)} kph </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Wind Direction</h4>
                                    </td>
                                    <td>
                                        <span>{Math.floor(data.wind.deg)} <sup>o</sup> deg </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Sunrise</h4>
                                    </td>
                                    <td>
                                        <span>
                                            {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                        </span>                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Sunset</h4>
                                    </td>
                                    <td>
                                        <span>
                                            {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                        </span>                                        
                                    </td>
                                </tr>
                            </table>

                        </div>

                    </div>

                    {/* console.log("DisplayWeather debug: " + data); */}

                    <div className="weather-forecast">                        
                        <form>
                            <div>
                                {/* <Forecast data={data}/> */}
                                <ForecastedWeather data={data}/>
                            </div>
                        </form>
                    </div>
                  
                </React.Fragment>
            ) : (
                <div className="maincard">
                    <h2> data.message</h2>
                </div>    
            )}
        </div>
    );
}

export default DisplayWeather;