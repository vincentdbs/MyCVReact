import React from "react";
import PropTypes from "prop-types";

const Education = ({date, address, title, tasks}) => {
    return (
        <div className="entry">
            <div className="title">
                <h3>{date}</h3>
                <p>{address}</p>
            </div>
            <div className="body">
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