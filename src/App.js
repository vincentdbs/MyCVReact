import React, {Component} from 'react';
import './App.css';
import "../src/Ressources/CSS/All.css"
import "../src/Ressources/CSS/Scrollbar.css"

import {LanguageContext, dictionaryList} from './Ressources/Language/LanguageContext';
import ContainerEducation from "./Ressources/Component/ContainerEducation";
import ContainerExperience from "./Ressources/Component/ContainerExperience";
import ContainerProject from "./Ressources/Component/ContainerProject";
import ContainerSkills from "./Ressources/Component/ContainerSkills";
import ContainerInfo from "./Ressources/Component/ContainerInfo";
import Navbar from "./Ressources/Component/Navbar";
import Header from "./Ressources/Component/Header";
import BG_dark from "../src/Ressources/Image/bg_header_dark.jpg";
import BG_light from "./Ressources/Image/bg_header-light.jpg";
import Footer from "./Ressources/Component/Footer";
import {svgPath} from "./Ressources/Logo/svgPath";

class App extends Component{
    state = {
        theme: "dark",
        language: dictionaryList.fr,
        bgImage: BG_dark,
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
            bgImage:
                state.bgImage === BG_dark
                ? BG_light
                : BG_dark,
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

        //get list and link of the navbar
        let slider = document.getElementById("navbar");
        let slider_li = document.getElementsByClassName("menu-slider-li");
        let slider_a = document.getElementsByClassName("menu-slider-a");
        let selectedMenuIndex = 0;

        //toggle theme
        let togle_theme = document.getElementById("toggleWrapper");

        //burger
        var burger = document.getElementById("burgerButton");
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
            if (userPosition < position[1]-(position[1]/2.5)){ //prevent appearing on top container
                slider.classList.add("display-none");
                slider.classList.remove("display-block");

            }else{
                slider.classList.add("display-block");
                slider.classList.remove("display-none");
            }
        }

        function toggleDisplayThemeSwitch(userPosition){
            if (userPosition < position[1]){ //prevent appearing on top container
                togle_theme.classList.add("display-none");
                togle_theme.classList.remove("display-block");
            }else{
                togle_theme.classList.add("display-block");
                togle_theme.classList.remove("display-none");
            }
        }

        function toggleDisplayBurger(userPosition){
            if (userPosition < position[1]){ //prevent appearing on top container
                burger.classList.add("display-none");
                burger.classList.remove("display-block");
            }else{
                burger.classList.add("display-block");
                burger.classList.remove("display-none");
            }
        }

        function toggleDisplayHeader(userPosition){
            if (userPosition < position[1]){ //prevent appearing on top container
                header.classList.add("display-none");
                header.classList.remove("display-block");
            }else{
                header.classList.add("display-block");
                header.classList.remove("display-none");
            }
        }

        //link visibility depending on user Y position
        function linklistvisibility(userPosition){
            for (let i = 0; i < containers.length ; i++) {
                let positionI = position[i];
                let positionBefore = position[i-1];
                let diffBefore = positionI-positionBefore;
                let startBefore = positionBefore + diffBefore/2;
                if(i === (containers.length-1)){
                    if (userPosition > startBefore){
                        slider_a[i].classList.remove("slider-hidden");
                        slider_li[i].classList.add("slider-see");
                        selectedMenuIndex = i;
                    }else{
                        slider_a[i].classList.add("slider-hidden");
                        slider_li[i].classList.remove("slider-see");
                    }
                }else{
                    let positionAfter = position[i+1];
                    let diffAfter = positionAfter-positionI;
                    let startAfter = positionI + diffAfter/2;
                    if((userPosition < startAfter) && (userPosition > startBefore)){
                        slider_a[i].classList.remove("slider-hidden");
                        slider_li[i].classList.add("slider-see");
                        selectedMenuIndex = i;
                    }else{
                        slider_a[i].classList.add("slider-hidden");
                        slider_li[i].classList.remove("slider-see");
                    }
                }

            }
        }


        /**
         * First load
         */
        let positionUser = document.documentElement.scrollTop;
        getContainerPosition();
        toggleDisplayBurger(positionUser);
        toggleDisplayHeader(positionUser);
        toggleDisplayThemeSwitch(positionUser);
        toggleDisplayNavbar(positionUser);


        /**
         * Listener onScroll onResize
         */
        function listenerOnScroll(){
            getContainerPosition();
            let userPosition = document.documentElement.scrollTop;
            toggleDisplayThemeSwitch(userPosition);
            toggleDisplayNavbar(userPosition);
            toggleDisplayHeader(userPosition);
            linklistvisibility(userPosition);
            toggleDisplayBurger(userPosition);
        }


        window.addEventListener('scroll', listenerOnScroll, true);

    }

    render() {
    return(
            <LanguageContext.Provider value={this.state.language}>
                <Header toggleTheme={this.toggleTheme} onClickSwitchLanguage={this.toggleLanguage} themeLogo={this.state.themeLogo}/>
                <Navbar/>
                <ContainerInfo bgImage={this.state.bgImage} />
                <ContainerEducation />
                <ContainerExperience epsLogo={this.state.epsLogo}/>
                <ContainerProject />
                <ContainerSkills />
                <Footer/>
            </LanguageContext.Provider>
        );
        // todo icon dans l'onglet
        //todo description dans lien à changer (voir mp nathan
        //todo skills cassé à 1400px
        //todo centrer verticalement la timeline education
    }
}

export default App;
