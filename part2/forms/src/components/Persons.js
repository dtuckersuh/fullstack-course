import React from 'react'

const Persons = ({ peopleToShow, search, searchPerson }) => {
    peopleToShow = search ? peopleToShow.filter(person => 
        person.name === searchPerson) : peopleToShow 

    return (
        <div>
            {peopleToShow.map(person => <p key={person.name}>
                {person.name}: {person.number}</p>)}
        </div>
    )
}

export default Persons
