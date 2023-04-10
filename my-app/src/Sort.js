import React from "react"

function Sort({ onSort, books }) {
    function handleSort(e){
        onSort(e.target.value, books)
        
    }
    return(
        <div>
            <label htmlFor="sortTBR">Sort By: </label>
            <select id="sortTBR" onChange={handleSort}>
                <option value="default">Sort By...</option>
                <option value="author">Author A-Z</option>
                <option value="title">Title A-Z</option>
            </select>
        </div>
    )
}

export default Sort