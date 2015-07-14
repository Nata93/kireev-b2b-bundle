/* jshint devel:true*/
console.log('It\'s alive! ALIVE!');

/* jshint ignore:start */
$(document).on('reedy', function(){
	// Carousel
	$('.b2b-carousel').slick({
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next"></button>'
	});

	// page-scroll
	$('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
});

//WOW
new WOW().init();
/* jshint ignore:end */