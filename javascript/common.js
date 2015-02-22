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
	
	var url = String(document.location);
	
	if (query[1]) {
		alert(url.substr(0, $('base').attr('href').length));
		
		
		//$('#menu a[href="' + query[1] + '"].parent').parentsUntil('#menu', function(element) {
		//	$(element).addClass('open');
		//});
	}
});