import React from "react";
import "../CSS/Project.css"
import PropTypes from "prop-types";
import SVG from "./SVG";
import {svgPath} from "../Logo/svgPath";

const CardProject = ({title, members, time, date, tech, github, description}) => {
    return (
        <div className="project-card">
            <div className="des-projet">
                <h2>{title}</h2>
                <div className="projet-specs">
                    <div className="projet-specs-top">
                        <SVG className={"project-icon"} path={svgPath.userAvatar} />
                        <p>{members}</p>
                        <SVG className={"project-icon"} path={svgPath.stopwatch} />
                        <p>{time}</p>
                    </div>
                    <div>
                        <SVG className={"project-icon"} path={svgPath.calendar} />
                        <p>{date}</p>
                    </div>
                    <div className="projet-specs-bottom">
                        <SVG className={"project-icon"} path={svgPath.code} />
                        <p>{tech}</p>
                    </div>
                </div>
                {(github !== null) && <a className="link-git" href={"/#"}>Github</a>}
                <p>{description}</p>
            </div>
        </div>
    );
};

CardProject.propTypes = {
    title: PropTypes.string.isRequired,
    members: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    github: PropTypes.string,
    description: PropTypes.string.isRequired,
};

export default CardProject;