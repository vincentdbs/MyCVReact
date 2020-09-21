import React, {Component} from "react";
import "../CSS/All.css"
import "../CSS/Scrollbar.css"

import {LanguageContext, dictionaryList} from '../Language/LanguageContext';
import ContainerEducation from "../Component/Container/ContainerEducation";
import ContainerExperience from "../Component/Container/ContainerExperience";
import ContainerProject from "../Component/Container/ContainerProject";
import ContainerSkills from "../Component/Container/ContainerSkills";
import BG_dark from "../Image/bg_header_dark.jpg";
import BG_light from "../Image/bg_header-light.jpg";
import Footer from "../Component/Footer";
import {svgPath} from "../Logo/svgPath";
import Navigation from "../Component/Navigation";
import ContainerTop from "./Container/ContainerInfo";


class LandingPage extends Component{
    state = {
        theme: "dark",
        language: dictionaryList.fr,
        epsLogo: "EPS-version-noire.png",
        themeLogo: svgPath.moon,
    };

    //Arrow fx for binding
    toggleLanguage = () =>{
        this.setState(state => ({
            language:
                state.language === dictionaryList.fr
                    ? dictionaryList.en
                    : dictionaryList.fr,
        }));
    };

    //Arrow fx for binding
    toggleTheme = () => {
        this.setState(state => ({
            epsLogo:
                state.epsLogo === "EPS-version-noire.png"
                    ? "EPS-version-blanche.png"
                    : "EPS-version-noire.png",
            theme:
                state.theme === "dark"
                    ? "light"
                    : "dark",
            themeLogo:
                state.themeLogo === svgPath.moon
                    ? svgPath.sun
                    : svgPath.moon,
        }));

        if (this.state.theme === "dark") {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };


    componentDidMount() {
        /**
         * Get all element to alter by scrolling/resizing window
         */
            //Get position of each container
        let containers = document.getElementsByClassName("container");
        let position = [];

        //header
        var header = document.getElementById("header");

        function getContainerPosition() {
            for (let i = 0; i < containers.length ; i++) {
                position[i] = getPosition(containers[i]);
            }
        }

        function getPosition(element) {
            let rect = element.getBoundingClientRect();
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        }

        function toggleDisplayNavbar(userPosition){
            if (userPosition < position[1]){ //prevent appearing on top container
                header.classList.add("display-none");
                header.classList.remove("display-block");
            }else{
                header.classList.add("display-block");
                header.classList.remove("display-none");
            }
        }

        /**
         * First load
         */
        let positionUser = document.documentElement.scrollTop;
        getContainerPosition();
        toggleDisplayNavbar(positionUser);


        /**
         * Listener onScroll onResize
         */
        function listenerOnScroll(){
            getContainerPosition();
            toggleDisplayNavbar(positionUser);
        }


        window.addEventListener('scroll', listenerOnScroll, true);

    }

    render() {
        return (
            <LanguageContext.Provider value={this.state.language}>
                <Navigation toggleTheme={this.toggleTheme} onClickSwitchLanguage={this.toggleLanguage} themeLogo={this.state.themeLogo}/>
                <ContainerTop/>
                <ContainerEducation />
                <ContainerExperience epsLogo={this.state.epsLogo}/>
                <ContainerProject />
                <ContainerSkills />
                <Footer/>
            </LanguageContext.Provider>
        );
    }
};


export default LandingPage;