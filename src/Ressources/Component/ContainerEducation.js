import React from "react";
import Education from "./Education";

const ContainerEducation = () => {
    return (
        <div className="container education">
            <div className="center">
                <h1 className="section-title">Parcours scolaire</h1>
            </div>
            <div className="timeline-container">
                <div className="timeline">
                {/*    todo with map*/}
                    <Education date={"Janvier 2020 - Juin 2020"} title={"1e année du cycle ingénieur"} address={"1e année du cycle ingénieur"} tasks={["Mathématiques pour la cryptographie, optimisation",
                        "Base de données avancées, introduction à la cybersécurité"]}/>
                </div>
            </div>
        </div>
    );
};


export default ContainerEducation;