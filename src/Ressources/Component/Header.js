import React, {useContext} from "react";
import {LanguageContext} from "../Language/LanguageContext";
import SVG from "./SVG";
import "../CSS/Header.css"
import BurgerButton from "./BurgerButton";
import PropTypes from "prop-types";

const Header = ({toggleTheme, onClickSwitchLanguage, themeLogo, onClickBurger}) => {
    let language = useContext(LanguageContext);

    return (
        <div className="header" id="header">
            <BurgerButton type={"hamburger--slider"} onClickBurger={onClickBurger}/>
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