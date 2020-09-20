import React, {Component} from 'react';
import './App.css';
import "../src/Ressources/CSS/All.css"
import "../src/Ressources/CSS/Scrollbar.css"

import {LanguageContext, dictionaryList} from './Ressources/Language/LanguageContext';
import ContainerEducation from "./Ressources/Component/Container/ContainerEducation";
import ContainerExperience from "./Ressources/Component/Container/ContainerExperience";
import ContainerProject from "./Ressources/Component/Container/ContainerProject";
import ContainerSkills from "./Ressources/Component/Container/ContainerSkills";
import BG_dark from "../src/Ressources/Image/bg_header_dark.jpg";
import BG_light from "./Ressources/Image/bg_header-light.jpg";
import Footer from "./Ressources/Component/Footer";
import {svgPath} from "./Ressources/Logo/svgPath";
import Navigation from "./Ressources/Component/Navigation";
import ContainerTop from "./Ressources/Component/Container/ContainerTop";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Error404 from "./Ressources/Component/Error404";
import LandingPage from "./Ressources/Component/LandingPage";

class App extends Component{
    render() {
    return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path="*" component={Error404} />
                </Switch>
            </BrowserRouter>
    );
        // todo icon dans l'onglet
        // todo error 404
    }
}

export default App;
