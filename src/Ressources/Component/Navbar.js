import React, {useEffect} from "react";
import "../CSS/MenuSlider.css"
const Navbar = () => {

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