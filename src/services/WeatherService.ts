type WeatherInfo = { icon: string; code: number; description: string };

export type WeatherData = Readonly<{
    moonrise_ts: number;
    wind_cdir: string;
    rh: number;
    pres: number;
    high_temp: number;
    sunset_ts: number;
    ozone: number;
    moon_phase: number;
    wind_gust_spd: number;
    snow_depth: number;
    clouds: number;
    ts: number;
    sunrise_ts: number;
    app_min_temp: number;
    wind_spd: number;
    pop: number;
    wind_cdir_full: string;
    slp: number;
    valid_date: string;
    app_max_temp: number;
    vis: number;
    dewpt: number;
    snow: number;
    uv: number;
    wind_dir: number;
    max_dhi: number;
    clouds_hi: number;
    precip: number;
    low_temp: number;
    max_temp: number;
    moonset_ts: number;
    datetime: string;
    temp: number;
    min_temp: number;
    clouds_mid: number;
    clouds_low: number;
    weather: WeatherInfo;
}>;

export type WeatherDataH = Readonly<{
    app_temp: number;
    clouds: number;
    clouds_hi: number;
    clouds_mid: number;
    clouds_low: number;
    datetime: string;
    dewpt: number;
    dhi: number;
    dni: number;
    ghi: number;
    ozone: number;
    pod: string;
    pop: number;
    precip: number;
    pres: number;
    rh: number;
    slp: number;
    snow: number;
    snow_depth: number;
    solar_rad: number;
    temp: number;
    timestamp_local: string;
    timestamp_utc: string;
    ts: number;
    uv: number;
    vis: number;
    weather: WeatherInfo;
    wind_cdir: string;
    wind_cdir_full: string;
    wind_dir: number;
    wind_gust_spd: number;
    wind_spd: number;
}>;

export type WeatherbitResponse = Readonly<{
    city_name: string;
    country_code: string;
    data: WeatherData[];
    lat: string;
    lon: string;
    state_code: string;
    timezone: string;
}>;

export type WeatherbitResponseH = Readonly<{
    city_name: string;
    country_code: string;
    data: WeatherDataH[];
    lat: string;
    lon: string;
    state_code: string;
    timezone: string;
}>;

export const fetchWeather = (daily: boolean) =>
    fetch(
        `https://api.weatherbit.io/v2.0/forecast/${
            daily ? 'daily' : 'hourly'
        }?lang=de&postal_code=22761&country=de&key=4cb12e098d664cf3971b6cd11ea62ea3${daily ? '' : '&hours=48'}`
    ).then((results) => results.json());
