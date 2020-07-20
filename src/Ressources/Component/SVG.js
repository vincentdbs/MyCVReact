import React from "react";

const SVG = ({className, id, xmlns, viewBox, path, onClick}) => {
    return (
        onClick === null
            ?
            (
                <svg id={id} className={className} xmlns={xmlns} viewBox={viewBox}>
                    <path d={path}/>
                </svg>
            )
            :(
                <svg id={id} className={className} xmlns={xmlns} viewBox={viewBox} onClick={() => onClick()}>
                    <path d={path}/>
                </svg>
            )
    );
};

SVG.defaultProps = {
    className: "",
    xlmns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    onClick: null,
    id: "",
};

export default SVG;