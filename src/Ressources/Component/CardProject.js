import React from "react";
import '../CSS/CardProject.css'
import SVG from "../Component/SVG";

const CardProject = ({title, members, time, date, tech, github, description, photo, language}) => {
    return (
        <div className="project-card">
            <div className="overlay"/>
            <div className="project-card-recto">
                <img alt={"swapit"} src={require(`../Image/ProjectIllustration/${photo}`)}/>
                <div className={"project-card-info"}>
                    <h2>{title}</h2>
                    <div className="project-card-info-language">
                        {language.map((data, index) => (
                                <SVG path={data} key={index} id={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="project-card-verso">
                <p>{description}</p>
                <div className="project-card-verso-logo">
                    <svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
                        <path d="M210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406C273.566406 12.152344 244.230469 0 210.351562 0c-33.886718 0-63.21875 12.152344-87.191406 36.125S87.03125 89.433594 87.03125 123.3125c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0M426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437C20.9375 308.273438 16.4375 318.480469 13.125 328.828125c-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282C.34375 403.511719 0 413.679688 0 423.949219c0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
                    </svg>
                    <p>{members}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                        <path d="M248.37 240c-6.228-.037-12.333 1.733-17.575 5.096L125.348 139.648c-3.178-3.069-8.243-2.981-11.312.197-2.994 3.1-2.994 8.015 0 11.115l105.952 105.928c-2.578 4.623-3.954 9.819-4 15.112-.106 17.779 14.222 32.277 32 32.382 17.779.106 32.277-14.222 32.382-32 .106-17.779-14.221-32.277-32-32.382zm-.382 48c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.164 16-16 16z M471.917 266.316c-1.347-52.688-21.234-103.213-56.161-142.684l35.2-33.696c3.322-2.913 3.653-7.968.74-11.289-2.913-3.322-7.968-3.653-11.289-.74-.179.157-.35.321-.514.493l-35.2 33.672c-.8-.8-1.6-1.672-2.488-2.48-39.574-37.709-91.626-59.558-146.257-61.392 0-.072.04-.128.04-.2V16h24c4.418 0 8-3.582 8-8s-3.582-8-8-8h-64c-4.418 0-8 3.582-8 8s3.582 8 8 8h24v32.192C116.377 52.601 19.745 156.382 24.154 279.993c2.09 58.593 27.074 114.03 69.586 154.406 41.492 39.644 96.702 61.716 154.088 61.6 1.984 0 3.963-.027 5.936-.08 123.645-3.161 221.315-105.959 218.153-229.603zM253.356 479.928c-114.851 2.378-209.883-88.799-212.261-203.65-2.361-114.021 87.533-208.68 201.525-212.206 1.848-.072 3.672-.072 5.512-.072 114.875.134 207.891 93.367 207.757 208.242-.131 112.652-89.92 204.725-202.533 207.686z"/>
                    </svg>
                    <p>{time}</p>
                    {github &&
                    <a href={github} rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"/>
                        </svg>
                    </a>}
                </div>
            </div>
        </div>
    );
};

export default CardProject;