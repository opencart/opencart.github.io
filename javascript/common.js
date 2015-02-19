$(document).ready(function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		alert('hi');
		
		$(this).parent().slideToggle(400, function() {
			$(this).addClass('open');
		});
	});
});