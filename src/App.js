import React, {Component} from 'react';
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
        // todo update photo project -> rdv psy
        // todo github
        // todo error 404
    }
}

export default App;
