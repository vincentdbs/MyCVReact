import React from "react";
import CardExperience from "./CardExperience";

const ContainerExperience = () => {
    return (
        <div className="container experience">
            <div className="center">
                <h1 className="section-title">Expériences professionnelles</h1>
            </div>
            <div className="container-card">
                {/*  todo complete map*/}
                <CardExperience title={"Président"} company={"EFREI Picture Studio"} address={"EFREI Paris (94)"}
                                date={"EFREI Paris (94)"}/>
            </div>
        </div>
    );
};


export default ContainerExperience;