$(document).ready(function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		$(this).parent().addClass('open');
		
		$(this).parent().find(' > ul').slideToggle(400);
	});
});