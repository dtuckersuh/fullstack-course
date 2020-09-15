import React, { useState } from 'react';

import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'

const App = () => {
    const [ persons, setPersons ] = useState([
        { 
            name: 'Arto Hellas', 
            number: '040-1234567'
        },
        {
            name: 'after',
            number: '452-234512'
        },
        {
            name: 'the',
            number: '231-123451'
        },
        {
            name: 'party',
            number: '342-54612'
        }
    ])

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
