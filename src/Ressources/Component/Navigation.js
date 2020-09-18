import React, {Component} from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import {LanguageContext} from "../Language/LanguageContext";

class Navigation extends Component{
    state = {
        burgerActive: true,
    };

    //Arrow fx for binding
    toggleBurgerActive = () => {
        this.setState(previousState => ({
            burgerActive: !previousState.burgerActive,
        }));
        var burger = document.getElementById("burgerButton");
        let slider = document.getElementById("navbar");
        burger.classList.toggle("is-active");

        if (!this.state.burgerActive){
            slider.classList.add("width-zero");
            slider.classList.remove("width-hundred");
        }else{
            slider.classList.add("width-hundred");
            slider.classList.remove("width-zero");
        }
    };

    onClickLink = (strContainer) => {
        document.querySelector(`.${strContainer}`).scrollIntoView({
            behavior: 'smooth'
        });
    };

    render() {
        let {toggleTheme, themeLogo, onClickSwitchLanguage } = this.props;
        return(
            <div>
                <Header toggleTheme={toggleTheme} onClickSwitchLanguage={onClickSwitchLanguage} onClickBurger={this.toggleBurgerActive} themeLogo={themeLogo}/>
                <Navbar onClickLink={this.onClickLink}/>
            </div>
        );
    }
}


export default Navigation;