import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import {LanguageContext} from "../Language/LanguageContext";

const Navigation = ({toggleTheme, onClickSwitchLanguage, themeLogo}) => {
    return (
        <div>
            <Header toggleTheme={toggleTheme} onClickSwitchLanguage={onClickSwitchLanguage} themeLogo={themeLogo}/>
            <Navbar/>
        </div>
    );
};


export default Navigation;