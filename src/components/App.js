import React, {useState, useEffect, useRef} from 'react';
import {WeatherCard} from './WeatherCard';
import './App.css';

export const App = () => {
        const apiCall = useRef(
            fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3")
                .then(results => {
                    return results.json();
                })
        );

        setInterval(() => {
            fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3")
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    apiCall.current = data;
                    console.log(data);
                });
        }, 5000);

        // console.log(apiCall);

        return (
            <>
                <div className="WeatherBox">
                    <WeatherCard weekday={0}/>
                    <WeatherCard weekday={1}/>
                    <WeatherCard weekday={2}/>
                    <WeatherCard weekday={3}/>
                    <WeatherCard weekday={4}/>
                    <WeatherCard weekday={5}/>
                    <WeatherCard weekday={6}/>
                    <WeatherCard weekday={7}/>
                </div>
            </>
        )
    }
;