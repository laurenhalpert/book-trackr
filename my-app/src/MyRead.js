import React from "react"
import BookList from "./BookList"

function MyRead({ books }) {
    console.log(books)
    return(
        <div id="myread">
            <h1>My Read Books</h1>
            <BookList books={books} />
        </div>
    )
}

export default MyRead