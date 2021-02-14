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

// swiper

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
  loop: false,

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

const slider1 = document.querySelector('.subscribe-container');

let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 3,
    spaceBetween: 0,    
    initialSlide: 1,
    centeredSlides: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
    },
    breakpoints: {
        767: {
            spaceBetween: 10, 
        },
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// inputMask
let inputs = document.querySelectorAll('.phone');
let im = new Inputmask('+375 (99) 999-99-99');
im.mask(inputs);


const flower = document.querySelectorAll('.flower');

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


// Modal
const modal = document.querySelector('.modal')
const openModalButton = document.querySelectorAll('.open__popup')
const closeModalButton = document.querySelector('.modal__close')
const overlay = document.querySelector('.modal__overlay')
const html = document.querySelector('html')

function modalWindow() {
    function getBodyScrollTop() {
      return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
    }
openModalButton.forEach(function (entry) {
  entry.addEventListener('click', e => {
  e.preventDefault();

  body.dataset.scrollY = getBodyScrollTop()
  body.style.top = `-${body.dataset.scrollY}px`
  
  modal.classList.add('modal--open')
  body.classList.add('body-lock')
  html.classList.add('html-lock')
});
});


closeModalButton.addEventListener('click', e => {
  e.preventDefault()
  
  modal.classList.remove('modal--open')
  body.classList.remove('body-lock')
  window.scrollTo(0,body.dataset.scrollY)
})

overlay.onclick = function(){
    body.classList.remove('body-lock');
    modal.classList.remove('modal--open')
    window.scrollTo(0,body.dataset.scrollY)
}
}
modalWindow();

const navLink = document.querySelectorAll('.nav__link')
const footerLink = document.querySelectorAll('.footer-nav__link')

navLink.forEach(function(item) {
  item.onclick = function () {
    
      html.classList.remove('html-lock');
};
});

footerLink.forEach(function(item) {
  item.onclick = function () {
    
      html.classList.remove('html-lock');
};
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо, ваши данные успешно отправлены!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});