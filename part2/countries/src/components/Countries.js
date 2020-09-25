import React from 'react';

import Country from './Country';

const Countries  = ({ countries, searchInput, showCountry }) => {
    const countriesFiltered = countries.filter(country => 
        country.name.toLowerCase().includes(searchInput.toLowerCase()));
    if (countriesFiltered.length === countries.length) {
        return (
            <div></div>
        );
    } else if (countriesFiltered.length === 1) {
        const chosenOne = countriesFiltered[0];
        return (
            <div key={chosenOne.name}>
                <Country country={chosenOne} />
            </div>
        )
    } else if (countriesFiltered.length < 10) {
        return (
            <div>
                { countriesFiltered.map(country => 
                    <p key={country.name}>{country.name} <button value={country.name} onClick={showCountry}>show</button></p>)}
            </div>
        )
    } else {
        return (
            <div>
                Too many matches, please specify another filter
            </div>
        )
    }
}

export default Countries;