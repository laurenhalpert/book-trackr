import React from "react"
import BookList from "./BookList"

function MyTBR ({ books }) {
    console.log(books)
    return(
        <div id="mytbr">
            <h3>TBR</h3>
            <BookList books={books} />
        </div>
    )
}

export default MyTBR