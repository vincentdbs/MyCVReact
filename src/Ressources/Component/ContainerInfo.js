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
          <div className="center container-arrowdown">
              <svg className="arrowdonw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.667 490.667">
                  <path d="M484.075 22.149c-3.985-1.654-8.574-.745-11.627 2.304L245.333 251.589 18.219 24.453c-4.16-4.171-10.914-4.179-15.085-.019C1.123 26.44-.005 29.165 0 32.005v192c-.005 2.831 1.115 5.548 3.115 7.552l234.667 234.667c4.165 4.164 10.917 4.164 15.083 0l234.667-234.667c2.007-2.001 3.135-4.718 3.136-7.552v-192c-.002-4.316-2.604-8.207-6.593-9.856z"/>
              </svg>
          </div>
      </div>
    );
};

export default ContainerInfo