import React from "react";
import "../CSS/MenuSlider.css"
const Navbar = () => {
    return (
        <nav className="menu-slider" id="navbar">
            <ul className="menu-slider-list">
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-top">Présentation</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-education">Parcours</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-experience">Experience</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-project">Projets</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-skill">Compétences</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;