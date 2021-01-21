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

// reviws

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	// spaceBetween: -30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
	},
})

// phone
$(function(){
    $('#phone').mask('+7(999) 999-99-99');
  })


const flower = document.querySelectorAll('.flower');
// const watchBtn = document.querySelector('.flowers');


//   flower.forEach(function(item) {
//     item.onclick = function () {
      
//         item.classList.toggle('flower__active');
// };
// });

flower.forEach(function(item) {
  item.onclick = function () {
    flower.forEach(function(element) {
          if (element.classList.contains('flower__active')) {
              element.classList.remove('flower__active');
          }
      });
      item.classList.add('flower__active');
  };
});