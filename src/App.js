import React, {Component} from 'react';
import './App.css';
import ContainerInfo from "./Ressources/Component/ContainerInfo";
import "../src/Ressources/CSS/All.css"
import "../src/Ressources/CSS/Top.css"
import "../src/Ressources/CSS/EducationalBackground.css"
import ContainerEducation from "./Ressources/Component/ContainerEducation";

class App extends Component{    render() {
        return(
          <ContainerEducation />
        );
    }
}

export default App;
