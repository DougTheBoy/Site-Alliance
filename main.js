const header = document.querySelector("header")
const logoimg = document.querySelector("#header-logo")

window.addEventListener("scroll" , lowHeader);

function lowHeader() {
    if(window.pageYOffset > 100 && header.classList.contains("max")) {
        header.classList.remove("max");
        header.classList.add("min");
        logoimg.style.width = "125px";
    } else if(window.pageYOffset == 0 && header.classList.contains("min")) {
        header.classList.add("max");
        header.classList.remove("min");
        logoimg.style.width = "150px"
    }
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight)) ;
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {element.classList.remove(animationClass);}
    } );
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', function() {
    animeScroll();
})}

