import React from "react"
import BookList from "./BookList"
import Sort from "./Sort"

function MyRead({ books, onRemove, onSort }) {
    return(
        <div id="myread">
            <h1>My Read Books</h1>
            <Sort onSort={onSort} books={books} />
            <BookList books={books} onRemove={onRemove} />
        </div>
    )
}

export default MyRead