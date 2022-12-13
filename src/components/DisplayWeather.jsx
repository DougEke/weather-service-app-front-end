import React from "react";
import { useState } from 'react';
import "../styles/displayweather.css";
import Forecast from "./Forecast";
import ForecastedWeather from "./ForecastedWeather";
import {FiSunrise} from "react-icons/fi";
import {FiSunset} from "react-icons/fi";
import {WiHumidity} from "react-icons/wi";
import {WiDayHaze} from "react-icons/wi";
import {WiBarometer} from "react-icons/wi";

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
                            {data.name}, {data.sys.country} 
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
                            srcSet="" />

                        <form>
                            <span className="hi-lo-temp">                             
                                {Math.floor(data.main.temp_max - 273.15)} / {Math.floor(data.main.temp_min - 273.15)} Feels like: {Math.floor(data.main.feels_like - 273.15)}
                            </span>
                        </form>
                    </div>

                    <form>
                        <div className="sunrise-set">
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <table>
                                    <tr>
                                        <td>
                                            <FiSunrise
                                            style={{
                                                display: 'flex',
                                                width: 70,
                                                height: 50,
                                            }}/>
                                        </td>
                                        <td></td>
                                        <td>                                            
                                        </td>
                                        <td>
                                            <FiSunset
                                            style={{
                                                display: 'flex',
                                                width: 70,
                                                height: 50,
                                            }}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>
                                                <h5>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</h5>
                                            </span> 
                                        </td>
                                        <td></td>
                                        <td>                                            
                                        </td>
                                        <td>
                                            <span>
                                                <h5>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</h5>
                                            </span> 
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className="weather-info">
                            <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>

                                <table>
                                    <tr>
                                        <td>
                                            <WiHumidity
                                                style={{
                                                    display: 'flex',
                                                    width: 70,
                                                    height: 70,
                                                }}/>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <WiBarometer
                                                style={{
                                                    display: 'flex',
                                                    width: 70,
                                                    height: 70,
                                                }}/>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <WiDayHaze
                                                style={{
                                                    display: 'flex',
                                                    width: 70,
                                                    height: 70,
                                                }}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {/* <span> */}
                                                <h6>{data.main.humidity}</h6>
                                            {/* </span> */}
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <span>
                                                <h6>{data.main.pressure} hPa</h6>
                                            </span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <span>
                                                <h6>{data.visibility / 1000} km</h6>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>    
                    </form>                    


                    <div className="weatherdetails">
                        
                        {/* <div className="section1">
                            <table>
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
                        </div> */}

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