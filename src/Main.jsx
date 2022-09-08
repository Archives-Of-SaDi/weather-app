import React, { useState } from 'react';
import fetchData from './fetchData';

function Main() {
  const [query, setQuery] = useState('');
  const [weatherInfo, setWeatherInfo] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchData(query);
      setWeatherInfo(data);
      setQuery();
      console.log(data);
    }
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter a name of place"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weatherInfo.main && (
        <div className="city">
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </div>
          <div className="details">
            <h2 className="city_name">
              <span>{weatherInfo.name}</span>
              <sup>{weatherInfo.sys.country}</sup>
            </h2>
            <div className="city_temp">
              {Math.round(weatherInfo.main.temp)}
              <sup>&deg;C</sup>
              <p>{weatherInfo.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
