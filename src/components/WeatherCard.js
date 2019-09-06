import React, {useState} from 'react';
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
    const [counter, setCounter] = useState(0);
    const [temperatureDaily, setTemperatureDaily] = useState(NaN);
    const [weatherPicDaily, setWeatherPicDaily] = useState({});
    const [weatherDescriptionDaily, setWeatherDescriptionDaily] = useState({});

    fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3")
        .then(results => {
            return results.json();
        })
        .then(data => {
            setCounter(counter + 1);
            setTemperatureDaily(data.data[props.weekday].temp);
            setWeatherPicDaily(data.data[props.weekday].weather.icon);
            setWeatherDescriptionDaily(data.data[props.weekday].weather.description);
        });

    return (
        <div className="WeatherCard">
            {day < 7 ? weekdays[day] : weekdays[day - 7]}
            <br/>
            <br/>
            {counter}
            <br/>
            <br/>
            <img src={weatherPicDaily} alt={weatherDescriptionDaily}/>
            <br/>
            <br/>
            {Math.round(temperatureDaily) + "\xB0 C"}
        </div>
    )
};