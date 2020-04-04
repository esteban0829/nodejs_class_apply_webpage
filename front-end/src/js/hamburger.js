const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerBars = document.querySelectorAll('.hamburger-bar');
const hamburgerLinks = document.querySelectorAll('.hamburger-links');

let state = 1;

function clickStyle(){
    if(state == 1){ // The button is turned off
        hamburgerBars.forEach( bar => {
            bar.classList.remove("hamburger-on")
            bar.classList.add("hamburger-off");
        })
        hamburgerLinks.forEach(link => {link.classList.remove('active')});
        state = state*-1;
    }
    else if (state == -1)  { // the button is turned on
        hamburgerBars.forEach( bar => {
            bar.classList.remove("hamburger-off");
            bar.classList.add("hamburger-on")
        })
        hamburgerLinks.forEach(link => {link.classList.add('active')});
        state = state*-1;
    } else {
        console.log("error")
    }
}

clickStyle();

hamburgerIcon.addEventListener('click',clickStyle);