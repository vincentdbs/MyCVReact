import React, {Component} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import {LanguageContext} from "../Language/LanguageContext";

class Navigation extends Component{
    state = {
        burgerActive: true,
    };

    //Arrow fx for binding
    onClickLink = (strContainer) => {
        //Undisplay navbar
        this.toggleDiplayNavbar();

        //scroll to the section
        document.querySelector(`.${strContainer}`).scrollIntoView({
            behavior: 'smooth'
        });
    };

    //Arrow fx for binding
     toggleDiplayNavbar = () => {
         var burger = document.getElementById("burgerButton");
         let slider = document.getElementById("navbar");
         burger.classList.toggle("is-active");
         if (!burger.classList.contains('is-active')){
             slider.classList.add("width-zero");
             slider.classList.remove("width-hundred");
         }else{
             slider.classList.add("width-hundred");
             slider.classList.remove("width-zero");
         }
    };

    render() {
        let {toggleTheme, themeLogo, onClickSwitchLanguage } = this.props;
        return(
            <div>
                <Header toggleTheme={toggleTheme} onClickSwitchLanguage={onClickSwitchLanguage} onClickBurger={this.toggleDiplayNavbar} themeLogo={themeLogo}/>
                <Navbar onClickLink={this.onClickLink}/>
            </div>
        );
    }
}


export default Navigation;