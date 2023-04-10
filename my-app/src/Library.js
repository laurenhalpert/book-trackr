import React from "react"
import BookList from "./BookList"
import NewBook from "./NewBook"
import Search from "./Search"
import Sort from "./Sort"

function Library({ books, onAddToTBR, onAddToRead, onRemove, onNewBook, search, onSearch, onSort}) {
    
    
    return(
        <div id="library">
            <h1>Library</h1>
            <Search search={search} onSearch={onSearch}/>
            <Sort onSort={onSort} books={books}  />
            <BookList books={books} onAddToTBR={onAddToTBR} onAddToRead={onAddToRead} onRemove={onRemove}/>
            <br></br>
            <h2>Don't see what you're looking for?</h2>
            <h3>Add a book to our library here</h3>
            <NewBook onNewBook={onNewBook}/>
        </div>
    )
}

export default Library