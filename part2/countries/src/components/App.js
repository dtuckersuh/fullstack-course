import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [ countries, setCountries ] = useState([]);
    const [ searchResult, setSearchResult ] = useState([]);
    const [ country, setCountry ] = useState('');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        setSearchResult(countries.filter(search => search.name.toLowerCase().includes(country)));
    }

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data);
            })
    }, [])

    return (
        <div>
            <div>
                find countries <input value={country} onChange={handleCountryChange} />
            </div>
            <div>
                { searchResult.length > 10 ? <p>Too many matches, specify another filter</p>
                    : searchResult.map(search => <p key={search.alpha2Code}>{search.name}</p>)}
            </div>
        </div>
    );
}

export default App;
