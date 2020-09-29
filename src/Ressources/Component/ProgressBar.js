import React from "react";
import "../CSS/ProgressBar.css"

const ProgressBar = ({percentage}) => {
    return (
        <div className={`progressBar `}>
            <span  style={{width: percentage + '%'}}/>
        </div>
    );
};


export default ProgressBar;