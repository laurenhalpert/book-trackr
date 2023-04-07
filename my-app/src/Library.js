import React from "react"
import BookList from "./BookList"
import NewBook from "./NewBook"

function Library({books, onAddToTBR, onAddToRead, onRemove }) {
    return(
        <div id="library">
            <h1>Library</h1>
            <BookList books={books} onAddToTBR={onAddToTBR} onAddToRead={onAddToRead} onRemove={onRemove}/>
            <br></br>
            <h2>Don't see what you're looking for?</h2>
            <h3>Add a book to our library here</h3>
            <NewBook />
        </div>
    )
}

export default Library