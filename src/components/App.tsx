import React, { useEffect, useState } from 'react';
import { WeatherCard } from './WeatherCard';
import { Staged } from 'react-staged';
import { fetchWeather, WeatherbitResponse, WeatherData } from '../services/WeatherService';

export const App: React.FC = () => {
    const [itemsPerPage, setItemsPerPage] = useState<number>(1);
    const [apiCall, setApiCall] = useState<WeatherbitResponse | null>(null);
    // const [apiCallH, setApiCallH] = useState<WeatherbitResponseH | null>(null);

    useEffect(() => {
        fetchWeather(true).then(setApiCall);
        setInterval(() => {
            fetchWeather(true).then(setApiCall);
        }, 600000);
    }, []);

    // need new api key... from another api provider like https://openweathermap.org/api
    // const onClick = () => {
    //     fetchWeather(false).then(setApiCallH);
    // };

    useEffect(() => {
        const windowSize = window.innerWidth;
        if (windowSize >= 800) {
            setItemsPerPage(8);
        } else if (windowSize >= 600) {
            setItemsPerPage(4);
        } else if (windowSize >= 300) {
            setItemsPerPage(2);
        }
    }, []);

    // const showHours = () => {
    //     if (apiCallH) {
    //         for (let i = 0; i < apiCallH)
    //     }
    // };

    // console.log(apiCallH);
    console.log(apiCall);

    return (
        <>
            {apiCall && (
                <div className="WeatherBox">
                    <Staged amount={itemsPerPage}>
                        {apiCall.data.map((data: WeatherData, index: number) => (
                            <WeatherCard
                                key={index}
                                data={data}
                                // hourly={index < 3 ? onClick : undefined}
                                id={String(index)}
                            />
                        ))}
                    </Staged>
                </div>
            )}
            {/*{apiCallH && (*/}
            {/*    <div className="WeatherBox">*/}
            {/*        <Staged amount={8}>*/}
            {/*            {apiCallH.data.map((data: WeatherDataH, index: number) => (*/}
            {/*                <WeatherCardH key={index} data={data} />*/}
            {/*            ))}*/}
            {/*        </Staged>*/}
            {/*    </div>*/}
            {/*)}*/}
        </>
    );
};
