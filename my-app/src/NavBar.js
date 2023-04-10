import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <div id="navBar">
            <span><NavLink 
                to="/home" 
                style={() => ({
                    color: 'black',
                    background: 'white',
                })}>Home</NavLink></span>
            <span><NavLink 
                to="/library"
                style={() => ({
                    color: 'black',
                    background: 'white',
                })}>Library</NavLink></span>
            <span><NavLink 
                to="/mytbr"
                style={() => ({
                    color: 'black',
                    background: 'white',
                })}>My TBR</NavLink></span>
            <span><NavLink 
                to="/myread"
                style={() => ({
                    color: 'black',
                    background: 'white',
                })}>My Read Books</NavLink></span>
        </div>
    )
}

export default NavBar