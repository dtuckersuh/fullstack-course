import React from 'react'

const Filter = ({ persons, search, setSearch, searchPerson, setSearchPerson }) => {
    const handleSearch = (event) => {
        setSearch(event.target.value !== '')
        setSearchPerson(event.target.value)
    }

    return (
        <div>
            search: <input value={searchPerson} onChange={handleSearch} />
        </div>
    )
}

export default Filter
