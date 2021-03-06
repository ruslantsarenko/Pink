
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

	var btnCrop = document.querySelector ('.photo-filters__btn-mobile-crop');
	
	var btnContrast = document.querySelector ('.photo-filters__btn-mobile-contrast');
var rangeCrop = document.querySelector ('.photo-filters__filter-form-crop--mobile');

var rangeContrast = document.querySelector ('.photo-filters__filter-form-contrast--mobile');

$(document).ready(function(){
			$( ".photo-filters__filter-crop" ).slider({
				animate: true,
				range: "min",
				value: 0,
				min: 1,
				max: 100,
				step: 1,
			});

			$( ".photo-filters__filter-fill" ).slider({
				animate: true,
				range: "min",
				value: 0,
				min: 1,
				max: 100,
				step: 1,
			});

			$( ".photo-filters__filter-contrast" ).slider({
				animate: true,
				range: "min",
				value: 0,
				min: 1,
				max: 100,
				step: 1,
			});
		});

		

function myFunction() {
	var btnFill = document.querySelector ('.photo-filters__btn-mobile-fill');
	var btnCrop = document.querySelector ('.photo-filters__btn-mobile-crop');
var btnContrast = document.querySelector ('.photo-filters__btn-mobile-contrast');
var rangeFill = document.querySelector ('.photo-filters__filter-form-fill--mobile');
var rangeCrop = document.querySelector ('.photo-filters__filter-form-crop--mobile');
var rangeContrast = document.querySelector ('.photo-filters__filter-form-contrast--mobile');
var arr = [rangeFill,rangeCrop,rangeContrast]

for (var i=0; i<arr.length;i++) {
arr[i].style.display = "none";
}

if (btnFill.checked == true) {
rangeFill.style.display = "block";
}
else if (btnCrop.checked == true) {
rangeCrop.style.display = "block";
}
else if (btnContrast.checked == true) {
rangeContrast.style.display = "block";
}
}

