import React from "react";

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


export default Education;