import React, {useContext} from "react";
import {LanguageContext} from "../Language/LanguageContext";
import SVG from "./SVG";
import "../CSS/Header.css"
import BurgerButton from "./BurgerButton";
import PropTypes from "prop-types";

const Header = ({toggleTheme, onClickSwitchLanguage, themeLogo}) => {
    let language = useContext(LanguageContext);

    let displayNavbarMobile = () => {
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
    };

    return (
        <div className="header" id="header">
            <BurgerButton type={"hamburger--slider"} onClickBurger={displayNavbarMobile}/>
            <img alt="flag" className="logo-header logo-flag" src={require(`../Image/${language.logoLanguage}`)} onClick={() => onClickSwitchLanguage()}/>
            <SVG className={"logo-header logo-theme"} id={"toggleWrapper"}
                 path={themeLogo}
                 onClick={toggleTheme}/>
        </div>
    );
};

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    onClickSwitchLanguage: PropTypes.func.isRequired,
    themeLogo: PropTypes.string.isRequired,
};

export default Header