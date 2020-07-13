import React, {useContext} from "react";
import CardSkill from "./CardSkill";
import {LanguageContext} from '../Language/LanguageContext';


const ContainerSkills = () => {
    let language = useContext(LanguageContext);
    return (
        //todo mise en forme
        <div className="container skills">
            <div className="center">
                <h1 className="section-title">{language.softskills.title}</h1>
            </div>
            <div className="skills-wrapper-intro-in skills-info">
                {language.softskills.skills.map((data, index) =>(
                    <CardSkill key={index} title={data.title} skills={data.desc}/>
                ))}
            </div>
        </div>
    );
};


export default ContainerSkills;