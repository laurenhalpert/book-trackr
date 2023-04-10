import React from "react"
import Book from "./Book"

function BookList({ books, onAddToTBR, onAddToRead, onRemove }) {
    return(
        <div className="booklist">
            {books.map(book => {
                return(
                    <Book key={book.id} book={book} onAddToTBR={onAddToTBR} onAddToRead={onAddToRead} onRemove={onRemove}/>
                )
            })}
        </div>
    )
}

export default BookList