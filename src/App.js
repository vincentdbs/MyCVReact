import React, {Component} from 'react';
import './App.css';
import ContainerInfo from "./Ressources/Component/ContainerInfo";
import "../src/Ressources/CSS/All.css"
import "../src/Ressources/CSS/Top.css"
import "../src/Ressources/CSS/EducationalBackground.css"
import "../src/Ressources/CSS/Experience.css"
import "../src/Ressources/CSS/Skills.css"
import "../src/Ressources/CSS/Project.css"
import ContainerProject from "./Ressources/Component/ContainerProject";
import ContainerSkills from "./Ressources/Component/ContainerSkills";

class App extends Component{
    render() {
    return(
          <ContainerSkills />
        );
    }
}

export default App;
