import React from "react";
import SVG from "./SVG";

const CardSkill = ({title, skills, svgPath}) => {
    return (
        <div>
            <div className="center">
                <SVG className={"skills-icon"}
                     path={svgPath}/>
            </div>
            <h2>{title}</h2>
            <ul className="skills-list">
                {skills.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};


export default CardSkill;