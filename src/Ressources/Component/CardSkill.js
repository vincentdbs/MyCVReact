import React from "react";

const CardSkill = ({title, skills}) => {
    return (
        <div>
            <div className="center">
                {/*todo passer le svg dans les props*/}
                <svg className="skills-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M108.482 234.457c-2.929-2.928-7.678-2.928-10.606 0l-45.07 45.07c-1.407 1.407-2.197 3.314-2.197 5.304s.79 3.896 2.197 5.304l44.474 44.474c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.93 2.929-7.678 0-10.607l-39.171-39.17 39.767-39.767c2.93-2.93 2.93-7.678 0-10.608zM209.344 334.608c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l44.475-44.474c1.406-1.407 2.196-3.314 2.196-5.304s-.79-3.896-2.196-5.304l-45.071-45.07c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l39.768 39.767L209.345 324c-2.93 2.931-2.93 7.679-.001 10.608zM131.99 362.234c3.025 0 5.876-1.844 7.013-4.841l53.294-140.398c1.47-3.873-.478-8.204-4.35-9.674-3.872-1.471-8.204.478-9.673 4.35l-53.294 140.4c-1.47 3.872.478 8.203 4.35 9.673.876.333 1.775.49 2.66.49zM33.006 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5zM91.166 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5zM149.325 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5zM335.5 242.368h47c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-47c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h47c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-47c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5zM335.5 302.368h124c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-124c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h124c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-124c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5zM335.5 362.368h87.165c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5H335.5c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h87.165c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5H335.5c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z M474.5 71.5h-26.261c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H474.5c12.406 0 22.5 10.094 22.5 22.5v34.5H15V109c0-12.406 10.093-22.5 22.5-22.5h377.809c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H37.5C16.822 71.5 0 88.322 0 109v82.681c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5V158.5h482v193.366c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V109c0-20.678-16.822-37.5-37.5-37.5zM504.5 375.994c-4.143 0-7.5 3.357-7.5 7.5V403c0 12.406-10.094 22.5-22.5 22.5h-437C25.093 425.5 15 415.406 15 403V223.867c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5V403c0 20.678 16.822 37.5 37.5 37.5h437c20.678 0 37.5-16.822 37.5-37.5v-19.506c0-4.142-3.357-7.5-7.5-7.5z"/>
                </svg>
            </div>
            <h2>{title}</h2>
            <ul className="skills-list">
                {skills.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};


export default CardSkill;