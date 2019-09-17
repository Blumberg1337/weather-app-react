import React from 'react';

export const WeatherCard = ({id, data: {ts, temp, weather: {description, icon}}, hourly}) => (
    <div id={id} onClick={hourly} className="WeatherCard">
        <br/>
        {new Date(ts * 1000).toDateString().slice(0, 3)}
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