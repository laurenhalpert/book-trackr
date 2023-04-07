import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <div id="navBar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/library">Library</NavLink>
            <NavLink to="/mytbr">My TBR</NavLink>
            <NavLink to="/myread">My Read Books</NavLink>
        </div>
    )
}

export default NavBar