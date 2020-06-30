// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleSwitch = document.getElementById("labelThemeSwitch");
document.getElementById("image-top").style.backgroundImage = "url(../Image/bg_header_dark.jpg)";
let logo_eps = document.getElementsByClassName("logo-eps");

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("image-top").style.backgroundImage = "url(../Image/bg_header-light3.jpg)";
        for (let i = 0; i < logo_eps.length ; i++) {
            logo_eps[i].src = "../Ressource/EPS-version-blanche.png";
        }
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("image-top").style.backgroundImage = "url(../Image/bg_header_dark.jpg)";
        for (let i = 0; i < logo_eps.length ; i++) {
            logo_eps[i].src = "../Ressource/EPS-version-noire.png";
        }

    }
}

let light = true;
document.getElementById("image-top").style.backgroundImage = "url(../Image/bg_header_dark.jpg)";
toggleSwitch.addEventListener('change', switchTheme, false);