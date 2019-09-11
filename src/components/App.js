import React, {useState, useEffect, useRef} from 'react';
import {WeatherCard} from './WeatherCard';
import './App.css';

export const App = () => {
    const [apiCall, setApiCall] = useState({});

    // setInterval(() => {
    //     fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3")
    //         .then(results => {
    //             return results.json();
    //         })
    //         .then(data => {
    //             apiCall.current = data;
    //             console.log("data in interval: " + data);
    //         });
    // }, 2000);

    // useEffect(() => {
    //     clearTimeout(interval);
    // });

    useEffect(() => {
        fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3")
            .then(results => {
                return results.json();
            })
            .then(data => {
                setApiCall(data);
            });
    }, []);

    // const interval = setTimeout(() => {
    //     fetch("https://api.weatherbit.io/v2.0/forecast/daily?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3")
    //         .then(results => {
    //             return results.json();
    //         })
    //         .then(data => {
    //             setApiCall(data);
    //             console.log(data);
    //         });
    // }, 60000);

    return (
        <>
            <div className="WeatherBox">
                <WeatherCard data={apiCall.data} weekday={0}/>
                <WeatherCard data={apiCall.data} weekday={1}/>
                <WeatherCard data={apiCall.data} weekday={2}/>
                <WeatherCard data={apiCall.data} weekday={3}/>
                <WeatherCard data={apiCall.data} weekday={4}/>
                <WeatherCard data={apiCall.data} weekday={5}/>
                <WeatherCard data={apiCall.data} weekday={6}/>
                <WeatherCard data={apiCall.data} weekday={7}/>
            </div>
        </>
    )
};