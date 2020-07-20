import React, {useContext, useEffect} from "react";
import {LanguageContext} from "../Language/LanguageContext";

const Header = ({toggleTheme, onClickSwitchLanguage}) => {
    let language = useContext(LanguageContext);

    useEffect(() => {
        var burger = document.getElementById("burgerButton");
        let slider = document.getElementById("navbar");

        burger.addEventListener("click", function() {
            burger.classList.toggle("is-active");
            if (burger.classList.contains('is-active')){
                slider.classList.add("width-zero");
                slider.classList.remove("width-hundred");
                console.log("become not active")

            }else{
                console.log("become is active")
                slider.classList.add("width-hundred");
                slider.classList.remove("width-zero");
            }
        });
    });

    return (
        <div className="header" id="header">
            <button id="burgerButton" className="hamburger hamburger--slider" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <img className="logo-language" src={require(`../Image/${language.logoLanguage}`)} onClick={() => onClickSwitchLanguage()}/>
            <div className="theme-switch-wrapper" id="toggleWrapper" >
                <label className="theme-switch" htmlFor="checkbox" id="labelThemeSwitch">
                    <input type="checkbox" id="checkbox" onClick={(event) => toggleTheme(event)}/>
                    <div className="slider round"></div>
                </label>
            </div>
        </div>
    );
};


export default Header;