import React from "react"
import Book from "./Book"

function BookList({ books, onAddToTBR }) {
    return(
        <div id="booklist">
            <h2>BookList</h2>
            {books.map(book => {
                return(
                    <Book key={book.id} book={book} onAddToTBR={onAddToTBR}/>
                )
            })}
        </div>
    )
}

export default BookList