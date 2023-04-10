import React, {useEffect} from "react"
import BookList from "./BookList"
import Sort from "./Sort"

function MyRead({ books, onRemove, onSort, setOnPage }) {
    useEffect(()=>{
        setOnPage("myread")
    }, [])
    return(
        <div id="myread">
            <h1>My Read Books</h1>
            <Sort onSort={onSort} books={books}/>
            <BookList books={books} onRemove={onRemove} />
        </div>
    )
}

export default MyRead