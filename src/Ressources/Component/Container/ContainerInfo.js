import React, {useContext, useEffect} from "react";
import "../../CSS/Container/ContainerInfo.css"
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import {svgPath} from "../../Logo/svgPath"
import SVG from "../SVG";
import ButtonOrange from "../ButtonOrange";
import {LanguageContext} from "../../Language/LanguageContext";

const ContainerTop = () => {
    useEffect(() => {
            var info = document.querySelector('.container-arrowdown');
            info.addEventListener('click', function () {
                document.querySelector('.education').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    );


    return (
        <div className="container-top info container" id="image-top">
            <div className="container-top-left">
                <div className="wrapper-me">
                    <AboutMe/>
                    <ContactMe/>
                    {/*todo remplacer par language context*/}
                    <ButtonOrange text={"Mon CV"} href={"https://drive.google.com/file/d/1joKyQ5wsRhXwz_tLVB-q9xJpbyxsjZHH/view?usp=sharing"}/>
                </div>
            </div>
            <div className="container-top-right">
                <img src={require("../../Image/flat_programming.png")} alt={"logo"}/>
            </div>
            <div className="container-arrowdown">
                <SVG className={"arrowdonw"} path={svgPath.arrowdown} />
            </div>
        </div>
    );
};


export default ContainerTop;