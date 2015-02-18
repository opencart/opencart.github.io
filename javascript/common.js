$(document).on('ready', function() {
	$('#menu .parent').on('click', function() {
		$(this).parent().toggleClass('open');
	});
});