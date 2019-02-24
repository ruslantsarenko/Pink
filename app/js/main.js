
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