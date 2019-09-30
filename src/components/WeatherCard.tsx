import React, { MouseEventHandler } from 'react';

type WeatherCardProps = {
    id: string;
    data: {
        ts: number;
        temp: number;
        weather: { icon: string; description: string };
    };
    hourly?: MouseEventHandler;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
    id,
    data: {
        ts,
        temp,
        weather: { description, icon },
    },
    hourly,
}) => (
    <div id={id} onClick={hourly} className="WeatherCard">
        <br />
        {new Date(ts * 1000).toDateString().slice(0, 3)}
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
