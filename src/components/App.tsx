import React, { useState, useEffect } from 'react';
import { WeatherCard } from './WeatherCard';
import { WeatherCardH } from './WeatherCardH';
import { Staged } from 'react-staged';
import {
    WeatherbitResponse,
    WeatherbitResponseH,
    WeatherData,
    WeatherDataH,
    fetchWeather,
} from '../services/WeatherService';

export const App: React.FC = () => {
    const [apiCall, setApiCall] = useState<WeatherbitResponse | null>(null);
    const [apiCallH, setApiCallH] = useState<WeatherbitResponseH | null>(null);

    useEffect(() => {
        fetchWeather(true).then(setApiCall);
        setInterval(() => {
            fetchWeather(true).then(setApiCall);
        }, 600000);
    }, []);

    const onClick = () => {
        fetchWeather(false).then(setApiCallH);
    };

    // const showHours = () => {
    //     if (apiCallH) {
    //         for (let i = 0; i < apiCallH)
    //     }
    // };

    console.log(apiCallH);
    console.log(apiCall);

    return (
        <>
            {apiCall && (
                <div className="WeatherBox">
                    <Staged amount={8}>
                        {apiCall.data.map((data: WeatherData, index: number) => (
                            <WeatherCard
                                key={index}
                                data={data}
                                hourly={index < 3 ? onClick : undefined}
                                id={String(index)}
                            />
                        ))}
                    </Staged>
                </div>
            )}
            {apiCallH && (
                <div className="WeatherBox">
                    <Staged amount={8}>
                        {apiCallH.data.map((data: WeatherDataH, index: number) => (
                            <WeatherCardH key={index} data={data} />
                        ))}
                    </Staged>
                </div>
            )}
        </>
    );
};
