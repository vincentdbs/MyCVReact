import React, {useContext} from "react";
import "../CSS/MenuSlider.css"
import {LanguageContext} from '../Language/LanguageContext';


const Navbar = ({onClickLink}) => {
    let language = useContext(LanguageContext);

    return (
        <nav className="menu-slider" id="navbar">
            <ul className="menu-slider-list">
                <li className="menu-slider-li"><p className="menu-slider-a" id="navbar-top" onClick={() => onClickLink("info")}>{language.navbar.menu1}</p></li>
                <li className="menu-slider-li"><p className="menu-slider-a" id="navbar-education" onClick={() => onClickLink("education")}>{language.navbar.menu2}</p></li>
                <li className="menu-slider-li"><p className="menu-slider-a" id="navbar-experience" onClick={() => onClickLink("experience")}>{language.navbar.menu3}</p></li>
                <li className="menu-slider-li"><p className="menu-slider-a" id="navbar-project" onClick={() => onClickLink("project")}>{language.navbar.menu4}</p></li>
                <li className="menu-slider-li"><p className="menu-slider-a" id="navbar-skill" onClick={() => onClickLink("skills")}>{language.navbar.menu5}</p></li>
            </ul>
        </nav>
    );
};


export default Navbar;