import React from "react";
import CardProject from "./CardProject";

const ContainerProject = () => {
    return (
        <div className="container project">
            <div className="center">
                <h1 className="section-title">Projets</h1>
            </div>
            <div className="project-card-container">
            {/* todo complete with map   */}
            <CardProject title={"Swapit (Android)"} members={5} time={"1 an"} date={"Sept 2018 - Juin 2019"}
                         tech={"JAVA, PHP, MySQL, Android Studio"}
                         description={"Swap-it! est une application Android crée par 5 étudiants d'EFREI Paris. Elle permet aux étudiants de l'école de demander de l'aide pour du soutien scolaire et pour les services de la vie courante."}/>
            </div>
        </div>
    );
};


export default ContainerProject;