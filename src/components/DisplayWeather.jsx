import React from "react";
import { useState } from 'react';
import "../styles/displayweather.css";
import Forecast from "./Forecast";
import ForecastedWeather from "./ForecastedWeather";
import {FiSunrise, FiVolumeX} from "react-icons/fi";
import {FiSunset} from "react-icons/fi";
import {WiHumidity} from "react-icons/wi";
import {WiDayHaze} from "react-icons/wi";
import {WiBarometer} from "react-icons/wi";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Tooltip } from "@mui/material";

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
                            <Grid container
                                spacing={5}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'left',
                                    }}>
                                <Grid item xs={3}>                                                                
                                    {Math.floor(data.main.temp_max - 273.15)} / {Math.floor(data.main.temp_min - 273.15)}                                    
                                </Grid>
                                <Grid item xs={2}>
                                    Feels like: {Math.floor(data.main.feels_like - 273.15)} 
                                </Grid>
                                <Grid item xs={2}>                          
                                    Wind: {Math.floor((data.wind.speed * 18) /5)} kph
                                </Grid>
                                <Grid item xs={4}>                          
                                    Direction: {Math.floor(data.wind.deg)}<sup>o</sup> 
                                </Grid>
                            </Grid>
                        </form> 
                    </div>

                   <form>
                        <Grid container 
                            spacing={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}> 

                            <Grid item xs={3}>
                                    <FiSunrise
                                        style={{
                                            display: 'flex',
                                            width: 70,
                                            height: 50,}}/>
                            </Grid>
                            <Grid item xs={3}>
                                    <FiSunset
                                        style={{
                                            display: 'flex',
                                            width: 70,
                                            height: 50,}}/>
                            </Grid>
                        </Grid>
                        <Grid container 
                            spacing={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }} >   
                            <Grid item xs={3}>
                                <h5>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</h5>
                            </Grid>
                            <Grid item xs={3}>
                                <h5>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</h5>
                            </Grid>

                        </Grid>
                   </form>

                   <form>
                        <Grid container 
                            spacing={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}> 

                            <Grid item xs={3}>
                                <WiHumidity
                                    style={{
                                        display: 'flex',
                                        width: 70,
                                        height: 70,
                                    }}/>
                            </Grid>
                            <Grid item xs={3}>
                                <WiBarometer
                                    style={{
                                        display: 'flex',
                                        width: 70,
                                        height: 70,
                                    }}/>
                            </Grid>
                            <Grid item xs={3}>
                                <WiDayHaze
                                    style={{
                                        display: 'flex',
                                        width: 70,
                                        height: 70,
                                    }}/>
                            </Grid>  
                        </Grid>  
                        <Grid container
                            style={{
                                justifyContent: 'space-between',
                                flexbasis: 'auto,'
                            }}>

                            <Grid item xs={5}>
                                <h6>{data.main.humidity}</h6>
                            </Grid>  
                            <Grid item xs={3}>
                                <h6>{data.main.pressure} hPa</h6>
                            </Grid>
                            <Grid item xs={4}>
                                <h6>{data.visibility / 1000} km</h6>
                            </Grid>  

                        </Grid> 
                   </form> 

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