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

	$(".about_block").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 500,
		arrows: false,
		draggable: false,
		swipe: false,
		dots: false
	});

	var allCount = $(".model_block_left_slider_item").length;
	if ($(window).width() > 1023) {
		allCount = allCount/4;
		if(allCount < 10) {
			var insertAll = "0" + allCount;
			$("#modelAll").text(insertAll);
		} else {
			$("#modelAll").text(allCount);
		}
	} else {
		// allCount = allCount/2;
		if(allCount < 10) {
			var insertAll = "0" + allCount;
			$("#modelAll").text(insertAll);
		} else {
			$("#modelAll").text(allCount);
		}
	}
		
	if ($(window).width() > 1023) {
		$("#modelCurrent").text("01");
	} else {
		$("#modelCurrent").text("02");
	}

	
	$('.model_block_left_slider').slick({
		dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
		arrows: true,
		infinite: true,
		speed: 500,
		prevArrow: $('.model_block_left_bot_prev'),
        nextArrow: $('.model_block_left_bot_next'),
		mobileFirst: true,
		responsive: [
			{
			  breakpoint: 1023,
			  settings: {
				rows: 2,
				slidesPerRow: 2,
				slidesToShow: 1,
        		slidesToScroll: 1,
				dots: false
			  }
			},
		]
	});

	$('.model_block_left_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		if ($(window).width() > 1023) {
			var insertCurrent;
			var i = (currentSlide ? currentSlide : 0) + 1;
			if(i < 10) {
				insertCurrent = "0" + i;
			} else {
				insertCurrent = i;
			}
			$("#modelCurrent").text(insertCurrent);
		} else {
			var insertCurrent;
			var i = (currentSlide ? currentSlide : 0) + 2;
			if(i < 10) {
				insertCurrent = "0" + i;
			} else {
				insertCurrent = i;
			}
			$("#modelCurrent").text(insertCurrent);
		}
	});

});