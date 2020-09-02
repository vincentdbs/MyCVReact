import React from "react";
import "../CSS/Footer.css";
import SVG from "./SVG";
import {svgPath} from "../Logo/svgPath";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-div-icon">
                <a href="https://www.linkedin.com/in/vincent-dbs/" rel="noopener noreferrer" target="_blank">
                    <SVG className="logo-footer" path={svgPath.linkedin} />
                </a>
                <a href="https://github.com/vincentdbs/" rel="noopener noreferrer" target="_blank">
                    <SVG className="logo-footer" path={svgPath.github} />
                </a>
            </div>
            <div>
                <p>©Vincent Dubois</p>
                <p>2020</p>
            </div>
        </div>
    );
};


export default Footer;