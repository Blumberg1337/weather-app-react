import React from 'react';
import "./WeatherCard.css";

export const WeatherCard = (props) => {
    const today = new Date();
    const day = today.getDay() + props.weekday;
    const weekdays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    // console.log(props.data);
    // console.log(typeof props.data);

    if (props.data) {
        return (
            <div className="WeatherCard">
                <br/>
                {day < 7 ? weekdays[day] : weekdays[day - 7]}
                <br/>
                <br/>
                <img
                    src={"https://www.weatherbit.io/static/img/icons/" + props.data[props.weekday].weather.icon + ".png"}
                    alt={props.data[props.weekday].weather.description}/>
                <br/>
                <br/>
                {Math.round(props.data[props.weekday].temp) + "\xB0 C"}
                <br/>
                <br/>
            </div>
        )
    }

    return (
        <>
            Loading...
        </>
    )
};