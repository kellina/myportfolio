import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <nav id="navbar">
            <ul className="nav-list">
                <li><a className="nav-link" href="#home"> Home</a></li>
                <li><a className="nav-link" href="#about"> About</a></li>
                <li><a className="nav-link" href="#projects"> Work</a></li>
                <li><a className="nav-link" href="#contact"> Contact</a></li>
            </ul>
            <img src="images/logo-kellina.png"  alt="logo" width="40" height="40" /> 
        </nav>
     
    )
}

export default Menu
