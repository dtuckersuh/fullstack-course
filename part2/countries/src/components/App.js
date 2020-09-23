import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [ countries, setCountries ] = useState([]);
    const [ searchResult, setSearchResult ] = useState([]);
    const [ country, setCountry ] = useState('');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data);
            })
    }, [])

    const searchCountry = (event) => {
        event.preventDefault();
        setSearchResult(countries.filter(country => country === event.target.value));
    }

    const countriesToShow = searchResult.length > 10 ? 
                                <p>Too many matches, specify another filter</p>
                                : searchResult.map(result => {
                                    <p>result</p>
                                })
    return (
        <div>
            <form onSubmit={searchCountry}>
                <div>
                    find countries <input value={country} onChange={handleCountryChange} />
                </div>
            </form>
            <div>
            </div>
        </div>
    );
}

export default App;
