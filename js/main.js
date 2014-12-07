
$(document).ready(function() {
	$('.button').hover(function() {
		$(this).css('background-color', '#B7B7B7');
	}, function() {
		$(this).css('background-color', '#4B4B4B');
	});

	$('.icon-menu').click(function() {
		$('.menu').animate({left: '0px'}, 200);
		$('body').animate({left: '285px'}, 200);
	});
	$('.icon-close').click(function() {
		$('.menu').animate({left: '-285px'}, 200);
		$('body').animate({left: '0px'}, 200);
	});
});