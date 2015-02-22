$(document).ready(function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		if (!$(this).parent().hasClass('open')) {
			$(this).parent().addClass('open');
		} else {
			$(this).parent().removeClass('open');
		}
	});
	
	console.log(String(document.location).substr($('base').attr('href').length));
	
	$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"].parent').parentsUntil('#menu', function(element) {
		$(element).addClass('open');
	});
});