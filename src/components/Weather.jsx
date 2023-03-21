import React, { useCallback } from "react";
// import { useEffect } from 'react';
// import { useState } from 'react';
import { useState, useEffect, useRef } from "react";
import DisplayWeather from "./DisplayWeather";
import "../styles/weather.css";

function Weather () {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [city, setCity ] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
    });

    const [weather, setWeather] = useState({});
    const [form, setForm] = useState({
        city: "",
        country: "",
    });

    const apiKey = 'f17a2fb25fcbb581fbdc91627d0afb28';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${apiKey}`; 

    const url = "http://localhost:3000/";

 
    
    async function weatherData(e) {
        e.preventDefault();

        setCity(form.city);

        if(form.city === "") {
            alert("Add a city");
        }
        else {
            const data = await fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => data);

            setWeather({data: data});

            console.log("weather: " + {data});
            console.log(weather.data);
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every second!');
        //   console.log('DEBUG: [todo] - Getting data from openweatherapi.....');
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         console.log('DEBUG: [todo] - Getting data from openweatherapi.....');

    //         // At this point we need to make a rest call to the WeatherServiceController rest endpoint
    //         // via the weatherdata function.
    //         // For this we need the city that is stored within the city variable, city.

    //         // weatherData(city);
            
    //     }, 2000);

    //     // return () => clearInterval(interval);
    // }, []);



    /**
     * 
     * ToDo: This will eventually replace the above async code.
     * Aim: When the city selection button is made, a rest call is made to the controller (WeatherServiceController) in order to 
     * retrieve the data from the openweather api, i.e. https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${apiKey}.
     * This is achieved via an api call to openweather within the WeatherServiceImpl.
     * The returned data is then mapped to the WeatherData and saved to the h2 db, whilst the returned json file is returned
     * back to the front end (here).
     */
    // const fetchWeatherData = useCallback(async() => {
    //     fetch(url + '{form.city}',
    //         method: "GET",
    //         headers: {
    //         "Accept" : "application/json",
    //         "Content-type": "application/json",
    //         "Authorisation": 'Bearer ${token}'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     }).catch(error => {});
    // }, [token, setWeather]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city") {
            setForm({ ...form, city: value });
        }
        if(name === "country") {
            setForm({ ...form, country: value });
        }
    };

    const date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return (
        <div className="weather">      

            <span className="title">Weather Service</span>
            <br />
            <span className="geolocation"> <h2>Location: {lat}, {long}</h2></span>
            
            <span className="currenttime"> <h2>Date: {day}-{month}-{year}</h2></span>

            <form>
                <input
                    type="text"
                    placeholder="city"
                    name="city"
                    onChange={(e) => handleChange(e)}
                />   
                
                <input
                    type="text"
                    placeholder="country"
                    name="country"
                    onChange={(e) => handleChange(e)}
                />   
            </form>
            <form>

                {/* 
                    Button to select the weather data for the given place name contained within
                    the paramater e. 
                */}
                <button className="getWeather"                         
                    onClick={(e) => weatherData(e)}>
                    Get Weather
                </button>
            </form>        
            
            {weather.data != undefined ? (
                <div>
                    <DisplayWeather data={weather.data}/>
                </div>
            ) : null}
        </div>
    );
}

export default Weather;