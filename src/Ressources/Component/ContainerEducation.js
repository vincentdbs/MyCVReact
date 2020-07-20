import React, {useContext} from "react";
import Education from "./Education";
import {LanguageContext} from '../Language/LanguageContext';
import "../CSS/EducationalBackground.css"

const ContainerEducation = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container education">
            <div className="center">
                <h1 className="section-title">{language.education.title}</h1>
            </div>
            <div className="timeline-container">
                <div className="timeline">
                    {language.education.timeline.map((data, index) => (
                        <Education key={index} date={data.date} title={data.title}
                                   address={data.address}
                                   tasks={data.tasks}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContainerEducation;