'use strict';

const slider1 = document.querySelector('.swiper-header-container'),
			slider2 = document.querySelector('.swiper-posts-container');



let swiperSlider1 = new Swiper(slider1, {
	direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});

let swiperSlider2 = new Swiper(slider2, {
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 25,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

	breakpoints: {
		820: {
		 slidesPerView: 3,
		},
		 520: {
			slidesPerView: 2,
	 	},
		 10: {
			slidesPerView: 1,
	 	}
	},

  navigation: {
    nextEl: '.swiper2-button-next',
    prevEl: '.swiper2-button-prev',
  },
});

