const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-container');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const phoneLink = document.querySelector('.phone-link');


menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-container-active');
    body.classList.toggle('lock');
    nav.classList.toggle('nav-active');
    phoneLink.classList.toggle('phone-active');
}

nav.onclick = function(){
    menuToggle.classList.remove('menu-icon-active');
    mobileNavContainer.classList.remove('mobile-container-active');
    body.classList.remove('lock');
    nav.classList.remove('nav-active');
    phoneLink.classList.remove('phone-active');
}