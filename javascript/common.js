
$(document).ready(function(){
		var pathname = window.location.pathname.split('/');
		var href = '';

	  $('#button-en-gb').on('click', function(){
	    href = 'en-gb' + '/' + pathname.slice(2,-1);
	    //window.location.href = href;
	  });

	  $('#button-zh-hk').on('click', function(){
	    href = 'zh-hk' + '/' + pathname.slice(2,-1);
	    //window.location.href = href;
	  });
		alert('en-gb' + '/' + pathname.slice(2,-1));



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
