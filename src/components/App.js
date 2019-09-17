import React, {useState, useEffect, useCallback} from 'react';
import {WeatherCard} from './WeatherCard';
import {WeatherCardH} from './WeatherCardH';

const fetchWeather = (daily) => fetch(`https://api.weatherbit.io/v2.0/forecast/${
    daily ? 'daily' : 'hourly'
}?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3${
    daily ? '' : '&hours=48'
}`)
    .then(results => results.json());

export const App = () => {
    const [apiCall, setApiCall] = useState(null);
    const [apiCallH, setApiCallH] = useState(null);

    useEffect(() => {
        fetchWeather(true).then(setApiCall);
        setInterval(() => {
            fetchWeather(true).then(setApiCall);
        }, 600000);
    }, []);

    const onClick = useCallback(e => {
        fetchWeather(false).then(setApiCallH);
    }, []);

    return (
        <>
            {apiCall && (
                <div className="WeatherBox">
                    {apiCall.data.map(((data, index) => <WeatherCard key={index} data={data}
                                                                     hourly={index < 3 ? onClick : null}/>))}
                </div>
            )}
            {apiCallH && (
                <div className="WeatherBox">
                    {apiCallH.data.map(((data, index) => <WeatherCardH key={index} data={data}/>))}
                </div>
            )}
        </>
    )
};
