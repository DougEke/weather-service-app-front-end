import React from "react";
import Forecast from "./Forecast";
import "../styles/forecastedweather.css";

function ForecastedWeather (props) {

    const {data} = props;
    const {date} = createDaysOfWeek(new Date());

    function createDaysOfWeek(d) {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        const date = [];

        for(var i = 0; i < 5; i++) {
            if(d.getDate() + i === 7) {
                date[i] = 0;
            }
            else if(d.getDate() + i === 8) {
                date[i] = 1;
            }
            else if(d.getDate() + i === 9) {
                date[i] = 2;
            }
            else if(d.getDate() + i === 10) {
                date[i] = 3;
            }
            
        }

        return [
            days[date[0]],
            days[date[1]],
            days[date[2]],
            days[date[3]],
            days[date[4]],
        ]
    }

    return(
        <div className="forecast_container">
            {/* <Forecast data={data} date={date[0]}/>  */}
        </div>
    );
}

export default ForecastedWeather;