import React, {Component} from 'react';
import './App.css';
import "../src/Ressources/CSS/All.css"

import {Route, Switch, BrowserRouter } from 'react-router-dom';
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
        // todo relire texte et fautes
        // todo description projet
        // todo anglais
        // todo delete unused photo/files
        // todo resize photo
        // todo lighthouse google
        // todo update photo project -> rdv psy
    }
}

export default App;
