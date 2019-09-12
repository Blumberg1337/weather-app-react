import React, {useState, useEffect, useCallback} from 'react';
import {WeatherCard} from './WeatherCard';
import {WeatherCardH} from './WeatherCardH';
import './App.css';

export const App = () => {
    const [apiCall, setApiCall] = useState({});
    const [apiCallH, setApiCallH] = useState({});

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
                console.log("hi");
            });
        fetch("https://api.weatherbit.io/v2.0/forecast/hourly?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3&hours=48\n")
            .then(results => {
                return results.json();
            })
            .then(data => {
                setApiCallH(data);
                console.log("derp");
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

    const onClick = useCallback(e => {
        console.log("hello");
        setApiCallH({
            d: 1,
            e: 2
        });
        console.log(apiCallH);
    }, [apiCallH]);

    return (
        <>
            <div className="WeatherBox">
                <WeatherCard id={0} data={apiCall.data} hourly={onClick}/>
                <WeatherCard id={1} data={apiCall.data} hourly={onClick}/>
                <WeatherCard id={2} data={apiCall.data} hourly={onClick}/>
                <WeatherCard id={3} data={apiCall.data}/>
                <WeatherCard id={4} data={apiCall.data}/>
                <WeatherCard id={5} data={apiCall.data}/>
                <WeatherCard id={6} data={apiCall.data}/>
                <WeatherCard id={7} data={apiCall.data}/>
            </div>
        </>
    )
};