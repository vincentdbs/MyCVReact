import React, {useContext} from "react";
import "../CSS/All.css"
import "../CSS/ContactMe.css"
import {LanguageContext} from '../Language/LanguageContext';
import SVG from "./SVG";
import {svgPath} from "../Logo/svgPath";

const ContactMe = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="contact">
            <div className="contact-line">
                <SVG className="contact--icon" path={svgPath.email} />
                <p>{language.info.contact.mail}</p>
            </div>
            <div className="contact-line">
                <SVG className="contact--icon" path={svgPath.phone} />
                <p>{language.info.contact.phone}</p>
            </div>
            <div className="contact-line">
                <SVG className="contact--icon" path={svgPath.linkedin} />
                <a href="https://www.linkedin.com/in/vincent-dbs/" rel="noopener noreferrer" target="_blank">{language.info.contact.linkedin}</a>
            </div>
            <div className="contact-line">
                <SVG className="contact--icon" path={svgPath.locationPin} />
                <p>{language.info.contact.address}</p>
            </div>
            <div className="contact-line">
                <svg className="contact--icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.794 6.1662l-1.12213-3.74042C13.416011 1.572753 12.64599 1 11.75585 1H4.24413c-.890137 0-1.66016.572754-1.91602 1.42578L1.20598 6.1662C.497423 6.474122-.00001 7.17926-.00001 8v4c0 .552246.447754 1 1 1h.000061l-.000061.999939c0 .552307.447693 1.00006 1 1.00006h1.00006c.552246 0 1-.447754 1-1l-.0004272-1h8.00037l-.000061.999939c0 .552307.447693 1.00006 1 1.00006h1.00006c.552307 0 1-.447754 1-1v-.999939l-.0003662-.000061h.0003662c.552246 0 1-.447754 1-1v-4c0-.82074-.497436-1.52588-1.20599-1.8338zM4.2441 3h7.51172l.900024 3h-9.31177l.900024-3zm-.244141 7.5c-.552307 0-1-.447754-1-1 0-.552307.447693-1 1-1s1 .447693 1 1c0 .552246-.447693 1-1 1zm8 0c-.552307 0-1-.447754-1-1 0-.552307.447693-1 1-1s1 .447693 1 1c0 .552246-.447693 1-1 1z"/>
                </svg>
                <p>{language.info.contact.car}</p>
            </div>
        </div>
    );
};


export default ContactMe;