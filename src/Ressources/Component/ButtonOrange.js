import React from "react";
import "../CSS/ButtonOrange.css"

const ButtonOrange = ({href, text}) => {
    return (
        <button className="buttonOrange">
            <a href={href} rel="noopener noreferrer" target="_blank">{text}</a>
        </button>
    );
};


export default ButtonOrange;