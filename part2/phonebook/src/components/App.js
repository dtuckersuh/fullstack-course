import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'

const App = () => {
    const [ persons, setPersons ] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data);
            })
    }, [])

    const peopleToShow = persons

    const [ search, setSearch ] = useState(false)
    const [ searchPerson, setSearchPerson ] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} peopleToShow={peopleToShow} 
                search={search} setSearch={setSearch} 
                searchPerson={searchPerson} setSearchPerson={setSearchPerson}/>
            <h3>Add a new </h3>
            <PersonForm persons={persons} setPersons={setPersons} /> 
            <h3>Numbers</h3>
            <Persons peopleToShow={peopleToShow} search={search} 
                searchPerson={searchPerson}/>
        </div>
    )
}
export default App;
