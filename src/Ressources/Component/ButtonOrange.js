import React from "react";
import "../CSS/ButtonOrange.css"

const ButtonOrange = ({href, text}) => {
    return (
        <button className="buttonOrange">
            <a href={href} target="_blank">{text}</a>
        </button>
    );
};


export default ButtonOrange;