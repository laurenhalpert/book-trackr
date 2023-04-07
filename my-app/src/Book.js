import React from "react"

function Book ({ book, onAddToTBR, onAddToRead, onRemove }) {
    function handleClick(e) {
        if (e.target.innerText === "Add To My TBR"){
            onAddToTBR(book)
        } else if (e.target.innerText === "Move to My Read Books") {
            onAddToRead(book)
        }
    }
    function handleRemove(e){
        onRemove(book)
    }
    return(
        <div id="book">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title}></img>
            <br></br>
            <button onClick={handleClick}>{book.onTBR? "Move to My Read Books" : "Add To My TBR"}</button>
            {book.onTBR? <button onClick={handleRemove}>Remove</button>: null}
            
        </div>
    )
}

export default Book