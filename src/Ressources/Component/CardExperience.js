import React from "react";
import PropTypes from "prop-types"
import "../CSS/CardExperience.css"
import SVG from "./SVG";

const CardExperience = ({title, company, address, date, tasks, index, logo}) => {
    return (
        <div className={index%2 === 0 ? "column" : "column column-revert" }>
            <div className="center">
                <img className="logo-company logo-eps" alt={"logo-company"} src={require(`../Image/${logo}`)} />
            </div>
            <div className="card">
                <div>
                    <h2>{title}</h2>
                    <div className="experience-line">
                        <svg className={"experience--icon"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 9.09l8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5V23h8.5c.27 0 .5-.22.5-.5V12.3c0-.23-.16-.44-.39-.49L14 10.11z"/>
                            <path d="M19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-14c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08V23z"/>
                            <path d="M13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5V23zM10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5zM10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5zM5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5V23H4v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5V23H9z"/>
                            <path d="M5 23h5v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5V23z"/>
                            <path d="M1.75.2l10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39V3.35c0-.25-.18-.46-.42-.5L1.59 1.19c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38V22.5c0 .28.23.5.5.5H4v.5c0 .28.22.5.5.5h-3C.67 24 0 23.33 0 22.5V1.68C0 1.24.19.82.53.54.87.25 1.31.13 1.75.2z"/>
                        </svg>
                        <p>{company}</p>
                    </div>
                    <div className="experience-line">
                        <SVG className={"experience--icon"} path={"M256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72zm0-112c-22.056 0-40 17.944-40 40s17.944 40 40 40 40-17.944 40-40-17.944-40-40-40z M256.001 512c-11.176 0-21.184-5.796-26.77-15.505-.059-.102-.116-.205-.173-.308L102.096 263.801C71.79 208.33 72.659 142.489 104.421 87.677 135.494 34.053 190.686 1.292 252.06.04c2.622-.054 5.258-.054 7.878 0 61.375 1.252 116.567 34.013 147.641 87.637 31.762 54.812 32.631 120.652 2.325 176.124L282.942 496.187c-.057.103-.114.206-.173.308-5.585 9.708-15.592 15.505-26.768 15.505zM256 32c-1.099 0-2.195.011-3.289.033-50.099 1.022-95.185 27.821-120.604 71.688-26.107 45.055-26.829 99.162-1.93 144.736L256 478.757l125.822-230.299c24.899-45.575 24.178-99.682-1.931-144.737-25.419-43.866-70.505-70.666-120.604-71.688-1.091-.022-2.188-.033-3.287-.033z"} />
                        <p>{address}</p>
                    </div>
                    <div className="experience-line">
                        <SVG className={"experience--icon"} path={"M446 40h-46V16c0-8.836-7.163-16-16-16s-16 7.164-16 16v24H144V16c0-8.836-7.163-16-16-16s-16 7.164-16 16v24H66C29.607 40 0 69.607 0 106v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66V106c0-36.393-29.607-66-66-66zM66 72h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16V72h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16V72h46c18.748 0 34 15.252 34 34v38H32v-38c0-18.748 15.252-34 34-34zm380 408H66c-18.748 0-34-15.252-34-34V176h448v270c0 18.748-15.252 34-34 34z"} />
                        <p>{date}</p>
                    </div>
                    {tasks.map((data, index) => (
                            <p className="experience-tasks" key={index}>{data}</p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

CardExperience.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
};


export default CardExperience;