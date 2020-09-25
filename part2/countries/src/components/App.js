import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './Countries'
import SearchField from './SearchField';

const App = () => {
    const [ countries, setCountries ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');

    const handleCountryChange = (event) => {
        setSearchInput(event.target.value);
    }

    const showCountry = (event) => {
        setSearchInput(event.target.value);
    }


    // Fetch data from Countries API
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
                <SearchField value={searchInput} onChange={handleCountryChange} />
            </div>
            <div>
                <Countries countries={countries} searchInput={searchInput} showCountry={showCountry} />
            </div>
        </div>
    );
}

export default App;
