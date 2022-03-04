import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            <div className="pro">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#resume">Resume</a>
            </div>
        </div>
    )
}
export default Navbar;