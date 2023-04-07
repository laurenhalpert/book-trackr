import React from "react"

function NewBook () {
    return(
        <div id="newbook">
            <form>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" placeholder="Title..."></input>
                <label htmlFor="author">Author: </label>
                <input id="author" type="text" placeholder="Author..."></input>
                <label htmlFor="image">Image URL: </label>
                <input id="image" type="text" placeholder="URL..."></input>
                <input id="submitBtn" type="submit"></input>
            </form>
        </div>
    )
}

export default NewBook