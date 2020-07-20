import React, {useContext, useEffect} from "react";
import {LanguageContext} from "../Language/LanguageContext";
import SVG from "./SVG";

const Header = ({toggleTheme, onClickSwitchLanguage, themeLogo}) => {
    let language = useContext(LanguageContext);

    function displayNavbarMobile() {
        var burger = document.getElementById("burgerButton");
        let slider = document.getElementById("navbar");
        console.log(burger.classList);
        burger.classList.toggle("is-active");
        console.log(burger.classList);
        if (!burger.classList.contains('is-active')){
            slider.classList.add("width-zero");
            slider.classList.remove("width-hundred");
        }else{
            slider.classList.add("width-hundred");
            slider.classList.remove("width-zero");
        }
    }

    return (
        <div className="header" id="header">
            <button id="burgerButton" className="hamburger hamburger--slider" type="button" onClick={() => displayNavbarMobile()}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <img alt="flag" className="logo-header logo-flag" src={require(`../Image/${language.logoLanguage}`)} onClick={() => onClickSwitchLanguage()}/>


            <SVG className={"logo-header logo-theme"} id={"toggleWrapper"}
                 path={themeLogo}
                 onClick={toggleTheme}/>
        </div>
    );
};


export default Header;