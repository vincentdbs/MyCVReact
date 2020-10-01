import React from "react";
import PropTypes from "prop-types";
import "../CSS/CardEducation.css"

const Education = ({date, address, title, tasks, cat}) => {
    return (
        <div className="card-education">
            <div className={`education--title ${"cat-" + cat}`}>
                <h3>{date}</h3>
                <p>{address}</p>
            </div>
            <div className="education--body">
                <p>{title}</p>
                <ul>
                    {tasks.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

Education.propTypes = {
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Education;