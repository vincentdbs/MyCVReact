import React, {useContext} from "react";
import CardProject from "./CardProject";
import {LanguageContext} from '../Language/LanguageContext';


const ContainerProject = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container project">
            <div className="center">
                <h1 className="section-title">{language.project.title}</h1>
            </div>
            <div className="project-card-container">
            {
                language.project.projects.map((data, index) => (
                    <CardProject title={data.title} members={data.members} time={data.time} date={data.date}
                                 tech={data.tech}
                                 description={data.description}
                                 github={data.github}
                    />
                ))
            }
            </div>
        </div>
    );
};


export default ContainerProject;