import { useState } from "react";
import { FatchWeather } from "../../api/FatchWeather";

function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await FatchWeather(query);
            setWeather(data);
            setQuery('');
            console.log(data);
        }
    }

    return (
        <div className="main">
            <div className="search">
                <input
                    type="search"
                    placeholder="Search..."
                    className="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={search}
                />
            </div>
            {weather.main && (
                <div className="city">
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    </div>
                    <div className="details">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;