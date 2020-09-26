import React from "react";
import '../CSS/CardProject.css'
import SVG from "../Component/SVG";

const CardProject = ({title, members, time, date, tech, github, description, photo, language}) => {
    return (
        <div className="project-card">
            <div className="project-card-recto">
                <img alt={"swapit"} src={require(`../Image/ProjectIllustration/${photo}`)}/>
                <div className={"project-card-info"}>
                    <h2>{title}</h2>
                    <div className="project-card-info-language">
                        {language.map((data, index) => (
                                <SVG path={data} key={index} id={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="project-card-verso">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardProject;