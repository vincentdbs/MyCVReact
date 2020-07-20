import React, {useContext} from "react";
import CardExperience from "./CardExperience";
import {LanguageContext} from '../Language/LanguageContext';


const ContainerExperience = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="container experience">
            <div className="center">
                <h1 className="section-title">{language.pro.title}</h1>
            </div>
            <div className="container-card">
                {language.pro.jobs.map((data, index) => (
                    <CardExperience
                        key = {index}
                        index = {index}
                        title={data.title}
                        company={data.company}
                        address={data.address}
                        date={data.date}
                        tasks={data.tasks}
                        logo={data.logo}/>
                ))}
            </div>
        </div>
    );
};


export default ContainerExperience;