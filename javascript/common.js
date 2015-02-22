function getURLVar(key) {
	var value = [];

	var query = String(document.location).split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}

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
	
	var query = String(document.location).split('?');
	
	if (query[1]) {
		$('#menu a[href="' + query[1] + '"].parent').parentsUntil('#menu', function(element) {
			$(element).addClass('open');
		});
	}
});