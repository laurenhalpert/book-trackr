import React from "react"

function Book ({ book, onAddToTBR }) {
    function handleClick(e) {
        return e.target.innerText === "Add To My TBR" ? onAddToTBR(book) : null
    }
    return(
        <div id="book">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.image} alt={book.title}></img>
            <br></br>
            <button onClick={handleClick}>Add To My TBR</button>
           
            
        </div>
    )
}

export default Book