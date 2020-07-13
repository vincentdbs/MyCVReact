import React, {Component} from 'react';
import './App.css';
import "../src/Ressources/CSS/All.css"
import "../src/Ressources/CSS/Top.css"
import "../src/Ressources/CSS/EducationalBackground.css"
import "../src/Ressources/CSS/Experience.css"
import "../src/Ressources/CSS/Skills.css"
import "../src/Ressources/CSS/Project.css"
import {LanguageContext, dictionaryList} from './Ressources/Language/LanguageContext';
import ContainerEducation from "./Ressources/Component/ContainerEducation";
import ContainerExperience from "./Ressources/Component/ContainerExperience";
import ContainerProject from "./Ressources/Component/ContainerProject";

class App extends Component{
    state = {
      language: dictionaryList.fr,
    };

    toggleLanguage = () =>{
      this.setState(state => ({
          language:
              state.language === dictionaryList.fr
              ? dictionaryList.en
              : dictionaryList.fr,
      }));
    };

    render() {
    return(
            <LanguageContext.Provider value={this.state.language}>
                <p onClick={this.toggleLanguage}>fsdlfkdslfj</p>
                <ContainerEducation />
                <ContainerExperience />
                <ContainerProject />
            </LanguageContext.Provider>
        );
    }
}

export default App;
