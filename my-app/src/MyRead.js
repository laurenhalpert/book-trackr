import React from "react"
import BookList from "./BookList"

function MyRead({ books }) {
    return(
        <div id="myread">
            <h3>Read</h3>
            <BookList books={books} />
        </div>
    )
}

export default MyRead