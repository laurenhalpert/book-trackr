import React from "react"
import BookList from "./BookList"

function MyTBR ({ books, onAddToTBR, onAddToRead, onRemove }) {
    
    return(
        <div id="mytbr">
            <h1>My TBR</h1>
            <BookList books={books} onAddToRead={onAddToRead} onAddToTBR={onAddToTBR} onRemove={onRemove}/>
        </div>
    )
}

export default MyTBR