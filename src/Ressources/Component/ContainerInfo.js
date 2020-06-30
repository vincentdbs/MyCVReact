import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

const ContainerInfo = () => {
    return(
      <div className="container-top info container" id="image-top">
          <AboutMe/>
          <ContactMe/>
      </div>
    );
};

export default ContainerInfo