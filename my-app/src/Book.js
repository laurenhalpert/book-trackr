import React from "react"

function Book ({ book, onAddToTBR, onAddToRead, onRemove }) {
    function handleClick(e) {
        if (e.target.innerText === "Add To My TBR"){
            fetch(`http://localhost:3000/books/${book.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({onTBR: true})
            })
            .then(r=>r.json())
            .then(book => onAddToTBR(book))
            
        } else if (e.target.innerText === "Move to My Read Books") {
            fetch(`http://localhost:3000/books/${book.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({onTBR: false, onRead: true})
            })
            .then(r=>r.json())
            .then(book => onAddToRead(book))
            
        }
    }
    function handleRemove(e){
        fetch(`http://localhost:3000/books/${book.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({onTBR: false, onRead: false})
            })
            .then(r=>r.json())
            .then(book => onRemove(book))
        
    }
    return(
        <div className="book" style={{background: "#EFFEFD"}}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img className="book-image" style={{ height: "75px"}} src={book.image} alt={book.title}></img>
            <br></br>
            {book.onRead? null: <button onClick={handleClick}>{book.onTBR? "Move to My Read Books" : "Add To My TBR"}</button>}
            {book.onTBR? <button onClick={handleRemove}>Remove from TBR</button>: book.onRead? <button onClick={handleRemove}>Remove from Read</button>: null}
            
        </div>
    )
}

export default Book