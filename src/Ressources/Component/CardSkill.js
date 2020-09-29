import React from "react";
import SVG from "./SVG";
import PropTypes from "prop-types";
import "../CSS/CardSkills.css"
import ProgressBar from "./ProgressBar";


const CardSkill = ({title, skills, svgPath, index, programming}) => {
    return (
        <div className={`cardSkills item-${index}`}>
            <div className={"cardskills-title"}>
                <SVG className={"skills-icon"} path={svgPath}/>
                <h2>{title}</h2>
            </div>
            {
                programming ? (
                    programming.map((data, index) => (
                            <div className="cardskills-programming" key={index}>
                                <div>
                                    <SVG id={`cardskills-programming-icon-${index}`} path={data.svg} className={"cardskills-programming-icon"}/>
                                    <ProgressBar percentage={data.level} />
                                </div>
                            </div>
                        )
                    )
                    )
                    : (
                        <ul className="skills-list">
                            {skills.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                )
            }

        </div>
    );
};

CardSkill.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    svgPath: PropTypes.string.isRequired,
    programming: PropTypes.arrayOf(PropTypes.object)
};

export default CardSkill;