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

class App extends Component{
    state = {
        theme: "dark",
        language: dictionaryList.fr,
        bgImage: BG_dark,
        epsLogo: "EPS-version-noire.png",
        themeLogo: "M349.362 1.039c-2.426-1.36-5.385-1.362-7.814-.006-3.857 2.155-5.237 7.029-3.082 10.886 40.328 72.547 40.328 160.777 0 233.324-64.431 115.906-210.622 157.635-326.528 93.204-2.441-1.38-5.426-1.381-7.869-.003-3.848 2.171-5.207 7.051-3.035 10.899 45.292 81.055 130.853 131.304 223.704 131.376 92.8-.038 178.317-50.282 223.52-131.328 68.886-123.504 24.608-279.467-98.896-348.352zm15.584 418.136c-107.501 77.541-257.507 53.253-335.048-54.248 63.167 26.385 134.267 26.385 197.434 0 130.522-54.52 192.134-204.526 137.614-335.048 20.875 15.057 39.191 33.373 54.248 54.248 77.541 107.501 53.253 257.507-54.248 335.048z"
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
                state.themeLogo === "M349.362 1.039c-2.426-1.36-5.385-1.362-7.814-.006-3.857 2.155-5.237 7.029-3.082 10.886 40.328 72.547 40.328 160.777 0 233.324-64.431 115.906-210.622 157.635-326.528 93.204-2.441-1.38-5.426-1.381-7.869-.003-3.848 2.171-5.207 7.051-3.035 10.899 45.292 81.055 130.853 131.304 223.704 131.376 92.8-.038 178.317-50.282 223.52-131.328 68.886-123.504 24.608-279.467-98.896-348.352zm15.584 418.136c-107.501 77.541-257.507 53.253-335.048-54.248 63.167 26.385 134.267 26.385 197.434 0 130.522-54.52 192.134-204.526 137.614-335.048 20.875 15.057 39.191 33.373 54.248 54.248 77.541 107.501 53.253 257.507-54.248 335.048z"
                    ? "M121 256c0 74.439 60.561 135 135 135s135-60.561 135-135-60.561-135-135-135-135 60.561-135 135zm135-105c57.897 0 105 47.103 105 105s-47.103 105-105 105-105-47.103-105-105 47.103-105 105-105zM372.673 372.673c-5.858 5.858-5.858 15.355 0 21.213l72.426 72.426c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-72.426-72.426c-5.858-5.859-15.356-5.859-21.213 0zM66.901 45.688c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l72.426 72.426c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213zM45.688 466.312c5.857 5.858 15.355 5.859 21.213 0l72.426-72.426c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-72.426 72.426c-5.858 5.858-5.858 15.355 0 21.213zM466.312 45.688c-5.857-5.858-15.355-5.858-21.213 0l-72.426 72.426c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l72.426-72.426c5.858-5.858 5.858-15.355 0-21.213zM319.143 408.44c-7.654 3.17-11.288 11.945-8.118 19.599l11.48 27.716c3.166 7.642 11.934 11.293 19.599 8.118 7.654-3.17 11.288-11.945 8.118-19.599l-11.48-27.716c-3.171-7.654-11.945-11.287-19.599-8.118zM192.857 103.56c7.654-3.17 11.288-11.945 8.118-19.599l-11.48-27.716c-3.171-7.654-11.945-11.287-19.599-8.118-7.654 3.17-11.288 11.945-8.118 19.599l11.48 27.716c3.167 7.642 11.934 11.293 19.599 8.118zM83.961 311.024l-27.716 11.48c-7.654 3.17-11.288 11.945-8.118 19.599 3.166 7.642 11.934 11.293 19.599 8.118l27.716-11.48c7.654-3.17 11.288-11.945 8.118-19.599-3.17-7.653-11.944-11.286-19.599-8.118zM428.039 200.976l27.716-11.48c7.654-3.17 11.288-11.945 8.118-19.599s-11.944-11.287-19.599-8.118l-27.716 11.48c-7.654 3.17-11.288 11.945-8.118 19.599 3.166 7.642 11.934 11.292 19.599 8.118zM173.259 416.558l-11.48 27.716c-3.17 7.654.464 16.428 8.118 19.599 7.685 3.182 16.441-.495 19.599-8.118l11.48-27.716c3.17-7.654-.464-16.428-8.118-19.599-7.655-3.169-16.429.464-19.599 8.118zM338.741 95.442l11.48-27.716c3.17-7.654-.464-16.428-8.118-19.599-7.654-3.169-16.428.464-19.599 8.118l-11.48 27.716c-3.17 7.654.464 16.428 8.118 19.599 7.685 3.182 16.442-.495 19.599-8.118zM95.442 173.259l-27.716-11.48c-7.654-3.17-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l27.716 11.48c7.685 3.182 16.441-.495 19.599-8.118 3.17-7.654-.464-16.429-8.118-19.599zM455.755 322.505l-27.716-11.48c-7.654-3.169-16.428.464-19.599 8.118-3.17 7.654.464 16.428 8.118 19.599l27.716 11.48c7.685 3.182 16.441-.495 19.599-8.118 3.17-7.654-.464-16.429-8.118-19.599zM241 436v61c0 8.284 6.716 15 15 15s15-6.716 15-15v-61c0-8.284-6.716-15-15-15s-15 6.716-15 15zM271 76V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v61c0 8.284 6.716 15 15 15s15-6.716 15-15zM0 256c0 8.284 6.716 15 15 15h61c8.284 0 15-6.716 15-15s-6.716-15-15-15H15c-8.284 0-15 6.716-15 15zM497 241h-61c-8.284 0-15 6.716-15 15s6.716 15 15 15h61c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
                    : "M349.362 1.039c-2.426-1.36-5.385-1.362-7.814-.006-3.857 2.155-5.237 7.029-3.082 10.886 40.328 72.547 40.328 160.777 0 233.324-64.431 115.906-210.622 157.635-326.528 93.204-2.441-1.38-5.426-1.381-7.869-.003-3.848 2.171-5.207 7.051-3.035 10.899 45.292 81.055 130.853 131.304 223.704 131.376 92.8-.038 178.317-50.282 223.52-131.328 68.886-123.504 24.608-279.467-98.896-348.352zm15.584 418.136c-107.501 77.541-257.507 53.253-335.048-54.248 63.167 26.385 134.267 26.385 197.434 0 130.522-54.52 192.134-204.526 137.614-335.048 20.875 15.057 39.191 33.373 54.248 54.248 77.541 107.501 53.253 257.507-54.248 335.048z",
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

        function removeAllSliderSee() {
            for (let i = 0; i < slider_li.length; i++) {
                slider_li[i].classList.remove("slider-see");
            }
        }

        //link visibility on hover mouse or out
        function mouseoverlistener(i) {
            if(selectedMenuIndex !== i){ //prevent hidding selected menu item
                slider_a[i].classList.remove("slider-hidden");
            }
        }

        function mouseoutlistener(i) {
            if(selectedMenuIndex !== i){
                slider_a[i].classList.add("slider-hidden");
            }
        }

        function hoverlinkAdd() {
            for (let i = 0; i < slider_a.length ; i++) {
                //listener on list element but change link property
                slider_li[i].addEventListener('mouseover', () => mouseoverlistener(i));
                slider_li[i].addEventListener('mouseout', () => mouseoutlistener(i));
            }
        }

        function hoverlinkRemove() {
            for (let i = 0; i < slider_a.length ; i++) {
                //listener on list element but change link property
                slider_li[i].removeEventListener('mouseover', mouseoverlistener, false);
                slider_li[i].removeEventListener('mouseout', mouseoutlistener, false);
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

        //add or remove listener on list item dependant on window size at launch
        if(window.innerWidth < 1080){
            hoverlinkRemove();
        }else{
            hoverlinkAdd()
        }

        /**
         * Listener onScroll onResize
         */
        function listenerOnScroll(){
            getContainerPosition();
            let userPosition = document.documentElement.scrollTop;
            toggleDisplayThemeSwitch(userPosition);
            toggleDisplayNavbar(userPosition);
            toggleDisplayHeader(userPosition);
            if(window.innerWidth < 1025){
                toggleDisplayBurger(userPosition);
            }else{
                burger.classList.add("display-none");
                burger.classList.remove("display-block");
                linklistvisibility(userPosition);
            }
        }

        function listenerOnResize(){
            getContainerPosition();
            if(window.innerWidth < 1025){
                hoverlinkRemove();
                removeAllSliderSee();
            }else{
                linklistvisibility(document.documentElement.scrollTop);
                hoverlinkAdd();
                slider.classList.remove("width-zero");
                slider.classList.remove("width-hundred");
            }
        }

        window.addEventListener('scroll', listenerOnScroll, true);

        window.addEventListener('resize', listenerOnResize, true);
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
    }
}

export default App;
