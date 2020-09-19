import React, {useEffect} from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import "../CSS/All.css"
// import "../CSS/Top.css"
import PropTypes from "prop-types";
import {svgPath} from "../Logo/svgPath";
import SVG from "./SVG";

const ContainerInfo = ({bgImage}) => {
    var style = {
        backgroundImage: `url(${bgImage})`
    };

    useEffect( () => {
        var info = document.querySelector('.container-arrowdown');
        info.addEventListener('click', function () {
            document.querySelector('.education').scrollIntoView({
                behavior: 'smooth'
            });
        });
        }
    );

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
              <SVG className={"arrowdonw"} path={svgPath.arrowdown} />
          </div>
      </div>
    );
};

ContainerInfo.propTypes = {
    bgImage: PropTypes.string.isRequired,
};

export default ContainerInfo