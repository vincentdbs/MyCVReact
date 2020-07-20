import React from "react";
import SVG from "./SVG";
import PropTypes from "prop-types";

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

CardSkill.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    svgPath: PropTypes.string.isRequired,
};

export default CardSkill;