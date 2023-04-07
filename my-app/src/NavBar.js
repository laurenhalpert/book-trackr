import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <div id="navBar">
            <span><NavLink to="/home">Home</NavLink></span>
            <span><NavLink to="/library">Library</NavLink></span>
            <span><NavLink to="/mytbr">My TBR</NavLink></span>
            <span><NavLink to="/myread">My Read Books</NavLink></span>
        </div>
    )
}

export default NavBar