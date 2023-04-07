import React, { useState } from "react"

function NewBook ({ onNewBook }) {
    const [title, setTitle] =useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")

    function handleChange(e, setter) {
        setter(()=>e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newBookObj = {
            title: {title},
            author: {author},
            image: {image},
        }
        console.log(newBookObj)
        fetch("http://localhost:3000/books", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBookObj)
        })
        .then(r=>r.json())
        .then(newBookObj => onNewBook(newBookObj))
    }

    return(
        <div id="newbook">
            <form>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" placeholder="Title..." value={title} onChange={(e, setter)=> handleChange(e, setTitle)}></input>
                <br></br>
                <label htmlFor="author">Author: </label>
                <input id="author" type="text" placeholder="Author..." value={author} onChange={(e, setter)=> handleChange(e, setAuthor)}></input>
                <br></br>
                <label htmlFor="image">Image URL: </label>
                <input id="image" type="text" placeholder="URL..." value={image} onChange={(e, setter)=> handleChange(e, setImage)}></input>
                <br></br>
                <input id="submitBtn" type="submit" onSubmit={handleSubmit}></input>
            </form>
        </div>
    )
}

export default NewBook