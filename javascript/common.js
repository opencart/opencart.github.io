$(document).ready(function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		$('#menu .parent').not($(this).parents('li')).removeClass('open');
		
		$(this).parent().addClass('open');
	});
	
	$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"]').parents('li').addClass('open');
});