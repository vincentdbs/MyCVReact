import React, {useContext} from "react";
import PropTypes from "prop-types";
import CardExperience from "./CardExperience";
import {LanguageContext} from '../Language/LanguageContext';


const ContainerExperience = ({epsLogo}) => {
    let language = useContext(LanguageContext);
    return (
        <div className="container experience">
            <div className="center">
                <h1 className="section-title">{language.pro.title}</h1>
            </div>
            <div className="container-card">
                {language.pro.jobs.map((data, index) => (
                    index < 2
                        ? (
                            <CardExperience
                                key = {index}
                                index = {index}
                                title={data.title}
                                company={data.company}
                                address={data.address}
                                date={data.date}
                                tasks={data.tasks}
                                logo={epsLogo}/>
                        )
                        : (
                            <CardExperience
                                key = {index}
                                index = {index}
                                title={data.title}
                                company={data.company}
                                address={data.address}
                                date={data.date}
                                tasks={data.tasks}
                                logo={data.logo}/>
                        )
                ))}
            </div>
        </div>
    );
};

ContainerExperience.propTypes = {
    epsLogo: PropTypes.string.isRequired,
};

export default ContainerExperience;