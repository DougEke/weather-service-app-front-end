import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayWeather from "./DisplayWeather";
import "../styles/weather.css";

function Weather () {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

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

 
    async function weatherData(e) {
        e.preventDefault();

        if(form.city === "") {
            alert("Add a city");
        }
        else {
            const data = await fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => data);

            setWeather({data: data});

            console.log("weather: " + {data});
        }
    }

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