import React, {useContext, useState} from "react";
import Education from "../Education";
import {LanguageContext} from '../../Language/LanguageContext';
import "../../CSS/Container/ContainerEducation.css"

const ContainerEducation = () => {
    let language = useContext(LanguageContext);
    const [experiencesArray, setExperiencesArray] = useState(language.education.timeline);

    return (
        <div className="container education">
            <div className="education-container-body">
                <div className="center">
                    <h1 className="section-title">{language.education.title}</h1>
                </div>
                <button onClick={() => (setExperiencesArray(language.education.timeline.filter((data)=> (data.cat === "education"))))}>education</button>
                <button onClick={() => (setExperiencesArray(language.education.timeline))}>all</button>
                <button onClick={() => (setExperiencesArray(language.education.timeline.filter((data)=> (data.cat === "pro"))))}>pro</button>
                <div className="timeline-container">
                    <div className="timeline">
                        {experiencesArray
                            .map((data, index) => (
                            <Education key={index} date={data.date} title={data.title}
                                       address={data.address}
                                       tasks={data.tasks}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerEducation;