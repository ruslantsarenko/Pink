
var headMenuBtn = document.querySelector ('.main-header__btn-nav');
	
	headMenuBtn.addEventListener("click", function(event) {
		event.preventDefault();
		var mainHead = document.querySelector ('.main-header');
		var navigationTablet = document.querySelector ('.main-header__navigation--tablet');
		navigationTablet.classList.toggle('show');
		mainHead.classList.toggle('main-header--tablet-back');
		var btnNav = document.querySelector ('.main-header__btn-nav');
		 btnNav.classList.toggle('main-header__btn-nav--close');
	});


	$(document).ready(function(){

$('.section-quote__btn-slider-next').click(function(){
	var currentImage = $('.quote-slider__item.curry');
	var currentImageIndex = $('.quote-slider__item.curry').index();
	var nextImageIndex = currentImageIndex + 1;
	var nextImage = $('.quote-slider__item').eq(nextImageIndex);
	currentImage.fadeOut(1500);
	currentImage.removeClass('curry');

	if(nextImageIndex == ($('.quote-slider__item:last').index()+1)){
		$('.quote-slider__item').eq(0).fadeIn(1500);
		$('.quote-slider__item').eq(0).addClass('curry');
	} else {
		nextImage.fadeIn(1500);
		nextImage.addClass('curry');
	}
})

$('.section-quote__btn-slider-prev').click(function(){
var currentImage = $('.quote-slider__item.curry');
	var currentImageIndex = $('.quote-slider__item.curry').index();
	var prevImageIndex = currentImageIndex - 1;
	var prevImage = $('.quote-slider__item').eq(prevImageIndex);

currentImage.fadeOut(1500);
currentImage.removeClass('curry');
prevImage.fadeIn(1500);
prevImage.addClass('curry');


});
});