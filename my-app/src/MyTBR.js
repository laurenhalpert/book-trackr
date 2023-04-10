import React from "react"
import BookList from "./BookList"
import Sort from "./Sort"

function MyTBR ({ books, onAddToTBR, onAddToRead, onRemove, onSort }) {
    
    return(
        <div id="mytbr">
            <h1>My TBR</h1>
            <Sort onSort={onSort} books={books}/>
            <BookList books={books} onAddToRead={onAddToRead} onAddToTBR={onAddToTBR} onRemove={onRemove}/>
        </div>
    )
}

export default MyTBR