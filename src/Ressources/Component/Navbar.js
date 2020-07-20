import React, {useContext, useEffect} from "react";
import "../CSS/MenuSlider.css"
import {LanguageContext} from '../Language/LanguageContext';


const Navbar = () => {
    let language = useContext(LanguageContext);

    useEffect( () => {
            var info = document.querySelector('.container-arrowdown');
            info.addEventListener('click', function () {
                document.querySelector('.education').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            var menu1 = document.getElementById("navbar-top");
            menu1.addEventListener('click', function () {
                document.querySelector('.info').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            var menu2 = document.getElementById("navbar-education");
            menu2.addEventListener('click', function () {
                document.querySelector('.education').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            var menu3 = document.getElementById("navbar-experience");
            menu3.addEventListener('click', function () {
                document.querySelector('.experience').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            var menu4 = document.getElementById("navbar-project");
            menu4.addEventListener('click', function () {
                document.querySelector('.project').scrollIntoView({
                    behavior: 'smooth'
                });
            });

            var menu5 = document.getElementById("navbar-skill");
            menu5.addEventListener('click', function () {
                document.querySelector('.skills').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    );


    return (
        <nav className="menu-slider" id="navbar">
            <ul className="menu-slider-list">
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-top">{language.navbar.menu1}</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-education">{language.navbar.menu2}</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-experience">{language.navbar.menu3}</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-project">{language.navbar.menu4}</a></li>
                <li className="menu-slider-li"><a className="menu-slider-a" id="navbar-skill">{language.navbar.menu5}</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;