import React from 'react';

type WeatherCardHProps = {
    data: { timestamp_local: string; weather: { icon: string; description: string }; temp: number };
};

export const WeatherCardH: React.FC<WeatherCardHProps> = ({
    data: {
        timestamp_local,
        weather: { icon, description },
        temp,
    },
}) => (
    <div className="WeatherCard">
        <br />
        {timestamp_local.slice(-8, -3)}
        <br />
        <br />
        <img src={'https://www.weatherbit.io/static/img/icons/' + icon + '.png'} alt={description} draggable={false} />
        <br />
        <br />
        {Math.round(temp) + '\xB0 C'}
        <br />
        <br />
    </div>
);
