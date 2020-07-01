import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import "../CSS/All.css"
import "../CSS/Top.css"

const ContainerInfo = () => {
    return(
      <div className="container-top info container" id="image-top">
          <div className="blur"/>
          <div className="wrapper-intro-out">
              <div className="wrapper-intro-in">
                 <AboutMe/>
                 <ContactMe/>
              </div>
          </div>
      </div>
    );
};

export default ContainerInfo