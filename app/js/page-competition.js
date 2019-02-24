
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

var modalFail = document.querySelector(".competition-form__modal-fail");
var modalOverlay = document.querySelector(".competition-form__modal-overlay");
var modalSuccess = document.querySelector(".competition-form__modal-success");

function valid(form) {

	var surname = document.querySelector(".competition-form__surname");
	var name = document.querySelector(".competition-form__name");
	var text = document.querySelector(".competition-form__text");
	var mail = document.querySelector(".competition-form__information-mail");
	var middleName = document.querySelector(".competition-form__middle-name");
	var phone = document.querySelector(".competition-form__information-phone");
	
	var arr = [surname,name,text,mail,middleName,phone];
	var fails = 0;

	for (var i=0; i<arr.length;i++) {
		if (arr[i].classList.contains("form--fail")) {
			arr[i].classList.remove('form--fail');
		};
	} ;
	for (var i=0; i<arr.length;i++) {
		if (arr[i].value == "" || arr[i].value == " ") {
			arr[i].classList.add('form--fail');
			fail();
			fails++;
		};
	};
	if(fails<1) {
		modalSuccess.classList.add('competition-form__modal--show'); 
		modalOverlay.classList.add('competition-form__modal--show');
	};
};

function fail() {
	modalFail.classList.add('competition-form__modal--show') || modalOverlay.classList.add('competition-form__modal--show');
};

var modalFailClose = document.querySelector(".competition-form__fail-btn")
modalFailClose.addEventListener("click", function(event) {
	event.preventDefault();
	modalFail.classList.remove('competition-form__modal--show');
	modalOverlay.classList.remove('competition-form__modal--show');
});

var modalSuccessClose = document.querySelector(".competition-form__success-btn")
modalSuccessClose.addEventListener("click", function(event) {
	event.preventDefault();
	modalSuccess.classList.remove('competition-form__modal--show');
	modalOverlay.classList.remove('competition-form__modal--show');
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (modalFail.classList.contains("competition-form__modal--show")){
			modalFail.classList.remove("competition-form__modal--show");
			modalOverlay.classList.remove("competition-form__modal--show");
		}
		else if (modalSuccess.classList.contains("competition-form__modal--show")) {
			modalSuccess.classList.remove("competition-form__modal--show");
			modalOverlay.classList.remove("competition-form__modal--show");
		}
	}

});