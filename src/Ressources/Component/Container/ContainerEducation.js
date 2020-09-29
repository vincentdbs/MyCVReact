import React, {useContext, useState} from "react";
import Education from "../Education";
import {LanguageContext} from '../../Language/LanguageContext';
import "../../CSS/Container/ContainerEducation.css"

const ContainerEducation = () => {
    let language = useContext(LanguageContext);

    //filter of the experience categories
    let [filter, setFilter] = useState("all");

    return (
        <div className="container education">
            <div className="education-container-body">
                <div className="center">
                    <h1 className="section-title">{language.education.title}</h1>
                </div>
                <div className="education--button">
                    <button className="education--button-edu" onClick={() => (setFilter("education"))}>{language.education.button.education}</button>
                    <button className="education--button-all" onClick={() => (setFilter("all"))}>{language.education.button.all}</button>
                    <button className="education--button-pro" onClick={() => (setFilter("pro"))}>{language.education.button.professional}</button>
                </div>
                <div className="timeline-container">
                    <div className="timeline">
                        {language.education.timeline
                            .filter((data) => data.cat.includes(filter))
                            .map((data, index) => (
                            <Education key={index} date={data.date} title={data.title}
                                       address={data.address}
                                       tasks={data.tasks}
                                       cat={data.cat}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerEducation;