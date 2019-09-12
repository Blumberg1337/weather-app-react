import React from 'react';
import "./WeatherCard.css";

export const WeatherCard = (props) => {
    const today = new Date();
    const day = today.getDay() + props.id;
    const weekdays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    // console.log(props.data);
    // console.log(typeof props.id);

    if (props.data) {
        return (
            <div id={props.id} onClick={props.hourly} className="WeatherCard">
                <br/>
                {day < 7 ? weekdays[day] : weekdays[day - 7]}
                <br/>
                <br/>
                <img
                    src={"https://www.weatherbit.io/static/img/icons/" + props.data[props.id].weather.icon + ".png"}
                    alt={props.data[props.id].weather.description}/>
                <br/>
                <br/>
                {Math.round(props.data[props.id].temp) + "\xB0 C"}
                <br/>
                <br/>
            </div>
        )
    }

    return (
        <div/>
    )
};