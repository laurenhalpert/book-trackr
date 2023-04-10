import React, {useEffect} from "react"
import BookList from "./BookList"
import Sort from "./Sort"

function MyRead({ books, onRemove }) {
    
    return(
        <div id="myread">
            <h1>My Read Books</h1>
            <h2>{books.length} {books.length === 1? "Book Read": "Books Read"}</h2>
           
            <BookList books={books} onRemove={onRemove} />
        </div>
    )
}

export default MyRead