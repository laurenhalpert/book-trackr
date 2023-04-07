import React, { useState } from "react"

function NewBook ({ onNewBook }) {
    const [title, setTitle] =useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [formData, setFormData] =useState({title: "", author:"", image:"", onTBR: false, onRead: false})

    function handleChange(e) {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        fetch("http://localhost:3000/books", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(newBookObj => onNewBook(newBookObj))
    }

    return(
        <div id="newbook">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input id="title" name="title" type="text" placeholder="Title..." value={formData.title} onChange={handleChange}></input>
                <br></br>
                <label htmlFor="author">Author: </label>
                <input id="author" name="author" type="text" placeholder="Author..." value={formData.author} onChange={handleChange}></input>
                <br></br>
                <label htmlFor="image">Image URL: </label>
                <input id="image" name="image" type="text" placeholder="URL..." value={formData.image} onChange={handleChange}></input>
                <br></br>
                <button id="submitBtn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewBook