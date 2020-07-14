import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import "../CSS/All.css"
import "../CSS/Top.css"
import Bg from '../Image/bg_header_dark.jpg';

const ContainerInfo = () => {
    var style = {
        backgroundImage: `url(${Bg})`
    };

    return(
      <div className="container-top info container" id="image-top" style={style}>
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