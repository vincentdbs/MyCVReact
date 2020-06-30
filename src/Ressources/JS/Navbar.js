//Get position of each container
let containers = document.getElementsByClassName("container");
let position = [];


//get list and link of the navbar
let slider = document.getElementById("navbar");
let slider_li = document.getElementsByClassName("menu-slider-li");
let slider_a = document.getElementsByClassName("menu-slider-a");
let selectedMenuIndex = 0;

//toggle theme
let togle_theme = document.getElementById("toggleWrapper");

//burger
var burger = document.getElementById("burgerButton");
var header = document.getElementById("header");

function getContainerPosition() {
    for (let i = 0; i < containers.length ; i++) {
        position[i] = getPosition(containers[i]);
    }
}

function getPosition(element) {
    let rect = element.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function toggleDisplayNavbar(userPosition){
    if (userPosition < position[1]-(position[1]/2.5)){ //prevent appearing on top container
        slider.classList.add("display-none");
        slider.classList.remove("display-block");

    }else{
        slider.classList.add("display-block");
        slider.classList.remove("display-none");
    }
}

function toggleDisplayThemeSwitch(userPosition){
    if (userPosition < position[1]){ //prevent appearing on top container
        togle_theme.classList.add("display-none");
        togle_theme.classList.remove("display-block");
    }else{
        togle_theme.classList.add("display-block");
        togle_theme.classList.remove("display-none");
    }
}

function toggleDisplayBurger(userPosition){
    if (userPosition < position[1]){ //prevent appearing on top container
        burger.classList.add("display-none");
        burger.classList.remove("display-block");
    }else{
        burger.classList.add("display-block");
        burger.classList.remove("display-none");
    }
}

function toggleDisplayHeader(userPosition){
    if (userPosition < position[1]){ //prevent appearing on top container
        header.classList.add("display-none");
        header.classList.remove("display-block");
    }else{
        header.classList.add("display-block");
        header.classList.remove("display-none");
    }
}


function displayMobileNavbar() {
    if (burger.classList.contains('is-active')){
        slider.classList.add("width-zero");
        slider.classList.remove("width-hundred");
    }else{
        slider.classList.add("width-hundred");
        slider.classList.remove("width-zero");
    }
}

//link visibility depending on user Y position
function linklistvisibility(userPosition){
    for (let i = 0; i < containers.length ; i++) {
        let positionI = position[i];
        let positionBefore = position[i-1];
        let diffBefore = positionI-positionBefore;
        let startBefore = positionBefore + diffBefore/2;
        if(i === (containers.length-1)){
            if (userPosition > startBefore){
                slider_a[i].classList.remove("slider-hidden");
                slider_li[i].classList.add("slider-see");
                selectedMenuIndex = i;
            }else{
                slider_a[i].classList.add("slider-hidden");
                slider_li[i].classList.remove("slider-see");
            }
        }else{
            let positionAfter = position[i+1];
            let diffAfter = positionAfter-positionI;
            let startAfter = positionI + diffAfter/2;
            if((userPosition < startAfter) && (userPosition > startBefore)){
                slider_a[i].classList.remove("slider-hidden");
                slider_li[i].classList.add("slider-see");
                selectedMenuIndex = i;
            }else{
                slider_a[i].classList.add("slider-hidden");
                slider_li[i].classList.remove("slider-see");
            }
        }

    }
}

function removeAllSliderSee() {
    for (let i = 0; i < slider_li.length; i++) {
        slider_li[i].classList.remove("slider-see");
    }
}

//link visibility on hover mouse or out
function mouseoverlistener(i) {
    if(selectedMenuIndex !== i){ //prevent hidding selected menu item
        slider_a[i].classList.remove("slider-hidden");
    }
}

function mouseoutlistener(i) {
    if(selectedMenuIndex !== i){
        slider_a[i].classList.add("slider-hidden");
    }
}

function hoverlinkAdd() {
    for (let i = 0; i < slider_a.length ; i++) {
        //listener on list element but change link property
        slider_li[i].addEventListener('mouseover', () => mouseoverlistener(i));
        slider_li[i].addEventListener('mouseout', () => mouseoutlistener(i));
    }
}

function hoverlinkRemove() {
    for (let i = 0; i < slider_a.length ; i++) {
        //listener on list element but change link property
        slider_li[i].removeEventListener('mouseover', mouseoverlistener, false);
        slider_li[i].removeEventListener('mouseout', mouseoutlistener, false);
    }
}



let positionUser = document.documentElement.scrollTop;
getContainerPosition();
console.log(position);
toggleDisplayBurger(positionUser);
toggleDisplayHeader(positionUser);
toggleDisplayThemeSwitch(positionUser);
toggleDisplayNavbar(positionUser);

//add or remove listener on list item dependant on window size at launch
if(window.innerWidth < 1080){
    hoverlinkRemove();
}else{
    hoverlinkAdd()
}


burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
});

window.addEventListener("scroll", ()=>{
    getContainerPosition();
    let userPosition = document.documentElement.scrollTop;
    toggleDisplayThemeSwitch(userPosition);
    toggleDisplayNavbar(userPosition);
    toggleDisplayHeader(userPosition);
    if(window.innerWidth < 1080){
        toggleDisplayBurger(userPosition);
    }else{
        burger.classList.add("display-none");
        burger.classList.remove("display-block");
        linklistvisibility(userPosition);
    }
});

window.addEventListener("resize", ()=>{
    getContainerPosition();
    if(window.innerWidth < 1080){
        hoverlinkRemove();
        removeAllSliderSee();
    }else{
        linklistvisibility(document.documentElement.scrollTop);
        hoverlinkAdd();
        slider.classList.remove("width-zero");
        slider.classList.remove("width-hundred");
    }
});
