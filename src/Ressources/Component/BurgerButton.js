import React from "react";
import PropTypes from 'prop-types';
import "../CSS/BurgerButton.css"

const BurgerButton = ({type, onClickBurger}) => {
    return (
        <button id="burgerButton" className={"hamburger " + type} type="button" onClick={() => onClickBurger()}>
              <span className="hamburger-box">
                <span className="hamburger-inner"/>
              </span>
        </button>
    );
};

BurgerButton.defaultProps = {
    type: "hamburger--slider",
};

BurgerButton.propTypes  = {
    type: PropTypes.string.isRequired,
    onClickBurger: PropTypes.func
};

export default BurgerButton;