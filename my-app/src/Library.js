import React from "react"
import BookList from "./BookList"

function Library({books, onAddToTBR}) {
    return(
        <div id="library">
            <h1>Library Page</h1>
            <BookList books={books} onAddToTBR={onAddToTBR}/>
        </div>
    )
}

export default Library