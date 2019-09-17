import React from 'react';

export const WeatherCardH = ({ data: { timestamp_local, weather: { icon, description }, temp } }) => (
    <div className="WeatherCard">
        <br/>
        {timestamp_local.slice(-8, -3)}
        <br/>
        <br/>
        <img
            src={"https://www.weatherbit.io/static/img/icons/" + icon + ".png"}
            alt={description}/>
        <br/>
        <br/>
        {Math.round(temp) + "\xB0 C"}
        <br/>
        <br/>
    </div>
);