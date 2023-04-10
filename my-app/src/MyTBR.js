import React from "react"
import BookList from "./BookList"


function MyTBR ({ books, onAddToTBR, onAddToRead, onRemove }) {
    
    return(
        <div id="mytbr">
            <h1>My TBR</h1>
            <h2>{books.length} {books.length === 1? "Book To Be Read": "Books To Be Read"}</h2>
          
            <BookList books={books} onAddToRead={onAddToRead} onAddToTBR={onAddToTBR} onRemove={onRemove}/>
        </div>
    )
}

export default MyTBR