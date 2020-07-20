import React from "react";

const SVG = ({className, xmlns, viewBox, path}) => {
    return (
        <svg className={className} xmlns={xmlns} viewBox={viewBox}>
            <path d={path}/>
        </svg>
    );
};

SVG.defaultProps = {
    className: "",
    xlmns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
};

export default SVG;