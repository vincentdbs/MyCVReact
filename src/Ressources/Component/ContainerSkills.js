import React from "react";
import CardSkill from "./CardSkill";

const ContainerSkills = () => {
    return (
        <div className="container skills">
            <div className="center">
                <h1 className="section-title">Compétences</h1>
            </div>
            <div className="skills-wrapper-intro-in skills-info">
            {/* todo complete with map */}
                <CardSkill title={"Programmation"} skills={[
                    "Environnement : Windows",
                    "Langage : JAVA, C, HTML, CSS, JS, PHP, MySQL, SQLServer",
                    "IDE : Jetbrains",
                    "Logiciel : Microsoft office, Adobe Lightroom"
                ]}/>

            </div>
        </div>
    );
};


export default ContainerSkills;