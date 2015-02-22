$(document).ready(function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		if (!$(this).parent().hasClass('open')) {
			$(this).parent().addClass('open');
		} else {
			$(this).parent().removeClass('open');
		}
		
		$(this).parent().find(' > ul').slideToggle(400);
	});
	
	$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"].parent').parentsUntil('#menu', function(element) {
		$(element).addClass('open');
	});
});