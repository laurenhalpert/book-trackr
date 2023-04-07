import React from "react"
import BookList from "./BookList"

function MyTBR ({ books, onAddToTBR, onAddToRead, onRemove }) {
    console.log(books)
    return(
        <div id="mytbr">
            <h3>TBR</h3>
            <BookList books={books} onAddToRead={onAddToRead} onAddToTBR={onAddToTBR} onRemove={onRemove}/>
        </div>
    )
}

export default MyTBR