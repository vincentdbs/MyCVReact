import React from "react";

const Header = () => {
    return (
        <div className="header" id="header">
            <button id="burgerButton" className="hamburger hamburger--slider" type="button"
                    onClick="displayMobileNavbar()">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="theme-switch-wrapper" id="toggleWrapper">
                <label className="theme-switch" htmlFor="checkbox" id="labelThemeSwitch">
                    <input type="checkbox" id="checkbox"/>
                    <div className="slider round"></div>
                </label>
            </div>
        </div>
    );
};


export default Header;