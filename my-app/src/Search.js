import React from "react"

function Search({ search, onSearch }) {
    function handleChange(e) {
        onSearch(e.target.value)
    }
    return(
        <div>
            <label htmlFor="searchBar">Search: </label>
            <input id="searchBar" type="text" placeholder="Search..." value={search} onChange={handleChange}></input>
        </div>
    )
}

export default Search