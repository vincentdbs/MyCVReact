import React, {useContext} from "react";
import '../../CSS/ContainerProject.css'
import {LanguageContext} from "../../Language/LanguageContext";
import CardProject from "../CardProject";


const ContainerProject = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container project">
            <div className="center">
                <h1 className="section-title">{language.project.title}</h1>
            </div>
            <div className="test-project-card-container">
                {
                    language.project.projects.map((data, index) => (
                        <CardProject key={index}
                                     title={data.title}
                                     members={data.members}
                                     time={data.time}
                                     date={data.date}
                                     tech={data.tech}
                                     description={data.description}
                                     photo={data.photo}
                                     github={data.github}
                                     language={data.language}
                        />

                    ))
                }
            </div>
        </div>
    );
};


export default ContainerProject;