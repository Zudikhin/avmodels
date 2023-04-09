$(document).ready(function () {
    "use strict";

	$(".header_block_burger").click(function() {
		$(this).toggleClass("active");
	});

	$('.main_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		speed: 1000,
		asNavFor: '.main_nav_slider'
	});

	$('.main_nav_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.main_slider',
		fade: true,
		dots: false,
		prevArrow: $('.main_nav_prev'),
        nextArrow: $('.main_nav_next')
	});

});