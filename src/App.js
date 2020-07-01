import React, {Component} from 'react';
import './App.css';
import ContainerInfo from "./Ressources/Component/ContainerInfo";
import "../src/Ressources/CSS/All.css"
import "../src/Ressources/CSS/Top.css"
import "../src/Ressources/CSS/EducationalBackground.css"
import "../src/Ressources/CSS/Experience.css"
import "../src/Ressources/CSS/Project.css"
import ContainerEducation from "./Ressources/Component/ContainerEducation";
import ContainerExperience from "./Ressources/Component/ContainerExperience";
import ContainerProject from "./Ressources/Component/ContainerProject";

class App extends Component{
    render() {
        return(
          <ContainerProject />
        );
    }
}

export default App;
