import React from "react";

const CardProject = ({title, members, time, date, tech, github, description}) => {
    return (
        <div className="project-card">
            <div className="des-projet">
                <h2>{title}</h2>
                <div className="projet-specs">
                    <div className="projet-specs-top">
                        <svg className="project-icon" viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
                            <path d="M210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406C273.566406 12.152344 244.230469 0 210.351562 0c-33.886718 0-63.21875 12.152344-87.191406 36.125S87.03125 89.433594 87.03125 123.3125c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0M426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437C20.9375 308.273438 16.4375 318.480469 13.125 328.828125c-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282C.34375 403.511719 0 413.679688 0 423.949219c0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
                        </svg>
                        <p>{members}</p>
                    </div>
                    <div>
                        <svg className="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                            <path d="M471.917 266.316c-1.347-52.688-21.234-103.213-56.161-142.684l35.2-33.696c3.322-2.913 3.653-7.968.74-11.289-2.913-3.322-7.968-3.653-11.289-.74-.179.157-.35.321-.514.493l-35.2 33.672c-.8-.8-1.6-1.672-2.488-2.48-39.574-37.709-91.626-59.558-146.257-61.392 0-.072.04-.128.04-.2V16h24c4.418 0 8-3.582 8-8s-3.582-8-8-8h-64c-4.418 0-8 3.582-8 8s3.582 8 8 8h24v32.192C116.377 52.601 19.745 156.382 24.154 279.993c2.09 58.593 27.074 114.03 69.586 154.406 41.492 39.644 96.702 61.716 154.088 61.6 1.984 0 3.963-.027 5.936-.08 123.645-3.161 221.315-105.959 218.153-229.603zM253.356 479.928c-114.851 2.378-209.883-88.799-212.261-203.65-2.361-114.021 87.533-208.68 201.525-212.206 1.848-.072 3.672-.072 5.512-.072 114.875.134 207.891 93.367 207.757 208.242-.131 112.652-89.92 204.725-202.533 207.686z"/>
                            <path d="M248.37 240c-6.228-.037-12.333 1.733-17.575 5.096L125.348 139.648c-3.178-3.069-8.243-2.981-11.312.197-2.994 3.1-2.994 8.015 0 11.115l105.952 105.928c-2.578 4.623-3.954 9.819-4 15.112-.106 17.779 14.222 32.277 32 32.382 17.779.106 32.277-14.222 32.382-32 .106-17.779-14.221-32.277-32-32.382zm-.382 48c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.164 16-16 16z"/>
                        </svg>
                        <p>{time}</p>
                        <svg className="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M446 40h-46V16c0-8.836-7.163-16-16-16s-16 7.164-16 16v24H144V16c0-8.836-7.163-16-16-16s-16 7.164-16 16v24H66C29.607 40 0 69.607 0 106v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66V106c0-36.393-29.607-66-66-66zM66 72h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16V72h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16V72h46c18.748 0 34 15.252 34 34v38H32v-38c0-18.748 15.252-34 34-34zm380 408H66c-18.748 0-34-15.252-34-34V176h448v270c0 18.748-15.252 34-34 34z"/>
                        </svg>
                        <p>{date}</p>
                    </div>
                    <div className="projet-specs-bottom">
                        <svg className="project-icon" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m474.5 71.5h-26.261c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h26.261c12.406 0 22.5 10.094 22.5 22.5v34.5h-482v-34.5c0-12.406 10.093-22.5 22.5-22.5h377.809c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-377.809c-20.678 0-37.5 16.822-37.5 37.5v82.681c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-33.181h482v193.366c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-242.866c0-20.678-16.822-37.5-37.5-37.5z"/><path d="m504.5 375.994c-4.143 0-7.5 3.357-7.5 7.5v19.506c0 12.406-10.094 22.5-22.5 22.5h-437c-12.407 0-22.5-10.094-22.5-22.5v-179.133c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v179.133c0 20.678 16.822 37.5 37.5 37.5h437c20.678 0 37.5-16.822 37.5-37.5v-19.506c0-4.142-3.357-7.5-7.5-7.5z"/><path d="m108.482 234.457c-2.929-2.928-7.678-2.928-10.606 0l-45.07 45.07c-1.407 1.407-2.197 3.314-2.197 5.304s.79 3.896 2.197 5.304l44.474 44.474c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.93 2.929-7.678 0-10.607l-39.171-39.17 39.767-39.767c2.93-2.93 2.93-7.678 0-10.608z"/><path d="m209.344 334.608c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l44.475-44.474c1.406-1.407 2.196-3.314 2.196-5.304s-.79-3.896-2.196-5.304l-45.071-45.07c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l39.768 39.767-39.171 39.17c-2.93 2.931-2.93 7.679-.001 10.608z"/><path d="m131.99 362.234c3.025 0 5.876-1.844 7.013-4.841l53.294-140.398c1.47-3.873-.478-8.204-4.35-9.674-3.872-1.471-8.204.478-9.673 4.35l-53.294 140.4c-1.47 3.872.478 8.203 4.35 9.673.876.333 1.775.49 2.66.49z"/><path d="m33.006 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z"/><path d="m91.166 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z"/><path d="m149.325 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z"/><path d="m335.5 242.368h47c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-47c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h47c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-47c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"/><path d="m335.5 302.368h124c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-124c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h124c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-124c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"/><path d="m335.5 362.368h87.165c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-87.165c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h87.165c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-87.165c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"/></g></g></svg>
                        <p>{tech}</p>
                    </div>
                </div>
                <a className="link-git" href={"/#"}>Github</a>
                <p>{description}</p>
            </div>
        </div>
    );
};


export default CardProject;