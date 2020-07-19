import React, {useEffect} from "react";
import "../CSS/MenuSlider.css"
const Navbar = () => {

    useEffect( () => {
            function smoothScroll(target, duration) {
                var target = document.querySelector(target);
                var targetPosition = target.getBoundingClientRect().top;
                var startPosition = window.pageYOffset;
                var distance = targetPosition - startPosition;
                var startTime = null;


                function animation(currentTime) {
                    if(startTime === null){
                        startTime = currentTime;
                    }
                    var timeElapsed = currentTime - startTime;
                    var run = ease(timeElapsed, startPosition, distance, duration);
                    console.log(run);

                    window.scrollTo(0, run);
                    if(timeElapsed < duration){
                        requestAnimationFrame(animation);
                    }
                }

                function ease(t, b, c, d) {

                    t /= d/2;
                    if(t < 1){
                        return c/2 * t * t + b;
                    }
                    t--;
                    return -c/2 * (t*(t-2) -1 ) + b + 2;
                }

                requestAnimationFrame(animation);
            }

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