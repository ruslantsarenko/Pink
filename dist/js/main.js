var headMenuBtn=document.querySelector(".main-header__btn-nav");headMenuBtn.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".main-header");document.querySelector(".main-header__navigation--tablet").classList.toggle("show"),t.classList.toggle("main-header--tablet-back"),document.querySelector(".main-header__btn-nav").classList.toggle("main-header__btn-nav--close")}),$(document).ready(function(){$(".single-item").slick({dots:!0}),$(".center").slick({dots:!0,centerMode:!0,centerPadding:"60px",slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"6.25%",slidesToShow:1}}]})});