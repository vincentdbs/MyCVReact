import React from "react";
import SVG from "./SVG";

const CardSkill = ({title, skills}) => {
    return (
        <div>
            <div className="center">
                <SVG className={"skills-icon"}
                     path={"M223.453 214.053c-3.682-4.116-10.003-4.468-14.12-.786C177.265 241.952 126 219.027 126 176c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 34.715 25.407 63.595 58.6 69.057C160.75 257.185 149.386 266 136 266c-5.523 0-10 4.477-10 10s4.477 10 10 10c24.357 0 44.69-17.51 49.102-40.602 13.907-1.819 26.996-7.77 37.565-17.225 4.116-3.682 4.468-10.004.786-14.12zM116 389c-5.523 0-10 4.477-10 10s4.477 10 10 10c26.636 0 50 24.767 50 53 0 5.523 4.477 10 10 10s10-4.477 10-10c0-39.57-32.056-73-70-73zm80-80c-33.886 0-62.98 18.585-78.3 45.608-2.723 4.805-1.036 10.908 3.768 13.631 4.805 2.723 10.907 1.037 13.631-3.768C147.034 343.415 169.68 329 196 329c5.523 0 10-4.477 10-10s-4.477-10-10-10zm180-43c-13.386 0-24.75-8.815-28.6-20.943C380.593 239.595 406 210.715 406 176c0-5.523-4.478-10-10-10s-10 4.477-10 10c0 27.57-22.43 50-50 50-12.316 0-24.153-4.522-33.333-12.733-4.115-3.682-10.438-3.331-14.12.786-3.683 4.116-3.33 10.438.786 14.12 10.569 9.455 23.659 15.406 37.565 17.225C331.31 268.49 351.643 286 376 286c5.522 0 10-4.477 10-10s-4.478-10-10-10zm20 123c-37.944 0-70 33.43-70 73 0 5.523 4.478 10 10 10s10-4.477 10-10c0-28.233 23.364-53 50-53 5.522 0 10-4.477 10-10s-4.478-10-10-10zm-1.7-34.391C379.018 327.65 349.964 309 316 309c-5.522 0-10 4.477-10 10s4.478 10 10 10c26.301 0 48.964 14.411 60.899 35.471 2.727 4.811 8.834 6.489 13.631 3.769 4.805-2.723 6.492-8.826 3.77-13.631z M473.123 298.882C481.706 286 486 269.927 486 256c0-20.996-9.327-40.503-25.332-53.731C464.21 193.805 466 185.002 466 176c0-27.855-16.256-53.803-40.425-65.92 3.667-30.414-16.151-58.292-45.52-65.403C368.56 18.104 342.975 0 316 0c-25.11 0-47.631 14.646-60 36.016C243.63 14.646 221.109 0 196 0c-26.977 0-52.562 18.104-64.055 44.678-29.545 7.156-49.177 35.173-45.52 65.402C62.257 122.196 46 148.145 46 176c0 9.002 1.79 17.805 5.332 26.269C35.327 215.498 26 235.004 26 256c0 14 4.33 30.052 12.877 42.881C30.525 310.671 26 324.644 26 339c0 18.616 7.548 36.35 20.899 49.518C40.035 430.01 73.125 472 116 472c.31 0 .615-.005.914-.014C131.129 496.508 157.515 512 186 512c29.688 0 56.216-17.82 70-43.494C269.784 494.18 296.312 512 326 512c28.485 0 54.871-15.492 69.086-40.014.3.009.604.014.914.014 37.944 0 70-33.43 70-73 0-3.369-.296-6.834-.899-10.482C478.452 375.35 486 357.617 486 339c0-14.356-4.525-28.329-12.877-40.118zM246 151.381c-5.888-3.415-12.717-5.381-20-5.381-5.523 0-10 4.477-10 10s4.477 10 10 10c11.028 0 20 8.972 20 20v190.169C231.329 359.528 209.877 349 186 349c-5.523 0-10 4.477-10 10s4.477 10 10 10c33.084 0 60 26.916 60 60 0 34.149-27.477 63-60 63-23.152 0-44.465-13.691-54.299-34.88-1.813-3.905-5.919-6.208-10.2-5.726-.707.081-1.41.175-2.113.271-28.46 3.892-60.51-28.335-51.834-64.387.891-3.703-.399-7.589-3.326-10.025C52.644 367.614 46 353.671 46 339c0-9.071 2.565-17.948 7.338-25.732C65.332 323.098 80.251 329 96 329c5.523 0 10-4.477 10-10s-4.477-10-10-10c-27.139 0-50-24.77-50-53 0-17.125 8.729-32.879 23.352-42.142 4.505-2.854 5.978-8.741 3.347-13.38C68.254 192.639 66 184.403 66 176c0-26.99 22.002-53 50-53 26.636 0 50 24.767 50 53 0 5.523 4.477 10 10 10s10-4.477 10-10c0-39.57-32.056-73-70-73-3.348 0-6.678.271-9.975.784-.005-.263-.025-.519-.025-.784 0-22.317 18.117-40 40-40 10.682 0 20.73 4.161 28.292 11.715 3.907 3.903 10.238 3.899 14.142-.007 3.903-3.908 3.9-10.239-.007-14.142-9.123-9.113-20.662-14.925-33.167-16.851C164.079 30.624 178.744 20 196 20c26.636 0 50 24.766 50 53v78.381zM416 329c15.75 0 30.669-5.903 42.663-15.729C463.435 321.054 466 329.93 466 339c0 14.671-6.644 28.614-18.227 38.253-2.928 2.436-4.217 6.323-3.326 10.025 1.06 4.403 1.553 8.128 1.553 11.721 0 31.04-28.075 56.126-53.387 52.666-.703-.096-1.407-.191-2.114-.271-4.287-.485-8.388 1.821-10.199 5.726C370.466 478.309 349.151 492 326 492c-32.523 0-60-28.851-60-63 0-33.084 26.916-60 60-60 5.522 0 10-4.477 10-10s-4.478-10-10-10c-23.877 0-45.329 10.528-60 27.169V186c0-11.028 8.972-20 20-20 5.522 0 10-4.477 10-10s-4.478-10-10-10c-7.283 0-14.112 1.966-20 5.381V73c0-28.234 23.364-53 50-53 17.256 0 31.92 10.624 40.739 23.714-12.504 1.926-24.042 7.738-33.166 16.851-3.908 3.903-3.912 10.234-.009 14.142 3.903 3.908 10.236 3.911 14.142.008C345.271 67.161 355.318 63 366 63c21.993 0 40 17.787 40 40 0 .264-.02.521-.025.784-3.297-.513-6.627-.784-9.975-.784-37.944 0-70 33.43-70 73 0 5.523 4.478 10 10 10s10-4.477 10-10c0-28.233 23.364-53 50-53 27.982 0 50 25.997 50 53 0 8.403-2.254 16.639-6.699 24.478-2.63 4.639-1.157 10.526 3.348 13.38C457.271 223.121 466 238.875 466 256c0 28.331-22.941 53-50 53-5.522 0-10 4.477-10 10s4.478 10 10 10z M206 83c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm100 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"}/>
            </div>
            <h2>{title}</h2>
            <ul className="skills-list">
                {skills.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};


export default CardSkill;