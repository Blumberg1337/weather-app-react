import React from 'react';
import "./WeatherCard.css";

export const WeatherCardH = (props) => {
    // console.log(props.data);
    // console.log(typeof props.hid);

    if (props.data) {
        return (
            <div id={props.hid} className="WeatherCard">
                <br/>
                {props.data[props.hid].timestamp_local.slice(-8, -3)}
                <br/>
                <br/>
                <img
                    src={"https://www.weatherbit.io/static/img/icons/" + props.data[props.hid].weather.icon + ".png"}
                    alt={props.data[props.hid].weather.description}/>
                <br/>
                <br/>
                {Math.round(props.data[props.hid].temp) + "\xB0 C"}
                <br/>
                <br/>
            </div>
        )
    }

    return (
        <div/>
    )
};