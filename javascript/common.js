
$(document).ready(function(){
		var pathname = window.location.pathname.split('/');
		var href = '';

		alert(pathname);

	  $('#button-en-gb').on('click', function(){
	    href = pathname.slice(1,-2) + '/' + 'en-gb' + '/' + pathname.slice(3);
	    window.location.href = href;
	  });

	  $('#button-zh-hk').on('click', function(){
	    href = pathname.slice(1,-2) + '/' + 'zh-hk' + '/' + pathname.slice(3);
	    window.location.href = href;
	  });



		$('#menu .parent').on('click', function(e) {
			e.preventDefault();

			if (!$(this).parent().hasClass('open')) {
				$(this).parent().addClass('open');
			} else {
				$(this).parent().removeClass('open');
			}

			$(this).parents('li').siblings().removeClass('open');
		});

		if (String(document.location).substr($('base').attr('href').length)) {
			$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"]').parents('li').addClass('open');
		}


});
