import React, {useContext} from "react";
import CardSkill from "./CardSkill";
import {LanguageContext} from '../Language/LanguageContext';
import "../CSS/Skills.css"


const ContainerSkills = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container skills">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffaa00" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,112C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div className="center">
                <h1 className="section-title">{language.softskills.title}</h1>
            </div>
            <div className="skills-wrapper-intro-in skills-info">
                {language.softskills.skills.map((data, index) =>(
                    <CardSkill key={index} title={data.title} skills={data.desc} svgPath={data.svgPath}/>
                ))}
            </div>
        </div>
    );
};


export default ContainerSkills;