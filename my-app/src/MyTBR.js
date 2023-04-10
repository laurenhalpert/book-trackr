import React, {useEffect} from "react"
import BookList from "./BookList"
import Sort from "./Sort"

function MyTBR ({ books, onAddToTBR, onAddToRead, onRemove, onSort, setOnPage }) {
    useEffect(()=>{
        setOnPage("mytbr")
    }, [])
    return(
        <div id="mytbr">
            <h1>My TBR</h1>
            <h2>{books.length} {books.length === 1? "Book To Be Read": "Books To Be Read"}</h2>
            <Sort onSort={onSort} books={books} />
            <BookList books={books} onAddToRead={onAddToRead} onAddToTBR={onAddToTBR} onRemove={onRemove}/>
        </div>
    )
}

export default MyTBR