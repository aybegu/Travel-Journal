import React from 'react'
import logo from '../images/globe.png'

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={logo} alt="globe-logo" />
            <p>Travel Journal</p>
        </nav>
    )
}