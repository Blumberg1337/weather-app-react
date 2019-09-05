import React from 'react';
import {WeatherCard} from './WeatherCard';
import './App.css';

export const App = () => {

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
                {console.log("Hi from render")}
            </div>
        </>
    )
};