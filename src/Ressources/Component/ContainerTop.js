import React from "react";
import "../CSS/ContainerInfo.css"
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

const ContainerTop = () => {
    return (
        <div className="container-top info container" id="image-top">
            <div className="container-top-left">
                <div className="wrapper-me">
                    <AboutMe/>
                    <ContactMe/>
                </div>
            </div>
            <div className="container-top-right">
                <img src={require("../Image/flat_programming.png")} alt={"logo"}/>
            </div>
        </div>
    );
};


export default ContainerTop;