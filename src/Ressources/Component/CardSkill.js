import React from "react";
import SVG from "./SVG";
import PropTypes from "prop-types";
import "../CSS/CardSkills.css"


const CardSkill = ({title, skills, svgPath, index}) => {
    return (
        <div className={`cardSkills item-${index}`}>
            <div className={"cardskills-title"}>
                <SVG className={"skills-icon"} path={svgPath}/>
                <h2>{title}</h2>
            </div>
            <ul className="skills-list">
                {skills.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

CardSkill.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    svgPath: PropTypes.string.isRequired,
};

export default CardSkill;