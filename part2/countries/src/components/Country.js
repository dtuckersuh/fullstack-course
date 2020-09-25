import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
    const [ weather, setWeather ] = useState([]);

    const apiKey = process.env.REACT_APP_API_KEY;
    const capital = country.capital;
    // Fetch weather data
    useEffect(() => {
            axios
                .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
                .then(response => {
                   setWeather(response.data); 
                })
    }, [apiKey, capital]);

    const currentWeather = weather.current;
    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.capital}</p>
            <p>Population {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {country.languages.map(language => 
                    <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt={`${country.name}'s flag`} height='100' width='100'/>
            <h2>Weather in {country.capital}</h2>
            <p><b>Temperature:</b> {currentWeather.temperature}</p>
            <img src={currentWeather.weather_icons} alt="weather" height='100' width='100' />
            <p><b>Wind:</b> {currentWeather.wind_speed} mph direction {currentWeather.wind_dir}</p>
        </div>
    );
}

export default Country;