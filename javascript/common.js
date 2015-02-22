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
	

		alert(url.substr($('base').attr('href').length + 1));
		
		
		//$('#menu a[href="' + query[1] + '"].parent').parentsUntil('#menu', function(element) {
		//	$(element).addClass('open');
		//});

});