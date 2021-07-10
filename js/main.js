'use strict';
document.addEventListener('DOMContentLoaded', ()=> {

	const project = document.querySelectorAll('.project'),
		    projectItems = document.querySelectorAll('.project__item'),
		    projectButton = document.querySelector('.project__button .button'),
		    burger = document.querySelector('.button__burger'),
				menu = document.querySelector('.header__nav-mobile'),
				closeMobileMenu = document.querySelector('.button__close-nav-mobile');

	let arr = Array.from(project);


	// Sow scrolling Jquery

	$('a[href^="#"]').click(function(){
		let anchor = $(this).attr('href');
		$('html, body').animate({
		scrollTop:  $(anchor).offset().top
		}, 600);
		});



// Latest Projects menu

	projectItems.forEach(item => {
		item.addEventListener('click', (event)=> {

			if(!(event.target.classList.contains('project__item-active'))) {
				projectItems.forEach(i => {
					if(i.classList.contains('project__item-active')) {
						i.classList.remove('project__item-active');
					}
				});
				item.classList.add('project__item-active');
			} else {
				event.target.classList.remove('project__item-active');
			}
		});
	});



	// Latest Projects render
	function renderProjectlist() {
		project.forEach(item => {
			item.classList.add('hide');
		});

		let arr = Array.from(project);
		let spliceArr = arr.splice(0, 6);
		spliceArr.forEach(item => {
			item.classList.add('show');
		});
	}

	renderProjectlist();


	projectButton.addEventListener('click', ()=> {
		arr.forEach(item => {
			item.classList.add('show');
		});
	});



	// Latest group projects

	const design = document.querySelector('.design'),
				mobile = document.querySelector('.mobile'),
				dataIllustrator = document.querySelector('.data-illustrator'),
				photograph = document.querySelector('.photograph'),
				allProjects = document.querySelector('.all-projects'),
		    designProject = document.querySelectorAll('[data-design]'),
				dataMobile = document.querySelectorAll('[data-mobile]'),
				dataillustrator = document.querySelectorAll('[data-illustrator]'),
				dataPhotograph = document.querySelectorAll('[data-photograph]');



	design.addEventListener('click', ()=> {
		let designArr = Array.from(designProject);
		let item;
		arr.forEach(item => {
			item.style.display = 'none';
		});

		designArr.forEach(link => {
			if(item !== link) {
				link.style.display = 'block';
			}
		});
	});

	mobile.addEventListener('click', ()=> {
		let mobileArr = Array.from(dataMobile);
		let item;
		arr.forEach(item => {
			item.style.display = 'none';
		});

		mobileArr.forEach(link => {
			if(item !== link) {
				link.style.display = 'block';
			}
		});
	});

	dataIllustrator.addEventListener('click', ()=> {
		let dataIllustratorArr = Array.from(dataillustrator);
		let item;
		arr.forEach(item => {
			item.style.display = 'none';
		});

		dataIllustratorArr.forEach(link => {
			if(item !== link) {
				link.style.display = 'block';
			}
		});
	});

	photograph.addEventListener('click', ()=> {
		let photographArr = Array.from(dataPhotograph);
		let item;
		arr.forEach(item => {
			item.style.display = 'none';
		});

		photographArr.forEach(link => {
			if(item !== link) {
				link.style.display = 'block';
			}
		});
	});

	allProjects.addEventListener('click', ()=> {
		arr.forEach(item => {
			item.style.display = 'block';
		});
	});



	// Video

	let playVideo = document.querySelector('.video__wrap'),
	    video = document.querySelector('.video__content'),
			videoOverlay = document.querySelector('.video__overlay');

	playVideo.addEventListener('click', ()=> {

		if(video.paused) {
			video.play();
			videoOverlay.style.opacity = 0;
		} else {
			video.pause();
			videoOverlay.style.opacity = 1;
		}
	});

	document.addEventListener('keydown', (e)=> {
		if(e.code === "Escape") {
			video.pause();
			videoOverlay.style.opacity = 1;
		}
});

	// Burger click

	burger.addEventListener('click', ()=> {
		burger.classList.add('burger__active');
		burger.style.opacity = 0;
		menu.classList.add('open-menu');
	});

	closeMobileMenu.addEventListener('click', ()=> {
		burger.classList.remove('burger__active');
		burger.style.opacity = 1;
		menu.classList.remove('open-menu');
	});


});


