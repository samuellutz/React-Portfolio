import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <div class="container-fluid" className="container">
            <div className="pro">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="https://docs.google.com/document/d/1P2TOoRFDyVUBwMIzJULB_uNoPfDUYKN-/edit">Resume</a>
            </div>
        </div>
    )
}
export default Navbar;