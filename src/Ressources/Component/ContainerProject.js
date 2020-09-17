import React, {useContext} from "react";
import CardProject from "./CardProject";
import {LanguageContext} from '../Language/LanguageContext';


const ContainerProject = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container project">
            <svg className="project-wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fd6f2d" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,112C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="project-body">
                <div className="center">
                    <h1 className="section-title">{language.project.title}</h1>
                </div>
                <div className="project-card-container">
                    {
                        language.project.projects.map((data, index) => (
                            <CardProject key={index}
                                         title={data.title}
                                         members={data.members}
                                         time={data.time}
                                         date={data.date}
                                         tech={data.tech}
                                         description={data.description}
                                         github={data.github}
                            />
                        ))
                    }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffaa00" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,112C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
    );
};


export default ContainerProject;