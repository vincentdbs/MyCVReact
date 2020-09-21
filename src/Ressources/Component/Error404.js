import React from "react";
import "../CSS/Container/ContainerError404.css"

const Error404 = () => {
    return (
        <div className="container container-404">
            <div className="div-error404">
                <h1 className="title-error404">Error 404</h1>
                <img src={require("../Image/error404.png")} alt="broken_computer"/>
                <p>Sorry page not found</p>
                <a href="http://www.vincentdbs.fr">Go back to homepage</a>
            </div>
        </div>
    );
};


export default Error404;