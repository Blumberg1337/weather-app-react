import React from 'react';
import "./WeatherCard.css";
import cloudy1 from "./../resources/cloudy1.png";
import cloudy2 from "./../resources/cloudy2.png";
import cloudy3 from "./../resources/cloudy3.png";
import cloudy4 from "./../resources/cloudy4.png";
import rainy from "./../resources/rainy.png";
import snowy from "./../resources/snowy.png";
import sunny from "./../resources/sunny.png";
import cloudy_colored from "./../resources/cloudy_colored.png";
import rainy_colored from "./../resources/rainy_colored.png";
import snowy_colored from "./../resources/snowy_colored.png";
import sunny_colored from "./../resources/sunny_colored.png";

export const WeatherCard = (props) => {
    const today = new Date();
    const day = today.getDay() + props.weekday;
    const weekdays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];
    const weatherIcons = [
        cloudy1, cloudy2, cloudy3, cloudy4, rainy, snowy, sunny, cloudy_colored, rainy_colored, snowy_colored, sunny_colored
    ];
    const temperature = Math.floor(Math.random() * 40 - 10);

    return (
        <div className="WeatherCard">
            {day < 7 ? weekdays[day] : weekdays[day - 7]}
            <br/>
            <br/>
            <img src={weatherIcons[Math.floor(Math.random() * weatherIcons.length)]}/>
            <br/>
            {temperature + "\xB0 C"}
        </div>
    )
};