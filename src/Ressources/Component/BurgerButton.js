import React from "react";
import "../CSS/BurgerButton.css"

const BurgerButton = ({type, onClickBurger}) => {
    return (
        <button id="burgerButton" className={"hamburger " + type} type="button" onClick={() => onClickBurger()}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
        </button>
    );
};


export default BurgerButton;