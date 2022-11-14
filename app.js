const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display Mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Show Active menu
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const experiencesMenu = document.querySelector('#experiences-page');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);

if(window.innerWidth > 960 && scrollPos < 600) {  
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    experiencesMenu.classList.add('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.remove('highlight');         
    experiencesMenu.classList.add('highlight');
    return;
   }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
   }
};  
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <=768 && menuBars) {
        menu.classList.toggle('is-active');
        menu.classList.remove('active');
    } 
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);
