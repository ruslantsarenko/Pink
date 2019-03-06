
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

$('.single-item').slick({
	dots: true
});

$('.center').slick({
dots: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '6.25%',
        slidesToShow: 1
      }
    }
  ]

});

});