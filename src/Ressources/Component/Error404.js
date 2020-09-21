import React, {useContext} from "react";
import "../CSS/Container/ContainerError404.css"
import {LanguageContext} from "../Language/LanguageContext";

const Error404 = () => {
    let language = useContext(LanguageContext);

    return (
        <div className="container container-404">
            <div className="div-error404">
                <h1 className="title-error404">Error 404</h1>
                <img src={require("../Image/error404.png")} alt="broken_computer"/>
                <p>{language.dictionary.error404.notfound}</p>
                <a href="http://www.vincentdbs.fr">{language.dictionary.error404.homepage}</a>
            </div>
        </div>
    );
};


export default Error404;