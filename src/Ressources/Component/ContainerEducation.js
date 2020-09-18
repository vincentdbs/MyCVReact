import React, {useContext} from "react";
import Education from "./Education";
import {LanguageContext} from '../Language/LanguageContext';
import "../CSS/EducationalBackground.css"

const ContainerEducation = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container education">
            <div className="education-container-body">
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
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff8a11" fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,202.7C672,171,768,149,864,144C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>*/}
        </div>
    );
};

export default ContainerEducation;