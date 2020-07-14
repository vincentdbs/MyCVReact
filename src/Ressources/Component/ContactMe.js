import React, {useContext} from "react";
import "../CSS/All.css"
import "../CSS/Top.css"
import {LanguageContext} from '../Language/LanguageContext';

const ContactMe = () => {
    let language = useContext(LanguageContext);
    return (
        <div className="contact">
            <div className="contact-line">
                <svg className="contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867">
                    <path d="M460.8 68.267H17.067C7.641 68.267 0 75.908 0 85.333v307.2c0 9.426 7.641 17.067 17.067 17.067H460.8c9.426 0 17.067-7.641 17.067-17.067v-307.2c0-9.425-7.641-17.066-17.067-17.066zM432.811 102.4L238.933 251.529 45.056 102.4h387.755zm10.922 273.067h-409.6V137.062L228.54 286.6c6.13 4.707 14.657 4.707 20.787 0l194.406-149.538v238.405z"/>
                </svg>
                <p>{language.info.contact.mail}</p>
            </div>
            <div className="contact-line">
                <svg className="contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                    <path d="M353.188 252.052c-23.51 0-46.594-3.677-68.469-10.906-10.719-3.656-23.896-.302-30.438 6.417l-43.177 32.594c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208 11.167-20.198 7.635-31.448-7.26-21.99-10.948-45.063-10.948-68.583C132.146 13.823 118.323 0 101.333 0h-70.52C13.823 0 0 13.823 0 30.813 0 225.563 158.438 384 353.188 384c16.99 0 30.813-13.823 30.813-30.813v-70.323c-.001-16.989-13.824-30.812-30.813-30.812z"/>
                </svg>
                <p>{language.info.contact.phone}</p>
            </div>
            <div className="contact-line">
                <svg className="contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256.001 512c-11.176 0-21.184-5.796-26.77-15.505-.059-.102-.116-.205-.173-.308L102.096 263.801C71.79 208.33 72.659 142.489 104.421 87.677 135.494 34.053 190.686 1.292 252.06.04c2.622-.054 5.258-.054 7.878 0 61.375 1.252 116.567 34.013 147.641 87.637 31.762 54.812 32.631 120.652 2.325 176.124L282.942 496.187c-.057.103-.114.206-.173.308-5.585 9.708-15.592 15.505-26.768 15.505zM256 32c-1.099 0-2.195.011-3.289.033-50.099 1.022-95.185 27.821-120.604 71.688-26.107 45.055-26.829 99.162-1.93 144.736L256 478.757l125.822-230.299c24.899-45.575 24.178-99.682-1.931-144.737-25.419-43.866-70.505-70.666-120.604-71.688-1.091-.022-2.188-.033-3.287-.033z"/>
                    <path d="M256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72zm0-112c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40-17.944-40-40-40z"/>
                </svg>
                <a href="https://www.linkedin.com/in/vincent-dbs/" target="_blank">{language.info.contact.phone}</a>
            </div>
            <div className="contact-line">
                <svg className="contact--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256.001 512c-11.176 0-21.184-5.796-26.77-15.505-.059-.102-.116-.205-.173-.308L102.096 263.801C71.79 208.33 72.659 142.489 104.421 87.677 135.494 34.053 190.686 1.292 252.06.04c2.622-.054 5.258-.054 7.878 0 61.375 1.252 116.567 34.013 147.641 87.637 31.762 54.812 32.631 120.652 2.325 176.124L282.942 496.187c-.057.103-.114.206-.173.308-5.585 9.708-15.592 15.505-26.768 15.505zM256 32c-1.099 0-2.195.011-3.289.033-50.099 1.022-95.185 27.821-120.604 71.688-26.107 45.055-26.829 99.162-1.93 144.736L256 478.757l125.822-230.299c24.899-45.575 24.178-99.682-1.931-144.737-25.419-43.866-70.505-70.666-120.604-71.688-1.091-.022-2.188-.033-3.287-.033z"/>
                    <path d="M256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72zm0-112c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40-17.944-40-40-40z"/>
                </svg>
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